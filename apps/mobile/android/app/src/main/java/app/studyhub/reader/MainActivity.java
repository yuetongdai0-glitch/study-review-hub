package app.studyhub.reader;

import android.os.Bundle;
import android.webkit.WebSettings;

import com.getcapacitor.BridgeActivity;

/**
 * 注册应用内更新插件。
 *
 * @remarks 内容走远程网页（server.url），所以 WebView 不应该长期缓存 HTML：
 * 这里用 LOAD_DEFAULT 让 HTTP 头正常生效（HTML 已声明 no-store），
 * 而「点刷新必须拿最新」由 AppUpdatePlugin.reloadWeb 清缓存兜底。
 * 之前用 LOAD_NO_CACHE 会让静态资源也无法复用，页面明显变慢。
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppUpdatePlugin.class);
        super.onCreate(savedInstanceState);

        if (getBridge() != null && getBridge().getWebView() != null) {
            WebSettings settings = getBridge().getWebView().getSettings();
            settings.setCacheMode(WebSettings.LOAD_DEFAULT);
            settings.setDomStorageEnabled(true);
        }
    }

    @Override
    public void onBackPressed() {
        // WebView 内优先走历史栈；到根目录再退出，避免一按就关掉整个应用。
        if (getBridge() != null && getBridge().getWebView() != null && getBridge().getWebView().canGoBack()) {
            getBridge().getWebView().goBack();
            return;
        }
        super.onBackPressed();
    }
}
