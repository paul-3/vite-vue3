var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var f=(e,t,s)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))E.call(t,s)&&f(e,s,t[s]);if(v)for(var s of v(t))L.call(t,s)&&f(e,s,t[s]);return e};import{d as _,u as $,r as C,w as N,o as b,t as H,c as u,a as c,F as R,b as I,e as i,n as P,f as S,g as w,h as D,i as m,j as O,k as V,l as B,m as F,E as M,p as j,q,s as W,v as z}from"./vendor.44cfbd3f.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};K();var l=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const T=_({name:"NavDemo",setup(){const e=$(),t=C({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"}],navClick(o){e.push(o.path)}}),s=o=>{t.navList.forEach(n=>{const r=n;return r.isActive=r.path===o,r})};return N(()=>e.currentRoute.value,o=>{s(o.path)}),b(()=>{e.isReady().then(()=>{s(e.currentRoute.value.path)})}),h({},H(t))}}),G={class:"nav"},J={class:"nav-list"},Q=["onClick"];function U(e,t,s,o,n,r){return i(),u("aside",G,[c("ul",J,[(i(!0),u(R,null,I(e.navList,(a,d)=>(i(),u("li",{key:d,class:P(["nav-item flex-center",{active:a.isActive}]),onClick:p=>e.navClick(a)},S(a.name),11,Q))),128))])])}var g=l(T,[["render",U],["__scopeId","data-v-e3de071e"]]);const X={class:"header"},Y=_({setup(e){const t=$();return(s,o)=>(i(),u("div",X,[c("div",{class:"title",onClick:o[0]||(o[0]=n=>w(t).push("/"))}," \u8FD9\u662Fheader ")]))}});var y=l(Y,[["__scopeId","data-v-ae911ece"]]);const Z=_({components:{Header:y,Nav:g},setup(){}}),ee={class:"main-container"},te={class:"top"},ne={class:"bottom"},se={class:"left"},oe={class:"right"},re={class:"content"};function ae(e,t,s,o,n,r){const a=y,d=g,p=D("router-view");return i(),u("main",ee,[c("div",te,[m(a)]),c("div",ne,[c("div",se,[m(d)]),c("div",oe,[c("div",re,[m(p)])])])])}var x=l(Z,[["render",ae],["__scopeId","data-v-003c63aa"]]);const ce=_({name:"AppDemo",components:{Main:x}});function ie(e,t,s,o,n,r){const a=x;return i(),O(a)}var ue=l(ce,[["render",ie]]);const _e="modulepreload",k={},le="./",de=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${le}${o}`,o in k)return;k[o]=!0;const n=o.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":_e,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((d,p)=>{a.addEventListener("load",d),a.addEventListener("error",p)})})).then(()=>t())};var pe="./assets/logo.03d6d6da.png";const me=_({name:"PageHome"}),ve={class:"home-container page-container"},fe=c("img",{src:pe,alt:"vue logo",class:"vue-element-plus-logo"},null,-1),he=c("div",null,"home",-1),$e=[fe,he];function ge(e,t,s,o,n,r){return i(),u("div",ve,$e)}var ye=l(me,[["render",ge]]);const xe=_({setup(){}});function ke(e,t,s,o,n,r){return i(),u("div",null," vuex ")}var Ae=l(xe,[["render",ke]]);const Ee=[{path:"/",name:"Home",component:ye},{path:"/vuex",name:"Vuex",component:Ae},{path:"/axios",name:"Axios",component:()=>de(()=>import("./axios.1348a207.js"),["assets/axios.1348a207.js","assets/vendor.44cfbd3f.js"])}],Le=V({history:B(),routes:Ee}),Ce={count:0};var Ne=F({state(){return Ce},mutations:{increment(e){e.count++}},actions:{increment({commit:e}){e("increment")}},getters:{double(e){return 2*e.count}}});function be(e){return[M,j,q,W].forEach(t=>{e.use(t)}),e}const He=z(ue);be(He).use(Le).use(Ne).mount("#app");export{l as _};
