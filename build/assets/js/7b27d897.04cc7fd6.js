"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,b=u["".concat(c,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));r(4996);const n={},i="BTTC PoS Architecture",l={unversionedId:"basics/bttc-basics/bttc-pos-architecture",id:"basics/bttc-basics/bttc-pos-architecture",title:"BTTC PoS Architecture",description:"BTTC Network is a blockchain application platform that provides Proof-of-Stake sidechains.",source:"@site/docs/basics/bttc-basics/bttc-pos-architecture.md",sourceDirName:"basics/bttc-basics",slug:"/basics/bttc-basics/bttc-pos-architecture",permalink:"/docs/basics/bttc-basics/bttc-pos-architecture",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/basics/bttc-basics/bttc-pos-architecture.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"basics",previous:{title:"Who is Validator?",permalink:"/docs/basics/bttc-basics/who-is-a-validator"}},c={},s=[{value:"BTTC smart contracts (on TRON)",id:"bttc-smart-contracts-on-tron",level:2},{value:"Delivery (Proof-of-Stake validator layer)",id:"delivery-proof-of-stake-validator-layer",level:2},{value:"Bttc (Block Producer Layer)",id:"bttc-block-producer-layer",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bttc-pos-architecture"},"BTTC PoS Architecture"),(0,o.kt)("p",null,"BTTC Network is a blockchain application platform that provides Proof-of-Stake sidechains."),(0,o.kt)("p",null,"Architecturally, the beauty of BTTC is its elegant design, which features a generic validation layer separated from varying execution environments like full-blown EVM sidechains."),(0,o.kt)("p",null,"To enable the PoS mechanism on our platform, a set of ",(0,o.kt)("strong",{parentName:"p"},"staking")," management contracts are deployed on TRON, as well as a set of incentivized validators running ",(0,o.kt)("strong",{parentName:"p"},"Deivery")," and ",(0,o.kt)("strong",{parentName:"p"},"Bttc")," nodes. TRON/BSC/Ethereum are the first basechains BTTC supports, but BTTC intends to offer support for additional basechains, based on community suggestions and consensus, to enable an interoperable decentralized Layer 2 blockchain platform."),(0,o.kt)("p",null,"BTTC PoS has a three-layer architecture:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Staking smart contracts on TRON"),(0,o.kt)("li",{parentName:"ol"},"Delivery (Proof of Stake layer)"),(0,o.kt)("li",{parentName:"ol"},"Bttc (Block producer layer)")),(0,o.kt)("h2",{id:"bttc-smart-contracts-on-tron"},"BTTC smart contracts (on TRON)"),(0,o.kt)("p",null,"BTTC maintains a set of smart contracts on Ethereum, which handle the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Staking management for the Proof-of-Stake layer"),(0,o.kt)("li",{parentName:"ul"},"Delegation management including validator shares"),(0,o.kt)("li",{parentName:"ul"},"Checkpoints/snapshots of sidechain state")),(0,o.kt)("h2",{id:"delivery-proof-of-stake-validator-layer"},"Delivery (Proof-of-Stake validator layer)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delivery")," is the PoS validator node that works in consonance with the Staking contracts on TRON to enable the PoS mechanism on BTTC. We have implemented this by building on top of the Tendermint consensus engine with changes to the signature scheme and various data structures. It is responsible for block validation, block producer committee selection, checkpointing a representation of the sidechain blocks to TRON/BSC/Ethereum in our architecture and various other responsibilities."),(0,o.kt)("p",null,"Delivery layer handles the aggregation of blocks produced by Bttc into a merkle tree and publishing the merkle root periodically to the root chain. This periodic publishing are called ",(0,o.kt)("inlineCode",{parentName:"p"},"checkpoints"),". For every few blocks on Bttc, a validator (on the Delivery layer):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Validates all the blocks since the last checkpoint"),(0,o.kt)("li",{parentName:"ol"},"Creates a merkle tree of the block hashes"),(0,o.kt)("li",{parentName:"ol"},"Publishes the merkle root to the main chain")),(0,o.kt)("p",null,"Checkpoints are important for two reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Providing finality on the Root Chain"),(0,o.kt)("li",{parentName:"ol"},"Providing proof of burn in withdrawal of assets")),(0,o.kt)("p",null,"A bird\u2019s eye view of the process can be explained as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A subset of active validators from the pool are selected to act as block producers for a span. The Selection of each span will also be consented by at least 2/3 in power. These block producers are responsible for creating blocks and broadcasting it to the remaining of the network."),(0,o.kt)("li",{parentName:"ul"},"A checkpoint includes the root of all blocks created during any given interval. All nodes validate the same and attach their signature to it."),(0,o.kt)("li",{parentName:"ul"},"A selected proposer from the validator set is responsible for collecting all signatures for a particular checkpoint and committing the same on the main-chain."),(0,o.kt)("li",{parentName:"ul"},"The responsibility of creating blocks and also proposing checkpoints is variably dependent on a validator\u2019s stake ratio in the overall pool.")),(0,o.kt)("h2",{id:"bttc-block-producer-layer"},"Bttc (Block Producer Layer)"),(0,o.kt)("p",null,"Bttc is BTTC block producer layer - the entity responsible for aggregating transactions into blocks."),(0,o.kt)("p",null,"Block producers are periodically shuffled via committee selection on Delivery in durations termed as a ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," in BTTC. Blocks are produced at the ",(0,o.kt)("strong",{parentName:"p"},"Bttc")," node and the sidechain VM is EVM-compatible. Blocks produced on Bttc are also validated periodically by Delivery nodes, and a checkpoint consisting of the Merkle tree hash of a set of blocks on Bttc is committed to TRON/BSC/Ethereum periodically."))}d.isMDXComponent=!0}}]);