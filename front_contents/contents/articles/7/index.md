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
updated_at: 2022年06月28日 00時34分

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

このような仕組みのため、RibbonCMSではPythonとNPMの両方のパッケージインストールを必要としています。
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

## cache読み込めてそうだけど早くならない
cache読み込んだらインストールしないようにすべき？
やってみる
<br/>

-> 単純にインスト―ルしないようにするとエラーになった
cacheリストアだけだとやっぱりpipが読み込めていないぽい
venvをcacheしてみよう。
これならいけるやろ！
<br/>

-> ModuleNotFoundになった😢
venvのactivateを毎回やらないとだめっぽい。
Python実行前に毎stepでactivateしてみる。
<br/>

-> いけたっぽい
あと，Nodeの方もうまくいってた
こっちは`npm ci`の実行をcacheの有無で制御しただけだったけど時間短縮してビルドもできてた
あとはpipのcacheで2回目がはやくなってるかどうか
<br/>

-> 成功！
合計1分程ビルド時間を短縮できた！
2m30sから1m30sなので40%くらい時間削減できたのかな？

## まとめ
`actions/cache`でpipとnpmの依存関係インストール時間を短縮した。
pipはvenvを作成してそのenvをcacheするとうまくいった。
npmは`node_modules`をcacheするとうまくいった。
加えてcacheするだけだと，cache読み込み後インストールを開始して結局時間が変わらなくなるので，cacheがあればインストールをしないように`if`をする必要があった。

↓Python部分のyaml（抜粋）
```yaml
    - uses: actions/setup-python@v4
      id: setup_python_id
      with:
        python-version: '3.9'

    - uses: actions/cache@v3
      id: cache-venv
      with:
        # side_mはpythonプログラムのルートディレクトリ
        path: side_m/.venv
        key: ${{ runner.os }}-venv-${{ hashFiles('side_m/requirements.txt') }}
        restore-keys: |
          ${{ runner.os }}-venv-

    - name: Create venv
      if: steps.cache-venv.outputs.cache-hit != 'true'
      run: |
        cd side_m
        python -m venv .venv
        . ./.venv/bin/activate
        pip install -r requirements.txt

    - name: Check Publish flag
      run: |
        cd side_m
        . ./.venv/bin/activate
        python3 check.py
```

↓ Next.js部分のyaml（抜粋）
```yaml
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 16.x.x

    - uses: actions/cache@v3
      id: node_modules_cache_id
      env:
        cache-name: cache-node-modules
      with:
        # front/src/はフロントエンドプログラムのルートディレクトリ
        path: 'front/src/node_modules'
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('front/src/package-lock.json') }}

    - name: Install NPM packages
      if: ${{ steps.node_modules_cache_id.outputs.cache-hit != 'true' }}
      run: npm ci
      working-directory: ./front/src
```

こんな感じでキャッシュしました。
試行錯誤しながらなので他にベストプラクティスあるかもです！

もっといい方法を見つけたら追記しますね

ではでは
