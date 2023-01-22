"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[228],{9745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));n(1839);const r={id:"extend_type",title:"Extending a type",sidebar_label:"Extending a type",original_id:"extend_type"},o=void 0,l={unversionedId:"extend_type",id:"version-3.0/extend_type",title:"Extending a type",description:"Fields exposed in a GraphQL type do not need to be all part of the same class.",source:"@site/versioned_docs/version-3.0/extend_type.mdx",sourceDirName:".",slug:"/extend_type",permalink:"/docs/3.0/extend_type",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/extend_type.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1674374805,formattedLastUpdatedAt:"Jan 22, 2023",frontMatter:{id:"extend_type",title:"Extending a type",sidebar_label:"Extending a type",original_id:"extend_type"},sidebar:"version-3.0/docs",previous:{title:"Type mapping",permalink:"/docs/3.0/type_mapping"},next:{title:"Authentication and authorization",permalink:"/docs/3.0/authentication_authorization"}},s={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fields exposed in a GraphQL type do not need to be all part of the same class."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation to add additional fields to a type that is already declared."),(0,i.kt)("div",{class:"alert alert--info"},"Extending a type has nothing to do with type inheritance. If you are looking for a way to expose a class and its children classes, have a look at the ",(0,i.kt)("a",{href:"inheritance"},"Inheritance")," section"),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class. In order to get the name of a product, there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"getName()")," method in\nthe product because the name needs to be translated in the correct language. You have a ",(0,i.kt)("inlineCode",{parentName:"p"},"TranslationService")," to do that."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// You need to use a service to get the name of the product in the correct language.\n$name = $translationService->getProductName($productId, $language);\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType"),", you can add an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field to your product:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @ExtendType(class=Product::class)\n */\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n")),(0,i.kt)("p",null,"Let's break this sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation, we tell GraphQLite that we want to add fields in the GraphQL type mapped to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," PHP class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    // ...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductType")," class must be in the types namespace. You configured this namespace when you installed GraphQLite."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductType")," class is actually a ",(0,i.kt)("strong",{parentName:"li"},"service"),". You can therefore inject dependencies in it (like the ",(0,i.kt)("inlineCode",{parentName:"li"},"$translationService")," in this example)")),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field()\n */\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field"),' annotation is used to add the "name" field to the ',(0,i.kt)("inlineCode",{parentName:"p"},"Product")," type."),(0,i.kt)("p",null,'Take a close look at the signature. The first parameter is the "resolved object" we are working on.\nAny additional parameters are used as arguments.'),(0,i.kt)("p",null,'Using the "',(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"Type language"),'" notation, we defined a type extension for\nthe GraphQL "Product" type:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Extend type Product {\n    name(language: !String): String!\n}\n")),(0,i.kt)("div",{class:"alert alert--success"},"Type extension is a very powerful tool. Use it to add fields that needs to be computed from services not available in the entity."))}c.isMDXComponent=!0}}]);