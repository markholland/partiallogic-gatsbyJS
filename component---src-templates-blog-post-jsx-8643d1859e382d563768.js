(self.webpackChunkpartiallogic_com=self.webpackChunkpartiallogic_com||[]).push([[390],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var o=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function c(e){return e&&e.map((function(e,t){return o.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return o.createElement(m,i({attr:i({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var n,r=e.attr,a=e.size,c=e.title,s=l(e,["attr","size","title"]),m=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==a?o.createElement(a.Consumer,null,(function(e){return t(e)})):t(r)}},1057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},pageQuery:function(){return w}});var o=n(7294),r=n(5414),a=n(9),i=n(3201),l=n(960),c=n(2204),s=n(6110),m=a.ZP.div.withConfig({displayName:"blog-post__PostTitle",componentId:"sc-1sk4wdz-0"})(["font-size:1.5em;font-weight:bold;text-align:center;margin:0 0 10px;@media only screen and (min-width:720px){font-size:1.8em;}"]),d=a.ZP.h2.withConfig({displayName:"blog-post__PostDate",componentId:"sc-1sk4wdz-1"})(["font-size:1em;@media only screen and (min-width:720px){font-size:1.2em;}"]),p=a.ZP.div.withConfig({displayName:"blog-post__PostContent",componentId:"sc-1sk4wdz-2"})(["font-size:0.8em;line-height:1.5;font-weight:400;margin:0 0 1.5em;@media only screen and (min-width:720px){font-size:1em;}"]),f=(0,a.ZP)(c.Z).withConfig({displayName:"blog-post__LinkPrev",componentId:"sc-1sk4wdz-3"})(["float:left;padding:20px 30px;"]),u=(0,a.ZP)(c.Z).withConfig({displayName:"blog-post__LinkNext",componentId:"sc-1sk4wdz-4"})(["float:right;padding:20px 30px;"]),g=a.ZP.div.withConfig({displayName:"blog-post__NavLinkText",componentId:"sc-1sk4wdz-5"})(["display:none;@media only screen and (min-width:720px){display:inline-block;padding:0 5px;max-width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;line-height:20px;}"]);function h(e){var t=e.data,n=e.pageContext,a=e.location,c=t.markdownRemark,h=n.next,w=n.prev,v=c.frontmatter.image.childImageSharp.resize.src;return o.createElement(l.Z,{location:a},o.createElement("div",{id:"blog-post-container"},o.createElement(r.Z,{title:"Partiallogic - "+c.frontmatter.title}),o.createElement(s.Z,{image:v}),o.createElement("div",{className:"content-container"},o.createElement("div",{className:"blog-post content"},o.createElement(m,{id:"title"},c.frontmatter.title),o.createElement(d,{className:"date"},c.frontmatter.date),o.createElement(p,{id:"blog-post-content",dangerouslySetInnerHTML:{__html:c.html}}),o.createElement("div",{className:"navigation"},w&&o.createElement(f,{to:w.frontmatter.path},o.createElement(i.bUI,null),o.createElement(g,null,w.frontmatter.title)),h&&o.createElement(u,{to:h.frontmatter.path},o.createElement(g,null,h.frontmatter.title),o.createElement(i.Dli,null)))))))}var w=function(){return"3763595823"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-8643d1859e382d563768.js.map