(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[165],{8828:function(e){"use strict";e.exports=Object.assign},3812:function(e,t,n){"use strict";var r=n(7437);t.A=function(e){let{customStyle:t}=e;return(0,r.Y)("svg",{id:"icon",viewBox:"0 0 32 32",className:t},(0,r.Y)("path",{d:"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"}),(0,r.Y)("polygon",{points:"20.59 22 15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22"}),(0,r.Y)("rect",{"data-name":"<Transparent Rectangle>",height:"32",id:"_Transparent_Rectangle_",width:"32",fill:"none"}))}},9558:function(e,t,n){"use strict";var r=n(7437);t.A=function(e){let{customStyle:t}=e;return(0,r.Y)("svg",{viewBox:"0 0 256 256",className:t},(0,r.Y)("path",{d:"M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),(0,r.Y)("circle",{cx:"84",cy:"84",r:"10"}))}},1858:function(e,t,n){"use strict";n.d(t,{A:function(){return we}});var r,o,i,a,c=n(644),u=n(3319),s=n(9123),l=n(4802),f=n(5556),p=n.n(f),d=n(2098),y=n.n(d),h=n(115),m=n.n(h),b=n(6540),g=n(8828),T=n.n(g),v="bodyAttributes",w="htmlAttributes",A="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(O).map((function(e){return O[e]})),"charset"),S="cssText",E="href",j="http-equiv",k="innerHTML",x="itemprop",P="name",Y="property",L="rel",I="src",M="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",R="defer",B="encodeSpecialCharacters",q="onChangeClientState",D="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[O.NOSCRIPT,O.SCRIPT,O.STYLE],U="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=ee(e,O.TITLE),n=ee(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,_);return t||r||void 0},G=function(e){return ee(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===L&&"canonical"===e[n].toLowerCase()||u===L&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==k&&c!==S&&c!==x||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=T()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(O.BODY,r),le(O.HTML,o),se(f,p);var d={baseTag:fe(O.BASE,n),linkTags:fe(O.LINK,i),metaTags:fe(O.META,a),noscriptTags:fe(O.NOSCRIPT,c),scriptTags:fe(O.SCRIPT,s),styleTags:fe(O.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),le(O.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(U):n.getAttribute(U)!==a.join(",")&&n.setAttribute(U,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"["+U+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=de(n,r),[b.createElement(O.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+" "+U+'="true" '+o+">"+Z(i,r)+"</"+e+">":"<"+e+" "+U+'="true">'+Z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case w:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===k||n===S){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),b.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===S)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+" "+U+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ye(O.BASE,t,r),bodyAttributes:ye(v,n,r),htmlAttributes:ye(w,o,r),link:ye(O.LINK,i,r),meta:ye(O.META,a,r),noscript:ye(O.NOSCRIPT,c,r),script:ye(O.SCRIPT,u,r),style:ye(O.STYLE,s,r),title:ye(O.TITLE,{title:f,titleAttributes:p},r)}},me=y()((function(e){return{baseTag:Q([E,M],e),bodyAttributes:J(v,e),defer:ee(e,R),encode:ee(e,B),htmlAttributes:J(w,e),linkTags:X(O.LINK,[L,E],e),metaTags:X(O.META,[P,C,j,Y,x],e),noscriptTags:X(O.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:X(O.SCRIPT,[I,k],e),styleTags:X(O.STYLE,[S],e),title:$(e),titleAttributes:J(A,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),he)((function(){return null})),be=(o=me,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case O.TITLE:return W({},o,((t={})[r.type]=a,t.titleAttributes=W({},i),t));case O.BODY:return W({},o,{bodyAttributes:W({},i)});case O.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return b.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(V(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),b.createElement(o,r)},K(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(b.Component),i.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var ge=n.p+"static/favicon-b375248ed1b232a0387b23e08b8df8df.ico",Te=n(7437);const ve=(0,c.A)("div",{target:"euc0yeb0"})({name:"fop3g9",styles:"padding-top:200px;min-height:calc(100vh - 185px)"});var we=function(e){let{title:t,description:n,url:r,children:o}=e;return(0,Te.Y)("main",null,(0,Te.Y)(be,null,(0,Te.Y)("html",{lang:"ko"}),(0,Te.Y)("title",null,t),(0,Te.Y)("meta",{name:"description",content:n}),(0,Te.Y)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,Te.Y)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),(0,Te.Y)("meta",{property:"og:type",content:"website"}),(0,Te.Y)("meta",{property:"og:title",content:t}),(0,Te.Y)("meta",{property:"og:description",content:n}),(0,Te.Y)("meta",{property:"og:url",content:r}),(0,Te.Y)("meta",{property:"og:site_name",content:t}),(0,Te.Y)("meta",{name:"twitter:card",content:"summary"}),(0,Te.Y)("meta",{name:"twitter:title",content:t}),(0,Te.Y)("meta",{name:"twitter:description",content:n}),(0,Te.Y)("meta",{name:"twitter:site",content:"@soheetech"}),(0,Te.Y)("meta",{name:"twitter:creator",content:"@soheetech"}),(0,Te.Y)("link",{rel:"icon",type:"image/x-icon",href:ge})),(0,Te.Y)(u.A,null),(0,Te.Y)(s.A,null),(0,Te.Y)(ve,{className:"contents-wrapper"},o),(0,Te.Y)(l.A,null))}},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=d0dcf9c1039535d44ee74defc829dfbf62dac3c5-ae1deea8f4f827ff12e7.js.map