"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9862],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(63616),s=t(86010),c="tabItem_vU9c";function p(e){var n,t,i,o=e.lazy,p=e.block,d=e.defaultValue,h=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=g[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,T=b.setTabGroupChoices,C=(0,r.useState)(k),w=C[0],I=C[1],L=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var U=N[m];null!=U&&U!==w&&v.some((function(e){return e.value===U}))&&I(U)}var _=function(e){var n=e.currentTarget,t=L.indexOf(n),a=v[t].value;a!==w&&(E(n),I(a),null!=m&&T(m,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=L.indexOf(e.currentTarget)+1;t=L[a]||L[0];break;case"ArrowLeft":var r=L.indexOf(e.currentTarget)-1;t=L[r]||L[L.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return L.push(e)},onKeyDown:A,onFocus:_,onClick:_},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},10911:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(26396),l=t(58215),u=["components"],s={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},c=void 0,p={unversionedId:"authentication-authorization",id:"version-5.0/authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-5.0/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/authentication-authorization",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/authentication-authorization.mdx",tags:[],version:"5.0",lastUpdatedBy:"Dorian Savina",lastUpdatedAt:1649295164,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"version-5.0/docs",previous:{title:"User input validation",permalink:"/docs/validation"},next:{title:"Fine grained security",permalink:"/docs/fine-grained-security"}},d=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",children:[],level:2},{value:"Not throwing errors",id:"not-throwing-errors",children:[],level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",children:[],level:2},{value:"Hiding fields / queries / mutations",id:"hiding-fields--queries--mutations",children:[],level:2}],h={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,i.kt)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on authentication using the ",(0,i.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,i.kt)("li",{parentName:"ul"},"based on authorization using the ",(0,i.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,i.kt)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/fine-grained-security"},(0,i.kt)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,i.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,i.kt)("h2",{id:"logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,i.kt)("p",null,"GraphQLite exposes two annotations (",(0,i.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"In the example above, the query ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,i.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.kt)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/field, an error is raised and the query fails."),(0,i.kt)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,i.kt)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation he has no access to, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.kt)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/implementing-security"},'"authentication service" configured in GraphQLite'),"."),(0,i.kt)("h2",{id:"hiding-fields--queries--mutations"},"Hiding fields / queries / mutations"),(0,i.kt)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/types available.\nSome will be available to him and some won't."),(0,i.kt)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,i.kt)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optionnal from GraphQLite 4+.'))}m.isMDXComponent=!0}}]);