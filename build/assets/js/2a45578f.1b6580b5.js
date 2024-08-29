"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=o,v=h["".concat(c,".").concat(u)]||h[u]||p[u]||n;return a?r.createElement(v,i(i({ref:t},d),{},{components:a})):r.createElement(v,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={},i="Who is Validator?",s={unversionedId:"basics/bttc-basics/who-is-a-validator",id:"basics/bttc-basics/who-is-a-validator",title:"Who is Validator?",description:"A validator is a participant in the network who locks up BTT tokens in the system and runs Delivery validator and Bttc block producer nodes in order to help run the network. Validators stake their BTT tokens as collateral to work for the security of the network and in exchange for their service, earn rewards.",source:"@site/docs/basics/bttc-basics/who-is-a-validator.md",sourceDirName:"basics/bttc-basics",slug:"/basics/bttc-basics/who-is-a-validator",permalink:"/docs/basics/bttc-basics/who-is-a-validator",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/basics/bttc-basics/who-is-a-validator.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"basics",previous:{title:"Who is Delegator?",permalink:"/docs/basics/bttc-basics/who-is-a-delegator"},next:{title:"BTTC PoS Architecture",permalink:"/docs/basics/bttc-basics/bttc-pos-architecture"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Core compenents",id:"core-compenents",level:2},{value:"End-to-end flow for a BTTC validator",id:"end-to-end-flow-for-a-bttc-validator",level:2},{value:"Economics",id:"economics",level:2},{value:"Setting up a validator node",id:"setting-up-a-validator-node",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"who-is-validator"},"Who is Validator?"),(0,o.kt)("p",null,"A validator is a participant in the network who locks up BTT tokens in the system and runs Delivery validator and Bttc block producer nodes in order to help run the network. Validators stake their BTT tokens as collateral to work for the security of the network and in exchange for their service, earn rewards."),(0,o.kt)("p",null,"Rewards are distributed to all stakers proportional to their stake at every checkpoint with the exception being the proposer getting an additional bonus. User reward balance gets updated in the contract which is referred to while claiming rewards."),(0,o.kt)("p",null,"Stakes are at risk of getting slashed in case the validator node commits a malicious act like double signing which also affects the linked delegators at that checkpoint."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Validators on the BTTC network are selected through an on-chain auction process which happens at regular intervals. These selected validators participate as block producers and verifiers. Once a checkpoint is validated by the participants, updates are made on the parent chain (the TRON mainnet) which releases the rewards for validators depending on their stake in network."),(0,o.kt)("p",null,"BTTC relies on a set of validators to secure the network. The role of validators is to run a full node, produce blocks, validate and participate in consensus, and commit checkpoints on the TRON/BSC/Ethereum mainnet. To become a validator, one needs to stake their BTT tokens with staking management contracts residing on the TRON mainnet."),(0,o.kt)("h2",{id:"core-compenents"},"Core compenents"),(0,o.kt)("p",null,"Delivery reads the events emitted by the staking contracts to pick the validators for the current set with their updated stake ratio, which is used also by Bttc while producing blocks."),(0,o.kt)("p",null,"Delegation is also recorded in the staking contracts and any update in the validator power or node signer address or unbonding requests comes into effect when the next checkpoint gets committed."),(0,o.kt)("h2",{id:"end-to-end-flow-for-a-bttc-validator"},"End-to-end flow for a BTTC validator"),(0,o.kt)("p",null,"Validators set up their signing nodes, sync data and then stake their tokens on the TRON mainnet staking contracts to be accepted as a validator in the current set. If a slot is vacant, the validator is accepted immediately. Otherwise, one needs to go through the replacement mechanism to get a slot."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is limited space for accepting new validators. New validators can only join the active set when a currently active validator unbonds. A new auction process for validator replacement will be rolled out.")),(0,o.kt)("p",null,"Block producers are chosen from the validator set where it is the responsibility of the selected validators to produce blocks for a given span."),(0,o.kt)("p",null,"Nodes at Delivery validate the blocks being produced, participate in consensus and commit checkpoints on the TRON/BSC/Ethereum mainnet at defined intervals."),(0,o.kt)("p",null,"The probability of validators to get selected as the block producer or checkpoint proposer is dependent on one\u2019s stake ratio including delegations in the overall pool."),(0,o.kt)("p",null,"Validators receive rewards at every checkpoint as per their stake ratio, after deducting the proposer bonus which is disbursed to the checkpoint proposer."),(0,o.kt)("p",null,"One can opt out of the system at any time and can withdraw tokens once the unbonding period ends."),(0,o.kt)("h2",{id:"economics"},"Economics"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/rewards"},"Rewards"),"."),(0,o.kt)("h2",{id:"setting-up-a-validator-node"},"Setting up a validator node"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/build-validator-node"},"Validator Node Deployment"),"."))}p.isMDXComponent=!0}}]);