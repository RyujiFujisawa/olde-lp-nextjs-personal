# OLDE（オルデ） | 建機安全AIシステム LP

ユンボ・油圧ショベル後方に設置する安全管理システム **OLDE（オルデ）** の Next.js LPです。

## この版で入れた改良

- ブランド名を **OLDE（オルデ）** に統一
- ロゴをよりモダンで重厚感のあるデザインに刷新
- ヘッダー・ヒーロー・料金・FAQ・フッターまで文言をブランドに合わせて再設計
- 導入対象セクションを追加
- 実際の検知画面ギャラリーを維持
- 問い合わせフォームを **Formspree 連携版** に変更
- デモ API を削除し、送信完了メッセージを画面内に表示する構成へ変更

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

## Formspree 設定

このプロジェクトでは、以下の Formspree エンドポイントを使用しています。

```text
https://formspree.io/f/xeergbny
```

送信先は Formspree 側で設定したメールアドレスです。
現状の運用想定は **fujisawa@nauh-inc.com** 宛です。

## 主なファイル

```text
app/
  globals.css
  layout.js
  page.js
components/
  contact-section.jsx
  faq-section.jsx
  feature-grid.jsx
  flow-section.jsx
  footer.jsx
  gallery-section.jsx
  header.jsx
  hero.jsx
  pricing-section.jsx
  usecase-section.jsx
lib/
  site-data.js
public/
  brand/
    favicon.svg
    olde-logo.svg
    olde-mark.svg
  images/
    hero/
      excavator-ai-hero.png
      olde-hero-scene.png
    gallery/
      detection-view-01.png
      detection-view-02.png
      detection-view-03.png
  illustrations/
    ...
package.json
next.config.mjs
postcss.config.mjs
tailwind.config.js
```

## 価格の反映内容

- 買い切り：200,000円 / 台
- レンタル：初期 50,000円 + 19,800円 / 月
- 設置費：30,000〜50,000円
- セルフ設置なら設置費不要

## 補足

このまま営業用たたき台として使えます。
本番運用する場合は、問い合わせ文言、会社情報、送信先メールの最終確認を行ってください。


## 追加反映

- SEO向け metadata / Open Graph / robots / sitemap / JSON-LD を追加
- 導入会社として株式会社鴨下設備（https://kamoshita-setsubi.com/）を追記
- 導入会社ロゴを追加
