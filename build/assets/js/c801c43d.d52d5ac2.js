"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),y=n,v=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},i="Validator FAQ",l={unversionedId:"faq/validator-faq",id:"faq/validator-faq",title:"Validator FAQ",description:"1. How to set up a validator node on the mainnet?",source:"@site/docs/faq/validator-faq.md",sourceDirName:"faq",slug:"/faq/validator-faq",permalink:"/docs/faq/validator-faq",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/faq/validator-faq.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"faqSidebar",previous:{title:"Delegator FAQ",permalink:"/docs/faq/delegate-faq"},next:{title:"Staking FAQ",permalink:"/docs/faq/staking-faq"}},s={},d=[{value:"1. How to set up a validator node on the mainnet?",id:"1-how-to-set-up-a-validator-node-on-the-mainnet",level:3},{value:"2. How can a new Validator replace an existing one?",id:"2-how-can-a-new-validator-replace-an-existing-one",level:3},{value:"3. Can I start bttc before delivery is completely synced?",id:"3-can-i-start-bttc-before-delivery-is-completely-synced",level:3},{value:"4. Validator delivery is unable to connect to peers",id:"4-validator-delivery-is-unable-to-connect-to-peers",level:3},{value:"5. delivery shows &quot;Error: Wrong Block.Header.AppHash. Expected xxxx&quot;",id:"5-delivery-shows-error-wrong-blockheaderapphash-expected-xxxx",level:3},{value:"6. It is not clear which private Key I should add when I generate a validator key",id:"6-it-is-not-clear-which-private-key-i-should-add-when-i-generate-a-validator-key",level:3},{value:"7. Are the private keys the same for delivery and bttc keystore?",id:"7-are-the-private-keys-the-same-for-delivery-and-bttc-keystore",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validator-faq"},"Validator FAQ"),(0,n.kt)("h3",{id:"1-how-to-set-up-a-validator-node-on-the-mainnet"},"1. How to set up a validator node on the mainnet?"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://doc.bt.io/docs/validator/getting-started"},"Validator Overview"),"."),(0,n.kt)("h3",{id:"2-how-can-a-new-validator-replace-an-existing-one"},"2. How can a new Validator replace an existing one?"),(0,n.kt)("p",null,"There is limited space for accepting new validators. New validators can only join the active set when a currently active validator unbonds."),(0,n.kt)("p",null,"A new auction process for validator replacement will be rolled out."),(0,n.kt)("h3",{id:"3-can-i-start-bttc-before-delivery-is-completely-synced"},"3. Can I start bttc before delivery is completely synced?"),(0,n.kt)("p",null,"No, you cannot. If you start your bttc without delivery being completely synced, you face issues on your bttc."),(0,n.kt)("h3",{id:"4-validator-delivery-is-unable-to-connect-to-peers"},"4. Validator delivery is unable to connect to peers"),(0,n.kt)("p",null,"This typically means that your sentry delivery is running into issues. Check your sentry delivery and see if the service is running fine. If the service is stopped, then restarting the service on your sentry should resolve this issue. Similarly, after fixing your sentry, a restart of your delivery service should also resolve the problem."),(0,n.kt)("h3",{id:"5-delivery-shows-error-wrong-blockheaderapphash-expected-xxxx"},'5. delivery shows "Error: Wrong Block.Header.AppHash. Expected xxxx"'),(0,n.kt)("p",null,"This error usually occurs when delivery service is stuck on a block and there is no rewind option available on delivery."),(0,n.kt)("p",null,"Solution: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reset delivery completely"),(0,n.kt)("li",{parentName:"ul"},"Sync from the snapshot again")),(0,n.kt)("h3",{id:"6-it-is-not-clear-which-private-key-i-should-add-when-i-generate-a-validator-key"},"6. It is not clear which private Key I should add when I generate a validator key"),(0,n.kt)("p",null,"The private key to be used is your wallet's address where your BTT tokens are stored."),(0,n.kt)("h3",{id:"7-are-the-private-keys-the-same-for-delivery-and-bttc-keystore"},"7. Are the private keys the same for delivery and bttc keystore?"),(0,n.kt)("p",null,"Yes, the private key used for generating the validator keys and bttc keystore are the same."))}p.isMDXComponent=!0}}]);