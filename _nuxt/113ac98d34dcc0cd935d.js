(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(t,e,n){},153:function(t,e,n){"use strict";e.a={mounted:function(){window&&(window.prerenderReady=!0)}}},159:function(t,e,n){"use strict";var r=n(177),o={space:"xisblufoxlb6",accessToken:"cd7a72a229e71d5b7f6641d1075b4399368cbc3403716a25eae28dab413c5149"};e.a=function(){return Object(r.a)(o)}},161:function(t,e,n){"use strict";var r=n(151);n.n(r).a},162:function(t,e,n){"use strict";var r={},o=(n(161),n(17)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"logo"},[e("nuxt-link",{staticClass:"logo__link",attrs:{to:"/"}},[this._v("hyme")])],1),e("div",{staticClass:"lead"},[this._v("ちょっとなにかある。")])])},[],!1,null,"75930c71",null);e.a=component.exports},175:function(t,e){},195:function(t,e,n){},196:function(t,e,n){},197:function(t,e,n){},513:function(t,e,n){"use strict";var r=n(195);n.n(r).a},514:function(t,e,n){"use strict";var r=n(196);n.n(r).a},515:function(t,e,n){"use strict";var r=n(197);n.n(r).a},519:function(t,e,n){"use strict";n.r(e);n(49),n(46);var r=n(5),o=n(153),c=(n(323),n(325)),l=n.n(c),d=n(326),h=n.n(d),f=new l.a.Renderer;f.image=function(t,title,e){return'<img class="lazyestload" src="/img/placeholder.svg" data-src="'.concat(t,'" alt="').concat(e,'" title="').concat(title||"",'" />')};var m=l.a.setOptions({renderer:f,highlight:function(code){return h.a.highlightAuto(code).value}}),v=f,_=m,y={data:function(){return{toc:[],anchor:[0,0,0]}},methods:{getAnchor:function(t){var e=this.anchor;e[t-2]+=1;for(var i=t;i<e.length;i++)e[i]=0;return"index_".concat(e[0],"-").concat(e[1],"-").concat(e[2])}},created:function(){var t=this;v.heading=function(text,e){var n=text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"");if(e<5){var r=t.getAnchor(e);return t.toc.push({level:e,anchor:r,escapedText:n}),"<h".concat(e,' id="').concat(r,'">').concat(text,"</h").concat(e,">")}return"<h".concat(e,">").concat(text,"</h").concat(e,">")}}},w=n(159),C=(n(47),n(48),n(18),n(42)),k=n(43),x=n(88),O=n(98),A=100,E=function(){function t(){Object(C.a)(this,t),this.images=[],this.indexes=[],this.rafId=null,this.load=Object(x.debounce)(this.load.bind(this),A)}return Object(k.a)(t,[{key:"attach",value:function(){var t=this;document.querySelectorAll("img.lazyestload").forEach(function(e){t.images.push(e)}),this.load()}},{key:"detach",value:function(){cancelAnimationFrame(this.rafId)}},{key:"load",value:function(){var t=this.images,e=this.indexes,n=O.a.height;t.forEach(function(t,i){if(!t.classList.contains("lazyestload"))return!0;if(t.getBoundingClientRect().top-n>200)return!0;if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),"PICTURE"===t.parentElement.tagName)for(var r=t.parentElement.querySelectorAll("source"),o=r.length;o--;)r[o].srcset=r[o].getAttribute("data-srcset");t.addEventListener("load",function n(r){r.target.classList.remove("lazyestload"),t.removeEventListener("load",n),e.includes(i)||e.push(i)})}),e.length>=t.length?this.detach():this.rafId=requestAnimationFrame(this.load)}}]),t}(),j=n(176),T={props:{post:Object},computed:{publishedDate:function(){return this.post.sys?j.DateTime.fromISO(this.post.sys.updatedAt).toFormat("yyyy.MM.dd"):null}}},I=(n(513),n(17)),L=Object(I.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("n-link",{staticClass:"category",attrs:{to:"/blog/categories/"+t.post.fields.category.fields.slug}},[t._v(t._s(t.post.fields.category.fields.name))]),n("div",{staticClass:"tags"},[t._l(t.post.fields.tag,function(e){return[n("n-link",{staticClass:"tag",attrs:{to:"/blog/tags/"+e.fields.slug}},[t._v(t._s(e.fields.name))])]})],2),n("time",{staticClass:"updated-at"},[t._v(t._s(t.publishedDate))])],1)},[],!1,null,"19c7fa40",null).exports,B={props:{thumbnail:String},computed:{bgStyle:function(){return{"background-image":"url(".concat(this.thumbnail,")")}}}},R=(n(514),Object(I.a)(B,function(){var t=this.$createElement,e=this._self._c||t;return this.thumbnail?e("div",{staticClass:"thumb"},[e("div",{staticClass:"mask",style:this.bgStyle}),e("img",{staticClass:"visual",attrs:{src:this.thumbnail,alt:"thumbnail"}})]):this._e()},[],!1,null,"411a5723",null).exports),S=n(162),D=Object(w.a)(),$=new E,z={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.env,r=e.params,o=r.slug,t.next=4,D.getEntries({content_type:n.CTF_BLOG_ID,"fields.slug":o}).catch(console.error);case 4:return c=t.sent,t.abrupt("return",{post:c.items[0]});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:this.post.fields.title,meta:[{hid:"description",name:"description",content:this.post.fields.description},{property:"og:title",content:this.post.fields.title,hid:"og:title"},{property:"og:image",content:this.thumbnail,hid:"og:image"},{property:"og:url",content:this.url,hid:"og:image"},{property:"og:description",content:this.post.fields.description,hid:"og:description"},{property:"twitter:title",content:this.post.fields.title,hid:"twitter:title"},{property:"twitter:image",content:this.thumbnail,hid:"twitter:image"},{property:"twitter:description",content:this.post.fields.description,hid:"twitter:description"}]}},mixins:[o.a,y],components:{PostInfo:L,PostThumbnail:R,BlogHeader:S.a},computed:{renderedBody:function(){return this.post?_(this.post.fields.body):""},thumbnail:function(){return this.post&&this.post.fields.thumbnail?"https:".concat(this.post.fields.thumbnail.fields.file.url):null},url:function(){return this.post&&this.post.fields.thumbnail?"".concat(window.location.origin).concat(window.location.pathname.replace(/\/$/g,""),"/"):null}},mounted:function(){$.attach()},destroyed:function(){$.detach()}},F=(n(515),Object(I.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"blog-slug"},[n("blog-header"),n("post-thumbnail",{attrs:{thumbnail:t.thumbnail}}),n("transition",{attrs:{appear:""}},[n("article",[n("post-info",{attrs:{post:t.post}}),n("h1",[t._v(t._s(t.post.fields.title))]),n("div",{staticClass:"toc"},[n("ul",{staticClass:"toc__list"},t._l(t.toc,function(e){return n("li",{staticClass:"toc__item",class:"level"+e.level},[n("a",{staticClass:"toc__link",attrs:{href:"#"+e.anchor}},[t._v(t._s(e.escapedText))])])}),0)]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.renderedBody)}}),n("div",{staticClass:"back"},[n("nuxt-link",{staticClass:"back__link",attrs:{to:"/blog/"}},[t._v("BLOG")])],1)],1)])],1)},[],!1,null,"0ffc183c",null));e.default=F.exports}}]);