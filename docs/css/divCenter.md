# div 水平垂直居中

## 相对+绝对定位

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

## 相对定位 + translate

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 相对定位 + 负 margin

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
```

## flex + margin

```css
.parent {
  display: flex;
}

.child {
  margin: auto;
}
```

## 仅 parent 设置 flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

这里只总结了部分水平垂直居中的方案，不是特别齐全，后续待补充。[查看方案实例](http://js.jirengu.com/qelar/1/watch?html,css,output)
