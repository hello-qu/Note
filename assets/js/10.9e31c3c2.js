(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{168:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("这次是一次需求引起的反思。现在 MVVM 框架越来越流行，并且大多数都已经实现了双向绑定，使得人们无需考虑如何去获取 DOM 元素，给他们增加样式，实现各种各样的动画等等。很多动画库都实现了绚丽的效果并且无需来考虑兼容性。但是 JS 变得越来越便利的时候，我们好像忘记了一些基本技能，比如如何用原生实现各种动画，以及拖拽。\n"),t._v("\n这次我们的需求是需要实现一个卡列表拖拽转账的功能。卡列表数量不定，高度不定。具体交互是 鼠标长按某一张卡，然后拖到另一张卡上面去进行转账。中间不能有卡顿，并且卡列表太长时，卡片滑到底部或顶部，能够自动触发滚动事件。所以具体要实现以下几点：")]),t._v(" "),n("ul",[n("li",[t._v("要识别拖动元素和滚动屏幕两种效果，具体是用户长按某一张卡就可以拖动，否则就是直接滚动屏幕。")]),t._v(" "),n("li",[t._v("长按拖动实际是复制该元素的一个副本，副本完成拖动效果，实际的元素位置不变。")]),t._v(" "),n("li",[t._v("拖动的时候要识别是否接近顶部或者底部，这个时候就要触发滚动条来使屏幕滚动。")]),t._v(" "),n("li",[t._v("识别拖动的目标位置，当拖动完成时能获取拖动结束时目标元素的信息。")])]),t._v(" "),n("p",[t._v("刚开始时找了好久的源码、插件什么的，但是都不是很满意，因为有些插件定制的功能不用不到，改动的话又需要花费大量时间。所以接下来的话还是自己手动实现把！")]),t._v(" "),n("p",[t._v("前期做了一些准备工作（其实就是踩那些插件的坑），定了下面的方案，首先不能用 H5 的"),n("code",[t._v("Drag")]),t._v("事件 和 "),n("code",[t._v("mouse")]),t._v("，因为它不支持移动端,Drag 是H5的新特性 在低版本浏览器的兼容性也不好，所以,综合考虑 采用了 "),n("code",[t._v("touch")]),t._v(" 系列的事件。")]),t._v(" "),n("p",[t._v("代码是次要的，主要是来说说思路。")]),t._v(" "),n("blockquote",[n("p",[t._v("识别长按和拖动")])]),t._v(" "),n("p",[t._v("这个主要是通过给元素设置定位来实现的。我们知道移动端touch有三个事件 "),n("code",[t._v("touchstart``touchmove")]),t._v(" "),n("code",[t._v("touchend")]),t._v(" 如果是长按会把拖拽元素的定位设置成"),n("code",[t._v("absolute")]),t._v("\n根据计算的定位可以来进行拖动，如果元素的"),n("code",[t._v("position:reletive")]),t._v(",则只会触发滚动条。具体的实现方法是在 touchstart 事件中 加个 "),n("code",[t._v("setTimeout")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//部分代码")]),t._v("\nele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       longTouch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("longTouch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);