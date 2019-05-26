(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{185:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"glues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glues","aria-hidden":"true"}},[s._v("#")]),s._v(" glues")]),s._v(" "),a("p",[s._v("不管 middleware、controller 或者是 service，都是与用户的访问链路相关的，但我们希望做一些与链路无关的操作，比如连接数据库、进程退出报警等操作。这些操作可以选择放到 glues 目录。")]),s._v(" "),a("p",[s._v("glues 目录的扫描规则和 middlewares、services 目录相同，以第一级目录的文件名或者目录名作为 key，将 glues 导出的内容挂载到 daruk.glue 和 ctx.glue 上。比如下面的目录结构会得到 "),a("code",[s._v("daruk.glue.mysql")]),s._v("、"),a("code",[s._v("ctx.glue.mysql")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("── glues\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\t├── mysql\n│   ├── index.ts\n│   ├── connect.ts\n")])])]),a("p",[s._v("glues 目录下的文件或者文件夹中的 index.ts 需要导出一个函数，函数的返回值就是 glues 的内容，函数的参数是 daruk 实例：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/glues/mysql/index.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Daruk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daruk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./connect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("daruk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Daruk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}],!1,null,null,null);t.default=n.exports}}]);