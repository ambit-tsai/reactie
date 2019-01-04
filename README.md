[简体中文](README.zh-CN.md) | English

# Reactie
This solution will show you how to use React stack in IE8, than you don't have to change the technology stack when the customer uses legacy browser. It uses ES6, Webpack, Babel, ESLint, Ant Design 1.x, React 16, Reach, Rematch, etc. See <a href="https://ambit.gitee.io/reactie/" target="_blank">Reactie Todo</a>.


#### Shim&Polyfill
Choose the shims or polyfills that you need.
1. <a href="https://github.com/es-shims/es5-shim/" target="_blank">es5-shim</a>: A patch that provides all ES5 methods which can be faithfully emulated for the legacy browser
1. <a href="https://github.com/paulmillr/console-polyfill/" target="_blank">console-polyfill</a>: Browser console polyfill. Makes it safe to run `console.log()` etc always
1. <a href="https://babeljs.io/docs/en/babel-polyfill/" target="_blank">@babel/polyfill</a>: A patch emulates a full ES2015+ environment
1. <a href="https://github.com/ambit-tsai/es6-proxy-polyfill/" target="_blank">es6-proxy-polyfill</a>: `Proxy` polyfill based on ES3 supports IE8, Node.js, etc.
1. <a href="https://github.com/stefanpenner/es6-promise/" target="_blank">es6-promise</a>: A polyfill of the ES6 `Promise`
1. <a href="https://github.com/petkaantonov/bluebird/" target="_blank">bluebird</a>: A full featured `Promise` library with unmatched performance
1. <a href="https://github.com/camsong/fetch-ie8/" target="_blank">fetch-ie8</a>: A `window.fetch` JavaScript polyfill supporting IE8
1. <a href="https://github.com/RubyLouvre/fetch-polyfill/" target="_blank">fetch-polyfill2</a>: The `fetch` polyfill which supports all mainstream browsers, even IE6, IE7, IE8
1. <a href="https://github.com/aFarkas/html5shiv/" target="_blank">html5shiv</a>: This enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x
1. <a href="https://github.com/paulirish/matchMedia.js/" target="_blank">matchmedia-polyfill</a>: A polyfill for testing whether a CSS media type or media query applies
1. <a href="https://github.com/scottjehl/Respond/" target="_blank">Respond.js</a>: A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)
1. ...


#### Compile&Pack
1. *`Object.defineProperty`*: It can't be emulated in IE8, you must not use this method
2. *ES Module*: To avoid ES Module being transforms into `Object.defineProperty`, the preset `@babel/preset-env` should be configured as follows
```javascript
{
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', {
        loose: true,
        modules: 'commonjs',
      }]
    ]
  }
}
```
3. *Reserved Words*: Use  <a href="https://github.com/sophiebits/es3ify/" target="_blank">es3ify</a>, <a href="https://github.com/sorrycc/es3ify-loader/" target="_blank">es3ify-loader</a> or <a href="https://github.com/mishoo/UglifyJS2/" target="_blank">UglifyJS</a> to transform your code
```javascript
// Config
[
  new UglifyJsPlugin({
    uglifyOptions: {
      ie8: true,
      ...
    }
  })
]

// before
var obj = { default: 1 };

// after
var obj = { "default": 1 };
```
4. *Module Alias*: Create aliases to `import` or `require` certain modules more easily, for example using the React-like library `anujs` instead of `React`
```javascript
// Config
{
  resolve: {
    alias: {
      'react': 'anujs/dist/ReactIE',
      'react-dom': 'anujs/dist/ReactIE',
      ...
    }
  }
}

// Code
import React from 'react';  // `anujs` was loaded, actually
```


#### Error Solution
|Error|Reason|Resolve|
|:-:|:-:|:-:|
|`'JSON' is undefined`|Need to use IE8 Standards Mode|Add `<!DOCTYPE html>` and `<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>`|
|`无法获取未定义或 null 引用的属性“appendChild”`|`document.head` isn't exist in IE8|Add `document.head = document.getElementsByTagName('head')[0]`|
|`无法获取未定义或 null 引用的属性“focus”`, happen in `this.calendarInstance.focus()` (Use Ant Design 1.11.6)|`calendarInstance` is undefined, caused by `this.saveCalendarRef = refFn.bind(this, 'calendarInstance')`|Use `this.saveCalendarRef = refFn.bind(this, 'calendarInstance', this)`|
|`Object.prototype.propertyIsEnumerable: 'this' 不是 JavaScript 对象`, happen in the function `getLocation` of Reach (Use anujs 1.4.8)|After transform by Babel, `getLocation` uses `Object.prototype.propertyIsEnumerable.call(location, prop)` to judge whether `window.location` has certain properties, it doesn't work in IE8|See anujs issue <a href="https://github.com/RubyLouvre/anu/pull/344/" target="_blank">#344</a>|
|`Accessors not supported!`|Your code is transformed into `Object.defineProperty`|Find it, and change it.<br/>For example, Redux uses a library `symbol-observable` that was transformed into `Object.defineProperty`, so I have rewritten it, see <a href="patchs/symbol-observable.js" target="_blank">patchs/symbol-observable.js</a>|
|IE8 sinks into endless loop, happen in the function `isPlainObject` of Redux|`isPlainObject` uses the function `getPrototypeOf` of es5-shim to traverse the prototype chain, that causes endless loop|See es5-shim issue <a href="https://github.com/es-shims/es5-shim/pull/458/" target="_blank">#458</a>|


#### Reference
1. <a href="https://github.com/xcatliu/react-ie8/" target="_blank">react-ie8</a>
