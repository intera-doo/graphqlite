"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9368],{2988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=t(7462),p=(t(7294),t(3905));t(1839),t(4866),t(5162);const i={id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},s=void 0,r={unversionedId:"type-mapping",id:"version-6.1/type-mapping",title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-6.1/type-mapping.mdx",sourceDirName:".",slug:"/type-mapping",permalink:"/docs/type-mapping",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/type-mapping.mdx",tags:[],version:"6.1",lastUpdatedBy:"Snyk bot",lastUpdatedAt:1685998514,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/mutations"},next:{title:"Autowiring services",permalink:"/docs/autowiring"}},l={},o=[{value:"Scalar mapping",id:"scalar-mapping",level:2},{value:"Class mapping",id:"class-mapping",level:2},{value:"Array mapping",id:"array-mapping",level:2},{value:"ID mapping",id:"id-mapping",level:2},{value:"Force the outputType",id:"force-the-outputtype",level:3},{value:"ID class",id:"id-class",level:3},{value:"Date mapping",id:"date-mapping",level:2},{value:"Union types",id:"union-types",level:2},{value:"Enum types",id:"enum-types",level:2},{value:"Enum types with myclabs/php-enum",id:"enum-types-with-myclabsphp-enum",level:3},{value:"Deprecation of fields",id:"deprecation-of-fields",level:2},{value:"More scalar types",id:"more-scalar-types",level:2}],u={toc:o},c="wrapper";function m(e){let{components:n,...t}=e;return(0,p.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"As explained in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,p.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,p.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"string")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"int")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"bool")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"float"))),(0,p.kt)("p",null,"For instance:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,p.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,p.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,p.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,p.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(name: "MyProduct")]\nclass Product { /* ... */ }\n')),(0,p.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,p.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,p.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,p.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,p.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,p.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[] <=== we specify that the array is an array of User objects.\n */\n#[Query]\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')),(0,p.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,p.kt)("p",null,"GraphQL comes with a native ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,p.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,p.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Field(outputType: "ID")]\npublic function getId(): string\n{\n    // ...\n}\n')),(0,p.kt)("p",null,"Using the ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,p.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,p.kt)("p",null,"You can learn more about forcing output types in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/custom-types"},"custom types section"),"."),(0,p.kt)("h3",{id:"id-class"},"ID class"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Field]\npublic function getId(): ID\n{\n    // ...\n}\n")),(0,p.kt)("p",null,"Note that you can also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Mutation]\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")),(0,p.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,p.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,p.kt)("p",null,"When used as an output type, ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,p.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,p.kt)("div",{class:"alert alert--danger"},"PHP ",(0,p.kt)("code",null,"DateTime")," type is not supported."),(0,p.kt)("h2",{id:"union-types"},"Union types"),(0,p.kt)("p",null,"You can create a GraphQL union type ",(0,p.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,p.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return Company|Contact <== can return a company OR a contact.\n */\n#[Query]\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")),(0,p.kt)("h2",{id:"enum-types"},"Enum types"),(0,p.kt)("p",null,"PHP 8.1 introduced native support for Enums.  GraphQLite now also supports native enums as of version 5.1."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nenum Status: string\n{\n    case ON = 'on';\n    case OFF = 'off';\n    case PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return User[]\n */\n#[Query]\npublic function users(Status $status): array\n{\n    if ($status === Status::ON) {\n        // Your logic\n    }\n    // ...\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: Status!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," property on the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," annotation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'namespace Model\\User;\n\n#[Type(name: "UserStatus")]\nenum Status: string\n{\n    // ...\n}\n')),(0,p.kt)("h3",{id:"enum-types-with-myclabsphp-enum"},"Enum types with myclabs/php-enum"),(0,p.kt)("div",{class:"alert alert--danger"},"This implementation is now deprecated and will be removed in the future.  You are advised to use native enums instead."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Prior to version 5.1, GraphQLite only supported Enums through the 3rd party library, ",(0,p.kt)("a",{parentName:"em",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),".  If you'd like to use this implementation you'll first need to add this library as a dependency to your application.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,p.kt)("p",null,"Now, any class extending the ",(0,p.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[]\n */\n#[Query]\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n#[EnumType(name: "UserStatus")]\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')),(0,p.kt)("div",{class:"alert alert--warning"},'GraphQLite must be able to find all the classes extending the "MyCLabs\\Enum" class in your project. By default, GraphQLite will look for "Enum" classes in the namespaces declared for the types. For this reason, ',(0,p.kt)("strong",null,"your enum classes MUST be in one of the namespaces declared for the types in your GraphQLite configuration file.")),(0,p.kt)("h2",{id:"deprecation-of-fields"},"Deprecation of fields"),(0,p.kt)("p",null,"You can mark a field as deprecated in your GraphQL Schema by just annotating it with the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," PHPDoc annotation.  Note that a description (reason) is required for the annotation to be rendered."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     * @deprecated use field `name` instead\n     */\n    public function getProductName(): string\n    {\n        return $this->name;\n    }\n}\n")),(0,p.kt)("p",null,"This will add the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive to the field in the GraphQL Schema which sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"isDeprecated")," field to ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," and adds the reason to the ",(0,p.kt)("inlineCode",{parentName:"p"},"deprecationReason")," field in an introspection query. Fields marked as deprecated can still be queried, but will be returned in an introspection query only if ",(0,p.kt)("inlineCode",{parentName:"p"},"includeDeprecated")," is set to ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    __type(name: "Product") {\n\ufffc       fields(includeDeprecated: true) {\n\ufffc           name\n\ufffc           isDeprecated\n\ufffc           deprecationReason\n\ufffc       }\n\ufffc   }\n}\n')),(0,p.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,p.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,p.kt)("p",null,"If you need more types, you can check the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,p.kt)("p",null,"Or if you have some special needs, ",(0,p.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}m.isMDXComponent=!0}}]);