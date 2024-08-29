"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,u=m["".concat(s,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="State Sync Mechanism",c={unversionedId:"validator/core-components/state-sync-mechanism",id:"validator/core-components/state-sync-mechanism",title:"State Sync Mechanism",description:"Validators on the Delivery layer pick up the StateSynced event and pass the event on to the Bttc layer.",source:"@site/docs/validator/core-components/state-sync-mechanism.md",sourceDirName:"validator/core-components",slug:"/validator/core-components/state-sync-mechanism",permalink:"/docs/validator/core-components/state-sync-mechanism",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/validator/core-components/state-sync-mechanism.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"validatorSidebar",previous:{title:"Transaction Fees",permalink:"/docs/validator/core-components/transaction-fees"},next:{title:"Validator Node Deployment",permalink:"/docs/validator/build-validator-node"}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-sync-mechanism"},"State Sync Mechanism"),(0,a.kt)("p",null,"Validators on the Delivery layer pick up the StateSynced event and pass the event on to the Bttc layer. "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"receiver contract")," inherits IStateReceiver, and custom logic sits inside the onStateReceive function."),(0,a.kt)("p",null,"Things required from dapps/users to work with state-sync are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Call the syncState function."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"syncState")," function emits an event called ",(0,a.kt)("inlineCode",{parentName:"li"},"StateSynced(uint256 indexed id, address indexed contractAddress, bytes data);")),(0,a.kt)("li",{parentName:"ol"},"All the validators on the Delivery chain receive the ",(0,a.kt)("inlineCode",{parentName:"li"},"StateSynced")," event. Any validator that wishes to get the transaction fee for the state sync sends the transaction to Delivery."),(0,a.kt)("li",{parentName:"ol"},"Once the ",(0,a.kt)("inlineCode",{parentName:"li"},"state-sync")," transaction on Delivery is included in a block, it is added to the pending state-sync list."),(0,a.kt)("li",{parentName:"ol"},"After every sprint on Bttc layer, the Bttc node fetches the pending state-sync events from Delivery via an API call."),(0,a.kt)("li",{parentName:"ol"},"The receiver contract inherits the ",(0,a.kt)("inlineCode",{parentName:"li"},"IStateReceiver")," interface, and custom logic of decoding the data bytes and performing any action sits inside the onStateReceive function.")))}p.isMDXComponent=!0}}]);