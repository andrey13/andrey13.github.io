import{r as a,g as e,b as s,y as t,o as n,c as r,u as o,F as i,l as c,e as l,k as p,A as u,_ as m}from"./framework.302ed498.js";const g=a(),d=a(!1),f="https://sponsors.vuejs.org",v=async()=>{d.value||(d.value=!0,g.value=await(await fetch(`${f}/data.json`)).json())},k=["href"],y={key:0},h=["srcset"],$=["src","alt"],_=["src","alt"],b=m(e({__name:"SponsorsGroup",props:{tier:{},placement:{default:"aside"}},setup(e){const m=e,d=a(),b=a(!1);s((async()=>{const a=new IntersectionObserver((e=>{e[0].isIntersecting&&(b.value=!0,a.disconnect())}),{rootMargin:"0px 0px 300px 0px"});a.observe(d.value),t((()=>a.disconnect())),await v()}));const w={aside:"4QUPDDRU",landing:"58FLAR2Z",page:"ZXLO3IUT"};function x(a){fathom.trackGoal(a?"Y2BVYNT2":w[m.placement],0)}return(a,e)=>(n(),r("div",{ref_key:"container",ref:d,class:u(["sponsor-container",[a.tier.startsWith("plat")?"platinum":a.tier,a.placement]])},[o(g)&&b.value?(n(!0),r(i,{key:0},c(o(g)[a.tier],(({url:a,img:s,name:t})=>(n(),r("a",{class:"sponsor-item",href:a,target:"_blank",rel:"sponsored noopener",onClick:e[0]||(e[0]=a=>x())},[s.endsWith("png")?(n(),r("picture",y,[l("source",{type:"image/avif",srcset:`${o(f)}/images/${s.replace(/\.png$/,".avif")}`},null,8,h),l("img",{src:`${o(f)}/images/${s}`,alt:t},null,8,$)])):(n(),r("img",{key:1,src:`${o(f)}/images/${s}`,alt:t},null,8,_))],8,k)))),256)):p("",!0),"page"!==a.placement&&"special"!==a.tier?(n(),r("a",{key:1,href:"/sponsor/",class:"sponsor-item action",onClick:e[1]||(e[1]=a=>x(!0))},"Your logo")):p("",!0)],2))}}),[["__scopeId","data-v-a913a868"]]);export{b as S,f as b,g as d,v as l};
