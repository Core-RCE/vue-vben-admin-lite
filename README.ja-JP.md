<div align="center">
  <a href="https://github.com/Core-RCE/vue-vben-admin-lite">
    <img alt="VbenAdmin Logo" width="215" src="https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp">
  </a>
  <br>
  <br>

[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

  <h1>Vue Vben Admin Lite</h1>
</div>

**日本語** | [English](./README.md) | [中文](./README.zh-CN.md)

## 紹介

Vue Vben Admin Lite は、[Vben Admin](https://github.com/vbenjs/vue-vben-admin) **5.7.0 を固定ベースとして軽量化**した管理画面テンプレートです。Vue 3、TypeScript、Vite、Ant Design Vue を使用しています。元のプロジェクトの規模と、頻繁な上流の変更に追従する保守コストを抑え、業務開発に必要な基盤を残すことを目的としています。

`apps` ディレクトリには `frontend`、`backend`、`backend-mock` を配置しています。旧 `web-antd` アプリは `frontend` に変更し、`backend` は将来の業務バックエンド用に予約、`backend-mock` はローカル開発用 Mock として使用します。共通パッケージとビルドツールの Monorepo 構成は維持しています。他の UI アプリ、playground、ローカルのドキュメントサイトは削除済みで、上流の新バージョンへの継続的な追従は目的としていません。

## 特徴

- **シンプルなナビゲーション**：分析ページをトップレベルに配置し、ステータスメニューに 403、404、500、オフライン、公開準備中の5種類を用意
- **ログインの簡素化**：中央配置のユーザー名・パスワードログインのみを残し、ロール選択、新規登録、電話番号・QRコード・外部サービスによるログイン、画面ロックを削除
- **デモの削除**：プロジェクトとデモのメニュー、ワークベンチ、プロフィール、Antd 拡張デモを削除
- **設定**：テーマ設定と国際化機能を維持
- **権限の基盤**：ロールと動的ルートの権限管理を維持。業務固有の権限制御は別途実装が必要
- **ローカル Mock**：開発用の `backend-mock` を維持

## ドキュメント

[Vben の上流ドキュメント](https://doc.vben.pro/)は共通パッケージや設定方法の参考に利用できます。アプリやデモの説明は、この軽量版に当てはまらない場合があります。

## インストールと使用

`package.json` に合わせて、Node.js `^22.18.0 || ^24.0.0` と `pnpm@10.33.4` を使用してください。

1. プロジェクトコードを取得

```bash
git clone https://github.com/Core-RCE/vue-vben-admin-lite.git
cd vue-vben-admin-lite
```

2. 指定バージョンのパッケージマネージャーを有効にして依存関係をインストール

```bash
npm i -g corepack
corepack enable
corepack prepare pnpm@10.33.4 --activate
pnpm install --frozen-lockfile
```

3. フロントエンドを起動（ローカル Mock もデフォルトで同時起動）

```bash
pnpm dev:frontend
```

4. フロントエンドをビルド

```bash
pnpm build:frontend
```

フロントエンドの出力先は `apps/frontend/dist` です。フロントエンドと Mock バックエンドを両方ビルドする場合は `pnpm build` を実行してください。

## 変更ログ

軽量版の変更は、このリポジトリの Git 履歴を参照してください。[上流のリリース履歴](https://github.com/vbenjs/vue-vben-admin/releases)は元のプロジェクトの参考情報です。

## 貢献方法

ご参加をお待ちしております！[Issueを提出](https://github.com/Core-RCE/vue-vben-admin-lite/issues)するか、Pull Requestを送信してください。

**Pull Request プロセス：**

1. コードをフォーク
2. 自分のブランチを作成：`git checkout -b feat/xxxx`
3. 変更をコミット：`git commit -am 'feat(function): add xxxxx'`
4. ブランチをプッシュ：`git push origin feat/xxxx`
5. `pull request`を送信

## Git貢献提出規則

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 規則 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 新機能の追加
- `fix` 問題/バグの修正
- `style` コードスタイルに関連し、実行結果に影響しない
- `perf` 最適化/パフォーマンス向上
- `refactor` リファクタリング
- `revert` 変更の取り消し
- `test` テスト関連
- `docs` ドキュメント/注釈
- `chore` 依存関係の更新/スキャフォールディング設定の変更など
- `ci` 継続的インテグレーション
- `types` 型定義ファイルの変更

## ブラウザサポート

ローカル開発には `Chrome 80+` ブラウザを推奨します

モダンブラウザをサポートし、IEはサポートしません

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: |
| 最新2バージョン | 最新2バージョン | 最新2バージョン | 最新2バージョン |

## メンテナー

[@Core-RCE](https://github.com/Core-RCE)

## スター歴史

[![Star History Chart](https://api.star-history.com/svg?repos=Core-RCE/vue-vben-admin-lite&type=Date)](https://star-history.com/#Core-RCE/vue-vben-admin-lite&Date)

## ライセンス

[MIT © Vben-2020](./LICENSE)
