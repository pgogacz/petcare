import{_ as r,t as a,v as c,x as n,Q as l,R as _,W as i,y as d}from"./B7GWuHde.js";const b={name:"TabImages",props:{tabs:{type:Array,required:!0,default:()=>[]}},data(){return{selectedTab:0}}},u={class:"tabs"},m={class:"tab-buttons"},p=["onClick"],v={class:"tab-content"},f=["src","alt"];function h(T,g,e,k,t,y){return a(),c("div",u,[n("div",m,[(a(!0),c(l,null,_(e.tabs,(o,s)=>(a(),c("button",{key:s,onClick:x=>t.selectedTab=s,class:i({active:t.selectedTab===s})},d(o.title),11,p))),128))]),n("div",v,[n("img",{src:e.tabs[t.selectedTab].image,alt:e.tabs[t.selectedTab].title},null,8,f)])])}const C=r(b,[["render",h],["__scopeId","data-v-6115c718"]]);export{C as _};
