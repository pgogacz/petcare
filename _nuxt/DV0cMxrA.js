import{E as h,_ as p,R as f,Q as w,g as _,t as l,v as r,x as e,z as t,B as s,N as u,A as i,C as m,D as v}from"./BXh2CUXp.js";const g=h("/img/pet_care_logo_300.png"),k=h("/icons/logo-facebook2.png"),b={name:"Header",components:{RouterLink:f,FontAwesomeIcon:w},data(){return{shouldShowReservationButton:!1,shouldShowReservationButton2:!1}},mounted(){this.checkScreenWidth(),window.addEventListener("resize",this.setPlaceholderHeight),window.addEventListener("resize",this.checkScreenWidth),this.$nextTick(()=>{this.setPlaceholderHeight()}),this.$router.afterEach(()=>{this.$nextTick(()=>{this.setPlaceholderHeight()})})},beforeUnmount(){window.removeEventListener("resize",this.setPlaceholderHeight),window.removeEventListener("resize",this.checkScreenWidth)},methods:{setPlaceholderHeight(){if(this.$refs.topNavigation){var o=this.$refs.topNavigation.offsetHeight;this.$refs.placeholder.style.height=o+"px"}},checkScreenWidth(){window.innerWidth>1200?(this.shouldShowReservationButton=!0,this.shouldShowReservationButton2=!1):(this.shouldShowReservationButton=!1,this.shouldShowReservationButton2=!0)}}},c=o=>(m("data-v-8c2bba22"),o=o(),v(),o),S={class:"placeholder",id:"placeholder",ref:"placeholder"},x={id:"topNavigation",class:"fixed-top",ref:"topNavigation"},B=c(()=>e("div",{class:"logo"},[e("a",{href:"/"},[e("img",{src:g,alt:"Logo PetCare"})])],-1)),R={class:"container-fluid shortcuts"},z=c(()=>e("li",{class:"register"},[e("a",{href:"https://www.wettermin.pl/lecznice/gdynia/5480",target:"_blank"},"Rejestracja online")],-1)),y={class:"contact-info"},N={href:"tel:+48668146377",class:"contact-item"},$={class:"contact-info"},P={href:"mailto:kontakt.petcare@gmail.com",class:"contact-item"},E=c(()=>e("li",{class:"social"},[e("a",{href:"https://www.facebook.com/profile.php?id=100093657437525",rel:"nofollow"},[e("img",{src:k,width:"32",alt:"Facebook PetCare"})])],-1)),H={key:0},L={class:"button page_button_reservation",type:"button",href:"https://www.wettermin.pl/lecznice/gdynia/5480"},W=c(()=>e("span",{class:"button_reservation_text"},"Umów wizytę",-1)),C={class:"container-fluid main-menu"},I={key:0},U={class:"button page_button_reservation2",type:"button",href:"https://www.wettermin.pl/lecznice/gdynia/5480"},j=c(()=>e("span",{class:"button_reservation_text"},"Umów wizytę",-1));function V(o,A,T,F,d,D){const a=_("font-awesome-icon"),n=_("router-link");return l(),r("div",null,[e("div",S,null,512),e("section",x,[e("header",null,[B,e("nav",null,[e("div",R,[e("ul",null,[z,e("li",y,[e("a",N,[t(a,{icon:"phone",class:"phone-icon"}),s(" 668 146 377")])]),e("li",$,[e("a",P,[t(a,{icon:"envelope",class:"envelope-icon"}),s(" kontakt.petcare@gmail.com")])]),E,d.shouldShowReservationButton?(l(),r("li",H,[e("a",L,[t(a,{icon:"calendar-plus",class:"calendar-plus-icon"}),W])])):u("",!0)])]),e("div",C,[e("ul",null,[e("li",null,[t(n,{to:"/"},{default:i(()=>[t(a,{icon:"fa-solid fa-house",class:"home-icon"})]),_:1})]),e("li",null,[t(n,{to:"/o-nas"},{default:i(()=>[s("O nas")]),_:1})]),e("li",null,[t(n,{to:"/pacjenci"},{default:i(()=>[s("Pacjenci")]),_:1})]),e("li",null,[t(n,{to:"/zespol"},{default:i(()=>[s("Zespół")]),_:1})]),e("li",null,[t(n,{to:"/uslugi"},{default:i(()=>[s("Usługi")]),_:1})]),e("li",null,[t(n,{to:"/kontakt"},{default:i(()=>[s("Kontakt")]),_:1})]),d.shouldShowReservationButton2?(l(),r("li",I,[e("a",U,[t(a,{icon:"calendar-plus",class:"calendar-plus-icon"}),j])])):u("",!0)])])])])],512)])}const O=p(b,[["render",V],["__scopeId","data-v-8c2bba22"]]),Q=h("/icons/logo-facebook-white.png");export{O as _,Q as a};
