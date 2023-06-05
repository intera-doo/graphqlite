"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8368],{3581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));t(1839);const l={id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations",original_id:"field-middlewares"},r=void 0,o={unversionedId:"field-middlewares",id:"version-4.0/field-middlewares",title:"Adding custom annotations with Field middlewares",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.0/field_middlewares.md",sourceDirName:".",slug:"/field-middlewares",permalink:"/docs/4.0/field-middlewares",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/field_middlewares.md",tags:[],version:"4.0",lastUpdatedBy:"Snyk bot",lastUpdatedAt:1685998514,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations",original_id:"field-middlewares"},sidebar:"version-4.0/docs",previous:{title:"Custom types",permalink:"/docs/4.0/custom-types"},next:{title:"Custom argument resolving",permalink:"/docs/4.0/argument-resolving"}},d={},s=[{value:"Field middlewares",id:"field-middlewares",level:2},{value:"Annotations parsing",id:"annotations-parsing",level:2}],u={toc:s},p="wrapper";function c(e){let{components:n,...l}=e;return(0,a.kt)(p,(0,i.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("small",null,"Available in GraphQLite 4.0+"),(0,a.kt)("p",null,"Just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Logged")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@Right")," annotation, you can develop your own annotation that extends/modifies the behaviour\nof a field/query/mutation."),(0,a.kt)("div",{class:"alert alert--warning"},"If you want to create an annotation that targets a single argument (like ",(0,a.kt)("code",null,'@AutoWire(for="$service")'),"), you should rather check the documentation about ",(0,a.kt)("a",{href:"argument-resolving"},"custom argument resolving")),(0,a.kt)("h2",{id:"field-middlewares"},"Field middlewares"),(0,a.kt)("p",null,"GraphQLite is based on the Webonyx/Graphql-PHP library. In Webonyx, fields are represented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldDefinition")," class.\nIn order to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldDefinition"),' instance for your field, GraphQLite goes through a series of "middlewares".'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6068).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"Each middleware is passed a ",(0,a.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\QueryFieldDescriptor")," instance. This object contains all the\nparameters used to initialize the field (like the return type, the list of arguments, the resolver to be used, etc...)"),(0,a.kt)("p",null,"Each middleware must return a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\FieldDefinition")," (the object representing a field in Webonyx/GraphQL-PHP)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Your middleware must implement this interface.\n */\ninterface FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class QueryFieldDescriptor\n{\n    public function getName() { /* ... */ }\n    public function setName(string $name)  { /* ... */ }\n    public function getType() { /* ... */ }\n    public function setType($type): void  { /* ... */ }\n    public function getParameters(): array  { /* ... */ }\n    public function setParameters(array $parameters): void  { /* ... */ }\n    public function getPrefetchParameters(): array  { /* ... */ }\n    public function setPrefetchParameters(array $prefetchParameters): void  { /* ... */ }\n    public function getPrefetchMethodName(): ?string { /* ... */ }\n    public function setPrefetchMethodName(?string $prefetchMethodName): void { /* ... */ }\n    public function setCallable(callable $callable): void { /* ... */ }\n    public function setTargetMethodOnSource(?string $targetMethodOnSource): void { /* ... */ }\n    public function isInjectSource(): bool { /* ... */ }\n    public function setInjectSource(bool $injectSource): void { /* ... */ }\n    public function getComment(): ?string { /* ... */ }\n    public function setComment(?string $comment): void { /* ... */ }\n    public function getMiddlewareAnnotations(): MiddlewareAnnotations { /* ... */ }\n    public function setMiddlewareAnnotations(MiddlewareAnnotations $middlewareAnnotations): void { /* ... */ }\n    public function getOriginalResolver(): ResolverInterface { /* ... */ }\n    public function getResolver(): callable { /* ... */ }\n    public function setResolver(callable $resolver): void { /* ... */ }\n}\n")),(0,a.kt)("p",null,"The role of a middleware is to analyze the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryFieldDescriptor")," and modify it (or to directly return a ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldDefinition"),")."),(0,a.kt)("p",null,"If you want the field to purely disappear, your middleware can return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"annotations-parsing"},"Annotations parsing"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryFieldDescriptor::getMiddlewareAnnotations()"),"."),(0,a.kt)("p",null,"It returns the list of annotations applied to your field that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),"."),(0,a.kt)("p",null,"Let's imagine you want to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"@OnlyDebug")," annotation that displays a field/query/mutation only in debug mode (and\nhides the field in production). That could be useful, right?"),(0,a.kt)("p",null,"First, we have to define the annotation. Annotations are handled by the great ",(0,a.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/1.6/index.html"},"doctrine/annotations")," library."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OnlyDebug.php")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Annotations;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\MiddlewareAnnotationInterface;\n\n/**\n * @Annotation\n * @Target({"METHOD", "ANNOTATION"})\n */\nclass OnlyDebug implements MiddlewareAnnotationInterface\n{\n}\n')),(0,a.kt)("p",null,"Apart from being a classical annotation, this class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),'. This interface\nis a "marker" interface. It does not have any methods. It is just used to tell GraphQLite that this annotation\nis to be used by middlewares.'),(0,a.kt)("p",null,"Now, we can write a middleware that will act upon this annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Middlewares;\n\nuse App\\Annotations\\OnlyDebug;\nuse TheCodingMachine\\GraphQLite\\Middlewares\\FieldMiddlewareInterface;\nuse GraphQL\\Type\\Definition\\FieldDefinition;\nuse TheCodingMachine\\GraphQLite\\QueryFieldDescriptor;\n\n/**\n * Middleware in charge of hiding a field if it is annotated with @OnlyDebug and the DEBUG constant is not set\n */\nclass OnlyDebugFieldMiddleware implements FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition\n    {\n        $annotations = $queryFieldDescriptor->getMiddlewareAnnotations();\n\n        /**\n         * @var OnlyDebug $onlyDebug\n         */\n        $onlyDebug = $annotations->getAnnotationByType(OnlyDebug::class);\n\n        if ($onlyDebug !== null && !DEBUG) {\n            // If the onlyDebug annotation is present, returns null.\n            // Returning null will hide the field.\n            return null;\n        }\n\n        // Otherwise, let's continue the middleware pipe without touching anything.\n        return $fieldHandler->handle($queryFieldDescriptor);\n    }\n}\n")),(0,a.kt)("p",null,"The final thing we have to do is to register the middleware."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assuming you are using the ",(0,a.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," to initialize GraphQLite, you can register the field middleware using:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addFieldMiddleware(new OnlyDebugFieldMiddleware());\n"))),(0,a.kt)("li",{parentName:"ul"},"If you are using the Symfony bundle, you can register your field middleware services by tagging them with the ",(0,a.kt)("inlineCode",{parentName:"li"},"graphql.field_middleware")," tag.")))}c.isMDXComponent=!0},6068:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/field_middleware-5c3e3b4da480c49d048d527f93cc970d.svg"}}]);