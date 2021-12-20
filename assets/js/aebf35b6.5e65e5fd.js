"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5820],{66363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return r},default:function(){return c}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),p=["components"],o={id:"multiple_output_types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types",original_id:"multiple_output_types"},u=void 0,s={unversionedId:"multiple_output_types",id:"version-4.0/multiple_output_types",isDocsHomePage:!1,title:"Mapping multiple output types for the same class",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.0/multiple_output_types.mdx",sourceDirName:".",slug:"/multiple_output_types",permalink:"/docs/4.0/multiple_output_types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/multiple_output_types.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1640042319,formattedLastUpdatedAt:"12/20/2021",frontMatter:{id:"multiple_output_types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types",original_id:"multiple_output_types"},sidebar:"version-4.0/docs",previous:{title:"Extending an input type",permalink:"/docs/4.0/extend_input_type"},next:{title:"Symfony specific features",permalink:"/docs/4.0/symfony-bundle-advanced"}},r=[{value:"Example",id:"example",children:[],level:2},{value:"Extending a non-default type",id:"extending-a-non-default-type",children:[],level:2}],d={toc:r};function c(e){var t=e.components,n=(0,i.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)("p",null,"In most cases, you have one PHP class and you want to map it to one GraphQL output type."),(0,l.kt)("p",null,"But in very specific cases, you may want to use different GraphQL output type for the same class.\nFor instance, depending on the context, you might want to prevent the user from accessing some fields of your object."),(0,l.kt)("p",null,'To do so, you need to create 2 output types for the same PHP class. You typically do this using the "default" attribute of the ',(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Here is an example. Say we are manipulating products. When I query a ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," details, I want to have access to all fields.\nBut for some reason, I don't want to expose the price field of a product if I query the list of all products."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Product"),' class is declaring a classic GraphQL output type named "Product".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class, name="LimitedProduct", default=false)\n * @SourceField(name="name")\n */\nclass LimitedProductType\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product): string\n    {\n        return $product->getName();\n    }\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"LimitedProductType")," also declares a ",(0,l.kt)("a",{parentName:"p",href:"/docs/4.0/external_type_declaration"},'"external" type')," mapping the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class.\nBut pay special attention to the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,l.kt)("p",null,"First of all, we specify ",(0,l.kt)("inlineCode",{parentName:"p"},'name="LimitedProduct"'),'. This is useful to avoid having colliding names with the "Product" GraphQL output type\nthat is already declared.'),(0,l.kt)("p",null,"Then, we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"default=false"),". This means that by default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class should not be mapped to the ",(0,l.kt)("inlineCode",{parentName:"p"},"LimitedProductType"),".\nThis type will only be used when we explicitly request it."),(0,l.kt)("p",null,"Finally, we can write our requests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     *\n     * @Field\n     */\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @Field(outputType="[LimitedProduct!]!")\n     * @return Product[]\n     */\n    public function getProducts(): array { /* ... */ }\n}\n')),(0,l.kt)("p",null,'Notice how the "outputType" attribute is used in the ',(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation to force the output type."),(0,l.kt)("p",null,"Is a result, when the end user calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"product")," query, we will have the possibility to fetch the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"price")," fields,\nbut if he calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"products")," query, each product in the list will have a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field but no ",(0,l.kt)("inlineCode",{parentName:"p"},"price")," field. We managed\nto successfully expose a different set of fields based on the query context."),(0,l.kt)("h2",{id:"extending-a-non-default-type"},"Extending a non-default type"),(0,l.kt)("p",null,"If you want to extend a type using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation and if this type is declared as non-default,\nyou need to target the type by name instead of by class."),(0,l.kt)("p",null,"So instead of writing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")),(0,l.kt)("p",null,"you will write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @ExtendType(name="LimitedProduct")\n */\n')),(0,l.kt)("p",null,'Notice how we use the "name" attribute instead of the "class" attribute in the ',(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation."))}c.isMDXComponent=!0}}]);