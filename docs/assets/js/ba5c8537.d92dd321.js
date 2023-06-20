"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[73248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,d=f["".concat(s,".").concat(g)]||f[g]||c[g]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"globalconfig",title:"Global Configuration",slug:"property-test-global-config.html"},a=void 0,l={unversionedId:"proptest/globalconfig",id:"version-5.6/proptest/globalconfig",title:"Global Configuration",description:"Some property test settings can be set globally for all property tests.",source:"@site/versioned_docs/version-5.6/proptest/globalconfig.md",sourceDirName:"proptest",slug:"/proptest/property-test-global-config.html",permalink:"/docs/proptest/property-test-global-config.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/proptest/globalconfig.md",tags:[],version:"5.6",frontMatter:{id:"globalconfig",title:"Global Configuration",slug:"property-test-global-config.html"},sidebar:"proptest",previous:{title:"Statistics",permalink:"/docs/proptest/property-test-statistics.html"},next:{title:"Arrow Generators",permalink:"/docs/proptest/property-test-generators-arrow.html"}},s={},p=[{value:"Default Iterations",id:"default-iterations",level:3},{value:"Printing Shrink Steps",id:"printing-shrink-steps",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some property test settings can be set globally for all property tests."),(0,o.kt)("h3",{id:"default-iterations"},"Default Iterations"),(0,o.kt)("p",null,"The standard default iteration count is 1000. This means when you don't specify the iteration count in a property test,\nthe default will be 1000."),(0,o.kt)("p",null,"We can override this default either by assigning a value to ",(0,o.kt)("inlineCode",{parentName:"p"},"PropertyTesting.defaultIterationCount"),", or by using the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.proptest.default.iteration.count"),"."),(0,o.kt)("p",null,"Any test which directly sets the iteration count will of course use that value."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'PropertyTesting.defaultIterationCount = 123\n\n// will use 555 iterations specified in the test\nforAll<String, String>(555) { a,b -> a + b == "$a$b" }\n\n// will use 123 iterations from the global default\nforAll<String, String> { a,b -> a + b == "$a$b" }\n')),(0,o.kt)("p",null,"If you are using Kotest framework, then you can perform this action before any tests by using project config. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class KotestConfig : AbstractProjectConfig() {\n   override suspend fun beforeProject() {\n      PropertyTesting.defaultIterationCount = 123\n   }\n}\n")),(0,o.kt)("h3",{id:"printing-shrink-steps"},"Printing Shrink Steps"),(0,o.kt)("p",null,"By default, when using shrinking, each shrinking step will not be logged, but only the final shrunk value."),(0,o.kt)("p",null,"To enable logging of each intermediate value, assign true to ",(0,o.kt)("inlineCode",{parentName:"p"},"PropertyTesting.shouldPrintShrinkSteps"),"\nor use the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.proptest.output.shrink-steps=true"),"."))}c.isMDXComponent=!0}}]);