"use strict";(()=>{var b=Object.defineProperty,h=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var A=(r,t,e)=>t in r?b(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,T=(r,t)=>{for(var e in t||(t={}))m.call(t,e)&&A(r,e,t[e]);if(d)for(var e of d(t))w.call(t,e)&&A(r,e,t[e]);return r},x=(r,t)=>h(r,P(t));function y(r){if(typeof r!="object"||r===null)return!1;let t=Object.getPrototypeOf(r);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function K(r,t={}){if(!y(r)&&!Array.isArray(r))throw new TypeError("Expected a plain object or array");let{deep:e,compare:g}=t,a=[],u=[],c=n=>{let i=a.indexOf(n);if(i!==-1)return u[i];let o=[];return a.push(n),u.push(o),o.push(...n.map(s=>Array.isArray(s)?c(s):y(s)?f(s):s)),o},f=n=>{let i=a.indexOf(n);if(i!==-1)return u[i];let o={},s=Object.keys(n).sort(g);a.push(n),u.push(o);for(let l of s){let p=n[l],O;e&&Array.isArray(p)?O=c(p):O=e&&y(p)?f(p):p,Object.defineProperty(o,l,x(T({},Object.getOwnPropertyDescriptor(n,l)),{value:O}))}return o};return Array.isArray(r)?e?c(r):r.slice():f(r)}})();