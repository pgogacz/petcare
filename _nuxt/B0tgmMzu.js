import{h,R as p,v as f,j as _,o as l,c as r,a as e,b as t,d as s,m as u,w as i,p as w,e as m}from"./w1do8OfT.js";import{_ as v}from"./DlAUqK2U.js";const g=h("/img/pet_care_logo_300.png"),k=h("/icons/logo-facebook2.png"),b={name:"Header",components:{RouterLink:p,FontAwesomeIcon:f},data(){return{shouldShowReservationButton:!1,shouldShowReservationButton2:!1}},mounted(){this.checkScreenWidth(),window.addEventListener("resize",this.setPlaceholderHeight),window.addEventListener("resize",this.checkScreenWidth),this.$nextTick(()=>{this.setPlaceholderHeight()}),this.$router.afterEach(()=>{this.$nextTick(()=>{this.setPlaceholderHeight()})})},beforeUnmount(){window.removeEventListener("resize",this.setPlaceholderHeight),window.removeEventListener("resize",this.checkScreenWidth)},methods:{setPlaceholderHeight(){if(this.$refs.topNavigation){var o=this.$refs.topNavigation.offsetHeight;this.$refs.placeholder.style.height=o+"px"}},checkScreenWidth(){window.innerWidth>1200?(this.shouldShowReservationButton=!0,this.shouldShowReservationButton2=!1):(this.shouldShowReservationButton=!1,this.shouldShowReservationButton2=!0)}}},c=o=>(w("data-v-bdf1612f"),o=o(),m(),o),S={class:"placeholder",id:"placeholder",ref:"placeholder"},x={id:"topNavigation",class:"fixed-top",ref:"topNavigation"},R=c(()=>e("div",{class:"logo"},[e("a",{href:"/"},[e("img",{src:g,alt:"Logo PetCare"})])],-1)),B={class:"container-fluid shortcuts"},y=c(()=>e("li",{class:"register"},[e("a",{href:"https://www.wettermin.pl/lecznice/gdynia/5480",target:"_blank"},"Rejestracja online")],-1)),z={class:"contact-info"},$={href:"tel:+48668146377",class:"contact-item"},N={class:"contact-info"},P={href:"mailto:kontakt.petcare@gmail.com",class:"contact-item"},H=c(()=>e("li",{class:"social"},[e("a",{href:"https://www.facebook.com/profile.php?id=100093657437525",rel:"nofollow"},[e("img",{src:k,width:"32",alt:"Facebook PetCare"})])],-1)),L={key:0},W={class:"button page_button_reservation",type:"button",href:"https://www.wettermin.pl/lecznice/gdynia/5480"},E=c(()=>e("span",{class:"button_reservation_text"},"Umów wizytę",-1)),j={class:"container-fluid main-menu"},C={key:0},I={class:"button page_button_reservation2",type:"button",href:"https://www.wettermin.pl/lecznice/gdynia/5480"},U=c(()=>e("span",{class:"button_reservation_text"},"Umów wizytę",-1));function V(o,T,A,F,d,K){const a=_("font-awesome-icon"),n=_("router-link");return l(),r("div",null,[e("div",S,null,512),e("section",x,[e("header",null,[R,e("nav",null,[e("div",B,[e("ul",null,[y,e("li",z,[e("a",$,[t(a,{icon:["fas","phone"],class:"phone-icon"}),s(" 668 146 377")])]),e("li",N,[e("a",P,[t(a,{icon:["fas","envelope"],class:"envelope-icon"}),s(" kontakt.petcare@gmail.com")])]),H,d.shouldShowReservationButton?(l(),r("li",L,[e("a",W,[t(a,{icon:["fas","calendar-plus"],class:"calendar-plus-icon"}),E])])):u("",!0)])]),e("div",j,[e("ul",null,[e("li",null,[t(n,{to:"/"},{default:i(()=>[t(a,{icon:["fas","house"],class:"home-icon"})]),_:1})]),e("li",null,[t(n,{to:"/o-nas"},{default:i(()=>[s("O nas")]),_:1})]),e("li",null,[t(n,{to:"/pacjenci"},{default:i(()=>[s("Pacjenci")]),_:1})]),e("li",null,[t(n,{to:"/zespol"},{default:i(()=>[s("Zespół")]),_:1})]),e("li",null,[t(n,{to:"/uslugi"},{default:i(()=>[s("Usługi")]),_:1})]),e("li",null,[t(n,{to:"/kontakt"},{default:i(()=>[s("Kontakt")]),_:1})]),d.shouldShowReservationButton2?(l(),r("li",C,[e("a",I,[t(a,{icon:["fas","calendar-plus"],class:"calendar-plus-icon"}),U])])):u("",!0)])])])])],512)])}const q=v(b,[["render",V],["__scopeId","data-v-bdf1612f"]]),D=h("/icons/logo-facebook-white.png");export{q as _,D as a};
