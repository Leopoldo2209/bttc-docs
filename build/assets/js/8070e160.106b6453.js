"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Introduction to BTTC",l={unversionedId:"quickstart",id:"quickstart",title:"Introduction to BTTC",description:"BitTorrent Chain (referred to as \u201cBTTC\u201d below) is the first scalable heterogeneous cross-chain interoperability protocol on TRON, featuring PoS (Proof of Stake) consensus mechanism and multi-node validation. It supports smart contract extension through sidechains and is compatible with Ethereum-based smart contracts. Together with many other functions it boasts, it enables developers to migrate and develop DApps on the chain without a hitch.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/quickstart.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Build a Web3 App On BTTC",permalink:"/docs/tutorial/build-web3-app"}},s={},c=[{value:"Key Features of BTTC",id:"key-features-of-bttc",level:2},{value:"Developing with BTTC",id:"developing-with-bttc",level:2},{value:"wallet",id:"wallet",level:3},{value:"Smart contracts",id:"smart-contracts",level:3},{value:"Connecting to BTTC network",id:"connecting-to-bttc-network",level:3},{value:"Building a new dApp on BTTC?",id:"building-a-new-dapp-on-bttc",level:3},{value:"Already have a dApp?",id:"already-have-a-dapp",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-bttc"},"Introduction to BTTC"),(0,n.kt)("p",null,"BitTorrent Chain (referred to as \u201cBTTC\u201d below) is the first scalable heterogeneous cross-chain interoperability protocol on TRON, featuring PoS (Proof of Stake) consensus mechanism and multi-node validation. It supports smart contract extension through sidechains and is compatible with Ethereum-based smart contracts. Together with many other functions it boasts, it enables developers to migrate and develop DApps on the chain without a hitch."),(0,n.kt)("p",null,"This chapter is an introduction to the BTTC ecosystem guide for developers to understand how to develop on BTTC."),(0,n.kt)("h2",{id:"key-features-of-bttc"},"Key Features of BTTC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Speed"),":BitTorrent-Chain will solve this problem by using a high-throughput blockchain. A set of block producers will be selected. Proof of Stake will be applied to validate blocks, and proofs of blocks will be periodically sent to TRON main net or other blockchains. This mechanism ensures blocks will be confirmed in an extremely short time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Throughput"),":BitTorrent-Chain solves this problem by using a block producer layer, where block producers are able to produce blocks at a very fast rate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Scalability"),":In the future, BitTorrent-Chain can easily access more public chains while using the same decentralized POS layer to increase scalability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Low Transaction Fees"),":The BitTorrent-Chain achieves economies of scale by conducting a large number of transactions at the block producer layer, thus reducing costs and ensuring low transaction costs.")),(0,n.kt)("h2",{id:"developing-with-bttc"},"Developing with BTTC"),(0,n.kt)("p",null,"Tools on the ethereum blockchain are supported out of the box on BTTC. For example, Truffle, Remix and Web3js to name a few. Developers can deploy decentralised applications directly on the BTTC Donau test network or the main network if they have Ethereum development experience."),(0,n.kt)("p",null,"All details related to the BTTC network can be found here in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/networks/network"},"network documentation"),"."),(0,n.kt)("h3",{id:"wallet"},"wallet"),(0,n.kt)("p",null,"BTTC is EVM (Ethereum Virtual Machine) compatible. In order to interact with the BTTC network, developers first need to have an Ethereum-based wallet, either the ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," wallet or another EVM-enabled wallet."),(0,n.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,n.kt)("p",null,"Developers can use ",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),", ",(0,n.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle")," , ",(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," and other tools to test, compile, debug and deploy decentralised applications to the BTTC network."),(0,n.kt)("h3",{id:"connecting-to-bttc-network"},"Connecting to BTTC network"),(0,n.kt)("p",null,"Developers can add the BTTC network to ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask"),", which allows developers to connect to the BTTC network using RPC."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note:\nDevelopers can also use the same RPC in web3.js to connect the BTTC network.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Javascript\nconst Web3 = require('Web3')\n// Sign up for a free dedicated RPC URL at https://rpc.bt.io or other hosted node providers.\nconst web3 = new Web3('https://rpc.bt.io')\n")),(0,n.kt)("h3",{id:"building-a-new-dapp-on-bttc"},"Building a new dApp on BTTC?"),(0,n.kt)("p",null,"If developers are not experienced in building decentralised applications (dApps), here are some links to resources that will give developers a general idea of the tools needed to build, debug and deploy decentralised applications (dApps) to the BTTC network."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/tutorial/build-web3-app"},"Demo: Build a dApp on BTTC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.7.4/"},"Web3.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.ethers.io/v5/"},"Ethers.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"Remix")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trufflesuite.com/"},"Truffle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask"))),(0,n.kt)("h3",{id:"already-have-a-dapp"},"Already have a dApp?"),(0,n.kt)("p",null,"BTTC is compatible with EVM, so developers don't have to worry about the underlying architecture. Developers can easily migrate from an Ethereum Virtual Machine (EVM)-based chain to the BTTC network."))}u.isMDXComponent=!0}}]);