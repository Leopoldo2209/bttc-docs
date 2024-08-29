"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,b=u["".concat(s,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),r=n(4996);const i={},l="Build a Web3 App On BTTC",s={unversionedId:"tutorial/build-web3-app",id:"tutorial/build-web3-app",title:"Build a Web3 App On BTTC",description:"This article is a zero-to-one DApp development tutorial, beginning with the deployment of the simplest Hello World contract, progressing through writing the contract and UI interaction to the complete deployment and online process, and culminating with learning to build a decentralized library to learn how to deploy their own DApp on the BTTC blockchain.",source:"@site/docs/tutorial/build-web3-app.md",sourceDirName:"tutorial",slug:"/tutorial/build-web3-app",permalink:"/docs/tutorial/build-web3-app",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/tutorial/build-web3-app.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to BTTC",permalink:"/docs/quickstart"},next:{title:"Quick Migration Guide for Ethereum DApp",permalink:"/docs/tutorial/quick-migration-guide-for-ethereum-dApp"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Nodej v10+",id:"nodej-v10",level:3},{value:"Metamask",id:"metamask",level:3},{value:"What Are We Doing",id:"what-are-we-doing",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Functions and Events",id:"functions-and-events",level:2},{value:"addBook",id:"addbook",level:3},{value:"borrowBook",id:"borrowbook",level:3},{value:"deleteBook",id:"deletebook",level:3},{value:"_sendBTT",id:"_sendbtt",level:3},{value:"_createTracking",id:"_createtracking",level:3},{value:"Deployment and Testing",id:"deployment-and-testing",level:2},{value:"Build the DApp",id:"build-the-dapp",level:2},{value:"Link the UI to Metamask",id:"link-the-ui-to-metamask",level:3},{value:"Functions",id:"functions",level:3},{value:"Add a Book",id:"add-a-book",level:4},{value:"Browse All Available Books",id:"browse-all-available-books",level:4},{value:"Borrow a Book",id:"borrow-a-book",level:4},{value:"Run the DApp",id:"run-the-dapp",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-a-web3-app-on-bttc"},"Build a Web3 App On BTTC"),(0,a.kt)("p",null,"This article is a zero-to-one DApp development tutorial, beginning with the deployment of the simplest Hello World contract, progressing through writing the contract and UI interaction to the complete deployment and online process, and culminating with learning to build a decentralized library to learn how to deploy their own DApp on the BTTC blockchain."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"nodej-v10"},"Nodej v10+"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node -v\nv10.24.1\n")),(0,a.kt)("h3",{id:"metamask"},"Metamask"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask")," Chrome extension."),(0,a.kt)("h2",{id:"what-are-we-doing"},"What Are We Doing"),(0,a.kt)("p",null,"We are building a decentralized library that contains the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Book borrowing"),(0,a.kt)("li",{parentName:"ul"},"Book browsing"),(0,a.kt)("li",{parentName:"ul"},"Book adding")),(0,a.kt)("p",null,"Download the complete project code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TRON-Developer-Hub/decentralized-library"},"here"),", and run npm install to install dependencies."),(0,a.kt)("h2",{id:"data-structure"},"Data Structure"),(0,a.kt)("p",null,"Typically, borrowers are concerned with the title, content, availability, and price of the book. On this basis, we design a structure in the contract called Book, which comprises the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"struct Book {\n       string name;\n       string description;\n       bool valid; // false if been borrowed\n       uint256 price; // BTT per day\n       address owner; // owner of the book\n   }\n")),(0,a.kt)("p",null,"We hope that the library will be able to have an easy way to find every book. To do this, we build a bookId attribute and a mapping relationship between bookId and Book, named books."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"uint256 public bookId;\n\nmapping (uint256 => Book) public books;\n")),(0,a.kt)("p",null,"Additionally, we must keep track of each book's rental information, including the borrower and the start and end dates."),(0,a.kt)("p",null,"As with Book, construct a structure called Tracking to keep track of this data. This structure possesses the following fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"struct Tracking {\n       uint256 bookId;\n       uint256 startTime; // start time, in timestamp\n       uint256 endTime; // end time, in timestamp\n       address borrower; // borrower's address\n   }\n")),(0,a.kt)("p",null,"Similarly, a mapping relationship must be established to manage each rental record:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"uint256 public trackingId;\n\nmapping(uint256 => Tracking) public trackings;\n")),(0,a.kt)("h2",{id:"functions-and-events"},"Functions and Events"),(0,a.kt)("p",null,"We are adding fundamental functions to our library, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a book to the library - addBook"),(0,a.kt)("li",{parentName:"ul"},"Borrow a book - borrowBook"),(0,a.kt)("li",{parentName:"ul"},"Remove a book from the library - deleteBook")),(0,a.kt)("h3",{id:"addbook"},"addBook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n    * @dev Add a Book with predefined `name`, `description` and `price`\n    * to the library.\n    *\n    * Returns a boolean value indicating whether the operation succeeded.\n    *\n    * Emits a {NewBook} event.\n    */\n   function addBook(string memory name, string memory description, uint256 price) public returns (bool) {\n       Book memory book = Book(name, description, true, price, _msgSender());\n\n       books[bookId] = book;\n\n       emit NewBook(bookId++);\n\n       return true;\n   }\n\n   /**\n    * @dev Emitted when a new book is added to the library.\n    * Note bookId starts from 0.\n    */\n   event NewBook(uint256 bookId);\n")),(0,a.kt)("h3",{id:"borrowbook"},"borrowBook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'   /**\n    * @dev Borrow a book has `_bookId`. The rental period starts from\n    * `startTime` ends with `endTime`.\n    *\n    * Returns a boolean value indicating whether the operation succeeded.\n    *\n    * Emits a `NewRental` event.\n    */\n   function borrowBook(uint256 _bookId, uint256 startTime, uint256 endTime) public payable returns(bool) {\n       Book storage book = books[_bookId];\n\n       require(book.valid == true, "The book is currently on loan");\n\n       require(_msgValue() == book.price * _days(startTime, endTime), "Incorrect fund sent.");\n\n       _sendBTT(book.owner, _msgValue());\n\n       _createTracking(_bookId, startTime, endTime);\n\n       emit NewRental(_bookId, trackingId++);\n   }\n')),(0,a.kt)("h3",{id:"deletebook"},"deleteBook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n    * @dev Delete a book from the library. Only the book's owner or the\n    * library's owner is authorised for this operation.\n    *\n    * Returns a boolean value indicating whether the operation succeeded.\n    *\n    * Emits a `DeleteBook` event.\n    */\n   function deleteBook(uint256 _bookId) public returns(bool) {\n       require(_msgSender() == books[_bookId].owner || isOwner(),\n               \"You are not authorised to delete this book.\");\n      \n       delete books[_bookId];\n\n       emit DeleteBook(_bookId);\n\n       return true;\n   }\n")),(0,a.kt)("p",null,"We use two tool methods in the borrowBook method: ",(0,a.kt)("inlineCode",{parentName:"p"},"_sendBTT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"_createTracking"),". We do not wish for users to invoke these APIs. As a result, in accordance with Solidity's standards, we identify them as internal, which means they can be accessed only within the contract."),(0,a.kt)("h3",{id:"_sendbtt"},"_sendBTT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n    * @dev Send BTT to the book's owner.\n    */\n   function _sendBTT(address receiver, uint256 value) internal {\n       payable(address(uint160(receiver))).transfer(value);\n   }\n")),(0,a.kt)("h3",{id:"_createtracking"},"_createTracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n    * @dev Create a new rental tracking.\n    */\n   function _createTracking(uint256 _bookId, uint256 startTime, uint256 endTime) internal {\n         trackings[trackingId] = Tracking(_bookId, startTime, endTime, _msgSender());\n\n         Book storage book = books[_bookId];\n\n         book.valid = false;\n   }\n")),(0,a.kt)("p",null,"The contract is done, it\u2019s time to deploy it."),(0,a.kt)("h2",{id:"deployment-and-testing"},"Deployment and Testing"),(0,a.kt)("p",null,"We compile and deploy contracts using ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),". Deploying the contract requires burning BTT to pay for gas, and BTT test coins can be obtained here."),(0,a.kt)("p",null,"Open Metamask and select Custom RPC from the networks dropdown"),(0,a.kt)("img",{src:(0,r.Z)("img/build_web3_app_rpc.png"),width:"50%"}),(0,a.kt)("p",null,"Fill in the information as per the chart\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network Name: BitTorrent Chain Donau"),(0,a.kt)("li",{parentName:"ul"},"RPC URL: ",(0,a.kt)("a",{parentName:"li",href:"https://pre-rpc.bt.io/"},"https://pre-rpc.bt.io/")," "),(0,a.kt)("li",{parentName:"ul"},"ChainID: 1029"),(0,a.kt)("li",{parentName:"ul"},"Symbol: BTT"),(0,a.kt)("li",{parentName:"ul"},"Block Explorer URL: ",(0,a.kt)("a",{parentName:"li",href:"https://testscan.bt.io/"},"https://testscan.bt.io/"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9674).Z,width:"1202",height:"904"})),(0,a.kt)("p",null,"First, in the DEPLOY & RUN TRANSACTIONS section of Remix, select Injected Web3 from the Environment drop-down menu."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1667).Z,width:"1258",height:"578"})),(0,a.kt)("p",null,"Select a compiler version 0.8.0 and higher\n",(0,a.kt)("img",{src:n(6230).Z,width:"1258",height:"586"})),(0,a.kt)("p",null,"After clicking Deploy, MetaMask will bring up the transaction confirmation window"),(0,a.kt)("img",{src:(0,r.Z)("img/build_web3_app_rpc_5.png"),width:"50%"}),(0,a.kt)("p",null,"Congratulations, the Library contract has been successfully deployed to the BTTC test network and you can now interact with it and check its status in your browser!"),(0,a.kt)("h2",{id:"build-the-dapp"},"Build the DApp"),(0,a.kt)("p",null,"To begin, copy the contract address that was previously deployed into the libraryContractAddress variable in utils.js."),(0,a.kt)("h3",{id:"link-the-ui-to-metamask"},"Link the UI to Metamask"),(0,a.kt)("p",null,"The following step is to link the UI to the Metamask Chrome wallet. Metamskinjects the web3 object into each browser page, allowing the DApp to communicate with the BTTC network."),(0,a.kt)("p",null,"Create the following code in dapp-ui/plugins/utils.js to retrieve the smart contract object and save it to the global variable. Then you can directly interact with the contract via the global variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export async function setLibraryContract() {\n     var MyContract = web3.eth.contract(LibraryABI); \n     bookRentContract = await MyContract.at('0xe7BBc13a279f11D313B2c8304CdcDfC856C7603C');\n}\n")),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,"After connecting our user interface to Metamsk, we need to analyze how the user interface interacts with smart contracts. As a result, a contract object must be created to represent the decentralized library smart contract."),(0,a.kt)("p",null,"The library should have three fundamental functions\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a book"),(0,a.kt)("li",{parentName:"ul"},"Browse available books"),(0,a.kt)("li",{parentName:"ul"},"Borrow a book")),(0,a.kt)("p",null,"In index.vue, call ",(0,a.kt)("inlineCode",{parentName:"p"},"setLibraryContract()")," to initialize the contract object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," async mounted() {\n   // init contract object\n   await setLibraryContract();\n   // fetch all books\n   const books = await fetchAllBooks();\n   this.posts = books;\n },\n")),(0,a.kt)("h4",{id:"add-a-book"},"Add a Book"),(0,a.kt)("p",null,"To begin, construct an add book form for users to submit information about book rentals. On the back end, it will communicate with the library contract's addBook function."),(0,a.kt)("p",null,"Add the following code to dapp-ui/components/postAd() bookForm.vue's function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," postAd() {\n     postBookInfo(this.title,this.description,this.price);\n }\n")),(0,a.kt)("p",null,"Add the following code to ",(0,a.kt)("inlineCode",{parentName:"p"},"postBookInfo()")," of dapp-ui/plugins/utils.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = await bookRentContract.methods.addBook(name,description,price).send();\n")),(0,a.kt)("h4",{id:"browse-all-available-books"},"Browse All Available Books"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchAllBooks()")," function returns the book list, which contains a list of all available books."),(0,a.kt)("p",null,"Add the following code to dapp-ui/plugins/fetchAllBooks() utils.js's function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},' const books = [];\n\n const bookId  = await bookRentContract.methods.bookId().call();\n //iterate from 0 till bookId\n for (let i = 0; i < bookId; i++){\n   const book = await bookRentContract.methods.books(i).call()\n   if(book.name!="") // filter the deleted books\n   {\n     books.push(\n       {id: i,name: book.name,description: book.description,price: book.price}\n     )\n   } \n }\nreturn books\n')),(0,a.kt)("p",null,"In index.vue, call ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchAllBooks()")," to retrieve book information and show it on the homepage."),(0,a.kt)("h4",{id:"borrow-a-book"},"Borrow a Book"),(0,a.kt)("p",null,"The user may borrow the book after viewing the book's information."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"book()")," function of dapp-ui/components/detailsModal.vue, add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"     // get Start date\n     const startDay = this.getDayOfYear(this.startDate)\n     // get End date\n     const endDay = this.getDayOfYear(this.endDate)\n     // price calculation\n     const totalPrice =this.propData.price * (endDay - startDay)\n     // call metamask.bookProperty\n     borrowBook(this.propData.id, startDay, endDay, totalPrice)\n")),(0,a.kt)("p",null,"dapp-ui/plugins/utils.js, add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"borrowBook()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," const result = await bookRentContract.methods.borrowBook(spaceId,checkInDate,checkOutDate).send();\n")),(0,a.kt)("p",null,"The development of the library Dapp is done."),(0,a.kt)("h2",{id:"run-the-dapp"},"Run the DApp"),(0,a.kt)("p",null,"Ascertain that Metamask is logged in before running the following command to start the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,a.kt)("p",null,"To view the front-end page, type localhost:3000 into the browser's address bar.\n",(0,a.kt)("img",{src:n(1213).Z,width:"1252",height:"638"})),(0,a.kt)("p",null,'To post book rental information, click the "Rent Your Books" button in the upper right corner. The title of the book, a brief description of the book, and the cost of the book for one day are all included in the material.\n',(0,a.kt)("img",{src:n(138).Z,width:"1252",height:"636"}),"\nAfter you've completed the form, click the \"Submit\" button. The information will be passed to the library contract's addBook function, which will generate a transaction that triggers the contract. Then, as illustrated below, a Metamask pop-up box will open, requesting confirmation and signature:\n",(0,a.kt)("img",{src:n(2598).Z,width:"1252",height:"696"})),(0,a.kt)("p",null,"After successfully connecting the transaction to the chain, the following leasing information will be displayed on the page:\n",(0,a.kt)("img",{src:n(8248).Z,width:"1256",height:"782"})),(0,a.kt)("p",null,'Click "View" to view the book\'s comprehensive details and to select the rental period. To initiate a lease request, click "Lent Now", then the library contract\'s borrowBook function will be called. Additionally, the leasing transaction must be signed and broadcasted to finish it.\n',(0,a.kt)("img",{src:n(6098).Z,width:"1720",height:"970"})))}u.isMDXComponent=!0},6098:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_10-134785a9a52c52ec0c3467dc2770d072.png"},1213:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_6-54e80f3b09198f4a991bf17541a95b7c.png"},138:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_7-058621a255bf14571ee8911f6cd3484e.png"},2598:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_8-6131ff3db2de332ff2ca940e3da541e7.png"},8248:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_9-9abbb070254020aa37ba8ee68cdc28ea.png"},9674:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_rpc_2-b9acb22089675d587cdb610cb8e6269e.png"},1667:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_rpc_3-39c26e4ef190084584ada6a45a756cd3.png"},6230:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build_web3_app_rpc_4-eb9880296572e4cc1c0bf8414b59e0e0.png"}}]);