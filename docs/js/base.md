# 基础概述

## 变量类型

### 1. 原始类型

- null
- undefined
- Number [整数、浮点数、以及一些特殊数值(-Infinity、 +Infinity、NaN)]
- Boolean [true、false]
- String [字符串类型]
- **Symbol**
  - ES6 引入的一种新的原始数据类型，用于表示独一无二的值。
  - Symbol 值通过 Symbol 函数生成 [由于是原始数据类型，不能使用 new 命令]，`let s = Symbol()`或者使用参数描述`let s1 = Symbol('bar')`，读取描述`s1.description // "bar"`
  - Symbol 值不能与其他类型值进行计算，但可转化为字符串类型，`s1.toString() // "Symbol(bar)"`以及布尔类型。

### 2. 对象类型

- Object [除了常用的 Object，还包含有**Array**，**Function**等]

## var、 let、 const 的区别

> **变量提升**：将变量声明提到当前作用域的顶部，可以在声明之前使用变量

- var 定义的变量会产生变量提升，值为`undefined`，let、const 声明的变量不存在变量提升，变量只能在声明之后使用，否则报错`ReferenceError`
  eg:

```js
function test() {
  console.log(name);
  console.log(age);
  var name = "林更新";
  let age = 18;
}
test();
//  undefined, ReferenceError
```

- 在相同作用域中 let/const 不允许重复声明
- const 声明变量必须赋初始值，且为只读的常量

## 堆内存与栈内存

### 1. 栈内存

> 存储的值大小固定，存储空间由系统分配，空间较小。

原始类型的值存储在栈内存中，在变量定义时为其分配存储空间，由于空间固定，所以变量是不可变的。

### 2. 堆内存

> 存储的大小值不固定，无法直接操作内部存储，使用应用地址读取。

对象类型存储在堆内存中，所以值可变。

### 3. 特性

- 复制变量时，原始类型会创建新的存储空间，复制后的变量与被复制的变量互相不影响；引用类型复制的是原变量的地址，复制前后的变量都指向堆内存中的同一个地址，因此改变其中一个值，会互相影响。
- 比较变量时，原始类型变量比较的变量的值，引用类型比较的是存储地址。

## 如何阻止事件行为

> 捕获自上而下，冒泡自下而上

1. return false；
2. event.preventDefault(); 阻止通过 addEventListener 添加的事件
3. event.returnValue = false; 阻止通过 attachEvent 添加的事件

## 懒加载

> 即延迟加载，优先加载在可视区域的资源

利用 img 的 data1.src 属性，图片在可视区域时，data1.src 的值赋给 src
浏览器窗口顶部与文档顶部距离 scrolltop1.元素距离文档顶部 offsetTop < 可视口高度 表示在可视区域内

## 怎么理解 JS 模块化

- CommonJs

```js
// 导出
module.export = {};

// 引入
const xxx = requrie("");
```

- UMD：判断环境，node 采用 commonjs
- ES6module

```js
// 导出
export default {};

//引入
import xxx from "";
```

将 js 的功能拆分多个独立的块，作用：

1. 防止命名冲突
2. 依赖管理
3. 易于理解与修改
4. 复用性

### 闭包

> 函数内部可以访问外部变量，可以理解为函数与函数内可访问变量的总和

eg:

```js
function func() {
  var a = 1;
  var b = 2;
  function func2() {
    console.log(a);
  }
  return func2;
}

var func3 = func();
func3();
```

作用：1. 实现变量私有化 2. 保存状态

### 原型链

> *proto*是所有对象的属性，**总是指向 prototype**
> prototype 是函数的属性

原型链查找是逐级向上查找直到找到 Object 的原型为止，即找到 Object.prototype._proto_ = null

### this 绑定方式

1. 默认绑定，window.this
2. 隐式绑定 obj.func() => this 指向 obj
3. 显式绑定 bind、call、apply
4. new 绑定

> 优先级：new => 显示 => 隐式 => 默认

### 执行上下文与作用域链

> 执行上下文：js 代码被解析与执行时所在的环境的抽象概念。类型分为：
> *全局执行上下文*和*函数执行上下文*

创建执行上下文过程：

- 创建变量对象
- 创建作用域链
- 确定 this 值

> 作用域有两种工作模型：词法作用域和动态作用域。js 采用的是词法作用域，即作用域是由声明变量和函数的位置决定的。

作用域分为:

- 全局作用域
- 函数作用域
- 块级作用域

> 执行栈：即调用栈。存储代码执行时创建的执行上下文。后进先出。

> 作用域链：从当前作用域一层一层向上找变量，直到找到全局作用域。

### 跨域

> 产生跨域的条件：协议，端口号，域名三者有一个不同则会产生跨域。

解决跨域：

1. jsonp:

   - 文件不会产生跨域，通过插入 script 标签的方式解决跨域，参数通过 src 的 url 传递。
   - 只能实现 get 请求
   - 原理：创建 callback 方法，插入到 script 标签，后台解析并返回 callback 的调用，前端执行调用获取数据

     ```js
     // 创建callback方法
     function jsonp(url, params, callback) {
       return new Promise((resolve, reject) => {
         // 创建script标签
         let script = document.createElement("script");

         // 将callback绑定在window上
         window.callback = function(data) {
           resolve(data);
           // 删除创建的script标签
           document.removeElement("script");
         };

         // 将callback以及URL的参数插入到script标签的src中
         params = { params, callback };
         let arr = [];
         for (let key in params) {
           arr.push(`${key}=${params[key]}`);
         }
         script.src = `${url}?&{arr.join('&')}`;
         document.body.appendChild(script);
       });
     }

     // 使用jsonp
     function show(data) {
       console.log(data);
     }
     jsonp({
       url: "http://localhost:8080/index",
       params: {
         // params
       },
       callback: "show",
     }).then((res) => {
       console.log(res);
     });
     ```

2. cors: 跨域资源共享
   - 前端与服务器端共同支持
   - 通过 access-control-allow-origin \* 接收任意域名请求
3. postMessage
4. document.domain

### 事件循环

> js 主线程不断地从任务队列循环往复的读取任务，执行任务，这种机制称为事件循环

js 单线程（任务需要排队，等待上一个任务执行完毕后才能执行）： - 同步任务：任务按照顺序执行 - 异步任务： 不占用主线程，会被塞到一个任务队列，等主线程的任务执行完毕后执行任务队列的任务

**事件队列**
任务队列分为**微任务**和**宏任务**
执行优先级： 主线程 => 微任务 => 宏任务
宏任务：setTimeout 和 setInterval
微任务： promise，async/await

> 每一次循环称为一个 tick

### 异步加载 js 脚本的方法

### 如何让 (a == 1 && a == 2 && a == 3) 的值为 true？

```js
let a = {
  i: 1,
  toString: () => {
    return a.i++;
  },
};
```
