(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{388:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"driver列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#driver列表"}},[t._v("#")]),t._v(" driver列表")]),t._v(" "),a("h2",{attrs:{id:"cqhttp-http-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cqhttp-http-driver"}},[t._v("#")]),t._v(" cqhttp-http-driver")]),t._v(" "),a("p",[t._v("通过http通信方式与onebot端进行通信。")]),t._v(" "),a("p",[t._v("gocq的host和port配置分别对应leafBot的post_host和post_port")]),t._v(" "),a("p",[t._v("gocq的url配置分别对应leafBot的listen_host和listen_port")]),t._v(" "),a("blockquote",[a("p",[t._v("使用http链接方式可能会使oncnnect和ondisconnect插件失效")])]),t._v(" "),a("h3",{attrs:{id:"gocq关键配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gocq关键配置"}},[t._v("#")]),t._v(" gocq关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP 通信设置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否关闭正向HTTP服务器")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务端监听地址")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务端监听端口")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向HTTP超时时间, 单位秒")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小值为5，小于5将会忽略本项设置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用默认中间件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向HTTP POST地址列表")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- url: '' # 地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  secret: ''           # 密钥")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  secret: ''          # 密钥")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"leafbot关键配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leafbot关键配置"}},[t._v("#")]),t._v(" leafBot关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cqhttp_http_driver相关配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web_hook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("post_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("post_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("self_id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1603214019")]),t._v("\n")])])]),a("h2",{attrs:{id:"cqhttp-positive-ws-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cqhttp-positive-ws-driver"}},[t._v("#")]),t._v(" cqhttp-positive-ws-driver")]),t._v(" "),a("p",[t._v("gocq作为服务端，leafBot最为客户端，通过websocket的链接方式进行通信")]),t._v(" "),a("blockquote",[a("p",[t._v("使用正向ws会导致不能一个leafBot链接多个gocq")])]),t._v(" "),a("h3",{attrs:{id:"gocq关键配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gocq关键配置-2"}},[t._v("#")]),t._v(" gocq关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正向WS设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ws")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否禁用正向WS服务器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正向WS服务器监听地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正向WS服务器监听端口")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用默认中间件")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"leafbot关键配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leafbot关键配置-2"}},[t._v("#")]),t._v(" leafBot关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bot运行地址，若和gocq在同一台机器则只需要填写127.0.0.1即可，否则填写0.0.0.0，gocq配置你的公网地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bot运行端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),a("h2",{attrs:{id:"cqhttp-reverse-ws-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cqhttp-reverse-ws-driver"}},[t._v("#")]),t._v(" cqhttp-reverse-ws-driver")]),t._v(" "),a("p",[t._v("gocq作为客户端，leafBot作为服务的，通过websocket的链接方式进行通信")]),t._v(" "),a("blockquote",[a("p",[t._v("推荐使用方式，可支持多q")])]),t._v(" "),a("h3",{attrs:{id:"gocq关键配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gocq关键配置-3"}},[t._v("#")]),t._v(" gocq关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ws-reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否禁用当前反向WS服务")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向WS Universal 地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意 设置了此项地址后下面两项将会被忽略")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("universal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080/cqhttp/ws\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向WS API 地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//your_websocket_api.server\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向WS Event 地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//your_websocket_event.server\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重连间隔 单位毫秒")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reconnect-interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用默认中间件")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"leafbot关键配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leafbot关键配置-3"}},[t._v("#")]),t._v(" leafBot关键配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bot运行地址，若和gocq在同一台机器则只需要填写127.0.0.1即可，否则填写0.0.0.0，gocq配置你的公网地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bot运行端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),a("h2",{attrs:{id:"自定义实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现"}},[t._v("#")]),t._v(" 自定义实现")]),t._v(" "),a("p",[t._v("leafBot定义了一套关于driver的接口")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Driver")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Description:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Driver "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Run")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Description: 运行该驱动的接口，该接口应该为阻塞式运行")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetEvent")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Description: 返回一个chan，该chan为事件传递的chan")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @return chan")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnConnect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selfId "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientRole "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnDisConnect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selfId "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetBot")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Description: 获取一个实现了APi接口的bot")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @param int64 bot的id")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @return interface{}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetBots")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Description: 获取所有bot")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @return map[int64]interface{}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBots")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一些配置信息")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加一个webhook监听")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWebHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selfID "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postHost "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postPort "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置access——token")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("实现该接口即可作为leafBot的driver进行加载")])])}),[],!1,null,null,null);s.default=e.exports}}]);