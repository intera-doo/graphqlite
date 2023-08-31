"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6107],{7633:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=(a(1839),a(4866)),o=a(5162);const l={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},s=void 0,p={unversionedId:"pagination",id:"version-4.1/pagination",title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-4.1/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/4.1/pagination",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/pagination.mdx",tags:[],version:"4.1",lastUpdatedBy:"mshapovalov",lastUpdatedAt:1693465791,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},sidebar:"version-4.1/docs",previous:{title:"File uploads",permalink:"/docs/4.1/file-uploads"},next:{title:"Custom types",permalink:"/docs/4.1/custom-types"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,i.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,i.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,i.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,i.kt)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, ",(0,i.kt)("a",{href:"laravel-package-advanced"},"the GraphQLite Laravel bundle comes with its own pagination system"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You will need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In your query, simply return a class that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")))),(0,i.kt)("p",null,"Notice that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,i.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,i.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,i.kt)("li",{parentName:"ul"},"you MUST add a ",(0,i.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,i.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,i.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,i.kt)("p",null,'The "count" field returns the ',(0,i.kt)("strong",{parentName:"p"},"total count")," of items."))}g.isMDXComponent=!0}}]);