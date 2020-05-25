# 深拷贝与浅拷贝

## 浅拷贝

> 浅拷贝并不是简单的赋值（=）。

### 模拟实现浅拷贝

浅拷贝的实现是将原对象进行遍历，将对象的子元素赋值给一个新的对象。

```js
var obj = {
  name: "Alice",
  age: "13",
  school: "middle",
  country: "China",
  language: ["Chinese", "English"],
};

function copyObj(obj) {
  var newObj = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

var obj2 = copyObj(obj); // obj2是对obj的浅拷贝
```

浅拷贝只对第一层属性进行了拷贝，若第二层为基本数据类型则不影响，若为引用类型，则改变原变量的第二层属性值会影响拷贝后的变量。

例如：

```js
obj2.language.push("korean"); // 改变引用类型的子元素
obj2.name = "John"; // 改变基本类型的子元素

console.log(obj);
/**
 *   {
 *       age: "13",
 *       country: "China",
 *       language: ["Chinese", "English", "korean"],
 *       name: "Alice",
 *       school: "middle"
 *   }
 */

console.log(obj2);
/**
 *   {
 *      age: "13",
 *      country: "China",
 *      language: ["Chinese", "English", "korean"],
 *      name: "John",
 *      school: "middle"
 *   }
 */
```

查看以上实现浅拷贝的实例：[在线查看具体实例代码](http://js.jirengu.com/munix/1/watch?js,console)

### 常用实现方式

```js
var obj = {
  name: "vue",
  gender: "female",
};
var arr = ["name", "gender", "age"];

//  Object.assign()
var obj2 = Obeject.assign({}, obj);

// 扩展运算符
var obj3 = { ...obj };
var arr2 = [...arr];

// Array.prototype.slice()
var arr3 = arr.slice(0);

// Array.prototype.concat()
var arr4 = [].concat(arr);
```

## 深拷贝

- `JSON.parse(JSON.stringify(obj))`

  - 不能处理 Date 类型的数据
  - 不能处理 RegExp 类型数据
  - 对象属性值为函数式无法拷贝
  - 会忽略 undefined,symbol

- deepclone 函数实现深拷贝[非完美版]

```js
function deepClone(target) {
  if (target instanceof RegExp) return new RegExp(target);
  if (target instanceof Date) return new Date(target);
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
      cloneTarget[key] = deepClone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```
