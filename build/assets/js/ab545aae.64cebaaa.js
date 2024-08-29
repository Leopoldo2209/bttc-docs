"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="Change Your Signer Address",s={unversionedId:"validator/change-signer-address",id:"validator/change-signer-address",title:"Change Your Signer Address",description:"For information on what a signer address is, see",source:"@site/docs/validator/change-signer-address.md",sourceDirName:"validator",slug:"/validator/change-signer-address",permalink:"/docs/validator/change-signer-address",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/validator/change-signer-address.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Change the signer address",id:"change-the-signer-address",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"change-your-signer-address"},"Change Your Signer Address"),(0,a.kt)("p",null,"For information on what a ",(0,a.kt)("a",{parentName:"p",href:"/docs/validator/glossary#signer-address"},"signer address")," is, see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/validator/core-components/key-management"},"Key Management"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Make sure your new validator node is fully synced and is running with the new signer address."),(0,a.kt)("h2",{id:"change-the-signer-address"},"Change the signer address"),(0,a.kt)("p",null,"This guide refers to your current validator node as Node 1 and your new validator node as Node 2."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to the ",(0,a.kt)("a",{parentName:"p",href:"https://wallet.polygon.technology/staking/"},"staking dasboard")," with the Node 1 address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On your profile, click ",(0,a.kt)("strong",{parentName:"p"},"Edit Profile"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"Signer's address")," field, provide the Node 2 address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"Signer's public key")," field, provide the Node 2 public key."),(0,a.kt)("p",{parentName:"li"},"To get the public key, run the following command on the validator node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"heimdalld show-account\n")))),(0,a.kt)("p",null,"Clicking ",(0,a.kt)("strong",{parentName:"p"},"Save")," will save your new details for your node. This essentially means that Node 1 will be your address that controls the stake, where the rewards will be sent to, etc. And Node 2 will now be performing activities like signing blocks, signing checkpoints, etc."))}p.isMDXComponent=!0}}]);