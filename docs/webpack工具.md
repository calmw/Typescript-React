#### 介绍

- webpack工具是用于web程序（基于javascript、typescript等前端语言）的静态模块打包工具。

#### 安装webpack-cli工具
```shell
npm install --save-dev webpack-cli webpack
```
#### 示例
```shell
# 创建目录
mkdir -p webpack-ts/src
mkdir -p webpack-ts/dist
# 初始化项目
cd webpack-ts && npm init
touch webpack.config.js

# 安装typescript和ts-loader插件。不安装的话，可以打包js项目，安装后可以打包ts项目
npm install --save-dev typescript ts-loader

```