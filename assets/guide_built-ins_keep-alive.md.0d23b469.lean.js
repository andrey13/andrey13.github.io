import{r as s,o as e,c as a,e as n,t as l,F as o,q as t,v as p,E as c,G as i,d as r,i as y,B as d,K as D,j as F,a as u}from"./chunks/framework.302ed498.js";const h=n("p",null,"Current component: A",-1),m={style:{"margin-right":"20px"}},A={__name:"CompA",setup(t){const p=s(0);return(s,t)=>(e(),a(o,null,[h,n("span",m,"count: "+l(p.value),1),n("button",{onClick:t[0]||(t[0]=s=>p.value++)},"+")],64))}},v=n("p",null,"Current component: B",-1),C={style:{"margin-right":"20px"}},g={__name:"CompB",setup(c){const i=s("");return(s,c)=>(e(),a(o,null,[v,n("span",C,"Message is: "+l(i.value),1),t(n("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>i.value=s)},null,512),[[p,i.value]])],64))}},f={class:"demo"},b={__name:"SwitchComponent",props:{useKeepAlive:Boolean},setup(s){const l=c(A);return(o,p)=>(e(),a("div",f,[n("label",null,[t(n("input",{type:"radio","onUpdate:modelValue":p[0]||(p[0]=s=>l.value=s),value:A},null,512),[[i,l.value]]),r(" A")]),n("label",null,[t(n("input",{type:"radio","onUpdate:modelValue":p[1]||(p[1]=s=>l.value=s),value:g},null,512),[[i,l.value]]),r(" B")]),s.useKeepAlive?(e(),y(D,{key:0},[(e(),y(d(l.value)))],1024)):(e(),y(d(l.value),{key:1}))]))}},w=u("",7),k=u("",4),E=u("",20),x=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Include / Exclude","slug":"include-exclude","link":"#include-exclude","children":[]},{"level":2,"title":"Max Cached Instances","slug":"max-cached-instances","link":"#max-cached-instances","children":[]},{"level":2,"title":"Lifecycle of Cached Instance","slug":"lifecycle-of-cached-instance","link":"#lifecycle-of-cached-instance","children":[]}],"relativePath":"guide/built-ins/keep-alive.md","filePath":"guide/built-ins/keep-alive.md"}'),B={name:"guide/built-ins/keep-alive.md"},_=Object.assign(B,{setup:s=>(s,n)=>(e(),a("div",null,[w,F(b),k,F(b,{"use-KeepAlive":""}),E]))});export{x as __pageData,_ as default};
