"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2650],{59767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"query-plan",title:"Query plan",sidebar_label:"Query plan",original_id:"query-plan"},u=void 0,s={unversionedId:"query-plan",id:"version-4.0/query-plan",isDocsHomePage:!1,title:"Query plan",description:"The problem",source:"@site/versioned_docs/version-4.0/query_plan.mdx",sourceDirName:".",slug:"/query-plan",permalink:"/docs/4.0/query-plan",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/query_plan.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1640042319,formattedLastUpdatedAt:"12/20/2021",frontMatter:{id:"query-plan",title:"Query plan",sidebar_label:"Query plan",original_id:"query-plan"},sidebar:"version-4.0/docs",previous:{title:"Connecting security to your framework",permalink:"/docs/4.0/implementing-security"},next:{title:"Prefetching records",permalink:"/docs/4.0/prefetch-method"}},p=[{value:"The problem",id:"the-problem",children:[],level:2},{value:"Fetching the query plan",id:"fetching-the-query-plan",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The problem"),(0,o.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,o.kt)("p",null,"Let's have a look at the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    products {\n        name\n        manufacturer {\n            name\n        }\n    }\n}\n")),(0,o.kt)("p",null,"A naive implementation will do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 query to fetch the list of products"),(0,o.kt)("li",{parentName:"ul"},"1 query per product to fetch the manufacturer")),(0,o.kt)("p",null,'Assuming we have "N" products, we will make "N+1" queries.'),(0,o.kt)("p",null,'There are several ways to fix this problem. Assuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "products" and "manufacturers".'),(0,o.kt)("p",null,'But how do I know if I should make the JOIN between "products" and "manufacturers" or not? I need to know ahead\nof time.'),(0,o.kt)("p",null,"With GraphQLite, you can answer this question by tapping into the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," object."),(0,o.kt)("h2",{id:"fetching-the-query-plan"},"Fetching the query plan"),(0,o.kt)("small",null,"Available in GraphQLite 4.0+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," is a class provided by Webonyx/GraphQL-PHP (the low-level GraphQL library used by GraphQLite).\nIt contains info about the query and what fields are requested. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo::getFieldSelection"),' you can analyze the query\nand decide whether you should perform additional "JOINS" in your query or not.'),(0,o.kt)("div",{class:"alert alert--info"},"As of the writing of this documentation, the ",(0,o.kt)("code",null,"ResolveInfo")," class is useful but somewhat limited. The ",(0,o.kt)("a",{href:"https://github.com/webonyx/graphql-php/pull/436"},'next version of Webonyx/GraphQL-PHP will add a "query plan"'),"that allows a deeper analysis of the query."))}c.isMDXComponent=!0}}]);