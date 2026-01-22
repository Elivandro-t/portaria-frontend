import{r as l,j as e,d as me,k as M,ag as xe,B as ue,ah as fe,I as K,ai as ge,b as U,A as he,W as be,J as je}from"./mui-ChBlBfgN.js";import{d as o,m as G,i as ve,b as Q,n as D,A as Ce,L as Ie}from"./index-CS6IxeNG.js";import{M as we}from"./filiasAPi-C54P03xb.js";import{s as Y,c as k}from"./PortariaRoutes-Ctxe32YU.js";import{i as Se,u as ye,b as Ae}from"./menuConfig-Fp3u0O0b.js";import"./react-OvXVS5lI.js";import"./HeaderSecundario-qKYP8FlG.js";import"./NotFund-aO3XNhde.js";const a={Area:o.div`
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
  `,iconSemItens:o(we)` font-size: 48px; margin-bottom: 10px; `,edit:o.div` margin: 0; `,p:o.p` margin: 0; `,ImagemItemRecebido:o.div` display: flex; flex-direction: column; gap: 8px; `},B={PreviewImage:o.img`
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

    
`},Re=o.div`
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
`,ke=({onFileSelect:r,resetSignal:n,titulo:d})=>{const[t,c]=l.useState(null),[p,u]=l.useState(0),[g,f]=l.useState(!1),h=l.useCallback(async C=>{const j=C[0];if(j&&j.type.startsWith("image/")){c(URL.createObjectURL(j)),f(!0),u(0);const E={maxSizeMB:1,maxWidthOrHeight:1280,useWebWorker:!0,onProgress:v=>u(v)};try{const v=await Se(j,E);r?.(v),u(100)}catch(v){console.error("Erro ao comprimir a imagem:",v)}finally{setTimeout(()=>f(!1),600)}}},[r]),{getRootProps:w,getInputProps:L,isDragActive:x,inputRef:b}=ye({onDrop:h,accept:{"image/*":[]},multiple:!1,disabled:g}),S=C=>{C.stopPropagation(),c(null),u(0),r?.(null),b.current&&(b.current.value="")};return l.useEffect(()=>{c(null),u(0),f(!1),b.current&&(b.current.value="")},[n]),e.jsxs(Re,{...w(),isActive:x,children:[e.jsx("input",{...L(),ref:b,capture:"environment",accept:"image/*"}),g?e.jsxs(me,{sx:{width:"100%",px:2},children:[e.jsxs(M,{variant:"body2",color:"text.secondary",sx:{mb:1,fontWeight:600},children:["carregando: ",p,"%"]}),e.jsx(xe,{variant:"determinate",value:p,sx:{height:8,borderRadius:4,backgroundColor:"#f1f5f9","& .MuiLinearProgress-bar":{backgroundColor:"#6366f1",borderRadius:4}}})]}):t?e.jsxs(B.Div,{children:[e.jsx(B.RemoveButton,{onClick:S,children:"×"}),e.jsx(B.PreviewImage,{src:t,alt:"Prévia"}),e.jsx(B.Text,{children:d})]}):e.jsx(B.Text,{children:x?"Solte a imagem aqui....":d||"Arraste uma imagem ou clique para selecionar"})]})},De=({src:r,alt:n,open:d,onClose:t})=>e.jsx(ue,{open:d,onClick:t,sx:{zIndex:9999,backgroundColor:"rgba(121, 124, 131, 0.9)",backdropFilter:"blur(8px)"},children:e.jsx(fe,{in:d,children:e.jsxs(Ee,{onClick:c=>c.stopPropagation(),children:[e.jsx(ze,{children:e.jsx(K,{onClick:t,sx:{color:"rgba(255,255,255,0.7)",backgroundColor:"rgba(255,255,255,0.1)",transition:"0.3s","&:hover":{color:"#fff",backgroundColor:"rgba(255,255,255,0.2)",transform:"rotate(90deg)"}},children:e.jsx(ge,{fontSize:"small"})})}),e.jsx(Te,{children:e.jsx(Pe,{src:r,alt:n||"Visualização",onDragStart:c=>c.preventDefault()})}),n&&e.jsx(Oe,{children:n})]})})}),Le=G`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,Ee=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 1000px;
  outline: none;
`,ze=o.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`,Te=o.div`
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${Le} 0.3s ease-out;
`,Pe=o.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  user-select: none;
`,Oe=o.p`
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-top: 16px;
  font-weight: 500;
`,s={container:o.div`
    position: fixed;
    inset: 0; // Atalho para top/left/right/bottom: 0
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px); // Efeito moderno de desfoque ao fundo
    padding: 20px;
  `,container_int:o.section`
    width: 100%;
    max-width: 450px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,header:o.div`
    padding: 20px 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #1a1a1a;
      font-family: "Inter", sans-serif;
      font-weight: 600;
    }
  `,content:o.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px; // Espaçamento consistente entre campos
  `,CamposInput:o.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,label:o.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: #4b5563; // Cinza médio profissional
    font-family: "Inter", sans-serif;
    margin-bottom: 6px;
    display: block;
  `,Campos:o.input`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #2563eb;
      background-color: #fff;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  `,SelectItens:o.select`
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }
  `,Options:o.option`
    font-size: 14px;
    padding: 10px;
  `,buttons:o.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
    padding-top: 20px;
    border-top: 1px solid #f3f4f6;
  `},Be=({handleCancel:r,data:n})=>{const{register:d,handleSubmit:t,setValue:c,watch:p}=ve({defaultValues:{nomeCompleto:n.nomeCompleto||"",placaVeiculo:n?.placaVeiculo||"",numeroTelefone:n?.visitante.numeroTelefone||"",bloco:n.bloco||"",tipoPessoa:n.tipPessoa,tipoDeAcesso:n?.visitante.tipoAcesso||n.visitante.recorrencia?.nome}}),u=Q(),g=p("bloco"),f=p("tipoPessoa"),h=p("tipoDeAcesso"),[w,L]=l.useState([]),[x,b]=l.useState([]),[S,C]=l.useState([]);async function j(i){i.id=n.id,i.tipoDeAcesso==="RECORRENTE TEMPORARIO"&&i.dataAcesso==null&&D("informa uma data valida","error");const T=await Ae.atualizarRegistro(i);T.msg&&(D(T.msg,"success"),r())}const E=async()=>{const i=await Y.lista();i.tipoPessoa&&b(i.tipoPessoa)},v=async()=>{const i=await Y.recorrecia();i.recorrencia&&C(i.recorrencia)};l.useEffect(()=>{E(),v()},[]),l.useEffect(()=>{const i=async()=>{const z=await k.blocos();z.blocos&&L(z?.blocos)};c("nomeCompleto",n.nomeCompleto||""),c("placaVeiculo",n.placaVeiculo||""),c("numeroTelefone",n.visitante.numeroTelefone||""),c("bloco",n.bloco||""),i()},[n,c]);const $=(u?.permissoes||[]).includes("GERENCIAR_USUARIOS");return e.jsx(s.container,{children:e.jsx(s.container_int,{children:e.jsxs(s.content,{children:[e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Nome *"}),e.jsx(s.Campos,{type:"text",autoComplete:"current-password",placeholder:"Nome completo",...d("nomeCompleto",{required:"Nome E obrigatorio"})})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"telefone *"}),e.jsx(s.Campos,{type:"text",autoComplete:"current-password",placeholder:"Placa do veiculo",...d("numeroTelefone",{})})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Placa *"}),e.jsx(s.Campos,{type:"text",autoComplete:"current-password",placeholder:"Placa do veiculo",...d("placaVeiculo",{required:"Placa E obrigatorio",pattern:{value:/^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,message:"Formato de placa inválido. Ex: ABC1234 ou ABC1D23"}})})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Bloco"}),e.jsxs(s.SelectItens,{...d("bloco"),value:g,onChange:i=>c("bloco",i.target.value),children:[w.some(i=>i.nome===g)?null:e.jsx(s.Options,{value:g,children:g}),w.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Tipo Pessoa"}),e.jsxs(s.SelectItens,{...d("tipoPessoa"),value:f,onChange:i=>c("tipoPessoa",i.target.value),children:[x.some(i=>i.nome.toLowerCase()===g.toLowerCase())?null:e.jsx(s.Options,{value:f,children:f}),x.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),$&&e.jsxs(l.Fragment,{children:[e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Recorrencia de Acesso"}),e.jsxs(s.SelectItens,{...d("tipoDeAcesso"),value:h,onChange:i=>c("tipoDeAcesso",i.target.value),children:[S.some(i=>i?.nome.toLowerCase()===h.toLowerCase())?null:e.jsx(s.Options,{value:h,children:h}),S.map(i=>e.jsx(s.Options,{value:i.nome.toUpperCase(),children:i.nome},i.id))]})]}),h?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(s.CamposInput,{children:[e.jsx(s.label,{children:"Data "}),e.jsx(s.Campos,{placeholder:"data",type:"date",autoComplete:"current-password",...d("dataAcesso")})]})]}),e.jsxs(s.buttons,{children:[e.jsx(U,{variant:"contained",color:"error",onClick:t(j),sx:{borderRadius:2},children:"Atualizar"}),e.jsx(U,{variant:"outlined",onClick:r,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})})})},Ne=G`
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
`,Z={container:o.div`
      margin-top: 15px;
      color: #16a34a;
      font-weight: bold;
    `,loadingBar:o.div`
      height: 6px;
      width: 0%;
      background: #16a34a;
      animation: ${Ne} 2s linear forwards;
    
    `},X=({status:r,titulo:n})=>e.jsxs("div",{children:[r==="LOADING"&&e.jsx(Z.loadingBar,{}),r==="SUCCESS"&&e.jsxs(Z.container,{children:["✅ ",n]})]}),Ue=G`
   0% {
    width: 100%;
    background-color: #15c4faff; /* amarelo */
  }

  100% {
    width: 0%;
    background-color: #16a34a; /* verde */
  }
`,R={container:o.div`
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
        animation: ${Ue} 2s linear forwards;
      
    `},$e=({handleConfirm:r,handleCancel:n,message:d,ativoBtn:t,btnName:c,confirm:p,titutlo:u})=>e.jsx(R.container,{children:e.jsxs(R.container_int,{children:[p==="LOADING"&&e.jsx(X,{status:"LOADING",titulo:u}),p==="SUCCESS"&&e.jsxs(R.confirm,{children:[e.jsx(X,{status:"SUCCESS",titulo:u}),e.jsx(R.loadingBar,{onAnimationEnd:()=>{setTimeout(()=>{n()},1e3)}})]}),p==="CONFIRM"&&e.jsxs(R.content,{children:[e.jsx(M,{variant:"h6",sx:{mb:2},children:e.jsx(M,{dangerouslySetInnerHTML:{__html:d},variant:"h6",sx:{mb:2}})}),e.jsxs(R.buttons,{children:[t&&e.jsx(U,{variant:"contained",color:"success",onClick:r,sx:{borderRadius:2,fontSize:10},children:c}),e.jsx(U,{variant:"outlined",onClick:n,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})]})}),He=()=>{const r=Q(),d=new URLSearchParams(window.location.search).get("order"),[t,c]=l.useState(null),[p,u]=l.useState(null),[g,f]=l.useState(0),h=m=>{u(m)},w=async()=>{const m=await k.consuta_portaria(d);m!=null&&(c(m),f(A=>A+1))};l.useEffect(()=>{window.scrollTo(0,0),w()},[d]);const[L,x]=l.useState(!1),[b,S]=l.useState(!1),[C,j]=l.useState(!1),[E,v]=l.useState(""),N=t?.status.includes("AGUARDANDO_ENTRADA"),[$,i]=l.useState(""),[z,T]=l.useState(""),[ee,J]=l.useState(""),_=m=>{j(!0),v(m)},oe=()=>{S(!0)},te=()=>{S(!1),w()},ae=async m=>{x(!0);const P={usuarioId:r?.id,registroId:m};if(p!=null)try{y("LOADING");const I=await k.alterarEntrada(P,p);if(I){f(F=>F+1);const O=await k.consuta_portaria(d);O&&(c(O),x(!1),y("SUCCESS"),J(I.msg))}}catch{D("Erro ao solicitar liberação","error")}finally{x(!1)}else setTimeout(()=>{D("Selecione uma imagem","error"),x(!1)},2e3)},[ie,V]=l.useState(!1),q=r?.permissoes||[],se=q.includes("REGISTRAR_ENTRADA"),W=q.includes("EDITAR_REGISTRO"),re=async m=>{x(!0),y("CONFIRM");const P={usuarioId:r?.id,registroId:m};if(p!=null){y("LOADING");const I=await k.alterarSaida(P,p);if(I){J(I.msg);const O=await k.consuta_portaria(d);f(F=>F+1),O&&(c(O),y("SUCCESS"))}}else setTimeout(()=>{D("Selecione uma imagem","error"),x(!1)},2e3)},[ne,y]=l.useState(""),le=()=>{p!=null?(V(!0),y("CONFIRM"),N?(i("Liberar Entrada"),T(`Deseja liberar a entrada de <b>${t?.nomeCompleto}</b>?`)):(i("Liberar Saida"),T(`Deseja liberar a saída de <b>${t?.nomeCompleto}</b>?`))):setTimeout(()=>{D("Selecione uma imagem","error"),x(!1)},100)},ce=()=>{f(m=>m+1),x(!1),V(!1)},de=()=>{N?ae(t?.id):re(t?.id)},pe=m=>{switch(m){case"AGUARDANDO_ENTRADA":return"#2563EB";case"AGUARDANDO_SAIDA":return"#D97706";case"SAIDA_LIBERADA":return"#059669";default:return"#DC2626"}};function H(m){const A=new Date(m),P=A.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),I=A.toLocaleDateString("pt-BR");return`${P} ${I}`}return e.jsx(e.Fragment,{children:t?e.jsxs("div",{children:[e.jsxs(a.Area,{children:[e.jsxs(a.Container,{children:[t.ativo&&t?.prioridadeAtrasoAtivo&&e.jsx(he,{icon:e.jsx(be,{fontSize:"small",sx:{fontSize:"0.75rem"}}),severity:"warning",sx:{padding:"0 5px",fontSize:"0.52rem",display:"flex",alignItems:"center","& .MuiAlert-icon":{fontSize:"0.9rem",marginRight:"4px"}},children:t.prioridadeAviso?t.prioridadeAviso:t.prioridadeAtraso}),e.jsxs(a.heanderPedido,{children:[e.jsxs(a.tituloPedido,{children:["PRT: #",t?.protocolo]}),e.jsxs(a.status,{children:[e.jsx(a.p,{}),e.jsx(a.Chip,{color:pe(t?.status),children:t?.status.replace("_"," ")}),W&&!t.status.includes("SAIDA_LIBERADA")&&e.jsx(a.edit,{onClick:oe,children:e.jsx(K,{"aria-label":"mais opções",sx:{color:"#000"},children:e.jsx(je,{})})})]})]}),e.jsxs(a.CardCentro,{children:[e.jsx(a.Image,{onClick:()=>_(t.visitante.imagem),src:t?.visitante.imagem}),e.jsxs(a.ItemDetails,{children:[e.jsxs(a.AreaItemJust,{children:[e.jsx(a.Label,{children:"Nome Completo:"}),e.jsx(a.LabelSubtitulo,{children:t?.visitante?.nomeCompleto})]}),e.jsxs(a.AreaItemJust,{children:[e.jsx(a.Label,{children:"Tipo de Pessoa:"}),e.jsx(a.LabelSubtitulo,{children:t?.visitante.tipoPessoa.toUpperCase()})]})]}),e.jsxs(a.ItemDetails,{children:[e.jsxs(a.AreaItemJust,{children:[e.jsx(a.Label,{children:"Categoria de Acesso:"}),e.jsx(a.LabelSubtitulo,{children:t?.visitante?.tipoAcesso||t.visitante?.recorrencia?.nome})]}),e.jsxs(a.AreaItemJust,{children:[e.jsx(a.Label,{children:"Placa do Veículo:"}),e.jsx(a.LabelSubtitulo,{children:t?.placaVeiculo})]})]})]}),e.jsxs(a.Card,{children:[e.jsxs(a.SummaryRow,{children:[e.jsxs(a.AreaItemJustCenter,{children:[e.jsx(a.Label,{children:"Ocupação Liberada:"}),e.jsx(a.LabelSubtitulo,{children:t?.ocupacaoLiberada})]}),e.jsxs(a.AreaItemJustRigth,{children:[e.jsx(a.Label,{children:"Data Criacao:"}),e.jsx(a.LabelSubtitulo,{style:{fontSize:11},children:new Date(t?.dataCriacao).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})})]})]}),e.jsxs(a.SummaryRow,{children:[e.jsxs(a.AreaItemJustCenter,{children:[e.jsx(a.Label,{children:"Destino da Visita:"}),e.jsx(a.LabelSubtitulo,{children:t?.bloco})]}),e.jsxs(a.AreaItemJustRigth,{children:[e.jsx(a.Label,{children:"Unidade / Filial:"}),e.jsx(a.LabelSubtitulo,{children:t?.visitante.filial?t?.visitante.filial:"N/A"})]})]}),t?.Obs&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(a.Label,{children:"Observações:"}),e.jsx(a.LabelDescrip,{children:t?.Obs})]}),e.jsxs(a.imagemArea,{children:[t?.entrada&&t?.entrada?.imagem&&e.jsxs(a.ImagemItemRecebido,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Imagem Entrada:"})}),e.jsx("small",{style:{fontSize:10,color:"#333"},children:H(t?.entrada?.dataEntrada)}),e.jsx(a.ItemImage,{onClick:()=>_(t.entrada.imagem),src:t?.entrada?.imagem})]}),t?.saida&&t?.saida?.imagem&&e.jsxs(a.ImagemItemRecebido,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Imagem Saida:"})}),e.jsx("small",{style:{fontSize:10,color:"#333"},children:H(t?.saida?.dataSaida)}),e.jsx(a.ItemImage,{onClick:()=>_(t?.saida?.imagem),src:t?.saida?.imagem})]})]}),se&&e.jsxs(e.Fragment,{children:[t?.ativo&&e.jsxs(a.ImagemItemRecebido,{children:[e.jsx(a.LabelSubtitulo,{children:"Imagem de Inspeção do Porta-malas *"}),e.jsx(ke,{onFileSelect:h,resetSignal:g})]}),e.jsx(a.Button,{ativo:t?.ativo,onClick:le,children:N?"Liberar Entrada":"Liberar Saida"})]})]}),e.jsx(Ce,{titulo:"info",msg:`Autorizado por ${t?.autorizador?.nome} (${t?.autorizador?.ocupacaoOperacional})`})]}),C&&e.jsx(De,{src:E,open:C,onClose:()=>j(!1)}),L&&e.jsx(Ie,{})]}),W&&b&&e.jsx(Be,{data:t,handleCancel:te,message:"",ativoBtn:!1}),ie&&e.jsx($e,{confirm:ne,handleConfirm:de,handleCancel:ce,message:z,ativoBtn:!0,btnName:$,titutlo:ee})]}):e.jsx(e.Fragment,{children:e.jsxs(a.semItens,{children:[e.jsx(a.iconSemItens,{}),"Nenhum item encontrado"]})})})};export{He as default};
