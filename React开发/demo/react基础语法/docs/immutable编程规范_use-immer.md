#### immutable

- 可以使用use-immer来保证组件数据的immutable
- 安装``` npm install use-immer --save ```
- 使用将useState改为useImmer ``` const [squares, setSquares] = useImmer(Array(9).fill(null)) ```
- 组件中需要更改的数据：数据结构尽量浅；减少数据冗余