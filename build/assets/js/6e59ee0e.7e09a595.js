"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(m,s(s({ref:t},h),{},{components:r})):a.createElement(m,s({ref:t},h))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},s="What is Relayer",i={unversionedId:"bridge/relayer/relayer",id:"bridge/relayer/relayer",title:"What is Relayer",description:"Relayer is a kind of automatic cross-chain assets withdrawal service on Bittorrent Chain (BTTC).  After users send an order to transfer assets from BTTC to another block chain, relayer will automatically help users complete the withdrawal operation.",source:"@site/docs/bridge/relayer/relayer.md",sourceDirName:"bridge/relayer",slug:"/bridge/relayer/",permalink:"/docs/bridge/relayer/",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/bridge/relayer/relayer.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Relayer",permalink:"/docs/category/relayer"},next:{title:"Deploy Relayer Node",permalink:"/docs/bridge/relayer/relayerdeploy"}},l={},c=[{value:"How Relayer Works",id:"how-relayer-works",level:2},{value:"Apply to Become a Relayer",id:"apply-to-become-a-relayer",level:2},{value:"Relayer Reward",id:"relayer-reward",level:3},{value:"Reserve Gas Fee",id:"reserve-gas-fee",level:3},{value:"Punishment Rule",id:"punishment-rule",level:3},{value:"Order Amount Limit",id:"order-amount-limit",level:3}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-relayer"},"What is Relayer"),(0,n.kt)("p",null,"Relayer is a kind of automatic cross-chain assets withdrawal service on Bittorrent Chain (BTTC).  After users send an order to transfer assets from BTTC to another block chain, relayer will automatically help users complete the withdrawal operation."),(0,n.kt)("p",null,"In the case of not using relayer service, users submit a requirement to transfer assets from BTTC to another block chain, and after waiting for about 15-30 minutes,when the assets reach the target chain, the users need to trigger the cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," on the target chain to withdraw assets. Because calling the contract needs to pay the gas fee, the users usually need to create an account on the target chain in advance, and ensure that there are enough native tokens in the account of the target chain to pay the gas fee for withdrawing assets from the cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract"),"."),(0,n.kt)("p",null,"In the case of using relayer service on the other hand, when the assets reach the target chain, relayer will help users withdraw the assets from cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," to the users' ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address"),", simplifying the users cross-chain operations."),(0,n.kt)("h2",{id:"how-relayer-works"},"How Relayer Works"),(0,n.kt)("p",null,"The mechanism of Relayer is shown as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7893).Z,width:"2068",height:"1156"})),(0,n.kt)("p",null,"As shown in the figure above, when users submit an asset cross-chain transfer request from BTTC to Ethereum on ",(0,n.kt)("a",{parentName:"p",href:"https://bt.io"},"bt.io"),", they can select Fast mode or Classic mode. If they select Classic mode,meaning not using Relayer service, ",(0,n.kt)("a",{parentName:"p",href:"https://bt.io"},"bt.io")," will directly call the cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," to execute cross-chain operations, after assets reach the cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," on Ethereum chain, users need to manually call the cross-chain ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," to withdraw the asset to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address"),"."),(0,n.kt)("p",null,"If the users select Fast mode, meaning using Relayer service, the users can select an appropriate Relayer provider according to the fee quotation, then the cross-chain asset will be first transferred to Relayer contract, the Relayer contract will divide the asset, transfer one part of the cross-chain asset to the Relayer provider as service fee, and then call the ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," to transfer the remaining part to ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," for cross-chain operation."),(0,n.kt)("p",null,"Since the users have appointed the ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address")," when submitting the cross-chain request on BTTC chain, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address")," will be included in the cross-chain message to reach Ethereum together, anybody can call the ",(0,n.kt)("inlineCode",{parentName:"p"},"Bridge Contract")," to extract the assets, but assets can only be transferred to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address")," in the message. After the Relayer submit the cross-chain request, the service program deployed by Relayer provider will listen to the cross-chain event, when the assets reach Ethereum chain, the Relayer service program will automatically call the cross-chain contract on Ethereum by an external account to withdraw the assets to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Receiver Address"),", and meanwhile pay the gas fee by this external account."),(0,n.kt)("p",null,"When the users select Fast mode, they can choose to convert a small amount of transferred assets into the corresponding target chain gas fee, so as to meet the scenario where the user needs to pay the gas fee to make a transfer after receiving the cross-chain assets on the target chain. Relayer will bear the additional costs caused by exchange rate fluctuations."),(0,n.kt)("h2",{id:"apply-to-become-a-relayer"},"Apply to Become a Relayer"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bt.io"},"bt.io")," has opened the Relayer application channel, everyone can apply to become a Relayer to help users accomplish cross-chain transaction and earn the service fee as income at the mean time. The Relayer can set the service fees according to its own operation cost and the withdrawl gas fee on target chain. Users will choose a Relayer based on factors such as the service fee, stability and user evaluation."),(0,n.kt)("p",null,"Before applying to become a Relayer, first prepare an idle server to deploy the Relayer service program, please refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doc.bt.io/docs/bridge/relayer/relayerdeploy"},"Deploying the Relayer Service")),(0,n.kt)("p",null,"Then, prepare a deposit of at least 25 billion BTT on the BTTC mainnet. The deposit needs to remain in the mortgage state during the working period of the Relayer. To apply to become a relayer and pledge a deposit, please refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://bt.io/relayer-apply"},"Apply to Become a Relayer"),"."),(0,n.kt)("p",null,"If a Relayer no longer participates in the BTTC network, application to quit can be made at any time. And the deposit can be withdrawn after succesful quitting, please refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://doc.bt.io/docs/bridge/relayer/relayerwithdraw"},"Quitting the Relayer and Withdrawing the Deposit"),"."),(0,n.kt)("h3",{id:"relayer-reward"},"Relayer Reward"),(0,n.kt)("p",null,"The service fee paid by users for the Relayer service will all be sent to the Relayer account as a reward in real time by smart contract. "),(0,n.kt)("p",null,"The Relayer can customize the service fee, the recommended service fee is 120% of the transaction gas fee, the calculation is as follows: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," (cross-chain gas fee / cross-chain token unit price) * 120% \n")),(0,n.kt)("p",null,"Relayer service will charge the current cross-chain tokens, that is, what kind of cross-chain token is transferred and what kind of token is charged, when calculating the service fee, the gas fee and cross-chain service fee will be converted into the same price unit for calculation."),(0,n.kt)("h3",{id:"reserve-gas-fee"},"Reserve Gas Fee"),(0,n.kt)("p",null,"After the Relayer application is approved, the new Relayer can start accepting orders. In the process of dealing with orders, the Relayer needs to call smart contracts to help users accomplish receiving cross-chain assets. Because calling smart contracts will consumes a certain amount of gas as transaction fee, it is recommended that the Relayer prepare enough gas or balance to cope with such gas consumption before accepting orders. The recommended reserved gas fee:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended Reserved Gas Fee"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TRON"),(0,n.kt)("td",{parentName:"tr",align:null},"50,000 TRX or equivalent resource (Energy & Bandwidth)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"5 ETH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BSC"),(0,n.kt)("td",{parentName:"tr",align:null},"1 BNB")))),(0,n.kt)("p",null,"If the order fails to be completed due to lack of gas fee etc., the Relayer will be deducted a certain amount of deposit, which will also lead to a decrease in the order completion rate. The system will not recommend Relayers with successful order completion rate lower than 60% to users."),(0,n.kt)("h3",{id:"punishment-rule"},"Punishment Rule"),(0,n.kt)("p",null,"If the Relayer can not complete a order within the specified time, it needs to be deducted a certain amount of deposit as a penalty. The penalty amount is calculated by first obtaining the larger value between Relayer charge fee and transaction fee consumed by helping the users accomplish cross-chain transaction, and then multiply the value by the penalty factor A, which is set 1.3 currently."),(0,n.kt)("p",null,"The form of punishment is to trigger the smart contract to deduct the deposit directly on the BTTC network. When the deposit balance is lower than 5 billion BTT, the Relayer can not accept orders any more due to insufficient deposit. When the deposit balance is added to 5 billion BTT or more, the order will be automatically resumed."),(0,n.kt)("h3",{id:"order-amount-limit"},"Order Amount Limit"),(0,n.kt)("p",null,"Relayer needs to have enough deposit to be able to accept orders, and the amount of deposit determines the amount of orders a Relayer can accept. The amount of orders a Relayer can accept is calculated as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"deposit amount - minimum deposit amount / penalty factor / largest cost of an order\n")),(0,n.kt)("p",null,"Currently\uff0cthe minimum deposit amount is 5 billion BTT, the penalty factor is 1.3, and the largest cost of an order is 3.6 million BTT."))}d.isMDXComponent=!0},7893:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/relayer-en-744863ff3a79ac7a36b9a05cc41c2f4b.png"}}]);