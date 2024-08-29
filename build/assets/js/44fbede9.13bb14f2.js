"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=u(r),c=n,y=k["".concat(i,".").concat(c)]||k[c]||p[c]||l;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={},o="Relayer User Guide",s={unversionedId:"bridge/relayer/relayerguide",id:"bridge/relayer/relayerguide",title:"Relayer User Guide",description:"1. Add the BTT pledge",source:"@site/docs/bridge/relayer/relayerguide.md",sourceDirName:"bridge/relayer",slug:"/bridge/relayer/relayerguide",permalink:"/docs/bridge/relayer/relayerguide",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/bridge/relayer/relayerguide.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy Relayer Node",permalink:"/docs/bridge/relayer/relayerdeploy"},next:{title:"Use BTT as Relayer Pledge",permalink:"/docs/bridge/relayer/relayerdeposit"}},i={},u=[{value:"1. Add the BTT pledge",id:"1-add-the-btt-pledge",level:2},{value:"stake",id:"stake",level:3},{value:"2. Set the supported tokens and the Relayer fee",id:"2-set-the-supported-tokens-and-the-relayer-fee",level:2},{value:"setRelayerTokenStates",id:"setrelayertokenstates",level:3},{value:"setRelayerTokenFees",id:"setrelayertokenfees",level:3},{value:"3. Start or pause taking orders",id:"3-start-or-pause-taking-orders",level:2},{value:"setRelayerPause",id:"setrelayerpause",level:3},{value:"4. Query the service state",id:"4-query-the-service-state",level:2},{value:"Query whether your Relayer service is paused",id:"query-whether-your-relayer-service-is-paused",level:3},{value:"Query whether a token is supported in your Relayer service",id:"query-whether-a-token-is-supported-in-your-relayer-service",level:3},{value:"Query the Relayer service fee for a specific token",id:"query-the-relayer-service-fee-for-a-specific-token",level:3},{value:"Query the number of orders your Relayer service can take per hour",id:"query-the-number-of-orders-your-relayer-service-can-take-per-hour",level:3}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"relayer-user-guide"},"Relayer User Guide"),(0,n.kt)("h2",{id:"1-add-the-btt-pledge"},"1. Add the BTT pledge"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ChildERC20RelayStake contract is called for the action below. Contract address: 0xdCA98bbf5377F2A30b86B6207C925Beca1688fb7")),(0,n.kt)("h3",{id:"stake"},"stake"),(0,n.kt)("p",null,"Add the Relayer pledge, in BTT tokens."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function stake(address btt, uint256 amount) payable external\n")),(0,n.kt)("p",null,"Parameter description:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"btt"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"btt_e / btt_b / btt_t(0x0000000000000000000000000000000000001010)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},'The amount of BTT. If BTT_t is used here, make sure the value of "callvalue" equals that of "amount".')))),(0,n.kt)("p",null,"Event\uff1a"),(0,n.kt)("p",null,"event Stake(address indexed from, uint amount);"),(0,n.kt)("h2",{id:"2-set-the-supported-tokens-and-the-relayer-fee"},"2. Set the supported tokens and the Relayer fee"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ChildERC20Relay contract is called for the actions below. Contract address: 0x2C166B83394838D650E4985cE93dE26CFA68A25D")),(0,n.kt)("h3",{id:"setrelayertokenstates"},"setRelayerTokenStates"),(0,n.kt)("p",null,"Configure whether a token is supported in your Relayer service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setRelayerTokenStates(IChildToken childToken, bool state) external\n")),(0,n.kt)("p",null,"Parameter description:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"childToken"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"The token mapped to the side chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"state"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies whether this token is supported or not.")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RETURN"),": No return, reverts on error. "),(0,n.kt)("p",null,"Event\uff1a"),(0,n.kt)("p",null,"  event StateUpdated(address indexed relayer, address indexed tokenExit, bool state);"),(0,n.kt)("h3",{id:"setrelayertokenfees"},"setRelayerTokenFees"),(0,n.kt)("p",null,"Set your Relayer service fee of a token."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setRelayerTokenFees(IChildToken childToken, uint256 fee) external\n")),(0,n.kt)("p",null," Parameter description:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"childToken"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"The token mapped to the side chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"The Relayer service fee of this token.")))),(0,n.kt)("p",null," Event\uff1a"),(0,n.kt)("p",null,"event FeeUpdated(address indexed relayer, address indexed tokenExit, uint256 fee);"),(0,n.kt)("h2",{id:"3-start-or-pause-taking-orders"},"3. Start or pause taking orders"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ChildERC20Relay contract is called for the action below. Contract Address: 0x2C166B83394838D650E4985cE93dE26CFA68A25D")),(0,n.kt)("h3",{id:"setrelayerpause"},"setRelayerPause"),(0,n.kt)("p",null,"Start or pause taking orders as a Relayer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setRelayerPause( bool state) external\n")),(0,n.kt)("p",null,"Parameter description:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"state"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies to start or pause providing your Relayer service (for all tokens).")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RETURN"),": No return, reverts on error."),(0,n.kt)("p",null,"Event\uff1a"),(0,n.kt)("p",null,"  event PauseAction(address indexed relayer, bool isRelayerPaused);"),(0,n.kt)("h2",{id:"4-query-the-service-state"},"4. Query the service state"),(0,n.kt)("h3",{id:"query-whether-your-relayer-service-is-paused"},"Query whether your Relayer service is paused"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function isRelayerPaused(address relayer) public view returns (bool)\n")),(0,n.kt)("p",null,'returns: "true" means your Relayer service is paused, and "false" means the service is not paused.'),(0,n.kt)("h3",{id:"query-whether-a-token-is-supported-in-your-relayer-service"},"Query whether a token is supported in your Relayer service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function relayerTokenStates(address relayer, IChildToken childToken) public view returns (bool)\n")),(0,n.kt)("p",null,'returns: "true" means the token is supported, and "false" means the token is not supported.'),(0,n.kt)("h3",{id:"query-the-relayer-service-fee-for-a-specific-token"},"Query the Relayer service fee for a specific token"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function relayerTokenFees(address relayer, IChildToken childToken) public view returns (uint256)\n")),(0,n.kt)("p",null,"returns: the Relayer service fee for the token."),(0,n.kt)("h3",{id:"query-the-number-of-orders-your-relayer-service-can-take-per-hour"},"Query the number of orders your Relayer service can take per hour"),(0,n.kt)("p",null,"Query the maximum orders a Relayer can take per hour on BTTC: getMaxHourlyOrders(address relayer)  returns: uint256, which means the maximum orders your Relayer service can take."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"}," getMaxHourlyOrders(address relayer) public view returns (uint256)\n")),(0,n.kt)("p",null,"returns: the actual number of orders your Relayer service can take per hour."))}p.isMDXComponent=!0}}]);