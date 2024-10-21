#### setState

- 当组件中调用setState时候，当前组件会重新执行一遍
- setState针对一个对象数据或数组等时候，如果对象的引用(内存地址)没变，此时setSTate不起作用。解决方案就是clone一个新的对象。
  针对其他类型也一样，需要setState一个新变量
- useState的过程：trigger -> render -> commit ，
  trigger触发；render从新调用父组件，重新渲染虚拟DOM，他会对比新旧虚拟DOM，进行重新渲染；最终commit去修改真实DOM。
  生成虚拟DOM和比对虚拟DOM，最后渲染到真实的DOM树上。操作真实DOM树比较耗性能
- 虚拟DOM是真实dom的一个js对象表达。
- useState有个batch update的概念存在，commit之后一块更新到真实DOM。一个组件里的数据是快照态的
- 每个组件里面的快照态数据是独立的，即便是一个组件被重复使用
- useState解构后的值是const的，setState修改的值，会在下一次渲染时候用新的值渲染，并没有在本次渲染中（本轮的数据快照中）修改