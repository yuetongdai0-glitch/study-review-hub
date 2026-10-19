package app.studyhub.reader;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

/**
 * 注册应用内更新插件。
 * Capacitor 允许在 Activity 里注册本地插件，省掉单独发一个原生插件包。
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppUpdatePlugin.class);
        super.onCreate(savedInstanceState);
    }
}
