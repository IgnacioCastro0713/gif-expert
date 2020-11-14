(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),l=a.n(i),c=(a(15),a(1)),o=a(7);var s=function(e){var t=e.image,a=t.title,i=t.url,l=Object(n.useRef)(),c=Object(o.useClipboard)(),s=Object(n.useCallback)((function(){c.copy(i),l.current.hidden=!1,setTimeout((function(){return l.current.hidden=!0}),500)}),[c,i]);return r.a.createElement("div",{className:"image bg-white rounded-lg flex-wrap shadow-lg overflow-hidden transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 animate__animated animate__fadeIn"},r.a.createElement("input",{ref:c.target,value:i,readOnly:!0,hidden:!0}),r.a.createElement("img",{src:i,className:"h-48 w-full",alt:"",title:a}),r.a.createElement("span",{className:"flex justify-center p-2 text-gray-700 text-sm inline-block w-full cursor-pointer tooltip",onClick:s},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6 text-gray-500 text-center",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}))," Copy",r.a.createElement("span",{className:"tooltip-text bg-gray-400 p-3 -mt-6 -ml-7 rounded text-base",ref:l,hidden:!0},"Copied!")))},u=a(4),m=a.n(u),d=a(8),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=SoMXF2RPOmSnZhju04jYCMiM12k08RTb"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,i=r.data,e.abrupt("return",i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var p=function(e){var t=function(e){var t=Object(n.useState)({images:[],loading:!0}),a=Object(c.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){return setTimeout((function(){return i({images:e,loading:!1})}),2e3)}))}),[e]),r}(e.category),a=t.loading,i=t.images;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:"images grid grid-cols-1 md:grid-cols-6 gap-8 mb-3"},i.map((function(e){return r.a.createElement(s,{key:e.id,image:e})}))))},g=a(9);var v=function(e){var t=e.updateCategories,a=Object(n.useState)(""),i=Object(c.a)(a,2),l=i[0],o=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[l].concat(Object(g.a)(e))})),o("")}},r.a.createElement("div",{className:"relative text-gray-600 focus-within:text-gray-400"},r.a.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2"},r.a.createElement("button",{type:"submit",className:"p-1 focus:outline-none focus:shadow-outline"},r.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-6 h-6"},r.a.createElement("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})))),r.a.createElement("input",{type:"search",className:"py-2 text-sm text-white bg-gray-300 rounded-md pl-10 pr-2 w-full focus:outline-none focus:bg-white focus:text-gray-900",placeholder:"Search...",value:l,onChange:function(e){return o(e.target.value)},required:!0,autoComplete:"off"})))};var h=function(){var e=Object(n.useState)(["Rick and Morty"]),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex justify-center p-16 pt-10"},r.a.createElement("div",{className:"mt-2 w-128"},r.a.createElement("img",{src:"".concat(window.location,"/app-logo.png"),alt:"Gif Expert logo"}),r.a.createElement(v,{updateCategories:i}))),r.a.createElement("div",{className:"main-images mb-8 mx-5"},r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(p,{key:e,category:e})})))))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.385a7ebe.chunk.js.map