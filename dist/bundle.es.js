import e from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},t.apply(this,arguments)};var r,a={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/r=a,function(){var e={}.hasOwnProperty;function t(){for(var r=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var s=typeof n;if("string"===s||"number"===s)r.push(n);else if(Array.isArray(n)){if(n.length){var o=t.apply(null,n);o&&r.push(o)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)e.call(n,i)&&n[i]&&r.push(i);else r.push(n.toString())}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}();var n=a.exports,s=function(r){var a,s=r.btnType,o=void 0===s?"default":s,i=r.className,l=r.disabled,c=void 0!==l&&l,p=r.size,f=r.children,d=r.href,u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(r,["btnType","className","disabled","size","children","href"]),b=n("btn",i,((a={})["btn-".concat(o)]=o,a["btn-".concat(p)]=p,a.disabled="link"===o&&c,a));return"link"===o&&d?e.createElement("a",t({"data-test":"link",className:b,href:d},u),f):e.createElement("button",t({"data-test":"button",className:b,disabled:c},u),f)},o=function(t){var r=t.percent,a=t.strokeHeight,n=void 0===a?15:a,s=t.showText,o=void 0===s||s,i=t.styles,l=t.theme,c=void 0===l?"primary":l;return e.createElement("div",{className:"progress-bar",style:i,"data-test":"progress"},e.createElement("div",{className:"progress-bar-outer",style:{height:"".concat(n,"px")},"data-test":"progress-outer"},e.createElement("div",{className:"progress-bar-inner color-".concat(c),style:{width:"".concat(r,"%")},"data-test":"progress-inner"},o&&e.createElement("span",{className:"inner-text","data-test":"progress-inner-text"},"".concat(r,"%")))))};export{s as Button,o as Progress};
