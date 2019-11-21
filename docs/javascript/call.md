# call & apply & bind

## 1.apply
`apply()`方法调用一个具有给定this值的函数，以及作为一个数组或类数组对象提供的参数。

**语法：**

``` javascript
func.apply(thisArg, [argsArray])
/** 
* thisArg => 可选参数，在func函数运行时使用的this值,
*  if(thisArg == undefined|null) this = window，
*  if(thisArg == number|boolean|string) this == new Number()|new Boolean()| new String()
* argsArray => 可选参数，数组或类数组对象，数组作为参数传给func函数
*/
```
在调用一个存在的函数时，可以为其指定一个this对象，也就是当前调用该函数的对象。使用apply，可以只用写一次这个方法然后在另一个对象中继承它，而不用重复写这个方法。

**用法实例**

+ 使用apply连接两个数组

我们知道push方法可以数组的尾部添加元素，且支持传入多个参数以便一次添加多个元素，但当我们将这些需要添加的元素以数组的形式传入时，push并不会将这些元素分别添加，而是作为一个单独的元素添加到原来的数组。当然concat方法可以解决这个问题，但是，concat方法返回了一个新的数组。使用apply方法可以既将这些元素分别传入还能只在原始的数组 上进行操作。[查看实例代码](http://js.jirengu.com/javuy/1/watch?js,console)

``` javascript
let arr1 = [1,2,3];
let arr2 = ['a', 'b', 'c'];
console.log('concat', arr1.concat(arr2));
arr1.push.apply(arr1, arr2);
console.log(arr1);
```
+ 使用apply与内置方法

``` javascript
let arr = [20, 4, 15, 7, 11];
let min = Math.min.apply(null, arr);
let max = Math.max.apply(null, arr);
```

## 2. call
`call`方法使用给定的this值，和传入的一个或多个参数来调用函数。
> call方法的语法和作用于apply方法类似

**语法**

``` javascript
func.call(thisArg, arg1, arg2, arg3, ...)

/**
* thisArg => func函数运行时的this值
* arg1， arg2, ... => 指定的参数列表
*/
```

**用法示例**
+ 传入指定this

[在线查看示例](http://js.jirengu.com/mofaz/1/watch?js,console)

``` javascript
function greet() {
  var str = ['Dear ', this.name, ', ', this.time, '!'].join('');
  console.log(str);
}

var obj = {
  name: 'Alice',
  time: 'goodmorning'
};

greet.call(obj);
```

+ 不指定第一个参数（this）

[在线查看代码](http://js.jirengu.com/yoliw/1/watch?js,console)

``` javascript
var name = 'Alice';

function greet() {
  var str = 'My name is ' + this.name
  console.log(str);
}

greet.call();
```

## 3. bind
`bind`方法创建了一个新的函数，当bind()被调用时，bind传入的第一个参数指定了新函数的this值，且bind的后续参数作为新函数的参数。

**语法**
``` javascript
func.bind(thisArg, arg1, arg2, ...)

/**
* thisArg => 调用bind函数是作为this值传递目标函数的值。
* arg1, arg2, ... => 预先添加到绑定函数的参数列表中的参数。
*/
```
> bind()函数返回的是**原函数的拷贝**，并拥有指定的this以及初始参数。

**调用实例**

+ 创建绑定函数

[查看代码](http://js.jirengu.com/gucub/1/watch?js,console)

```javascript
var a = 10;

var obj = {
  a: 20,
  fn: function() {
    console.log(this.a);
  }
}

obj.fn();  //  调用fn的对象是obj，this指向obj

var func = obj.fn;
func();  // 调用func函数的为全局window对象，this指向window

var bindFunc = func.bind(obj);
bindFunc();  // bind方法返回的是一个新的函数，需要再次调用
```

+ 给函数添加预定参数


``` javascript
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37); 

var list2 = leadingThirtysevenList(); 
// [37]

var list3 = leadingThirtysevenList(1, 2, 3); 
// [37, 1, 2, 3]

var result2 = addThirtySeven(5); 
// 37 + 5 = 42 

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 ，第二个参数被忽略
```

## 4. 三者区别
+ call、apply的区别

>  call与apply的区别在于传入的参数不同，apply接受的第二个参数为有参数组成的数组或类数组对象，call接收的是多个若干个参数列表。

+ bind与call、apply的区别

>  bind()返回的是一个新的函数，调用了bind()需要将新的函数调用才可执行。



 


