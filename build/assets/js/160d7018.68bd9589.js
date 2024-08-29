"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,h=f["".concat(c,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="IPFS",s={unversionedId:"storage/ipfs",id:"storage/ipfs",title:"IPFS",description:"What is IPFS ?",source:"@site/docs/storage/ipfs.md",sourceDirName:"storage",slug:"/storage/ipfs",permalink:"/docs/storage/ipfs",draft:!1,editUrl:"https://github.com/bttcprotocol/bttc-docs/tree/master/docs/storage/ipfs.md",tags:[],version:"current",lastUpdatedAt:1724138736,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BTFS",permalink:"/docs/storage/btfs"},next:{title:"General FAQ",permalink:"/docs/faq/general-faq"}},c={},l=[{value:"What is IPFS ?",id:"what-is-ipfs-",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ipfs"},"IPFS"),(0,o.kt)("h3",{id:"what-is-ipfs-"},"What is IPFS ?"),(0,o.kt)("p",null,"IPFS is a distributed file system for storing and accessing files, web pages, applications and data. IPFS uses decentralization, content addressing, and a solid P2P network of active nodes to help users store, request, and transfer verifiable data to each other."),(0,o.kt)("p",null,"Decentralization makes it possible to download files from multiple locations not managed by the same organization, while providing a resilient network with high availability, resistance to content blocking, and increased access to remote networks."),(0,o.kt)("p",null,"Content addressing is based on the content of the file and generates a unique verifiable hash value through an encryption algorithm to identify the file. Generated Content Identifiers (CIDs) ensure that files are stored identically wherever they are stored."),(0,o.kt)("p",null,"After joining through the growing number of active nodes, peer-to-peer content sharing becomes possible. In addition to obtaining files through online nodes, IPFS also supports the provision of permanent storage services in cooperation with service providers to ensure that blockchain developers upload and permanently save content to IPFS."),(0,o.kt)("p",null,"IPFS-based storage can help BTTC reduce costs, increase storage capacity, and achieve provable permanent storage by only saving the CID of the content instead of loading the entire file to the blockchain. For more details and technical details, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/"},"IPFS Docs"),"."))}d.isMDXComponent=!0}}]);