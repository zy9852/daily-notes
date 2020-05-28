# 基础概述

## MVVM

model-view-viewmodel
分离视图和模型
自动更新 dom，减少手动操作 dom

bug 难定位

## 生命周期

beforeCreate: 组件创建之前，属性生效之前
create： 组件创建完成，组件属性生效，真实 dom 未生成
beforeMount： 挂载开始之前
mounted： 挂载完成
beforeUpdate： 组件数据更新之前
updated： 组件数据更新完成
activited: keep-alive 专属，组件被激活时调用
deadctivated: keep-alive 专属，组件被销毁时调用
beforeDestroy： 组件销毁之前
detroyed： 组件销毁后

- created 与 mounted 两个钩子选用取决于是否依赖于 dom,若需要在请求数据的时候操作 dom 则需要将请求放到 mounted 中.
- beforeDestroy 钩子可以用来清理定时器

## 组件通信

1. 通过 props 自上而下传递数据，父组件传递给子组件
2. `$emit` 方法使得子组件传递数据到父组件
3. inject，注入依赖，适用于层级较深的组件
4. vuex

## vue 如何实现双向绑定

利用 object.defineProperty 劫持对象的访问器，即重新定义 set 与 get 方法

手写一个数据绑定

```html
<input type="text" id="input" /> <span id="text"></span>
```

```js
var input = document.getElementById("input");
var text = document.getElementById("text");
var obj = { value: "" };

Object.defineProperty(obj, "value", {
  get: function() {
    return input.value;
  },
  set: function(newVal) {
    input.value = newVal;
    text.innerHTML = newVal;
  },
});

input.onkeyup = function(e) {
  obj.value = e.target.value;
};
```

## vuex

1. state
2. mutations
3. getters
4. actions

> mutations 为同步，actions 为异步

## v-if 与 v-show

v-if 是真正的条件渲染，若初始条件渲染时为 false，则不会渲染，直到条件为 true
v-show 类似于 display：none 和 block,无论条件是否为 true, 都会渲染

v-if 有更高的切换开销，v-show 有更高的初始切换开销
若频繁切换---v-show

## 列表渲染中 key 的作用

key 作用是更新组件时判断两个节点是否相同，相同则复用，若不同则删除旧的创建新的。
官网推荐使用唯一的 id 作为 key 值。
带唯一 key 的节点更新时无法找到可复用的节点，会销毁和创建 vnode,在 dom 移除和创建节点的性能消耗较大。
不带 key 模式只能渲染简单的无状态组件，若列表需要有自己的状态，则需要带上唯一的 key。

> key 是给 vnode 的唯一的 id，可以依靠 id 更准确、更快的查找到对应的节点

## 自定义指令

提供三个钩子：

1. bind： 初始调用，用于初始化
2. inserted： 插入父节点时调用
3. update：vnode 更新时调用

钩子函数参数：

- el: 所绑定的元素
- binding: 对象
  - name: 指令名
  - value：指令的绑定值
  - oldValue: 在 update 钩子中使用
  - expression: 绑定的表达式
  - arg: 传给指令的参数
  - modifiers: 一个包含修饰符的对象，例如 v-focus.foo.bar 的修饰符对象为{foo: true, bar: true}
- vnode: 编译生成的虚拟节点
- oldVnode: 上个虚拟节点

```js
Vue.directive('name', {
    bind: function (el, binding, vnode） {
        // do something...
    }
})

// 具体例子
// 函数简写，bind和update触发相同行为时
Vue.directive('btm-bar', function（el, binding）{
    el.style.position = fixed;
    el.style.bottom = 0;
})
```

## vue 单向数据流

vue 中数据是单向流动的，便于对数据进行追踪，避免数据混乱
只能通过父组件更改 props 的数据，子组件不可更改父组件的 props，原因是：
一个父组件不只一个子组件，props 数据并不只有一个子组件使用，若子组件修改，会导致数据混乱，将数据的源头统一为父组件，从而保证数据的修改源唯一。

## vue 父子组件生命周期执行顺序

**加载过程**：父组件 beforeCreate => 父组件 created => 父组件 beforeMount => 子组件 beforeCreate => 子组件 created => 子组件 beforeMount => 子组件 mounted
**子组件更新过程**：父组件 beforeUpdate => 子组件 beforeUpdate => 子组件 updated => 父组件 updated
**父组件更新**： 父组件 beforeUpdate => 父组件 updated
**销毁过程**：父 beforeDestroy => 子 beforeDestroy => 子 destroyed => 父 destroyed

## v-for 是否需要事件代理

事件代理作用：

1. 将事件代理到父节点，减少内存占用
2. 方便动态的绑定事件和移除事件，避免逐个给元素增加和删除事件

v-for 绑定的事件为相同事件，若非大量数据，性能差异不大
v-for 帮助我们方便的绑定数据，组件销毁时，事件都销毁

## nextTick

vue.nextTick(),使用

```js
this.$nextTick(() => {});
```

> 作用：在下次 dom 更新循环结束之后执行延迟回调，用于修改数据之后立即使用，获取更新后的 dom

应用场景：需要在视图更新完成之后，基于新的视图进行操作
