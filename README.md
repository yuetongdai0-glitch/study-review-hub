# 备考复习 · Study Hub

pnpm monorepo：一个 React 阅读站 + 一个移动端壳 + 一套发布链路。

```
.
├── apps/
│   ├── web/                    React + Vite + Ant Design + Tailwind + Zustand
│   │   ├── src/
│   │   │   ├── router/         路由常量 + 模块表（侧栏/首页/面包屑同源）
│   │   │   ├── layouts/        AppLayout（顶栏 + 目录 + 内容区）
│   │   │   ├── components/
│   │   │   │   ├── content/    内容原语：Block/Callout/Example/PointList/DataTable…
│   │   │   │   ├── features/   ModuleHero · ReadingPage · AppHeader · AppSidebar
│   │   │   │   └── base/       ThemeToggle 等基础件
│   │   │   ├── pages/
│   │   │   │   ├── home/       总览
│   │   │   │   ├── reading/    11 个阅读模块（每节一个组件）
│   │   │   │   └── tools/      草稿纸 / 答题纸 / 答题卡
│   │   │   ├── store/          appStore（主题·折叠·侧栏）+ sectionStore（章节锚点）
│   │   │   ├── theme/          设计令牌 → CSS 变量 → Tailwind → antd token
│   │   │   └── styles.css      基础层 + 组件层（全站唯一视觉定义处）
│   │   ├── pages/              旧静态页，仅作内容回归基线（不参与构建）
│   │   ├── tools/              迁移器 / 内容校验 / 三套渲染验收脚本
│   │   └── tests/              33 条断言（结构 + 内容无损 + 架构）
│   └── mobile/                 Capacitor 壳（Android + iOS）
│       ├── android/            原生工程（含应用内更新插件）
│       ├── ios/                原生工程
│       ├── scripts/            打包 / 签名 / 版本同步
│       └── tests/              发布规则单测（7 条）
├── packages/release/           版本比对、清单生成、地址白名单（纯函数，两端共用）
├── scripts/                    发布 / 部署 / 清理
└── 临时资料/                   原始 PDF（不入库）
```

## 常用命令

| 命令 | 作用 |
|---|---|
| `pnpm install` | 安装全部 workspace 依赖（**本机需 `env -u NODE_OPTIONS`**） |
| `pnpm test` | 跑 web 33 条 + mobile 7 条断言 |
| `pnpm dev` | 起 Vite 开发服务器（8770） |
| `pnpm build` | 类型检查 + 构建 `apps/web/dist` |
| `pnpm deploy:web` | 构建并推送到主仓库 `gh-pages`，线上生效 |
| `pnpm release` | 建站 → 判断要不要重新打包 → 出 APK/IPA → 推送发布仓库 → 清理本地 |
| `pnpm release --force` | 忽略指纹，强制重打包 |
| `pnpm release --android` / `--ios` | 只打单个平台 |
| `pnpm release:web` | 只更新网页与下载页，不碰安装包 |
| `pnpm clean` | 清掉全部可再生的构建产物 |

## 改内容怎么改

- **改某一节正文**：直接编辑 `src/pages/reading/<模块>/sections/<节>.tsx`，一个文件一节。
- **改版式**：只动 `src/styles.css` 的组件层（`.section` / `.example` / `.key-box` …），全站生效。
- **加科目**：`src/router/routeRegistry.ts` 加一条 + `routePaths.ts` 加路径 + `src/pages/reading/<新模块>/`，
  侧栏、首页卡片、面包屑会自动出现，不用改三处。
- **新增内容原语**：`src/components/content/index.tsx` 加组件 + styles.css 加样式。
- **回归保护**：`tests/content.test.mjs` 会逐节比对旧 HTML 与 TSX 文本，改版式丢了正文会直接失败。

## 验收脚本

| 脚本 | 检查什么 |
|---|---|
| `tools/verify-content.mjs` | 逐页逐节比对旧 HTML 与新 TSX 的可见文本 |
| `tools/smoke.mjs` | 10 条路由的控制台错误、横向溢出、截图（`.smoke/`） |
| `tools/smoke-mobile.mjs` | 390 / 768 两档视口的溢出、示意图横滚、表格撑破 |
| `tools/smoke-interactive.mjs` | 草稿纸真实画笔迹 + 撤销；答题纸中文落格 + 自动存档 |
| `tools/migrate-legacy.mjs` | 旧 HTML → TSX（内容基线变更时才需要重跑） |

## 缓存策略（为什么改了就能立刻看到）

- **HTML 永不缓存**：Service Worker 对导航请求走 `cache: 'no-store'`，并附带 `_build` 参数
  绕开 GitHub Pages 给 HTML 打的 `max-age=600`；页面 head 里同时写 `no-store` meta 兜底。
- **静态资源按构建号缓存**：构建时给 `css/js/webp` 等追加 `?v=<buildId>`，SW 缓存桶也按
  buildId 命名。换构建 = 换桶 + 换 URL，不会读到旧资源；同一构建内命中缓存，翻页很快。
- **构建号只由内容决定**：内容没变，buildId 就不变——这也是移动端判断「要不要重打包」的依据。
- **全局刷新**：每页左下角有个刷新按钮。点一下 = 检查新版本并换到最新；长按 = 清空全部缓存后重载；
  发现新构建时它自己会变成高亮提示条。

## 发布链路

只有 `study-hub-releases` 仓库存安装包（**永远只留两个最新包**：一个 APK、一个 IPA）。
主仓库不存任何二进制，打完就删。

```
pnpm release
  ├─ ① 构建 apps/web/dist
  ├─ ② 算指纹（版本号 + 网页内容 + 原生源码）
  │     └─ 与上次一致 → 跳过打包，只更新清单/下载页
  ├─ ③ Gradle assembleRelease → 签名 APK；xcodebuild → 组装 IPA
  ├─ ④ 复制到 ../zl-study-hub-releases/releases/，删掉旧包
  ├─ ⑤ 生成 app-version.json + 下载页
  ├─ ⑥ 推送发布仓库
  └─ ⑦ 删除本地 dist / build / Gradle 输出（约 300 MiB）
```

发布后：
- 下载页 https://yuetongdai0-glitch.github.io/study-hub-releases/
- 网页版 https://yuetongdai0-glitch.github.io/study-review-hub/

## 版本与签名（改版本时才需要动）

- 版本号唯一来源：根 `package.json` 的 `version`（形如 `2.0.1`）。
- 安卓 `versionCode` = 主×10000 + 次×100 + 修订，由脚本推导后写进
  `apps/mobile/android/app/version.properties`，不要手改。
- 签名用 `apps/mobile/android/keystore/study-hub.jks`（首次打包自动生成，已 gitignore）。
  **这个文件和 `password.txt` 必须自己备份**：应用内更新要求新包与已装包同签名，丢了只能卸载重装。
- iOS 只能出未签名 IPA，安装需用 AltStore / Sideloadly / Xcode 以个人 Apple ID 重签。

## 环境要求

- Node ≥ 22.12、pnpm ≥ 10
- **JDK 21**（Gradle/AGP 8 不接受 24；本机已装在
  `~/Library/Java/JavaVirtualMachines/temurin-21.jdk`）
- Android SDK（compileSdk 35）、Xcode 16+ 与 CocoaPods

## 注意

- 本仓库开发时若 `NODE_OPTIONS` 被注入了 fs shim，pnpm 建符号链接会失败，
  安装依赖请用 `env -u NODE_OPTIONS pnpm install`。
