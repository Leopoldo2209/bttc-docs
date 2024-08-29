"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7546],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return i?a.createElement(b,o(o({ref:t},p),{},{components:i})):a.createElement(b,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5071:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const r={},o="What is Solidity?",l={unversionedId:"basics/blockchain-basics/basics-solidity",id:"basics/blockchain-basics/basics-solidity",title:"What is Solidity?",description:"Solidity is an object-oriented high-level programming language used to implement smart contracts, which allow programs to be written to manage the behavior of accounts in a blockchain network. The Solidity language supports contract inheritance and has many built-in contract libraries. Solidity is similar to programming languages like C++, Python, and JavaScript.",source:"@site/docs/basics/blockchain-basics/basics-solidity.md",sourceDirName:"basics/blockchain-basics",slug:"/basics/blockchain-basics/basics-solidity",permalink:"/docs/basics/blockchain-basics/basics-solidity",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/basics/blockchain-basics/basics-solidity.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"basics",previous:{title:"What is Ethereum\uff1f",permalink:"/docs/basics/blockchain-basics/basics-ethereum"},next:{title:"What is an account\uff1f",permalink:"/docs/basics/blockchain-basics/basics-accounts"}},s={},c=[{value:"Solidity Tools",id:"solidity-tools",level:2},{value:"<strong>\ud83d\udcdcResources</strong>",id:"resources",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-solidity"},"What is Solidity?"),(0,n.kt)("p",null,"Solidity is an object-oriented high-level programming language used to implement smart contracts, which allow programs to be written to manage the behavior of accounts in a blockchain network. The Solidity language supports contract inheritance and has many built-in contract libraries. Solidity is similar to programming languages like C++, Python, and JavaScript."),(0,n.kt)("p",null,"Solidity consists of components below,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variable"),(0,n.kt)("li",{parentName:"ul"},"Operator"),(0,n.kt)("li",{parentName:"ul"},"Loop"),(0,n.kt)("li",{parentName:"ul"},"Conditional"),(0,n.kt)("li",{parentName:"ul"},"Modifier"),(0,n.kt)("li",{parentName:"ul"},"Function"),(0,n.kt)("li",{parentName:"ul"},"Object and Type"),(0,n.kt)("li",{parentName:"ul"},"Event"),(0,n.kt)("li",{parentName:"ul"},"API")),(0,n.kt)("p",null,"Before coding in Solidity, it is important to be familiar with the blockchain mental model, because the blockchain application architecture is very different from the ordinary web application architecture. Servers and databases in a blockchain network are as decentralized as clients. In other words, the client can also act as a server and database. So you must always keep the following points in mind when coding in Solidity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory is limited - each memory element requires all nodes on the blockchain to confirm and store that element."),(0,n.kt)("li",{parentName:"ul"},"Computational complexity is limited."),(0,n.kt)("li",{parentName:"ul"},"Reading data is free."),(0,n.kt)("li",{parentName:"ul"},"Every write operation has an associated cost - paid in ETH. This cost is measured in gas.")),(0,n.kt)("h2",{id:"solidity-tools"},"Solidity Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Truffle: DApp Framework"),(0,n.kt)("li",{parentName:"ul"},"Remix: online IDE"),(0,n.kt)("li",{parentName:"ul"},"Web3"),(0,n.kt)("li",{parentName:"ul"},"MetaMask")),(0,n.kt)("h2",{id:"resources"},(0,n.kt)("strong",{parentName:"h2"},"\ud83d\udcdcResources")),(0,n.kt)("p",null,"\ud83d\udcda ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/"},"Solidity Docs")))}u.isMDXComponent=!0}}]);