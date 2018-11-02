[简体中文](README.zh-CN.md) | English

# Reactie

#### 项目介绍
主流技术结合生产环境，将技术栈延申至IE8.


#### Shim&Polyfill

1. <a href="https://github.com/es-shims/es5-shim/" target="_blank">es5-shim</a>: es5-shim.js and es5-shim.min.js monkey-patch a JavaScript context to contain all EcmaScript 5 methods that can be faithfully emulated with a legacy JavaScript engine. Note: As es5-shim.js is designed to patch the native Javascript engine, it should be the library that is loaded first;
1. <a href="https://github.com/es-shims/es5-shim/" target="_blank">es5-sham</a>：为部分无法被完美模拟的方法提供支持；
1. <a href="https://github.com/paulmillr/console-polyfill/" target="_blank">console-polyfill</a>：保证`window.console`的安全使用；
1. <a href="https://babeljs.io/docs/en/babel-polyfill/" target="_blank">@babel/polyfill</a>：
1. <a href="https://github.com/ambit-tsai/es6-proxy-polyfill/" target="_blank">es6-proxy-polyfill</a>：
1. <a href="https://github.com/stefanpenner/es6-promise/" target="_blank">es6-promise</a>：Promise对象
1. <a href="https://github.com/petkaantonov/bluebird/" target="_blank">bluebird</a>：Promise对象
1. <a href="https://github.com/camsong/fetch-ie8/" target="_blank">fetch-ie8</a>：`window.fetch`
1. <a href="https://github.com/RubyLouvre/fetch-polyfill/" target="_blank">fetch-polyfill2</a>：`window.fetch`
1. <a href="https://github.com/aFarkas/html5shiv/" target="_blank">html5shiv</a>：HTML5元素
1. <a href="https://github.com/paulirish/matchMedia.js/" target="_blank">matchmedia-polyfill</a>：`window.matchMedia`
1. <a href="https://github.com/scottjehl/Respond/" target="_blank">Respond.js</a>：A fast & lightweight polyfill for min/max-width CSS3 Media Queries

#### Compile&Pack

1. Reserved Words: 
1. ES Module: 
1. `Object.defineProperty`: 

#### Tech Stack

1. React
1. 路由管理
1. 状态管理
1. UI组件
1. CSS Module
1. 代码拆分

#### 其它
1. JSON

#### 码云特技

1. React 16：anujs
2. 路由器：Reach Router
3. 状态管理：Rematch
4. UI组件库：Ant Design 1.x
5. CSS Module
6. 代码拆分