import{a as v}from"./index.Dkaqzkgy.js";var s={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function y(){if(f)return t;f=1;var o=v(),l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function a(n,r,c){var e,u={},i=null,_=null;c!==void 0&&(i=""+c),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)R.call(r,e)&&!x.hasOwnProperty(e)&&(u[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)u[e]===void 0&&(u[e]=r[e]);return{$$typeof:l,type:n,key:i,ref:_,props:u,_owner:d.current}}return t.Fragment=m,t.jsx=a,t.jsxs=a,t}var p;function E(){return p||(p=1,s.exports=y()),s.exports}var j=E();const O=["en","pt","fr","es","ru","zh","ja"],S="moosti_locale";function q(){try{const o=localStorage.getItem(S);return O.includes(o??"")?o:void 0}catch{return}}export{j,q as r};
