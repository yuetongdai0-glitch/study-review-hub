package app.studyhub.reader;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 应用内更新：读清单 → 比对版本 → 下载 → 校验摘要与签名 → 调系统安装器。
 * 全程不打开浏览器，也不依赖任何第三方更新 SDK。
 */
@CapacitorPlugin(name = "StudyHubUpdater")
public class AppUpdatePlugin extends Plugin {

    private static final String STATE_IDLE = "idle";
    private static final String STATE_CHECKING = "checking";
    private static final String STATE_AVAILABLE = "available";
    private static final String STATE_CURRENT = "current";
    private static final String STATE_DOWNLOADING = "downloading";
    private static final String STATE_READY = "ready";
    private static final String STATE_ERROR = "error";

    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private volatile String state = STATE_IDLE;
    private volatile String error = "";
    private volatile int progress = 0;
    private volatile JSONObject manifest;
    private volatile File readyFile;
    private volatile int generation = 0;

    /**
     * 当前更新状态，供网页轮询进度。
     *
     * @return 状态对象。
     */
    private JSObject snapshot() {
        JSObject body = new JSObject();
        body.put("state", state);
        body.put("error", error);
        body.put("progress", progress);
        if (manifest != null) {
            body.put("versionName", manifest.optString("versionName"));
            body.put("versionCode", manifest.optLong("versionCode"));
        }
        try {
            PackageInfo installed = installedInfo();
            body.put("installedVersionName", installed.versionName);
            body.put("installedVersionCode", installedVersionCode(installed));
            body.put("installed", true);
        } catch (Exception ignored) {
            body.put("installed", false);
        }
        return body;
    }

    /**
     * 状态查询。
     *
     * @param call Capacitor 调用。
     */
    @PluginMethod
    public void status(PluginCall call) {
        call.resolve(snapshot());
    }

    /**
     * 拉取远端清单并判断是否可升级。
     *
     * @param call 需提供 manifestUrl。
     */
    @PluginMethod
    public void check(final PluginCall call) {
        final String manifestUrl = call.getString("manifestUrl");
        if (manifestUrl == null || !manifestUrl.startsWith("https://")) {
            call.reject("更新清单地址必须是 HTTPS");
            return;
        }
        state = STATE_CHECKING;
        error = "";
        final int job = ++generation;
        executor.execute(() -> {
            try {
                JSONObject body = fetchJSON(manifestUrl);
                PackageInfo installed = installedInfo();
                long installedCode = installedVersionCode(installed);
                JSONObject android = body.optJSONObject("android");
                if (android == null) throw new IOException("清单缺少 android 段");
                if (!UpdatePolicy.matchesPackage(body.optString("appId"), getContext().getPackageName())) {
                    throw new IOException("清单包名与应用不一致");
                }
                if (!UpdatePolicy.validDigest(android.optString("sha256"))) throw new IOException("清单摘要非法");
                if (!UpdatePolicy.allowedDownload(android.optString("apkUrl"))) throw new IOException("安装包来源未授权");
                if (android.optInt("minSdk", 0) > Build.VERSION.SDK_INT) throw new IOException("当前系统版本过低");

                synchronized (this) {
                    if (job != generation) {
                        call.reject("更新检查已取消");
                        return;
                    }
                    manifest = android;
                    state = UpdatePolicy.isUpgrade(android.optLong("versionCode"), installedCode)
                        ? STATE_AVAILABLE
                        : STATE_CURRENT;
                }
                call.resolve(snapshot());
            } catch (Exception failure) {
                fail(job, failure);
                call.reject(message(failure));
            }
        });
    }

    /**
     * 下载清单里的安装包；进度通过 status 轮询。
     *
     * @param call Capacitor 调用。
     */
    @PluginMethod
    public void download(final PluginCall call) {
        final JSONObject body = manifest;
        if (body == null) {
            call.reject("请先检查可用更新");
            return;
        }
        final int job = ++generation;
        state = STATE_DOWNLOADING;
        error = "";
        progress = 0;
        call.resolve(snapshot());

        executor.execute(() -> {
            File temp = new File(getContext().getCacheDir(), "study-hub-update-" + job + ".apk.part");
            HttpURLConnection connection = null;
            try {
                connection = (HttpURLConnection) new URL(body.getString("apkUrl")).openConnection();
                connection.setConnectTimeout(15000);
                connection.setReadTimeout(30000);
                connection.setInstanceFollowRedirects(true);
                connection.setRequestProperty("Accept", "application/octet-stream");
                int code = connection.getResponseCode();
                if (code < 200 || code >= 300) throw new IOException("下载失败：HTTP " + code);
                long expected = connection.getContentLengthLong();
                if (expected > UpdatePolicy.MAX_APK_BYTES) throw new IOException("安装包超过体积上限");

                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                long total = 0;
                try (InputStream input = connection.getInputStream();
                     FileOutputStream output = new FileOutputStream(temp)) {
                    byte[] buffer = new byte[32768];
                    int count;
                    while ((count = input.read(buffer)) != -1) {
                        if (job != generation) throw new IOException("下载已取消");
                        total += count;
                        if (total > UpdatePolicy.MAX_APK_BYTES) throw new IOException("安装包超过体积上限");
                        digest.update(buffer, 0, count);
                        output.write(buffer, 0, count);
                        if (expected > 0) progress = (int) Math.min(99, total * 100 / expected);
                    }
                    output.getFD().sync();
                }
                if (total == 0) throw new IOException("下载内容为空");
                if (!hex(digest.digest()).equalsIgnoreCase(body.getString("sha256"))) {
                    throw new IOException("安装包校验失败，请重试");
                }
                verifySigner(temp);
                synchronized (this) {
                    if (job != generation) throw new IOException("下载已取消");
                    readyFile = temp;
                    state = STATE_READY;
                    progress = 100;
                }
            } catch (Exception failure) {
                //noinspection ResultOfMethodCallIgnored
                temp.delete();
                fail(job, failure);
            } finally {
                if (connection != null) connection.disconnect();
            }
        });
    }

    /**
     * 调起系统安装器。
     *
     * @param call Capacitor 调用。
     */
    @PluginMethod
    public void install(PluginCall call) {
        File file = readyFile;
        if (file == null || !file.exists()) {
            call.reject("没有可安装的更新包");
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
            && !getContext().getPackageManager().canRequestPackageInstalls()) {
            /* 引导到「允许安装未知应用」页面，装完再回来点一次即可。 */
            Intent settings = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES);
            settings.setData(Uri.parse("package:" + getContext().getPackageName()));
            settings.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(settings);
            call.reject("请先允许本应用安装未知来源应用");
            return;
        }
        try {
            Uri uri = FileProvider.getUriForFile(
                getContext(),
                getContext().getPackageName() + ".fileprovider",
                file
            );
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(uri, "application/vnd.android.package-archive");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            state = STATE_IDLE;
            progress = 0;
            call.resolve(snapshot());
        } catch (Exception failure) {
            call.reject("无法调起安装器：" + message(failure));
        }
    }

    /**
     * 读取已安装版本信息。
     *
     * @return PackageInfo。
     * @throws PackageManager.NameNotFoundException 包不存在时抛出。
     */
    private PackageInfo installedInfo() throws PackageManager.NameNotFoundException {
        PackageManager manager = getContext().getPackageManager();
        return manager.getPackageInfo(getContext().getPackageName(), 0);
    }

    /**
     * 取 versionCode，兼容新旧 API。
     *
     * @param info 包信息。
     * @return versionCode。
     */
    private long installedVersionCode(PackageInfo info) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) return info.getLongVersionCode();
        //noinspection deprecation
        return info.versionCode;
    }

    /**
     * 新包签名必须与已安装包一致，防止被替换成他人签名版本。
     *
     * @param apk 下载完成的安装包。
     * @throws Exception 签名不一致或读取失败。
     */
    private void verifySigner(File apk) throws Exception {
        PackageManager manager = getContext().getPackageManager();
        PackageInfo candidate = manager.getPackageArchiveInfo(apk.getAbsolutePath(), PackageManager.GET_SIGNATURES);
        PackageInfo installed = manager.getPackageInfo(getContext().getPackageName(), PackageManager.GET_SIGNATURES);
        if (candidate == null || candidate.signatures == null || candidate.signatures.length == 0) {
            throw new IOException("无法读取安装包签名");
        }
        String expected = signatureDigest(installed.signatures);
        String actual = signatureDigest(candidate.signatures);
        if (!expected.equals(actual)) throw new IOException("安装包签名与应用不一致，已阻止安装");
    }

    /**
     * 取首个签名的 SHA-256。
     *
     * @param signatures 签名数组。
     * @return 十六进制摘要。
     * @throws Exception 摘要算法不可用。
     */
    private String signatureDigest(Signature[] signatures) throws Exception {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        return hex(digest.digest(signatures[0].toByteArray()));
    }

    /**
     * 下载并解析 JSON。
     *
     * @param target 清单地址。
     * @return JSON 对象。
     * @throws Exception 网络或解析失败。
     */
    private JSONObject fetchJSON(String target) throws Exception {
        HttpURLConnection connection = (HttpURLConnection) new URL(target).openConnection();
        connection.setConnectTimeout(15000);
        connection.setReadTimeout(20000);
        connection.setRequestProperty("Cache-Control", "no-cache");
        try {
            int code = connection.getResponseCode();
            if (code < 200 || code >= 300) throw new IOException("清单读取失败：HTTP " + code);
            try (InputStream input = connection.getInputStream()) {
                java.io.ByteArrayOutputStream buffer = new java.io.ByteArrayOutputStream();
                byte[] chunk = new byte[8192];
                int read;
                while ((read = input.read(chunk)) != -1) {
                    buffer.write(chunk, 0, read);
                    if (buffer.size() > 512 * 1024) throw new IOException("清单体积异常");
                }
                return new JSONObject(buffer.toString("UTF-8"));
            }
        } finally {
            connection.disconnect();
        }
    }

    /**
     * 记录失败状态。
     *
     * @param job 任务代号。
     * @param failure 异常。
     */
    private void fail(int job, Exception failure) {
        synchronized (this) {
            if (job == generation) {
                state = STATE_ERROR;
                error = message(failure);
            }
        }
    }

    /**
     * 清缓存并重新加载线上网页。
     *
     * @param call Capacitor 调用。
     * @remarks 壳加载的是远程页面，「刷新」必须真正回到服务器取最新内容：
     * WebView 的 HTTP 缓存与资源缓存都要清掉，否则会继续用旧 JS/CSS。
     * 这正是用户反馈的「点刷新还是旧的」的根因。
     */
    @PluginMethod
    public void reloadWeb(final PluginCall call) {
        final String url = call.getString("url");
        if (url == null || !url.startsWith("https://")) {
            call.reject("刷新地址必须是 HTTPS");
            return;
        }
        getActivity().runOnUiThread(() -> {
            android.webkit.WebView webView = getBridge().getWebView();
            try {
                // clearCache(true) 清 HTTP 与资源缓存；clearHistory 避免返回到旧页面。
                webView.clearCache(true);
                webView.clearHistory();
            } catch (Exception ignored) {
                // 清缓存失败仍继续重载，用户至少能拿到未缓存部分。
            }
            /*
             * 注意：这里**不能**调 clearStorage()。
             * 草稿纸笔迹、答题纸草稿、答题卡记录都存在 WebStorage 里，
             * 清缓存是为了拿最新网页，不该把用户的资料一起删掉。
             */
            // 加时间戳，绕开任何中间层与 Service Worker 对 HTML 的残留。
            String fresh = url + (url.contains("?") ? "&" : "?") + "_r=" + System.currentTimeMillis();
            webView.loadUrl(fresh);
            call.resolve();
        });
    }

    /**
     * 取异常文案。
     *
     * @param failure 异常。
     * @return 可展示文案。
     */
    private String message(Exception failure) {
        String text = failure.getMessage();
        return text == null || text.isEmpty() ? failure.getClass().getSimpleName() : text;
    }

    /**
     * 字节数组转十六进制。
     *
     * @param bytes 原始摘要。
     * @return 小写十六进制。
     */
    private static String hex(byte[] bytes) {
        StringBuilder builder = new StringBuilder(bytes.length * 2);
        for (byte value : bytes) builder.append(String.format("%02x", value));
        return builder.toString();
    }
}
