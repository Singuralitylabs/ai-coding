# GitHub Copilot 解説用サンプルアプリケーション

このリポジトリは、GitHub Copilot の学習および解説を目的としたサンプルコードです。

## 概要

Next.js と TypeScript で構築された、シンプルな Todo リストアプリケーションです。GitHub Copilot の基本的な機能と使用方法を理解するための実例として作成されています。

GitHub Copilotの解説については、[こちら](https://note.com/preview/nd43bc74f1503?prev_access_key=0ff21117566c82e9e18c98cb451c3c0f)をご参照ください。

## アプリケーションの特徴

- **フレームワーク**: Next.js 16.1.1 (App Router)
- **言語**: TypeScript
- **UI**: React 19.2.3
- **スタイリング**: Tailwind CSS 4
- **機能**: シンプルな Todo 管理（追加、完了状態の表示）

## ディレクトリ構成

```
step01_github_copilot/
├── app/
│   └── page.tsx          # メインページコンポーネント（Todo リスト）
├── node_modules/         # 依存パッケージ
├── package.json          # プロジェクト設定
├── tsconfig.json         # TypeScript 設定
└── README.md            # このファイル
```

## セットアップ手順

### 前提条件

- Node.js (v20 以上推奨)
- npm

### インストール

```bash
# 依存パッケージのインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発モードで起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 主な実装内容

### `app/page.tsx`

Todo リストの主要機能を含むメインコンポーネント:

- **型定義**: TypeScript による Todo 型の定義
- **状態管理**: React hooks (useState) を使用した Todo の管理
- **UI コンポーネント**:
  - Todo 入力フィールド
  - 追加ボタン
  - Todo リスト表示（完了状態の視覚化含む）
- **インラインスタイル**: CSS-in-JS によるシンプルなスタイリング

### 実装されている機能

- ✅ Todo アイテムの追加
- ✅ 完了状態の表示（チェックボックス、取り消し線）
- ✅ レスポンシブなデザイン
- ✅ TypeScript による型安全性

## GitHub Copilot 学習のポイント

このサンプルコードは、以下の GitHub Copilot の使用例を学ぶために役立ちます:

1. **コード補完**: 関数名や変数名の自動補完
2. **型推論**: TypeScript 型定義の提案
3. **コンポーネント生成**: React コンポーネントのパターン認識と生成
4. **コメントからのコード生成**: 日本語コメントからの実装提案
5. **リファクタリング支援**: 既存コードの改善提案

## 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# ESLint によるコードチェック
npm run lint
```

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 16.1.1 | React フレームワーク |
| React | 19.2.3 | UI ライブラリ |
| TypeScript | ^5 | 型安全な開発 |
| Tailwind CSS | ^4 | ユーティリティファーストCSS |
| ESLint | ^9 | コード品質チェック |

## ライセンス

このプロジェクトは教育目的のサンプルコードです。

## 注意事項

- このアプリケーションは GitHub Copilot の学習・解説用であり、本番環境での使用は想定していません
- Todo データは永続化されていないため、ページをリロードすると初期状態に戻ります
- 簡潔さを優先しているため、一部の機能（削除、編集など）は実装されていません
