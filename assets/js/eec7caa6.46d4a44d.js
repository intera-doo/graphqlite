"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8337],{764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),r=(t(1839),t(4866)),o=t(5162);const s={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},l=void 0,u={unversionedId:"authentication-authorization",id:"authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/docs/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/next/authentication-authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/authentication-authorization.mdx",tags:[],version:"current",lastUpdatedBy:"mshapovalov",lastUpdatedAt:1693465791,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"docs",previous:{title:"User input validation",permalink:"/docs/next/validation"},next:{title:"Fine grained security",permalink:"/docs/next/fine-grained-security"}},h={},p=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations",id:"hiding-fields--queries--mutations",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,i.kt)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on authentication using the ",(0,i.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,i.kt)("li",{parentName:"ul"},"based on authorization using the ",(0,i.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,i.kt)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/fine-grained-security"},(0,i.kt)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,i.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,i.kt)("h2",{id:"logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,i.kt)("p",null,"GraphQLite exposes two annotations (",(0,i.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"In the example above, the query ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,i.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.kt)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/field, an error is raised and the query fails."),(0,i.kt)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,i.kt)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation he has no access to, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.kt)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/implementing-security"},'"authentication service" configured in GraphQLite'),". If user is not authenticated and\nparameter's type is not nullable, an authorization exception is thrown, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"@Logged")," annotation."),(0,i.kt)("h2",{id:"hiding-fields--queries--mutations"},"Hiding fields / queries / mutations"),(0,i.kt)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/types available.\nSome will be available to him and some won't."),(0,i.kt)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation. Beware of ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/annotations-reference"},"it's limitations"),"."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,i.kt)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optional from GraphQLite 4+.'))}m.isMDXComponent=!0}}]);