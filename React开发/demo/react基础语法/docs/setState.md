#### setState

- 当组件中调用setState时候，当前组件会重新执行一遍
- setState针对一个对象数据或数组等时候，如果对象的引用(内存地址)没变，此时setSTate不起作用。解决方案就是clone一个新的对象。
  针对其他类型也一样，需要setState一个新变量