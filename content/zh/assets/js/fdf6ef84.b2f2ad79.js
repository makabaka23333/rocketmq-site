"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,f=k["".concat(i,".").concat(m)]||k[m]||u[m]||l;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={},p="\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",o={unversionedId:"featureBehavior/09consumerprogress",id:"version-5.0/featureBehavior/09consumerprogress",title:"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",description:"Apache RocketMQ \u901a\u8fc7\u6d88\u8d39\u4f4d\u70b9\u7ba1\u7406\u6d88\u8d39\u8fdb\u5ea6\uff0c\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache RocketMQ \u7684\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406\u673a\u5236\u3002",source:"@site/versioned_docs/version-5.0/04-featureBehavior/09consumerprogress.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/09consumerprogress",permalink:"/zh/docs/featureBehavior/09consumerprogress",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/09consumerprogress.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/featureBehavior/08consumerloadbalance"},next:{title:"\u6d88\u8d39\u91cd\u8bd5",permalink:"/zh/docs/featureBehavior/10consumerretrypolicy"}},i={},c=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",level:2},{value:"\u6d88\u8d39\u8fdb\u5ea6\u539f\u7406",id:"\u6d88\u8d39\u8fdb\u5ea6\u539f\u7406",level:2},{value:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",id:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9",level:2},{value:"\u7248\u672c\u517c\u5bb9\u6027",id:"\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],s={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"},"\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"),(0,a.kt)("p",null,"Apache RocketMQ \u901a\u8fc7\u6d88\u8d39\u4f4d\u70b9\u7ba1\u7406\u6d88\u8d39\u8fdb\u5ea6\uff0c\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache RocketMQ \u7684\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406\u673a\u5236\u3002"),(0,a.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,a.kt)("p",null,"Apache RocketMQ \u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u5728\u8fdb\u884c\u6d88\u606f\u6536\u53d1\u65f6\uff0c\u5fc5\u7136\u4f1a\u6d89\u53ca\u4ee5\u4e0b\u573a\u666f\uff0c\u6d88\u606f\u5148\u751f\u4ea7\u540e\u8ba2\u9605\u6216\u5148\u8ba2\u9605\u540e\u751f\u4ea7\u3002\u8fd9\u4e24\u79cd\u573a\u666f\u4e0b\uff0c\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u542f\u52a8\u540e\u4ece\u54ea\u91cc\u5f00\u59cb\u6d88\u8d39\uff1f\u5982\u4f55\u6807\u8bb0\u5df2\u6d88\u8d39\u7684\u6d88\u606f\uff1f\u8fd9\u4e9b\u90fd\u662f\u7531 Apache RocketMQ \u7684\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406\u673a\u5236\u6765\u5b9a\u4e49\u7684\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e86\u89e3 Apache RocketMQ \u7684\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406\u673a\u5236\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u89e3\u7b54\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u542f\u52a8\u540e\u4ece\u54ea\u91cc\u5f00\u59cb\u6d88\u8d39\u6d88\u606f\uff1f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u6bcf\u6b21\u6d88\u8d39\u6210\u529f\u540e\u5982\u4f55\u6807\u8bb0\u6d88\u606f\u72b6\u6001\uff0c\u786e\u4fdd\u4e0b\u6b21\u4e0d\u4f1a\u518d\u91cd\u590d\u5904\u7406\u8be5\u6d88\u606f\uff1f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u67d0\u6d88\u606f\u88ab\u6307\u5b9a\u6d88\u8d39\u8005\u6d88\u8d39\u8fc7\u4e00\u6b21\u540e\uff0c\u5982\u679c\u4e1a\u52a1\u51fa\u73b0\u5f02\u5e38\u9700\u8981\u505a\u6545\u969c\u6062\u590d\uff0c\u8be5\u6d88\u606f\u80fd\u5426\u88ab\u91cd\u65b0\u6d88\u8d39\uff1f"))),(0,a.kt)("h2",{id:"\u6d88\u8d39\u8fdb\u5ea6\u539f\u7406"},"\u6d88\u8d39\u8fdb\u5ea6\u539f\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d88\u606f\u4f4d\u70b9\uff08Offset\uff09")," "),(0,a.kt)("p",null,"\u53c2\u8003 Apache RocketMQ ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/02topic"},"\u4e3b\u9898"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/03messagequeue"},"\u961f\u5217"),"\u7684\u5b9a\u4e49\uff0c\u6d88\u606f\u662f\u6309\u5230\u8fbe\u670d\u52a1\u7aef\u7684\u5148\u540e\u987a\u5e8f\u5b58\u50a8\u5728\u6307\u5b9a\u4e3b\u9898\u7684\u591a\u4e2a\u961f\u5217\u4e2d\uff0c\u6bcf\u6761\u6d88\u606f\u5728\u961f\u5217\u4e2d\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684Long\u7c7b\u578b\u5750\u6807\uff0c\u8fd9\u4e2a\u5750\u6807\u88ab\u5b9a\u4e49\u4e3a\u6d88\u606f\u4f4d\u70b9\u3002"),(0,a.kt)("p",null,"\u4efb\u610f\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u5728\u903b\u8f91\u4e0a\u90fd\u662f\u65e0\u9650\u5b58\u50a8\uff0c\u5373\u6d88\u606f\u4f4d\u70b9\u4f1a\u4ece0\u5230Long.MAX\u65e0\u9650\u589e\u52a0\u3002\u901a\u8fc7\u4e3b\u9898\u3001\u961f\u5217\u548c\u4f4d\u70b9\u5c31\u53ef\u4ee5\u5b9a\u4f4d\u4efb\u610f\u4e00\u6761\u6d88\u606f\u7684\u4f4d\u7f6e\uff0c\u5177\u4f53\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("img",{alt:"\u6d88\u606f\u4f4d\u70b9",src:r(71014).Z,width:"954",height:"677"})),(0,a.kt)("p",null,"Apache RocketMQ \u5b9a\u4e49\u961f\u5217\u4e2d\u6700\u65e9\u4e00\u6761\u6d88\u606f\u7684\u4f4d\u70b9\u4e3a\u6700\u5c0f\u6d88\u606f\u4f4d\u70b9\uff08MinOffset\uff09\uff1b\u6700\u65b0\u4e00\u6761\u6d88\u606f\u7684\u4f4d\u70b9\u4e3a\u6700\u5927\u6d88\u606f\u4f4d\u70b9\uff08MaxOffset\uff09\u3002\u867d\u7136\u6d88\u606f\u961f\u5217\u903b\u8f91\u4e0a\u662f\u65e0\u9650\u5b58\u50a8\uff0c\u4f46\u7531\u4e8e\u670d\u52a1\u7aef\u7269\u7406\u8282\u70b9\u7684\u5b58\u50a8\u7a7a\u95f4\u6709\u9650\uff0c Apache RocketMQ \u4f1a\u6eda\u52a8\u5220\u9664\u961f\u5217\u4e2d\u5b58\u50a8\u6700\u65e9\u7684\u6d88\u606f\u3002\u56e0\u6b64\uff0c\u6d88\u606f\u7684\u6700\u5c0f\u6d88\u8d39\u4f4d\u70b9\u548c\u6700\u5927\u6d88\u8d39\u4f4d\u70b9\u4f1a\u4e00\u76f4\u9012\u589e\u53d8\u5316\u3002",(0,a.kt)("img",{alt:"\u6d88\u8d39\u4f4d\u70b9\u66f4\u65b0",src:r(81815).Z,width:"1624",height:"647"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u4f4d\u70b9\uff08ConsumerOffset\uff09")),(0,a.kt)("p",null,"Apache RocketMQ \u9886\u57df\u6a21\u578b\u4e3a\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u6bcf\u4e2a\u4e3b\u9898\u7684\u961f\u5217\u90fd\u53ef\u4ee5\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u8ba2\u9605\u3002\u82e5\u67d0\u6761\u6d88\u606f\u88ab\u67d0\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u540e\u76f4\u63a5\u88ab\u5220\u9664\uff0c\u5219\u5176\u4ed6\u8ba2\u9605\u4e86\u8be5\u4e3b\u9898\u7684\u6d88\u8d39\u8005\u5c06\u65e0\u6cd5\u6d88\u8d39\u8be5\u6d88\u606f\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0cApache RocketMQ \u901a\u8fc7\u6d88\u8d39\u4f4d\u70b9\u7ba1\u7406\u6d88\u606f\u7684\u6d88\u8d39\u8fdb\u5ea6\u3002\u6bcf\u6761\u6d88\u606f\u88ab\u67d0\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u5b8c\u6210\u540e\u4e0d\u4f1a\u7acb\u5373\u5728\u961f\u5217\u4e2d\u5220\u9664\uff0cApache RocketMQ \u4f1a\u57fa\u4e8e\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u7ef4\u62a4\u4e00\u4efd\u6d88\u8d39\u8bb0\u5f55\uff0c\u8be5\u8bb0\u5f55\u6307\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4\u6d88\u8d39\u67d0\u4e00\u4e2a\u961f\u5217\u65f6\uff0c\u6d88\u8d39\u8fc7\u7684\u6700\u65b0\u4e00\u6761\u6d88\u606f\u7684\u4f4d\u70b9\uff0c\u5373\u6d88\u8d39\u4f4d\u70b9\u3002"),(0,a.kt)("p",null,"\u5f53\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u79bb\u7ebf\uff0c\u53c8\u518d\u6b21\u91cd\u65b0\u4e0a\u7ebf\u65f6\uff0c\u4f1a\u4e25\u683c\u6309\u7167\u670d\u52a1\u7aef\u4fdd\u5b58\u7684\u6d88\u8d39\u8fdb\u5ea6\u7ee7\u7eed\u5904\u7406\u6d88\u606f\u3002\u5982\u679c\u670d\u52a1\u7aef\u4fdd\u5b58\u7684\u5386\u53f2\u4f4d\u70b9\u4fe1\u606f\u5df2\u8fc7\u671f\u88ab\u5220\u9664\uff0c\u6b64\u65f6\u6d88\u8d39\u4f4d\u70b9\u5411\u524d\u79fb\u52a8\u81f3\u670d\u52a1\u7aef\u5b58\u50a8\u7684\u6700\u5c0f\u4f4d\u70b9\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6d88\u8d39\u4f4d\u70b9\u7684\u4fdd\u5b58\u548c\u6062\u590d\u662f\u57fa\u4e8e Apache RocketMQ \u670d\u52a1\u7aef\u7684\u5b58\u50a8\u5b9e\u73b0\uff0c\u548c\u4efb\u4f55\u6d88\u8d39\u8005\u65e0\u5173\u3002\u56e0\u6b64 Apache RocketMQ \u652f\u6301\u8de8\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u8fdb\u5ea6\u6062\u590d\u3002")),(0,a.kt)("p",null,"\u961f\u5217\u4e2d\u6d88\u606f\u4f4d\u70b9MinOffset\u3001MaxOffset\u548c\u6bcf\u4e2a\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u6d88\u8d39\u4f4d\u70b9ConsumerOffset\u7684\u5173\u7cfb\u5982\u4e0b\uff1a",(0,a.kt)("img",{alt:"\u6d88\u8d39\u8fdb\u5ea6",src:r(25597).Z,width:"979",height:"377"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ConsumerOffset\u2264MaxOffset\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u6d88\u8d39\u901f\u5ea6\u548c\u751f\u4ea7\u901f\u5ea6\u4e00\u81f4\uff0c\u4e14\u5168\u90e8\u6d88\u606f\u90fd\u5904\u7406\u5b8c\u6210\u65f6\uff0c\u6700\u5927\u6d88\u606f\u4f4d\u70b9\u548c\u6d88\u8d39\u4f4d\u70b9\u76f8\u540c\uff0c\u5373ConsumerOffset=MaxOffset\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u6d88\u8d39\u901f\u5ea6\u8f83\u6162\u5c0f\u4e8e\u751f\u4ea7\u901f\u5ea6\u65f6\uff0c\u961f\u5217\u4e2d\u4f1a\u6709\u90e8\u5206\u6d88\u606f\u672a\u6d88\u8d39\uff0c\u6b64\u65f6\u6d88\u8d39\u4f4d\u70b9\u5c0f\u4e8e\u6700\u5927\u6d88\u606f\u4f4d\u70b9\uff0c\u5373ConsumerOffset<MaxOffset\uff0c\u4e24\u8005\u4e4b\u5dee\u5c31\u662f\u8be5\u961f\u5217\u4e2d\u5806\u79ef\u7684\u6d88\u606f\u91cf\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ConsumerOffset\u2265MinOffset\uff1a\u6b63\u5e38\u60c5\u51b5\u4e0b\u6709\u6548\u7684\u6d88\u8d39\u4f4d\u70b9ConsumerOffset\u5fc5\u7136\u5927\u4e8e\u7b49\u4e8e\u6700\u5c0f\u6d88\u606f\u4f4d\u70b9MinOffset\u3002\u6d88\u8d39\u4f4d\u70b9\u5c0f\u4e8e\u6700\u5c0f\u6d88\u606f\u4f4d\u70b9\u65f6\u662f\u65e0\u6548\u7684\uff0c\u76f8\u5f53\u4e8e\u6d88\u8d39\u8005\u8981\u6d88\u8d39\u7684\u6d88\u606f\u5df2\u7ecf\u4ece\u961f\u5217\u4e2d\u5220\u9664\u4e86\uff0c\u662f\u65e0\u6cd5\u6d88\u8d39\u5230\u7684\uff0c\u6b64\u65f6\u670d\u52a1\u7aef\u4f1a\u5c06\u6d88\u8d39\u4f4d\u70b9\u5f3a\u5236\u7ea0\u6b63\u5230\u5408\u6cd5\u7684\u6d88\u606f\u4f4d\u70b9\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u4f4d\u70b9\u521d\u59cb\u503c")),(0,a.kt)("p",null,"\u6d88\u8d39\u4f4d\u70b9\u521d\u59cb\u503c\u6307\u7684\u662f\u6d88\u8d39\u8005\u5206\u7ec4\u9996\u6b21\u542f\u52a8\u6d88\u8d39\u8005\u6d88\u8d39\u6d88\u606f\u65f6\uff0c\u670d\u52a1\u7aef\u4fdd\u5b58\u7684\u6d88\u8d39\u4f4d\u70b9\u7684\u521d\u59cb\u503c\u3002"),(0,a.kt)("p",null,"Apache RocketMQ \u5b9a\u4e49\u6d88\u8d39\u4f4d\u70b9\u7684\u521d\u59cb\u503c\u4e3a\u6d88\u8d39\u8005\u9996\u6b21\u83b7\u53d6\u6d88\u606f\u65f6\uff0c\u8be5\u65f6\u523b\u961f\u5217\u4e2d\u7684\u6700\u5927\u6d88\u606f\u4f4d\u70b9\u3002\u76f8\u5f53\u4e8e\u6d88\u8d39\u8005\u5c06\u4ece\u961f\u5217\u4e2d\u6700\u65b0\u7684\u6d88\u606f\u5f00\u59cb\u6d88\u8d39\u3002"),(0,a.kt)("h2",{id:"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"},"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9"),(0,a.kt)("p",null,"\u82e5\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u521d\u59cb\u6d88\u8d39\u4f4d\u70b9\u6216\u5f53\u524d\u6d88\u8d39\u4f4d\u70b9\u4e0d\u7b26\u5408\u60a8\u7684\u4e1a\u52a1\u9884\u671f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u8c03\u6574\u60a8\u7684\u6d88\u8d39\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521d\u59cb\u6d88\u8d39\u4f4d\u70b9\u4e0d\u7b26\u5408\u9700\u6c42\uff1a\u56e0\u521d\u59cb\u6d88\u8d39\u4f4d\u70b9\u4e3a\u5f53\u524d\u961f\u5217\u7684\u6700\u5927\u6d88\u606f\u4f4d\u70b9\uff0c\u5373\u5ba2\u6237\u7aef\u4f1a\u76f4\u63a5\u4ece\u6700\u65b0\u6d88\u606f\u5f00\u59cb\u6d88\u8d39\u3002\u82e5\u4e1a\u52a1\u4e0a\u7ebf\u65f6\u9700\u8981\u6d88\u8d39\u90e8\u5206\u5386\u53f2\u6d88\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u529f\u80fd\u6d88\u8d39\u5230\u6307\u5b9a\u65f6\u523b\u524d\u7684\u6d88\u606f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u5806\u79ef\u5feb\u901f\u6e05\u7406\uff1a\u5f53\u4e0b\u6e38\u6d88\u8d39\u7cfb\u7edf\u6027\u80fd\u4e0d\u8db3\u6216\u6d88\u8d39\u901f\u5ea6\u5c0f\u4e8e\u751f\u4ea7\u901f\u5ea6\u65f6\uff0c\u4f1a\u4ea7\u751f\u5927\u91cf\u5806\u79ef\u6d88\u606f\u3002\u82e5\u8fd9\u90e8\u5206\u5806\u79ef\u6d88\u606f\u53ef\u4ee5\u4e22\u5f03\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u5feb\u901f\u5c06\u6d88\u8d39\u4f4d\u70b9\u66f4\u65b0\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u7ed5\u8fc7\u8fd9\u90e8\u5206\u5806\u79ef\u7684\u6d88\u606f\uff0c\u51cf\u5c11\u4e0b\u6e38\u5904\u7406\u538b\u529b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u56de\u6eaf\uff0c\u7ea0\u6b63\u5904\u7406\uff1a\u7531\u4e8e\u4e1a\u52a1\u6d88\u8d39\u903b\u8f91\u51fa\u73b0\u5f02\u5e38\uff0c\u6d88\u606f\u88ab\u9519\u8bef\u5904\u7406\u3002\u82e5\u60a8\u5e0c\u671b\u91cd\u65b0\u6d88\u8d39\u8fd9\u4e9b\u5df2\u88ab\u5904\u7406\u7684\u6d88\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u5feb\u901f\u5c06\u6d88\u8d39\u4f4d\u70b9\u66f4\u65b0\u5230\u5386\u53f2\u6307\u5b9a\u4f4d\u7f6e\uff0c\u5b9e\u73b0\u6d88\u8d39\u56de\u6eaf\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u7f6e\u529f\u80fd")),(0,a.kt)("p",null,"Apache RocketMQ \u7684\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u63d0\u4f9b\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u7f6e\u5230\u961f\u5217\u4e2d\u7684\u6307\u5b9a\u4f4d\u70b9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u7f6e\u5230\u67d0\u4e00\u65f6\u523b\u5bf9\u5e94\u7684\u6d88\u8d39\u4f4d\u70b9\uff0c\u5339\u914d\u4f4d\u70b9\u65f6\uff0c\u670d\u52a1\u7aef\u4f1a\u6839\u636e\u81ea\u52a8\u5339\u914d\u5230\u8be5\u65f6\u523b\u6700\u63a5\u8fd1\u7684\u6d88\u8d39\u4f4d\u70b9\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u9650\u5236")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u540e\u6d88\u8d39\u8005\u5c06\u76f4\u63a5\u4ece\u91cd\u7f6e\u540e\u7684\u4f4d\u70b9\u5f00\u59cb\u6d88\u8d39\uff0c\u5bf9\u4e8e\u56de\u6eaf\u91cd\u7f6e\u7c7b\u573a\u666f\uff0c\u91cd\u7f6e\u540e\u7684\u5386\u53f2\u6d88\u606f\u5927\u591a\u5c5e\u4e8e\u5b58\u50a8\u51b7\u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7cfb\u7edf\u538b\u529b\u4e0a\u5347\uff0c\u4e00\u822c\u79f0\u4e3a\u51b7\u8bfb\u73b0\u8c61\u3002\u56e0\u6b64\uff0c\u9700\u8981\u8c28\u614e\u8bc4\u4f30\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u540e\u7684\u5f71\u54cd\u3002\u5efa\u8bae\u4e25\u683c\u63a7\u5236\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u63a5\u53e3\u7684\u8c03\u7528\u6743\u9650\uff0c\u907f\u514d\u65e0\u610f\u4e49\u3001\u9ad8\u9891\u6b21\u7684\u6d88\u8d39\u4f4d\u70b9\u91cd\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apache RocketMQ \u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u529f\u80fd\u53ea\u80fd\u91cd\u7f6e\u5bf9\u6d88\u8d39\u8005\u53ef\u89c1\u7684\u6d88\u606f\uff0c\u4e0d\u80fd\u91cd\u7f6e\u5b9a\u65f6\u4e2d\u3001\u91cd\u8bd5\u7b49\u5f85\u4e2d\u7684\u6d88\u606f\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/02delaymessage"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/10consumerretrypolicy"},"\u6d88\u8d39\u91cd\u8bd5"),"\u3002"))),(0,a.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,a.kt)("p",null,"\u5173\u4e8e\u6d88\u8d39\u8005\u5206\u7ec4\u7684\u6d88\u8d39\u4f4d\u70b9\u521d\u59cb\u503c\uff0c\u4e0d\u540c\u7684\u670d\u52a1\u7aef\u7248\u672c\u4e2d\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u5386\u53f2\u7248\u672c\uff084.x/3.x\u7248\u672c\uff09\uff1a\u6d88\u606f\u4f4d\u70b9\u521d\u59cb\u503c\u53d7\u5f53\u524d\u961f\u5217\u6d88\u606f\u72b6\u6001\u7684\u5f71\u54cd\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef5.x\u7248\u672c\uff1a\u660e\u786e\u5b9a\u4e49\u6d88\u8d39\u4f4d\u70b9\u521d\u59cb\u503c\u4e3a\u6d88\u8d39\u8005\u83b7\u53d6\u6d88\u606f\u65f6\u523b\u961f\u5217\u4e2d\u7684\u6700\u5927\u6d88\u606f\u4f4d\u70b9\u3002"))),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u82e5\u60a8\u5c06\u670d\u52a1\u7aef\u7248\u672c\u4ece\u5386\u53f2\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u76845.x\u7248\u672c\u65f6\uff0c\u9700\u8981\u81ea\u884c\u5bf9\u6d88\u8d39\u8005\u9996\u6b21\u542f\u52a8\u65f6\u7684\u60c5\u51b5\u505a\u517c\u5bb9\u6027\u5224\u65ad\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e25\u683c\u63a7\u5236\u6d88\u8d39\u4f4d\u70b9\u91cd\u7f6e\u7684\u6743\u9650")),(0,a.kt)("p",null,"\u91cd\u7f6e\u6d88\u8d39\u4f4d\u70b9\u4f1a\u7ed9\u7cfb\u7edf\u5e26\u6765\u989d\u5916\u5904\u7406\u538b\u529b\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u65b0\u6d88\u606f\u7684\u8bfb\u5199\u6027\u80fd\u3002 \u56e0\u6b64\u8be5\u64cd\u4f5c\u8bf7\u5728\u9002\u7528\u573a\u666f\u4e0b\u8c28\u614e\u6267\u884c\uff0c\u5e76\u63d0\u524d\u505a\u597d\u5408\u7406\u6027\u548c\u5fc5\u8981\u6027\u8bc4\u4f30\u3002"))}u.isMDXComponent=!0},71014:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/consumerprogress-da5f38e59a7fcb4ff40325b0f7fbf8a3.png"},25597:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/consumerprogress1-07d9f77dd7e62f2250330ed36f36fe3c.png"},81815:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/updateprogress-02d1a9de72aa4f72c3b1e1c6e03d2407.png"}}]);