# EasyImage-Browser-Extension

简单图床的浏览器上传插件

### 更新日志

- v0.0.2 2021-12-31

* 优化内容显示
* 完善配置中心
* ID：popalfmccplcolnnojdcemeeiifoafnj

- v0.0.2 2021-12-30

* 初始化

## MV2 -> MV3 升级说明

- 已将扩展从 Manifest V2 升级到 Manifest V3。
- 变更摘要：
  - 把 `manifest_version` 改为 3；将后台脚本迁移为 Service Worker（使用 scripts/background.js）。
  - 把 browser_action 改为 action，并把脚本中的 chrome.browserAction 替换为 chrome.action。
  - 将主机权限从 permissions 移动到 host_permissions，并移除 webRequest / webRequestBlocking（仓库中未检测到使用）。

### 本地加载与测试

1. 打开 Chrome，访问 chrome://extensions，开启“开发者模式”。
2. 点击“加载已解压的扩展程序”，选择本仓库下的 Chrome 目录。