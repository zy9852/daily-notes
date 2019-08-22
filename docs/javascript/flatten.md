# 数组扁平化与去重

## 数组扁平化

> 数组扁平化是指将一个嵌套多层的数组，转化为只有一层的数组

### 递归方式

实现方式：

```javascript
const flatten = arr => {
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
    }
  });
  return res;
};

let arr = [1, 2, [3, 4], [5, 12, [24, 12, [11]]]];
console.log(flatten(arr)); // arr => [1, 2, 3, 4, 5, 12, 24, 12, 11]
```

这是最常规也是最容易想到的方法。[在 JS Bin 上查看这段代码](http://js.jirengu.com/dezuk/1/edit?js,console)

### toString()转化

`toString()`方法将数组转化为逗号分隔的字符串形式，具体先来看看`toString()`的输出：

```js
console.log([1, 2, [3, [4]]].toString()); // => "1, 2, 3, 4"
```

利用其实现扁平化：

```js
const flatten = arr => {
  let newArr = arr.toString().split(',');
  return newArr.map(item => {
    return parseInt(item);
  });
};
```

使用`toString()`有很大的局限性，此方式只适用于数组元素为`Number`类型和`String`类型,当然元素为`string`时，直接 `arr.toString()`就能实现了。[在 JS Bin 上查看这段代码](http://js.jirengu.com/dezuk/1/edit?js,console)

::: danger 待更新
还有一部分没有总结
:::
