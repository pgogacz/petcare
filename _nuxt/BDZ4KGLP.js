import{_ as w}from"./BUSVHjP_.js";import{a as h,_ as z}from"./DrnTvdnk.js";import{S as C,a as v}from"./BCebKjJA.js";import{_ as G,r as s,v as x,i as y,o as t,c as d,a as _,b as n,w as l,F as g,j as f,k as P,A as b}from"./CqJN8QJh.js";import{u as J}from"./BQw4gVPf.js";const S={name:"Galeria2",components:{Splide:C,SplideSlide:v},setup(){const m=s({type:"fade",heightRatio:.5,pagination:!1,arrows:!1,cover:!0,autoplay:!0,interval:3e3,speed:800}),p=s({fixedWidth:100,fixedHeight:64,isNavigation:!0,gap:10,focus:"center",pagination:!0,cover:!0,arrows:!0,breakpoints:{1200:{perPage:4},800:{perPage:3},600:{fixedWidth:66,fixedHeight:40,perPage:2}}}),u=s([{src:"/img/galeria2/1.JPG",alt:"Klinika weterynaryjna PetCare"},{src:"/img/galeria2/2.JPG",alt:"Gabinet weterynaryjny PetCare"},{src:"/img/galeria2/3.JPG",alt:"Lecznica dla zwierząt PetCare"},{src:"/img/galeria2/4.JPG",alt:"Weterynarz PetCare"},{src:"/img/galeria2/5.JPG",alt:"Usługi weterynaryjne PetCare"},{src:"/img/galeria2/6.JPG",alt:"Klinika weterynaryjna PetCare"},{src:"/img/galeria2/7.JPG",alt:"Gabinet weterynaryjny PetCare"},{src:"/img/galeria2/8.JPG",alt:"Lecznica dla zwierząt PetCare"},{src:"/img/galeria2/9.JPG",alt:"Weterynarz PetCare"},{src:"/img/galeria2/10.JPG",alt:"Usługi weterynaryjne PetCare"},{src:"/img/galeria2/11.JPG",alt:"Klinika weterynaryjna PetCare"}]),e=s(null),r=s(null);return x(()=>{e.value&&r.value&&e.value.sync(r.value.splide)}),{mainOptions:m,thumbsOptions:p,slides:u,main:e,thumbs:r}}},H={class:"section_gallery"},$={class:"gallery_container"},K=["src","alt"],O=["src","alt"];function B(m,p,u,e,r,k){const o=y("SplideSlide"),c=y("Splide");return t(),d("section",H,[_("div",$,[n(c,{options:e.mainOptions,ref:"main",class:"main_slider"},{default:l(()=>[(t(!0),d(g,null,f(e.slides,(a,i)=>(t(),P(o,{key:i,class:"main_slide"},{default:l(()=>[_("img",{src:a.src,alt:a.alt,class:"main_image"},null,8,K)]),_:2},1024))),128))]),_:1},8,["options"]),n(c,{options:e.thumbsOptions,ref:"thumbs",class:"thumbs_slider"},{default:l(()=>[(t(!0),d(g,null,f(e.slides,(a,i)=>(t(),P(o,{key:i,class:"thumb_slide"},{default:l(()=>[_("img",{src:a.src,alt:a.alt,class:"thumb_image",loading:"lazy"},null,8,O)]),_:2},1024))),128))]),_:1},8,["options"])])])}const j=G(S,[["render",B],["__scopeId","data-v-0d8dfeb4"]]),M={name:"Pacjenci",components:{Header:w,UslugiHeader:h,KontaktMini:z,Galeria2:j},setup(){J({title:"Pacjenci - PetCare Gdynia",meta:[{name:"description",content:"Przychodnia weterynaryjna PetCare w Gdyni. Oferujemy szeroki zakres usług weterynaryjnych dla Twojego zwierzaka."},{name:"keywords",content:"weterynarz Gdynia, okulista Gdynia, opieka weterynaryjna, przychodnia weterynaryjna Gdynia, weterynarz Marta Kozuń, PetCare Gdynia, przychodnia weterynaryjna, opieka nad zwierzętami, leczenie zwierząt, usługi weterynaryjne"}],link:[{rel:"canonical",href:"https://www.petcare-gdynia.pl/pacjenci"}]})},mounted(){b.init()}},U={class:"home"};function W(m,p,u,e,r,k){const o=w,c=h,a=j,i=z;return t(),d("div",U,[n(o),n(c,{word:"Pacjenci","fade-in":!0}),_("main",null,[n(a)]),n(i)])}const E=G(M,[["render",W]]);export{E as default};
