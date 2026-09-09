<div align="center">
  <a href="https://github.com/Core-RCE/vue-vben-admin-lite">
    <img alt="VbenAdmin Logo" width="215" src="https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp">
  </a>
  <br>
  <br>

[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

  <h1>Vue Vben Admin Lite</h1>
</div>

**中文** | [English](./README.md) | [日本語](./README.ja-JP.md)

## 简介

Vue Vben Admin Lite 是基于 [Vben Admin](https://github.com/vbenjs/vue-vben-admin) **5.7.0 冻结精简**的中后台模板，采用 Vue 3、TypeScript、Vite 和 Ant Design Vue。项目旨在减少原版体量和频繁跟进上游提交带来的维护成本，为后续业务开发保留必要的基础能力。

当前仅保留 `apps/web-antd` 和 `apps/backend-mock`，沿用共享包与构建工具的 Monorepo 结构。其他 UI 应用、playground 和本地文档站均已移除，不以持续同步上游新版本为目标。

## 特性

- **精简导航**：分析页作为一级导航，状态页菜单包含 403、404、500、离线和即将上线五类页面
- **简化登录**：仅保留居中的账号密码登录，移除角色选择、注册、手机号登录、扫码登录、第三方登录和锁屏
- **移除演示**：删除项目及演示菜单、工作台、个人中心和 Antd 拓展示例
- **偏好设置**：保留主题配置与国际化能力
- **权限基础**：保留角色与动态路由权限框架，具体业务权限仍需按实际需求实现
- **本地 Mock**：保留 `backend-mock`，用于开发调试

## 文档

[Vben 上游文档](https://doc.vben.pro/)可用于参考共享包和配置方式，其中涉及的应用及演示功能不一定适用于此精简版。

## 安装使用

环境要求与 `package.json` 保持一致：Node.js `^22.18.0 || ^24.0.0`，使用 `pnpm@10.33.4`。

1. 获取项目代码

```bash
git clone https://github.com/Core-RCE/vue-vben-admin-lite.git
cd vue-vben-admin-lite
```

2. 启用指定版本的包管理器并安装依赖

```bash
npm i -g corepack
corepack enable
corepack prepare pnpm@10.33.4 --activate
pnpm install --frozen-lockfile
```

3. 启动前端（默认同时启动本地 Mock）

```bash
pnpm dev:antd
```

4. 构建前端

```bash
pnpm build:antd
```

前端产物位于 `apps/web-antd/dist`。如需同时构建前端与 Mock 后端，执行 `pnpm build`。

## 更新日志

精简版改动以本仓库的 Git 提交记录为准。[上游发布记录](https://github.com/vbenjs/vue-vben-admin/releases)仅供追溯原项目版本。

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/Core-RCE/vue-vben-admin-lite/issues) 或者提交一个 Pull Request。

**Pull Request 流程：**

1. Fork 代码
2. 创建自己的分支：`git checkout -b feature/xxxx`
3. 提交你的修改：`git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支：`git push origin feature/xxxx`
5. 提交 `pull request`

## Git 贡献提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `ci` 持续集成
- `types` 类型定义文件更改

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器，不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 维护者

[@Core-RCE](https://github.com/Core-RCE)

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=Core-RCE/vue-vben-admin-lite&type=Date)](https://star-history.com/#Core-RCE/vue-vben-admin-lite&Date)

## 许可证

[MIT © Vben-2020](./LICENSE)
