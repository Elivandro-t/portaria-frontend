import{r as c,j as e,d as ue,i as F,ar as xe,B as fe,as as ge,I as ee,K as he,b as $,A as be,W as je,$ as ve}from"./mui-_wqMIBiI.js";import{d as o,m as G,j as Ce,b as oe,n as E,A as we,L as Se}from"./index-BYSqOyoE.js";import{M as Ie}from"./BotaoVoltar-CxvXsGU3.js";import{s as K,c as D}from"./PortariaRoutes-CKRfdjmf.js";import{i as Ae,u as ye,b as Re}from"./menuConfig-C5Fu2Emn.js";import"./react-OvXVS5lI.js";import"./NotFund-CATxkBTh.js";const t={Area:o.div`
    background-color: #f1f5f9; /* Fundo levemente cinza para destacar o card branco */
    min-height: 100vh;
    padding: 10px;
    font-family: 'Inter', -apple-system, sans-serif;

    @media screen and (min-width: 768px) {
      padding: 40px 20px;
    }
  `,Container:o.div`
    max-width: 600px; /* Largura ideal para leitura em card */
    margin: auto;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,heanderPedido:o.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f1f5f9;
  `,tituloPedido:o.h4`
    margin: 0;
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,status:o.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,Chip:o.div`
    padding: 6px 14px;
    font-weight: 700;
    border-radius: 30px;
    color: ${({color:r})=>r||"#2563eb"};
    background: ${({color:r})=>`${r}10`}; /* Fundo translúcido */
    font-size: 11px;
    border: 1px solid ${({color:r})=>`${r}20`};
  `,CardCentro:o.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    border-bottom: 1px dashed #e2e8f0;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      text-align: left;
      align-items: center;

      gap: 24px;
    }
  `,Image:o.img`
    width: 120px;
    height: 120px;
    border-radius: 50%; /* Estilo Avatar Circular para UX de Pessoas */
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 16px;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,ItemDetails:o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,Card:o.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,SummaryRow:o.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* Duas colunas sempre, para ser compacto */
    gap: 16px;

    @media screen and (max-width: 400px) {
      grid-template-columns: 1fr; /* Coluna única só em telas muito pequenas */
    }
  `,AreaItemJust:o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
     @media screen and (max-width: 700px) {
      align-items: start;
    }
  `,AreaItemJustCenter:o.div` display: flex; flex-direction: column; gap: 4px; `,AreaItemJustRigth:o.div` display: flex; flex-direction: column; gap: 4px; `,Label:o.span`
    font-size: 10px;
    font-weight: 700;
    color: #94a3b8; /* Slate 400 */
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,LabelSubtitulo:o.span`
    font-size: 14px;
    font-weight: 600;
    color: #1e293b; /* Slate 800 */
    line-height: 1.2;
  `,LabelDescrip:o.span`
    font-size: 14px;
    font-weight: 400;
    color: #1e293b; /* Slate 800 */
    line-height: 1.2;
  `,DestaqueNome:o(o.span``)`
    font-size: 1.25rem;
    font-weight: 800;
    color: #0f172a;
    display: block;
  `,imagemArea:o.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;
  `,ItemImage:o.img`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s;
    &:hover { transform: scale(1.05); }
  `,Button:o.button`
    display: ${({ativo:r})=>r?"flex":"none"};
    align-items: center;
    justify-content: center;
    background-color: #4f46e5;
    color: #fff;
    border: none;
    padding: 16px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    
    &:active { transform: scale(0.98); }
  `,semItens:o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #94a3b8;
  `,iconSemItens:o(Ie)` font-size: 48px; margin-bottom: 10px; `,edit:o.div` margin: 0; `,p:o.p` margin: 0; `,ImagemItemRecebido:o.div` display: flex; flex-direction: column; gap: 8px; `},N={PreviewImage:o.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 8px;
`,Text:o.p`
  color: #4b5563;
  font-size: 15px;
  text-align: center;
`,RemoveButton:o.button`
  position: absolute;
  top: 2px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;

  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`,Div:o.div`

    
`},ke=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({isActive:r})=>r?"#6366f1":"#e2e8f0"};
  background-color: ${({isActive:r})=>r?"#f8fafc":"#ffffff"};
  border-radius: 16px;
  padding: 20px;
  min-height: 180px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  text-align: center;

  &:hover {
    border-color: #cbd5e1;
  }
`,Le=({onFileSelect:r,resetSignal:n,titulo:d})=>{const[a,l]=c.useState(null),[p,x]=c.useState(0),[g,f]=c.useState(!1),w=c.useCallback(async j=>{const v=j[0];if(v&&v.type.startsWith("image/")){l(URL.createObjectURL(v)),f(!0),x(0);const z={maxSizeMB:1,maxWidthOrHeight:1280,useWebWorker:!0,onProgress:C=>x(C)};try{const C=await Ae(v,z);r?.(C),x(100)}catch(C){console.error("Erro ao comprimir a imagem:",C)}finally{setTimeout(()=>f(!1),600)}}},[r]),{getRootProps:h,getInputProps:I,isDragActive:u,inputRef:b}=ye({onDrop:w,accept:{"image/*":[]},multiple:!1,disabled:g}),A=j=>{j.stopPropagation(),l(null),x(0),r?.(null),b.current&&(b.current.value="")};return c.useEffect(()=>{l(null),x(0),f(!1),b.current&&(b.current.value="")},[n]),e.jsxs(ke,{...h(),isActive:u,children:[e.jsx("input",{...I(),ref:b,capture:"environment",accept:"image/*"}),g?e.jsxs(ue,{sx:{width:"100%",px:2},children:[e.jsxs(F,{variant:"body2",color:"text.secondary",sx:{mb:1,fontWeight:600},children:["carregando: ",p,"%"]}),e.jsx(xe,{variant:"determinate",value:p,sx:{height:8,borderRadius:4,backgroundColor:"#f1f5f9","& .MuiLinearProgress-bar":{backgroundColor:"#6366f1",borderRadius:4}}})]}):a?e.jsxs(N.Div,{children:[e.jsx(N.RemoveButton,{onClick:A,children:"×"}),e.jsx(N.PreviewImage,{src:a,alt:"Prévia"}),e.jsx(N.Text,{children:d})]}):e.jsx(N.Text,{children:u?"Solte a imagem aqui....":d||"Arraste uma imagem ou clique para selecionar"})]})},De=({src:r,alt:n,open:d,onClose:a})=>e.jsx(fe,{open:d,onClick:a,sx:{zIndex:9999,backgroundColor:"rgba(121, 124, 131, 0.9)",backdropFilter:"blur(8px)"},children:e.jsx(ge,{in:d,children:e.jsxs(ze,{onClick:l=>l.stopPropagation(),children:[e.jsx(Te,{children:e.jsx(ee,{onClick:a,sx:{color:"rgba(255,255,255,0.7)",backgroundColor:"rgba(255,255,255,0.1)",transition:"0.3s","&:hover":{color:"#fff",backgroundColor:"rgba(255,255,255,0.2)",transform:"rotate(90deg)"}},children:e.jsx(he,{fontSize:"small"})})}),e.jsx(Oe,{children:e.jsx(Pe,{src:r,alt:n||"Visualização",onDragStart:l=>l.preventDefault()})}),n&&e.jsx(Ne,{children:n})]})})}),Ee=G`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,ze=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 1000px;
  outline: none;
`,Te=o.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`,Oe=o.div`
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${Ee} 0.3s ease-out;
`,Pe=o.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  user-select: none;
`,Ne=o.p`
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-top: 16px;
  font-weight: 500;
`,s={container:o.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 23, 42, 0.6); // Slate escuro com transparência
    backdrop-filter: blur(8px);
    padding: 20px;
  `,container_int:o.section`
    width: 100%;
    max-width: 500px; // Aumentado levemente para melhor leitura
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #f1f5f9;
  `,header:o.div`
    padding: 24px 24px 16px;
    background-color: #fff;
    border-bottom: 1px solid #f1f5f9;
    
    h2 {
      margin: 0;
      font-size: 1.2rem;
      color: #0f172a; // Slate 900
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    p {
      margin: 4px 0 0;
      font-size: 0.85rem;
      color: #64748b;
    }
  `,content:o.div`
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr; // Grid de duas colunas para campos menores
    gap: 16px;
    max-height: 70vh;
    overflow-y: auto;

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
  `,CamposInput:o.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // Se quiser que um campo ocupe a linha toda, adicionamos a prop grid-column
    &.full-width { grid-column: span 2; }
  `,label:o.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  `,Campos:o.input`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e2e8f0;
    background-color: #fff;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: #1e293b;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    &::placeholder { color: #94a3b8; }
  `,SelectItens:o.select`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e2e8f0;
    background-color: #fff;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #1e293b;
    cursor: pointer;
    appearance: none; // Remove seta padrão para estilo customizado se desejar
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }
  `,Options:o.option`
    padding: 10px;
  `,buttons:o.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 20px 24px;
    background-color: #f8fafc;
    border-top: 1px solid #f1f5f9;
  `},X=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],Be=({handleCancel:r,data:n})=>{const{register:d,handleSubmit:a,setValue:l,watch:p}=Ce({defaultValues:{nomeCompleto:n.nomeCompleto||"",placaVeiculo:n?.placaVeiculo||"",numeroTelefone:n?.visitante.numeroTelefone||"",bloco:n.bloco||"",tipoPessoa:n.tipPessoa,tipoDeAcesso:n?.visitante.tipoAcesso||n.visitante.recorrencia?.nome}}),x=oe(),g=p("bloco"),f=p("tipoPessoa"),w=p("ocupacaoLiberada"),h=p("tipoDeAcesso"),[I,u]=c.useState([]),[b,A]=c.useState([]),[j,v]=c.useState([]);async function z(i){i.id=n.id,i.tipoDeAcesso==="RECORRENTE TEMPORARIO"&&i.dataAcesso==null&&E("informa uma data valida","error");const U=await Re.atualizarRegistro(i);U.msg&&(E(U.msg,"success"),r())}const C=async()=>{const i=await K.lista();i.tipoPessoa&&A(i.tipoPessoa)},T=async()=>{const i=await K.recorrecia();i.recorrencia&&v(i.recorrencia)};c.useEffect(()=>{C(),T()},[]),c.useEffect(()=>{const i=async()=>{const y=await D.blocos();y.blocos&&u(y?.blocos)};l("nomeCompleto",n.nomeCompleto||""),l("placaVeiculo",n.placaVeiculo||""),l("numeroTelefone",n.visitante.numeroTelefone||""),l("ocupacaoLiberada",n.ocupacaoLiberada||""),l("bloco",n.bloco||""),i()},[n,l]);const B=(x?.permissoes||[]).includes("GERENCIAR_USUARIOS");return e.jsx(s.container,{children:e.jsxs(s.container_int,{children:[e.jsxs(s.header,{children:[e.jsx("h2",{children:"Editar Registro"}),e.jsx("p",{children:"Atualize os dados de acesso do visitante abaixo."})]}),e.jsxs(s.content,{children:[e.jsxs(s.CamposInput,{className:"full-width",children:[e.jsx(s.label,{children:"Nome Completo *"}),e.jsx(s.Campos,{type:"text",placeholder:"Ex: João Silva",...d("nomeCompleto",{required:"Nome é obrigatório"})})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Telefone *"}),e.jsx(s.Campos,{type:"text",placeholder:"(00) 00000-0000",...d("numeroTelefone")})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Placa Veículo *"}),e.jsx(s.Campos,{type:"text",placeholder:"ABC1234",...d("placaVeiculo",{required:"Obrigatório",pattern:{value:/^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,message:"Formato inválido"}})})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Bloco"}),e.jsxs(s.SelectItens,{...d("bloco"),value:g,onChange:i=>l("bloco",i.target.value),children:[I.some(i=>i.nome===g)?null:e.jsx(s.Options,{value:g,children:g}),I.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Ocupação"}),e.jsxs(s.SelectItens,{...d("ocupacaoLiberada"),value:w,onChange:i=>l("ocupacaoLiberada",i.target.value),children:[X.some(i=>i.nome===w)?null:e.jsx(s.Options,{value:w,children:w}),X.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),e.jsxs(s.CamposInput,{className:"full-width",children:[e.jsx(s.label,{children:"Tipo de Pessoa"}),e.jsxs(s.SelectItens,{...d("tipoPessoa"),value:f,onChange:i=>l("tipoPessoa",i.target.value),children:[b.some(i=>i.nome.toLowerCase()===g.toLowerCase())?null:e.jsx(s.Options,{value:f,children:f}),b.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),B&&e.jsxs(c.Fragment,{children:[e.jsxs(s.CamposInput,{className:"full-width",children:[e.jsx(s.label,{children:"Recorrência de Acesso"}),e.jsxs(s.SelectItens,{...d("tipoDeAcesso"),value:h,onChange:i=>l("tipoDeAcesso",i.target.value),children:[j.some(i=>i?.nome.toLowerCase()===h.toLowerCase())?null:e.jsx(s.Options,{value:h,children:h}),j.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),h?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(s.CamposInput,{className:"full-width",children:[e.jsx(s.label,{children:"Data Expiração"}),e.jsx(s.Campos,{type:"date",...d("dataAcesso")})]})]})]}),e.jsxs(s.buttons,{children:[e.jsx($,{variant:"outlined",onClick:r,sx:{borderRadius:"8px",textTransform:"none",fontWeight:600,color:"#64748b",borderColor:"#e2e8f0","&:hover":{backgroundColor:"#f8fafc",borderColor:"#cbd5e1"}},children:"Cancelar"}),e.jsx($,{variant:"contained",onClick:a(z),sx:{borderRadius:"8px",textTransform:"none",fontWeight:600,backgroundColor:"#2563eb",boxShadow:"none","&:hover":{backgroundColor:"#1d4ed8",boxShadow:"none"}},children:"Salvar Alterações"})]})]})})},Ue=G`
  0% {
    width: 0%;
    background-color: #15c4faff; /* amarelo */
  }

  50% {
    width: 50%;
    background-color: #15fadbff; /* continua amarelo */
  }

  100% {
    width: 100%;
    background-color: #16a34a; /* verde */
  }
`,Q={container:o.div`
      margin-top: 15px;
      color: #16a34a;
      font-weight: bold;
    `,loadingBar:o.div`
      height: 6px;
      width: 0%;
      background: #16a34a;
      animation: ${Ue} 2s linear forwards;
    
    `},Y=({status:r,titulo:n})=>e.jsxs("div",{children:[r==="LOADING"&&e.jsx(Q.loadingBar,{}),r==="SUCCESS"&&e.jsxs(Q.container,{children:["✅ ",n]})]}),$e=G`
   0% {
    width: 100%;
    background-color: #15c4faff; /* amarelo */
  }

  100% {
    width: 0%;
    background-color: #16a34a; /* verde */
  }
`,L={container:o.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;

    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 560px) {
      padding: 0 25px;
    }
  `,confirm:o.div`
   display: flex;
   width: 100%;
   height: 250px;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 20px;
   button{
    bottom: 0;
   }
  `,container_int:o.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,header:o.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,content:o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,buttons:o.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
    @media screen and (max-width: 560px) {
     font-size:14px;
    }
  `,loadingBar:o.div`
        height: 6px;
        width: 100%;
        background: #2197e6;
        animation: ${$e} 2s linear forwards;
      
    `},_e=({handleConfirm:r,handleCancel:n,message:d,ativoBtn:a,btnName:l,confirm:p,titutlo:x})=>e.jsx(L.container,{children:e.jsxs(L.container_int,{children:[p==="LOADING"&&e.jsx(Y,{status:"LOADING",titulo:x}),p==="SUCCESS"&&e.jsxs(L.confirm,{children:[e.jsx(Y,{status:"SUCCESS",titulo:x}),e.jsx(L.loadingBar,{onAnimationEnd:()=>{setTimeout(()=>{n()},1e3)}})]}),p==="CONFIRM"&&e.jsxs(L.content,{children:[e.jsx(F,{variant:"h6",sx:{mb:2},children:e.jsx(F,{dangerouslySetInnerHTML:{__html:d},variant:"h6",sx:{mb:2}})}),e.jsxs(L.buttons,{children:[a&&e.jsx($,{variant:"contained",color:"success",onClick:r,sx:{borderRadius:2,fontSize:10},children:l}),e.jsx($,{variant:"outlined",onClick:n,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})]})}),He=()=>{const r=oe(),d=new URLSearchParams(window.location.search).get("order"),[a,l]=c.useState(null),[p,x]=c.useState(null),[g,f]=c.useState(0),w=m=>{x(m)},h=async()=>{const m=await D.consuta_portaria(d);m!=null&&(l(m),f(k=>k+1))};c.useEffect(()=>{window.scrollTo(0,0),h()},[d]);const[I,u]=c.useState(!1),[b,A]=c.useState(!1),[j,v]=c.useState(!1),[z,C]=c.useState(""),T=a?.status.includes("AGUARDANDO_ENTRADA"),[V,B]=c.useState(""),[i,y]=c.useState(""),[U,J]=c.useState(""),_=m=>{v(!0),C(m)},ae=()=>{A(!0)},te=()=>{A(!1),h()},ie=async m=>{u(!0);const O={usuarioId:r?.id,registroId:m};if(p!=null)try{R("LOADING");const S=await D.alterarEntrada(O,p);if(S){f(M=>M+1);const P=await D.consuta_portaria(d);P&&(l(P),u(!1),R("SUCCESS"),J(S.msg))}}catch{E("Erro ao solicitar liberação","error")}finally{u(!1)}else setTimeout(()=>{E("Selecione uma imagem","error"),u(!1)},2e3)},[se,q]=c.useState(!1),W=r?.permissoes||[],re=W.includes("REGISTRAR_ENTRADA"),H=W.includes("EDITAR_REGISTRO"),ne=async m=>{u(!0),R("CONFIRM");const O={usuarioId:r?.id,registroId:m};if(p!=null){R("LOADING");const S=await D.alterarSaida(O,p);if(S){J(S.msg);const P=await D.consuta_portaria(d);f(M=>M+1),P&&(l(P),R("SUCCESS"))}}else setTimeout(()=>{E("Selecione uma imagem","error"),u(!1)},2e3)},[le,R]=c.useState(""),ce=()=>{p!=null?(q(!0),R("CONFIRM"),T?(B("Liberar Entrada"),y(`Deseja liberar a entrada de <b>${a?.nomeCompleto}</b>?`)):(B("Liberar Saida"),y(`Deseja liberar a saída de <b>${a?.nomeCompleto}</b>?`))):setTimeout(()=>{E("Selecione uma imagem","error"),u(!1)},100)},de=()=>{f(m=>m+1),u(!1),q(!1)},pe=()=>{T?ie(a?.id):ne(a?.id)},me=m=>{switch(m){case"AGUARDANDO_ENTRADA":return"#2563EB";case"AGUARDANDO_SAIDA":return"#D97706";case"SAIDA_LIBERADA":return"#059669";default:return"#DC2626"}};function Z(m){const k=new Date(m),O=k.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),S=k.toLocaleDateString("pt-BR");return`${O} ${S}`}return e.jsx(e.Fragment,{children:a?e.jsxs("div",{children:[e.jsxs(t.Area,{children:[e.jsxs(t.Container,{children:[a.ativo&&a?.prioridadeAtrasoAtivo&&e.jsx(be,{icon:e.jsx(je,{fontSize:"small",sx:{fontSize:"0.75rem"}}),severity:"warning",sx:{padding:"0 5px",fontSize:"0.52rem",display:"flex",alignItems:"center","& .MuiAlert-icon":{fontSize:"0.9rem",marginRight:"4px"}},children:a.prioridadeAviso?a.prioridadeAviso:a.prioridadeAtraso}),e.jsxs(t.heanderPedido,{children:[e.jsxs(t.tituloPedido,{children:["PRT: #",a?.protocolo]}),e.jsxs(t.status,{children:[e.jsx(t.p,{}),e.jsx(t.Chip,{color:me(a?.status),children:a?.status.replace("_"," ")}),H&&!a.status.includes("SAIDA_LIBERADA")&&!a.status.includes("AGUARDANDO_SAIDA")&&e.jsx(t.edit,{onClick:ae,children:e.jsx(ee,{"aria-label":"mais opções",sx:{color:"#000"},children:e.jsx(ve,{})})})]})]}),e.jsxs(t.CardCentro,{children:[e.jsx(t.Image,{onClick:()=>_(a.visitante.imagem),src:a?.visitante.imagem}),e.jsxs(t.ItemDetails,{children:[e.jsxs(t.AreaItemJust,{children:[e.jsx(t.Label,{children:"Nome Completo:"}),e.jsx(t.LabelSubtitulo,{children:a?.visitante?.nomeCompleto})]}),e.jsxs(t.AreaItemJust,{children:[e.jsx(t.Label,{children:"Tipo de Pessoa:"}),e.jsx(t.LabelSubtitulo,{children:a?.visitante.tipoPessoa.toUpperCase()})]})]}),e.jsxs(t.ItemDetails,{children:[e.jsxs(t.AreaItemJust,{children:[e.jsx(t.Label,{children:"Categoria de Acesso:"}),e.jsx(t.LabelSubtitulo,{children:a?.visitante?.tipoAcesso||a.visitante?.recorrencia?.nome})]}),e.jsxs(t.AreaItemJust,{children:[e.jsx(t.Label,{children:"Placa do Veículo:"}),e.jsx(t.LabelSubtitulo,{children:a?.placaVeiculo})]})]})]}),e.jsxs(t.Card,{children:[e.jsxs(t.SummaryRow,{children:[e.jsxs(t.AreaItemJustCenter,{children:[e.jsx(t.Label,{children:"Ocupação Liberada:"}),e.jsx(t.LabelSubtitulo,{children:a?.ocupacaoLiberada})]}),e.jsxs(t.AreaItemJustRigth,{children:[e.jsx(t.Label,{children:"Data Criacao:"}),e.jsx(t.LabelSubtitulo,{style:{fontSize:11},children:new Date(a?.dataCriacao).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})})]})]}),e.jsxs(t.SummaryRow,{children:[e.jsxs(t.AreaItemJustCenter,{children:[e.jsx(t.Label,{children:"Destino da Visita:"}),e.jsx(t.LabelSubtitulo,{children:a?.bloco})]}),e.jsxs(t.AreaItemJustRigth,{children:[e.jsx(t.Label,{children:"Unidade / Filial:"}),e.jsx(t.LabelSubtitulo,{children:a?.visitante.filial?a?.visitante.filial:"N/A"})]})]}),a?.Obs&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(t.Label,{children:"Observações:"}),e.jsx(t.LabelDescrip,{children:a?.Obs})]}),e.jsxs(t.imagemArea,{children:[a?.entrada&&a?.entrada?.imagem&&e.jsxs(t.ImagemItemRecebido,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Imagem Entrada:"})}),e.jsx("small",{style:{fontSize:10,color:"#333"},children:Z(a?.entrada?.dataEntrada)}),e.jsx(t.ItemImage,{onClick:()=>_(a.entrada.imagem),src:a?.entrada?.imagem})]}),a?.saida&&a?.saida?.imagem&&e.jsxs(t.ImagemItemRecebido,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Imagem Saida:"})}),e.jsx("small",{style:{fontSize:10,color:"#333"},children:Z(a?.saida?.dataSaida)}),e.jsx(t.ItemImage,{onClick:()=>_(a?.saida?.imagem),src:a?.saida?.imagem})]})]}),re&&e.jsxs(e.Fragment,{children:[a?.ativo&&e.jsxs(t.ImagemItemRecebido,{children:[e.jsx(t.LabelSubtitulo,{children:"Imagem de Inspeção do Porta-malas *"}),e.jsx(Le,{onFileSelect:w,resetSignal:g})]}),e.jsx(t.Button,{ativo:a?.ativo,onClick:ce,children:T?"Liberar Entrada":"Liberar Saida"})]})]}),e.jsx(we,{titulo:"info",msg:`Autorizado por ${a?.autorizador?.nome} (${a?.autorizador?.ocupacaoOperacional})`})]}),j&&e.jsx(De,{src:z,open:j,onClose:()=>v(!1)}),I&&e.jsx(Se,{})]}),H&&b&&e.jsx(Be,{data:a,handleCancel:te,message:"",ativoBtn:!1}),se&&e.jsx(_e,{confirm:le,handleConfirm:pe,handleCancel:de,message:i,ativoBtn:!0,btnName:V,titutlo:U})]}):e.jsx(e.Fragment,{children:e.jsxs(t.semItens,{children:[e.jsx(t.iconSemItens,{}),"Nenhum item encontrado"]})})})};export{He as default};
