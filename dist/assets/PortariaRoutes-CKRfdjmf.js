const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/controledeAcesso-BagMzBWg.js","assets/mui-_wqMIBiI.js","assets/react-OvXVS5lI.js","assets/HeaderSecundario-C_2THYpf.js","assets/BotaoVoltar-CxvXsGU3.js","assets/index-BYSqOyoE.js","assets/index-DsXzPhJZ.css","assets/registroPortariaAntigo-BdB6Bv-H.js","assets/menuConfig-C5Fu2Emn.js","assets/NotFund-CATxkBTh.js","assets/visualizar_registro-DVqFex91.js"])))=>i.map(i=>d[i]);
import{c as dt,d as t,a as M,u as ce,s as pt,L as de,b as O,e as Te,f as xt,g as De,n as X,h as ht,i as Ke,O as Qe,j as Ze,m as ut,A as Me,N as re,R as mt,k as z,_ as Ce}from"./index-BYSqOyoE.js";import{j as e,d as J,e as Z,r as i,A as ft,W as gt,f as jt,b as bt,C as Ye,I as T,g as Pe,T as le,h as ee,M as vt,i as k,D as wt,k as Xe,L as St,l as yt,P as Ct,m as Ve,n as At,o as It,p as Rt,F as Et,q as kt,s as Tt,S as xe,t as Dt,u as ze,a as Pt,v as et,w as fe,x as Ee,y as zt,z as Lt,E as Ft,G as Ot}from"./mui-_wqMIBiI.js";import{M as Le}from"./BotaoVoltar-CxvXsGU3.js";import{l as _t,P as Fe,a as Oe,b as ge,B as je,D as Bt,f as Nt,M as Ut,c as G}from"./menuConfig-C5Fu2Emn.js";import Mt from"./NotFund-CATxkBTh.js";const Vt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gt=dt("chevron-right",Vt),he={container:t.div`
    background-color: #f2f2f2;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `,container_int:t.div`
    padding: 40px 5px;
    margin-top: 2em;

    min-height: 100vh;

  `,div:t.div`
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
  `,busca:t.input`
      width:100%;
      border-radius:5px;
      padding:10px ;
      border: 1px solid #b6aeaeff;
      outline: none;
      @media screen and (min-width: 760px){
         width:60%;
      }
    `},ie="http://localhost:8082",$t=async a=>(await M.get(ie+a)).data,qt=async(a,n,s,l,c)=>{const r=new URLSearchParams;return r.append("filial",n),r.append("busca",s||""),r.append("status",c||""),r.append("size",l||""),(await M.get(ie+a,{params:Object.fromEntries(r)})).data},Wt=async(a,n,s)=>{const l=new FormData;return l.append("file",s),l.append("data",JSON.stringify(n)),(await M.put(ie+a,l,{headers:{"Content-Type":"multipart/form-data"}})).data},Ht=async(a,n,s)=>{const l=new FormData;return l.append("file",s),l.append("data",JSON.stringify(n)),(await M.put(ie+a,l,{headers:{"Content-Type":"multipart/form-data"}})).data},Jt=async(a,n,s)=>{const l=new URLSearchParams;return l.append("usuario_id",n),l.append("busca",s),(await M.get(ie+a,{params:Object.fromEntries(l)})).data},Kt=async a=>(await M.get(ie+a)).data,be={consuta_portaria:async a=>await $t(`/portaria/v1/solicitacao/visualizar/registro?registroId=${a}`),Solicitacoes:async(a,n,s,l)=>(console.log("busca "+n),await qt("/portaria/v1/lista/entradas/pendentes",a,n,s,l)),alterarEntrada:async(a,n)=>await Wt("/portaria/v1/aguardando_Entrada",a,n),alterarSaida:async(a,n)=>await Ht("/portaria/v1/aguardando_saida",a,n),solitacaoAutorizador:async(a,n)=>await Jt("/portaria/v1/solicitacao/autorizador",a,n),blocos:async()=>await Kt("/bloco")},I={container:t.div`
    background-color: #f2f2f2;
    padding: 20px 0;
    min-height: 100vh;
  `,area_pedidos:t.section`
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
  `,titulo:t.h1`
    font-size: 22px;
    font-weight: bold;
    font-family:sans-serif;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,pedidos:t.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,cardItem:t.div`
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
  `,card_item_header:t.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,card_item_center:t.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 20px;
    @media screen and (max-width: 420px) {
      justify-content: space-between;

    }
  `,numeroDoPedido:t.h4`
    font-size: 14px;
    color: #756f6f;
  `,data:t.small`
    font-size: 9px;
    font-family: "inter";
    color: #756f6f;
  `,btnAguadandoPagamento:t.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,AreaStatus:t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* @media screen and (max-width:560px){
          flex-direction: row-reverse;

    } */
  `,Image:t.img`
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
  `,dataPedido:t.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,Areaitem:t.div`
  display: flex;
  flex: 1;
  gap: 1px;
  flex-direction: column;
`,inforLabel:t.div`
  display: flex;
  align-items: center;
  text-align:center;
  word-wrap: break-word;
  gap:2px;

`,loading:t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  
`,buttonNext:t.button`
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

`,Span:t.span`
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    color:#374151;
    @media screen and (max-width: 560px){
      font-size: 12px;
              letter-spacing: 0.2;

      
    }
  `,Infor:t.small`
    font-size: 13px;
    color: #494545;
        letter-spacing: 0.5;
        margin-top: 2px;
    @media screen and (max-width: 560px){
      font-size: 11px;
              letter-spacing: 0.2;

      
    }

  `,semItens:t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #555;
    height: 60vh;
    font-size: 16px;
    gap: 10px;
    opacity: 0.8;
  `,iconSemItens:t(Le)`
    font-size: 60px;
    color: #999;
  `,btn:t.div`
  display: flex;
  justify-content:flex-end;
   right: 1;
   @media screen and (max-width:560px){
    flex: 0;
    padding: 5px;
    
   }
  `,sentinela:t.div`
    width: 100%;
    height: 100px; /* Altura generosa para garantir detecção */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: transparent;
  `,loadingFooter:t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  `};function Qt(){return e.jsxs(J,{sx:{mb:4},children:[e.jsx(Z,{variant:"text",sx:{width:200,height:20,mb:1,ml:1}}),e.jsxs(J,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,background:"#fff",borderRadius:"12px",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:[e.jsx(Z,{variant:"rectangular",width:80,height:80,sx:{borderRadius:"6px"}}),e.jsxs(J,{sx:{flex:1,ml:2},children:[e.jsx(Z,{variant:"text",width:160,height:22}),e.jsx(Z,{variant:"text",width:260,height:22}),e.jsx(Z,{variant:"text",width:200,height:22}),e.jsx(Z,{variant:"text",width:180,height:22})]}),e.jsx(Z,{variant:"rounded",width:160,height:32})]})]})}const tt=({lista:a,hendleDetalhesPedidos:n,hendleBusca:s,visibleCount:l,loading:c})=>{const r=i.useRef(null);i.useEffect(()=>{const x={root:null,rootMargin:"0px 0px 100px 0px",threshold:.1},y=new IntersectionObserver(u=>{const[f]=u;f.isIntersecting&&!c&&a.length<l&&s()},x);return r.current&&y.observe(r.current),()=>{r.current&&y.unobserve(r.current)}},[c,a.length,l,s]);const g=x=>({AGUARDANDO_ENTRADA:"info",AGUARDANDO_SAIDA:"warning",SAIDA_LIBERADA:"success"})[x]||"error",j=x=>new Date(x).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs(I.area_pedidos,{children:[e.jsx(I.pedidos,{children:a.length===0&&c?Array.from({length:4}).map((x,y)=>e.jsx(Qt,{},y)):a.map(x=>e.jsxs("div",{children:[e.jsx(I.dataPedido,{children:j(x?.dataCriacao)}),e.jsxs(I.cardItem,{children:[x?.prioridadeAtrasoAtivo&&e.jsx(ft,{icon:e.jsx(gt,{sx:{fontSize:"1rem"}}),severity:"warning",sx:{borderRadius:"8px",mb:1,py:0,fontSize:"0.7rem",border:"1px solid #ffe58f"},children:x.prioridadeAviso||x.prioridadeAtraso}),e.jsxs(I.card_item_header,{children:[e.jsxs(I.numeroDoPedido,{children:[e.jsx("strong",{children:"N: "}),x?.protocolo]}),e.jsxs(I.AreaStatus,{children:[e.jsx(jt,{sx:{height:22,fontSize:"10px",fontWeight:700,textTransform:"uppercase",borderRadius:"6px"},color:g(x?.status),label:x?.status.replace("_"," "),variant:"outlined"}),x?.entrada?.dataEntrada&&e.jsxs(I.data,{children:[e.jsx("strong",{children:"Entrada: "}),j(x?.entrada?.dataEntrada)]})]})]}),e.jsxs(I.card_item_center,{children:[e.jsx(I.Image,{src:x?.visitante?.imagem}),e.jsxs(I.Areaitem,{children:[e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Placa: "}),e.jsx(I.Infor,{children:x?.placaVeiculo})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Nome: "}),e.jsx(I.Infor,{children:x?.nomeCompleto?.trim().toUpperCase().split(" ")[0]})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Tipo de Pessoa: "}),e.jsx(I.Infor,{children:x.tipPessoa.toUpperCase()})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Acesso: "}),e.jsx(I.Infor,{children:x?.visitante?.recorrencia?.nome})]})]}),e.jsx(bt,{onClick:()=>n(x?.id),variant:"outlined",sx:{minWidth:"40px",width:"40px",height:"40px",borderRadius:"10px",borderColor:"#e2e8f0",color:"#64748b",backgroundColor:"#fff","&:hover":{borderColor:"#94a3b8",backgroundColor:"#f8fafc",color:"#0f172a"},"& .lucide":{width:18}},children:e.jsx(Gt,{})})]})]})]},x.id))}),e.jsx(I.sentinela,{ref:r,children:c&&a.length>0&&e.jsxs(I.loadingFooter,{children:[e.jsx(Ye,{size:20,thickness:5,sx:{color:"#9ca3af"}}),e.jsx("span",{children:"Carregando mais registros..."})]})})]})},Zt=()=>{const a=pt(),[n,s]=i.useState([]),l=ce(),[c,r]=i.useState(!1),[g,j]=i.useState(""),x=async()=>{if(a!=null){const u=await be.solitacaoAutorizador(a,g);u?.content!=null&&(s(u?.content),r(!1))}};i.useEffect(()=>{g.trim()===""&&x()},[a,g]);const y=u=>{r(!0),setTimeout(()=>{l(`/portaria/controle/detalhes-registro?order=${u}`,{replace:!1,state:{refresh:Date.now()}}),r(!1)},1e3)};return e.jsxs(he.container,{children:[e.jsxs(he.div,{children:[e.jsx(he.busca,{placeholder:"Buscar por placa, visitante ou protocolo...",type:"search",onChange:u=>j(u.target.value)}),e.jsx(T,{onClick:x,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Pe,{})})]}),e.jsxs(he.container_int,{children:[e.jsx(tt,{lista:n,hendleDetalhesPedidos:y,hendleBusca:function(){throw new Error("Function not implemented.")},visibleCount:0,loading:c}),c&&e.jsx(de,{})]})]})},Yt={container:t.div`
    `},Xt=[{name:"Minha Conta",icon:e.jsx(yt,{fontSize:"small"})},{name:"Portaria Pendentes",permissions:["REGISTRAR_SAIDA"],icon:e.jsx(Ct,{fontSize:"small"})},{name:"Meus Registros",permissions:["VISUALIZAR_REGISTRO"],icon:e.jsx(Ve,{fontSize:"small"})},{name:"Registros Gerais",permissions:["GERENCIAR_REGISTROS"],icon:e.jsx(Ve,{fontSize:"small"})},{name:"Controle De Registros",permissions:["GERENCIAR_REGISTROS"],icon:e.jsx(At,{fontSize:"small"})},{name:"Criar Registro",permissions:["CRIAR_REGISTRO"],icon:e.jsx(It,{fontSize:"small"})},{name:"Sair",icon:e.jsx(Rt,{fontSize:"small"})}],ea=()=>{const a=O(),n=i.useContext(Te),[s,l]=i.useState(!1),[c,r]=i.useState(null),[g,j]=i.useState([]),x=ce(),y=b=>r(b.currentTarget),u=()=>r(null),f=b=>{if(u(),b==="Sair"){xt.logout(),n?.logout(),window.location.href="/verify";return}const A={"Meus Registros":"/portaria/controle/meus-registros","Minha Conta":"/required/profile","Registros Gerais":"/portaria/active/gerais","Portaria Pendentes":"/portaria/active/pendentes","Controle De Registros":"/portaria/configuracao","Criar Registro":"/portaria/controle/registro-portaria-cd"};A[b]&&(l(!0),setTimeout(()=>{x(A[b]),l(!1)},800))};return i.useEffect(()=>{const A=O()?.permissoes||[],S=Xt.filter(R=>!R.permissions||R.name==="Sair"||R.name==="Minha Conta"?!0:R.permissions.some(D=>A.includes(D)));j(S)},[n?.user]),e.jsxs(Yt.container,{children:[e.jsxs(J,{sx:{flexGrow:0},children:[e.jsx(le,{title:"Menu do Usuário",children:e.jsx(T,{onClick:y,sx:{p:"2px",border:"2px solid #e2e8f0"},children:e.jsx(ee,{src:n?.usuario?.avatar||"/static/images/avatar/2.jpg",alt:a?.nome,sx:{width:38,height:38}})})}),e.jsxs(vt,{sx:{mt:"auto"},anchorEl:c,open:!!c,onClose:u,PaperProps:{elevation:5,sx:{minWidth:240,borderRadius:"12px",padding:"8px","& .MuiMenuItem-root":{borderRadius:"8px",margin:"2px 0",transition:"0.2s"}}},children:[e.jsxs(J,{sx:{px:2,py:1.5},children:[e.jsx(k,{variant:"subtitle2",sx:{fontWeight:700},children:a?.nome||"Usuário"}),e.jsx(k,{variant:"caption",color:"text.secondary",children:"Sistema de Portaria"})]}),e.jsx(wt,{sx:{my:1}}),g.map(b=>e.jsxs(Xe,{onClick:()=>f(b.name),children:[e.jsx(St,{sx:{color:b.name==="Sair"?"#d32f2f":"#6366f1"},children:b.icon}),e.jsx(k,{sx:{fontSize:"0.9rem",fontWeight:500,color:b.name==="Sair"?"#d32f2f":"inherit"},children:b.name})]},b.name))]})]}),s&&e.jsx(de,{})]})},Y={areaHeader:t.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
  `,container:t.header`
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
  `,areaLogo:t.div`
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
  `,logo:t.img`
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
  `,busca:t.input`
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
  `,perfil:t.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.1); /* Divisor sutil */
  `,nomeUsuario:t.div`
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
  `,categoriasItens:t.div`
    padding: 8px 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--cor-principal);
    border-top: 1px solid rgba(0,0,0,0.05);
  `},ta=({ativoBusca:a,filial:n})=>{const{setBusca:s,setFilial:l}=i.useContext(Te),c=O(),r=ce(),[g,j]=i.useState(localStorage.getItem("@App:filial")||n||""),[x,y]=i.useState([]),u=c?.permissoes?.includes("GERENCIAR_USUARIOS"),f=()=>{r("/")},b=S=>{const R=S.target.value;j(R),l(R),localStorage.setItem("@App:filial",R)},A=i.useCallback(async()=>{try{const S=await De.FiliaisUsuario(c?.id);S?.acess&&y(S?.acess)}catch{X("Erro ao carregar filiais","error")}},[]);return i.useEffect(()=>{A()},[]),e.jsx(Y.areaHeader,{children:e.jsxs(Y.container,{children:[e.jsxs(Y.areaLogo,{children:[e.jsx(Y.logo,{src:_t,onClick:f}),u?e.jsxs("select",{value:g,onChange:b,style:{background:"transparent",border:"1px solid #ddd",color:"#333",padding:"4px 8px",borderRadius:"6px",marginLeft:"10px",fontSize:"14px",fontWeight:"bold",cursor:"pointer"},children:[e.jsx("option",{value:"",children:"Selecionar CD"}),x.map(S=>e.jsx("option",{value:S.filial,children:S.nome},S.id))]}):e.jsxs("span",{onClick:f,style:{cursor:"pointer"},children:["CD - ",g||n]})]}),a&&e.jsx(Y.busca,{placeholder:"Buscar por placa, visitante ou protocolo...",type:"search",onChange:S=>s(S.target.value)}),ht()&&e.jsxs(Y.perfil,{children:[c&&c?.nome&&e.jsxs(Y.nomeUsuario,{children:[e.jsx("strong",{children:"Olá"})," ",c?.nome.split(" ")[0]]}),e.jsx(ea,{})]})]})})},Ae={container:t.main`
    position: relative;
    `,Container_int:t.main`
      @media screen and (max-width: 560px) {
        padding: 0;
      }
     `,PlaceholderContainer:t.div`
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
`},Ge=()=>{const a=O(),n=location.pathname==="/portaria/active/pendentes",s=Ke();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Ae.container,{children:[e.jsx(ta,{filial:a?.filial,ativoBusca:s&&n}),e.jsx(Ae.Container_int,{children:s?e.jsx(Qe,{}):e.jsxs(Ae.PlaceholderContainer,{children:[e.jsx("div",{className:"emoji",children:"🛡️"}),e.jsx("h2",{className:"title",children:"Bem-vindo à Portaria!"}),e.jsx("p",{className:"description",children:"Use o menu à esquerda para navegar entre as opções, visualizar registros, e gerenciar usuários."})]})})]})},U={container:t.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 40px;
        background-color: #f8fafc;
        width: 100%;
        box-sizing: border-box;

        @media (max-width: 768px) {
            padding: 16px;
            gap: 15px;
        }
    `,titulo:t.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        letter-spacing: -0.025em;
        margin: 0;
    `,FormSub:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background: #ffffff;
        padding: 20px 0;
        border-radius: 12px;
    `,CamposInput:t.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px;
        background: #f1f5f9;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        & > * {
            @media (max-width: 480px) {
                flex: 1 1 100%;
            }
        }
    `,Chip:t.div`
        display: inline-flex;
        align-items: center;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        background-color: ${({color:a})=>a+"15"}; 
        color: ${({color:a})=>a};
        border: 1px solid ${({color:a})=>a+"30"};
        white-space: nowrap;
    `,TableContainer:t.div`
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: #fff;

        /* Inverte o container para o scroll ir para o topo */
        transform: rotateX(180deg); 
        
        /* Personalização da barra para mobile/web */
        &::-webkit-scrollbar {
            height: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
    `,Table:t.table`
        width: 100%;
        border-collapse: collapse;
        font-family: "Inter", sans-serif;
        min-width: 800px; 

        /* Inverte o conteúdo da tabela de volta ao normal */
        transform: rotateX(180deg); 

        thead {
            background-color: #f8fafc;
        }

        th {
            padding: 14px 16px;
            font-size: 0.7rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            border-bottom: 2px solid #e2e8f0;
            text-align: left;
        }

        td {
            padding: 12px 16px;
            font-size: 0.85rem;
            color: #334155;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
            white-space: nowrap; 
        }

        tbody tr:hover {
            background-color: #f8fafc;
        }
    `,loadingRow:t.tr`
        td {
            padding: 40px 0;
            text-align: center;
            border-bottom: none;
        }
    `,loadingContainer:t.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #64748b;
    `,trBTN:t.div`
        display: flex;
        justify-content: flex-end;
        gap: 4px;
    `,visitante:t.div`
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #e2e8f0;
        h5 { margin: 0; color: #1e293b; font-size: 1.1rem; }
    `,imgemVisitante:t.img`
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #6366f1;
    `,imagemArea:t.div`
        display: flex;
        gap: 20px;
        padding: 20px;
        overflow-y: auto;
        max-height: 500px;
        @media (max-width: 768px) {
            flex-direction: column;
            max-height: 70vh;
        }
    `,divArea:t.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: #f8fafc;
        padding: 15px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        position: relative;
    `,tituloLabel:t.label`
        font-size: 0.875rem;
        font-weight: 600;
        color: #475569;
    `,imgem:t.img`
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
        @media (max-width: 768px) {
            height: auto;
        }
    `,btnDownload:t.div`
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
    `,erro:t.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
    `,semItens:t.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #94a3b8;
    `,iconSemItens:t(Le)`
        font-size: 64px;
        color: #cbd5e1;
    `,Options:t.option``,Select:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,label:t.label`
        font-size: 0.9rem;
        font-weight: 500;
        color: #475569;
        margin-bottom: 4px;
    `,Campos:t.input`
        width: 100%;
        height: 38px;
        border-radius: 8px;
        border: 1px solid ${({hasError:a})=>a?"#ef4444":"#e2e8f0"};
        padding: 8px 12px;
        box-sizing: border-box;
        &:focus {
            outline: none;
            border-color: #6366f1;
        }
    `},at="http://localhost:8082",aa=async(a,n,s,l,c)=>{const r={sort:"status,asc"};return n&&(r.filial=n),l!=null&&(r.ativo=l),s&&(r.busca=s),c!=null&&(r.page=c),r.size=100,(await M.get(at+a,{params:r})).data},oa=async(a,n,s)=>{const l=new FormData;return s!=null&&l.append("file",s),l.append("data",JSON.stringify(n)),(await M.post(at+a,l,{headers:{"Content-Type":"multipart/form-data"}})).data},_e={findAll:async(a,n,s,l)=>await aa("/portaria/v1/findAll",a,n,s,l),RegistroFactory:async(a,n)=>await oa("/portaria/v1/factory",a,n)},$e={container:t.div`
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
    `,container_left:t.section`
   display: flex;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `},ot=({children:a,cancelar:n})=>{const s=l=>{l?.stopPropagation()};return e.jsx($e.container,{onClick:n,children:e.jsx($e.container_left,{onClick:s,children:a})})};function qe({value:a,onChange:n,list:s,titulo:l}){const c=r=>{n(r.target.value)};return e.jsx("div",{children:e.jsxs(Et,{sx:{m:0,minWidth:120},children:[e.jsx(kt,{id:"demo-simple-select-standard-label",sx:{fontSize:13,top:-10},children:l}),e.jsx(Tt,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:a,onChange:c,sx:{height:30,fontSize:13,".MuiSelect-select":{paddingTop:4,paddingBottom:4}},children:s.map((r,g)=>e.jsx(Xe,{value:r.value!==void 0?r.value:r.filial,children:r?.nome},g))})]})})}const sa=[{nome:"Aberto",value:!0},{nome:"Fechado",value:!1}],We=()=>{const[a,n]=i.useState([]),[s,l]=i.useState(!1),[c,r]=i.useState(""),g=ce(),[j,x]=i.useState(""),[y,u]=i.useState(""),[f,b]=i.useState(!0),A=O(),[S,R]=i.useState(!1),[D,F]=i.useState(!1),[P,E]=i.useState(null),[C,v]=i.useState(A?.filial),[m,$]=i.useState(0),[_,V]=i.useState(),B=async p=>{F(!0);const q=await _e.findAll(C,j,P,p);q&&setTimeout(()=>{F(!1),n(q.content),$(q?.totalPages)},1e3)};i.useEffect(()=>{j.trim()===""&&B()},[j]);const[te,L]=i.useState([]),h=async()=>{const p=await De.FiliaisUsuario(A?.id);p?.acess&&L(p.acess)};i.useEffect(()=>{h()},[]);const N=p=>{u(`Deseja realmente deletar o item ${p.id}`),l(!0),r(p.id)},ae=async()=>{await ge.deletarPortaria(c,A?.id),u(`${c} Deletado com sucesso`),b(!1),await B(),l(!1)},ne=p=>{R(!0),V(p)},oe=(p,q)=>{const pe=q-1;B(pe)},W=async(p,q)=>{const Se=await(await fetch(p)).blob(),K=window.URL.createObjectURL(Se),Q=document.createElement("a");Q.href=K,Q.download=q,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),window.URL.revokeObjectURL(K)},ve=p=>{switch(p){case"AGUARDANDO_ENTRADA":return"#3b82f6";case"AGUARDANDO_SAIDA":return"#eab308";case"SAIDA_LIBERADA":return"#22c55e";default:return"#ef4444"}},we=p=>{F(!0),setTimeout(()=>{g(`/portaria/controle/detalhes-registro?order=${p}`,{replace:!1,state:{refresh:Date.now()}})},2e3)};return e.jsxs(U.container,{children:[e.jsx(xe,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:3},children:e.jsx(k,{variant:"h4",sx:{fontWeight:700,color:"#1e293b"},children:"Histórico Portaria"})}),e.jsx(Dt,{elevation:0,sx:{p:2,borderRadius:"16px",border:"1px solid #e2e8f0"},children:e.jsxs(U.FormSub,{children:[e.jsxs(J,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap",bgcolor:"#f8fafc",p:2,borderRadius:"12px"},children:[e.jsx(ze,{variant:"outlined",size:"small",placeholder:"Pesquisar por nome ou placa...",value:j,onChange:p=>x(p.target.value),sx:{bgcolor:"white",minWidth:250}}),e.jsx(qe,{value:P,onChange:E,titulo:"Status",list:sa}),e.jsx(qe,{value:C,onChange:v,titulo:"Filial",list:te}),e.jsx(le,{title:"Pesquisar",children:e.jsx(T,{onClick:()=>B(),sx:{bgcolor:"#6366f1",color:"white","&:hover":{bgcolor:"#4f46e5"}},children:e.jsx(Pe,{})})}),e.jsx(J,{sx:{flexGrow:1}}),e.jsx(Fe,{totalPage:m,handleNextPage:oe})]}),e.jsx(U.TableContainer,{children:e.jsxs(U.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Visitante"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Tipo / Placa"}),e.jsx("th",{children:"Ocupação Liberada / Tipo de Acesso"}),e.jsx("th",{children:"Local"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Entrada"}),e.jsx("th",{children:"Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saida"}),e.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),e.jsx("tbody",{children:D?e.jsx(U.loadingRow,{children:e.jsx("td",{colSpan:11,children:e.jsxs(U.loadingContainer,{children:[e.jsx(Ye,{size:28}),e.jsx(k,{variant:"body2",children:"Carregando registros..."})]})})}):a.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsxs(U.semItens,{children:[e.jsx(U.iconSemItens,{}),e.jsx(k,{variant:"h6",color:"textSecondary",children:"Nenhum registro encontrado"}),e.jsx(k,{variant:"body2",color:"textSecondary",children:"Tente ajustar seus filtros de busca."})]})})}):a.map((p,q)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(xe,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(ee,{sx:{width:40,height:40,border:"2px solid #e2e8f0"},src:p?.visitante?.imagem||"/static/images/avatar/2.jpg"}),e.jsxs(J,{children:[e.jsx(k,{variant:"body2",sx:{fontWeight:600},children:p?.nomeCompleto||"---"}),e.jsx(k,{variant:"caption",color:"textSecondary",children:p?.filialSocitado})]})]})}),e.jsx("td",{children:e.jsxs(k,{variant:"caption",sx:{fontFamily:"monospace",fontWeight:700},children:["#",p?.protocolo||"PENDENTE"]})}),e.jsxs("td",{children:[e.jsx(k,{variant:"body2",children:p?.visitante?.tipoPessoa||"Visitante"}),e.jsx(k,{variant:"caption",sx:{bgcolor:"#f1f5f9",px:.5,borderRadius:1},children:p?.placaVeiculo||"Sem Veículo"})]}),e.jsxs("td",{children:[e.jsx(k,{variant:"body2",children:p?.ocupacaoLiberada||"Visitante"}),e.jsx(k,{variant:"caption",sx:{bgcolor:"#f1f5f9",px:.5,borderRadius:1},children:p?.visitante?.recorrencia?.nome||"Sem Recorrencia"})]}),e.jsx("td",{children:p?.bloco}),e.jsx("td",{children:e.jsx(U.Chip,{color:ve(p?.status),children:p?.status.replace("_"," ")})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",children:p?.entrada?.dataEntrada?new Date(p.entrada.dataEntrada).toLocaleString():"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",children:p?.saida?.dataSaida?new Date(p.saida.dataSaida).toLocaleString():"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",sx:{fontWeight:500},children:p?.entrada?.nomeFiscal||"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",sx:{fontWeight:500},children:p?.saida?.nomeFiscal||"---"})}),e.jsx("td",{children:e.jsxs(U.trBTN,{children:[e.jsx(le,{title:"Visualizar Detalhes",children:e.jsx(T,{size:"small",onClick:()=>we(p.id),children:e.jsx(Pt,{fontSize:"small"})})}),p?.entrada?.imagem&&e.jsx(le,{title:"Ver Fotos",children:e.jsx(T,{size:"small",onClick:()=>ne(p),color:"primary",children:e.jsx(et,{fontSize:"small"})})}),e.jsx(le,{title:"Excluir",children:e.jsx(T,{size:"small",onClick:()=>N(p),color:"error",children:e.jsx(fe,{fontSize:"small"})})})]})})]},q))})]})})]})}),S&&e.jsx(ot,{cancelar:()=>R(!1),children:e.jsxs(J,{sx:{p:1},children:[e.jsxs(xe,{direction:"row",spacing:2,alignItems:"center",sx:{mb:3},children:[e.jsx(ee,{src:_?.visitante?.imagem,sx:{width:60,height:60}}),e.jsxs(k,{variant:"h6",children:["Evidências: ",_?.visitante.nomeCompleto]})]}),e.jsx(U.imagemArea,{children:["entrada","saida"].map(p=>_?.[p]?.imagem&&e.jsxs(U.divArea,{children:[e.jsxs(xe,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:1},children:[e.jsx(k,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:p}),e.jsx(T,{size:"small",onClick:()=>W(_?.[p]?.imagem,`Foto_${p}`),children:e.jsx(Ee,{fontSize:"small",color:"primary"})})]}),e.jsx(U.imgem,{src:_?.[p]?.imagem,alt:`Imagem ${p}`})]},p))})]})}),s&&e.jsx(Oe,{handleCancel:()=>l(!1),handleConfirm:ae,message:y,ativoBtn:f})]})},o={container_principal:t.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  `,container:t.div`
    padding: 20px 1px;

  `,area_pedidos:t.section`
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
  `,titulo:t.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,pedidos:t.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,FormSub:t.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    `,label:t.label`
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
    `,CamposInput:t.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:a})=>a?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,labelCheck:t.label`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin:5px 0 ;
    `,checkbox:t.input`
    height: 15px;
    padding: 5px;
    display: flex;
    gap: 10px;
    width: 15px;
    `,SelectItens:t.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#ccc"};
    
    `,TextArea:t.textarea`
    min-height:80px; 
    resize:vertical;
    width: 100%;
    padding: 10px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#ccc"};
    
    `,Options:t.option`
    height: 100vh;
    `,Erros:t.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 13px;
      margin: 0 0 10px;
     
    
    `,BtnLogin:t.button`
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
    
    `,leftArea:t.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `,btnDivider:t.div`
      display: flex;
      width: 100%;
      align-items: center;
    `,CardCentro:t.div`
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
  `,StatusContainer:t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `,AreaItemJust:t.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3px;
  `,AreaItemJustCenter:t.div`
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
  `,AreaItemJustRigth:t.div`
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
  `,semItens:t.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,iconSemItens:t(Le)`
      font-size: 60px;
      color: #999;
    `,StatusItem:t.div`
    flex: 1;
    text-align: center;
    color: ${a=>a.active?"#fff":"#999"};
    background: ${a=>a.active?"#4caf50":"#e0e0e0"};
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    font-size: 12px;
  `,Button:t.button`
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
  `,ItemImage:t.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;

    @media screen and (min-width: 560px) {
      width: 100px;
      height: 100px;
    }
  `,ItemDetails:t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
  `,SummaryRow:t.div`
      display: flex;
      justify-content: space-between;
  
    `,heanderPedido:t.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      gap: 10px;
    `,tituloPedido:t.h4`
      font-size: 14px;
      color: #1e88e5;
      padding: 2px;
    `,p:t.p`
      font-weight: 600;
      font-size: 14px;
    `,status:t.div`
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--cor-texto-titulo);
    `,Image:t.img`
      width: 100%;
      height: 200px;
      border-radius: 5%;
      object-fit: cover;
      object-position: center top;
  
      @media screen and (min-width: 560px) {
        width: 150px;
        height: 150px;
      }
    `,description:t.div`
      width: 100%;
      word-wrap: break-word;
    `,Label:t.span`
      font-size: 0.65rem;
      font-weight: bold;
      color: #3b004f;
      font-family: "Inter", sans-serif;
      letter-spacing: 0.3px;
  
      @media screen and (min-width: 560px) {
        font-size: 0.8rem;
      }
    `,AreaBuscaPlaca:t.div`
       flex-direction: column;
      margin:5em auto;
      padding: 30px 20px;
       width: 100%;
      font-size: 16px;
      border-radius: 10px;
      color: #134c72;
               box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      @media screen and (min-width: 600px){
     width: auto;
    }
      
      gap: 10px;
    `,busca:t.div`
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
     
    `,LabelSubtitulo:t.span`
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--cor-texto-campos);
      word-wrap: break-word;
      font-size: 0.55rem;
  
      @media screen and (min-width: 560px) {
        font-size: 0.75rem;
      }
    `,edit:t.div`
      margin: 0;
    `},Be="http://localhost:8082",ia=async(a,n,s)=>{const l=new URLSearchParams;return n!=null&&l.append("visitanteId",n),s!=null&&s.trim()!==""&&l.append("nome",s),(await M.get(Be+a,{params:Object.fromEntries(l)})).data},na=async a=>{const n=new URLSearchParams;return n.append("size",1e3),(await M.get(Be+a,{params:Object.fromEntries(n)})).data},ra=async(a,n,s,l)=>{try{const c=new URLSearchParams;return c.append("visitanteId",n),c.append("usuarioId",s),c.append("type",l),(await M.delete(Be+a,{params:Object.fromEntries(c)})).data}catch(c){throw c}},Ne={visitante:async(a,n)=>await ia("/visitante/placa",a,n),FiltroVisitante:async()=>await na("/visitante/filtro"),deletarVisitante:async(a,n,s)=>await ra("/visitante/delete/registro",a,n,s)},st="http://localhost:8082",la=async a=>(await M.get(st+a)).data,ca=async a=>(await M.get(st+a)).data,ke={lista:async()=>await la("/portaria/tipo_pessoa/lista"),recorrecia:async()=>await ca("/recorrencia")},ue=t.span`
  color: red;
  `,da=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],pa=({visitante:a,tipo:n})=>{const{register:s,handleSubmit:l,formState:{errors:c},reset:r,watch:g}=Ze({defaultValues:{globalAtivo:"false"}}),[j,x]=i.useState([]),u=O()?.permissoes||[],[f,b]=i.useState([]),A=u.includes("GERENCIAR_USUARIOS"),S=g("tipoAcesso"),[R,D]=i.useState(!1),F=async m=>{try{D(!0);const $=O();m.descricao||delete m.descricao,m.criadorId=$?.id,S?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete m.dataAcesso,m.typeMethod="VISITANTE",m.visitanteId=a?.id,S==null&&(m.tipoAcesso=a.categoriaAcesso);const V=await _e.RegistroFactory(m);V&&(D(!1),X(V.msg,"success"),r())}finally{D(!1)}},P=()=>{n(),r()},E=(m,$)=>{m.key},C=async()=>{const m=await ke.recorrecia();m.recorrencia&&x(m.recorrencia)},v=async()=>{const m=await be.blocos();m.blocos&&b(m?.blocos)};return i.useEffect(()=>{C(),v()},[]),e.jsx(e.Fragment,{children:e.jsx(o.container,{children:e.jsxs(o.area_pedidos,{children:[e.jsxs(o.CardCentro,{children:[e.jsx(o.Image,{src:a?.imagem}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Nome Completo:"}),e.jsx(o.LabelSubtitulo,{children:a?.nomeCompleto})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Tipo de Pessoa:"}),e.jsx(o.LabelSubtitulo,{children:a?.tipoPessoa})]})]}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Categoria de Acesso:"}),e.jsx(o.LabelSubtitulo,{children:a?.categoriaAcesso})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"NumeroTelefone:"}),e.jsx(o.LabelSubtitulo,{children:a?.numeroTelefone})]})]})]}),e.jsxs(o.pedidos,{children:[e.jsx(o.FormSub,{children:e.jsxs(o.Select,{children:[e.jsx(o.leftArea,{children:e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(ue,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),f.flatMap(m=>e.jsx(o.Options,{value:m?.nome.toUpperCase(),children:m?.nome.toUpperCase()}))]}),c.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:c?.bloco?.message})})]})}),e.jsxs(o.leftArea,{children:[A&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(ue,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),j.map(m=>e.jsx(o.Options,{value:m?.nome.toLowerCase(),children:m?.nome}))]}),c.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.tipoAcesso.message})})]}),"                                    ",A&&S?.toUpperCase()==="RECORRENTE"&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...s("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...s("globalAtivo")}),e.jsx("small",{children:"Não"})]})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(ue,{children:"*"})]}),e.jsxs(o.SelectItens,{...s("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),da.flatMap(m=>e.jsx(o.Options,{value:m.nome,children:m.nome},m.id))]}),c.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.ocupacaoLiberada.message})})]})]}),S?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(ue,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!c.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...s("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:m=>E(m)}),c.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS"}),e.jsx(o.TextArea,{...s("descricao")})]})]})}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:R,onClick:l(F),children:"Enviar Pedido"}),e.jsx(je,{click:P,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]})})})},xa=({setValue:a,value:n,onSelectData:s,handleBusca:l})=>{const[c,r]=i.useState([]),[g,j]=i.useState("");i.useEffect(()=>{(async()=>{const f=await Ne.FiltroVisitante();f?.content&&r(f.content)})()},[]);const x=u=>[...u].sort(()=>Math.random()-.5).slice(0,3),y=i.useMemo(()=>x(c),[c]);return e.jsx(zt,{freeSolo:!0,id:"country-select-demo",sx:{width:{xs:"100%",sm:400,md:500,lg:560}},options:n?c:y,inputValue:g||n||"",onInputChange:(u,f,b)=>{b=="input"&&(a(f),j(""),s(null))},onChange:(u,f)=>{if(typeof f=="object"&&f){j(f.nomeCompleto),s({id:f.id});return}a(f||""),s(null)},getOptionLabel:u=>typeof u=="string"?u:u.nomeCompleto,renderOption:(u,f)=>e.jsxs(J,{component:"li",...u,children:[e.jsx("img",{loading:"lazy",width:"20",src:f.imagem,alt:"",style:{marginRight:8}}),f.nomeCompleto]}),renderInput:u=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx(ze,{style:{border:0},...u,onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),l())},label:"Busque um Visitante ou Digite um nome para cadastrar",autoComplete:"new-password"}),e.jsx("button",{style:{width:50},onClick:l,children:"🔍"})]})})},ha=ut`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,me={FilterArea:t.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */  
    margin:10px 0;
    @media (min-width: 768px) {
      width: auto;
     
    }
  `,SelectGroup:t.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:t.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:a})=>a?`${ha} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:t.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:t.select`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    width: 100%; /* Full width no mobile */
    font-size: 14px;
    outline: none;

    @media (min-width: 768px) {
      min-width: 250px;
      width: auto;
    }
  `,Container:t.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,AddButton:t.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px -1px rgba(109, 40, 217, 0.3);
    white-space: nowrap;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px -1px rgba(109, 40, 217, 0.4);
      filter: brightness(1.1);
    }

    &:active {
      transform: translateY(0);
    }

    svg {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      width: 100%;
      order: -1; /* No mobile, ele aparece no topo */
    }
  `};function ua({listaFiliais:a,carregarDadosLogistico:n}){return e.jsx(me.FilterArea,{style:{gap:"15px",flexWrap:"wrap"},children:e.jsxs(me.SelectGroup,{children:[e.jsx(me.Label,{children:"Portaria Filial"}),e.jsxs(me.Select,{onChange:s=>n(s.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma Filial"}),a.map((s,l)=>e.jsxs("option",{value:s?.filial,children:[s?.filial," - ",s?.nome]},l))]})]})})}const H=t.span`
  color: red;
  `,ma=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],He=()=>{const{register:a,handleSubmit:n,formState:{errors:s},reset:l,watch:c,setValue:r}=Ze({defaultValues:{globalAtivo:"false",filialSolicitado:""}}),[g,j]=i.useState(null),[x,y]=i.useState(),[u,f]=i.useState(null),[b,A]=i.useState(0),[S,R]=i.useState([]),[D,F]=i.useState([]),[P,E]=i.useState([]),[C,v]=i.useState("BUSCA"),[m,$]=i.useState(null),_=O(),[V,B]=i.useState(!1),te=_?.permissoes||[],[L,h]=i.useState([]),[N,ae]=i.useState([]),ne=te.includes("GERENCIAR_USUARIOS"),oe=async()=>{const d=await Nt.lista();d?.filial&&E(d?.filial)},W=c("tipoAcesso"),ve=d=>{f(d)},[we,p]=i.useState(!1),q=async d=>{try{p(!0);const ye=O();if(d.descricao||delete d.descricao,u!=null){if(d.criadorId=ye?.id,W?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete d.dataAcesso,d.typeMethod="NAO_VISITANTE",!d.filialSolicitado){X("Selecione a filial da Solicitação","error");return}const Ue=await _e.RegistroFactory(d,u);Ue&&(p(!1),X(Ue.msg,"success"),l(),A(ct=>ct+1))}else p(!1),X("Selecione uma imagem","error")}finally{p(!1)}},pe=()=>{A(d=>d+1),v("BUSCA"),B(!1),l()},Se=i.useRef(null),K=(d,ye)=>{d.key==="Enter"&&ye?.current?.focus()},Q=async()=>{const d=await ke.lista();d?.tipoPessoa&&R(d?.tipoPessoa)},it=async()=>{try{if(B(!0),!m&&!g){v("BUSCA"),B(!1);return}const d=await Ne.visitante(g?.id,m);d?(y(d),setTimeout(()=>{v("SLIDER"),B(!1)},2e3)):setTimeout(()=>{B(!1),r("nomeCompleto",m),v("CADASTRO")},2e3)}finally{setTimeout(()=>{B(!1)},2e3)}},nt=async()=>{const d=await ke.recorrecia();d.recorrencia&&F(d.recorrencia)},rt=async()=>{const d=await be.blocos();d.blocos&&h(d?.blocos)};i.useEffect(()=>{Q(),nt(),oe(),rt()},[]);const lt=i.useCallback(async()=>{try{const d=await De.FiliaisUsuario(_?.id);d?.acess&&ae(d.acess)}catch{X("Erro ao carregar filiais","error")}},[]);return i.useEffect(()=>{lt()},[]),e.jsx(i.Fragment,{children:e.jsxs(o.container_principal,{children:[C==="BUSCA"&&e.jsxs(o.AreaBuscaPlaca,{style:{display:"flex"},children:[e.jsx(Me,{link:!0,titulo:"info",msg:"Cadastro de visitante!"}),e.jsx(o.busca,{children:e.jsx(xa,{handleBusca:it,value:m,setValue:$,onSelectData:j})}),m==""&&e.jsx(Me,{titulo:"success",msg:"Informe a placa do carro do visitante para continuar!"})]}),C==="SLIDER"&&e.jsx(pa,{visitante:{id:x.id,nomeCompleto:x?.nomeCompleto,imagem:x?.imagem,tipoPessoa:x?.tipoPessoa,categoriaAcesso:x?.recorrencia?.nome,placaVeiculo:x?.placaVeiculo,numeroTelefone:x?.numeroTelefone},tipo:()=>v("BUSCA")}),C==="CADASTRO"&&e.jsxs(o.container,{children:[e.jsx(o.titulo,{children:"Novo Pedido de Acesso"}),e.jsxs(o.pedidos,{children:[e.jsxs(o.FormSub,{children:[e.jsxs(o.CamposInput,{children:[e.jsx(ua,{listaFiliais:N,carregarDadosLogistico:d=>{r("filialSolicitado",d)}}),e.jsxs(o.label,{children:["Placa ",e.jsx(H,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.placaVeiculo,type:"text",autoComplete:"current-password",placeholder:"Placa do Veiculo",...a("placaVeiculo",{required:"Placa E obrigatorio",pattern:{value:/^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,message:"Formato de placa inválido. Ex: ABC1234 ou ABC1D23"}}),onKeyDown:d=>{K(d,Se)}}),e.jsx(o.Erros,{children:s.placaVeiculo&&e.jsx("p",{children:s.placaVeiculo.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Nome ",e.jsx(H,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.nomeCompleto,placeholder:"Nome Completo",type:"text",autoComplete:"current-password",...a("nomeCompleto",{required:"Nome e obrigatória",minLength:{value:10,message:"Mínimo 10 caracteres"}}),onKeyDown:d=>K(d)}),e.jsx(o.Erros,{children:s.nomeCompleto&&e.jsx("p",{children:s.nomeCompleto.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Numero de Telefone ",e.jsx(H,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.nomeCompleto,placeholder:"(99) 99999-9999",type:"tel",autoComplete:"current-password",...a("numeroTelefone",{required:"O telefone é obrigatório.",pattern:{value:/^(\+?55\s?)?(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/,message:"Formato de telefone inválido. Ex: (98) 9809-9999 ou 98980999977"}}),onKeyDown:d=>K(d)}),e.jsx(o.Erros,{children:s.numeroTelefone&&e.jsx("p",{children:s.numeroTelefone.message})})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Filial Visita",e.jsx(H,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("filial",{required:"Selecione uma filial"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),P.flatMap(d=>e.jsxs(o.Options,{value:d?.numeroFilial,children:[d?.numeroFilial," - ",d?.nome]},d?.id))]}),s.filial&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.filial.message})})]}),ne&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...a("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...a("globalAtivo")}),e.jsx("small",{children:"Não"})]})]})]}),e.jsxs(o.Select,{children:[e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Tipo de Pessoa ",e.jsx(H,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("tipPessoa",{required:"Selecione o tipo de Pessoa"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),S.flatMap(d=>e.jsx(o.Options,{value:d?.nome,children:d?.nome}))]}),s.tipPessoa&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.tipPessoa.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(H,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),L.flatMap(d=>e.jsx(o.Options,{value:d?.nome.toUpperCase(),children:d?.nome.toUpperCase()}))]}),s.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.bloco.message})})]})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(H,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),D.map(d=>e.jsx(o.Options,{value:d?.nome.toLowerCase(),children:d?.nome}))]}),s.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.tipoAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(H,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),ma.flatMap(d=>e.jsx(o.Options,{value:d.nome,children:d.nome},d.id))]}),s.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.ocupacaoLiberada.message})})]})]}),W?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(H,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!s.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...a("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:d=>K(d)}),s.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:s.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS "}),e.jsx(o.TextArea,{...a("descricao")})]})]}),e.jsxs(o.label,{children:["IMG visitante",e.jsx(H,{children:"*"})]}),e.jsx(Bt,{onFileSelect:ve,titulo:"Clique ou arraste outra imagem para substituir",resetSignal:b}),u&&e.jsxs("p",{children:["Arquivo selecionado: ",u.name]})]}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:we,onClick:n(q),children:"Enviar Pedido"}),e.jsx(je,{click:pe,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]}),V&&e.jsx(de,{})]})})},fa=({permissoes:a})=>{switch(a){case"FISCAL":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});case"AUTORIZADOR":return e.jsx(re,{to:"/portaria/active",replace:!0});case"ADMIN":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});case"GERENTE_PREVENCAO":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});default:return e.jsx(re,{to:"/portaria",replace:!0})}},Je={container:t.div`
    background-color: #f2f2f2;
    padding: 80px 2px;
    min-height: 100vh;
  `,container_int:t.div`
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

  `};function ga(){const a=O(),[n,s]=i.useState(20),[l,c]=i.useState(0),r=i.useContext(Te),[g,j]=i.useState([]),[x,y]=i.useState(!1),[u,f]=i.useState(""),b=async v=>{if(x)return;const m=localStorage.getItem("@App:filial"),$=m&&m!=="undefined"?m:a?.filial;if(!$){console.warn("Filial inválida, busca cancelada");return}y(!0);const _=v??n;try{const V=await be.Solicitacoes($,r?.busca,_,u);V.content&&(j(V.content),c(V.totalElements))}finally{y(!1)}},A=i.useRef(null),S=()=>{if(!x&&g.length<l){const v=n+5;s(v),b(v)}};i.useEffect(()=>{A.current&&(!r?.busca||r.busca.trim()==="")&&f("aguardando entrada"),A.current=r?.busca??null,j([]),s(20),b(20)},[a?.filial,u,r?.busca,r?.filial]);const R=ce(),[D,F]=i.useState(!1),P=v=>{F(!0),setTimeout(()=>{R(`/portaria/controle/detalhes-registro?order=${v}`)},500)},E=()=>{f("aguardando entrada")},C=()=>{j([]),f("aguardando saida"),s(10)};return e.jsxs(Je.container,{children:[e.jsxs(Je.container_int,{children:[e.jsx(je,{titulo:"Entrada",click:E,isvalid:u==="aguardando entrada"}),e.jsx(je,{titulo:"Saida",click:C,isvalid:u=="aguardando saida",children:" "})]}),e.jsx(tt,{lista:g,hendleDetalhesPedidos:P,hendleBusca:S,visibleCount:l,loading:x}),D&&e.jsx(de,{})]})}const se={container:t.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 56px;
        background-color: #f8fafc;
        width: 100%;

        @media (max-width: 768px) {
            padding: 15px;
        }
    `,FormSub:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    `,paginator:t.div`
        width: 100%;
        display: flex;
        justify-content: space-between; // Busca na esquerda, Paginador na direita
        align-items: center;
        flex-wrap: wrap; // Quebra linha em telas pequenas (mobile)
        gap: 15px;
        margin-bottom: 10px;
    `,InputWrapper:t.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1; // Faz a busca ocupar o espaço disponível
        max-width: 400px; // Limita o tamanho para não ficar gigante
    `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
        width: 100%; // Ocupa 100% do Wrapper
        height: 40px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid ${({hasError:a})=>a?"#ef4444":"#e2e8f0"};
        padding: 0 16px;
        font-size: 0.875rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        &::placeholder {
            color: #94a3b8;
        }
    `,Erros:t.span`
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 4px;
    `,titulo:t.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 10px;
    `},Ie={TableContainer:t.div`
        width: 100%;
        overflow-x: auto;
        margin-top: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `,Table:t.table`
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
      `,trBTN:t.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `},ja=({lista:a,handleDelete:n,handleBloqueio:s})=>{const c=O()?.permissoes;return e.jsx(Ie.TableContainer,{children:e.jsxs(Ie.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Acesso"}),e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Telefone"}),e.jsx("th",{children:"Data Criação"}),e.jsx("th",{children:"Tipo de Acesso"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.flatMap((r,g)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.ativo?"Permitido":"Bloqueado"}),e.jsx("td",{children:r?.imagem?e.jsx(ee,{sx:{width:40,height:40,objectFit:"contain"},alt:r?.nomeCompleto,src:r?.imagem}):e.jsx(ee,{sx:{width:40,height:40,objectFit:"contain"},alt:r?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsx("td",{children:r?.nomeCompleto}),e.jsx("td",{children:r?.numeroTelefone}),e.jsx("td",{children:new Date(r?.dataCriacao).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),e.jsx("td",{children:r?.recorrencia?.nome}),e.jsx("td",{children:r?.ocupacao}),e.jsx("td",{children:e.jsx(Ie.trBTN,{children:c?.includes("DELETE_GLOBAL")?e.jsxs(e.Fragment,{children:[r.ativo?e.jsx(T,{"aria-label":"LockIcon",onClick:()=>s(r.id,"BLOQUEIO"),sx:{color:"green","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(Lt,{})}):e.jsx(T,{"aria-label":"LockOpenIcon",onClick:()=>s(r.id,"DESBLOQUEIO"),sx:{color:"red","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(Ft,{})}),e.jsx(T,{"aria-label":"deletar",onClick:()=>n(r?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(fe,{})})]}):e.jsx(T,{disabled:!0,children:e.jsx(fe,{})})})})]},g))})]})})},ba=()=>{const[a,n]=i.useState([]),[s,l]=i.useState(""),[c,r]=i.useState(0),[g,j]=i.useState(""),[x,y]=i.useState(""),[u,f]=i.useState(""),b=O(),A=async C=>{const v=await ge.listaVisistante(s,C);v&&(n(v.content),r(v.tatalPages))};i.useEffect(()=>{s.trim()===""&&A()},[s]);const S=(C,v)=>{switch(P(!0),v){case"BLOQUEIO":f("BLOQUEIO");break;case"DESBLOQUEIO":f("DESBLOQUEIO");break}y(`Deseja realmente fazer ${v} o item de ID ${C}`),j(C)},R=C=>{f("DELETE"),j(C),y(`Deseja realmente deletar o item de ID ${C}`),P(!0)},D=async()=>{const C=await Ne.deletarVisitante(g,b?.id,u);X(C?.msg,"success"),P(!1),await A(),P(!1)},[F,P]=i.useState(!1),E=(C,v)=>{const m=v-1;A(m)};return e.jsx(e.Fragment,{children:e.jsxs(se.container,{children:[e.jsx(se.titulo,{children:"Lista de Visitantes"}),e.jsxs(se.FormSub,{children:[e.jsxs(se.paginator,{children:[e.jsx(se.InputWrapper,{children:e.jsx(se.Campos,{placeholder:"🔍 Buscar visitante por nome ou documento...",value:s,onChange:C=>l(C.target.value),onKeyDown:C=>C.key==="Enter"&&A()})}),e.jsx(Fe,{totalPage:c,handleNextPage:E})]}),a.length===0?e.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"Nenhum visitante encontrado."}):e.jsx(ja,{lista:a,handleDelete:R,handleBloqueio:S})]}),F&&e.jsx(Oe,{handleCancel:()=>P(!1),handleConfirm:D,message:x,ativoBtn:F})]})})},Re={container:t.main`
    position: relative;
   height: 100vh;
    `,Container_int:t.main`
      padding:0 26px;
      @media screen and (max-width: 560px) {
        padding: 0;
      }


    
  `,container_int:t.div`
  width: 100%;
     height: 100vh;

  `,placeholder:t.div`
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
  `},va=()=>{const a=Ke();return i.useEffect(()=>{window.scrollTo(0,0)},[a]),e.jsxs(Re.container,{children:[e.jsx(Ut,{}),e.jsx(Re.container_int,{children:a?e.jsx(Qe,{}):e.jsxs(Re.placeholder,{children:[e.jsx("h2",{children:"Bem-vindo às Configurações ⚙️"}),e.jsx("p",{children:"Selecione uma opção no menu para começar."})]})})]})},w={container:t.div`
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
  

    
  `,Chip:t.div`
    padding: 5px;
    border-radius: 5px;
    color:${({color:a})=>a||"blue"} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,titulo:t.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:t.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:t.div`
    display: flex;
    position: relative;
    gap: 10px;
     margin: 5px 10px;
    `,Select:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:a})=>a?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:t.option``,Erros:t.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:t.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:t.table`
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
  `,trBTN:t.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:t.div`
    padding: 10px;
    
  `,imagemArea:t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  `,tituloLabel:t.label`
  font-size: 16px;

  `,imgemVisitante:t.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `,imgem:t.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
  `,divArea:t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  `,btnDownload:t.div`
   position: absolute;
   align-items: center;
   padding: 10px;
   right: 0;
   top: 20px;
    
  `,visitante:t.div`
    display: flex;
    align-items: center;
    gap: 10px;
     margin: 5px 10px;
    `},wa=()=>{const[a,n]=i.useState([]),[s,l]=i.useState(!1),[c,r]=i.useState(""),[g,j]=i.useState(""),[x,y]=i.useState(""),[u,f]=i.useState(!0),b=O(),[A,S]=i.useState(!1),[R,D]=i.useState(!1),[F,P]=i.useState(0),[E,C]=i.useState(),v=async h=>{D(!0);const N=await ge.listHistory(g,h);N&&setTimeout(()=>{D(!1),n(N.content),P(N?.totalPages)},1e3)};i.useEffect(()=>{g.trim()===""&&v()},[g]);const m=h=>{y(`Deseja realmente deletar o item ${h.id}`),l(!0),r(h.id)},$=async()=>{await ge.deletar(c,b?.id),y(`${c} Deletado com sucesso`),f(!1),await v(),l(!1)},_=b?.permissoes,V=h=>{S(!0),C(h)},B=(h,N)=>{const ae=N-1;v(ae)},te=async(h,N)=>{const ne=await(await fetch(h)).blob(),oe=window.URL.createObjectURL(ne),W=document.createElement("a");W.href=oe,W.download=N,document.body.appendChild(W),W.click(),document.body.removeChild(W),window.URL.revokeObjectURL(oe)},L=h=>{switch(h){case"AGUARDANDO_ENTRADA":return"blue";case"AGUARDANDO_SAIDA":return"#787018";case"SAIDA_LIBERADA":return"green";default:return"red"}};return e.jsx(e.Fragment,{children:e.jsxs(w.container,{children:[e.jsx(w.titulo,{children:"Histórico Portaria"}),e.jsxs(w.FormSub,{children:[e.jsxs(w.CamposInput,{children:[e.jsx(ze,{variant:"outlined",size:"small",placeholder:"Buscar...",value:g,onChange:h=>j(h.target.value)}),e.jsx(T,{onClick:v,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Pe,{})}),e.jsx(Fe,{totalPage:F,handleNextPage:B})]}),e.jsx(w.TableContainer,{children:e.jsxs(w.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Nome do Visitante"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{children:"Placa"}),e.jsx("th",{children:"Bloco"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Data Entrada"}),e.jsx("th",{children:"Data Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saída"}),e.jsx("th",{children:"Criador"}),e.jsx("th",{})," "]})}),e.jsxs("tbody",{children:[a.length==0&&e.jsx(w.erro,{children:"Sem dados"}),a.flatMap((h,N)=>e.jsxs("tr",{children:[e.jsx("td",{children:h?.visitante?.imagem?e.jsx(ee,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:h?.visitante?.imagem}):e.jsx(ee,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsxs("td",{children:["#",h?.protocolo||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})]}),e.jsx("td",{children:h?.nomeCompleto||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.visitante?.ocupacao||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.placaVeiculo||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.bloco||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.status.replace("_"," ")||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataEntrada?new Date(h.dataEntrada).toLocaleString("pt-BR"):e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataSaida?new Date(h.dataSaida).toLocaleString("pt-BR"):e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaEntrada||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaSaida||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.criador?.nome||e.jsx(w.Chip,{color:L(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:e.jsxs(w.trBTN,{children:[h?.imagemEntrada?e.jsx(T,{onClick:()=>V(h),children:e.jsx(et,{})}):e.jsx(T,{disabled:!0,children:e.jsx(Ot,{})}),_?.includes("DELETE_GLOBAL")&&e.jsx(T,{"aria-label":"deletar",onClick:()=>m(h),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(fe,{})})]})})]},N))]})]})})]}),s&&e.jsx(Oe,{handleCancel:()=>l(!1),handleConfirm:$,message:x,ativoBtn:u}),A&&e.jsxs(ot,{cancelar:()=>S(!1),children:[e.jsxs(w.visitante,{children:[e.jsx(w.imgemVisitante,{src:E?.visitante?.imagem}),e.jsxs("h5",{children:["Visitante: ",E?.nomeCompleto]})]}),e.jsxs(w.imagemArea,{children:[E?.imagemEntrada&&e.jsxs(w.divArea,{children:[e.jsxs(w.tituloLabel,{children:["Entrada: ",new Date(E?.dataEntrada).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})]}),e.jsx(w.btnDownload,{children:e.jsx(T,{onClick:()=>te(E?.imagemEntrada,"ImagemEntrada"),children:e.jsx(Ee,{sx:{color:"#75affa"}})})}),e.jsx(w.imgem,{src:E?.imagemEntrada,alt:"Imagem entrada"})]}),E?.imagemSaida&&e.jsxs(w.divArea,{children:[e.jsxs(w.tituloLabel,{children:["Saida ",new Date(E?.dataSaida).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})," "]}),e.jsx(w.btnDownload,{children:e.jsx(T,{onClick:()=>te(E?.imagemSaida,"ImagemSaida"),children:e.jsx(Ee,{sx:{color:"#75affa"}})})}),e.jsx(w.imgem,{src:E?.imagemSaida,alt:"Imagem saida"})]})]})]}),R&&e.jsx(de,{})]})})};function Sa(){const a=O();function n(r,g){return i.lazy(()=>Promise.all([r(),new Promise(j=>setTimeout(j,g))]).then(([j])=>j))}const s=n(()=>Ce(()=>import("./controledeAcesso-BagMzBWg.js"),__vite__mapDeps([0,1,2,3,4,5,6])),500),l=n(()=>Ce(()=>import("./registroPortariaAntigo-BdB6Bv-H.js"),__vite__mapDeps([7,1,2,5,6,8,4,9])),500),c=n(()=>Ce(()=>import("./visualizar_registro-DVqFex91.js"),__vite__mapDeps([10,1,2,5,6,4,8,9])),500);return e.jsxs(mt,{children:[e.jsx(z,{index:!0,element:e.jsx(fa,{permissoes:a?.perfil})}),e.jsxs(z,{path:"/active",element:e.jsx(G,{children:e.jsx(Ge,{},Date.now())}),children:[e.jsx(z,{path:"pendentes",element:e.jsx(G,{allowedPermissions:["REGISTRAR_ENTRADA"],children:e.jsx(ga,{},Date.now())})}),e.jsx(z,{path:"gerais",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(We,{},Date.now())})})]}),e.jsxs(z,{path:"/configuracao",element:e.jsx(va,{}),children:[e.jsx(z,{path:"visitantes",element:e.jsx(G,{allowedPermissions:["GERENCIAR_USUARIOS"],children:e.jsx(ba,{},Date.now())})}),e.jsx(z,{path:"historico",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(wa,{},Date.now())})}),e.jsx(z,{path:"geral",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(We,{},Date.now())})}),e.jsx(z,{path:"novo",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(He,{},Date.now())})})]}),e.jsx(z,{path:"/teste",element:e.jsx(Ge,{},Date.now())}),e.jsxs(z,{path:"/controle",element:e.jsx(G,{children:e.jsx(s,{},Date.now())}),children:[e.jsx(z,{path:"registro-portaria-cd",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(He,{},Date.now())})}),e.jsx(z,{path:"registro",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(l,{},Date.now())})}),e.jsx(z,{path:"meus-registros",element:e.jsx(G,{allowedPermissions:["VISUALIZAR_REGISTRO"],children:e.jsx(Zt,{},Date.now())})}),e.jsx(z,{path:"detalhes-registro",element:e.jsx(G,{allowedPermissions:["REGISTRAR_SAIDA","REGISTRAR_ENTRADA","VISUALIZAR_REGISTRO"],children:e.jsx(c,{},Date.now())})})]}),e.jsx(z,{path:"*",element:e.jsx(Mt,{})})]})}const ka=Object.freeze(Object.defineProperty({__proto__:null,default:Sa},Symbol.toStringTag,{value:"Module"}));export{ka as P,o as T,be as c,ke as s};
