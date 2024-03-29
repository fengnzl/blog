# 仅用 6 个字符编写 JavaScript

::: tip

* 原文：[Writing JavaScript With Only Six Characters](https://javascript.christmas/2019/17)
* 作者：[Erik Wendel](https://javascript.christmas/2019/twitter.com/ewndl)
* 翻译：[城南花已开](https://fengnzl.github.io/)

:::

你可能在网上见过这样的情况，某些人在网上只是用了 6 种不同的字符，这看起来很有趣但却能运行。但是，这些代码具体是怎么工作的呢？

基本上，你可以使用以下字符编写任意的 JavaScript 程序。

```js
[]()!+
```

这是众所周知的技巧，但是很少的开发者知道它具体是如何工作的。今天，我们将要探寻其背后的运行机制。让我们只通过这几个字符来创建一个字符串`"self"`。

我们的目标字符串将是`"self"`，以向编程语言 Self 致敬，因为它是 JavaScript 的灵感之一。

## 它是如何工作的：基础部分

我们可以滥用 JavaScript 的类型系统和奇怪的类型转换机制，这使得我们可以让其他字符串变得多余。

我们将通过以下方法来使用这 6 个字符：通过`[]`创建数组，通过逻辑非运算符`!`和加法运算符`+`，我们可以对齐进行运算，最后通过使用`()`进行分组。

让我们从一个简单的数组开始：

```js
[]
```

对 array 进行 `!`操作，将 array 转化为 boolean 值。array 被认为 truthy 。因此，对其进行取反操作得到`false`：

```js
![] === false
```

不同类型的值不能进行相加，除非转换为相似的数据类型。JavaScript 进行类型转换时遵循特定的规则：

- 在表达式`2 + true`中，JavaScript 将`true`转化为 number 类型，从而表达式变为`2 + 1`。
- 在表达式`2 + "2"`中，JavaScript 将会将 number 类型转换为 string 类型，从而表达式变为`2 + "2" ==== "2 + 2"`。

这些类型转换机制并不是那么糟糕，但是它马上就会变得有趣。

## JavaScript Array 转换

多个数组进行相加，它们将会转换成字符串并连接在一起。空数组将被转换为空字符串。因此，将两个空数组相加将会得到一个空字符串。

```js
[] + [] === "" + "" === ""
```

当数组与其他数据进行相加操作，会发生同样的类型转换。比如说布尔值。

```js
![] + [] === "false" + "" === "false"
```

是的，我们现在已经创建一个字符串，它包含了目标字符串`"self"
`中的字符。

如果我们能创建一些数字，我们就能通过正确的顺序将字符提取出来。

```js
"flase"[3] === "s"

(![] + [])[3] === "s"
```

让我们一起寻找数字吧！

## 创建数字

在上一节中，我们将数组转换为了布尔值。我们能否通过`+`操作符将其转换为数字呢？

```js
+[] ===  ???
```

JavaScript 首先会尝试调用数组的`valueOf`方法，`valueOf`将会调用失败然后 JavaScript 尝试调用数组的`toString()`方法。

```js
+[] === +""
```

字符串转换为数字遵循以下规则：

```js
+"42" === 42
+"esg" === NaN
+"" === 0
```

空字符串是一个 falsy 值，就像`null`、`undefined`和 0，因此将其中任意一个转换为数字都会得到 0。

```js
+null === 0
+undefined === 0
+false === 0
+NaN === 0
+"" === 0
```

因此，将空数组转换为数字，首先会将其转换为字符串，最后得到数字 0。

```js
+[] === +"" === 0
```

是的，我们已经掌握了如何创建数字！虽然不是很有用。但是，我们可以继续进行转换的游戏。

```js
!0 === !false
!false === true

!0 === true
```

对 0 进行取反操作后将 falsey 值 0 转换为了布尔值。一个 truthy 布尔值将会转换为数字 1。

```js
+true === 1
```

万岁，两个上述类型转换为两个 1，这样我们就可以得到 2 了。

通过我们已经学到的替换来创建数字：

```js
1 === +true === +(!0) === +(![]) === +!+[]

1 === +!+[]
2 === +!+[] + +!+[]
3 === +!+[] + +!+[] + +!+[]
4 === +!+[] + +!+[] + +!+[] + +!+[]
```

## 融会贯通

让我们把所学过的东西放在一起。

- 空数组是 truthy 值，因此对其取反，将会得到 false：`![] //flase`
- JavaScript 转换规则表明，两个数组进行相加，会分别对数组使用 toString 方法：`[] +[] // ""`
- 将空数组转换为数字 0，当对其取反得到 true， 在将其转换为数字获得 1：`+(!(+[])) === 1`

```js
![] + [] === "false"
+!+[] === 1
(![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
 ^^^^^^^^        ^^^^^^^^        ^^^^^^^^        ^^^^^^^^
  "false"         "false"         "false"         "false"
  
^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^^	^^^^^^^^^^^^^^
   "false"         "false"         "false"         "false"
```

因此我们最后的表达式为：

```js
(![] + [])[+!+[] + !+[] + !+[]] +
(![] + [])[+!+[] + !+[] + !+[] + !+[]] +
(![] + [])[+!+[] + !+[]] +
(![] + [])[+[]]
```

最后将我们的表达式适用于 JavaScript 这个特定的语言，当然空格和换行是被禁止的：

```js
(![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
```

简直不费吹灰之力！

谢谢你，Brendan Eich ❤️

