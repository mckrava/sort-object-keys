var g=Object.defineProperty,w=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var A=(r,e,n)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,T=(r,e)=>{for(var n in e||(e={}))b.call(e,n)&&A(r,n,e[n]);if(O)for(var n of O(e))k.call(e,n)&&A(r,n,e[n]);return r},x=(r,e)=>w(r,K(e));import l from"is-plain-obj";function I(r,e={}){if(!l(r)&&!Array.isArray(r))throw new TypeError("Expected a plain object or array");let{deep:n,compare:h}=e,i=[],p=[],u=t=>{let a=i.indexOf(t);if(a!==-1)return p[a];let s=[];return i.push(t),p.push(s),s.push(...t.map(o=>Array.isArray(o)?u(o):l(o)?c(o):o)),s},c=t=>{let a=i.indexOf(t);if(a!==-1)return p[a];let s={},o=Object.keys(t).sort(h);i.push(t),p.push(s);for(let f of o){let y=t[f],d;n&&Array.isArray(y)?d=u(y):d=n&&l(y)?c(y):y,Object.defineProperty(s,f,x(T({},Object.getOwnPropertyDescriptor(t,f)),{value:d}))}return s};return Array.isArray(r)?n?u(r):r.slice():c(r)}export{I as default};
