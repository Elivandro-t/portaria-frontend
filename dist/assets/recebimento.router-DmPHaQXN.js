import{j as e,r as g,u as z,F as O,q as W,s as H,k as F,I as _,b as E,H as Q,J as X,N as re,M as ne,O as se,w as de,C as le}from"./mui-_wqMIBiI.js";import{a as I,d as o,m as R,j as ce,b as M,n as D,S as pe,u as Z,o as ee,g as Y,l as xe,O as fe,p as ue,R as me,k as P,N as ge}from"./index-BYSqOyoE.js";import{L as he,D as be,B as je}from"./SpeedDial-DpTcwhA7.js";import{a as we,b as V,c as ve,d as ye}from"./BotaoVoltar-CxvXsGU3.js";import Ce from"./NotFund-CATxkBTh.js";import{H as ze}from"./HeaderSecundario-C_2THYpf.js";import{H as ke}from"./header.component-kb1fF7rG.js";import"./react-OvXVS5lI.js";const N="http://localhost:8084",De=async(a,t,i)=>{const n=new URLSearchParams;return i!=null&&n.append("filiais",i),t!=null&&n.append("filial",t),(await I.get(N+a,{params:Object.fromEntries(n)})).data},Pe=async(a,t)=>{const i=new URLSearchParams;return t!=null&&i.append("filial",t),(await I.get(N+a,{params:Object.fromEntries(i)})).data},Se=async(a,t)=>{const i=await I.post(N+a,t);return i.data?i.data:null},qe=async(a,t)=>{const i=await I.put(N+a,t);return i.data?i.data:null},Te=async(a,t,i)=>{const n=new URLSearchParams;t!=null&&i!=null&&(n.append("registroId",t),n.append("filial",i));const m=await I.delete(N+a,{params:Object.fromEntries(n)});return m.data?m.data:null},L={lista:async(a,t)=>await De("/communit/v1/recebimento/lista",a,t),listaGerais:async a=>await Pe("/communit/v1/recebimento/lista/geral",a),cadastro:async a=>await Se("/communit/v1/recebimento/registro",a),update:async a=>await qe("/communit/v1/recebimento/update",a),delete:async(a,t)=>await Te("/communit/v1/recebimento/delete",a,t)},Be=R`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,y={Main:o.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 5px;
    }
  `,HeaderCard:o.div`
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
  `,TitleSection:o.div`
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
  `,FilterArea:o.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:o.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:a})=>a?`${Be} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:o.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:o.select`
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
  `,Container:o.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  `,Card:o.div`
    background: #fff;
    border-radius: 12px;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 1px 4px -1px rgba(0,0,0,0.4);
    position: relative;

    @media (min-width: 768px) {
      padding:20px 15px;
      margin-bottom: 20px;
    }
  `,info_date:o.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
   @media (max-width: 768px) {
      position: absolute;
      right: 0;
      padding:0 10px;
    }
  `,CardHeaderPrincipal:o.div`
    display: flex;
    flex-direction: column; /* Coluna no mobile */
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;
    .titulo{
    font-size: 10px;
    padding: 10px;
    color:#3a3737;
  }

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
  `,TableWrapper:o.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:o.table`
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
      padding: 3px 10px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
      color: #475569;
       @media (max-width: 768px) {
                 padding: 0px 4px;
                 font-size: 12px;

    }
    }

    .bold { font-weight: 600; color: #1e293b; }
    .status-ativo { color: #16a34a; font-weight: 700; }
    .status-manutencao { color: #ca8a04; font-weight: 700; }
    .status-total { color: #5964fc; font-weight: 700; }
     /* #ca8a04 */
    @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Thead:o.thead``,Tbody:o.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:o.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:o.button`
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 8px 5px;
    border-radius: 6px;
    color: #4f46e5;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    
    @media (min-width: 768px) {
      padding: 6px 12px;
    }
  `},U={container:o.div`
    display: flex;
    flex-direction: column; 
    height: 100vh;
    position: relative; /* Garante que o botão se posicione em relação a este container */
    `,Main:o.section`
    padding: 0 5px;
    `,ButtonContainer:o.div`
     position: fixed; /* Troquei para fixed para ele não sumir ao dar scroll */
        bottom: 30px;
        right: 30px;
        z-index: 999;
    `,StyledActionButton:o.button`
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
    `},Fe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555;
  height: 60vh;
  font-size: 16px;
  gap: 10px;
  opacity: 0.8;
  text-align: center; /* Garante centralização do texto em telas menores */
`,Ie=o.div`
  font-size: 60px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=()=>e.jsxs(Fe,{children:[e.jsx(Ie,{children:"📂"}),"Nenhum registro diário encontrado"]}),Re=R`
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}

`,Me={Container:o.div`
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
    animation: ${Re} 1s linear infinite;
  }

  span {
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
  }
`},J=()=>e.jsx(Me.Container,{children:e.jsx(he,{})}),K={container:o.div`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color:rgba(0,0,0.2);
    
    `,modal:o.div`
    border-radius: 12px;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    position: relative;

    @media (min-width: 768px) {
      padding:0 24px;
      margin-bottom: 20px;
    }
    `},Ne=({children:a,handleInative:t})=>{const i=n=>{n.stopPropagation()};return g.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),e.jsx(K.container,{onClick:t,children:e.jsx(K.modal,{onClick:n=>i(n),children:a})})},B={container:o.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding:  20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:o.div`
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
  `,container_int:o.div`
    width: 100%;
    margin-top: 24px;
  `,heander:o.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns:1.4fr 1fr 1fr 1fr 30px; 
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
  `,form:o.section`
    display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr 30px;
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

  `,selectCampos:o.select`
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
  `,btnAdd:o.button`
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
  `},G=[{id:1,descricao:"Secos"},{id:2,descricao:"Resfriados"},{id:3,descricao:"Congelados"},{id:4,descricao:"Hortifruti"}],Le=({itemMP:a,registroId:t,onClickhTogle:i})=>{const{handleSubmit:m,register:u}=ce({defaultValues:{itens:a.map(p=>({id:Number(p.id),qtdPortoDescarregado:Number(p?.qtdPortoDescarregado),qtdDescargasPendentes:Number(p?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(p?.qtdPortariaDescarregada)}))}}),[f,s]=g.useState([]),j=M(),r=async p=>{if(p.registroId=t,p.usuarioId=j?.id,p.itens=p.itens.map(d=>({id:Number(d?.id),qtdPortoDescarregado:Number(d?.qtdPortoDescarregado),qtdDescargasPendentes:Number(d?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(d?.qtdPortariaDescarregada)})),f.some(d=>!d.TipoBloco||d.qtdPortoDescarregado===""||d.qtdDescargasPendentes===""))return D("Preencha todos os campos corretamente","error");p.save=f.map(d=>({TipoBloco:d?.TipoBloco,qtdPortoDescarregado:Number(d?.qtdPortoDescarregado),qtdDescargasPendentes:Number(d?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(d?.qtdPortariaDescarregada)})),console.log(JSON.stringify(p)),p!=null&&await L.update(p)&&(D("Salvo com sucesso","success"),i())},b=(p,h,d)=>{const q=[...f];q[p]={...q[p],[h]:d},s(q)},v=()=>{C().length!==0&&s(h=>[...h,{TipoBloco:"",qtdDescargasPendentes:0,qtdPortoDescarregado:0,qtdPortariaDescarregada:0}])};function C(p){const h=a.map(d=>d.TipoBloco);return G.filter(d=>h.includes(d)?!1:!f.some((te,ie)=>ie!==p&&te.TipoBloco===d.descricao))}const T=p=>{f.length>0&&s(f.filter((h,d)=>d!==p))},l=G.length,x=a.length,c=f.length,w=x+c;return e.jsxs(B.Card,{children:[e.jsx("h2",{children:"Registro de Movimentação"}),e.jsx(B.container_int,{children:a.map((p,h)=>e.jsxs(B.form,{children:[e.jsx(z,{disabled:!0,label:"Tipo de Bloco",variant:"filled",size:"small",fullWidth:!0,value:p?.TipoBloco}),e.jsx(z,{label:"Qtd. Porto",type:"number",size:"small",fullWidth:!0,...u(`itens.${h}.qtdPortoDescarregado`)}),e.jsx(z,{label:"Qtd. portaria descarregado",type:"number",size:"small",fullWidth:!0,...u(`itens.${h}.qtdPortariaDescarregada`)}),e.jsx(z,{label:"Qtd. Pendentes",type:"number",size:"small",fullWidth:!0,...u(`itens.${h}.qtdDescargasPendentes`)}),e.jsx("div",{style:{width:"40px"}})," ",e.jsx("input",{type:"hidden",...u(`itens.${h}.id`)})]},p.id))}),e.jsxs(B.container_int,{children:[f.map((p,h)=>e.jsxs(B.form,{children:[e.jsxs(O,{fullWidth:!0,size:"small",children:[e.jsx(W,{children:"Selecionar Bloco"}),e.jsx(H,{value:p.TipoBloco,label:"Selecionar Bloco",onChange:d=>b(h,"TipoBloco",d.target.value),children:C(h).map((d,q)=>e.jsx(F,{value:d.descricao,children:d.descricao},q))})]}),e.jsx(z,{label:"Qtd. Porto",type:"number",size:"small",fullWidth:!0,value:p.qtdPortoDescarregado,onChange:d=>b(h,"qtdPortoDescarregado",d.target.value)}),e.jsx(z,{label:"Qtd. Descarregado",type:"number",size:"small",fullWidth:!0,value:p.qtdPortariaDescarregada,onChange:d=>b(h,"qtdPortariaDescarregada",d.target.value)}),e.jsx(z,{label:"Qtd. Pendente",type:"number",size:"small",fullWidth:!0,value:p.qtdDescargasPendentes,onChange:d=>b(h,"qtdDescargasPendentes",d.target.value)}),e.jsx(_,{color:"error",onClick:()=>T(h),sx:{marginTop:"4px"},children:e.jsx(be,{size:20})})]},h)),w<l&&e.jsx(E,{startIcon:e.jsx(Q,{}),onClick:v,variant:"text",sx:{mt:1,mb:3,color:"#16a34a","&:hover":{bgcolor:"#f0fdf4"},fontWeight:600},children:"Adicionar outro material"})]}),e.jsx(E,{variant:"contained",fullWidth:!0,onClick:m(r),size:"large",endIcon:e.jsx(X,{}),disabled:!1,sx:{bgcolor:"#2563eb",py:1.5,borderRadius:"10px",boxShadow:"0 4px 14px rgba(37, 99, 235, 0.3)","&:hover":{bgcolor:"#1d4ed8",boxShadow:"none"},textTransform:"none",fontSize:"16px",fontWeight:600},children:"Salvar Alterações"})]})};function Ae({hendleClick:a,hendleClickDelete:t}){const[i,n]=g.useState(null),m=!!i,u=r=>{n(r.currentTarget)},f=()=>{n(null)},s=()=>{a(),n(null)},j=()=>{t(),n(null)};return e.jsxs("div",{children:[e.jsx(_,{id:"demo-positioned-button","aria-controls":m?"demo-positioned-menu":void 0,"aria-haspopup":"true",onClick:u,size:"small",children:e.jsx(re,{})}),e.jsxs(ne,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:i,open:m,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(F,{onClick:s,children:"Editar"}),e.jsx(F,{onClick:j,children:"Deletar"})]})]})}const ae=({c:a,handleFunction:t})=>{const n=M()?.permissoes;function m(r){const b=new Date(r),v=b.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),C=b.toLocaleDateString("pt-BR");return`${v} ${C}`}const[u,f]=g.useState(!1),s=()=>{f(!u)},j=async()=>{await L.delete(a.id,a.filial)&&(t(),D("Deletado","success"))};return e.jsx(y.Container,{children:e.jsxs(y.Card,{children:[e.jsxs(y.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",style:{paddingTop:5},children:[e.jsx("span",{className:"tag",children:"Resumo do Dia"}),e.jsxs("span",{className:"tag",children:[" Criador: ",e.jsx("small",{style:{color:"#000"},children:a?.nomeUsuario})]}),e.jsxs("h4",{className:"titulo",children:[a?.filial," - ",a?.nomeFilial]})]}),e.jsxs(y.info_date,{className:"info-date",children:[e.jsxs("span",{children:["📅  ",m(a?.dataAt)]}),n?.includes("DELETE_LOGISTICO")&&e.jsx(Ae,{hendleClick:s,hendleClickDelete:j})]})]}),e.jsxs(y.Table,{children:[e.jsx(y.Thead,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"Porto"}),e.jsx("th",{children:"portaria"}),e.jsx("th",{children:"Pendentes"})]})}),e.jsx(y.Tbody,{children:a.itens.map((r,b)=>e.jsxs(y.Tr,{children:[e.jsx("td",{className:"bold",children:r?.TipoBloco}),e.jsx("td",{className:"status-ativo",children:r?.qtdPortoDescarregado?r.qtdPortoDescarregado:0}),e.jsx("td",{className:"status-ativo",children:r?.qtdPortariaDescarregada?r?.qtdPortariaDescarregada:0}),e.jsx("td",{className:"status-manutencao",children:r?.qtdDescargasPendentes})]},b))})]}),u&&e.jsx(Ne,{handleInative:s,children:e.jsx(Le,{onClickhTogle:t,registroId:a.id,itemMP:a.itens})})]})})},$e=R`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,A={FilterArea:o.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */    
    @media (min-width: 768px) {
      width: auto;
     
    }
  `,SelectGroup:o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:o.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:a})=>a?`${$e} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:o.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:o.select`
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
  `,Container:o.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `},Ee={AddButton:o.button`
      display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${({cor:a})=>a?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"red"};
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
  `},Ge=({onAddClick:a,IconeType:t,tituloBtn:i,def:n})=>{const m=u=>{switch(u){case"sucess":return e.jsx(we,{});case"receb":return e.jsx(pe,{})}};return e.jsxs(Ee.AddButton,{cor:n,onClick:a,children:[m(t),i]})};function Oe({listaFiliais:a,loadingRel:t,carregarDadosLogistico:i,handleClick:n}){const m=Z(),u=()=>{m("/recebimento/novo")};return e.jsx(A.FilterArea,{style:{gap:"15px",flexWrap:"wrap"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(Ge,{tituloBtn:"Novo Card",onAddClick:u,IconeType:"sucess",def:!0}),e.jsx(A.SelectGroup,{children:e.jsxs(A.Select,{onChange:f=>i(f.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),a.map((f,s)=>e.jsxs("option",{value:f?.filial,children:[f?.filial," - ",f?.nome]},s))]})}),e.jsx(A.RefreshButton,{loading:t,disabled:t,onClick:n,title:"Atualizar dados",children:e.jsx(V,{})})]})})}const We=[{icon:e.jsx(Q,{}),name:"Adicionar",router:"/recebimento/novo-logistico"},{icon:e.jsx(se,{}),name:"Todas os itens",router:"/recebimento/listaFiliais"}],He=()=>{const[a,t]=g.useState([]),[i,n]=g.useState(!1),[m,u]=g.useState([]),f=location.pathname+location.search+location.hash,{filial:s}=ee(),j=M(),r=async l=>{u([]),n(!0);const x=a.flatMap(c=>c.filial);try{const c=await L.lista(l,x);c&&u(c)}catch{D("Erro ao carregar dados logísticos","error")}finally{n(!1)}},b=g.useCallback(async()=>{try{const l=await Y.FiliaisUsuario(j?.id);l?.acess&&t(l.acess)}catch{D("Erro ao carregar filiais","error")}},[]);g.useEffect(()=>{sessionStorage.setItem("redirectAfterLogin",f),b()},[b]),g.useEffect(()=>{a.length>0&&r(s)},[a,s]);const[v,C]=g.useState(!1),T=async()=>{C(!0);try{r(),C(!1)}finally{C(!1)}};return e.jsxs(y.Main,{children:[e.jsxs(y.HeaderCard,{children:[e.jsxs(y.TitleSection,{children:[e.jsx("small",{children:"Portaria Recebimento"}),e.jsxs("h2",{children:["Painel Diario  ",s]})]}),e.jsx(Oe,{listaFiliais:a,loadingRel:v,carregarDadosLogistico:l=>r(l),handleClick:T})]}),i&&e.jsx(J,{}),!i&&m.length===0&&e.jsx(oe,{}),m.map((l,x)=>e.jsx(ae,{c:l,handleFunction:r},x)),e.jsx(U.ButtonContainer,{children:e.jsx(je,{actions:We})})]})},Ue=()=>{const t=xe().pathname==="/recebimento/dashboard",[i,n]=g.useState(!1),m=()=>{n(!i)};return e.jsxs(U.container,{children:[t?e.jsx(ke,{ativaBtnDrower:!1,subtitulo:"Recebimento",handleBtn:m}):e.jsx(ze,{titulo:"Recebimento de Mercadoria",ativo:!0}),e.jsx(U.Main,{children:e.jsx(fe,{})})]})},$={container:o.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:o.div`
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
  `,container_int:o.div`
    width: 100%;
    margin-top: 24px;
  `,heander:o.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns:1.4fr 1fr 1fr 1fr 30px; 
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
  `,form:o.section`
    display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr 30px;
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

  `,selectCampos:o.select`
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
  `,btnAdd:o.button`
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
  `},_e=()=>{const a=M(),[t,i]=g.useState(""),[n,m]=g.useState([]),[u,f]=g.useState(!1),[s,j]=g.useState([{TipoBloco:"",qtdPortariaDescarregada:0,qtdPortoDescarregado:0,qtdDescargasPendentes:0,gmBlocoId:0}]);g.useEffect(()=>{(async()=>{const x=await Y.FiliaisUsuario(a?.id);x?.acess&&m(x.acess)})()},[]);const r=()=>{s.length<4&&j([...s,{TipoBloco:"",qtdPortariaDescarregada:0,qtdPortoDescarregado:0,qtdDescargasPendentes:0,gmBlocoId:0}])},b=l=>{s.length>1&&j(s.filter((x,c)=>c!==l))},v=(l,x,c)=>{const w=[...s];w[l]={...w[l],[x]:c},j(w)},C=async()=>{if(console.log(JSON.stringify(s)),!t)return D("Selecione uma filial","error");if(s.some(x=>!x.TipoBloco||x.qtdDescargasPendentes===""||x.qtdPortoDescarregado===""))return D("Preencha todos os campos corretamente","error");f(!0);try{const x={nomeUsuario:a?.nome,filial:t?.filial,nomeFilial:t.nome,usuarioId:a?.id,itens:s};console.log(x);const c=await L.cadastro(x);c?.msg&&(D(c.msg,"success"),j([{TipoBloco:"",qtdDescargasPendentes:0,qtdPortoDescarregado:0,qtdPortariaDescarregada:0,gmBlocoId:0}]),i(""))}finally{f(!1)}},T=l=>{const x=s.filter((c,w)=>w!==l).map(c=>c.gmBlocoId);return G.filter(c=>!x.includes(c.id)||s[l].gmBlocoId===c.id)};return e.jsx($.container,{children:e.jsxs($.Card,{children:[e.jsx("h2",{style:{marginBottom:"20px",color:"#334155"},children:"Registro de Movimentação"}),e.jsxs(O,{fullWidth:!0,variant:"outlined",sx:{mb:3},children:[e.jsx(W,{children:"Selecione a Filial"}),e.jsx(H,{value:t,onChange:l=>i(l.target.value),label:"Selecione a Filial",children:n.map(l=>e.jsxs(F,{value:l,children:[l.filial," - ",l?.nome]},l.id))})]}),e.jsxs($.container_int,{children:[s.map((l,x)=>e.jsxs($.form,{children:[e.jsxs(O,{fullWidth:!0,size:"small",children:[e.jsx(W,{children:"Bloco"}),e.jsx(H,{value:l?.gmBlocoId,label:"Tipo.Logistico",onChange:c=>{const w=Number(c.target.value),p=G.find(d=>d.id===w),h=[...s];h[x]={...h[x],gmBlocoId:w,TipoBloco:p?.descricao||""},j(h)},children:T(x).map((c,w)=>e.jsx(F,{value:c.id,children:c?.descricao},w))})]}),e.jsx(z,{label:"Qtd.pendentes",type:"number",size:"small",value:l.qtdDescargasPendentes,onChange:c=>v(x,"qtdDescargasPendentes",c.target.value)}),e.jsx(z,{label:"Qtd.Porto",type:"number",size:"small",value:l.qtdPortoDescarregado,onChange:c=>v(x,"qtdPortoDescarregado",c.target.value)}),e.jsx(z,{label:"Qtd.descarregado",type:"number",size:"small",value:l.qtdPortariaDescarregada,onChange:c=>v(x,"qtdPortariaDescarregada",c.target.value)}),e.jsx(_,{color:"error",onClick:()=>b(x),disabled:s.length===1,children:e.jsx(de,{})})]},x)),s.length<4&&e.jsx(E,{startIcon:e.jsx(Q,{}),onClick:r,sx:{mt:1,mb:3},children:"Adicionar outro Bloco"})]}),e.jsx(E,{variant:"contained",fullWidth:!0,size:"large",onClick:C,endIcon:u?e.jsx(le,{size:20,color:"inherit"}):e.jsx(X,{}),disabled:u,sx:{bgcolor:"#5B7FFF","&:hover":{bgcolor:"#4a6cf0"}},children:u?"Enviando...":"Finalizar Registro"})]})})},Qe=R`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,k={Main:o.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #fcfcfd; /* Fundo quase branco, muito limpo */
    min-height: 100vh;
  `,Header:o.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `,TitleSection:o.div`
    h2 {
      color: #101828;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    p {
      color: #667085;
      font-size: 14px;
      margin-top: 4px;
    }
  `,FilterGroup:o.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  `,Select:o.select`
    border: none;
    font-size: 14px;
    color: #344054;
    outline: none;
    min-width: 200px;
    background: transparent;
  `,Grid:o.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 1000px; /* Centraliza e limita a largura para não esticar demais */
    margin: 0 auto;
    width: 100%;
  `,Card:o.div`
    background: #ffffff;
    border: 1px solid #eaecf0; /* Borda bem fina e clara */
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #f9fafb;
      border-color: #d0d5dd;
      transform: translateY(-2px);
      box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    }
  `,CardInfo:o.div`
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-wrapper {
      width: 44px;
      height: 44px;
      background: #f4f3ff;
      color: #5925dc;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      
      .tag {
        font-size: 12px;
        font-weight: 600;
        color: #6941c0;
        margin-bottom: 2px;
      }
      
      h3 {
        margin: 0;
        font-size: 16px;
        color: #101828;
        font-weight: 500;
      }
    }
  `,RefreshButton:o.button`
    background: none;
    border: none;
    color: #667085;
    cursor: pointer;
    display: flex;
    padding: 4px;
    transition: color 0.2s;

    &:hover { color: #5925dc; }
    svg {
      ${({loading:a})=>a&&ue`animation: ${Qe} 1s linear infinite;`}
    }
  `},Ye=()=>{const[a,t]=g.useState(!1),[i,n]=g.useState([]),[m,u]=g.useState([]),f=Z(),s=M(),j=g.useCallback(async()=>{try{t(!0);const r=await Y.FiliaisUsuario(s?.id);r?.acess&&(n(r.acess),u(r.acess))}finally{t(!1)}},[s?.id]);return g.useEffect(()=>{j()},[j]),e.jsxs(k.Main,{children:[e.jsxs(k.Header,{children:[e.jsxs(k.TitleSection,{children:[e.jsx("h2",{children:"Painel Logístico"}),e.jsx("p",{children:"Unidades disponíveis para recebimento"})]}),e.jsxs(k.FilterGroup,{children:[e.jsxs(k.Select,{onChange:r=>{const b=r.target.value;u(b?i.filter(v=>String(v.filial)===b):i)},children:[e.jsx("option",{value:"",children:"Filtrar unidade..."}),i.map((r,b)=>e.jsx("option",{value:r?.filial,children:r?.nome},b))]}),e.jsx(k.RefreshButton,{loading:a,onClick:j,children:e.jsx(V,{size:20})})]})]}),a?e.jsx(J,{}):e.jsx(k.Grid,{children:m.map((r,b)=>e.jsxs(k.Card,{onClick:()=>f(`/recebimento/detalhes-filial/${r?.filial}`),children:[e.jsxs(k.CardInfo,{children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx(ve,{size:24})}),e.jsxs("div",{className:"text-content",children:[e.jsxs("span",{className:"tag",children:["RESUMO CD - ",r?.filial]}),e.jsx("h3",{children:r?.nomeFilial})]})]}),e.jsx(ye,{size:24,color:"#D0D5DD"})]},b))})]})},Ve=R`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,S={Main:o.div`
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduzi o padding lateral no mobile */
    background-color: #f8fafc;
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 20px;
    }
  `,HeaderCard:o.div`
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
  `,TitleSection:o.div`
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
      font-size: 1rem; /* Menor no mobile */
    }
    @media (min-width: 768px) {
      h2 { font-size: 0.5; }
    }
  `,FilterArea:o.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:o.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:a})=>a?`${Ve} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:o.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:o.select`
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
  `,Container:o.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,Card:o.div`
    background: #fff;
    border-radius: 12px;
    padding: 15px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

    @media (min-width: 768px) {
      padding: 24px;
      margin-bottom: 20px;
    }
  `,CardHeaderPrincipal:o.div`
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
  `,TableWrapper:o.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:o.table`
    width: 100%;
    border-collapse: collapse;
    /* min-width: 500px; Garante que os dados não encavalem */
    
    th {
      background: #f8fafc;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      padding: 10px;
      text-align: left;
       @media (max-width: 768px) {
                 padding:5px;
                 word-wrap: break-word;
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
  `,Thead:o.thead``,Tbody:o.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:o.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:o.button`
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
  `},Je=()=>{const[a,t]=g.useState(!1),[i,n]=g.useState([]),{filial:m}=ee(),u=async()=>{n([]),t(!0);try{const r=await L.listaGerais(m);r?.recebimentpFilias.content&&n(r.recebimentpFilias.content)}catch{D("Erro ao carregar dados logísticos","error")}finally{t(!1)}};g.useEffect(()=>{u()},[]);const[f,s]=g.useState(!1),j=async()=>{s(!0);try{u(),s(!0)}finally{s(!1)}};return e.jsxs(S.Main,{children:[e.jsxs(S.HeaderCard,{children:[e.jsxs(S.TitleSection,{children:[e.jsx("small",{children:"Controle de Materiais"}),e.jsxs("h2",{children:["Painel Logístico - ",m||"Geral"]})]}),e.jsxs(S.FilterArea,{children:[e.jsxs(S.SelectGroup,{children:[e.jsx(S.Label,{children:"Filiais:"}),e.jsx("input",{type:"text"})]}),e.jsx(S.RefreshButton,{loading:f,disabled:f,onClick:j,children:e.jsx(V,{})})]})]}),a&&e.jsx(J,{}),!a&&i.length===0&&e.jsx(oe,{}),i.map((r,b)=>e.jsx(ae,{c:r,handleFunction:u},b))]})},ro=()=>e.jsxs(me,{children:[e.jsxs(P,{path:"/",element:e.jsx(Ue,{}),children:[e.jsx(P,{index:!0,element:e.jsx(ge,{to:"dashboard",replace:!0})}),e.jsx(P,{path:"novo",element:e.jsx(_e,{})}),e.jsx(P,{path:"dashboard",element:e.jsx(He,{})}),e.jsx(P,{path:"listaFiliais",element:e.jsx(Ye,{})}),e.jsx(P,{path:"detalhes-filial/:filial",element:e.jsx(Je,{})})]}),e.jsx(P,{path:"*",element:e.jsx(Ce,{})})]});export{ro as default};
