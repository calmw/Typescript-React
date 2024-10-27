#### reducer

- 可以把数据管理拆分出去
- 复用性更强的组件建议useState, 逻辑清晰复杂的组件建议reducer，reducer的逻辑可以单独提到一个文件中
- reducer对应的也有useImmerReducer

#### reducer 流程

- 1 定义数据
- 2 定义reducer函数
- 3 定义action 发送改变数据的指令
- 4 拿到action之后，dispatch派发action
- 5 根据指令修改数据
- 6 完成数据的修改

#### reducer优缺点
- 