"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2536],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),u=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=n,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||r;return a?s.createElement(d,i(i({ref:t},p),{},{components:a})):s.createElement(d,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=a(87462),n=(a(67294),a(3905));const r={},i="Message filtering",o={unversionedId:"\u529f\u80fd\u884c\u4e3a/07messagefilter",id:"version-5.0/\u529f\u80fd\u884c\u4e3a/07messagefilter",title:"Message filtering",description:"After a consumer is subscribed to a topic, Apache RocketMQ delivers all messages in the topic to the consumer. However, if you want the consumer to receive only messages that are relevant to your business, you can set filters on the Apache RocketMQ broker. This topic describes the message filtering feature and how it works. This topic also describes how messages are classified and provides examples on how different filtering methods can be used.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/07messagefilter.md",sourceDirName:"04-\u529f\u80fd\u884c\u4e3a",slug:"/\u529f\u80fd\u884c\u4e3a/07messagefilter",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/07messagefilter",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-\u529f\u80fd\u884c\u4e3a/07messagefilter.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Consumer types",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/06consumertype"},next:{title:"Load balancing policies for consumers",permalink:"/en/docs/\u529f\u80fd\u884c\u4e3a/08consumerloadbalance"}},l={},u=[{value:"Scenarios",id:"scenarios",level:2},{value:"Feature overview",id:"feature-overview",level:2},{value:"Subscription consistency",id:"subscription-consistency",level:2},{value:"Tag-based filtering",id:"tag-based-filtering",level:2},{value:"Attribute-based SQL filtering",id:"attribute-based-sql-filtering",level:2},{value:"Usage notes",id:"usage-notes",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"message-filtering"},"Message filtering"),(0,n.kt)("p",null,"After a consumer is subscribed to a topic, Apache RocketMQ delivers all messages in the topic to the consumer. However, if you want the consumer to receive only messages that are relevant to your business, you can set filters on the Apache RocketMQ broker. This topic describes the message filtering feature and how it works. This topic also describes how messages are classified and provides examples on how different filtering methods can be used."),(0,n.kt)("h2",{id:"scenarios"},"Scenarios"),(0,n.kt)("p",null,"Apache RocketMQ follows the publish-subscribe pattern. Apache RocketMQ is a message-oriented-middleware, and is widely used to facilitate communication between distributed upstream and downstream applications. In a real-world scenario, applications may use different methods to consume messages. These applications can all subscribe to the same Apache RocketMQ topic, and filters can be set to allow these applications to receive only the messages relevant to them."),(0,n.kt)("p",null,"By using the message filtering feature of Apache RocketMQ, you can effectively manage the messages sent to different consumers. This prevents your system from being overburdened by a huge number of messages that are not mission-critical."),(0,n.kt)("p",null,"The message filtering feature of Apache RocketMQ takes effect at the topic level, allowing you to manage messages of one business that are distributed across multiple services. If you want to manage messages for different businesses, you can subscribe to different topics."),(0,n.kt)("h2",{id:"feature-overview"},"Feature overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Definition")),(0,n.kt)("p",null,"The message filtering feature filters messages based on consumer-configured conditions and sends messages that meet the conditions to the consumers."),(0,n.kt)("p",null,"First, message attributes and tags are defined on Apache RocketMQ producers and consumers. Then filter conditions are set on the consumers, and Apache RocketMQ brokers filter messages based on the conditions and send the filtered messages to the consumers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Working mechanism"),"\n",(0,n.kt)("img",{alt:"\u6d88\u606f\u8fc7\u6ee4",src:a(41743).Z,width:"1377",height:"687"})),(0,n.kt)("p",null,"Message filtering involves the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Producer: The producer attaches attributes and tags to messages before initializing the messages. These attributes and tags are used to match the filter conditions set by the consumers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consumer: The consumer calls the subscription registration operation to inform the broker of the subscribed topic and messages, or filter conditions, during message initialization and consumption.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Broker: Upon receiving a consumer's request for messages, a Apache RocketMQ broker dynamically filters messages based on the expression of filter conditions that is submitted by the consumer, and sends messages that match the filter conditions to the consumer."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Classification")),(0,n.kt)("p",null,"Apache RocketMQ supports tag-based filtering and attribute-based SQL filtering. The following table compares the two methods."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Tag-based filtering"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute-based SQL filtering"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filter target"),(0,n.kt)("td",{parentName:"tr",align:null},"Message tags."),(0,n.kt)("td",{parentName:"tr",align:null},"Message attributes, which include custom attributes and system attributes. Message tags are a system attribute (TAGS).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filtering capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"Precise match."),(0,n.kt)("td",{parentName:"tr",align:null},"SQL syntax-based match.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scenarios"),(0,n.kt)("td",{parentName:"tr",align:null},"Simple filtering based on tags."),(0,n.kt)("td",{parentName:"tr",align:null},"Complex filtering involving relationships between tags and attributes.")))),(0,n.kt)("p",null,"For more information about how to use the filtering methods, see ",(0,n.kt)("a",{parentName:"p",href:"#section-4vy-ole-5nw"},"Tag-based filtering")," and ",(0,n.kt)("a",{parentName:"p",href:"#section-ge0-q7e-lsb"},"Attribute-based SQL filtering"),"."),(0,n.kt)("h2",{id:"subscription-consistency"},"Subscription consistency"),(0,n.kt)("p",null,"Filter expressions are part of a subscription. According to the publish-subscribe pattern of Apache RocketMQ, the subscription of one consumer must be consistent with that of another within a consumer group, including their filter expressions, to avoid situations where some messages cannot be consumed. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/09subscription"},"Subscriptions"),"."),(0,n.kt)("h2",{id:"tag-based-filtering"},"Tag-based filtering"),(0,n.kt)("p",null,"Tag-based filtering is the basic message filtering capability provided by Apache RocketMQ. This feature filters messages based on the tags set on producers. Consumers use the tags to specify which messages to consume."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scenarios")),(0,n.kt)("p",null,"The following figure shows an example in the e-commerce transaction scenario. A series of messages are generated in the process, from placing an order to receiving the product, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Order messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Payment messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics messages"))),(0,n.kt)("p",null,"These messages are sent to the topic named Trade_Topic, which have multiple systems as its subscribers, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Payment system: subscribes only to payment messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics system: subscribes only to logistics messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transaction success rate analysis system: subscribes to order and payment messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Real-time computing system: subscribes to all messages."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tag\u8fc7\u6ee4",src:a(27012).Z,width:"1724",height:"1185"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tag setting")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The producer attaches only one tag to each message before sending the messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The tag is a string of characters. The recommended maximum length of the string is 128 characters."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Filtering rules")),(0,n.kt)("p",null,"Tag-based filtering implements precise filtering based on character strings. You can set the following filtering rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Single-tag match: You can set the filter expression to a single tag to receive only messages that carry that tag.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Multi-tag match: You can set multiple tags in your filter expression to receive messages that carry any one of the tags. Separate the tags with two vertical bars (","|","|","). For example, Tag1","|","|","Tag2","|","|","Tag3 indicates that messages that are attached with Tag1, Tag2, or Tag3 are all sent to the consumer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All match: You can use an asterisk (","*",") to match all tags, which means that all messages in the topic will be sent to the consumer."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set a tag and send a message"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Message message = messageBuilder.setTopic("topic")\n// Specify the message index key so that the system can use a keyword to accurately locate the message. \n.setKeys("messageKey")\n// Specify the message tag so that consumers can use the tag to filter the message. \n// This example indicates that the tag of the message is set to "TagA". \n.setTag("TagA")\n// Message body. \n.setBody("messageBody".getBytes())\n.build();\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Specify a tag and subscribe to messages"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n// Subscribe to messages that carry tag "TagA". \nFilterExpression filterExpression = new FilterExpression("TagA", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Specify multiple tags and subscribe to messages"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n// Subscribe to messages that carry tag TagA, TagB, or TagC. \nFilterExpression filterExpression = new FilterExpression("TagA||TagB||TagC", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subscribe to all the messages in a topic"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n// Subscribe to all messages. \nFilterExpression filterExpression = new FilterExpression("*", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("h2",{id:"attribute-based-sql-filtering"},"Attribute-based SQL filtering"),(0,n.kt)("p",null,"Attribute-based SQL filtering is an advanced message filtering method provided byApache RocketMQ. It filters messages based on the attributes and attribute values, which are also called keys and values, that producers configure for messages. Producers can set multiple attributes for a message. Consumers can then specify attributes in SQL expressions to receive certain messages."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Because tags are a system attribute, tag-based filtering is a type of attribute-based SQL filtering. In SQL syntaxes, the tag attribute is represented by TAGS."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scenarios")),(0,n.kt)("p",null,"The following figure shows an example in the e-commerce transaction scenario. A series of messages are generated in the process, from placing an order to receiving the product. The messages are classified into order messages and logistics messages. A region attribute is configured for the logistics messages, and the values of the region attribute are Hangzhou and Shanghai."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Order messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics messages"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics messages whose value of the region attribute is Hangzhou")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics messages whose value of the region attribute is Shanghai"))))),(0,n.kt)("p",null,"These messages are sent to the topic named Trade_Topic, which has the following systems as its subscribers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics system 1: subscribes to only logistics messages whose value of the region attribute is Hangzhou.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logistics system 2: subscribes to all logistics messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Order tracking system: subscribes to only order messages.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Real-time computing system: subscribes to all messages."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"sql\u8fc7\u6ee4",src:a(37077).Z,width:"1977",height:"1252"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Message attribute setting")),(0,n.kt)("p",null,"Producers can set custom attributes for messages before sending the messages. Each attribute is a custom key-value pair."),(0,n.kt)("p",null,"More than one attribute can be set for a message."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Filtering rules")),(0,n.kt)("p",null,"You must follow the SQL92 syntax when you write filter expressions. Specifically:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IS NULL"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies that an attribute does not exist."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NULL"),": Attribute a does not exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IS NOT NULL"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies that an attribute exists."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL"),": Attribute a exists.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"}," ",">","  ")," ",">","=  ",(0,n.kt)("em",{parentName:"td"}," \\<  ")," \\<="),(0,n.kt)("td",{parentName:"tr",align:null},"Compares numeric values. The syntax cannot be used to compare strings. If it is used to compare strings, an error is reported when the consumer is started. ",(0,n.kt)("strong",{parentName:"td"},"Note")," Strings that can be converted into numeric values are also considered as numeric values."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"}," ",(0,n.kt)("inlineCode",{parentName:"em"},"a IS NOT NULL AND a > 100"),": Attribute a exists and the value of Attribute a is greater than 100.   ")," ",(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND a > 'abc'"),": An error example. abc is a string. Therefore, you cannot compare a with abc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BETWEEN xxx AND xxx"),(0,n.kt)("td",{parentName:"tr",align:null},"Compares numeric values. The syntax cannot be used to compare strings. If it is used to compare strings, an error is reported when the consumer is started. The syntax is equivalent to ",">","= xxx AND \\<= xxx. It means that the value of the attribute is between two numeric values or equal to either of the two numeric values."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a BETWEEN 10 AND 100)"),": Attribute a exists and the value of Attribute a is greater than or equal to 10 and less than or equal to 100.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NOT BETWEEN xxx AND xxx"),(0,n.kt)("td",{parentName:"tr",align:null},"Compares numeric values. The syntax cannot be used to compare strings. If it is used to compare strings, an error is reported when the consumer is started. The syntax is equivalent to \\< xxx OR ",">"," xxx. It means that the value of the attribute is less than the left-side numeric value or greater than the right-side numeric value."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a NOT BETWEEN 10 AND 100)"),": Attribute a exists and the value of Attribute a is less than 10 or greater than 100.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IN (xxx, xxx)"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates that the value of the attribute is included in a set. The elements in the set can only be strings."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a IN ('abc', 'def'))"),": Attribute a exists and the value of Attribute a is abc or def.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"}," =  "),"  \\<",">"),(0,n.kt)("td",{parentName:"tr",align:null},"The equal to operator and the not equal to operator. They can be used to compare numeric values and strings."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a = 'abc' OR a<>'def')"),": Attribute a exists and the value of Attribute a is abc or the value of Attribute a is not def.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"}," AND  ")," OR"),(0,n.kt)("td",{parentName:"tr",align:null},"The logical AND operator and the logical OR operator. They can be used to combine simple logical functions, and each logical function must be put in parentheses."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a > 100) OR (b IS NULL)"),": Attribute a exists and the value of Attribute a is greater than 100 or Attribute b does not exist.")))),(0,n.kt)("p",null,"SQL attribute-based filtering is implemented by configuring custom message attributes and defining an SQL filter expression. The filter expression may not generate valid results. The Apache RocketMQ broker processes messages based on the following logic:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Exception handling: If an exception is reported when a filter expression is being evaluated, the broker filters out received messages by default and does not deliver the messages to the consumer. For example, an exception occurs when numeric values and non-numeric values are compared.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Handling of null values: If the calculated result of the filter expression is NULL or the value is not a Boolean value, the broker filters out received messages by default and does not deliver the messages to the consumer. A Boolean value represents a truth value, which can be true or false. Assume that you did not configure a custom attribute for a message that the producer sends, but this custom attribute is used as a filter condition in the SQL expression. In this case, the evaluation result of the filter expression is NULL.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Handling of inconsistent numeric values: If the values of the custom message attribute are floating-point numbers but the attribute values used in the filter expression are integers, the broker filters out received messages by default and does not deliver the messages to the consumer."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set a tag and an attribute for messages and send a message"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Message message = messageBuilder.setTopic("topic")\n// Specify the message index key so that the system can use a keyword to accurately locate the message. \n.setKeys("messageKey")\n// Specify the message tag so that consumers can use the tag to filter the message. \n// This example indicates that the message tag is set to "messageTag". \n.setTag("messageTag")\n// You can also set custom attributes for the messages, such as environment, region, and logical branch. \n// In this example, the custom attribute is region and the attribute value is Hangzhou. \n.addProperty("Region", "Hangzhou")\n// Message body. \n.setBody("messageBody".getBytes())\n.build();\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subscribe to and filter messages based on a custom attribute"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n// Subscribe only to messages whose value of the region attribute is Hangzhou. \nFilterExpression filterExpression = new FilterExpression("Region IS NOT NULL AND Region=\'Hangzhou\'", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subscribe to and filter messages based on multiple custom attributes"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n// Subscribe to messages whose value of the region attribute is Hangzhou and value of the price attribute is greater than 30. \nFilterExpression filterExpression = new FilterExpression("Region IS NOT NULL AND price IS NOT NULL AND Region = \'Hangzhou\' AND price > 30", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subscribe to all the messages in the topic"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n// Subscribe to all the messages. \nFilterExpression filterExpression = new FilterExpression("True", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,n.kt)("h2",{id:"usage-notes"},"Usage notes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Set topics and tags for messages properly.")),(0,n.kt)("p",null,"You can use topics, tags, and attributes to split messages. Pay attention to the following items when you split messages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message type: Messages of different types, such as ordered messages and normal messages, must be split by using different topics. Do not use tags to split message types.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Business domain: Different business domains and departments must use different topics. For example, the topics must be different for logistics messages and payment messages. Logistics messages can be further divided into ordinary messages and urgent messages by using tags.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quantity and importance of messages: Messages that differ in quantity or link importance must be split into different topics."))))}m.isMDXComponent=!0},27012:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/messagefilter-09e82bf396d7c4100ed742e8d0d2c185.png"},41743:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/messagefilter0-ad2c8360f54b9a622238f8cffea12068.png"},37077:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/messagefilter2-dbf55cf4a63ac6d3b9c5f02603ce92ce.png"}}]);