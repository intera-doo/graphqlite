"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3769],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=u??d;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,i]),tabValues:i}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==l&&(d(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},6939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=(n(1839),n(4866)),o=n(5162);const l={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},u=void 0,s={unversionedId:"authentication-authorization",id:"version-4.3/authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-4.3/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/4.3/authentication-authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/authentication-authorization.mdx",tags:[],version:"4.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698099838,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"version-4.3/docs",previous:{title:"User input validation",permalink:"/docs/4.3/validation"},next:{title:"Fine grained security",permalink:"/docs/4.3/fine-grained-security"}},c={},d=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations",id:"hiding-fields--queries--mutations",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,r.kt)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on authentication using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,r.kt)("li",{parentName:"ul"},"based on authorization using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,r.kt)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.3/fine-grained-security"},(0,r.kt)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,r.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,r.kt)("h2",{id:"logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,r.kt)("p",null,"GraphQLite exposes two annotations (",(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"In the example above, the query ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/field, an error is raised and the query fails."),(0,r.kt)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,r.kt)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation he has no access to, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/implementing-security"},'"authentication service" configured in GraphQLite'),"."),(0,r.kt)("h2",{id:"hiding-fields--queries--mutations"},"Hiding fields / queries / mutations"),(0,r.kt)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/types available.\nSome will be available to him and some won't."),(0,r.kt)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,r.kt)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optionnal from GraphQLite 4+.'))}m.isMDXComponent=!0}}]);