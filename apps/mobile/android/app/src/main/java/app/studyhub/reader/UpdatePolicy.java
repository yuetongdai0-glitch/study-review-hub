package app.studyhub.reader;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

/**
 * 更新清单与下载地址的纯校验规则。
 * 抽成无 Android 依赖的类，才能用普通 JVM 单测覆盖，不必起模拟器。
 */
public final class UpdatePolicy {
    /** 安装包上限：超过这个体积说明清单被篡改或下错了文件。 */
    public static final long MAX_APK_BYTES = 200L * 1024 * 1024;

    /** 允许的下载主机：GitHub 发行页与 GitHub Pages。 */
    private static final List<String> HOSTS = Arrays.asList(
        "github.com",
        "objects.githubusercontent.com",
        "release-assets.githubusercontent.com",
        "raw.githubusercontent.com"
    );

    private UpdatePolicy() {}

    /**
     * 校验下载地址是否可信。
     *
     * @param target 清单里的 apkUrl。
     * @return 是否允许下载。
     */
    public static boolean allowedDownload(String target) {
        if (target == null || target.isEmpty()) return false;
        try {
            URI uri = new URI(target);
            if (!"https".equalsIgnoreCase(uri.getScheme())) return false;
            if (uri.getRawUserInfo() != null || uri.getRawFragment() != null) return false;
            String host = uri.getHost();
            if (host == null) return false;
            host = host.toLowerCase(Locale.ROOT);
            if (HOSTS.contains(host)) return true;
            /* GitHub Pages 的静态直链都落在 <owner>.github.io 下。 */
            return host.endsWith(".github.io");
        } catch (URISyntaxException ignored) {
            return false;
        }
    }

    /**
     * 校验 SHA-256 形态：必须完整 64 位十六进制。
     *
     * @param digest 清单摘要。
     * @return 是否合法。
     */
    public static boolean validDigest(String digest) {
        return digest != null && digest.matches("(?i)[0-9a-f]{64}");
    }

    /**
     * 是否构成升级。
     *
     * @param latest 清单 versionCode。
     * @param installed 已安装 versionCode。
     * @return 是否需要更新。
     */
    public static boolean isUpgrade(long latest, long installed) {
        return latest > installed && latest > 0 && latest <= Integer.MAX_VALUE;
    }

    /**
     * 清单里的包名必须与本应用一致，避免被引到别的应用上。
     *
     * @param packageId 清单包名。
     * @param expected 本应用包名。
     * @return 是否匹配。
     */
    public static boolean matchesPackage(String packageId, String expected) {
        return expected != null && expected.equals(packageId);
    }
}
