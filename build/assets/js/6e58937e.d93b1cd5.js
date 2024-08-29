"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3865],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=r,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return o?n.createElement(f,i(i({ref:t},m),{},{components:o})):n.createElement(f,i({ref:t},m))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8678:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},i="Commission Operations",s={unversionedId:"validator/validator-commission-operations",id:"validator/validator-commission-operations",title:"Commission Operations",description:"You can set up and change your commission as a validator.",source:"@site/docs/validator/validator-commission-operations.md",sourceDirName:"validator",slug:"/validator/validator-commission-operations",permalink:"/docs/validator/validator-commission-operations",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/validator/validator-commission-operations.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"validatorSidebar",previous:{title:"Port Management",permalink:"/docs/validator/port_management"},next:{title:"Glossary",permalink:"/docs/validator/glossary"}},c={},l=[{value:"Change your commission rate",id:"change-your-commission-rate",level:2}],m={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commission-operations"},"Commission Operations"),(0,r.kt)("p",null,"You can set up and change your ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/glossary#commission"},"commission")," as a validator."),(0,r.kt)("p",null,"A validator is entitled to charge any commission rate. The minimum commission would be 0% and the maximum commission would be 100% of the rewards earned."),(0,r.kt)("p",null,"You are allowed to change the commission rates as many times as you would like."),(0,r.kt)("p",null,"As a validator, it is one of your responsibilities to inform the community on commission changes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/responsibilities"},"Validator Responsibilities"),"."),(0,r.kt)("h2",{id:"change-your-commission-rate"},"Change your commission rate"),(0,r.kt)("p",null,"You can change your commission rate."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your owner address, login to the ",(0,r.kt)("a",{parentName:"p",href:"https://bt.io/staking/myAccount"},"staking dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"My Node")," page in ",(0,r.kt)("inlineCode",{parentName:"p"},"My Account"),"\uff0cclick the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button to the right of the commission rate\n",(0,r.kt)("img",{src:o(5451).Z,width:"2962",height:"1434"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your new commission rate\uff0cclick ",(0,r.kt)("strong",{parentName:"p"},"Save")," button\n",(0,r.kt)("img",{src:o(8822).Z,width:"2954",height:"1428"})))),(0,r.kt)("p",null,"Once you have confirmed and signed the transaction your commission rate will be set."),(0,r.kt)("p",null,"Once the commission is updated, there is a cool down period of 80 checkpoints."))}p.isMDXComponent=!0},5451:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/commission_1-f07f0fe3adbc5db99698d50cbe7c4902.png"},8822:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/commission_2-f831dbdd83810a0b9b060f42fea9a1b2.png"}}]);