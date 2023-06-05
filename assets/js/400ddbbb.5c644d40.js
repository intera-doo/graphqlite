"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6904],{6777:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=(n(1839),n(4866)),s=n(5162);const r={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},u=void 0,p={unversionedId:"mutations",id:"version-6.0/mutations",title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-6.0/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/6.0/mutations",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/mutations.mdx",tags:[],version:"6.0",lastUpdatedBy:"Snyk bot",lastUpdatedAt:1685998514,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations"},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/6.0/queries"},next:{title:"Type mapping",permalink:"/docs/6.0/type-mapping"}},l={},d=[],c={toc:d},m="wrapper";function h(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In GraphQLite, mutations are created ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/queries"},"like queries"),"."),(0,o.kt)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Mutation]\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n"))),(0,o.kt)(s.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    /**\n     * @Mutation\n     */\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))))}h.isMDXComponent=!0}}]);