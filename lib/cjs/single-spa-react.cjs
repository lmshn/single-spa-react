"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){var n;if(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t),"function"!=typeof n)throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(r(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(r(e)));return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SingleSpaContext=null;try{exports.SingleSpaContext=require("react").createContext()}catch(e){}var i={React:null,ReactDOM:null,ReactDOMClient:null,rootComponent:null,loadRootComponent:null,renderType:"createRoot",errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{},unmountResolves:{}};function u(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function c(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||e.errorBoundaryClass||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=d(e,t,(function(){n(this)})),i=a(e,t)(),u=function(e){var t=e.reactDom,n=e.renderType,o=e.elementToRender,r=e.domElement,a=t[n];if("function"!=typeof a)throw new Error('renderType "'.concat(n,'" did not return a function.'));switch(n){case"createRoot":case"unstable_createRoot":case"createBlockingRoot":case"unstable_createBlockingRoot":var i=a(r);return i.render(o),i;case"hydrateRoot":return a(r,o);default:return a(o,r),null}}({elementToRender:r,domElement:i,reactDom:l(e),renderType:m(e)});e.domElements[t.name]=i,e.renderResults[t.name]=u}))}function s(e,t){return new Promise((function(n){e.unmountResolves[t.name]=n;var o=e.renderResults[t.name];o&&o.unmount?o.unmount():l(e).unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function p(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var o=d(e,t,null),r=e.renderResults[t.name];if(r&&r.render)r.render(o);else{var i=a(e,t)();l(e).render(o,i)}}))}function l(e){return e.ReactDOMClient||e.ReactDOM}function m(e){return"function"==typeof e.renderType?e.renderType():e.renderType}function d(e,n,o){var r=e.React.createElement(e.rootComponent,n),a=exports.SingleSpaContext?e.React.createElement(exports.SingleSpaContext.Provider,{value:n},r):r;return(e.errorBoundary||n.errorBoundary||e.errorBoundaryClass||n.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||n.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,n),a=e.React.createElement(e.errorBoundaryClass,n,a)),a=e.React.createElement(e.SingleSpaRoot,t(t({},n),{},{mountFinished:o,updateFinished:function(){e.updateResolves[n.name]&&(e.updateResolves[n.name].forEach((function(e){return e()})),delete e.updateResolves[n.name])},unmountFinished:function(){e.unmountResolves[n.name]&&(e.unmountResolves[n.name](),delete e.unmountResolves[n.name])}}),a)}exports.default=function(e){if("object"!==n(e))throw new Error("single-spa-react requires a configuration object");var o=t(t({},i),e);if(!o.React)throw new Error("single-spa-react must be passed opts.React");if(!o.ReactDOM&&!o.ReactDOMClient)throw new Error("single-spa-react must be passed opts.ReactDOM or opts.ReactDOMClient");if(!o.rootComponent&&!o.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(o.errorBoundary&&"function"!=typeof o.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!exports.SingleSpaContext&&o.React.createContext&&(exports.SingleSpaContext=o.React.createContext()),o.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(o);var r={bootstrap:u.bind(null,o),mount:c.bind(null,o),unmount:s.bind(null,o)};return o.parcelCanUpdate&&(r.update=p.bind(null,o)),r};
//# sourceMappingURL=single-spa-react.cjs.map
