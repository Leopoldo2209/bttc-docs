"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8298],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={},i="Derivatives",s={unversionedId:"validator/core-components/derivatives",id:"validator/core-components/derivatives",title:"Derivatives",description:"BTTC supports delegation via validator shares. By using this design, it is easier to distribute rewards and slash with scale on the TRON  mainnet contracts without much computation.",source:"@site/docs/validator/core-components/derivatives.md",sourceDirName:"validator/core-components",slug:"/validator/core-components/derivatives",permalink:"/docs/validator/core-components/derivatives",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/validator/core-components/derivatives.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{}},l={},d=[{value:"The flow in the contract",id:"the-flow-in-the-contract",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"derivatives"},"Derivatives"),(0,n.kt)("p",null,"BTTC supports delegation via validator shares. By using this design, it is easier to distribute rewards and slash with scale on the TRON  mainnet contracts without much computation."),(0,n.kt)("p",null,"Delegators delegate by purchasing shares of a finite pool from validators. Each validator has their own validator share token."),(0,n.kt)("p",null,"Let's call the fungible validator share tokens VBTT for Validator A. When a user delegates to Validator A, the user is issued VBTT based on the exchange rate of the BTT-VBTT pair. As users accrue value, the exchange rate indicates that the user can withdraw more BTT for each VBTT. When validators get slashed, users withdraw less BTT for their VBTT."),(0,n.kt)("p",null,"Note that BTT is the staking token. A delegator needs to have BTT tokens to participate in the delegation."),(0,n.kt)("p",null,"Initially, Delegator D buys tokens from the Validator A specific pool when the exchange rate is 1 BTT per 1 VBTT."),(0,n.kt)("p",null,"When a validator gets rewarded with more BTT tokens, the new tokens are added to the pool."),(0,n.kt)("p",null,"Let's say with the current pool of 100 BTT tokens,  10 BTT rewards are added to the pool. Since the total supply of VBTT tokens did not change due to rthe ewards, the exchange rate becomes 1 BTT per 0.9 VBTT. Now, Delegator D gets more BTT for the same amount if shares. Similar to slashing, if 10 BTT gets slashed from the pool, the new exchange rate becomes 1 BTT per 1.1 VBTT."),(0,n.kt)("h2",{id:"the-flow-in-the-contract"},"The flow in the contract"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"buyVoucher"),": This function is attributed when performing a delegation process towards a validator. The delegation ",(0,n.kt)("inlineCode",{parentName:"p"},"_amount")," is first transferred to ",(0,n.kt)("inlineCode",{parentName:"p"},"stakeManager"),", which on confirmation mints delegation shares via ",(0,n.kt)("inlineCode",{parentName:"p"},"Mint")," using the current ",(0,n.kt)("inlineCode",{parentName:"p"},"exchangeRate"),"."),(0,n.kt)("p",null,"The exchange rate is calculated as per the formula:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ExchangeRate = (totalDelegatedPower + delegatorRewardPool) / totalDelegatorShares")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sellVoucher"),": This is function that is called when a delegator is unbonding from a validator. This function basically initiates the process of selling the vouchers bought during delegation. There is a withdrawal period that is taken into consideration before the delegators can ",(0,n.kt)("inlineCode",{parentName:"p"},"claim")," their tokens."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"withdrawRewards"),": As a delegator, you can claim your rewards by invoking the ",(0,n.kt)("inlineCode",{parentName:"p"},"withdrawRewards")," function.  "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reStake"),": Restaking can work in two ways: a) delegator can buy more shares using ",(0,n.kt)("inlineCode",{parentName:"p"},"buyVoucher")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"reStake")," rewards. You can restake by staking more tokens towarda a validator or you can restake your accumulated rewards as a delegator. Purpose of ",(0,n.kt)("inlineCode",{parentName:"p"},"reStaking")," is that since delegator's validator has now more active stake, they will earn more rewards for that and so will the delegator."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"unStakeClaimTokens"),": Once the withdrawal period is over, the delegators who sold their shares can claim their BTT tokens."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"updateCommissionRate"),": Updates the commission % for the validator. See also Validator Commission Operations"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"updateRewards"),": When a validator gets rewards for submitting a checkpoint, this function is called for disbursements of rewards between the validator and delegators."))}p.isMDXComponent=!0}}]);