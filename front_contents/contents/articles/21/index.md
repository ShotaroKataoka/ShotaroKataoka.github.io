---
description: ' 3年前に書いたプログラムを見返して、こういうことはありませんか？    <font size=''6''>どれが何のファイル？？？</font>  <br/><br/>  ソースコードならなんとなく推測できますが、
  実験ログとかは**結構しんどい**です。 ログの命名規則には従いたいけど、それだと人間的にはわかりづらかったりするんですね。    <br/>  これを解決するために、、、       ...'
posted_at: 2020-07-30 09:00:00+00:00
slug: '21'
tag_ids:
- 4263720034
- 4263726428
title: これ何のファイル？を無くすためのCLIツールを作った
updated_at: ''

---

3年前に書いたプログラムを見返して、こういうことはありませんか？

<img src='/static/images/articles/21/f132b1edd755e4e05d014604b2b971e8.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/4325278c-4339-4fd5-a585-81049a5099a2' alt='image' />

<font size='6'>どれが何のファイル？？？</font>

<br/><br/>

ソースコードならなんとなく推測できますが、
実験ログとかは**結構しんどい**です。
ログの命名規則には従いたいけど、それだと人間的にはわかりづらかったりするんですね。

<img src='/static/images/articles/21/1ac131d96c6471afc2ba5934ea2bec8f.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/ec9bd9e7-c7db-4852-acdf-5b85483357ff' alt='image' />

<br/>

これを解決するために、、、

<img src='/static/images/articles/21/1efc6d7c6e8a43ca7abdf1c6da784211.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/62d0e165-ae0e-4f23-a3e3-a814c68e1622' alt='image' />


<img src='/static/images/articles/21/d3c05d6d7bfc7c151229d2f55a71089e.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/67b784c1-9a61-4e05-84a4-3911cb8e5ec9' alt='image' />

こうします。
カラフルでかわいいですね。

<br/>

こんな感じで説明文をつけられるCLIツール[ls-Improved](https://github.com/ShotaroKataoka/ls-Improved)を開発しました。

## ls-Improved
Pythonで開発しており、PyPIから`pip install ls-Improved`でインストールできます。

こんな感じの用途を想定しています。
- 機械学習等の実験パラメータの整理
<img src='/static/images/articles/21/4a7d4d4e00f62d7681e030f2aa49e429.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/8e69dda2-c5e8-4d5a-9585-9940f3c5bac4' alt='image' />

- チーム開発におけるディレクトリ構造の共有
<img src='/static/images/articles/21/561c6d17c984b769903529beab66ec24.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/1ba01fc6-bb89-4cd7-9de7-edd7c4f5336d' alt='image' />

- ターミナル映え
<img src='/static/images/articles/21/641c3ef07c39c75f27e6b4b850b25c0a.webp' origin_url='https://github.com/ShotaroKataoka/ShotaroKataoka.github.io/assets/42331656/7f706f96-6371-4c0a-b24b-f306ab09bc36' alt='image' />


## 今後
実行速度と可搬性のためにバイナリツールにリプレースすることを計画しています。
現在はRustでα版を開発しており、近いうちに正式版も出せるかも。

<br/>

バイナリ化できればチーム開発のリポジトリでツールごと共有できます。
そうすれば、未インストールのメンバーとも説明文を共有できるようになるので便利になると思ってます。
