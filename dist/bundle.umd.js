!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).GrpReactUI={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(t),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};
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
    ***************************************************************************** */var o={exports:{}};
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)t.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(o);var s=o.exports;e.Button=function(e){var t,r=e.btnType,o=void 0===r?"default":r,i=e.className,l=e.disabled,c=void 0!==l&&l,f=e.size,p=e.children,u=e.href,d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["btnType","className","disabled","size","children","href"]),b=s("btn",i,((t={})["btn-".concat(o)]=o,t["btn-".concat(f)]=f,t.disabled="link"===o&&c,t));return"link"===o&&u?n.default.createElement("a",a({"data-test":"link",className:b,href:u},d),p):n.default.createElement("button",a({"data-test":"button",className:b,disabled:c},d),p)},e.Progress=function(e){var t=e.percent,r=e.strokeHeight,a=void 0===r?15:r,o=e.showText,s=void 0===o||o,i=e.styles,l=e.theme,c=void 0===l?"primary":l;return n.default.createElement("div",{className:"progress-bar",style:i,"data-test":"progress"},n.default.createElement("div",{className:"progress-bar-outer",style:{height:"".concat(a,"px")},"data-test":"progress-outer"},n.default.createElement("div",{className:"progress-bar-inner color-".concat(c),style:{width:"".concat(t,"%")},"data-test":"progress-inner"},s&&n.default.createElement("span",{className:"inner-text","data-test":"progress-inner-text"},"".concat(t,"%")))))},Object.defineProperty(e,"__esModule",{value:!0})}));
