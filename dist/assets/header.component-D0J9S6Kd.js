import{r as g,R as j,j as e,I as d,ae as f,h as p,M as v,i as k,k as y}from"./mui-ChBlBfgN.js";import{d as r,e as b,u as C,b as M,g as w,p as I}from"./index-CS6IxeNG.js";const t={contaier:r.div`
    display: flex;
    align-items: center;
    gap: 20px;
    a{
      list-style: none;
      text-decoration: none;
    }
    `,header:r.header`
     display: flex;
  padding: 0px 16px;
  align-items: center;
  justify-content: space-between;
  background: var(--header-background);
  @media screen and (max-width: 760px){
    padding: 10px 16px;
  }

  h1 {
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
    `,perfil:r.div`
        display: flex;
        align-items: center;
        gap: 5px;
      `,nomeUsuario:r.div`
          display: none;
          color: var(--cor-texto-header);
          font-size: 14px;
         @media screen and (min-width: 560px){
          display: block;
          }
          
        `},E=[{name:"Minha Conta"},{name:"Sair"}],O=({handleBtn:x,subtitulo:s,ativaBtnDrower:h})=>{const o=g.useContext(b),[i,c]=j.useState(null),u=n=>{c(n.currentTarget)},m=C(),a=M(),l=n=>{switch(c(null),n){case"Minha Conta":setTimeout(()=>{m("/required/config/profile")},1e3);break;case"Sair":window.location.href="/verify",o?.logout();break}};return e.jsxs(t.header,{children:[e.jsxs(t.contaier,{children:[h&&e.jsx(d,{onClick:x,edge:"start",color:"inherit","aria-label":"menu",children:e.jsx(f,{sx:{color:"#f7f8fc",fontSize:28}})}),e.jsx(I,{to:"/",children:e.jsxs("h1",{children:["ERP / LOGISTICA ",e.jsx("small",{children:s?"- Controle "+s:null})]})})]}),w()&&e.jsxs(t.perfil,{children:[a&&a?.nome&&e.jsxs(t.nomeUsuario,{children:[e.jsx("strong",{children:"Olá"})," ",a?.nome.split(" ")[0]]}),e.jsx(d,{onClick:u,children:o?.usuario?.avatar?e.jsx(p,{style:{objectFit:"contain"},alt:a?.nome,src:o?.usuario?.avatar}):e.jsx(p,{alt:a?.nome,src:"/static/images/avatar/2.jpg"})}),e.jsx(v,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!i,onClose:l,children:E.flatMap(n=>e.jsx(k,{onClick:()=>l(n?.name),children:e.jsx(y,{sx:{textAlign:"center"},children:n?.name})},n.name))})]})]})};export{O as H};
