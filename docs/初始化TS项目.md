#### 初始化命令

```shell
tsc --init # 会生成tsconfig.json文件
# 题外话
npm init 初始化工程项目并创建package.json文件
# 添加ts支持
npm install --save-dev @babel/preset-typescript
```

#### 编译执行

```shell
# 编译ts文件为js文件
tsc index.js # 生成index.js文件
# 使用node执行生成的js文件
node index.js
```