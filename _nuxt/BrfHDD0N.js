import{F as c,R as d,S as p,g as m,t as k,v as f,x as e,z as h,K as w,C as u,D as b,B as _}from"./CLfcplVQ.js";import{a as v}from"./Ccn_ifFJ.js";import{_ as g}from"./DlAUqK2U.js";const y=c("/img/galeria/5/12.JPG"),z={name:"Kontakt",components:{RouterLink:d,FontAwesomeIcon:p},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},loadFacebookSDK(){return new Promise(a=>{window.FB?a(window.FB):(window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v20.0"}),a(FB)},function(o,n,l){var t,s=o.getElementsByTagName(n)[0];o.getElementById(l)||(t=o.createElement(n),t.id=l,t.src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v20.0",s.parentNode.insertBefore(t,s))}(document,"script","facebook-jssdk"))})}},mounted(){window.onload=()=>{this.loadFacebookSDK().then(a=>{a.XFBML.parse()})}}},B=a=>(u("data-v-6bcb2352"),a=a(),b(),a),x=B(()=>e("section",{class:"kontakt"},[e("div",{class:"kontaktHeader"},[e("div",{class:"kontakt-header"},[e("h2",null,"Skontaktuj się z nami"),e("h3",null,"PetCare Przychodnia Weterynaryjna")]),e("div",{class:"kontakt-content"},[e("div",{class:"kontakt-card"},[e("address",null,[e("p",null,"ul. Miętowa 1/6U"),e("p",null,"81-577 Gdynia")])]),e("div",{class:"kontakt-card"},[e("div",{class:"kontakt-info"},[e("p",{class:"phone"},[e("a",{href:"tel:+48668146377"},"kom. (+48) 668 146 377")]),e("p",{class:"email"},[e("a",{href:"mailto:kontakt.petcare@gmail.com"},"kontakt.petcare@gmail.com")])])])]),e("div",{class:"godziny kontakt-card"},[e("h3",null,"GODZINY OTWARCIA"),e("ul",null,[e("li",null,"poniedziałek - piątek: 10-18"),e("li",null,"sobota: 9-12"),e("li",null,"niedziela: nieczynne")])]),e("div",{class:"kontakt-info kontakt-card"},[e("p",null,[_("ODWIEDŹ NAS NA "),e("a",{href:"https://www.facebook.com/profile.php?id=100093657437525",rel:"nofollow"},[e("img",{src:v,width:"48",alt:"Facebook PetCare",loading:"lazy"})])])]),e("div",{class:"polityka-cookies"})]),e("div",{class:"kontaktMapa"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1159.1765701722845!2d18.4626191!3d54.4743509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda17208fa49a5%3A0x6de4b7cd8c5ad5fe!2sPetCare%20Przychodnia%20Weterynaryjna%20Marta%20Kozu%C5%84!5e0!3m2!1spl!2spl!4v1718211572130!5m2!1spl!2spl",width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),e("div",{class:"kontaktZdjecie"},[e("div",{class:"kafelek"},[e("img",{src:y,alt:"Zdjęcie z zewnątrz przychodni",loading:"lazy"})])]),e("div",{class:"fb-root"},[e("div",{class:"fb-page","data-href":"https://www.facebook.com/profile.php?id=100093657437525","data-tabs":"timeline","data-width":"500","data-height":"","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},[e("blockquote",{cite:"https://www.facebook.com/profile.php?id=100093657437525",class:"fb-xfbml-parse-ignore"},[e("a",{href:"https://www.facebook.com/profile.php?id=100093657437525"},"PetCare Przychodnia Weterynaryjna Marta Kozuń")])])])],-1));function F(a,o,n,l,t,s){const r=m("font-awesome-icon");return k(),f(w,null,[x,e("button",{onClick:o[0]||(o[0]=(...i)=>s.scrollToTop&&s.scrollToTop(...i)),class:"back-to-top-button"},[h(r,{icon:["fas","arrow-up"]})])],64)}const T=g(z,[["render",F],["__scopeId","data-v-6bcb2352"]]);export{T as _};
