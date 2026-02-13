import{r as g,R as j,j as e,I as d,ap as f,h as p,M as v,k,i as y}from"./mui-_wqMIBiI.js";import{d as r,e as b,u as C,b as M,h as w,q as I}from"./index-BYSqOyoE.js";const t={contaier:r.div`
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
          
        `},E=[{name:"Minha Conta"},{name:"Sair"}],O=({handleBtn:x,subtitulo:s,ativaBtnDrower:h})=>{const o=g.useContext(b),[i,l]=j.useState(null),u=a=>{l(a.currentTarget)},m=C(),n=M(),c=a=>{switch(l(null),a){case"Minha Conta":setTimeout(()=>{m("/required/profile")},1e3);break;case"Sair":window.location.href="/verify",o?.logout();break}};return e.jsxs(t.header,{children:[e.jsxs(t.contaier,{children:[h&&e.jsx(d,{onClick:x,edge:"start",color:"inherit","aria-label":"menu",children:e.jsx(f,{sx:{color:"#f7f8fc",fontSize:28}})}),e.jsx(I,{to:"/",children:e.jsxs("h1",{children:["ERP / LOGISTICA ",e.jsx("small",{children:s?"- Controle "+s:null})]})})]}),w()&&e.jsxs(t.perfil,{children:[n&&n?.nome&&e.jsxs(t.nomeUsuario,{children:[e.jsx("strong",{children:"Olá"})," ",n?.nome.split(" ")[0]]}),e.jsx(d,{onClick:u,children:o?.usuario?.avatar?e.jsx(p,{style:{objectFit:"contain"},alt:n?.nome,src:o?.usuario?.avatar}):e.jsx(p,{alt:n?.nome,src:"/static/images/avatar/2.jpg"})}),e.jsx(v,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!i,onClose:c,children:E.flatMap(a=>e.jsx(k,{onClick:()=>c(a?.name),children:e.jsx(y,{sx:{textAlign:"center"},children:a?.name})},a.name))})]})]})};export{O as H};
