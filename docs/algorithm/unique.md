# 数组去重

## 双重循环

```js
function unique(arr) {
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

## indexOf()

```js
function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

## set

```js
let newArr = [...new set(arr)];
```

## array.from:

```js
let newArr = Array.from(new set(arr));
```
