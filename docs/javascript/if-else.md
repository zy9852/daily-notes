# if/else 的一些替换写法

> 最近业务中有很多需要判断用车类型的情况，比如接机、送机、接站、送站等等，前端需要根据服务端返回的`getType`对不同类型的专车服务做不同的处理，于是代码里就多了很多看起来很糟心的`if..else`判断语句。所以就想给自己做个小笔记，总结一下集中可以代替 if...else 语句的方式。

## switch/case

这是谈到替换`if/else`我首先会想到的方式，例如：

```javascript
switch (type) {
  case 61:      // 拼车
      let host = baseUrl + '/huolicar/new/detail?orderId=' + orderId;
      break;
  case 70:      //  车票
      let host = baseUrl + '/huolicar/new/carDetail?orderId=' + orderId;
      break;
   case 56：
   .....
}
```

很遗憾的是，换成这种方式之后好像并没有比`if/else`好多少，但是它也是有亮点的：在使用`switch/case`语句后，所有有关判断的关键字都高亮了，单就这一点而言，能使代码阅读起来没有`if/else`那么吃力。

## 三元运算符

也有一些情况是不需要用到多层的`if/else`嵌套的，在这些稍简单的情况下可以使用三元运算符来代替，让代码看起来更加清爽。例如：

```javascript
type = air ?  1 : 2；
```

## 利用逻辑判断的短路运算

短路表达式虽然看起来代码更加简化了，但也只适用于简单的逻辑判断，复杂了就会使得代码的可读性变差。

```javascript
if (air) {
  type = getType();
}
// 以上可改写为
air && (type = getType());
```

## 配置数据

其实在专车项目中，getType 值得可选性是固定的，无论什么需求，专车的业务类型选项都不会变化，因此就可以对类型进行统一的配置，这样就能随时在代码中使用。例如：

```javascript
const getType = {
    'air': {
        'jie_ji': () => {  // do something... },
        'song_ji': () => {  // do something... ),
    },
    'train': {
        'jie_zhan': () => { // do something... },
        'song_zhan': () => { // do something... },
     }
 }

 // 接下来可以根据业务做其他处理
 ....
```
