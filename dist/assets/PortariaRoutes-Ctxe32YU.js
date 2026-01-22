const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/registroPortariaAntigo-DAUHH1Br.js","assets/mui-ChBlBfgN.js","assets/react-OvXVS5lI.js","assets/index-CS6IxeNG.js","assets/index-DsXzPhJZ.css","assets/menuConfig-Fp3u0O0b.js","assets/filiasAPi-C54P03xb.js","assets/HeaderSecundario-qKYP8FlG.js","assets/NotFund-aO3XNhde.js","assets/visualizar_registro-BPzL5d8B.js"])))=>i.map(i=>d[i]);
import{c as at,d as a,O as Ie,a as M,u as re,s as ot,L as oe,b as B,e as Ee,f as st,g as nt,h as qe,i as He,n as xe,A as ze,N as ne,R as it,j as P,_ as Be}from"./index-CS6IxeNG.js";import{j as e,d as ie,e as Z,r as i,A as rt,W as lt,f as ct,b as dt,C as pt,I as E,g as Re,T as xt,h as K,M as ht,i as ye,k as ut,F as mt,l as ft,m as gt,n as ke,a as jt,o as Je,p as Ke,D as he,q as ue,s as bt,L as vt,t as wt}from"./mui-ChBlBfgN.js";import{H as Ct}from"./HeaderSecundario-qKYP8FlG.js";import{M as Te,f as Qe}from"./filiasAPi-C54P03xb.js";import{l as St,P as De,a as Le,b as me,B as fe,D as yt,M as At,c as V}from"./menuConfig-Fp3u0O0b.js";import It from"./NotFund-aO3XNhde.js";const Et=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Rt=at("chevron-right",Et),kt={container:a.div`
    /* background-color: #f2f2f2; */
    min-height: 100vh;
  `},Tt=()=>e.jsxs(kt.container,{children:[e.jsx(Ct,{titulo:"Portaria - Controle de Acesso",ativo:!0}),e.jsx(Ie,{})]}),ce={container:a.div`
    background-color: #f2f2f2;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `,container_int:a.div`
    padding: 40px 5px;
    margin-top: 2em;

    min-height: 100vh;

  `,div:a.div`
    position: fixed;
    padding: 30px 10px;
    background-color: #f2f2f2;
    height: 40px;
    margin-top: 10px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

  width: 100%;
  `,busca:a.input`
      width:100%;
      border-radius:5px;
      padding:10px ;
      border: 1px solid #b6aeaeff;
      outline: none;
      @media screen and (min-width: 760px){
         width:60%;
      }
    `},se="http://192.168.88.239:8083",Dt=async t=>(await M.get(se+t)).data,Lt=async(t,r,s,n,c)=>{const l=new URLSearchParams;return l.append("filial",r),l.append("busca",s||""),l.append("status",c||""),l.append("size",n||""),(await M.get(se+t,{params:Object.fromEntries(l)})).data},Pt=async(t,r,s)=>{const n=new FormData;return n.append("file",s),n.append("data",JSON.stringify(r)),(await M.put(se+t,n,{headers:{"Content-Type":"multipart/form-data"}})).data},Ot=async(t,r,s)=>{const n=new FormData;return n.append("file",s),n.append("data",JSON.stringify(r)),(await M.put(se+t,n,{headers:{"Content-Type":"multipart/form-data"}})).data},Ft=async(t,r,s)=>{const n=new URLSearchParams;return n.append("usuario_id",r),n.append("busca",s),(await M.get(se+t,{params:Object.fromEntries(n)})).data},_t=async t=>(await M.get(se+t)).data,ge={consuta_portaria:async t=>await Dt(`/portaria/v1/solicitacao/visualizar/registro?registroId=${t}`),Solicitacoes:async(t,r,s,n)=>(console.log("busca "+r),await Lt("/portaria/v1/lista/entradas/pendentes",t,r,s,n)),alterarEntrada:async(t,r)=>await Pt("/portaria/v1/aguardando_Entrada",t,r),alterarSaida:async(t,r)=>await Ot("/portaria/v1/aguardando_saida",t,r),solitacaoAutorizador:async(t,r)=>await Ft("/portaria/v1/solicitacao/autorizador",t,r),blocos:async()=>await _t("/bloco")},S={container:a.div`
    background-color: #f2f2f2;
    padding: 20px 0;
    min-height: 100vh;
  `,area_pedidos:a.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    @media screen and (max-width: 700px) {
     max-width: 700px; 
         padding: 5px;

    }
  `,titulo:a.h1`
    font-size: 22px;
    font-weight: bold;
    font-family:sans-serif;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,pedidos:a.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,cardItem:a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,card_item_header:a.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,card_item_center:a.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 20px;
    @media screen and (max-width: 420px) {
      justify-content: space-between;

    }
  `,numeroDoPedido:a.h4`
    font-size: 14px;
    color: #756f6f;
  `,data:a.small`
    font-size: 9px;
    font-family: "inter";
    color: #756f6f;
  `,btnAguadandoPagamento:a.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,AreaStatus:a.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* @media screen and (max-width:560px){
          flex-direction: row-reverse;

    } */
  `,Image:a.img`
     width: 80px;
  height: 80px;
  border-radius: 10%;
  /* object-fit: cover;
  border: 2px solid #ddd; */
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 16px;
      object-position: center bottom top;


    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,dataPedido:a.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,Areaitem:a.div`
  display: flex;
  flex: 1;
  gap: 1px;
  flex-direction: column;
`,inforLabel:a.div`
  display: flex;
  align-items: center;
  text-align:center;
  word-wrap: break-word;
  gap:2px;

`,loading:a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  
`,buttonNext:a.button`
 color: blue;
 background-color:blue;
 cursor: pointer;
 border: 0;
  background: transparent;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  font-size: 16px;
 &:hover{
  color: #8484f5;
  padding: 2px;

 }
 &:active{
    transform: scale(0.97);
    color: #5555ff;       /* muda a cor quando clicado */
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); /* efeito de pressionado */

 }

`,Span:a.span`
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    color:#374151;
    @media screen and (max-width: 560px){
      font-size: 12px;
              letter-spacing: 0.2;

      
    }
  `,Infor:a.small`
    font-size: 13px;
    color: #494545;
        letter-spacing: 0.5;
        margin-top: 2px;
    @media screen and (max-width: 560px){
      font-size: 11px;
              letter-spacing: 0.2;

      
    }

  `,semItens:a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #555;
    height: 60vh;
    font-size: 16px;
    gap: 10px;
    opacity: 0.8;
  `,iconSemItens:a(Te)`
    font-size: 60px;
    color: #999;
  `,btn:a.div`
  display: flex;
  justify-content:flex-end;
   right: 1;
   @media screen and (max-width:560px){
    flex: 0;
    padding: 5px;
    
   }
  `,sentinela:a.div`
    width: 100%;
    height: 100px; /* Altura generosa para garantir detecção */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: transparent;
  `,loadingFooter:a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  `};function zt(){return e.jsxs(ie,{sx:{mb:4},children:[e.jsx(Z,{variant:"text",sx:{width:200,height:20,mb:1,ml:1}}),e.jsxs(ie,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,background:"#fff",borderRadius:"12px",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:[e.jsx(Z,{variant:"rectangular",width:80,height:80,sx:{borderRadius:"6px"}}),e.jsxs(ie,{sx:{flex:1,ml:2},children:[e.jsx(Z,{variant:"text",width:160,height:22}),e.jsx(Z,{variant:"text",width:260,height:22}),e.jsx(Z,{variant:"text",width:200,height:22}),e.jsx(Z,{variant:"text",width:180,height:22})]}),e.jsx(Z,{variant:"rounded",width:160,height:32})]})]})}const We=({lista:t,hendleDetalhesPedidos:r,hendleBusca:s,visibleCount:n,loading:c})=>{const l=i.useRef(null);i.useEffect(()=>{const x={root:null,rootMargin:"0px 0px 100px 0px",threshold:.1},g=new IntersectionObserver(u=>{const[A]=u;A.isIntersecting&&!c&&t.length<n&&s()},x);return l.current&&g.observe(l.current),()=>{l.current&&g.unobserve(l.current)}},[c,t.length,n,s]);const f=x=>({AGUARDANDO_ENTRADA:"info",AGUARDANDO_SAIDA:"warning",SAIDA_LIBERADA:"success"})[x]||"error",y=x=>new Date(x).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs(S.area_pedidos,{children:[e.jsx(S.pedidos,{children:t.length===0&&c?Array.from({length:4}).map((x,g)=>e.jsx(zt,{},g)):t.map(x=>e.jsxs("div",{children:[e.jsx(S.dataPedido,{children:y(x?.dataCriacao)}),e.jsxs(S.cardItem,{children:[x?.prioridadeAtrasoAtivo&&e.jsx(rt,{icon:e.jsx(lt,{sx:{fontSize:"1rem"}}),severity:"warning",sx:{borderRadius:"8px",mb:1,py:0,fontSize:"0.7rem",border:"1px solid #ffe58f"},children:x.prioridadeAviso||x.prioridadeAtraso}),e.jsxs(S.card_item_header,{children:[e.jsxs(S.numeroDoPedido,{children:[e.jsx("strong",{children:"N: "}),x?.protocolo]}),e.jsxs(S.AreaStatus,{children:[e.jsx(ct,{sx:{height:22,fontSize:"10px",fontWeight:700,textTransform:"uppercase",borderRadius:"6px"},color:f(x?.status),label:x?.status.replace("_"," "),variant:"outlined"}),x?.entrada?.dataEntrada&&e.jsxs(S.data,{children:[e.jsx("strong",{children:"Entrada: "}),y(x?.entrada?.dataEntrada)]})]})]}),e.jsxs(S.card_item_center,{children:[e.jsx(S.Image,{src:x?.visitante?.imagem}),e.jsxs(S.Areaitem,{children:[e.jsxs(S.inforLabel,{children:[e.jsx(S.Span,{children:"Placa: "}),e.jsx(S.Infor,{children:x?.placaVeiculo})]}),e.jsxs(S.inforLabel,{children:[e.jsx(S.Span,{children:"Nome: "}),e.jsx(S.Infor,{children:x?.nomeCompleto?.trim().toUpperCase().split(" ")[0]})]}),e.jsxs(S.inforLabel,{children:[e.jsx(S.Span,{children:"Tipo de Pessoa: "}),e.jsx(S.Infor,{children:x.tipPessoa.toUpperCase()})]}),e.jsxs(S.inforLabel,{children:[e.jsx(S.Span,{children:"Acesso: "}),e.jsx(S.Infor,{children:x?.visitante?.recorrencia?.nome})]})]}),e.jsx(dt,{onClick:()=>r(x?.id),variant:"outlined",sx:{minWidth:"40px",width:"40px",height:"40px",borderRadius:"10px",borderColor:"#e2e8f0",color:"#64748b",backgroundColor:"#fff","&:hover":{borderColor:"#94a3b8",backgroundColor:"#f8fafc",color:"#0f172a"},"& .lucide":{width:18}},children:e.jsx(Rt,{})})]})]})]},x.id))}),e.jsx(S.sentinela,{ref:l,children:c&&t.length>0&&e.jsxs(S.loadingFooter,{children:[e.jsx(pt,{size:20,thickness:5,sx:{color:"#9ca3af"}}),e.jsx("span",{children:"Carregando mais registros..."})]})})]})},Bt=()=>{const t=ot(),[r,s]=i.useState([]),n=re(),[c,l]=i.useState(!1),[f,y]=i.useState(""),x=async()=>{if(t!=null){const u=await ge.solitacaoAutorizador(t,f);u?.content!=null&&(s(u?.content),l(!1))}};i.useEffect(()=>{f.trim()===""&&x()},[t,f]);const g=u=>{l(!0),setTimeout(()=>{n(`/portaria/controle/detalhes-registro?order=${u}`,{replace:!1,state:{refresh:Date.now()}}),l(!1)},1e3)};return e.jsxs(ce.container,{children:[e.jsxs(ce.div,{children:[e.jsx(ce.busca,{placeholder:"Buscar por placa, visitante ou protocolo...",type:"search",onChange:u=>y(u.target.value)}),e.jsx(E,{onClick:x,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Re,{})})]}),e.jsxs(ce.container_int,{children:[e.jsx(We,{lista:r,hendleDetalhesPedidos:g,hendleBusca:function(){throw new Error("Function not implemented.")},visibleCount:0,loading:c}),c&&e.jsx(oe,{})]})]})},Nt={container:a.div`
    `},Ut=[{name:"Minha Conta"},{name:"Portaria Pendentes",permissions:["REGISTRAR_SAIDA"]},{name:"Meus Registros",permissions:["VISUALIZAR_REGISTRO"]},{name:"Registros Gerais",permissions:["GERENCIAR_REGISTROS"]},{name:"Controle De Registros",permissions:["GERENCIAR_REGISTROS"]},{name:"Criar Registro",permissions:["CRIAR_REGISTRO"]},{name:"Sair"}],Mt=()=>{const t=B(),r=i.useContext(Ee),[s,n]=i.useState(!1),[c,l]=i.useState(null),[f,y]=i.useState([]),[x,g]=i.useState([]),u=re(),A=w=>{l(w.currentTarget)};function O(){st.logout()}const R=w=>{switch(l(null),w){case"Meus Registros":n(!0),u("/portaria/controle/meus-registros",{replace:!1}),setTimeout(()=>n(!1),800);break;case"Minha Conta":n(!0),setTimeout(()=>{u("/required/config/profile"),n(!1)},1e3);break;case"Registros Gerais":n(!0),setTimeout(()=>{u("/portaria/active/gerais"),n(!1)},1e3);break;case"Portaria Pendentes":n(!0),setTimeout(()=>{u("/portaria/active/pendentes"),n(!1)},1e3);break;case"Controle De Registros":n(!0),setTimeout(()=>{u("/portaria/configuracao"),n(!1)},1e3);break;case"Criar Registro":n(!0),setTimeout(()=>{u("/portaria/controle/registro-portaria-cd"),n(!1)},1e3);break;case"Sair":O(),window.location.href="/verify",r?.logout();break}};return i.useEffect(()=>{if(!localStorage.getItem("acessToken"))return;const k=B()?.permissoes||[];y(k)},[r?.user]),i.useEffect(()=>{if(!f.length)return;const w=Ut.filter(D=>!D.permissions||D.permissions.some(k=>f.includes(k))||D.name==="Sair  ");g(w)},[f]),e.jsxs(Nt.container,{children:[e.jsxs(ie,{sx:{flexGrow:0},children:[e.jsx(xt,{title:"Open settings",children:e.jsx(E,{onClick:A,sx:{p:0},children:r?.usuario?.avatar?e.jsx(K,{style:{objectFit:"contain"},alt:t?.nome,src:r?.usuario?.avatar}):e.jsx(K,{alt:t?.nome,src:"/static/images/avatar/2.jpg"})})}),e.jsx(ht,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!c,onClose:R,children:x.flatMap(w=>e.jsx(ye,{onClick:()=>R(w?.name),children:e.jsx(ut,{sx:{textAlign:"center"},children:w?.name})},w.name))})]}),s&&e.jsx(oe,{})]})},Y={areaHeader:a.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
  `,container:a.header`
    /* Sombras mais suaves para não parecer datado */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    padding: 12px 15px;
    background: var(--header-background);
    color: white;
    min-height: 60px;

    @media screen and (min-width: 700px) {
      padding: 10px 40px;
    }
  `,areaLogo:a.div`
    display: flex;
    gap: 15px;
    align-items: center;
    
    span {
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.1); /* Badge sutil para a Filial */
      border-radius: 6px;
      white-space: nowrap;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  `,logo:a.img`
    object-fit: contain;
    height: 38px; /* Aumentado levemente para melhor legibilidade */
    cursor: pointer;
    transition: transform 0.2s ease;
    display: none;

    &:hover {
      transform: scale(1.02);
    }

    @media screen and (min-width: 560px) {
      display: block;
    }
  `,busca:a.input`
    flex: 1;
    max-width: 500px;
    height: 38px;
    border-radius: 8px;
    padding: 0 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    outline: none;
    font-size: 14px;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      background: white;
      color: #333;
      border-color: #fff;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
    }

    @media screen and (max-width: 560px) {
      width: 100%;
      height: 35px;
    }
  `,perfil:a.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.1); /* Divisor sutil */
  `,nomeUsuario:a.div`
    display: none;
    color: var(--cor-texto-header);
    font-size: 14px;
    text-align: right;
    line-height: 1.2;

    strong {
      display: block;
      font-size: 11px;
      opacity: 0.7;
      letter-spacing: 0.5px;
    }

    @media screen and (min-width: 700px) {
      display: block;
    }
  `,categoriasItens:a.div`
    padding: 8px 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--cor-principal);
    border-top: 1px solid rgba(0,0,0,0.05);
  `},Vt=({ativoBusca:t,filial:r})=>{const{setBusca:s}=i.useContext(Ee),n=B(),c=re(),l=()=>{c("/")};return e.jsx(e.Fragment,{children:e.jsx(Y.areaHeader,{children:e.jsxs(Y.container,{children:[e.jsxs(Y.areaLogo,{children:[e.jsx(Y.logo,{src:St,onClick:l}),e.jsxs("span",{onClick:l,children:["CD - ",r]})]}),t&&e.jsx(Y.busca,{placeholder:"Buscar por placa, visitante ou protocolo...",type:"search",onChange:f=>s(f.target.value)}),nt()&&e.jsxs(Y.perfil,{children:[n&&n?.nome&&e.jsxs(Y.nomeUsuario,{children:[e.jsx("strong",{children:"Olá"})," ",n?.nome.split(" ")[0]]}),e.jsx(Mt,{})]})]})})})},we={container:a.main`
    position: relative;
    `,Container_int:a.main`
      @media screen and (max-width: 560px) {
        padding: 0;
      }
     `,PlaceholderContainer:a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 10em;
  text-align: center;
  color: #333;
  /* padding: 20px; */
  border-radius: 12px;

  .emoji {
    font-size: 64px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 8px;
    color: #1a237e;
  }

  .subtitle {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 12px;
    color: #3949ab;
  }

  .description {
    font-size: 16px;
    max-width: 500px;
    color: #555;
  }
`},Ne=()=>{const t=B(),r=location.pathname==="/portaria/active/pendentes",s=qe();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(we.container,{children:[e.jsx(Vt,{filial:t?.filial,ativoBusca:s&&r}),e.jsx(we.Container_int,{children:s?e.jsx(Ie,{}):e.jsxs(we.PlaceholderContainer,{children:[e.jsx("div",{className:"emoji",children:"🛡️"}),e.jsx("h2",{className:"title",children:"Bem-vindo à Portaria!"}),e.jsx("p",{className:"description",children:"Use o menu à esquerda para navegar entre as opções, visualizar registros, e gerenciar usuários."})]})})]})},j={container:a.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,Chip:a.div`
    padding: 5px;
    border-radius: 5px;
    color:${({color:t})=>t||"blue"} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:a.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:a.div`
    display: flex;
    position: relative;
    align-items: center;
    gap: 20px;
     margin: 5px 10px;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:t=>t!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:t})=>t?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:a.option``,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:a.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:a.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;  
    
    th, td {
      padding: 10px 13px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.7rem;
      margin: 0;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
      color: #333;
    }

    tr{
      width: 100%;
    }
    tr:hover {
      background-color: #f1f5ff;
      transition: background-color 0.2s ease-in-out;
      
    }

    tr:last-child td {
      border-bottom: none;
    }
    td{
            cursor: pointer;

    }
  `,trBTN:a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:a.div`
    padding: 10px;
    width: 100%;
    position: absolute;
    
  `,imagemArea:a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  `,tituloLabel:a.label`
  font-size: 16px;

  `,imgemVisitante:a.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `,imgem:a.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
  `,divArea:a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  `,btnDownload:a.div`
   position: absolute;
   align-items: center;
   padding: 10px;
   right: 0;
   top: 20px;
    
  `,visitante:a.div`
    display: flex;
    align-items: center;
    gap: 10px;
     margin: 5px 10px;
    `,semItens:a.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,iconSemItens:a(Te)`
      font-size: 60px;
      color: #999;
    `},Ze="http://192.168.88.239:8083",$t=async(t,r,s,n,c)=>{const l={sort:"id,desc"};return r&&(l.filial=r),n!=null&&(l.ativo=n),s&&(l.busca=s),c!=null&&(l.page=c),(await M.get(Ze+t,{params:l})).data},Gt=async(t,r,s)=>{const n=new FormData;return s!=null&&n.append("file",s),n.append("data",JSON.stringify(r)),(await M.post(Ze+t,n,{headers:{"Content-Type":"multipart/form-data"}})).data},Pe={findAll:async(t,r,s,n)=>await $t("/portaria/v1/findAll",t,r,s,n),RegistroFactory:async(t,r)=>await Gt("/portaria/v1/factory",t,r)},Ue={container:a.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      position: fixed;
      z-index: 9999;
      background-color: rgba(0,0,0,0.5);
    `,container_left:a.section`
   display: flex;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `},Ye=({children:t,cancelar:r})=>{const s=n=>{n?.stopPropagation()};return e.jsx(Ue.container,{onClick:r,children:e.jsx(Ue.container_left,{onClick:s,children:t})})};function Me({value:t,onChange:r,list:s,titulo:n}){const c=l=>{r(l.target.value)};return e.jsx("div",{children:e.jsxs(mt,{sx:{m:0,minWidth:120},children:[e.jsx(ft,{id:"demo-simple-select-standard-label",sx:{fontSize:13,top:-10},children:n}),e.jsxs(gt,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:t,onChange:c,sx:{height:30,fontSize:13,".MuiSelect-select":{paddingTop:4,paddingBottom:4}},children:[e.jsx(ye,{value:"",children:e.jsx("em",{children:"None"})}),s.map((l,f)=>e.jsx(ye,{value:l.value!==void 0?l.value:l.numeroFilial,children:l?.nome},f))]})]})})}const qt=[{nome:"Aberto",value:!0},{nome:"Fechado",value:!1}],Ve=()=>{const[t,r]=i.useState([]),[s,n]=i.useState(!1),[c,l]=i.useState(""),f=re(),[y,x]=i.useState(""),[g,u]=i.useState(""),[A,O]=i.useState(!0),R=B(),[w,D]=i.useState(!1),[k,z]=i.useState(!1),[T,I]=i.useState(null),[b,C]=i.useState(null),[m,H]=i.useState(0),[F,J]=i.useState(),N=async d=>{T&&console.log(T),z(!0);const $=await Pe.findAll(b,y,T,d);$&&setTimeout(()=>{z(!1),r($.content),H($?.totalPages)},1e3)};i.useEffect(()=>{y.trim()===""&&N()},[y]);const[X,_]=i.useState([]),h=async()=>{const d=await Qe.lista();d?.filial&&_(d?.filial)};i.useEffect(()=>{h()},[]);const U=d=>{u(`Deseja realmente deletar o item ${d.id}`),n(!0),l(d.id)},ee=async()=>{await me.deletarPortaria(c,R?.id),u(`${c} Deletado com sucesso`),O(!1),await N(),n(!1)},te=d=>{D(!0),J(d)},ae=(d,$)=>{const Q=$-1;N(Q)},G=async(d,$)=>{const be=await(await fetch(d)).blob(),le=window.URL.createObjectURL(be),W=document.createElement("a");W.href=le,W.download=$,document.body.appendChild(W),W.click(),document.body.removeChild(W),window.URL.revokeObjectURL(le)},L=d=>{switch(d){case"AGUARDANDO_ENTRADA":return"blue";case"AGUARDANDO_SAIDA":return"#787018";case"SAIDA_LIBERADA":return"green";default:return"red"}},je=d=>{z(!0),setTimeout(()=>{f(`/controle/detalhes-registro?order=${d}`,{replace:!1,state:{refresh:Date.now()}})},2e3)};return e.jsx(e.Fragment,{children:e.jsxs(j.container,{children:[e.jsx(j.titulo,{children:"Histórico Portaria"}),e.jsxs(j.FormSub,{children:[e.jsxs(j.CamposInput,{children:[e.jsx(ke,{variant:"outlined",size:"small",placeholder:"Buscar...",value:y,onChange:d=>x(d.target.value)}),e.jsx(Me,{value:T,onChange:I,titulo:"Ativo",list:qt}),e.jsx(Me,{value:b,onChange:C,titulo:"Filial",list:X}),e.jsx(E,{onClick:N,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Re,{})}),e.jsx(De,{totalPage:m,handleNextPage:ae})]}),e.jsx(j.TableContainer,{children:e.jsxs(j.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Nome do Visitante"}),e.jsx("th",{children:"Ocupacao Liberada"}),e.jsx("th",{children:"Tipo de Acesso"}),e.jsx("th",{children:"Placa"}),e.jsx("th",{children:"Local da Visita"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Data Entrada"}),e.jsx("th",{children:"Data Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saída"}),e.jsx("th",{children:"Criador"}),e.jsx("th",{children:"Origem"}),e.jsx("th",{})," "]})}),e.jsxs("tbody",{children:[t.length==0&&e.jsx(j.erro,{children:e.jsxs(j.semItens,{children:[e.jsx(j.iconSemItens,{}),"Nenhum item encontrado"]})}),t.flatMap((d,$)=>e.jsxs("tr",{children:[e.jsx("td",{children:d?.visitante?.imagem?e.jsx(K,{sx:{width:35,height:35,objectFit:"contain"},alt:d?.visitante?.nomeCompleto,src:d?.visitante?.imagem}):e.jsx(K,{sx:{width:35,height:35,objectFit:"contain"},alt:d?.visitante?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsxs("td",{children:["#",d?.protocolo||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})]}),e.jsx("td",{children:d?.nomeCompleto||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:d?.ocupacaoLiberada||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:d?.visitante?.tipoAcesso||d.visitante?.recorrencia?.nome||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:d?.placaVeiculo||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:d?.bloco||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:e.jsx(j.Chip,{color:L(d?.status),children:d?.status.replace("_"," ")})}),e.jsx("td",{children:d?.entrada?.dataEntrada?new Date(d?.entrada?.dataEntrada).toLocaleString("pt-BR"):e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando Entrada"})}),e.jsx("td",{children:d?.saida?.dataSaida?new Date(d?.saida.dataSaida).toLocaleString("pt-BR"):e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando Saida"})}),e.jsx("td",{children:d?.entrada?.nomeFiscal||e.jsx(j.Chip,{color:L(d?.status),children:"N/A"})}),e.jsx("td",{children:d?.saida?.nomeFiscal||e.jsx(j.Chip,{color:L(d?.status),children:"N/A"})}),e.jsx("td",{children:d?.autorizador?.nome||e.jsx(j.Chip,{color:L(d?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:d?.filialSocitado}),e.jsx("td",{children:e.jsxs(j.trBTN,{children:[e.jsx(E,{"aria-label":"deletar",onClick:()=>je(d.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(jt,{})}),d?.entrada?.imagem?e.jsx(E,{onClick:()=>te(d),children:e.jsx(Je,{})}):e.jsx(E,{disabled:!0,children:e.jsx(Ke,{})}),e.jsx(E,{"aria-label":"deletar",onClick:()=>U(d),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(he,{})})]})})]},$))]})]})})]}),s&&e.jsx(Le,{handleCancel:()=>n(!1),handleConfirm:ee,message:g,ativoBtn:A}),w&&e.jsxs(Ye,{cancelar:()=>D(!1),children:[e.jsxs(j.visitante,{children:[e.jsx(j.imgemVisitante,{src:F?.visitante?.imagem}),e.jsxs("h5",{children:["Visitante: ",F?.visitante.nomeCompleto]})]}),e.jsxs(j.imagemArea,{children:[F?.entrada?.imagem&&e.jsxs(j.divArea,{children:[e.jsxs(j.tituloLabel,{children:["Entrada: ",new Date(F?.entrada?.dataEntrada).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})]}),e.jsx(j.btnDownload,{children:e.jsx(E,{onClick:()=>G(F?.entrada?.imagem,"ImagemEntrada"),children:e.jsx(ue,{sx:{color:"#75affa"}})})}),e.jsx(j.imgem,{src:F?.entrada?.imagem,alt:"Imagem entrada"})]}),F?.saida?.imagem&&e.jsxs(j.divArea,{children:[e.jsxs(j.tituloLabel,{children:["Saida ",new Date(F?.saida?.dataSaida).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})," "]}),e.jsx(j.btnDownload,{children:e.jsx(E,{onClick:()=>G(F?.saida?.imagem,"ImagemSaida"),children:e.jsx(ue,{sx:{color:"#75affa"}})})}),e.jsx(j.imgem,{src:F?.saida?.imagem,alt:"Imagem saida"})]})]})]}),k&&e.jsx(oe,{})]})})},o={container_principal:a.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  `,container:a.div`
    padding: 20px 1px;

  `,area_pedidos:a.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 10px 56px;
    width: 100%;
   @media screen {
    padding: 10px 0;
   }
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,pedidos:a.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,FormSub:a.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:a.label`
    font-size: 0.65rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    @media screen  and (min-width: 560px) {
       font-size: 0.85rem;    
    }
    `,CamposInput:a.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:t=>t!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:t})=>t?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,labelCheck:a.label`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin:5px 0 ;
    `,checkbox:a.input`
    height: 15px;
    padding: 5px;
    display: flex;
    gap: 10px;
    width: 15px;
    `,SelectItens:a.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    
    `,TextArea:a.textarea`
    min-height:80px; 
    resize:vertical;
    width: 100%;
    padding: 10px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    
    `,Options:a.option`
    height: 100vh;
    `,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 13px;
      margin: 0 0 10px;
     
    
    `,BtnLogin:a.button`
    margin: 5px 0;
    width: 100%;
    height: 35px;
    border:1px solid #d6d6d6;
    background-color:#007BFF;
    border-radius: 5px;
    color: #DDD;
    font-size: 14px;
    font-weight: bold;
        transition: background-color 0.3s ease;
    
    &:active {
        transform: scale(0.95);
        font-size: 12px;
    
      }
      &:hover {
        background-color: #0056b3;
        color: white; 
      }
    
    `,leftArea:a.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `,btnDivider:a.div`
      display: flex;
      width: 100%;
      align-items: center;
    `,CardCentro:a.div`
    border-radius: 8px;
    padding: 2px 15px;
    margin-bottom: 2px;

    @media screen and (min-width: 560px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding:20px;
      margin-bottom: 20px;
    }
  `,StatusContainer:a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `,AreaItemJust:a.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3px;
  `,AreaItemJustCenter:a.div`
    display: flex;
    flex-direction: column;
       width: 80%;

    margin-top: 5px;
    gap: 5px;

    @media screen and (min-width: 660px) {
      flex-direction: row;
      align-items: center;
       width: auto;
    }
  `,AreaItemJustRigth:a.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
   width: 70%;
    margin-left: 50px;
    gap: 5px;

    @media screen and (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: 32%;
    }
  `,semItens:a.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,iconSemItens:a(Te)`
      font-size: 60px;
      color: #999;
    `,StatusItem:a.div`
    flex: 1;
    text-align: center;
    color: ${t=>t.active?"#fff":"#999"};
    background: ${t=>t.active?"#4caf50":"#e0e0e0"};
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    font-size: 12px;
  `,Button:a.button`
    background-color: "#4caf50" ;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;

    &:active {
      transform: scale(0.97);
    }
  `,ItemImage:a.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;

    @media screen and (min-width: 560px) {
      width: 100px;
      height: 100px;
    }
  `,ItemDetails:a.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
  `,SummaryRow:a.div`
      display: flex;
      justify-content: space-between;
  
    `,heanderPedido:a.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      gap: 10px;
    `,tituloPedido:a.h4`
      font-size: 14px;
      color: #1e88e5;
      padding: 2px;
    `,p:a.p`
      font-weight: 600;
      font-size: 14px;
    `,status:a.div`
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--cor-texto-titulo);
    `,Image:a.img`
      width: 100%;
      height: 200px;
      border-radius: 5%;
      object-fit: cover;
      object-position: center top;
  
      @media screen and (min-width: 560px) {
        width: 150px;
        height: 150px;
      }
    `,description:a.div`
      width: 100%;
      word-wrap: break-word;
    `,Label:a.span`
      font-size: 0.65rem;
      font-weight: bold;
      color: #3b004f;
      font-family: "Inter", sans-serif;
      letter-spacing: 0.3px;
  
      @media screen and (min-width: 560px) {
        font-size: 0.8rem;
      }
    `,AreaBuscaPlaca:a.div`
       flex-direction: column;
      margin:5em auto;
      padding: 30px 20px;
      font-size: 16px;
      border-radius: 10px;
      color: #134c72;
               box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      
      gap: 10px;
    `,busca:a.div`
    display: flex;
    width: 100%;
    border-radius: 5px;
    /* border: 1px solid #888;
  outline-offset: 2px; */
    padding: 10px;
    transition: 0.2s ease;
    align-items: center;
    /* &:focus-within {
    border-color: #6a5acd;
    outline: none;
    box-shadow: 0 0 0 3px rgba(106,90,205,0.2);
    &:hover{
      outline: none;
    }
  } */
     
    `,LabelSubtitulo:a.span`
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--cor-texto-campos);
      word-wrap: break-word;
      font-size: 0.55rem;
  
      @media screen and (min-width: 560px) {
        font-size: 0.75rem;
      }
    `,edit:a.div`
      margin: 0;
    `},Oe="http://192.168.88.239:8083",Ht=async(t,r,s)=>{const n=new URLSearchParams;return r!=null&&n.append("visitanteId",r),s!=null&&s.trim()!==""&&n.append("nome",s),(await M.get(Oe+t,{params:Object.fromEntries(n)})).data},Jt=async t=>(await M.get(Oe+t)).data,Kt=async(t,r,s,n)=>{try{const c=new URLSearchParams;return c.append("visitanteId",r),c.append("usuarioId",s),c.append("type",n),(await M.delete(Oe+t,{params:Object.fromEntries(c)})).data}catch(c){throw c}},Fe={visitante:async(t,r)=>await Ht("/visitante/placa",t,r),FiltroVisitante:async()=>await Jt("/visitante/filtro"),deletarVisitante:async(t,r,s)=>await Kt("/visitante/delete/registro",t,r,s)},Xe="http://192.168.88.239:8083",Qt=async t=>(await M.get(Xe+t)).data,Wt=async t=>(await M.get(Xe+t)).data,Ae={lista:async()=>await Qt("/portaria/tipo_pessoa/lista"),recorrecia:async()=>await Wt("/recorrencia")},de=a.span`
  color: red;
  `,Zt=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],Yt=({visitante:t,tipo:r})=>{const{register:s,handleSubmit:n,formState:{errors:c},reset:l,watch:f}=He({defaultValues:{globalAtivo:"false"}}),[y,x]=i.useState([]),u=B()?.permissoes||[],[A,O]=i.useState([]),R=u.includes("GERENCIAR_USUARIOS"),w=f("tipoAcesso"),[D,k]=i.useState(!1),z=async m=>{try{k(!0);const H=B();m.descricao||delete m.descricao,m.criadorId=H?.id,w?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete m.dataAcesso,m.typeMethod="VISITANTE",m.visitanteId=t?.id;const J=await Pe.RegistroFactory(m);J&&(k(!1),xe(J.msg,"success"),l())}finally{k(!1)}},T=()=>{r(),l()},I=(m,H)=>{m.key},b=async()=>{const m=await Ae.recorrecia();m.recorrencia&&x(m.recorrencia)},C=async()=>{const m=await ge.blocos();m.blocos&&O(m?.blocos)};return i.useEffect(()=>{b(),C()},[]),e.jsx(e.Fragment,{children:e.jsx(o.container,{children:e.jsxs(o.area_pedidos,{children:[e.jsxs(o.CardCentro,{children:[e.jsx(o.Image,{src:t?.imagem}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Nome Completo:"}),e.jsx(o.LabelSubtitulo,{children:t?.nomeCompleto})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Tipo de Pessoa:"}),e.jsx(o.LabelSubtitulo,{children:t?.tipoPessoa})]})]}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Categoria de Acesso:"}),e.jsx(o.LabelSubtitulo,{children:t?.categoriaAcesso})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"NumeroTelefone:"}),e.jsx(o.LabelSubtitulo,{children:t?.numeroTelefone})]})]})]}),e.jsxs(o.pedidos,{children:[e.jsx(o.FormSub,{children:e.jsxs(o.Select,{children:[e.jsx(o.leftArea,{children:e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(de,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),A.flatMap(m=>e.jsx(o.Options,{value:m?.nome.toUpperCase(),children:m?.nome.toUpperCase()}))]}),c.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:c?.bloco?.message})})]})}),e.jsxs(o.leftArea,{children:[R&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(de,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),y.map(m=>e.jsx(o.Options,{value:m?.nome.toLowerCase(),children:m?.nome}))]}),c.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.tipoAcesso.message})})]}),"                                    ",R&&w?.toUpperCase()==="RECORRENTE"&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...s("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...s("globalAtivo")}),e.jsx("small",{children:"Não"})]})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(de,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),Zt.flatMap(m=>e.jsx(o.Options,{value:m.nome,children:m.nome},m.id))]}),c.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.ocupacaoLiberada.message})})]})]}),w?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(de,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!c.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...s("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:m=>I(m)}),c.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS"}),e.jsx(o.TextArea,{...s("descricao")})]})]})}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:D,onClick:n(z),children:"Enviar Pedido"}),e.jsx(fe,{click:T,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]})})})},Xt=({setValue:t,value:r,onSelectData:s})=>{const[n,c]=i.useState([]),[l,f]=i.useState("");i.useEffect(()=>{(async()=>{const u=await Fe.FiltroVisitante();u?.content&&c(u.content)})()},[]);const y=g=>[...g].sort(()=>Math.random()-.5).slice(0,3),x=i.useMemo(()=>y(n),[n]);return e.jsx(bt,{freeSolo:!0,id:"country-select-demo",sx:{width:{xs:"100%",sm:400,md:500,lg:560}},options:r?n:x,inputValue:l||r||"",onInputChange:(g,u,A)=>{A=="input"&&(t(u),f(""),s(null))},onChange:(g,u)=>{if(typeof u=="object"&&u){f(u.nomeCompleto),s({id:u.id});return}t(u||""),s(null)},getOptionLabel:g=>typeof g=="string"?g:g.nomeCompleto,renderOption:(g,u)=>e.jsxs(ie,{component:"li",...g,children:[e.jsx("img",{loading:"lazy",width:"20",src:u.imagem,alt:"",style:{marginRight:8}}),u.nomeCompleto]}),renderInput:g=>e.jsx(ke,{...g,label:"Busque um Visitante ou Digite um nome para continuar",autoComplete:"new-password"})})},q=a.span`
  color: red;
  `,ea=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],$e=()=>{const{register:t,handleSubmit:r,formState:{errors:s},reset:n,watch:c,setValue:l}=He({defaultValues:{globalAtivo:"false"}}),[f,y]=i.useState(null),[x,g]=i.useState(),[u,A]=i.useState(null),[O,R]=i.useState(0),[w,D]=i.useState([]),[k,z]=i.useState([]),[T,I]=i.useState([]),[b,C]=i.useState("BUSCA"),[m,H]=i.useState(null),F=B(),[J,N]=i.useState(!1),X=F?.permissoes||[],[_,h]=i.useState([]),U=X.includes("GERENCIAR_USUARIOS"),ee=async()=>{const p=await Qe.lista();p?.filial&&I(p?.filial)},te=c("tipoAcesso"),ae=p=>{A(p)},[G,L]=i.useState(!1),je=async p=>{try{L(!0);const ve=B();if(p.descricao||delete p.descricao,u!=null){p.criadorId=ve?.id,te?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete p.dataAcesso,p.typeMethod="NAO_VISITANTE";const _e=await Pe.RegistroFactory(p,u);_e&&(L(!1),xe(_e.msg,"success"),n(),R(tt=>tt+1))}else L(!1),xe("Selecione uma imagem","error")}finally{L(!1)}},d=()=>{R(p=>p+1),C("BUSCA"),N(!1),n()},$=i.useRef(null),Q=(p,ve)=>{p.key==="Enter"&&ve?.current?.focus()},be=async()=>{const p=await Ae.lista();p?.tipoPessoa&&D(p?.tipoPessoa)},le=async()=>{try{if(N(!0),!m&&!f){C("BUSCA"),N(!1);return}const p=await Fe.visitante(f?.id,m);p?(g(p),setTimeout(()=>{C("SLIDER"),N(!1)},2e3)):setTimeout(()=>{N(!1),l("nomeCompleto",m),C("CADASTRO")},2e3)}finally{setTimeout(()=>{N(!1)},2e3)}},W=async()=>{const p=await Ae.recorrecia();p.recorrencia&&z(p.recorrencia)},et=async()=>{const p=await ge.blocos();p.blocos&&h(p?.blocos)};return i.useEffect(()=>{be(),W(),ee(),et()},[]),e.jsx(i.Fragment,{children:e.jsxs(o.container_principal,{children:[b==="BUSCA"&&e.jsxs(o.AreaBuscaPlaca,{style:{display:"flex"},children:[e.jsx(ze,{link:!0,linkRouter:"/portaria/controle/registro",titulo:"info",msg:"Cadastro de visitante!"}),e.jsxs(o.busca,{children:[e.jsx(Xt,{value:m,setValue:H,onSelectData:y}),e.jsx(E,{onClick:le,children:"🔍"})]}),m==""&&e.jsx(ze,{titulo:"success",msg:"Informe a placa do carro do visitante para continuar!"})]}),b==="SLIDER"&&e.jsx(Yt,{visitante:{id:x.id,nomeCompleto:x?.nomeCompleto,imagem:x?.imagem,tipoPessoa:x?.tipoPessoa,categoriaAcesso:x?.recorrencia?.nome,placaVeiculo:x?.placaVeiculo,numeroTelefone:x?.numeroTelefone},tipo:()=>C("BUSCA")}),b==="CADASTRO"&&e.jsxs(o.container,{children:[e.jsx(o.titulo,{children:"Novo Pedido de Acesso"}),e.jsxs(o.pedidos,{children:[e.jsxs(o.FormSub,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Placa ",e.jsx(q,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.placaVeiculo,type:"text",autoComplete:"current-password",placeholder:"Placa do Veiculo",...t("placaVeiculo",{required:"Placa E obrigatorio",pattern:{value:/^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,message:"Formato de placa inválido. Ex: ABC1234 ou ABC1D23"}}),onKeyDown:p=>{Q(p,$)}}),e.jsx(o.Erros,{children:s.placaVeiculo&&e.jsx("p",{children:s.placaVeiculo.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Nome ",e.jsx(q,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.nomeCompleto,placeholder:"Nome Completo",type:"text",autoComplete:"current-password",...t("nomeCompleto",{required:"Nome e obrigatória",minLength:{value:10,message:"Mínimo 10 caracteres"}}),onKeyDown:p=>Q(p)}),e.jsx(o.Erros,{children:s.nomeCompleto&&e.jsx("p",{children:s.nomeCompleto.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Numero de Telefone ",e.jsx(q,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.nomeCompleto,placeholder:"(99) 99999-9999",type:"tel",autoComplete:"current-password",...t("numeroTelefone",{required:"O telefone é obrigatório.",pattern:{value:/^(\+?55\s?)?(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/,message:"Formato de telefone inválido. Ex: (98) 9809-9999 ou 98980999977"}}),onKeyDown:p=>Q(p)}),e.jsx(o.Erros,{children:s.numeroTelefone&&e.jsx("p",{children:s.numeroTelefone.message})})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Filial ",e.jsx(q,{children:"*"})]}),e.jsxs(o.SelectItens,{...t("filial",{required:"Selecione uma filial"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),T.flatMap(p=>e.jsxs(o.Options,{value:p?.numeroFilial,children:[p?.numeroFilial," - ",p?.nome]},p?.id))]}),s.filial&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.filial.message})})]}),U&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...t("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...t("globalAtivo")}),e.jsx("small",{children:"Não"})]})]})]}),e.jsxs(o.Select,{children:[e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Tipo de Pessoa ",e.jsx(q,{children:"*"})]}),e.jsxs(o.SelectItens,{...t("tipPessoa",{required:"Selecione o tipo de Pessoa"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),w.flatMap(p=>e.jsx(o.Options,{value:p?.nome,children:p?.nome}))]}),s.tipPessoa&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.tipPessoa.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(q,{children:"*"})]}),e.jsxs(o.SelectItens,{...t("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),_.flatMap(p=>e.jsx(o.Options,{value:p?.nome.toUpperCase(),children:p?.nome.toUpperCase()}))]}),s.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.bloco.message})})]})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(q,{children:"*"})]}),e.jsxs(o.SelectItens,{...t("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),k.map(p=>e.jsx(o.Options,{value:p?.nome.toLowerCase(),children:p?.nome}))]}),s.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.tipoAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(q,{children:"*"})]}),e.jsxs(o.SelectItens,{...t("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),ea.flatMap(p=>e.jsx(o.Options,{value:p.nome,children:p.nome},p.id))]}),s.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.ocupacaoLiberada.message})})]})]}),te?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(q,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...t("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:p=>Q(p)}),s.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS "}),e.jsx(o.TextArea,{...t("descricao")})]})]}),e.jsxs(o.label,{children:["IMG visitante",e.jsx(q,{children:"*"})]}),e.jsx(yt,{onFileSelect:ae,titulo:"Clique ou arraste outra imagem para substituir",resetSignal:O}),u&&e.jsxs("p",{children:["Arquivo selecionado: ",u.name]})]}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:G,onClick:r(je),children:"Enviar Pedido"}),e.jsx(fe,{click:d,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]}),J&&e.jsx(oe,{})]})})},ta=({permissoes:t})=>{switch(t){case"FISCAL":return e.jsx(ne,{to:"/portaria/active/pendentes",replace:!0});case"AUTORIZADOR":return e.jsx(ne,{to:"/portaria/active",replace:!0});case"ADMIN":return e.jsx(ne,{to:"/portaria/active/pendentes",replace:!0});case"GERENTE_PREVENCAO":return e.jsx(ne,{to:"/portaria/active/pendentes",replace:!0});default:return e.jsx(ne,{to:"/portaria",replace:!0})}},Ge={container:a.div`
    background-color: #f2f2f2;
    padding: 80px 2px;
    min-height: 100vh;
  `,container_int:a.div`
      background-color: #f2f2f2;

  display: flex;
  gap: 20px;
  width: 200px;
     position: fixed;
    top: 70px; /* altura do header */
    right:6.2%;
    z-index: 999;
    font-size: 20px;
    font-weight: bold;
    background: #FFF;
    border-radius: 5px;
    padding: 10px 20px;
    @media screen and (min-width:900px) {
          right:1.5%;

    }

  `};function aa(){const t=B(),[r,s]=i.useState(20),[n,c]=i.useState(0),l=i.useContext(Ee),[f,y]=i.useState([]),[x,g]=i.useState(!1),[u,A]=i.useState(""),O=async b=>{if(x)return;g(!0);const C=b??r;try{const m=await ge.Solicitacoes(t?.filial,l?.busca,C,u);m.content&&(y(m.content),c(m.totalElements))}finally{setTimeout(()=>{g(!1)},800)}},R=()=>{if(!x&&f.length<n){const b=r+5;s(b),O(b)}};i.useEffect(()=>{O(),setTimeout(()=>{g(!1)},3e3)},[t?.filial,l?.busca,u]);const w=re(),[D,k]=i.useState(!1),z=b=>{k(!0),setTimeout(()=>{w(`/portaria/controle/detalhes-registro?order=${b}`,{replace:!1,state:{refresh:Date.now()}})},2e3)},T=()=>{A("aguardando entrada")},I=()=>{A("aguardando saida")};return e.jsxs(Ge.container,{children:[e.jsxs(Ge.container_int,{children:[e.jsx(fe,{titulo:"Entrada",click:T,isvalid:!0,children:" "}),e.jsx(fe,{titulo:"Saida",click:I,isvalid:!1,children:" "})]}),e.jsx(We,{lista:f,hendleDetalhesPedidos:z,hendleBusca:R,visibleCount:n,loading:x}),D&&e.jsx(oe,{})]})}const pe={container:a.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:a.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:a.div`
    width: 50%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:t=>t!=="hasError"})`
    width: 320px;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:t})=>t?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:a.option``,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,paginator:a.div`
    width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 10px;
    `},Ce={TableContainer:a.div`
        width: 100%;
        overflow-x: auto;
        margin-top: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `,Table:a.table`
        width: 100%;
        border-collapse: collapse;
        background-color: #fff;
        font-family: "Inter", sans-serif;
    
        th, td {
          padding: 10px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
          font-size: 0.8rem;
        }
    
        th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #333;
        }
    
        tr:hover {
          background-color: #f1f5ff;
          transition: background-color 0.2s ease-in-out;
        }
    
        tr:last-child td {
          border-bottom: none;
        }
      `,trBTN:a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `},oa=({lista:t,handleDelete:r,handleBloqueio:s})=>{const c=B()?.permissoes;return e.jsx(Ce.TableContainer,{children:e.jsxs(Ce.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Acesso"}),e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Telefone"}),e.jsx("th",{children:"Data Criação"}),e.jsx("th",{children:"Tipo de Acesso"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.flatMap((l,f)=>e.jsxs("tr",{children:[e.jsx("td",{children:l.ativo?"Permitido":"Bloqueado"}),e.jsx("td",{children:l?.imagem?e.jsx(K,{sx:{width:40,height:40,objectFit:"contain"},alt:l?.nomeCompleto,src:l?.imagem}):e.jsx(K,{sx:{width:40,height:40,objectFit:"contain"},alt:l?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsx("td",{children:l?.nomeCompleto}),e.jsx("td",{children:l?.numeroTelefone}),e.jsx("td",{children:new Date(l?.dataCriacao).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),e.jsx("td",{children:l?.recorrencia?.nome}),e.jsx("td",{children:l?.ocupacao}),e.jsx("td",{children:e.jsx(Ce.trBTN,{children:c?.includes("DELETE_GLOBAL")?e.jsxs(e.Fragment,{children:[l.ativo?e.jsx(E,{"aria-label":"LockIcon",onClick:()=>s(l.id,"BLOQUEIO"),sx:{color:"green","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(vt,{})}):e.jsx(E,{"aria-label":"LockOpenIcon",onClick:()=>s(l.id,"DESBLOQUEIO"),sx:{color:"red","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(wt,{})}),e.jsx(E,{"aria-label":"deletar",onClick:()=>r(l?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(he,{})})]}):e.jsx(E,{disabled:!0,children:e.jsx(he,{})})})})]},f))})]})})},sa=()=>{const[t,r]=i.useState([]),[s,n]=i.useState(""),[c,l]=i.useState(0),[f,y]=i.useState(""),[x,g]=i.useState(""),[u,A]=i.useState(""),O=B(),R=async b=>{const C=await me.listaVisistante(s,b);C&&(r(C.content),l(C.tatalPages))};i.useEffect(()=>{s.trim()===""&&R()},[s]);const w=(b,C)=>{switch(T(!0),C){case"BLOQUEIO":A("BLOQUEIO");break;case"DESBLOQUEIO":A("DESBLOQUEIO");break}g(`Deseja realmente fazer ${C} o item de ID ${b}`),y(b)},D=b=>{A("DELETE"),y(b),g(`Deseja realmente deletar o item de ID ${b}`),T(!0)},k=async()=>{const b=await Fe.deletarVisitante(f,O?.id,u);xe(b?.msg,"success"),T(!1),await R(),T(!1)},[z,T]=i.useState(!1),I=(b,C)=>{const m=C-1;R(m)};return e.jsx(e.Fragment,{children:e.jsxs(pe.container,{children:[e.jsxs(pe.FormSub,{children:[e.jsxs(pe.paginator,{children:[e.jsx(pe.Campos,{autoComplete:"current-password",placeholder:"Buscar visitante",onChange:b=>n(b.target.value),onKeyDown:R}),e.jsx(De,{totalPage:c,handleNextPage:I})]}),t.length===0&&e.jsx("div",{children:"Nada encontrado"}),e.jsx(oa,{lista:t,handleDelete:D,handleBloqueio:w})]}),z&&e.jsx(Le,{handleCancel:()=>T(!1),handleConfirm:k,message:x,ativoBtn:z})]})})},Se={container:a.main`
    position: relative;
   height: 100vh;
    `,Container_int:a.main`
      padding:0 26px;
      @media screen and (max-width: 560px) {
        padding: 0;
      }


    
  `,container_int:a.div`
  width: 100%;
     height: 100vh;

  `,placeholder:a.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #ccc;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
      color: #007bff;
    }

    p {
      font-size: 16px;
      color: #000;
    }
  `},na=()=>{const t=qe();return i.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs(Se.container,{children:[e.jsx(At,{}),e.jsx(Se.container_int,{children:t?e.jsx(Ie,{}):e.jsxs(Se.placeholder,{children:[e.jsx("h2",{children:"Bem-vindo às Configurações ⚙️"}),e.jsx("p",{children:"Selecione uma opção no menu para começar."})]})})]})},v={container:a.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,Chip:a.div`
    padding: 5px;
    border-radius: 5px;
    color:${({color:t})=>t||"blue"} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:a.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:a.div`
    display: flex;
    position: relative;
    gap: 10px;
     margin: 5px 10px;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:t=>t!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:t})=>t?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:t})=>t?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:a.option``,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:a.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:a.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;  
  
    th, td {
      padding: 10px 13px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.7rem;
      margin: 0;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
      color: #333;
    }

    tr{
      width: 100%;
    }
    tr:hover {
      background-color: #f1f5ff;
      transition: background-color 0.2s ease-in-out;
      
    }

    tr:last-child td {
      border-bottom: none;
    }
    td{
            cursor: pointer;

    }
  `,trBTN:a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:a.div`
    padding: 10px;
    
  `,imagemArea:a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  `,tituloLabel:a.label`
  font-size: 16px;

  `,imgemVisitante:a.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `,imgem:a.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
  `,divArea:a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  `,btnDownload:a.div`
   position: absolute;
   align-items: center;
   padding: 10px;
   right: 0;
   top: 20px;
    
  `,visitante:a.div`
    display: flex;
    align-items: center;
    gap: 10px;
     margin: 5px 10px;
    `},ia=()=>{const[t,r]=i.useState([]),[s,n]=i.useState(!1),[c,l]=i.useState(""),[f,y]=i.useState(""),[x,g]=i.useState(""),[u,A]=i.useState(!0),O=B(),[R,w]=i.useState(!1),[D,k]=i.useState(!1),[z,T]=i.useState(0),[I,b]=i.useState(),C=async h=>{k(!0);const U=await me.listHistory(f,h);U&&setTimeout(()=>{k(!1),r(U.content),T(U?.totalPages)},1e3)};i.useEffect(()=>{f.trim()===""&&C()},[f]);const m=h=>{g(`Deseja realmente deletar o item ${h.id}`),n(!0),l(h.id)},H=async()=>{await me.deletar(c,O?.id),g(`${c} Deletado com sucesso`),A(!1),await C(),n(!1)},F=O?.permissoes,J=h=>{w(!0),b(h)},N=(h,U)=>{const ee=U-1;C(ee)},X=async(h,U)=>{const te=await(await fetch(h)).blob(),ae=window.URL.createObjectURL(te),G=document.createElement("a");G.href=ae,G.download=U,document.body.appendChild(G),G.click(),document.body.removeChild(G),window.URL.revokeObjectURL(ae)},_=h=>{switch(h){case"AGUARDANDO_ENTRADA":return"blue";case"AGUARDANDO_SAIDA":return"#787018";case"SAIDA_LIBERADA":return"green";default:return"red"}};return e.jsx(e.Fragment,{children:e.jsxs(v.container,{children:[e.jsx(v.titulo,{children:"Histórico Portaria"}),e.jsxs(v.FormSub,{children:[e.jsxs(v.CamposInput,{children:[e.jsx(ke,{variant:"outlined",size:"small",placeholder:"Buscar...",value:f,onChange:h=>y(h.target.value)}),e.jsx(E,{onClick:C,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Re,{})}),e.jsx(De,{totalPage:z,handleNextPage:N})]}),e.jsx(v.TableContainer,{children:e.jsxs(v.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Nome do Visitante"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{children:"Placa"}),e.jsx("th",{children:"Bloco"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Data Entrada"}),e.jsx("th",{children:"Data Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saída"}),e.jsx("th",{children:"Criador"}),e.jsx("th",{})," "]})}),e.jsxs("tbody",{children:[t.length==0&&e.jsx(v.erro,{children:"Sem dados"}),t.flatMap((h,U)=>e.jsxs("tr",{children:[e.jsx("td",{children:h?.visitante?.imagem?e.jsx(K,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:h?.visitante?.imagem}):e.jsx(K,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsxs("td",{children:["#",h?.protocolo||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})]}),e.jsx("td",{children:h?.nomeCompleto||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.visitante?.ocupacao||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.placaVeiculo||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.bloco||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.status.replace("_"," ")||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataEntrada?new Date(h.dataEntrada).toLocaleString("pt-BR"):e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataSaida?new Date(h.dataSaida).toLocaleString("pt-BR"):e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaEntrada||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaSaida||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.criador?.nome||e.jsx(v.Chip,{color:_(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:e.jsxs(v.trBTN,{children:[h?.imagemEntrada?e.jsx(E,{onClick:()=>J(h),children:e.jsx(Je,{})}):e.jsx(E,{disabled:!0,children:e.jsx(Ke,{})}),F?.includes("DELETE_GLOBAL")&&e.jsx(E,{"aria-label":"deletar",onClick:()=>m(h),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(he,{})})]})})]},U))]})]})})]}),s&&e.jsx(Le,{handleCancel:()=>n(!1),handleConfirm:H,message:x,ativoBtn:u}),R&&e.jsxs(Ye,{cancelar:()=>w(!1),children:[e.jsxs(v.visitante,{children:[e.jsx(v.imgemVisitante,{src:I?.visitante?.imagem}),e.jsxs("h5",{children:["Visitante: ",I?.nomeCompleto]})]}),e.jsxs(v.imagemArea,{children:[I?.imagemEntrada&&e.jsxs(v.divArea,{children:[e.jsxs(v.tituloLabel,{children:["Entrada: ",new Date(I?.dataEntrada).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})]}),e.jsx(v.btnDownload,{children:e.jsx(E,{onClick:()=>X(I?.imagemEntrada,"ImagemEntrada"),children:e.jsx(ue,{sx:{color:"#75affa"}})})}),e.jsx(v.imgem,{src:I?.imagemEntrada,alt:"Imagem entrada"})]}),I?.imagemSaida&&e.jsxs(v.divArea,{children:[e.jsxs(v.tituloLabel,{children:["Saida ",new Date(I?.dataSaida).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})," "]}),e.jsx(v.btnDownload,{children:e.jsx(E,{onClick:()=>X(I?.imagemSaida,"ImagemSaida"),children:e.jsx(ue,{sx:{color:"#75affa"}})})}),e.jsx(v.imgem,{src:I?.imagemSaida,alt:"Imagem saida"})]})]})]}),D&&e.jsx(oe,{})]})})};function ra(){const t=B();function r(c,l){return i.lazy(()=>Promise.all([c(),new Promise(f=>setTimeout(f,l))]).then(([f])=>f))}const s=r(()=>Be(()=>import("./registroPortariaAntigo-DAUHH1Br.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),500),n=r(()=>Be(()=>import("./visualizar_registro-BPzL5d8B.js"),__vite__mapDeps([9,1,2,3,4,6,5,7,8])),500);return e.jsxs(it,{children:[e.jsx(P,{index:!0,element:e.jsx(ta,{permissoes:t?.perfil})}),e.jsxs(P,{path:"/active",element:e.jsx(V,{children:e.jsx(Ne,{},Date.now())}),children:[e.jsx(P,{path:"pendentes",element:e.jsx(V,{allowedPermissions:["REGISTRAR_ENTRADA"],children:e.jsx(aa,{},Date.now())})}),e.jsx(P,{path:"gerais",element:e.jsx(V,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(Ve,{},Date.now())})})]}),e.jsxs(P,{path:"/configuracao",element:e.jsx(na,{}),children:[e.jsx(P,{path:"visitantes",element:e.jsx(V,{allowedPermissions:["GERENCIAR_USUARIOS"],children:e.jsx(sa,{},Date.now())})}),e.jsx(P,{path:"historico",element:e.jsx(V,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(ia,{},Date.now())})}),e.jsx(P,{path:"geral",element:e.jsx(V,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(Ve,{},Date.now())})}),e.jsx(P,{path:"novo",element:e.jsx(V,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx($e,{},Date.now())})})]}),e.jsx(P,{path:"/teste",element:e.jsx(Ne,{},Date.now())}),e.jsxs(P,{path:"/controle",element:e.jsx(V,{children:e.jsx(Tt,{},Date.now())}),children:[e.jsx(P,{path:"registro-portaria-cd",element:e.jsx(V,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx($e,{},Date.now())})}),e.jsx(P,{path:"registro",element:e.jsx(V,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(s,{},Date.now())})}),e.jsx(P,{path:"meus-registros",element:e.jsx(V,{allowedPermissions:["VISUALIZAR_REGISTRO"],children:e.jsx(Bt,{},Date.now())})}),e.jsx(P,{path:"detalhes-registro",element:e.jsx(V,{allowedPermissions:["REGISTRAR_SAIDA","REGISTRAR_ENTRADA","VISUALIZAR_REGISTRO"],children:e.jsx(n,{},Date.now())})})]}),e.jsx(P,{path:"*",element:e.jsx(It,{})})]})}const ma=Object.freeze(Object.defineProperty({__proto__:null,default:ra},Symbol.toStringTag,{value:"Module"}));export{ma as P,o as T,ge as c,Ae as s};
