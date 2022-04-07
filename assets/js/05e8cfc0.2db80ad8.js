"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2650],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59767:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"query-plan",title:"Query plan",sidebar_label:"Query plan",original_id:"query-plan"},u=void 0,p={unversionedId:"query-plan",id:"version-4.0/query-plan",title:"Query plan",description:"The problem",source:"@site/versioned_docs/version-4.0/query_plan.mdx",sourceDirName:".",slug:"/query-plan",permalink:"/docs/4.0/query-plan",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/query_plan.mdx",tags:[],version:"4.0",lastUpdatedBy:"Andrii Dembitskyi",lastUpdatedAt:1649294227,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"query-plan",title:"Query plan",sidebar_label:"Query plan",original_id:"query-plan"},sidebar:"version-4.0/docs",previous:{title:"Connecting security to your framework",permalink:"/docs/4.0/implementing-security"},next:{title:"Prefetching records",permalink:"/docs/4.0/prefetch-method"}},s=[{value:"The problem",id:"the-problem",children:[],level:2},{value:"Fetching the query plan",id:"fetching-the-query-plan",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The problem"),(0,a.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,a.kt)("p",null,"Let's have a look at the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    products {\n        name\n        manufacturer {\n            name\n        }\n    }\n}\n")),(0,a.kt)("p",null,"A naive implementation will do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 query to fetch the list of products"),(0,a.kt)("li",{parentName:"ul"},"1 query per product to fetch the manufacturer")),(0,a.kt)("p",null,'Assuming we have "N" products, we will make "N+1" queries.'),(0,a.kt)("p",null,'There are several ways to fix this problem. Assuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "products" and "manufacturers".'),(0,a.kt)("p",null,'But how do I know if I should make the JOIN between "products" and "manufacturers" or not? I need to know ahead\nof time.'),(0,a.kt)("p",null,"With GraphQLite, you can answer this question by tapping into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," object."),(0,a.kt)("h2",{id:"fetching-the-query-plan"},"Fetching the query plan"),(0,a.kt)("small",null,"Available in GraphQLite 4.0+"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," is a class provided by Webonyx/GraphQL-PHP (the low-level GraphQL library used by GraphQLite).\nIt contains info about the query and what fields are requested. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"ResolveInfo::getFieldSelection"),' you can analyze the query\nand decide whether you should perform additional "JOINS" in your query or not.'),(0,a.kt)("div",{class:"alert alert--info"},"As of the writing of this documentation, the ",(0,a.kt)("code",null,"ResolveInfo")," class is useful but somewhat limited. The ",(0,a.kt)("a",{href:"https://github.com/webonyx/graphql-php/pull/436"},'next version of Webonyx/GraphQL-PHP will add a "query plan"'),"that allows a deeper analysis of the query."))}d.isMDXComponent=!0}}]);