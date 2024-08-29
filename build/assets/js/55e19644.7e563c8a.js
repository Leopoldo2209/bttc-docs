"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,b=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return t?r.createElement(b,a(a({ref:n},d),{},{components:t})):r.createElement(b,a({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={},a="Deposit and Checkpoint Time Tracking",s={unversionedId:"bridge/deposit-checkpoint-event-tracking",id:"bridge/deposit-checkpoint-event-tracking",title:"Deposit and Checkpoint Time Tracking",description:"Deposit Event",source:"@site/docs/bridge/deposit-checkpoint-event-tracking.md",sourceDirName:"bridge",slug:"/bridge/deposit-checkpoint-event-tracking",permalink:"/docs/bridge/deposit-checkpoint-event-tracking",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/bridge/deposit-checkpoint-event-tracking.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Withdraw Relayer Pledge",permalink:"/docs/bridge/relayer/relayerwithdraw"},next:{title:"Getting Started",permalink:"/docs/oracles/getting-started"}},c={},l=[{value:"Deposit Event",id:"deposit-event",level:2},{value:"Tracking Deposit Events with Web Socket",id:"tracking-deposit-events-with-web-socket",level:2},{value:"Verify the historical deposit on the blockchain",id:"verify-the-historical-deposit-on-the-blockchain",level:2},{value:"Checkpoint Event",id:"checkpoint-event",level:2},{value:"Realtime Checkpoint Status Checking",id:"realtime-checkpoint-status-checking",level:3}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deposit-and-checkpoint-time-tracking"},"Deposit and Checkpoint Time Tracking"),(0,o.kt)("h2",{id:"deposit-event"},"Deposit Event"),(0,o.kt)("p",null,"When tokens from the public blockchain are deposited into BTTC, the state synchronization mechanism kicks in, and finally, tokens are minted on BTTC. The entire procedure takes approximately 5-7 minutes. Due to the length of time, it is critical to monitor user deposit events during this period."),(0,o.kt)("h2",{id:"tracking-deposit-events-with-web-socket"},"Tracking Deposit Events with Web Socket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const WebSocket = require("ws");\nconst Web3 = require("web3");\n\nconst ws = new WebSocket("");\n\nconst web3 = new Web3();\nconst abiCoder = web3.eth.abi;\n\nasync function checkDepositStatus(\n userAccount,\n rootToken,\n depositAmount,\n childChainManagerProxy\n) {\n return new Promise((resolve, reject) => {\n   ws.on("open", () => {\n     ws.send(\n       `{"id": 1, "method": "eth_subscribe", "params": ["newDeposits", {"Contract": ${childChainManagerProxy}}]}`\n     );\n\n     ws.on("message", (msg) => {\n       const parsedMsg = JSON.parse(msg);\n       if (\n         parsedMsg &&\n         parsedMsg.params &&\n         parsedMsg.params.result &&\n         parsedMsg.params.result.Data\n       ) {\n         const fullData = parsedMsg.params.result.Data;\n         const { 0: syncType, 1: syncData } = abiCoder.decodeParameters(\n           ["bytes32", "bytes"],\n           fullData\n         );\n\n         // check if sync is of deposit type (keccak256("DEPOSIT"))\n         const depositType =\n           "0x87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f821";\n         if (syncType.toLowerCase() === depositType.toLowerCase()) {\n           const {\n             0: userAddress,\n             1: rootTokenAddress,\n             2: depositData,\n           } = abiCoder.decodeParameters(\n             ["address", "address", "bytes"],\n             syncData\n           );\n\n           // depositData can be further decoded to get amount, tokenId etc. based on token type\n           // For ERC20 tokens\n           const { 0: amount } = abiCoder.decodeParameters(\n             ["uint256"],\n             depositData\n           );\n           if (\n             userAddress.toLowerCase() === userAccount.toLowerCase() &&\n             rootToken.toLowerCase() === rootTokenAddress.toLowerCase() &&\n             depositAmount === amount\n           ) {\n             resolve(true);\n           }\n         }\n       }\n     });\n\n     ws.on("error", () => {\n       reject(false);\n     });\n\n     ws.on("close", () => {\n       reject(false);\n     });\n   });\n });\n}\n\ncheckDepositStatus("user address", "contract address", "amount", "proxy address")\n .then((res) => {\n   console.log(res);\n })\n .catch((err) => {\n   console.log(err);\n });\n')),(0,o.kt)("h2",{id:"verify-the-historical-deposit-on-the-blockchain"},"Verify the historical deposit on the blockchain"),(0,o.kt)("p",null,"This code can be used to determine whether a particular deposit has been completed. Each of the two chains maintains a global counter variable that is increasing. The StateSender contract sends an event with a counter value, and the StateReceiver contract can view the counter value on the sub-chain. If the value of the sub-counter chain's is greater than or equal to the value of the main chain's counter, the deposit is considered successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let Web3 = require("web3");\n\n// For mainnet, use Ethereum RPC\nconst provider = new Web3.providers.HttpProvider(\n "https://goerli.infura.io/v3/API-KEY"\n);\nconst web3 = new Web3(provider);\n\n\nconst child_provider = new Web3.providers.HttpProvider(\n ""\n);\n\nconst child_web3 = new Web3(child_provider);\n\nconst contractInstance = new child_web3.eth.Contract(\n [\n   {\n     constant: true,\n     inputs: [],\n     name: "lastStateId",\n     outputs: [\n       {\n         internalType: "uint256",\n         name: "",\n         type: "uint256",\n       },\n     ],\n     payable: false,\n     stateMutability: "view",\n     type: "function",\n   },\n ],\n "0x0000000000000000000000000000000000001001"\n);\n\nasync function depositCompleted(txHash) {\n let tx = await web3.eth.getTransactionReceipt(txHash);\n let child_counter = await contractInstance.methods.lastStateId().call();\n let root_counter = web3.utils.hexToNumberString(tx.logs[3].topics[1]);\n return child_counter >= root_counter;\n}\n\n// Param 1 - Deposit transaction hash\ndepositCompleted(\n "transaction id"\n)\n .then((res) => {\n   console.log(res);\n })\n .catch((err) => {\n   console.log(err);\n });\n')),(0,o.kt)("h2",{id:"checkpoint-event"},"Checkpoint Event"),(0,o.kt)("h3",{id:"realtime-checkpoint-status-checking"},"Realtime Checkpoint Status Checking"),(0,o.kt)("p",null,"All BTTC transactions will be submitted as Checkpoints to TRON on a regular basis. On TRON, the checkpoint occurred on the RootChain contract."),(0,o.kt)("p",null,"The following is an illustration of real-time Checkpoint event monitoring."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Web3 = require("web3");\n\n// Ethereum provider\nconst provider = new Web3.providers.WebsocketProvider(\n "wss://goerli.infura.io/ws/v3/api-key"\n);\n\nconst web3 = new Web3(provider);\n\nconst chil_provider = new Web3.providers.HttpProvider(\n ""\n);\nconst child_web3 = new Web3(chil_provider);\n\nasync function checkInclusion(txHash, rootChainAddress) {\n let txDetails = await child_web3.eth.getTransactionReceipt(txHash);\n\n block = txDetails.blockNumber;\n return new Promise(async (resolve, reject) => {\n   web3.eth.subscribe(\n     "logs",\n     {\n       address: rootChainAddress,\n     },\n     async (error, result) => {\n       if (error) {\n         reject(error);\n       }\n\n       console.log(result);\n       if (result.data) {\n         let transaction = web3.eth.abi.decodeParameters(\n           ["uint256", "uint256", "bytes32"],\n           result.data\n         );\n         if (block <= transaction["1"]) {\n           resolve(result);\n         }\n       }\n     }\n   );\n });\n}\n\ncheckInclusion(\n "burn txid on child chain",\n "RootChainProxy"\n)\n .then((res) => {\n   console.log(res);\n   provider.disconnect();\n })\n .catch((err) => {\n   console.log(err);\n });\n')))}p.isMDXComponent=!0}}]);