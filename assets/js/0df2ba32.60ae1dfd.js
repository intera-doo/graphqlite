"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8410],{35986:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},l=void 0,p={unversionedId:"semver",id:"version-4.3/semver",isDocsHomePage:!1,title:"Our backward compatibility promise",description:"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as Semantic Versioning. In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example).",source:"@site/versioned_docs/version-4.3/semver.md",sourceDirName:".",slug:"/semver",permalink:"/docs/4.3/semver",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/semver.md",tags:[],version:"4.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1640042319,formattedLastUpdatedAt:"12/20/2021",frontMatter:{id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},sidebar:"version-4.3/docs",previous:{title:"Annotations reference",permalink:"/docs/4.3/annotations-reference"},next:{title:"Changelog",permalink:"/docs/4.3/changelog"}},m=[],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),". In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example)."),(0,i.kt)("p",null,'But sometimes, a new feature is not quite "dry" and we need a bit of time to find the perfect API.\nIn such cases, we prefer to gather feedback from real-world usage, adapt the API, or remove it altogether.\nDoing so is not possible with a no BC-break approach.'),(0,i.kt)("p",null,"To avoid being bound to our backward compatibility promise, such features can be marked as ",(0,i.kt)("strong",{parentName:"p"},"unstable")," or ",(0,i.kt)("strong",{parentName:"p"},"experimental")," and their classes and methods are marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@experimental")," tag."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@experimental")," classes / methods will ",(0,i.kt)("strong",{parentName:"p"},"not break")," in a patch release, but ",(0,i.kt)("em",{parentName:"p"},"may be broken")," in a minor version."),(0,i.kt)("p",null,"As a rule of thumb:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are a GraphQLite user (using GraphQLite mainly through its annotations), we guarantee strict semantic versioning"),(0,i.kt)("li",{parentName:"ul"},"If you are extending GraphQLite features (if you are developing custom annotations, or if you are developing a GraphQlite integration\nwith a framework...), be sure to check the tags.")),(0,i.kt)("p",null,"Said otherwise:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are a GraphQLite user, in your ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json"),", target a major version:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "^4"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are extending the GraphQLite ecosystem, in your ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json"),", target a minor version:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "~4.1.0"\n  }\n}\n')))),(0,i.kt)("p",null,"Finally, classes / methods annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@internal")," annotation are not meant to be used in your code or third-party library. They are meant for GraphQLite internal usage and they may break anytime. Do not use those directly."))}c.isMDXComponent=!0}}]);