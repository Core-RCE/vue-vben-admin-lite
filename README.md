<div align="center">
  <a href="https://github.com/Core-RCE/vue-vben-admin-lite">
    <img alt="VbenAdmin Logo" width="215" src="https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp">
  </a>
  <br>
  <br>

[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

  <h1>Vue Vben Admin Lite</h1>
</div>

**English** | [中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md)

## Introduction

Vue Vben Admin Lite is a slimmed-down admin template based on the frozen [Vben Admin](https://github.com/vbenjs/vue-vben-admin) 5.7.0 baseline. It uses Vue 3, TypeScript, Vite, and Ant Design Vue. The goal is to reduce the size of the original project and the maintenance cost of tracking frequent upstream changes, providing a focused starting point for further development.

Only `apps/web-antd` and `apps/backend-mock` remain, alongside the shared monorepo packages and build tools. Other UI applications, the playground, and the local documentation site have been removed. This fork does not aim to stay in sync with every upstream release.

## Features

- **Focused navigation**: Analytics is a top-level page, with a status menu for 403, 404, 500, offline, and coming-soon pages
- **Simplified authentication**: Centered username/password login; role selection, registration, phone/QR/third-party login, and screen locking have been removed
- **Less demo code**: Project/demo menus, workbench, profile, and Antd extension demos have been removed
- **Preferences**: Theme customization and internationalization remain available
- **Access framework**: Basic role and dynamic-route access mechanisms remain; business-specific authorization still needs to be implemented
- **Local Mock**: `backend-mock` remains available for development

## Documentation

[Upstream Vben documentation](https://doc.vben.pro/) is a reference for shared packages and configuration. Its application and demo descriptions may not apply to this fork.

## Install and Use

Use Node.js `^22.18.0 || ^24.0.0` and `pnpm@10.33.4`, as specified in `package.json`.

1. Get the project code

```bash
git clone https://github.com/Core-RCE/vue-vben-admin-lite.git
cd vue-vben-admin-lite
```

2. Enable the pinned package manager and install dependencies

```bash
npm i -g corepack
corepack enable
corepack prepare pnpm@10.33.4 --activate
pnpm install --frozen-lockfile
```

3. Start the frontend (also starts the local Mock server by default)

```bash
pnpm dev:antd
```

4. Build the frontend

```bash
pnpm build:antd
```

Frontend output: `apps/web-antd/dist`. Use `pnpm build` to build both the frontend and Mock backend.

## Change Log

See this repository’s Git history for changes to the lite fork. [Upstream releases](https://github.com/vbenjs/vue-vben-admin/releases) are provided only as a reference for the original project.

## How to Contribute

You are very welcome to join! [Raise an issue](https://github.com/Core-RCE/vue-vben-admin-lite/issues) or submit a Pull Request.

**Pull Request Process:**

1. Fork the code
2. Create your branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. Submit `pull request`

## Git Contribution Submission Specification

Reference [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` Add new features
- `fix` Fix the problem/BUG
- `style` The code style is related and does not affect the running result
- `perf` Optimization/performance improvement
- `refactor` Refactor
- `revert` Undo edit
- `test` Test related
- `docs` Documentation/notes
- `chore` Dependency update/scaffolding configuration modification etc.
- `ci` Continuous integration
- `types` Type definition file changes

## Browser Support

The `Chrome 80+` browser is recommended for local development

Support modern browsers, not IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Maintainer

[@Core-RCE](https://github.com/Core-RCE)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Core-RCE/vue-vben-admin-lite&type=Date)](https://star-history.com/#Core-RCE/vue-vben-admin-lite&Date)

## License

[MIT © Vben-2020](./LICENSE)
