webpackJsonp([26],{1132:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n.n(i),c=n(52),f=n(228),l=n(162),p=n(83),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("Token");this.props.LogoutUser(e)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p.Redirect,{path:this.props.location.pathname,to:"/login",Component:l.default}))}}]),t}(a.a.Component),y=function(e){return{}};t.default=Object(c.b)(y,{LogoutUser:f.b})(b)}});
//# sourceMappingURL=26.d8b4b170.chunk.js.map