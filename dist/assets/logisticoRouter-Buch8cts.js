import{r as u,j as e,F as P,q as O,s as $,k as T,u as M,I as D,w as ie,b as B,H as U,C as ne,J as X,K as se,N as re,M as le,O as de}from"./mui-_wqMIBiI.js";import{H as ce}from"./HeaderSecundario-C_2THYpf.js";import{H as pe}from"./header.component-kb1fF7rG.js";import{d as s,l as xe,O as ue,a as L,b as N,g as _,n as k,m as W,j as fe,u as Z,o as Q,R as me,k as S,N as he}from"./index-BYSqOyoE.js";import{L as ge,D as be,B as je}from"./SpeedDial-DpTcwhA7.js";import{a as ee,b as V}from"./BotaoVoltar-CxvXsGU3.js";import ve from"./NotFund-CATxkBTh.js";import"./react-OvXVS5lI.js";const G={container:s.div`
    display: flex;
    flex-direction: column; 
    height: 100vh;
    position: relative; /* Garante que o botão se posicione em relação a este container */
    `,Main:s.section`
    padding: 0 5px;
    `,ButtonContainer:s.div`
     position: fixed; /* Troquei para fixed para ele não sumir ao dar scroll */
        bottom: 30px;
        right: 30px;
        z-index: 999;
    `,StyledActionButton:s.button`
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
    `},we=()=>{const a=xe().pathname==="/logistico/dashboard",[i,n]=u.useState(!1),c=()=>{n(!i)};return e.jsxs(G.container,{children:[a?e.jsx(pe,{ativaBtnDrower:!1,subtitulo:"Logistico",handleBtn:c}):e.jsx(ce,{titulo:"Material Logistico",ativo:!0}),e.jsx(G.Main,{children:e.jsx(ue,{})})]})},F={container:s.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:s.div`
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
  `,container_int:s.div`
    width: 100%;
    margin-top: 24px;
  `,heander:s.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns: 2fr 1fr 1fr auto ; 
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
  `,form:s.section`
    display: grid;
      grid-template-columns: 2fr 1fr 1fr auto;
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

  `,selectCampos:s.select`
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
  `,btnAdd:s.button`
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
  `},H=[{codigo:65009,descricao:"Pallet Madeira"},{codigo:198616,descricao:"Container Metálico"},{codigo:388076,descricao:"Container Plástico Tela"},{codigo:231526,descricao:"Caixa Plástica Verde Hortifruti"},{codigo:143575,descricao:"Caixa Inviolável Com Tampa Azul"},{codigo:174901,descricao:"Caixa Plástica Para Transporte"},{codigo:176624,descricao:"Caixa Branca De Pão Francês"},{codigo:449621,descricao:"Container Bazar Metálico"}],A="http://localhost:8084",ye=async(t,a,i)=>{const n=new URLSearchParams;return i!=null&&n.append("filiais",i),a!=null&&n.append("filial",a),(await L.get(A+t,{params:Object.fromEntries(n)})).data},Ce=async(t,a)=>{const i=new URLSearchParams;return a!=null&&i.append("filial",a),(await L.get(A+t,{params:Object.fromEntries(i)})).data},ke=async(t,a)=>{const i=await L.post(A+t,a);return i.data?i.data:null},Fe=async(t,a)=>{const i=await L.put(A+t,a);return i.data?i.data:null},ze=async(t,a,i)=>{const n=new URLSearchParams;a!=null&&i!=null&&(n.append("registroId",a),n.append("filial",i));const c=await L.delete(A+t,{params:Object.fromEntries(n)});return c.data?c.data:null},Se=async(t,a,i)=>{const n=new URLSearchParams;a!==null&&i!=null&&(n.append("tipo",a),n.append("filial",i));const c=await L.get(A+t,{params:Object.fromEntries(n)});return c.data?c.data:null},R={lista:async(t,a)=>await ye("/communit/v1/runmit/lista",t,a),listaGerais:async t=>await Ce("/communit/v1/runmit/lista/geral",t),findItensMaterial:async(t,a)=>await Se("/material/v1/findOne",t,a),cadastro:async t=>await ke("/communit/v1/runmit/registro",t),update:async t=>await Fe("/communit/v1/runmit/update",t),delete:async(t,a)=>await ze("/communit/v1/runmit/delete/cardlogistico",t,a)},Me=()=>{const t=N(),[a,i]=u.useState([{tipo:"",qtdAtivo:0,qtdManutencao:0}]),[n,c]=u.useState(""),[b,g]=u.useState([]),[d,j]=u.useState(!1);u.useEffect(()=>{(async()=>{const o=await _.FiliaisUsuario(t?.id);o?.acess&&g(o.acess)})()},[]);const f=()=>{a.length<8&&i([...a,{tipo:"",qtdAtivo:0,qtdManutencao:0}])},v=l=>{a.length>1&&i(a.filter((o,r)=>r!==l))},w=(l,o,r)=>{const C=[...a];C[l]={...C[l],[o]:r},i(C)},y=async()=>{if(!n)return k("Selecione uma filial","error");if(a.some(o=>!o.tipo||o.qtdAtivo===""||o.qtdManutencao===""))return k("Preencha todos os campos corretamente","error");j(!0);try{const o={usuario:t?.nome,numeroFIlial:n?.filial,nomeFilial:n.nome,usuarioId:t?.id,itens:a},r=await R.cadastro(o);r?.msg&&(k(r.msg,"success"),i([{tipo:"",qtdAtivo:0,qtdManutencao:0}]),c(""))}finally{j(!1)}},z=l=>{const o=a.filter((r,C)=>C!==l).map(r=>r.tipo);return H.filter(r=>!o.includes(r.descricao)||a[l].tipo===r.descricao)};return e.jsx(F.container,{children:e.jsxs(F.Card,{children:[e.jsx("h2",{style:{marginBottom:"20px",color:"#334155"},children:"Registro de Movimentação"}),e.jsxs(P,{fullWidth:!0,variant:"outlined",sx:{mb:3},children:[e.jsx(O,{children:"Selecione a Filial"}),e.jsx($,{value:n,onChange:l=>c(l.target.value),label:"Selecione a Filial",children:b.map(l=>e.jsxs(T,{value:l,children:[l.filial," - ",l.nome]},l.id))})]}),e.jsxs(F.container_int,{children:[a.map((l,o)=>e.jsxs(F.form,{children:[e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(O,{children:"Material"}),e.jsx($,{value:l.tipo,label:"Tipo.Logistico",onChange:r=>w(o,"tipo",r.target.value),children:z(o).map((r,C)=>e.jsx(T,{value:r.descricao,children:r.descricao},C))})]}),e.jsx(M,{label:"Qtd.Disponivel",type:"number",size:"small",value:l.qtdAtivo,onChange:r=>w(o,"qtdAtivo",r.target.value)}),e.jsx(M,{label:"Qtd.Manutenção",type:"number",size:"small",value:l.qtdManutencao,onChange:r=>w(o,"qtdManutencao",r.target.value)}),e.jsx(D,{color:"error",onClick:()=>v(o),disabled:a.length===1,children:e.jsx(ie,{})})]},o)),a.length<8&&e.jsx(B,{startIcon:e.jsx(U,{}),onClick:f,sx:{mt:1,mb:3},children:"Adicionar outro material"})]}),e.jsx(B,{variant:"contained",fullWidth:!0,size:"large",onClick:y,endIcon:d?e.jsx(ne,{size:20,color:"inherit"}):e.jsx(X,{}),disabled:d,sx:{bgcolor:"#5B7FFF","&:hover":{bgcolor:"#4a6cf0"}},children:d?"Enviando...":"Finalizar Registro"})]})})},Ie=W`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,p={Main:s.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 5px;
    }
  `,HeaderCard:s.div`
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
  `,TitleSection:s.div`
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
  `,FilterArea:s.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:s.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:s.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:t})=>t?`${Ie} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:s.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:s.select`
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
  `,Container:s.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  `,Card:s.div`
    background: #fff;
    border-radius: 12px;
    padding: 5px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    position: relative;

    @media (min-width: 768px) {
      padding:20px 24px;
      margin-bottom: 20px;
    }
  `,info_date:s.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
   @media (max-width: 768px) {
      position: absolute;
      right: 0;
      padding:0 10px;
    }
  `,CardHeaderPrincipal:s.div`
    display: flex;
    flex-direction: column; /* Coluna no mobile */
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 2px;
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
  `,TableWrapper:s.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:s.table`
    width: 100%;
    border-collapse: collapse;
    /* min-width: 500px; Garante que os dados não encavalem */
    
    th {
      background: #f8fafc;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      padding: 5px 2px;
      text-align: left;
       @media (max-width: 768px) {
                 padding:4px;
                 word-break: break-all;
                 text-transform: capitalize;
    }
    }
    tr{
       &:hover{
                  background-color: #c2fcd7;
                  cursor: pointer;
                 }
    }

    td {
      padding: 2px 10px;
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
  `,Thead:s.thead``,Tbody:s.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:s.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:s.button`
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
  `},Le=s.div`
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
`,Ae=s.div`
  font-size: 60px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`,Y=()=>e.jsxs(Le,{children:[e.jsx(Ae,{children:"📂"}),"Nenhum registro diário encontrado"]}),qe=W`
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}

`,Te={Container:s.div`
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
    animation: ${qe} 1s linear infinite;
  }

  span {
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
  }
`},J=()=>e.jsx(Te.Container,{children:e.jsx(ge,{})}),K={container:s.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    padding: 16px 5px;
     @media (min-width: 768px) {
      padding: 16px;
    }
  `,modal:s.div`
  padding-left: 10px 0;
    border-radius: 12px;

    width: 100%;
    max-width: 700px;
    max-height: 90vh;

    padding: 16px 5px;
    overflow-y: auto;
    display: block;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    @media (min-width: 768px) {
      padding: 24px;
    }
  `},Ne=({children:t,handleInative:a})=>{const i=n=>{n.stopPropagation()};return u.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),e.jsx(K.container,{onClick:a,children:e.jsx(K.modal,{onClick:n=>i(n),children:t})})},Re=({itemMP:t,registroId:a,onClickhTogle:i,closed:n})=>{const{handleSubmit:b,register:g}=fe({defaultValues:{itens:t.map(x=>({id:Number(x.id),qtdAtivo:Number(x.qtdAtivo),qtdManutencao:Number(x.qtdManutencao)}))}}),[d,j]=u.useState([]),f=N(),v=async x=>{if(x.registroId=a,x.usuarioId=f?.id,x.itens=x.itens.map(h=>({id:Number(h.id),qtdAtivo:Number(h.qtdAtivo),qtdManutencao:Number(h.qtdManutencao)})),d.length>0){if(d.some(m=>!m.tipo||m.qtdAtivo===""||m.qtdManutencao===""))return k("Preencha todos os campos corretamente","error");x.update=d.map(m=>({tipo:m.tipo,qtdAtivo:Number(m.qtdAtivo),qtdManutencao:Number(m.qtdManutencao)}))}x!=null&&(console.log(JSON.stringify(x)),await R.update(x)&&(k("Salvo com sucesso","success"),i()))},w=(x,h,m)=>{const I=[...d];I[x]={...I[x],[h]:m},j(I)},y=()=>{z().length!==0&&j(h=>[...h,{tipo:"",qtdAtivo:0,qtdManutencao:0}])},z=x=>{const h=t.map(m=>m.tipo);return H.filter(m=>h.includes(m.descricao)?!1:!d.some((ae,oe)=>oe!==x&&ae.tipo===m.descricao))},l=x=>{d.length>0&&j(d.filter((h,m)=>m!==x))},o=H.length,r=t.length,C=d.length,E=r+C;return e.jsxs(F.Card,{style:{position:"relative"},children:[e.jsx("h2",{style:{marginBottom:"20px",color:"#334155"},children:"Registro de Movimentação"}),e.jsxs(F.container_int,{onSubmit:b(v),children:[e.jsx(D,{onClick:n,sx:{color:"rgba(7, 57, 131, 0.7)",position:"absolute",backgroundColor:"rgba(255,255,255,0.1)",top:0,right:0,transition:"0.3s",margin:1,"&:hover":{color:"#3d3737",backgroundColor:"rgba(255,255,255,0.2)",transform:"rotate(90deg)"}},children:e.jsx(se,{fontSize:"small"})}),t.map((x,h)=>e.jsxs(F.form,{children:[e.jsx(M,{disabled:!0,label:"Tipo",type:"txt",size:"small",value:x?.tipo}),e.jsx(M,{label:"Qtd.Disponivel",type:"number",size:"small",...g(`itens.${h}.qtdAtivo`)}),e.jsx(M,{label:"Qtd.Manutenção",type:"number",size:"small",...g(`itens.${h}.qtdManutencao`)}),e.jsx("input",{type:"hidden",...g(`itens.${h}.id`)})]},x.id)),e.jsxs(F.container_int,{children:[d.map((x,h)=>e.jsxs(F.form,{children:[e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(O,{children:"Material"}),e.jsx($,{value:x.tipo,label:"Tipo.Logistico",onChange:m=>w(h,"tipo",m.target.value),children:z(h).map((m,I)=>e.jsx(T,{value:m?.descricao,children:m?.descricao},I))})]}),e.jsx(M,{label:"Qtd.Disponivel",type:"number",size:"small",value:x.qtdAtivo,onChange:m=>w(h,"qtdAtivo",m.target.value)}),e.jsx(M,{label:"Qtd.Manutenção",type:"number",size:"small",value:x.qtdManutencao,onChange:m=>w(h,"qtdManutencao",m.target.value)}),e.jsx(D,{color:"error",onClick:()=>l(h),disabled:d.length===0,children:e.jsx(be,{})})]},h)),E<o&&e.jsx(B,{startIcon:e.jsx(U,{}),onClick:y,sx:{mt:1,mb:3},children:"Adicionar outro material"})]})]}),e.jsx(B,{variant:"contained",fullWidth:!0,onClick:b(v),size:"large",endIcon:e.jsx(X,{}),disabled:!1,sx:{bgcolor:"#5B7FFF","&:hover":{bgcolor:"#4a6cf0"}},children:"Atualizar Registro"})]})};function De({hendleClick:t,hendleClickDelete:a}){const[i,n]=u.useState(null),c=!!i,b=f=>{n(f.currentTarget)},g=()=>{n(null)},d=()=>{t(),n(null)},j=()=>{a(),n(null)};return e.jsxs("div",{children:[e.jsx(D,{id:"demo-positioned-button","aria-controls":c?"demo-positioned-menu":void 0,"aria-haspopup":"true",onClick:b,size:"small",children:e.jsx(re,{})}),e.jsxs(le,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:i,open:c,onClose:g,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(T,{onClick:d,children:"Editar"}),e.jsx(T,{onClick:j,children:"Deletar"})]})]})}const te=({c:t,handleFunction:a})=>{const n=N()?.permissoes;function c(f){const v=new Date(f),w=v.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),y=v.toLocaleDateString("pt-BR");return`${w} ${y}`}const[b,g]=u.useState(!1),d=()=>{g(!b)},j=async()=>{await R.delete(t.id,t.numeroFIlial)&&(a(),k("Deletado","success"))};return e.jsx(p.Container,{children:e.jsxs(p.Card,{children:[e.jsxs(p.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",style:{paddingTop:5},children:[e.jsx("span",{className:"tag",children:"Resumo do Dia"}),e.jsxs("span",{className:"tag",children:[" Criador: ",e.jsx("small",{style:{color:"#000"},children:t?.usuario})]}),e.jsxs("h4",{className:"titulo",children:[t?.numeroFIlial," - ",t?.nomeFilial]})]}),e.jsxs(p.info_date,{className:"info-date",children:[e.jsxs("span",{children:["📅  ",c(t?.dataCriacao)]}),n?.includes("DELETE_LOGISTICO")&&e.jsx(De,{hendleClick:d,hendleClickDelete:j})]})]}),e.jsxs(p.Table,{children:[e.jsx(p.Thead,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"Disponível"}),e.jsx("th",{children:"Manutenção"}),e.jsx("th",{children:"Total"})]})}),e.jsx(p.Tbody,{children:t.itens.map((f,v)=>e.jsxs(p.Tr,{children:[e.jsx("td",{className:"bold",children:f?.tipo}),e.jsx("td",{className:"status-ativo",children:f?.qtdAtivo}),e.jsx("td",{className:"status-manutencao",children:f?.qtdManutencao}),e.jsx("td",{className:"status-total",children:f?.quantidadeTotal})]},v))})]}),b&&e.jsx(Ne,{handleInative:d,children:e.jsx(Re,{closed:a,onClickhTogle:a,registroId:t.id,itemMP:t.itens})})]})})},Be=W`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,q={FilterArea:s.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */    
    @media (min-width: 768px) {
      width: auto;
     
    }
  `,SelectGroup:s.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:s.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:t})=>t?`${Be} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:s.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:s.select`
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
  `,Container:s.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,AddButton:s.button`
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
  `};function Ee({listaFiliais:t,loadingRel:a,carregarDadosLogistico:i,handleClick:n}){const c=Z(),b=()=>{c("/Logistico/novo-logistico")};return e.jsx(q.FilterArea,{style:{gap:"15px",flexWrap:"wrap"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs(q.AddButton,{onClick:b,children:[e.jsx(ee,{}),"Novo Card"]}),e.jsx(q.SelectGroup,{children:e.jsxs(q.Select,{onChange:g=>i(g.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),t.map((g,d)=>e.jsxs("option",{value:g?.filial,children:[g?.filial," - ",g?.nome]},d))]})}),e.jsx(q.RefreshButton,{loading:a,disabled:a,onClick:n,title:"Atualizar dados",children:e.jsx(V,{})})]})})}const Pe=[{icon:e.jsx(U,{}),name:"Adicionar",router:"/Logistico/novo-logistico"},{icon:e.jsx(de,{}),name:"Todas os itens",router:"/Logistico/listaFiliais"}],Oe=()=>{const[t,a]=u.useState([]),[i,n]=u.useState(!1),[c,b]=u.useState([]),g=location.pathname+location.search+location.hash,{filial:d}=Q(),j=N(),f=async l=>{b([]),n(!0);const o=t.flatMap(r=>r.filial);try{const r=await R.lista(l,o);r?.logisticoFilias&&b(r.logisticoFilias)}catch{k("Erro ao carregar dados logísticos","error")}finally{n(!1)}},v=u.useCallback(async()=>{try{const l=await _.FiliaisUsuario(j?.id);l?.acess&&a(l.acess)}catch{k("Erro ao carregar filiais","error")}},[]);u.useEffect(()=>{sessionStorage.setItem("redirectAfterLogin",g),v()},[]),u.useEffect(()=>{t.length>0&&f(d)},[t,d]);const[w,y]=u.useState(!1),z=async()=>{y(!0);try{f(),y(!1)}finally{y(!1)}};return e.jsxs(p.Main,{children:[e.jsxs(p.HeaderCard,{children:[e.jsxs(p.TitleSection,{children:[e.jsx("small",{children:"Materiais Logistico"}),e.jsxs("h2",{children:["Painel Logístico - ",d||"Geral"]})]}),e.jsx(Ee,{listaFiliais:t,loadingRel:w,carregarDadosLogistico:l=>f(l),handleClick:z})]}),i&&e.jsx(J,{}),!i&&c.length===0&&e.jsx(Y,{}),c.map((l,o)=>e.jsx(te,{c:l,handleFunction:f},o)),e.jsx(G.ButtonContainer,{children:e.jsx(je,{actions:Pe})})]})},$e=()=>{const[t,a]=u.useState(!1),{filial:i}=Q(),n=Z(),[c,b]=u.useState([]),g=N(),[d,j]=u.useState([]),f=u.useCallback(async()=>{try{b([]),a(!0);const o=await _.FiliaisUsuario(g?.id);o?.acess&&(b(o.acess),j(o.acess))}catch{a(!1),k("Erro ao carregar filiais","error")}finally{a(!1)}},[]);u.useEffect(()=>{f()},[i]);const v=o=>{setTimeout(()=>{n(`/logistico/detalhes-filial/${o}`)},300)},[w,y]=u.useState(!1),z=async()=>{y(!0);try{y(!0)}finally{y(!1)}};function l(o){if(!o&&!o){j(c);return}const r=Number(o);var C=c.filter(E=>E.filial===r);j(C)}return e.jsxs(p.Main,{children:[e.jsxs(p.HeaderCard,{children:[e.jsx(p.TitleSection,{children:e.jsxs("h2",{children:["Painel Logístico - Unidade ",i||"Geral"]})}),e.jsxs(p.FilterArea,{children:[e.jsxs(p.SelectGroup,{children:[e.jsx(p.Label,{children:"Filiais:"}),e.jsxs(p.Select,{onChange:o=>l(o.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),c.map((o,r)=>e.jsxs("option",{value:o?.filial,children:[o?.filial," - ",o?.nome]},r))]})]}),e.jsx(p.RefreshButton,{loading:w,disabled:w,onClick:z,children:e.jsx(V,{})})]})]}),t&&e.jsx(J,{}),!t&&c.length===0&&e.jsx(Y,{}),d.map((o,r)=>e.jsx(p.Container,{children:e.jsx(p.Card,{style:{cursor:"pointer"},onClick:()=>v(o?.filial),children:e.jsxs(p.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",children:[e.jsxs("span",{className:"tag",children:["Resumo  CD-",o.numeroFilial]}),e.jsx("h3",{children:o?.nome})]}),e.jsx("div",{className:"info-date",children:e.jsx("span",{children:e.jsx(ee,{})})})]})})},r))]})},Ge=()=>{const[t,a]=u.useState(!1),[i,n]=u.useState([]),{filial:c}=Q(),b=async()=>{n([]),a(!0);try{const f=await R.listaGerais(c);f?.logisticoFilias.content&&n(f.logisticoFilias.content)}catch{k("Erro ao carregar dados logísticos","error")}finally{a(!1)}};u.useEffect(()=>{b()},[]);const[g,d]=u.useState(!1),j=async()=>{d(!0);try{b(),d(!0)}finally{d(!1)}};return e.jsxs(p.Main,{children:[e.jsxs(p.HeaderCard,{children:[e.jsxs(p.TitleSection,{children:[e.jsx("small",{children:"Controle de Materiais"}),e.jsxs("h2",{children:["Painel Logístico - ",c||"Geral"]})]}),e.jsxs(p.FilterArea,{children:[e.jsxs(p.SelectGroup,{children:[e.jsx(p.Label,{children:"Filiais:"}),e.jsx("input",{type:"text"})]}),e.jsx(p.RefreshButton,{loading:g,disabled:g,onClick:j,children:e.jsx(V,{})})]})]}),t&&e.jsx(J,{}),!t&&i.length===0&&e.jsx(Y,{}),i.map((f,v)=>e.jsx(te,{c:f,handleFunction:b},v))]})},Ke=()=>e.jsxs(me,{children:[e.jsxs(S,{path:"/",element:e.jsx(we,{}),children:[e.jsx(S,{index:!0,element:e.jsx(he,{to:"dashboard",replace:!0})}),e.jsx(S,{path:"novo-logistico",element:e.jsx(Me,{})}),e.jsx(S,{path:"dashboard",element:e.jsx(Oe,{})}),e.jsx(S,{path:"listaFiliais",element:e.jsx($e,{})}),e.jsx(S,{path:"detalhes-filial/:filial",element:e.jsx(Ge,{})})]}),e.jsx(S,{path:"*",element:e.jsx(ve,{})})]});export{Ke as default};
