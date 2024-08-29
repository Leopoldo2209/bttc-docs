"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4320],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(r),s=a,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return r?n.createElement(g,o(o({ref:e},m),{},{components:r})):n.createElement(g,o({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4379:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={},o="Port Management",i={unversionedId:"validator/port_management",id:"validator/port_management",title:"Port Management",description:"Here is a list of default ports used across BTTC nodes:",source:"@site/docs/validator/port_management.md",sourceDirName:"validator",slug:"/validator/port_management",permalink:"/docs/validator/port_management",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/validator/port_management.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"validatorSidebar",previous:{title:"Delivery and Bttc Snapshots",permalink:"/docs/node/snapshot"},next:{title:"Commission Operations",permalink:"/docs/validator/validator-commission-operations"}},p={},d=[{value:"Bttc",id:"bttc",level:2},{value:"Delivery",id:"delivery",level:2}],m={toc:d};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"port-management"},"Port Management"),(0,a.kt)("p",null,"Here is a list of default ports used across BTTC nodes:"),(0,a.kt)("h2",{id:"bttc"},"Bttc"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ufeffName"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Tags"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network listening port"),(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null},"public"),(0,a.kt)("td",{parentName:"tr",align:null},"Network listening port. Bttc uses this port to connect to peers and sync")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WS server"),(0,a.kt)("td",{parentName:"tr",align:null},"8546"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"Websocket port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pprof server"),(0,a.kt)("td",{parentName:"tr",align:null},"7071"),(0,a.kt)("td",{parentName:"tr",align:null},"internal, monitoring"),(0,a.kt)("td",{parentName:"tr",align:null},"Pprof server to collect metrics from bttc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UDP discovery"),(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"Bootnode default port (for peer discovery)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RPC server"),(0,a.kt)("td",{parentName:"tr",align:null},"8545"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"RPC port to send transaction and get data from Bttc. Delivery uses this port to get Bttc headers for checkpoints")))),(0,a.kt)("h2",{id:"delivery"},"Delivery"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ufeffName"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Tags"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RPC server"),(0,a.kt)("td",{parentName:"tr",align:null},"26657"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"RPC port to send transaction and get data from Delivery")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus server"),(0,a.kt)("td",{parentName:"tr",align:null},"26660"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus server API server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"P2P server"),(0,a.kt)("td",{parentName:"tr",align:null},"26656"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"RPC port to send transaction and get data from Delivery")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pprof server"),(0,a.kt)("td",{parentName:"tr",align:null},"6060"),(0,a.kt)("td",{parentName:"tr",align:null},"can-be-public, internal"),(0,a.kt)("td",{parentName:"tr",align:null},"Pprof server to collect metrics from Delivery")))))}c.isMDXComponent=!0}}]);