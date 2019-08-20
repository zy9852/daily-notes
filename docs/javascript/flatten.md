# 数组扁平化与去重

## 数组扁平化

### 递归方式

#### 采用 forEach

```javascript
const flatten = arr => {
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
};

let arr = [1, 2, [3, 4], [5, 12, [24, 12, [11]]]];
console.log(flatten(arr)); // arr => [1, 2, 3, 4, 5, 12, 24, 12, 11]
```

[在 JS Bin 上查看这段代码](http://js.jirengu.com/seveb/1/edit?js,console)
