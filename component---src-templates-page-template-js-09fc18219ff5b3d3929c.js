(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),c=a("iSRb"),m=a.n(c),r=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:m.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/59504386?s=460&u=eac3cb2397dc38bed71de6a7ba77bc12396977d9&v=4",className:m.a.author__photo,width:"200",height:"200",alt:t.name})),!0===a?i.a.createElement("h1",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:m.a.author__subtitle},t.bio))},s=a("7Qib"),u=a("euHg"),o=a.n(u),_=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:o.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),h=a.n(d),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:h.a.contacts},i.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:h.a["contacts__list-item"],key:e},i.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(_,{name:e,icon:Object(s.b)(e)}))):null}))))},b=a("Nrk+"),E=a.n(b),k=function(e){var t=e.copyright;return i.a.createElement("div",{className:E.a.copyright},t)},v=a("je8k"),g=a.n(v),f=function(e){var t=e.menu;return i.a.createElement("nav",{className:g.a.menu},i.a.createElement("ul",{className:g.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:g.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:g.a["menu__list-item-link"],activeClassName:g.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),y=a.n(N),x=a("gGy4"),I=a("re66"),M=a.n(I),w=function(e){var t=e.categories;return i.a.createElement("nav",{className:M.a.menu},i.a.createElement("ul",{className:M.a.menu__list},i.a.createElement("li",{className:M.a["menu__list-item"]},i.a.createElement(l.Link,{className:M.a["menu__list-item-link"],activeClassName:M.a["menu__list-item-link--active"]},t))))},C=function(e){var t=e.isIndex,a=Object(x.b)(),n=a.author,l=a.copyright,c=a.menu,m=Object(x.c)().allMarkdownRemark;return i.a.createElement("div",{className:y.a.sidebar},i.a.createElement("div",{className:y.a.sidebar__inner},i.a.createElement(r,{author:n,isIndex:t}),i.a.createElement(f,{menu:c}),i.a.createElement(w,{catergories:m}),i.a.createElement(p,{contacts:n.contacts}),i.a.createElement(k,{copyright:l})))}},"8vKr":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Zttt"),c=a("/d1K"),m=a("RXmK"),r=a("gGy4");t.default=function(e){var t=e.data,a=Object(r.b)(),n=a.title,s=a.subtitle,u=t.markdownRemark.html,o=t.markdownRemark.frontmatter,_=o.title,d=o.description,h=void 0===d?"":d,p=o.socialImage,b=h||s,E=null==p?void 0:p.publicURL;return i.a.createElement(l.a,{title:_+" - "+n,description:b,socialImage:E},i.a.createElement(c.a,null),i.a.createElement(m.a,{title:_},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),c=a.n(l),m=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:c.a.page},i.a.createElement("div",{className:c.a.page__inner},t&&i.a.createElement("h1",{className:c.a.page__title},t),i.a.createElement("div",{className:c.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},re66:function(e,t,a){e.exports={menu:"Menu-module--menu--14Xfi",menu__list:"Menu-module--menu__list--2qbSq","menu__list-item":"Menu-module--menu__list-item--3__n0","menu__list-item-link":"Menu-module--menu__list-item-link--25XDt","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--1kq3C"}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-09fc18219ff5b3d3929c.js.map