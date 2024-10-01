#### babel介绍

- babel是一款TS编译器

#### 安装

```shell
#在根目录创建一个babel.config.json文件
# 安装依赖
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev @babel/plugin-transform-arrow-functions
npm install --save-dev @babel/plugin-proposal-object-rest-spread
npm install --save-dev @babel/plugin-proposal-class-properties
```

#### 编译

- 完善babel.config.json文件，如：[babel.config.json](../babel.config.json)

```shell
# 将src目录下js后缀的ES6代码转换为lib目录下的ES5代码
babel src --out-dir lib
```
