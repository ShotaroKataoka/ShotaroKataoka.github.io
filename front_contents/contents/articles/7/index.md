---
description: 'かたおかです！ RibbonCMSではPythonとNPMを使っているのでビルド時の依存関係のインストールに時間がかかります。 記事投稿に毎回数分かかるとめんどうなのでどうにかキャッシュできないかをテストしてみます。  ##
  ビルド時間の短縮 GitHub ActionsでのCI/CDでは依存関係インストールがつきものです。 Pythonだと`pip`とか，フロントだと`npm`とか。
  ただ，これ...'
posted_at: 2022年06月27日 20時43分
slug: '7'
tag_ids:
- 4263726428
- 4263728284
title: GitHub Actionsでビルドを高速化したい！
updated_at: 2022年06月27日 23時20分

---
かたおかです！
RibbonCMSではPythonとNPMを使っているのでビルド時の依存関係のインストールに時間がかかります。
記事投稿に毎回数分かかるとめんどうなのでどうにかキャッシュできないかをテストしてみます。

## ビルド時間の短縮
GitHub ActionsでのCI/CDでは依存関係インストールがつきものです。
Pythonだと`pip`とか，フロントだと`npm`とか。
ただ，これのインストールって結構時間かかります。
依存が大きいとインストールだけで数分とかかかってしまうので，頻繁に発動するActionsだとこれだけで大きな時間損失です。
<br/>

RibbonCMSではビルドを2回行います。
まず、Issueを`.json`ファイルなどに変換するためのビルド（Issueビルドと呼んでます）です。
これはPythonを用いて行っています。
次に、Issueビルドで生成した結果をもとにしたフロント側のビルドです。
これによりNext.jsを用いてhtmlなどを生成しています。
<br/>

このような仕組みのため、RibbonCMSではGitHub ActionsPythonとNPMの両方のパッケージインストールを必要としています。
記事投稿や編集のために毎回これをしているので，このインストール時間がかなりネックになってしまっている現状です。

## なんか失敗する．．

`Cache not found for input keys: ` といわれnpmのキャッシュ利用がなんか失敗した。
↓記事を見る限り，キャッシュの保存に失敗してる様子

https://qiita.com/akubi0w1/items/2f4bf5d3ce7e5e77dfd7

あ！`actions/cache`の`path`が間違ってそう・・・？
```yaml
    - uses: actions/cache@v3
      id: node_modules_cache_id
      env:
        cache-name: cache-node-modules
      with:
        path: 'src/node_modules'
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('front/src/package-lock.json') }}
```
正しくは，`path: front/src/node_modules`かな？
これでうまくいってくれ・・・！

```
Warning: Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.
```
😢
