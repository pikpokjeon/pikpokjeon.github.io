/*! For license information please see component---src-templates-category-template-js-3a2aab54315ea1f61bc6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("iSRb"),m=a.n(r),o=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:m.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/59504386?s=460&u=eac3cb2397dc38bed71de6a7ba77bc12396977d9&v=4",className:m.a.author__photo,width:"200",height:"200",alt:t.name})),!0===a?i.a.createElement("h1",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:m.a.author__subtitle},t.bio))},c=a("7Qib"),s=a("euHg"),_=a.n(s),u=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:_.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),p=a.n(d),g=function(e){var t=e.contacts;return i.a.createElement("div",{className:p.a.contacts},i.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:p.a["contacts__list-item"],key:e},i.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(c.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(u,{name:e,icon:Object(c.b)(e)}))):null}))))},f=a("Nrk+"),v=a.n(f),h=function(e){var t=e.copyright;return i.a.createElement("div",{className:v.a.copyright},t)},k=a("je8k"),E=a.n(k),b=function(e){var t=e.menu;return i.a.createElement("nav",{className:E.a.menu},i.a.createElement("ul",{className:E.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:E.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),x=a.n(N),P=a("gGy4"),y=a("re66"),M=a.n(y),w=function(e){var t=e.categories;return i.a.createElement("nav",{className:M.a.menu},i.a.createElement("ul",{className:M.a.menu__list},i.a.createElement("li",{className:M.a["menu__list-item"]},i.a.createElement(l.Link,{className:M.a["menu__list-item-link"],activeClassName:M.a["menu__list-item-link--active"]},t))))},I=function(e){var t=e.isIndex,a=Object(P.b)(),n=a.author,l=a.copyright,r=a.menu,m=Object(P.c)().allMarkdownRemark;return i.a.createElement("div",{className:x.a.sidebar},i.a.createElement("div",{className:x.a.sidebar__inner},i.a.createElement(o,{author:n,isIndex:t}),i.a.createElement(b,{menu:r}),i.a.createElement(w,{catergories:m}),i.a.createElement(g,{contacts:n.contacts}),i.a.createElement(h,{copyright:l})))}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("1xLx"),m=a.n(r),o=function(e){var t=e.edges;return i.a.createElement("div",{className:m.a.feed},t.map((function(e){return i.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:m.a["feed__item-meta"]},i.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),i.a.createElement("span",{className:m.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:m.a["feed__item-meta-category"]},i.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:m.a["feed__item-title"]},i.a.createElement(l.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(l.Link,{className:m.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))}},MF2s:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Zttt"),r=a("/d1K"),m=a("6V6j"),o=a("RXmK"),c=a("v0M6"),s=a("gGy4");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),_=n.title,u=n.subtitle,d=a.category,p=a.currentPage,g=a.prevPagePath,f=a.nextPagePath,v=a.hasPrevPage,h=a.hasNextPage,k=t.allMarkdownRemark.edges,E=p>0?d+" - Page "+p+" - "+_:d+" - "+_;return i.a.createElement(l.a,{title:E,description:u},i.a.createElement(r.a,null),i.a.createElement(o.a,{title:d},i.a.createElement(m.a,{edges:k}),i.a.createElement(c.a,{prevPagePath:g,nextPagePath:f,hasPrevPage:v,hasNextPage:h})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),r=a.n(l),m=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===l)for(var r in n)a.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},re66:function(e,t,a){e.exports={menu:"Menu-module--menu--14Xfi",menu__list:"Menu-module--menu__list--2qbSq","menu__list-item":"Menu-module--menu__list-item--3__n0","menu__list-item-link":"Menu-module--menu__list-item-link--25XDt","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--1kq3C"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),l=a("UbMB"),r=a.n(l),m=a("Wbzz"),o=a("WlAH"),c=a("U4DU"),s=a.n(c),_=r.a.bind(s.a),u=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,l=e.hasPrevPage,r=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!l}),c=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(m.Link,{rel:"prev",to:l?t:"/",className:r},o.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(m.Link,{rel:"next",to:n?a:"/",className:c},o.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-3a2aab54315ea1f61bc6.js.map