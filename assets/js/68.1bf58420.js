(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{554:function(s,t,a){"use strict";a.r(t);var n=a(29),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"认识-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识-flow"}},[s._v("#")]),s._v(" 认识 Flow")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://flow.org/en/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flow"),t("OutboundLink")],1),s._v(" 是 JavaScript 代码的静态类型检查器。其官网上表示它能让你更有效率。使您更快、更聪明、更有信心、更大规模地编写代码。Vue.js  2.X  版本的源码利用了 Flow 做静态类型检查，3.X 版本之后使用 TypeScript 来进行类型检查，其当初选择 Flow 的大致理由可参考"),t("a",{attrs:{href:"https://www.zhihu.com/question/46397274",target:"_blank",rel:"noopener noreferrer"}},[s._v("尤大的回答"),t("OutboundLink")],1),s._v("。但对于 2.X 版本了解 FLow 有利于我们更好的理解源码。")]),s._v(" "),t("h2",{attrs:{id:"安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[s._v("#")]),s._v(" 安装和使用")]),s._v(" "),t("p",[s._v("通过以下命令我们可以安装 flow")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#npm install -g flow-bin")]),s._v("\n$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" flow-bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("安装完成后我们在要执行静态检查的文件跟目录下执行一下 flow init ，这个命令会生成  .flowconfig 文件，在这个文件中我们可以进行一些高级配置，如忽略的目、指定版本、指定声明文件等（详情请戳官网）。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" flow-test\n$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" flow-test\n$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flow init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在生成 .flowconfig 文件之后，我们就可以通过对需要进行 Flow 检查的文件，在开头增加标识，告诉 Flow 你得检查这个文件。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* @flow */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow  只要带上面这两个注释，都会进行类型检测")]),s._v("\n\n# 或者\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* @flow weak */")]),s._v(" 只对有加类型注解的变量进行类型检测\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"使用-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-flow"}},[s._v("#")]),s._v(" 使用 Flow")]),s._v(" "),t("p",[s._v("在有了 . flowconfig 文件之后，你可以立即检测目录及子目录下所有带检测文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flow check\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是它不是最高效的，因为这个命令每次都会将目录下所有的文件进行检测，如果我们想每次只检测修改的文件，那么可以使用 flow server，来检测只有修改的文件，首先使用 "),t("code",[s._v("flow")]),s._v(" 来开启服务，然后修改文件之后再次运行 "),t("code",[s._v("flow")]),s._v(" 即可，代项目完成则关闭 flow server 即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flow "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启一个后台服务，输出首次检测结果")]),s._v("\n$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flow "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后续使用flow，连接正在运行的后台服务，输出检测结果")]),s._v("\n$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flow stop "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭flow server")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"工作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作方式"}},[s._v("#")]),s._v(" 工作方式")]),s._v(" "),t("p",[s._v("Flow 主要有两种类型检查方式：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("类型推断")]),s._v("：Flow 拥有自动类型的推导机制，可以通过变量的上下文来推导其类型，并持续跟踪检测")]),s._v(" "),t("li",[t("strong",[s._v("类型注释")]),s._v("：我们可以通过注释变量的类型，来对变量进行检测")])]),s._v(" "),t("h3",{attrs:{id:"类型推断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[s._v("#")]),s._v(" 类型推断")]),s._v(" "),t("p",[s._v("该方法只需要在文件头部增加 flow 标识，即可完成类型检查，这就是类型推断。比如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("arr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("上述代码中，我们声明变量 "),t("code",[s._v("name")]),s._v(" 为 vue ，Flow 会自动推断出 "),t("code",[s._v("name")]),s._v(" 的类型为 string 类型，如果后续对 name 进行了不适用字符串的操作，那么就会报错（注：如果是这样 "),t("code",[s._v("console.log(name + 1)")]),s._v(" 则不会报错，因为在 JS 中加操作符中字符串和数字相加是合法的）。同理我们声明的函数 "),t("code",[s._v("join")]),s._v(" 期待的参数是数组，而我们输入了字符串。")]),s._v(" "),t("h3",{attrs:{id:"类型注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型注释"}},[s._v("#")]),s._v(" 类型注释")]),s._v(" "),t("p",[s._v("类型注释通常以 ：开头，可以用在变量声明，方法参数和返回值当中，下面是一些常用的类型注释：")]),s._v(" "),t("h4",{attrs:{id:"基本类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本类型"}},[s._v("#")]),s._v(" 基本类型")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("num")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" boolean "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("unde")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined 的类型是 void")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nu")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null 的类型是 null")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("**注意：**在 Flow 中，像 string、number 等类型名称还有以大写开头的类型名称，代表其对应值是 new 关键字所创建。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字面量值对应的类型名称是小写 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// String 函数是将参数转化成一个字符串，类型仍是小写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 大写开头的类型名称，其对应的值是 new 创建出来的类型实例；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" add "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'11'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("上述代码 Flow 即可检测出错误，因为函数参数期待为数字，而我们却传递了字符串。")]),s._v(" "),t("h4",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Array"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// arr.push(1)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("arr2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var arr3: [number, boolean, string] = ['1', false, 'aa'];")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("数组类型注释是 "),t("code",[s._v("Array<T>")]),s._v(" ，其中 T 代表类型，当指定类型之后，我们再向数组中添加不符合类型的元素，Flow 检查就会报错。同时另一种是元组类型的注释，如 arr2 ，其每一项的元素类型都会被标注出来，数组不能被改变，因此通常用于函数返回值的检测。")]),s._v(" "),t("h4",{attrs:{id:"类和对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类和对象"}},[s._v("#")]),s._v(" 类和对象")]),s._v(" "),t("p",[s._v("对象的类型注释，需要指定对象属性的类型，对于较多属性的对象，我们通常将类型定义和属性内容相分离。同时类的类型注释与对象类似，其既可以对类自身属性做类型检测，也可以对构造函数的参数进行类型检测。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y 可以是字符串或者数字")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ntype objType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Array"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Foo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("obj")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" objType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h4",{attrs:{id:"变量可选类型和对象可选属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量可选类型和对象可选属性"}},[s._v("#")]),s._v(" 变量可选类型和对象可选属性")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" boolean\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("其中若想  "),t("code",[s._v("?T")]),s._v("  代表变量除了规定的类型之外，还可以为 "),t("code",[s._v("null")]),s._v(" 或者 "),t("code",[s._v("undefined")]),s._v(" 。而对象中问号在属性名后，冒号前代表该对象可以没有这个属性，但是如果存在这个属性，就必须为规定的 number 类型。")]),s._v(" "),t("p",[s._v("基本上常用的几种类型注释就是上面几种，如果想要了解更多的类型，请移步"),t("a",{attrs:{href:"https://flow.org/en/docs/types/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。同时由于我们加入了类型检查，这对于 JavaScript 来说属于不规范的。因此我们需要在上线前将其移除，Flow 提供了 "),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//flow.org/en/docs/tools/flow-remove-types/",target:"_blank",rel:"noopener noreferrer"}},[s._v("flow-remove-types"),t("OutboundLink")],1),s._v(" 和 "),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//flow.org/en/docs/tools/babel/",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel 插件"),t("OutboundLink")],1),s._v("两种方法来去除标注内容。")]),s._v(" "),t("h2",{attrs:{id:"vue-js-中的-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-中的-flow"}},[s._v("#")]),s._v(" Vue.js 中的 Flow")]),s._v(" "),t("p",[s._v("Vue.js 的目录下存在 "),t("code",[s._v(".flowconfig")]),s._v(" 文件，用于 Flow 的配置，其中 "),t("code",[s._v("[libs]")]),s._v(" 中指明了当前 Flow 的配置目录，为 "),t("code",[s._v("flow")]),s._v(" ，表示指定的自定义类型和库都在该文件下。注意，其默认的配置目录为 "),t("code",[s._v("flow-typed")]),s._v(" 。以下是 "),t("code",[s._v("flow")]),s._v(" 目录下的相关文件信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("flow\n├── compiler.js        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译相关")]),s._v("\n├── component.js       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 组件数据结构")]),s._v("\n├── global-api.js      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Global API 结构")]),s._v("\n├── modules.js         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三方库定义")]),s._v("\n├── options.js         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选项相关")]),s._v("\n├── ssr.js             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端渲染相关")]),s._v("\n├── vnode.js           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟 node 相关")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("在阅读源码中，遇到了某种类型想要进行了解的时候，再回来查阅即可。")])])}),[],!1,null,null,null);t.default=r.exports}}]);