"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=s.createContext({}),l=function(e){var t=s.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return a?s.createElement(f,i(i({ref:t},c),{},{components:a})):s.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<n;l++)i[l]=a[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(87462),o=(a(67294),a(3905));const n={},i="Topic",r={unversionedId:"\u9886\u57df\u6a21\u578b/02topic",id:"version-5.0/\u9886\u57df\u6a21\u578b/02topic",title:"Topic",description:"This section describes the definition, model relationship, internal attributes, and behavior constraints of topics in Apache RocketMQ. This topic also provides version compatibility information and usage notes for topics.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/03-\u9886\u57df\u6a21\u578b/02topic.md",sourceDirName:"03-\u9886\u57df\u6a21\u578b",slug:"/\u9886\u57df\u6a21\u578b/02topic",permalink:"/en/docs/\u9886\u57df\u6a21\u578b/02topic",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-\u9886\u57df\u6a21\u578b/02topic.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Domain model",permalink:"/en/docs/\u9886\u57df\u6a21\u578b/01main"},next:{title:"MessageQueue",permalink:"/en/docs/\u9886\u57df\u6a21\u578b/03messagequeue"}},p={},l=[{value:"Definition",id:"definition",level:2},{value:"Model relationship",id:"model-relationship",level:2},{value:"Internal attributes",id:"internal-attributes",level:2},{value:"Behavior constraints",id:"behavior-constraints",level:2},{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Usage notes",id:"usage-notes",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topic"},"Topic"),(0,o.kt)("p",null,"This section describes the definition, model relationship, internal attributes, and behavior constraints of topics in Apache RocketMQ. This topic also provides version compatibility information and usage notes for topics."),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A topic is logically a collection of queues; we may publish messages to or receive from it."),(0,o.kt)("p",null,"Topics provide the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Message categorization and message isolation"),": When you create a messaging service based on Apache RocketMQ, we recommend that you use different topics to manage messages of different business types for isolated storage and subscription.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Identity and permission management"),": Messages in Apache RocketMQ are anonymous. You can use a topic to perform identity and permission management for messages of a specific category.")),(0,o.kt)("h2",{id:"model-relationship"},"Model relationship"),(0,o.kt)("p",null,"The following figure shows the position of a topic in the domain model of Apache RocketMQ.\n",(0,o.kt)("img",{alt:"Topic",src:a(14164).Z,width:"2383",height:"885"})),(0,o.kt)("p",null,"In Apache RocketMQ, a topic is a top-level storage container in which all message resources are defined. A topic is a logical concept and not the actual unit that stores messages."),(0,o.kt)("p",null,"A topic contains one or more queues. Message storage and scalability are implemented based on queues. All constraints and attribute settings for a topic are implemented based on the queues in the topic."),(0,o.kt)("h2",{id:"internal-attributes"},"Internal attributes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Topic name")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Definition: the name of a topic. A topic name identifies the topic and is globally unique in a cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Value: A topic name is specified by the user when a topic is created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Constraint: See ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E5%9F%BA%E7%A1%80%E4%BB%8B%E7%BB%8D/03limits"},"Parameter limits"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Queues")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Definition: the actual storage unit that stores messages. A topic contains one or more queues. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/03messagequeue"},"Message queues"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Value: You can specify the number of queues when you create a topic. Apache RocketMQ allocates the specified number of queues to the topic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Constraint: A topic must contain at least one queue."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Message type")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Definition: the message type that is specified for a topic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Value: When you create a topic in Apache RocketMQ, select one of the following message types for the topic:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Normal: ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/01normalmessage"},"Normal messages"),". A normal message does not require special semantics and is not correlated with other normal messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"FIFO: ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/03fifomessage"},"Fifo messages"),". Apache RocketMQ uses a message group to determine the order of a specified set of messages. The messages are delivered in the order in which they are sent.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Delay: ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/02delaymessage"},"Delayed messages"),". You can specify a delay to make messages available to consumers only after the delay has elapsed, instead of delivering messages immediately when they are produced.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transaction: ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/04transactionmessage"},"Transaction messages"),". Apache RocketMQ supports distributed transaction messages and ensures transaction consistency of database updates and message calls.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Constraint: A topic supports only one message type."))),(0,o.kt)("h2",{id:"behavior-constraints"},"Behavior constraints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Forced message type verification")),(0,o.kt)("p",null,"Apache RocketMQ version 5.x allows you to specify a message type for a topic. This way, you can manage and process messages of the specified type in a separate topic. Apache RocketMQ forcibly verifies the type of messages that are sent and the message type of the topic to which the messages are sent. If message type verification fails, message delivery requests are rejected, and a type mismatch error is returned. The following verification rules apply:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consistent message typesThe messages that you want to send must use the same message type as the message type that is specified for the topic to which you want to send the messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only one type of messages sent to a topicThe messages that you want to send to a topic must use the same message type. Only one message type can be specified for a topic."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of common usage errors")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Send messages that do not match the message type of a topicFor example, a request that is initiated to send Transaction messages to a topic that uses the FIFO message type is rejected, and a type mismatch error is returned.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Send messages of different types to a topicFor example, a request that is initiated to send normal messages and fifo messages to a topic that uses the Normal message type is rejected, and a type mismatch error is returned."))),(0,o.kt)("h2",{id:"version-compatibility"},"Version compatibility"),(0,o.kt)("p",null,"Forced message type verification is available only in Apache RocketMQ version 5.x. The SDKs of Apache RocketMQ versions 4.x and 3.x do not support forced message type verification. If you use version 4.x or 3.x, make sure that message types are consistent."),(0,o.kt)("p",null,"We recommend that you use Apache RocketMQ version 5.x."),(0,o.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Plan topics based on your business requirements")),(0,o.kt)("p",null,"We recommend that you use a topic to process messages that are produced for the same business module of a business aspect when you plan topics in Apache RocketMQ. Take note of the following factors when you plan topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message types: Use different topics to store messages of different types. For example, you can create two topics to separately store fifo messages and normal messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message correlation: Use separate topics to store messages that are not directly correlated. For example, create two topics for Taobao transaction messages and Freshippo logistics messages, which are not correlated. If the messages are directly correlated, you can use the same topic. For example, you can create one topic for order messages that are produced for the men's clothing category and women's clothing category on Taobao. If the business volume or submodules require more fine-grained topics, you can also use different topics for messages that can be classified into one topic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Message volume and timeliness: Use different topics to process messages that have differences in volume or timeliness. For example, do not use the same topic for one business that generates a small number of time-sensitive messages and another business that generates trillions of messages. This prevents time-sensitive messages from waiting too long for consumption."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of correct topic planning:")," In e-commerce scenarios, you can use a topic for order-related messages, such as order creation, payment, and canceling, a topic for logistics messages, and another topic for reward point-related messages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of incorrect topic planning:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Excessively coarse granularity: causes poor isolation. This does not facilitate independent O\\&M and fault handling. An example of this incorrect topic planning practice is to use the same topic for all transaction messages and logistics messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Excessively fine granularity: consumes a large number of topic resources and increases the system load. An example of this incorrect topic planning practice is to use a separate topic for messages that are produced for each user."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use a topic to send and receive messages of the same type")),(0,o.kt)("p",null,"Topic-based business isolation is a design principle of Apache RocketMQ. We recommend that you use different topics for messages that use different business logic. A specific topic must send or receive the same type of messages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid automated management of topics")),(0,o.kt)("p",null,"Topics in Apache RocketMQ are top-level resources and containers that provide separate permission management, observability metrics collection, and monitoring capabilities. System resources are required to create and manage topics. We recommend that you add, delete, modify, or query topics in a production environment only when the operation is required."),(0,o.kt)("p",null,"Although Apache RocketMQ provides automatic topic creation, we recommend that you use the feature only in a test environment. If you use the feature in a production environment, a large number of unnecessary topics may be generated. This hinders topic management and consumes additional system resources."))}m.isMDXComponent=!0},14164:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/archifortopic-ef512066703a22865613ea9216c4c300.png"}}]);