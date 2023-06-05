"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3699],{4078:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=e(7462),i=(e(7294),e(3905));e(1839);const o={id:"validation",title:"Validation",sidebar_label:"User input validation",original_id:"validation"},r=void 0,l={unversionedId:"validation",id:"version-4.0/validation",title:"Validation",description:"GraphQLite does not handle user input validation by itself. It is out of its scope.",source:"@site/versioned_docs/version-4.0/validation.mdx",sourceDirName:".",slug:"/validation",permalink:"/docs/4.0/validation",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/validation.mdx",tags:[],version:"4.0",lastUpdatedBy:"Snyk bot",lastUpdatedAt:1685998514,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"validation",title:"Validation",sidebar_label:"User input validation",original_id:"validation"},sidebar:"version-4.0/docs",previous:{title:"Error handling",permalink:"/docs/4.0/error-handling"},next:{title:"Authentication and authorization",permalink:"/docs/4.0/authentication_authorization"}},s={},d=[{value:"Validating user input with Laravel",id:"validating-user-input-with-laravel",level:2},{value:"Validating user input with Symfony validator",id:"validating-user-input-with-symfony-validator",level:2},{value:"Using the Symfony validator bridge",id:"using-the-symfony-validator-bridge",level:3},{value:"Using the validator directly on a query / mutation / factory ...",id:"using-the-validator-directly-on-a-query--mutation--factory-",level:3}],u={toc:d},p="wrapper";function c(t){let{components:a,...e}=t;return(0,i.kt)(p,(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQLite does not handle user input validation by itself. It is out of its scope."),(0,i.kt)("p",null,"However, it can integrate with your favorite framework validation mechanism. The way you validate user input will\ntherefore depend on the framework you are using."),(0,i.kt)("h2",{id:"validating-user-input-with-laravel"},"Validating user input with Laravel"),(0,i.kt)("p",null,"If you are using Laravel, jump directly to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/laravel-package-advanced#support-for-laravel-validation-rules"},"GraphQLite Laravel package advanced documentation"),"\nto learn how to use the Laravel validation with GraphQLite."),(0,i.kt)("h2",{id:"validating-user-input-with-symfony-validator"},"Validating user input with Symfony validator"),(0,i.kt)("p",null,"GraphQLite provides a bridge to use the ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/validation.html"},"Symfony validator")," directly in your application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are using Symfony and the Symfony GraphQLite bundle, the bridge is available out of the box"),(0,i.kt)("li",{parentName:"ul"},'If you are using another framework, the "Symfony validator" component can be used in standalone mode. If you want to\nadd it to your project, you can require the ',(0,i.kt)("em",{parentName:"li"},"thecodingmachine/graphqlite-symfony-validator-bridge")," package:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require thecodingmachine/graphqlite-symfony-validator-bridge\n")))),(0,i.kt)("h3",{id:"using-the-symfony-validator-bridge"},"Using the Symfony validator bridge"),(0,i.kt)("p",null,"Usually, when you use the Symfony validator component, you put annotations in your entities and you validate those entities\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validator")," object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UserController.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\Graphqlite\\Validator\\ValidationFailedException\n\nclass UserController\n{\n    private $validator;\n\n    public function __construct(ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n    }\n\n    /**\n     * @Mutation\n     */\n    public function createUser(string $email, string $password): User\n    {\n        $user = new User($email, $password);\n\n        // Let's validate the user\n        $errors = $this->validator->validate($user);\n\n        // Throw an appropriate GraphQL exception if validation errors are encountered\n        ValidationFailedException::throwException($errors);\n\n        // No errors? Let's continue and save the user\n        // ...\n    }\n}\n")),(0,i.kt)("p",null,"Validation rules are added directly to the object in the domain model:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass User\n{\n    /**\n     * @Assert\\Email(\n     *     message = "The email \'{{ value }}\' is not a valid email.",\n     *     checkMX = true\n     * )\n     */\n    private $email;\n\n    /**\n     * The NotCompromisedPassword assertion asks the "HaveIBeenPawned" service if your password has already leaked or not.\n     * @Assert\\NotCompromisedPassword\n     */\n    private $password;\n\n    public function __construct(string $email, string $password)\n    {\n        $this->email = $email;\n        $this->password = $password;\n    }\n\n    // ...\n}\n')),(0,i.kt)("p",null,'If a validation fails, GraphQLite will return the failed validations in the "errors" section of the JSON response:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "The email \'\\"foo@thisdomaindoesnotexistatall.com\\"\' is not a valid email.",\n      "extensions": {\n        "code": "bf447c1c-0266-4e10-9c6c-573df282e413",\n        "field": "email",\n        "category": "Validate"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"using-the-validator-directly-on-a-query--mutation--factory-"},"Using the validator directly on a query / mutation / factory ..."),(0,i.kt)("p",null,'If the data entered by the user is mapped to an object, please use the "validator" instance directly as explained in\nthe last chapter. It is a best practice to put your validation layer as close as possible to your domain model.'),(0,i.kt)("p",null,"If the data entered by the user is ",(0,i.kt)("strong",{parentName:"p"},"not")," mapped to an object, you can directly annotate your query, mutation, factory..."),(0,i.kt)("div",{class:"alert alert--warning"},"You generally don't want to do this. It is a best practice to put your validation constraints on your domain objects. Only use this technique if you want to validate user input and user input will not be stored in a domain object."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Assertion")," annotation to validate directly the user input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\nuse TheCodingMachine\\Graphqlite\\Validator\\Annotations\\Assertion;\n\n/**\n * @Query\n * @Assertion(for="email", constraint=@Assert\\Email())\n */\npublic function findByMail(string $email): User\n{\n    // ...\n}\n')),(0,i.kt)("p",null,'Notice that the "constraint" parameter contains an annotation (it is an annotation wrapped in an annotation).'),(0,i.kt)("p",null,"You can also pass an array to the ",(0,i.kt)("inlineCode",{parentName:"p"},"constraint")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Assertion(for="email", constraint={@Assert\\NotBlank(), @Assert\\Email()})\n')))}c.isMDXComponent=!0}}]);