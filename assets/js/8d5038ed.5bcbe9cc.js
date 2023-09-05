"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"react",title:"template",authors:["slorber","yangshun"],tags:["react"]},s=void 0,i={permalink:"/my-website/blog/react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-06-28-react-handson-data/index.md",source:"@site/blog/2020-06-28-react-handson-data/index.md",title:"template",description:"\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8",date:"2020-06-28T00:00:00.000Z",formattedDate:"2020\u5e746\u670828\u65e5",tags:[{label:"react",permalink:"/my-website/blog/tags/react"}],readingTime:1.08,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"react",title:"template",authors:["slorber","yangshun"],tags:["react"]},prevItem:{title:"MDX Blog Post",permalink:"/my-website/blog/mdx-blog-post"},nextItem:{title:"Long Blog Post",permalink:"/my-website/blog/long-blog-post"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8",id:"\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8"},"\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'\n// fetch.ts\nimport React from "react";\nimport Fetch from "./Fetch";\nimport UserRepositories from "./UserRepositories";\n\n\n// \u4e0a\u8a18\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u308a\u53d6\u5f97\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306f UserDetails \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u3088\u308a\u63cf\u753b\n// \u3055\u308c\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 UserRepositories \u306b\u3088\u308a\u30012 \u756a\u76ee\u306e fetch \u304c\u5b9f\u884c\u3055\u308c\nexport default function GitHubUser({ login }) {\n  return (\n    <Fetch\n      uri={`https://api.github.com/users/${login}`}\n      renderSuccess={UserDetails}\n    />\n  );\n}\n\nfunction UserDetails({ data }) {\n  return (\n    <div className="githubUser">\n      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />\n      <div>\n        <h1>{data.login}</h1>\n        {data.name && <p>{data.name}</p>}\n        {data.location && <p>{data.location}</p>}\n      </div>\n\n{/* \u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3059\u308b\u3068\u3001\u53d6\u5f97\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30ea\u30b9\u30c8 */}\n{/*\u3092 RepoMenu \u3092\u4f7f\u3063\u3066\u8868\u793a\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u30dc\u30bf\u30f3\u3092\u64cd\u4f5c\u3057\u3066\u5225\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u3001 */}\n{/*onSelect \u30d7\u30ed\u30d1\u30c6\u30a3\u7d4c\u7531\u3067\u4e0a\u4f4d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u901a\u77e5\u3057\u3066\u3044\u307e\u3059\u3002*/}\n\n      <UserRepositories\n        login={data.login}\n        onSelect={repoName => console.log(`${repoName} selected`)}\n      />\n    </div>\n  );\n}\n\n\n\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// UserRepositories.js\nexport default function UserRepositories({ login, onSelect = f => f }) {\n  return (\n    <Fetch\n      uri={`https://api.github.com/users/${login}/repos`}\n      renderSuccess={({ data }) => (\n        <RepoMenu\n          repositories={data}\n          onSelect={onSelect}\n        />\n      )}\n    />\n  );\n}\n\n")))}m.isMDXComponent=!0}}]);