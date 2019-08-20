# 数组扁平化

## 递归方式

### 1. forEach

```javascript
const flatten = (arr) => {
    let res = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    })；
    return res;
}；
```

测试一下：

```javascript
let arr = [1, 2, [3, 4],  [5, 12, [24, 12, [11]]]];
console.log(flatten(arr));

----------------------------------
输出：
[1, 2, 3, 4, 5, 12, 24, 12, 11]
```
