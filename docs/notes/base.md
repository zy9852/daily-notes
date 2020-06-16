# 随记

## 保留小数

`toFixed(num)`方法，num 为需要保留的小数位数。

> 注意：toFixed()返回的是转化后的字符串，若需要与数值比较，需要 Number()转化后再做比较判断。

## 获取某年某月的天数

使用`new Date(year, month, 0).getDate()`方法, year => 年份， month => 月份

```js
// eg: 获取2020年六月有多少天
console.log(new Date(2020, 6, 0));
// 30
```
