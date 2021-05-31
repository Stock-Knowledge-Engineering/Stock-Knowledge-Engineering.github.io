(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?i.a.createElement(f,a(a({ref:t},u),{},{components:n})):i.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(127)),c={title:"Subjects"},a={unversionedId:"API List v2.0/5",id:"API List v2.0/5",isDocsHomePage:!1,title:"Subjects",description:"Description",source:"@site/docs/API List v2.0/5.md",sourceDirName:"API List v2.0",slug:"/API List v2.0/5",permalink:"/docs/API List v2.0/5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API List v2.0/5.md",version:"current",frontMatter:{title:"Subjects"},sidebar:"tutorialSidebar",previous:{title:"Delete Topic",permalink:"/docs/API List v2.0/4"},next:{title:"Add Subject",permalink:"/docs/API List v2.0/6"}},l=[{value:"Description",id:"description",children:[]},{value:"Method",id:"method",children:[]},{value:"Endpoint",id:"endpoint",children:[]},{value:"Header",id:"header",children:[]},{value:"Body",id:"body",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Success",id:"success",children:[]},{value:"Fail",id:"fail",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Return list of subjects"),Object(o.b)("h3",{id:"method"},"Method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET\n")),Object(o.b)("h3",{id:"endpoint"},"Endpoint"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"/subjects")),Object(o.b)("h3",{id:"header"},"Header"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(o.b)("h3",{id:"body"},"Body"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"filter by title\ntitle={title}")),Object(o.b)("h3",{id:"condition"},"Condition"),Object(o.b)("p",null,"Query result must not be null or greater than 0"),Object(o.b)("h3",{id:"success"},"Success"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," {\n sucess: true,\n content: [\n    {\n    id: int,\n    title: string,\n    description: string,\n    icon:string,\n    color: string,\n    createdtime: datetime, \n    modifiedtime: datetime\n    }\n    ]\n    }\n")),Object(o.b)("h3",{id:"fail"},"Fail"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{sucess: false}\n")))}s.isMDXComponent=!0}}]);