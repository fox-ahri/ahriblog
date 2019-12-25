## 介绍

[![Build Status](https://travis-ci.com/fox-ahri/ahriblog.svg?branch=master)](https://travis-ci.com/fox-ahri/ahriblog)
[![GitHub license](https://img.shields.io/github/license/fox-ahri/ahriblog)](https://github.com/fox-ahri/ahriblog/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/fox-ahri/ahriblog)](https://github.com/fox-ahri/ahriblog/issues)
[![GitHub stars](https://img.shields.io/github/stars/fox-ahri/ahriblog)](https://github.com/fox-ahri/ahriblog/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/fox-ahri/ahriblog)](https://github.com/fox-ahri/ahriblog/network)

这是一个基于 `vuePress` 的文档

[https://blog.ahriknow.com/](https://blog.ahriknow.com/)

## 如何使用
#### 拷贝项目
```sh
git clone git@github.com:fox-ahri/ahriblog.git
```
#### 安装依赖
```sh
yarn add # 或者 npm install
```
#### 本地运行
```sh
yarn docs:dev # 或者 npm run decs:dev
```
#### 推送到 github 的 gh 分支
```sh
yarn deploy # 或者 npm run deploy
```

## 配置
使用前请配置 Valine 的 appId 和 appKey,
在项目的 /config 下新建 secrerKeyConf.js 文件:
```js
module.exports = {
    appId: '<appId>',
    appKey: '<appKey>'
}
```

