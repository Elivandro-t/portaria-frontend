import{r as p,j as e,F as D,l as B,m as q,i as E,n as P,I as _,D as U,b as N,u as G,C as W,v as V,d as Q,w as Y,x as Z,y as J,z as K}from"./mui-ChBlBfgN.js";import{H as X}from"./HeaderSecundario-qKYP8FlG.js";import{H as ee}from"./header.component-D0J9S6Kd.js";import{c as ae,d as r,k as ie,O as te,a as S,b as oe,n as y,m as H,u as $,l as z,R as ne,j as w,N as se}from"./index-CS6IxeNG.js";import{f as I,a as M,b as re}from"./filiasAPi-C54P03xb.js";import le from"./NotFund-aO3XNhde.js";import"./react-OvXVS5lI.js";const de=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ce=ae("loader-circle",de),k={container:r.div`
    display: flex;
    flex-direction: column; 
    height: 100vh;
    background: #f4f6f9;      
    position: relative; /* Garante que o botão se posicione em relação a este container */
    `,Main:r.section`
    padding: 0 5px;
    `,ButtonContainer:r.div`
     position: fixed; /* Troquei para fixed para ele não sumir ao dar scroll */
        bottom: 30px;
        right: 30px;
        z-index: 999;
    `,StyledActionButton:r.button`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Gradiente moderno */
        color: white;
        border: none;
        cursor: pointer;
        font-size: 30px;
        box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1) rotate(90deg);
            box-shadow: 0 6px 20px rgba(37, 117, 252, 0.6);
            filter: brightness(1.1);
        }

        &:active {
            transform: scale(0.9); /* Efeito de clique */
        }
    `},pe=()=>{const i=ie().pathname==="/logistico/dashboard",[o,n]=p.useState(!1),d=()=>{n(!o)};return e.jsxs(k.container,{children:[i?e.jsx(ee,{ativaBtnDrower:!1,subtitulo:"Logistico",handleBtn:d}):e.jsx(X,{titulo:"Material Logistico",ativo:!0}),e.jsx(k.Main,{children:e.jsx(te,{})})]})},F={container:r.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:r.div`
    background-color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
  `,container_int:r.div`
    width: 100%;
    margin-top: 24px;
  `,heander:r.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns: 2fr 1fr 1fr 50px; 
    gap: 15px;
    background: #1e40af; /* Azul Royal */
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 600px) {
        display: none; /* Esconde cabeçalho no mobile para usar labels individuais */
    }
  `,form:r.section`
    display: grid;
      grid-template-columns: 2fr 1fr 1fr 30px;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #f1f5f9;
     border-radius: 8px;
    transition: all 0.2s;
    &:hover {
        border-color: #cbd5e1;
        background: #fcfcfc;
    }

    
    /* Estilo para o botão de adicionar (+) dentro da linha */
    button {
      height:30px;
      width: 30px;
      border-radius: 8px;
      padding: 5px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #cfd0d3;
      }
    }
    @media screen and (max-width: 760px) {
            gap: 5px;
            padding: 5px;

    }

  `,selectCampos:r.select`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:focus {
        border-color: #3b82f6;
    }
  `,btnAdd:r.button`
    margin-top: 24px;
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: #16a34a; /* Verde Sucesso */
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: #15803d;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
  `},xe=["Pallet Madeira","Container Platico","Container Metalico"],L="http://192.168.88.239:8084",fe=async(t,i)=>{const o=new URLSearchParams;return i!=null&&o.append("filial",i),(await S.get(L+t,{params:Object.fromEntries(o)})).data},ue=async(t,i)=>{const o=new URLSearchParams;return i!=null&&o.append("filial",i),(await S.get(L+t,{params:Object.fromEntries(o)})).data},he=async(t,i)=>{const o=await S.post(L+t,i);return o.data?o.data:null},me=async(t,i,o)=>{const n=new URLSearchParams;i!==null&&o!=null&&(n.append("tipo",i),n.append("filial",o));const d=await S.get(L+t,{params:Object.fromEntries(n)});return d.data?d.data:null},R={lista:async t=>await fe("/communit/v1/runmit/lista",t),listaGerais:async t=>await ue("/communit/v1/runmit/lista/geral",t),findItensMaterial:async(t,i)=>await me("/material/v1/findOne",t,i),cadastro:async t=>await he("/communit/v1/runmit/registro",t)},ge=()=>{const t=oe(),[i,o]=p.useState([{tipo:"",qtdAtivo:0,qtdManutencao:0}]),[n,d]=p.useState(""),[x,j]=p.useState([]),[f,m]=p.useState(!1);p.useEffect(()=>{(async()=>{const l=await I.lista();l?.filial&&j(l.filial)})()},[]);const h=()=>{i.length<3&&o([...i,{tipo:"",qtdAtivo:0,qtdManutencao:0}])},v=a=>{i.length>1&&o(i.filter((l,c)=>c!==a))},g=(a,l,c)=>{const b=[...i];b[a]={...b[a],[l]:c},o(b)},C=async()=>{if(!n)return y("Selecione uma filial","error");if(i.some(l=>!l.tipo||l.qtdAtivo===""||l.qtdManutencao===""))return y("Preencha todos os campos corretamente","error");m(!0);try{const l={usuario:t?.nome,numeroFIlial:n?.numeroFilial,nomeFilial:n.nome,usuarioId:t?.id,itens:i},c=await R.cadastro(l);c?.msg&&(y(c.msg,"success"),o([{tipo:"",qtdAtivo:0,qtdManutencao:0}]),d(""))}finally{m(!1)}},u=a=>{const l=i.filter((c,b)=>b!==a).map(c=>c.tipo);return xe.filter(c=>!l.includes(c)||i[a].tipo===c)};return e.jsx(F.container,{children:e.jsxs(F.Card,{children:[e.jsx("h2",{style:{marginBottom:"20px",color:"#334155"},children:"Registro de Movimentação"}),e.jsxs(D,{fullWidth:!0,variant:"outlined",sx:{mb:3},children:[e.jsx(B,{children:"Selecione a Filial"}),e.jsx(q,{value:n,onChange:a=>d(a.target.value),label:"Selecione a Filial",children:x.map(a=>e.jsxs(E,{value:a,children:[a.numeroFilial," - ",a.nome]},a.id))})]}),e.jsxs(F.container_int,{children:[i.map((a,l)=>e.jsxs(F.form,{children:[e.jsxs(D,{fullWidth:!0,size:"small",children:[e.jsx(B,{children:"Material"}),e.jsx(q,{value:a.tipo,label:"Tipo.Logistico",onChange:c=>g(l,"tipo",c.target.value),children:u(l).map((c,b)=>e.jsx(E,{value:c,children:c},b))})]}),e.jsx(P,{label:"Qtd.Disponivel",type:"number",size:"small",value:a.qtdAtivo,onChange:c=>g(l,"qtdAtivo",c.target.value)}),e.jsx(P,{label:"Qtd.Manutenção",type:"number",size:"small",value:a.qtdManutencao,onChange:c=>g(l,"qtdManutencao",c.target.value)}),e.jsx(_,{color:"error",onClick:()=>v(l),disabled:i.length===1,children:e.jsx(U,{})})]},l)),i.length<3&&e.jsx(N,{startIcon:e.jsx(G,{}),onClick:h,sx:{mt:1,mb:3},children:"Adicionar outro material"})]}),e.jsx(N,{variant:"contained",fullWidth:!0,size:"large",onClick:C,endIcon:f?e.jsx(W,{size:20,color:"inherit"}):e.jsx(V,{}),disabled:f,sx:{bgcolor:"#5B7FFF","&:hover":{bgcolor:"#4a6cf0"}},children:f?"Enviando...":"Finalizar Registro"})]})})},be=H`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,s={Main:r.div`
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 20px;
    }
  `,HeaderCard:r.div`
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column; /* Mobile first: coluna */
    gap: 15px;
    margin-bottom: 20px;
    /* border-left: 5px solid #4c1d95; */

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
  `,TitleSection:r.div`
    small {
      color: #7c3aed;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
    }
    h2 {
      margin: 4px 0 0 0;
      color: #1e293b;
      font-size: 1.2rem; /* Menor no mobile */
    }
    @media (min-width: 768px) {
      h2 { font-size: 1.4rem; }
    }
  `,FilterArea:r.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:r.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:r.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:t})=>t?`${be} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:r.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:r.select`
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
  `,Container:r.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,Card:r.div`
    background: #fff;
    border-radius: 12px;
    padding: 15px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

    @media (min-width: 768px) {
      padding: 24px;
      margin-bottom: 20px;
    }
  `,CardHeaderPrincipal:r.div`
    display: flex;
    flex-direction: column; /* Coluna no mobile */
    gap: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;

    .tag {
      background: #f5f3ff;
      color: #5b21b6;
      padding: 3px 8px;
      border-radius: 20px;
      font-size: 9px;
      font-weight: 800;
      display: inline-block;
    }
    h3 { margin: 5px 0 0 0; color: #334155; font-size: 1rem; }
    .info-date { color: #94a3b8; font-size: 12px; }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      h3 { font-size: 1.1rem; }
    }
  `,TableWrapper:r.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:r.table`
    width: 100%;
    border-collapse: collapse;
    /* min-width: 500px; Garante que os dados não encavalem */
    
    th {
      background: #f8fafc;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      padding: 10px 2px;
      text-align: left;
       @media (max-width: 768px) {
                 padding:5px;
                 word-break: break-all;
                 text-transform: capitalize;
    }
    }

    td {
      padding: 12px 10px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
      color: #475569;
       @media (max-width: 768px) {
                 padding: 12px 4px;
                 font-size: 12px;

    }
    }

    .bold { font-weight: 600; color: #1e293b; }
    .status-ativo { color: #16a34a; font-weight: 700; }
    .status-manutencao { color: #ca8a04; font-weight: 700; }
    @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Thead:r.thead``,Tbody:r.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:r.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:r.button`
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 8px 10px;
    border-radius: 6px;
    color: #4f46e5;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    
    @media (min-width: 768px) {
      padding: 6px 12px;
    }
  `},je=r.div`
display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;`,ve=r.div`
font-size: 60px;
      color: #999;`,T=()=>e.jsxs(je,{children:[e.jsx(ve,{}),"Sem dados encontrado"]}),we=H`
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}

`,ye={Container:r.div`
    display: flex;
    width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      opacity: 0.8;
  color: #5B7FFF; /* O azul da sua marca */

  svg {
    animation: ${we} 1s linear infinite;
  }

  span {
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
  }
`},A=()=>e.jsx(ye.Container,{children:e.jsx(ce,{})});function Ce({actions:t}){const i=$();function o(n){i(n)}return e.jsx(Q,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(Y,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(J,{}),children:t.map(n=>e.jsx(Z,{icon:n.icon,onClick:()=>o(n.router),slotProps:{tooltip:{title:n.name}}},n.name))})})}const O=({c:t})=>{function i(o){const n=new Date(o),d=n.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),x=n.toLocaleDateString("pt-BR");return`${d} ${x}`}return e.jsx(s.Container,{children:e.jsxs(s.Card,{children:[e.jsxs(s.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",children:[e.jsx("span",{className:"tag",children:"Resumo do Dia"}),e.jsxs("h3",{children:[t?.numeroFIlial," - ",t?.nomeFilial]})]}),e.jsx("div",{className:"info-date",children:e.jsxs("span",{children:["📅  ",i(t?.dataCriacao)]})})]}),e.jsxs(s.Table,{children:[e.jsx(s.Thead,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"Disponível"}),e.jsx("th",{children:"Manutenção"}),e.jsx("th",{children:"Data"}),e.jsx("th",{children:"Ações"})]})}),e.jsx(s.Tbody,{children:t.itens.map((o,n)=>e.jsxs(s.Tr,{children:[e.jsx("td",{className:"bold",children:o?.tipo}),e.jsx("td",{className:"status-ativo",children:o?.qtdAtivo}),e.jsx("td",{className:"status-manutencao",children:o?.qtdManutencao}),e.jsx("td",{children:i(t.dataCriacao)}),e.jsx("td",{children:e.jsx(s.ViewButton,{children:"Detalhes"})})]},n))})]})]})})};function Fe({listaFiliais:t,loadingRel:i,carregarDadosLogistico:o,handleClick:n}){return e.jsxs(s.FilterArea,{children:[e.jsxs(s.SelectGroup,{children:[e.jsx(s.Label,{children:"Filiais:"}),e.jsxs(s.Select,{onChange:d=>o(d.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),t.map((d,x)=>e.jsxs("option",{value:d?.numeroFilial,children:[d?.numeroFilial," - ",d?.nome]},x))]})]}),e.jsx(s.RefreshButton,{loading:i,disabled:i,onClick:n,children:e.jsx(M,{})})]})}const Se=[{icon:e.jsx(G,{}),name:"Adicionar",router:"/Logistico/novo-logistico"},{icon:e.jsx(K,{}),name:"Todas os itens",router:"/Logistico/listaFiliais"}],Le=()=>{const[t,i]=p.useState([]),[o,n]=p.useState(!1),[d,x]=p.useState([]),j=location.pathname+location.search+location.hash;sessionStorage.setItem("redirectAfterLogin",j);const{filial:f}=z(),m=async u=>{x([]),n(!0);try{const a=await R.lista(u);a?.logisticoFilias&&x(a.logisticoFilias)}catch{y("Erro ao carregar dados logísticos","error")}finally{n(!1)}},h=p.useCallback(async()=>{try{const u=await I.lista();u?.filial&&i(u.filial)}catch{y("Erro ao carregar filiais","error")}},[]);p.useEffect(()=>{m(),h()},[h]);const[v,g]=p.useState(!1),C=async()=>{g(!0);try{m(),g(!1)}finally{g(!1)}};return e.jsxs(s.Main,{children:[e.jsxs(s.HeaderCard,{children:[e.jsxs(s.TitleSection,{children:[e.jsx("small",{children:"Gestão de Materiais"}),e.jsxs("h2",{children:["Painel Logístico - Unidade ",f||"Geral"]})]}),e.jsx(Fe,{listaFiliais:t,loadingRel:v,carregarDadosLogistico:u=>m(u),handleClick:C})]}),o&&e.jsx(A,{}),!o&&d.length===0&&e.jsx(T,{}),d.map((u,a)=>e.jsx(O,{c:u},a)),e.jsx(k.ButtonContainer,{children:e.jsx(Ce,{actions:Se})})]})},ke=()=>{const[t,i]=p.useState([]),[o,n]=p.useState(!1),{filial:d}=z(),x=$(),[j,f]=p.useState([]),m=p.useCallback(async()=>{try{i([]),n(!0);const a=await I.lista();a?.filial&&(i(a.filial),f(a.filial))}catch{n(!1),y("Erro ao carregar filiais","error")}finally{n(!1)}},[]);p.useEffect(()=>{m()},[m]);const h=a=>{setTimeout(()=>{x(`/logistico/detalhes-filial/${a}`)},300)},[v,g]=p.useState(!1),C=async()=>{g(!0);try{g(!0)}finally{g(!1)}};function u(a){if(!a&&!a){f(t);return}const l=Number(a);var c=t.filter(b=>b.numeroFilial===l);f(c)}return e.jsxs(s.Main,{children:[e.jsxs(s.HeaderCard,{children:[e.jsx(s.TitleSection,{children:e.jsxs("h2",{children:["Painel Logístico - Unidade ",d||"Geral"]})}),e.jsxs(s.FilterArea,{children:[e.jsxs(s.SelectGroup,{children:[e.jsx(s.Label,{children:"Filiais:"}),e.jsxs(s.Select,{onChange:a=>u(a.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),t.map((a,l)=>e.jsxs("option",{value:a?.numeroFilial,children:[a?.numeroFilial," - ",a?.nome]},l))]})]}),e.jsx(s.RefreshButton,{loading:v,disabled:v,onClick:C,children:e.jsx(M,{})})]})]}),o&&e.jsx(A,{}),!o&&t.length===0&&e.jsx(T,{}),j.map((a,l)=>e.jsx(s.Container,{children:e.jsx(s.Card,{style:{cursor:"pointer"},onClick:()=>h(a?.numeroFilial),children:e.jsxs(s.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",children:[e.jsxs("span",{className:"tag",children:["Resumo  CD-",a.numeroFilial]}),e.jsx("h3",{children:a?.nome.split("-")[1]||a?.nome})]}),e.jsx("div",{className:"info-date",children:e.jsx("span",{children:e.jsx(re,{})})})]})})},l))]})},ze=()=>{const[t,i]=p.useState(!1),[o,n]=p.useState([]),{filial:d}=z(),x=async()=>{n([]),i(!0);try{const h=await R.listaGerais(d);h?.logisticoFilias.content&&n(h.logisticoFilias.content)}catch{y("Erro ao carregar dados logísticos","error")}finally{i(!1)}};p.useEffect(()=>{x()},[]);const[j,f]=p.useState(!1),m=async()=>{f(!0);try{x(),f(!0)}finally{f(!1)}};return e.jsxs(s.Main,{children:[e.jsxs(s.HeaderCard,{children:[e.jsxs(s.TitleSection,{children:[e.jsx("small",{children:"Controle de Materiais"}),e.jsxs("h2",{children:["Painel Logístico - ",d||"Geral"]})]}),e.jsxs(s.FilterArea,{children:[e.jsxs(s.SelectGroup,{children:[e.jsx(s.Label,{children:"Filiais:"}),e.jsx("input",{type:"text"})]}),e.jsx(s.RefreshButton,{loading:j,disabled:j,onClick:m,children:e.jsx(M,{})})]})]}),t&&e.jsx(A,{}),!t&&o.length===0&&e.jsx(T,{}),o.map((h,v)=>e.jsx(O,{c:h},v))]})},qe=()=>e.jsxs(ne,{children:[e.jsxs(w,{path:"/",element:e.jsx(pe,{}),children:[e.jsx(w,{index:!0,element:e.jsx(se,{to:"dashboard",replace:!0})}),e.jsx(w,{path:"novo-logistico",element:e.jsx(ge,{})}),e.jsx(w,{path:"dashboard",element:e.jsx(Le,{})}),e.jsx(w,{path:"listaFiliais",element:e.jsx(ke,{})}),e.jsx(w,{path:"detalhes-filial/:filial",element:e.jsx(ze,{})})]}),e.jsx(w,{path:"*",element:e.jsx(le,{})})]});export{qe as default};
