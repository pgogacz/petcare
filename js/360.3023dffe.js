(self["webpackChunkprzychodnia_weterynaryjna"]=self["webpackChunkprzychodnia_weterynaryjna"]||[]).push([[360],{711:function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{},t="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=l||d||Function("return this")(),m=Object.prototype.toString,p=Math.max,b=Math.min,v=function(){return f.Date.now()};function w(e,n,o){var i,a,r,c,s,u,l=0,d=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError(t);function w(t){var n=i,o=a;return i=a=void 0,l=t,c=e.apply(o,n)}function y(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-l>=r}function k(){var e=v();if(y(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?b(t,r-(e-l)):t}(e))}function x(e){return s=void 0,m&&i?w(e):(i=a=void 0,c)}function j(){var e=v(),t=y(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return l=e,s=setTimeout(k,n),d?w(e):c}(u);if(f)return s=setTimeout(k,n),w(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=h(n)||0,g(o)&&(d=!!o.leading,r=(f="maxWait"in o)?p(h(o.maxWait)||0,n):r,m="trailing"in o?!!o.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=u=a=s=void 0},j.flush=function(){return void 0===s?c:x(v())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==i}(e))return o;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):r.test(e)?o:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),w(e,n,{leading:i,maxWait:n,trailing:a})},k="Expected a function",x=NaN,j="[object Symbol]",O=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,C=/^0o[0-7]+$/i,_=parseInt,z="object"==typeof e&&e&&e.Object===Object&&e,T="object"==typeof self&&self&&self.Object===Object&&self,A=z||T||Function("return this")(),q=Object.prototype.toString,L=Math.max,M=Math.min,S=function(){return A.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&q.call(e)==j}(e))return x;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=N.test(e);return n||C.test(e)?_(e.slice(2),n?2:8):E.test(e)?x:+e}var W=function(e,t,n){var o,i,a,r,c,s,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(k);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return d?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function w(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),l?m(e):r}(s);if(d)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(l=!!n.leading,a=(d="maxWait"in n)?L(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},w.flush=function(){return void 0===c?r:v(S())},w},I=function(){};function $(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return I()}))}function P(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var Y={isSupported:function(){return!!P()},ready:function(e,t){var n=window.document,o=new(P())($);I=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,U=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,R=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function J(){return navigator.userAgent||navigator.vendor||window.opera||""}var Q=new(function(){function e(){F(this,e)}return Z(e,[{key:"phone",value:function(){var e=J();return!(!K.test(e)&&!U.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=J();return!(!G.test(e)&&!R.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return Q.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach((function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)}))},ee=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},te=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},ne=function(e,t){return e.forEach((function(e,n){var o=te(e.node,"mirror",t.mirror),i=te(e.node,"once",t.once),a=te(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=te(e,"anchor"),a=te(e,"anchor-placement"),r=Number(te(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=ee(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=te(e,"anchor"),o=te(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),ee(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}})),e},oe=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},ie=[],ae=!1,re={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ce=function(){return document.all&&!window.atob},se=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ae=!0),ae&&(ie=ne(ie,re),X(ie),window.addEventListener("scroll",y((function(){X(ie,re.once)}),re.throttleDelay)))},ue=function(){if(ie=oe(),de(re.disable)||ce())return le();se()},le=function(){ie.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),re.initClassName&&e.node.classList.remove(re.initClassName),re.animatedClassName&&e.node.classList.remove(re.animatedClassName)}))},de=function(e){return!0===e||"mobile"===e&&Q.mobile()||"phone"===e&&Q.phone()||"tablet"===e&&Q.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return re=B(re,e),ie=oe(),re.disableMutationObserver||Y.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),re.disableMutationObserver=!0),re.disableMutationObserver||Y.ready("[data-aos]",ue),de(re.disable)||ce()?le():(document.querySelector("body").setAttribute("data-aos-easing",re.easing),document.querySelector("body").setAttribute("data-aos-duration",re.duration),document.querySelector("body").setAttribute("data-aos-delay",re.delay),-1===["DOMContentLoaded","load"].indexOf(re.startEvent)?document.addEventListener(re.startEvent,(function(){se(!0)})):window.addEventListener("load",(function(){se(!0)})),"DOMContentLoaded"===re.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&se(!0),window.addEventListener("resize",W(se,re.debounceDelay,!0)),window.addEventListener("orientationchange",W(se,re.debounceDelay,!0)),ie)},refresh:se,refreshHard:ue}}))},122:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(252);const i=e=>((0,o.dD)("data-v-515e843e"),e=e(),(0,o.Cn)(),e),a={id:"kontakt",class:"kontakt"},r={class:"kontakt-content"},c=i((()=>(0,o._)("h2",null,"Kontakt",-1))),s=i((()=>(0,o._)("p",null,"Skontaktuj się z nami:",-1))),u=i((()=>(0,o._)("address",null,[(0,o._)("p",null,"Adres: ul. Miętowa 1/6U, 81-577 Gdynia"),(0,o._)("p",null,"Telefon: (+48) 668 146 377"),(0,o._)("p",null,"Email: kontakt.petcare@gmail.com")],-1))),l=i((()=>(0,o._)("p",null,null,-1))),d=i((()=>(0,o._)("p",null,[(0,o.Uk)("ODWIEDŹ NAS NA "),(0,o._)("a",{href:"https://www.facebook.com/profile.php?id=100093657437525",rel:"nofollow"},[(0,o._)("img",{src:"icons/logo-facebook-white.png",width:"48",alt:"Facebook PetCare"})])],-1))),f={class:"polityka-cookies"};function m(e,t,n,i,m,p){const b=(0,o.up)("router-link"),v=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",a,[(0,o._)("div",r,[c,s,u,l,d,(0,o._)("div",f,[(0,o.Wm)(b,{to:"/polityka-cookies",class:"cookies-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Polityka cookies")])),_:1})])])]),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>p.scrollToTop&&p.scrollToTop(...e)),class:"back-to-top-button"},[(0,o.Wm)(v,{icon:"arrow-up"})])],64)}var p=n(201),b=n(623),v={name:"KontaktMini",components:{RouterLink:p.rH,FontAwesomeIcon:b.GN},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},w=n(744);const g=(0,w.Z)(v,[["render",m],["__scopeId","data-v-515e843e"]]);var h=g},674:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(252),i=n(577);const a={class:"responsive-title"};function r(e,t,n,r,c,s){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("h1",{class:(0,i.C_)({"fade-in":n.fadeIn})},(0,i.zw)(n.word),3)])}var c={props:{word:String,fadeIn:Boolean}},s=n(744);const u=(0,s.Z)(c,[["render",r],["__scopeId","data-v-55426efc"]]);var l=u}}]);
//# sourceMappingURL=360.3023dffe.js.map