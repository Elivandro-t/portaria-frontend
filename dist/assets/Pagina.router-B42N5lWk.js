import{r as v,j as t,Y as Zt,Z as Qt,_ as en,i as ae,b as ke,u as tn,I as le,g as nn,$ as yt,w as on,d as ve,T as ct,H as Bn,h as Un,z as Vn,E as qn,a0 as Gn,a1 as rn,a2 as sn,a3 as Kn,a4 as Wn,a5 as j,a6 as Fe,a7 as Hn,a8 as Xn,a9 as W,aa as Q,ab as an,ac as X,ad as ln,ae as $t,af as Ct,ag as Ee,ah as Y,ai as Jn,C as Yn,aj as Zn,ak as Qn,al as eo}from"./mui-_wqMIBiI.js";import{c as cn,d as s,j as je,g as V,n as H,e as to,b as Ge,u as Ye,q as vt,r as dn,f as no,O as un,i as oo,L as Ke,a as Et,m as io,s as pn,R as ro,k as U}from"./index-BYSqOyoE.js";import{M as so,T as ze,P as fn,a as mn,b as ao,B as de,f as Ze,D as lo,c as J}from"./menuConfig-C5Fu2Emn.js";import{M as xn,G as co}from"./BotaoVoltar-CxvXsGU3.js";import{H as uo}from"./header.component-kb1fF7rG.js";import{r as hn}from"./react-OvXVS5lI.js";import po from"./NotFund-CATxkBTh.js";const fo=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],mo=cn("chevron-down",fo);const xo=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ho=cn("log-out",xo),ie={container:s.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:s.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:s.option``,Erros:s.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:s.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:s.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;

    th, td {
      padding: 10px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.9rem;
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
  `},go=()=>{const{register:e,handleSubmit:n,formState:{errors:o},reset:i}=je(),r=async d=>{const h=await V.cadastroUsuaro(d);h&&(H(h.msg,"success"),i())},l=v.useRef(null),p=(d,h)=>{d.key==="Enter"&&h?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(ie.container,{children:[t.jsx(ie.titulo,{children:"Buscar permissões de Usuario "}),t.jsxs(t.Fragment,{children:["(",t.jsx(t.Fragment,{children:"Em desenvolvimento"}),")"]}),t.jsxs(ie.FormSub,{onSubmit:n(r),children:[t.jsxs(ie.CamposInput,{children:[t.jsx(ie.label,{children:"Email usuario *"}),t.jsx(ie.Campos,{hasError:!!o.email,type:"text",autoComplete:"current-password",placeholder:"Senha",...e("email",{required:"Email E obrigatorio"}),onKeyDown:d=>p(d,l)}),t.jsx(ie.Erros,{children:o.email&&t.jsx("p",{children:o.email.message})})]}),t.jsx(ie.TableContainer,{children:t.jsxs(ie.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Nome"}),t.jsx("th",{children:"Status"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"1"}),t.jsx("td",{children:"João Silva"}),t.jsx("td",{children:"Ativo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"2"}),t.jsx("td",{children:"Maria Oliveira"}),t.jsx("td",{children:"Inativo"})]})]})]})})]})]})})},dt={container:s.div`
  display: flex;
  height: 100%;
  flex-direction: column;

    `,main:s.div`
    flex: 1;
  display: flex;
  background: #f4f6f9;      
;

    `,container_2:s.div`
  flex: 1;
  padding: 0 10px;
  position: relative;


  padding-right: 8px; /* evita cortar scrollbar */
    overflow-x: hidden;
  `,scroll:s.div`
    width: 100%;
    height: calc(100vh - 80px);
    overflow:auto;
    padding: 20px 5px;
    scrollbar-width: thin;
  `,titulo:s.h2`
    font-size: 16px;
    letter-spacing: 0.5px;
    margin: 20px 0 16px 10px;
    color:#444;
     @media screen and (min-width: 560px){
        margin: 20px 0 16px 10px;

   } 
  `,grid:s.div`
    width: 100%;
    display: grid;
    padding: 0 10px;
    grid-template-columns:repeat(2,1fr);
     @media screen and (max-width: 560px){
    display: flex;
    flex-direction: column;
   } 

  /* grid-template-columns:repeat(auto-fill,minmax(2,1fr)); */
  gap: 20px;
  `,link:s.div`
            background: white;
            padding: 20px;
            text-decoration:none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: .2s;
            border-left: 4px solid #5B7FFF;
            &:hover{
                   transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(46, 45, 45, 0.15);
             background: #f7f5f5;
            }
  `,card_title:s.div`
            font-size: 22px;
            font-family: "inter",inherit, Helvetica, sans-serif;
            color: #504a4aff;
            margin: 10px 0;
            margin-bottom: 8px;
  `,card_desc:s.div`
  font-size: 14px;
            color: #555;`,disabledCard:s.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:s.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
  `,semItens:s.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,iconSemItens:s(xn)`
      font-size: 60px;
      color: #999;
    `,footer:s.footer`
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #c09a9a;
  padding: 10px;
  `},G={container:s.div`
        background-color: #FFF;
        width: 250px;
        height: 100vh;
        border-right: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 0 10px rgba(0,0,0,0.1);

        @media screen and (max-width: 760px) {
            position: fixed;
            width: 100%;
            background-color: rgba(0,0,0,0.4); /* Fundo escurecido no mobile */
            z-index: 1000;
        }
    `,container_int:s.div`
        height: 100vh;
        background-color: #FFF;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 560px) {
            width: 300px;
        }
    `,areaMenu:s.div`
        padding: 10px 0;
    `,menu_nav:s.nav`
        width: 100%;
    `,menu_ul:s.ul`
        list-style: none;
        padding: 0;
        margin: 0;

    `,menu_li:s.li`
        padding: 15px 20px;
        cursor: pointer;
        color: #333;
        font-weight: 500;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        flex-direction: column;
        transition: background 0.2s;

        &:hover {
            background-color: #f8faff;
        }
    `,menu_liApi:s.li`
        padding: 15px 20px;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        border-bottom: 1px solid #f8f8f8;
        transition: all 0.2s;
        gap: 12px;
        a{
        display: flex;
        color: #444;
        align-items: center;
        gap: 12px;
          text-decoration:none;
          list-style: none;
          display: flex;
          align-self: center;
        }
        &:hover {
            background-color: #f0f4ff;
            color: #5B7FFF;
        }

        &:active {
            transform: scale(0.98);
        }
    `,LabelSection:s.div`
        padding: 20px 20px 10px 20px;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 700;
        color: #999;
        letter-spacing: 1px;
        background-color: #fcfcfc;
    `,submenu:s.ul`
        list-style: none;
        padding: 0;
        margin-top: 10px;
        max-height: ${e=>e.isOpen?"500px":"0"};
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        opacity: ${e=>e.isOpen?"1":"0"};
    `,submenu_item:s.li`
        padding: 10px 20px;
        font-size: 14px;
        color: #666;
        border-left: 2px solid transparent;

        &:hover {
            color: #5B7FFF;
            border-left: 2px solid #5B7FFF;
            background-color: #eef4ff;
        }
    `};function gn(e){return co({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}const bo=[{label:"Configurações",permission:"ALTERAR_CONFIGURACOES",items:[{label:"Perfis",to:"/required/perfil",permission:"ALTERAR_CONFIGURACOES"},{label:"Permissões",to:"/required/permissoes",permission:"ALTERAR_CONFIGURACOES"},{label:"Logs",to:"/required/logs",permission:"LISTA_GERAL"},{label:"Outros",to:"/required/outros",permission:"ALTERAR_CONFIGURACOES"}]},{label:"Usuario",permission:"GERENCIAR_USUARIOS",items:[{label:"Cadastro",to:"/required/cadastro/usuario",permission:"CADASTRO_USUARIO"},{label:"Usuarios Cadastrados",to:"/required/usuarios/lista",permission:"GERENCIAR_USUARIOS"},{label:"Resetar Senha",to:"/required/reset",permission:"EDITAR_USUARIO"}]}],Io=({handleBtn:e})=>{const n=()=>{window.location.href="/verify",no.logout()},[o,i]=v.useState([]),[r,l]=v.useState(null),p=v.useContext(to),d=b=>{l(r===b?null:b)},h=Ge(),f=Ye(),[c,x]=v.useState([]);v.useEffect(()=>{window.scroll(0,0),(async()=>{const a=await dn.modulo(h?.id);a&&x(a?.acess)})()},[]),v.useEffect(()=>{c?.length===1&&f(c[0].router)},[c]),v.useEffect(()=>{const b=Ge();i(b?.permissoes||[])},[p?.user]);const u=b=>b?o.includes(b):!0;function m(b,a){switch(b){case"PORTARIA_ACCESS":return t.jsx(gn,{color:"#5B7FFF",size:a});case"INVENTARIO_ACCESS":return t.jsx(en,{sx:{color:"#5B7FFF",fontSize:a}});case"RECEBIMENTO_ACCESS":return t.jsx(Qt,{sx:{color:"#5B7FFF",fontSize:a,fontWeight:"bold"}});case"LOGISTICO_ACCESS":return t.jsx(Zt,{sx:{color:"#5B7FFF",fontSize:a,fontWeight:"bold"}})}}return t.jsx(G.container,{onClick:e,children:t.jsx(G.container_int,{onClick:b=>b.stopPropagation(),children:t.jsx(G.areaMenu,{children:t.jsxs(G.menu_nav,{children:[h?.permissoes&&h?.permissoes.includes("GERENCIAR_USUARIOS")&&t.jsx(G.LabelSection,{children:"Menu Principal"}),t.jsx(G.menu_ul,{children:bo.filter(b=>u(b.permission)).map((b,a)=>t.jsxs(G.menu_li,{onClick:()=>d(a),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.label,t.jsx(mo,{size:14,style:{transform:r===a?"rotate(180deg)":"none",transition:"0.3s"}})]}),t.jsx(G.submenu,{isOpen:r===a,onClick:g=>g.stopPropagation(),children:b.items.filter(g=>u(g.permission)).map((g,I)=>t.jsx(vt,{to:g?.to,onClick:e,style:{textDecoration:"none"},children:t.jsx(G.submenu_item,{children:g.label})},I))})]},a))}),t.jsx(G.LabelSection,{children:"Permissões & Ações"}),t.jsxs(G.menu_ul,{children:[c.flatMap((b,a)=>t.jsx(G.menu_liApi,{children:t.jsxs(vt,{to:b.router,children:[m(b?.permission_name,16),b.titulo]})},a)),t.jsxs(G.menu_liApi,{onClick:n,children:[t.jsx(ho,{color:"#5B7FFF",size:16}),"Sair"]})]})]})})})})};function vo(){v.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const[e,n]=v.useState(!1),o=()=>{n(!e)};return t.jsxs(dt.container,{children:[t.jsx(uo,{ativaBtnDrower:!0,handleBtn:o}),t.jsxs(dt.main,{children:[e&&t.jsx(Io,{handleBtn:o}),t.jsx(dt.scroll,{children:t.jsx(un,{})})]})]})}const ut={container:s.main`
    position: relative;
   height: 100vh;
    `,Container_int:s.main`
     background-color:var(--cor-auth);

      padding:0 26px;
      @media screen and (max-width: 560px) {
        padding: 0;
      }


    
  `,container_int:s.div`
  width: 100%;
     height: 100vh;

  `,placeholder:s.div`
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
  `},So=()=>{const e=oo();return v.useEffect(()=>{window.scrollTo(0,0)},[e]),t.jsxs(ut.container,{children:[t.jsx(so,{}),t.jsx(ut.container_int,{children:e?t.jsx(un,{}):t.jsxs(ut.placeholder,{children:[t.jsx("h2",{children:"Bem-vindo às Configurações ⚙️"}),t.jsx("p",{children:"Selecione uma opção no menu para começar."})]})})]})},xe={container:s.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);

  `,FormSub:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:s.option``,Erros:s.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:s.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `},wo=({handleCancel:e,message:n})=>t.jsx(ze.container,{children:t.jsx(ze.container_int,{children:t.jsxs(ze.content,{children:[t.jsx(ae,{variant:"h6",sx:{mb:2},children:n}),t.jsx(ze.buttons,{children:t.jsx(ke,{variant:"outlined",onClick:e,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})})]})})}),jo=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(""),[r,l]=v.useState(!1),p=async()=>{const d=await V.reset(e);d&&(H("Senha Resetada com sucesso!","success"),i(d.psw),l(!0))};return t.jsx(t.Fragment,{children:t.jsxs(xe.container,{children:[t.jsx(xe.titulo,{children:"Reset senha de Usuario "}),t.jsxs(xe.FormSub,{children:[t.jsxs(xe.CamposInput,{children:[t.jsx(xe.label,{children:"Email*"}),t.jsx(xe.Campos,{autoComplete:"current-password",placeholder:"Informe  o E-mail",onChange:d=>n(d.target.value),onKeyDown:d=>{d.key==="Enter"&&p()}})]}),t.jsx(xe.TableContainer,{}),r&&t.jsx(wo,{handleCancel:()=>l(!1),message:o,ativoBtn:!1})]})]})})},ue={container:s.div`
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
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    display: flex;
    position: relative;
    gap: 10px;
     margin: 5px 10px;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:s.option``,Erros:s.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:s.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:s.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;  
    th:nth-child(3),
th:nth-child(4) {
  font-size: 0.85rem;
}
    
    th, td {
      padding: 10px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.8rem;
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
  `,trBTN:s.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:s.div`
    padding: 10px;
    
  `},yo=()=>{const[e,n]=v.useState([]),[o,i]=v.useState(!1),[r,l]=v.useState(""),[p,d]=v.useState(!1),[h,f]=v.useState(!1),[c,x]=v.useState(0),u=async g=>{const I=await ao.buscaLogs(r,g);d(!0),I.content&&setTimeout(()=>{d(!1),n(I.content),x(I.totalPages)},1e3)},m=(g,I)=>{const S=I-1;u(S)};v.useEffect(()=>{r.trim()===""&&u()},[r]);const b=g=>{i(g),f(!0)},a=()=>{i(o)};return t.jsx(t.Fragment,{children:t.jsxs(ue.container,{children:[t.jsx(ue.titulo,{children:"Logs do Sistema"}),t.jsxs(ue.FormSub,{children:[t.jsxs(ue.CamposInput,{children:[t.jsx(tn,{variant:"outlined",size:"small",placeholder:"Buscar...",value:r,onChange:g=>l(g.target.value)}),t.jsx(le,{onClick:u,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:t.jsx(nn,{})}),t.jsx(fn,{totalPage:c,handleNextPage:m})]}),t.jsx(ue.TableContainer,{children:t.jsxs(ue.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Id"}),t.jsx("th",{children:"ID_USUARIO"}),t.jsx("th",{children:"USUARIO"}),t.jsx("th",{children:"DESCRIÇÃO"}),t.jsx("th",{children:"AÇÂO"}),t.jsx("th",{children:"DATA"}),t.jsx("th",{children:"FILIAL"}),t.jsx("th",{})]})}),t.jsxs("tbody",{children:[e.length==0&&t.jsx(ue.erro,{children:"Sem dados"}),e.flatMap((g,I)=>t.jsxs("tr",{children:[t.jsx("td",{children:g.id}),t.jsx("td",{children:g.usuarioId}),t.jsx("td",{children:g.usuario}),t.jsx("td",{children:g.descricao}),t.jsx("td",{children:g.acao}),t.jsx("td",{children:new Date(g?.dataHora).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),t.jsx("td",{children:g.filial}),t.jsx("td",{children:t.jsxs(ue.trBTN,{children:[t.jsx(le,{"aria-label":"editar",onClick:()=>a(),sx:{color:"black","&:hover":{backgroundColor:"#e0e0e0"}},children:t.jsx(yt,{})}),t.jsx(le,{"aria-label":"deletar",onClick:()=>b(g.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(on,{})})]})})]},I))]})]})})]}),h&&t.jsx(mn,{handleCancel:()=>f(!1),handleConfirm:()=>{},message:"Deseja realmente atualizar o item com ID",ativoBtn:!1}),p&&t.jsx(Ke,{})]})})},te={container:s.div`
    min-height: 70vh;
    max-width: 1100px;
   display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 10px;
    color: var(--cor-titulo);
  `,grid:s.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
  gap: 20px;
  `,card:s.div`
  
  `,link:s(vt)`
      background: white;
            padding: 20px;
            text-decoration:none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: .2s;
            border-left: 5px solid #6a0dad;
            &:hover{
                   transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
            }
  `,card_title:s.div`
    font-size: 18px;
            font-weight: bold;
            color: #6a0dad;
            margin-bottom: 8px;
  `,card_desc:s.div`
  font-size: 14px;
            color: #555;`,disabledCard:s.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:s.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
  `},Co=[{label:"Usuários",desc:"Cadastrar, editar, remover e gerenciar usuários.",to:"/required/usuarios",icon:"PersonIcon",ativo:!1},{label:"Adicionar Modulo",desc:"Configurar modulos de acesso e mudar filial do usuario.",to:"/required/access",icon:"BadgeIcon",ativo:!0},{label:"Permissões",desc:"Definir o que cada perfil pode acessar.",to:"/required/permissoes",icon:"KeyIcon",ativo:!1},{label:"Filiais",desc:"Cadastrar e gerenciar filiais.",to:"/required/filiais",icon:"StoreIcon",ativo:!0},{label:"Logs do Sistema",desc:"Visualizar acessos e operações registradas.",to:"/required/logs",icon:"ListAltIcon",ativo:!0},{label:"Resetar Senha",desc:"Gerenciar redefinição de senhas.",to:"/required/reset",icon:"RestartAltIcon",ativo:!0},{label:"Configurações Gerais",desc:"Alterar regras do sistema e preferências.",to:"/required/geral",icon:"SettingsIcon",ativo:!1},{label:"Auditoria",desc:"Acompanhar ações dos usuários.",to:"/required/auditoria",icon:"VisibilityIcon",ativo:!1}],Eo=()=>t.jsx(t.Fragment,{children:t.jsxs(te.container,{children:[t.jsx(te.titulo,{children:"Configurações do Sistema"}),t.jsx(te.grid,{children:Co.map((e,n)=>e.ativo?t.jsxs(te.link,{to:e.to,children:[t.jsx(te.card_title,{children:e.label}),t.jsx(te.card_desc,{children:e.desc})]},n):t.jsxs(te.disabledCard,{children:[t.jsx(te.small,{children:"Em desenvolvimento 'INATIVO'"}),t.jsx(te.card_title,{children:e.label}),t.jsx(te.card_desc,{children:e.desc})]},n))})]})}),re={container:s.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 32px 56px;
        background-color: #f1f5f9; // Slate 100
        width: 100%;

        @media (max-width: 768px) {
            padding: 16px;
        }
    `,titulo:s.h1`
        font-size: 1.75rem;
        font-weight: 800;
        color: #0f172a; // Slate 900
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.02em;
    `,FormSub:s.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #ffffff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    `,CamposInput:s.div`
        display: flex;
        flex-direction: row;
        align-items: center; // Alinha ícones e input perfeitamente no centro vertical
        flex-wrap: wrap;     // Se a tela for pequena, ele quebra a linha sem sumir com itens
        gap: 12px;
        padding: 10px;
        background: #f8fafc;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        margin-bottom: 10px;
    `,InputWrapper:s.div`
        display: flex;
        flex-direction: column;
        position: relative; // O erro agora fica preso a este container, não à barra toda
        flex: 1;            // Faz o campo de busca crescer e ocupar o espaço disponível
        min-width: 200px;
    `,Campos:s.input`
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid ${e=>e.hasError?"#ef4444":"#cbd5e1"};
        padding: 0 12px;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
    `,TableContainer:s.div`
        width: 100%;
        overflow-x: auto;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
    `,Table:s.table`
        width: 100%;
        border-collapse: collapse;
        
        th {
            background-color: #f8fafc;
            padding: 14px 16px;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 700;
            color: #64748b; // Slate 500
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 2px solid #f1f5f9;
        }

        td {
            padding: 16px;
            font-size: 0.875rem;
            color: #1e293b;
            border-bottom: 1px solid #f1f5f9;
        }

        tr:hover {
            background-color: #f8fafc;
        }
    `,ativo:s.div`
        width: 10px;
        height: 10px;
        background-color: ${({ativo:e})=>e?"#10b981":"#ef4444"};
        border-radius: 50%;
        box-shadow: 0 0 0 4px ${({ativo:e})=>e?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)"};
    `,device:s.div`
        display: inline-flex;
        padding: 4px 12px;
        background-color: #e0f2fe; // Light Blue
        color: #0369a1;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        border: 1px solid #bae6fd;
    `,trBTN:s.div`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `},he={container:s.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  `,container_int:s.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,header:s.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,content:s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,buttons:s.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
  `,SelectItens:s.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid #ccc;
    
    `,Options:s.option``},bn=({handleConfirm:e,handleCancel:n})=>{const{register:o,handleSubmit:i}=je(),[r,l]=v.useState();return v.useEffect(()=>{(async()=>{const d=await V.listaPerfil();d&&d.perfis&&l(d.perfis)})()},[]),t.jsx(he.container,{children:t.jsx(he.container_int,{children:t.jsxs(he.content,{children:[t.jsxs(he.SelectItens,{...o("idPerfil",{required:"Selecione o perfil"}),children:[t.jsx(he.Options,{value:"",children:"Selecione o perfil"}),r?.flatMap(p=>t.jsx(he.Options,{value:p.id,children:p.nome},p?.id))]}),t.jsxs(he.buttons,{children:[t.jsx(ke,{variant:"contained",color:"error",onClick:i(e),sx:{borderRadius:2},children:"Atualizar"}),t.jsx(ke,{variant:"outlined",onClick:n,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})})})},ko=()=>{const[e,n]=v.useState([]),[o,i]=v.useState(""),[r,l]=v.useState(""),[p,d]=v.useState(0),h=Ye(),[f,c]=v.useState(!1),u=Ge()?.permissoes,m=async w=>{c(!0);const P=await V.listAusuario(r.trim(),w);P&&setTimeout(()=>{c(!1),n(P.content),d(P?.totalPages)},1e3)},b=(w,P)=>{const L=P-1;m(L)};v.useEffect(()=>{r.trim()===""&&m()},[r]);const a=w=>{i(w.id),T(!0)},g=()=>{h("/config/cadastro/usuario")},I=w=>{D(null,!0,w),console.log(" ativo true susuario "+w)},S=w=>{D(null,!1,w)},[y,T]=v.useState(!1),D=async(w,P,L)=>{const B=o||L,ee=await V.AdicionarPefil(B,w?.idPerfil,P);ee&&(T(!1),H(ee.msg,"success"),m())},k=w=>{const P=new Date(w),L=String(P.getDate()).padStart(2,"0"),B=String(P.getMonth()+1).padStart(2,"0"),ee=P.getFullYear(),Ie=String(P.getHours()).padStart(2,"0"),ye=String(P.getMinutes()).padStart(2,"0");return`${L}/${B}/${ee} às ${Ie}:${ye}`};return t.jsx(t.Fragment,{children:t.jsxs(re.container,{children:[t.jsx(ve,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:t.jsx(re.titulo,{children:"Gestão de Usuários"})}),t.jsxs(re.FormSub,{children:[t.jsxs(re.CamposInput,{children:[t.jsx(tn,{variant:"outlined",size:"small",placeholder:"Pesquisar por nome ou e-mail...",value:r,onChange:w=>l(w.target.value),sx:{minWidth:"300px",backgroundColor:"#fff"}}),t.jsx(le,{onClick:m,sx:{backgroundColor:"#6366f1",color:"#fff","&:hover":{backgroundColor:"#4f46e5"}},children:t.jsx(nn,{})}),t.jsx(ct,{title:"Cadastrar Novo Usuário",children:t.jsx(le,{onClick:g,sx:{backgroundColor:"#22c55e",color:"#fff","&:hover":{backgroundColor:"#16a34a"}},children:t.jsx(Bn,{})})}),t.jsx(ve,{sx:{flexGrow:1}})," ",t.jsx(fn,{totalPage:p,handleNextPage:b})]}),t.jsx(re.TableContainer,{children:t.jsxs(re.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Membro"}),t.jsx("th",{children:"E-mail"}),t.jsx("th",{children:"Função / Filial"}),t.jsx("th",{children:"Perfil"}),t.jsx("th",{children:"Device"}),t.jsx("th",{children:"Último Acesso"}),t.jsx("th",{children:"Status"}),u?.includes("ADICIONAR_ACESSO")&&t.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),t.jsx("tbody",{children:e.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,style:{textAlign:"center",padding:"40px"},children:t.jsx(ae,{color:"textSecondary",children:"Nenhum usuário encontrado"})})}):e.map((w,P)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs(ve,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[t.jsx(Un,{sx:{width:38,height:38,border:"1px solid #e2e8f0"},src:w?.avatar||"/static/images/avatar/2.jpg"}),t.jsx(ae,{variant:"body2",sx:{fontWeight:600,color:"#1e293b"},children:w.nome})]})}),t.jsx("td",{children:w.email}),t.jsxs("td",{children:[t.jsx(ae,{variant:"caption",sx:{display:"block",fontWeight:600},children:w.ocupacaoOperacional}),t.jsx(ae,{variant:"caption",color:"textSecondary",children:w.filial})]}),t.jsx("td",{children:t.jsx(ve,{sx:{px:1,py:.5,bgcolor:"#f1f5f9",borderRadius:"6px",display:"inline-block"},children:t.jsx(ae,{variant:"caption",sx:{fontWeight:700},children:w?.perfil?.nome||"N/A"})})}),t.jsx("td",{children:t.jsx(re.device,{children:w?.sessionDevice||"0"})}),t.jsx("td",{style:{fontSize:"11px",color:"#64748b"},children:w?.sessionLastLogin?k(w?.sessionLastLogin):"Sem acesso"}),t.jsx("td",{children:t.jsxs(ve,{sx:{display:"flex",alignItems:"center",gap:1},children:[t.jsx(re.ativo,{ativo:w?.ativo}),t.jsx(ae,{variant:"caption",sx:{fontWeight:600},children:w?.ativo?"Ativo":"Inativo"})]})}),u?.includes("ADICIONAR_ACESSO")&&t.jsx("td",{children:t.jsxs(re.trBTN,{children:[t.jsx(ct,{title:"Editar",children:t.jsx(le,{size:"small",onClick:()=>a(w),children:t.jsx(yt,{fontSize:"small",sx:{color:"#64748b"}})})}),t.jsx(ct,{title:w.ativo?"Bloquear":"Ativar",children:t.jsx(le,{size:"small",onClick:()=>w.ativo?S(w.id):I(w.id),sx:{color:w.ativo?"#ef4444":"#22c55e"},children:w.ativo?t.jsx(Vn,{fontSize:"small"}):t.jsx(qn,{fontSize:"small"})})})]})})]},P))})]})})]}),y&&t.jsx(bn,{ID:void 0,handleConfirm:w=>D(w,null,null),handleCancel:()=>T(!1),message:"",ativoBtn:!1}),f&&t.jsx(Ke,{})]})})},oe={container:s.div`
        height: 100%;
        padding: 32px 156px;
        @media screen and (max-width: 760px) {
            padding: 32px 5px;
        }
    `,container_int:s.div`
        display: flex;
        gap: 20px;
        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
    `,container_left:s.section`
        flex: 1;
        padding: 20px;
        border-radius: 10px;
        @media screen and (max-width: 760px) {
            box-shadow: 0 8px 24px rgba(21, 101, 192, 0.08);
        }
    `,conainter_right:s.section`
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 25px;
        border-radius: 10px;
    `,container_usuarioArea:s.div`
        display: flex;
        gap: 10px;
    `,container_img:s.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 160px;
        margin: 0;
        aspect-ratio: 4 / 3;
        padding: 0.5px;
        color: #0f1724;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 5px;
        }
    `,container_titulo:s.div`
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 600;
        color: #1565c0; /* Blue color for titles */
    `,area_infor:s.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
    `,meta:s.div`
        margin-top: 14px;
        color: #6b7280;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    `,span:s.span`
        padding: 5px 0;
    `,small:s.small`
        margin: 0; 
        color: #6b7280; 
        font-size: 13px;
    `,nomeFilial:s.div`
        text-align: start; 
        margin-top: 2px; 
        color: #888; 
        font-size: 13px;
    `,form:s.form`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `,area_forma:s.div`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 10px;
        scrollbar-width: thin;
    `,CamposInput:s.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 5px 0;
    `,input:s.input`
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 36, 0.08);
        background: #fff;
        font-size: 14px;
        border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
        &:focus {
            outline: none;
            border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
        }
    `,label:s.label`
        display: block;
        font-size: 13px;
        color: #0f1724;
        margin-bottom: 2px;
    `,Erros:s.div`
        color: #ff4d4f; /* Red for errors */
        font-size: 12px;
        margin: 0px 10px;
    `,area_campo:s.div`
        display: flex;
        gap: 10px;
    `,area_btn:s.div`
        display: flex;
        width: 150px;
        gap: 10px;
    `},To={container_left:s.section`
   display: flex;
    /* background-color: #F2F2F2; */
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `},Se=({children:e})=>t.jsx(To.container_left,{children:e});function In(e){return Gn}function Po(e){return rn("MuiSimpleTreeView",e)}sn("MuiSimpleTreeView",["root","item","itemContent","itemGroupTransition","itemIconContainer","itemLabel","itemCheckbox"]);const Nt={};function Te(e,n){const o=v.useRef(Nt);return o.current===Nt&&(o.current=e(n)),o}var We=Symbol("NOT_FOUND");function Fo(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function Ro(e,n=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(n)}function Mo(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(o=>typeof o=="function")){const o=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${n}[${o}]`)}}var Bt=e=>Array.isArray(e)?e:[e];function Ao(e){const n=Array.isArray(e[0])?e[0]:e;return Mo(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function Lo(e,n){const o=[],{length:i}=e;for(let r=0;r<i;r++)o.push(e[r].apply(null,n));return o}function Oo(e){let n;return{get(o){return n&&e(n.key,o)?n.value:We},put(o,i){n={key:o,value:i}},getEntries(){return n?[n]:[]},clear(){n=void 0}}}function Do(e,n){let o=[];function i(d){const h=o.findIndex(f=>n(d,f.key));if(h>-1){const f=o[h];return h>0&&(o.splice(h,1),o.unshift(f)),f.value}return We}function r(d,h){i(d)===We&&(o.unshift({key:d,value:h}),o.length>e&&o.pop())}function l(){return o}function p(){o=[]}return{get:i,put:r,getEntries:l,clear:p}}var _o=(e,n)=>e===n;function zo(e){return function(o,i){if(o===null||i===null||o.length!==i.length)return!1;const{length:r}=o;for(let l=0;l<r;l++)if(!e(o[l],i[l]))return!1;return!0}}function $o(e,n){const o=typeof n=="object"?n:{equalityCheck:n},{equalityCheck:i=_o,maxSize:r=1,resultEqualityCheck:l}=o,p=zo(i);let d=0;const h=r<=1?Oo(p):Do(r,p);function f(){let c=h.get(arguments);if(c===We){if(c=e.apply(null,arguments),d++,l){const u=h.getEntries().find(m=>l(m.value,c));u&&(c=u.value,d!==0&&d--)}h.put(arguments,c)}return c}return f.clearCache=()=>{h.clear(),f.resetResultsCount()},f.resultsCount=()=>d,f.resetResultsCount=()=>{d=0},f}var No=class{constructor(e){this.value=e}deref(){return this.value}},Bo=typeof WeakRef<"u"?WeakRef:No,Uo=0,Ut=1;function $e(){return{s:Uo,v:void 0,o:null,p:null}}function vn(e,n={}){let o=$e();const{resultEqualityCheck:i}=n;let r,l=0;function p(){let d=o;const{length:h}=arguments;for(let x=0,u=h;x<u;x++){const m=arguments[x];if(typeof m=="function"||typeof m=="object"&&m!==null){let b=d.o;b===null&&(d.o=b=new WeakMap);const a=b.get(m);a===void 0?(d=$e(),b.set(m,d)):d=a}else{let b=d.p;b===null&&(d.p=b=new Map);const a=b.get(m);a===void 0?(d=$e(),b.set(m,d)):d=a}}const f=d;let c;if(d.s===Ut)c=d.v;else if(c=e.apply(null,arguments),l++,i){const x=r?.deref?.()??r;x!=null&&i(x,c)&&(c=x,l!==0&&l--),r=typeof c=="object"&&c!==null||typeof c=="function"?new Bo(c):c}return f.s=Ut,f.v=c,c}return p.clearCache=()=>{o=$e(),p.resetResultsCount()},p.resultsCount=()=>l,p.resetResultsCount=()=>{l=0},p}function Sn(e,...n){const o=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,i=(...r)=>{let l=0,p=0,d,h={},f=r.pop();typeof f=="object"&&(h=f,f=r.pop()),Fo(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const c={...o,...h},{memoize:x,memoizeOptions:u=[],argsMemoize:m=vn,argsMemoizeOptions:b=[]}=c,a=Bt(u),g=Bt(b),I=Ao(r),S=x(function(){return l++,f.apply(null,arguments)},...a),y=m(function(){p++;const D=Lo(I,arguments);return d=S.apply(null,D),d},...g);return Object.assign(y,{resultFunc:f,memoizedResultFunc:S,dependencies:I,dependencyRecomputations:()=>p,resetDependencyRecomputations:()=>{p=0},lastResult:()=>d,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:x,argsMemoize:m})};return Object.assign(i,{withTypes:()=>i}),i}var Vo=Sn(vn),qo=Object.assign((e,n=Vo)=>{Ro(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const o=Object.keys(e),i=o.map(l=>e[l]);return n(i,(...l)=>l.reduce((p,d,h)=>(p[o[h]]=d,p),{}))},{withTypes:()=>qo});const Go=Sn({memoize:$o,memoizeOptions:{maxSize:1,equalityCheck:Object.is}}),A=(e,n,o,i,r,l,p,d,...h)=>{if(h.length>0)throw new Error("Unsupported number of selectors");let f;if(e&&n&&o&&i&&r&&l&&p&&d)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m),g=o(c,x,u,m),I=i(c,x,u,m),S=r(c,x,u,m),y=l(c,x,u,m),T=p(c,x,u,m);return d(b,a,g,I,S,y,T,x,u,m)};else if(e&&n&&o&&i&&r&&l&&p)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m),g=o(c,x,u,m),I=i(c,x,u,m),S=r(c,x,u,m),y=l(c,x,u,m);return p(b,a,g,I,S,y,x,u,m)};else if(e&&n&&o&&i&&r&&l)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m),g=o(c,x,u,m),I=i(c,x,u,m),S=r(c,x,u,m);return l(b,a,g,I,S,x,u,m)};else if(e&&n&&o&&i&&r)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m),g=o(c,x,u,m),I=i(c,x,u,m);return r(b,a,g,I,x,u,m)};else if(e&&n&&o&&i)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m),g=o(c,x,u,m);return i(b,a,g,x,u,m)};else if(e&&n&&o)f=(c,x,u,m)=>{const b=e(c,x,u,m),a=n(c,x,u,m);return o(b,a,x,u,m)};else if(e&&n)f=(c,x,u,m)=>{const b=e(c,x,u,m);return n(b,x,u,m)};else if(e)f=e;else throw new Error("Missing arguments");return f},Ko=e=>(...n)=>{const o=new WeakMap;let i=1;const r=n[n.length-1],l=n.length-1||1,p=Math.max(r.length-l,0);if(p>3)throw new Error("Unsupported number of arguments");return(h,f,c,x)=>{let u=h.__cacheKey__;u||(u={id:i},h.__cacheKey__=u,i+=1);let m=o.get(u);if(!m){const b=n.length===1?[I=>I,r]:n;let a=n;const g=[void 0,void 0,void 0];switch(p){case 0:break;case 1:{a=[...b.slice(0,-1),()=>g[0],r];break}case 2:{a=[...b.slice(0,-1),()=>g[0],()=>g[1],r];break}case 3:{a=[...b.slice(0,-1),()=>g[0],()=>g[1],()=>g[2],r];break}default:throw new Error("Unsupported number of arguments")}m=Go(...a),m.selectorArgs=g,o.set(u,m)}switch(p){case 3:m.selectorArgs[2]=x;case 2:m.selectorArgs[1]=c;case 1:m.selectorArgs[0]=f}switch(p){case 0:return m(h);case 1:return m(h,f);case 2:return m(h,f,c);case 3:return m(h,f,c,x);default:throw new Error("unreachable")}}},Re=Ko();var pt={exports:{}},ft={};var Vt;function Wo(){if(Vt)return ft;Vt=1;var e=hn();function n(x,u){return x===u&&(x!==0||1/x===1/u)||x!==x&&u!==u}var o=typeof Object.is=="function"?Object.is:n,i=e.useState,r=e.useEffect,l=e.useLayoutEffect,p=e.useDebugValue;function d(x,u){var m=u(),b=i({inst:{value:m,getSnapshot:u}}),a=b[0].inst,g=b[1];return l(function(){a.value=m,a.getSnapshot=u,h(a)&&g({inst:a})},[x,m,u]),r(function(){return h(a)&&g({inst:a}),x(function(){h(a)&&g({inst:a})})},[x]),p(m),m}function h(x){var u=x.getSnapshot;x=x.value;try{var m=u();return!o(x,m)}catch{return!0}}function f(x,u){return u()}var c=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:d;return ft.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:c,ft}var qt;function wn(){return qt||(qt=1,pt.exports=Wo()),pt.exports}var Ho=wn(),mt={exports:{}},xt={};var Gt;function Xo(){if(Gt)return xt;Gt=1;var e=hn(),n=wn();function o(f,c){return f===c&&(f!==0||1/f===1/c)||f!==f&&c!==c}var i=typeof Object.is=="function"?Object.is:o,r=n.useSyncExternalStore,l=e.useRef,p=e.useEffect,d=e.useMemo,h=e.useDebugValue;return xt.useSyncExternalStoreWithSelector=function(f,c,x,u,m){var b=l(null);if(b.current===null){var a={hasValue:!1,value:null};b.current=a}else a=b.current;b=d(function(){function I(k){if(!S){if(S=!0,y=k,k=u(k),m!==void 0&&a.hasValue){var w=a.value;if(m(w,k))return T=w}return T=k}if(w=T,i(y,k))return w;var P=u(k);return m!==void 0&&m(w,P)?(y=k,w):(y=k,T=P)}var S=!1,y,T,D=x===void 0?null:x;return[function(){return I(c())},D===null?void 0:function(){return I(D())}]},[c,x,u,m]);var g=r(f,b[0],b[1]);return p(function(){a.hasValue=!0,a.value=g},[g]),h(g),g},xt}var Kt;function Jo(){return Kt||(Kt=1,mt.exports=Xo()),mt.exports}var Yo=Jo();const Zo=parseInt(v.version,10),Qo=Zo>=19,ei=Qo?ti:ni;function _(e,n,o,i,r){return ei(e,n,o,i,r)}function ti(e,n,o,i,r){const l=v.useCallback(()=>n(e.getSnapshot(),o,i,r),[e,n,o,i,r]);return Ho.useSyncExternalStore(e.subscribe,l,l)}function ni(e,n,o,i,r){return Yo.useSyncExternalStoreWithSelector(e.subscribe,e.getSnapshot,e.getSnapshot,l=>n(l,o,i,r))}const oi=()=>{};function ii(e,n,o){const i=Kn(ri,{store:e,selector:n}).current;i.effect=o,Wn(i.onMount)}function ri(e){const{store:n,selector:o}=e;let i=o(n.state);const r={effect:oi,dispose:null,subscribe:()=>{r.dispose??=n.subscribe(l=>{const p=o(l);if(!Object.is(i,p)){const d=i;i=p,r.effect(d,p)}})},onMount:()=>(r.subscribe(),()=>{r.dispose?.(),r.dispose=null})};return r.subscribe(),r}class kt{static create(n){return new kt(n)}constructor(n){this.state=n,this.listeners=new Set,this.updateTick=0}subscribe=n=>(this.listeners.add(n),()=>{this.listeners.delete(n)});getSnapshot=()=>this.state;setState(n){this.state=n,this.updateTick+=1;const o=this.updateTick,i=this.listeners.values();let r;for(;r=i.next(),!r.done;){if(o!==this.updateTick)return;const l=r.value;l(n)}}update(n){for(const o in n)if(!Object.is(this.state[o],n[o])){this.setState(j({},this.state,n));return}}set(n,o){Object.is(this.state[n],o)||this.setState(j({},this.state,{[n]:o}))}use=(n,o,i,r)=>_(this,n,o,i,r)}function He(e,n,o,i){const r=Te(si).current;return ai(r,e,n,o,i)&&li(r,[e,n,o,i]),r.callback}function si(){return{callback:null,cleanup:null,refs:[]}}function ai(e,n,o,i,r){return e.refs[0]!==n||e.refs[1]!==o||e.refs[2]!==i||e.refs[3]!==r}function li(e,n){if(e.refs=n,n.every(o=>o==null)){e.callback=null;return}e.callback=o=>{if(e.cleanup&&(e.cleanup(),e.cleanup=null),o!=null){const i=Array(n.length).fill(null);for(let r=0;r<n.length;r+=1){const l=n[r];if(l!=null)switch(typeof l){case"function":{const p=l(o);typeof p=="function"&&(i[r]=p);break}case"object":{l.current=o;break}}}e.cleanup=()=>{for(let r=0;r<n.length;r+=1){const l=n[r];if(l!=null)switch(typeof l){case"function":{const p=i[r];typeof p=="function"?p():l(null);break}case"object":{l.current=null;break}}}}}}}class ci{maxListeners=20;warnOnce=!1;events={};on(n,o,i={}){let r=this.events[n];r||(r={highPriority:new Map,regular:new Map},this.events[n]=r),i.isFirst?r.highPriority.set(o,!0):r.regular.set(o,!0)}removeListener(n,o){this.events[n]&&(this.events[n].regular.delete(o),this.events[n].highPriority.delete(o))}removeAllListeners(){this.events={}}emit(n,...o){const i=this.events[n];if(!i)return;const r=Array.from(i.highPriority.keys()),l=Array.from(i.regular.keys());for(let p=r.length-1;p>=0;p-=1){const d=r[p];i.highPriority.has(d)&&d.apply(this,o)}for(let p=0;p<l.length;p+=1){const d=l[p];i.regular.has(d)&&d.apply(this,o)}}once(n,o){const i=this;this.on(n,function r(...l){i.removeListener(n,r),o.apply(i,l)})}}const di=e=>e.isPropagationStopped!==void 0,jn=()=>{const[e]=v.useState(()=>new ci),n=v.useCallback((...i)=>{const[r,l,p={}]=i;p.defaultMuiPrevented=!1,!(di(p)&&p.isPropagationStopped())&&e.emit(r,l,p)},[e]),o=v.useCallback((i,r)=>(e.on(i,r),()=>{e.removeListener(i,r)}),[e]);return{instance:{$$publishEvent:n,$$subscribeEvent:o}}};jn.params={};const yn=({plugins:e})=>{const n=new Set(e);return{instance:{getAvailablePlugins:()=>n}}};yn.params={};const Me={treeId:A(e=>e.id.treeId)};let Wt=0;const ui=()=>(Wt+=1,`mui-tree-view-${Wt}`),Qe=({id:e,treeId:n="",itemId:o})=>e??`${n}-${o}`,Tt=({params:e,store:n})=>{v.useEffect(()=>{const i=n.state.id;e.id===i.providedTreeId&&i.treeId!==void 0||n.set("id",j({},i,{treeId:e.id??ui()}))},[n,e.id]);const o=_(n,Me.treeId);return{getRootProps:()=>({id:o})}};Tt.params={id:!0};Tt.getInitialState=({id:e})=>({id:{treeId:void 0,providedTreeId:e}});const pi=[jn,yn,Tt],fi=["apiRef"],mi=e=>{let{props:{apiRef:n},plugins:o}=e,i=Fe(e.props,fi);const r=v.useMemo(()=>{const d={};return o.forEach(h=>{Object.assign(d,h.params)}),d},[o]),{forwardedProps:l,pluginParams:p}=v.useMemo(()=>{const d={},h={};Object.keys(i).forEach(c=>{const x=i[c];r[c]?d[c]=x:h[c]=x});const f=o.reduce((c,x)=>x.applyDefaultValuesToParams?x.applyDefaultValuesToParams({params:c}):c,d);return{forwardedProps:h,pluginParams:f}},[o,i,r]);return{forwardedProps:l,pluginParams:p,apiRef:n}},xi=e=>{const{plugins:n,instance:o,publicAPI:i,store:r,rootRef:l}=e,p=v.useCallback(f=>{let c=null,x=null;const u=[],m={};n.forEach(g=>{if(!g.itemPlugin)return;const I=g.itemPlugin({props:f,rootRef:c,contentRef:x});I?.rootRef&&(c=I.rootRef),I?.contentRef&&(x=I.contentRef),I?.propsEnhancers&&(u.push(I.propsEnhancers),Object.keys(I.propsEnhancers).forEach(S=>{m[S]=!0}))});const b=g=>I=>{const S={};return u.forEach(y=>{const T=y[g];T!=null&&Object.assign(S,T(I))}),S},a=Object.fromEntries(Object.keys(m).map(g=>[g,b(g)]));return{contentRef:x,rootRef:c,propsEnhancers:a}},[n]),d=v.useCallback(({itemId:f,children:c,idAttribute:x})=>{let u=c;for(let m=n.length-1;m>=0;m-=1){const b=n[m];b.wrapItem&&(u=b.wrapItem({instance:o,itemId:f,children:u,idAttribute:x}))}return u},[n,o]),h=v.useCallback(({children:f})=>{let c=f;for(let x=n.length-1;x>=0;x-=1){const u=n[x];u.wrapRoot&&(c=u.wrapRoot({children:c}))}return c},[n]);return v.useMemo(()=>({runItemPlugins:p,wrapItem:d,wrapRoot:h,instance:o,publicAPI:i,store:r,rootRef:l}),[p,d,h,o,i,r,l])};function hi(e){return e.current==null&&(e.current={}),e}function gi(e){const n=v.useRef({});return e?hi(e):n}const bi=({plugins:e,rootRef:n,props:o})=>{const i=v.useMemo(()=>[...pi,...e],[e]),{pluginParams:r,forwardedProps:l,apiRef:p}=mi({plugins:i,props:o}),d=Te(()=>({})).current,h=gi(p),f=v.useRef(null),c=He(f,n),x=Te(()=>{const g={};for(const I of i)I.getInitialState&&Object.assign(g,I.getInitialState(r));return new kt(g)}).current,u=xi({plugins:i,instance:d,publicAPI:h.current,store:x,rootRef:f}),m=[],b=g=>{const I=g({instance:d,params:r,rootRef:f,plugins:i,store:x});I.getRootProps&&m.push(I.getRootProps),I.publicAPI&&Object.assign(h.current,I.publicAPI),I.instance&&Object.assign(d,I.instance)};return i.forEach(b),{getRootProps:(g={})=>{const I=j({role:"tree"},l,g,{ref:c});return m.forEach(S=>{Object.assign(I,S(g))}),I},rootRef:c,contextValue:u}},Cn=v.createContext(null),be=()=>{const e=v.useContext(Cn);if(e==null)throw new Error(["MUI X: Could not find the Tree View context.","It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));return e},En=v.createContext({classes:{},slots:{},slotProps:{}}),kn=()=>v.useContext(En),ht={};function Ii(e){const{contextValue:n,classes:o=ht,slots:i=ht,slotProps:r=ht,children:l}=e,p=v.useMemo(()=>({classes:o,slots:{collapseIcon:i.collapseIcon,expandIcon:i.expandIcon,endIcon:i.endIcon},slotProps:{collapseIcon:r.collapseIcon,expandIcon:r.expandIcon,endIcon:r.endIcon}}),[o,i.collapseIcon,i.expandIcon,i.endIcon,r.collapseIcon,r.expandIcon,r.endIcon]);return t.jsx(Cn.Provider,{value:n,children:t.jsx(En.Provider,{value:p,children:n.wrapRoot({children:l})})})}const gt=Hn[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],vi=gt&&gt!==v.useLayoutEffect?gt:e=>e();function q(e){const n=Te(Si).current;return n.next=e,vi(n.effect),n.trampoline}function Si(){const e={next:void 0,callback:wi,trampoline:(...n)=>e.callback?.(...n),effect:()=>{e.callback=e.next}};return e}function wi(){}const Z="__TREE_VIEW_ROOT_PARENT_ID__",Tn=e=>{const n={};return e.forEach((o,i)=>{n[o]=i}),n},Xe=(e,n)=>{if(n==null)return!1;let o=e[n];if(!o)return!1;if(o.disabled)return!0;for(;o.parentId!=null;){if(o=e[o.parentId],!o)return!1;if(o.disabled)return!0}return!1};function Pn(e){const{config:n,items:o,disabledItemsFocusable:i}=e,r={},l={},p={},d={};function h(f,c,x){const u=c??Z,{metaLookup:m,modelLookup:b,orderedChildrenIds:a,childrenIndexes:g,itemsChildren:I}=Fn({config:n,items:f,parentId:c,depth:x,isItemExpandable:(S,y)=>!!y&&y.length>0,otherItemsMetaLookup:r});Object.assign(r,m),Object.assign(l,b),p[u]=a,d[u]=g;for(const S of I)h(S.children||[],S.id,x+1)}return h(o,null,0),{disabledItemsFocusable:i,itemMetaLookup:r,itemModelLookup:l,itemOrderedChildrenIdsLookup:p,itemChildrenIndexesLookup:d,domStructure:"nested"}}function Fn(e){const{config:n,items:o,parentId:i,depth:r,isItemExpandable:l,otherItemsMetaLookup:p}=e,d={},h={},f=[],c=[],x=u=>{const m=n.getItemId?n.getItemId(u):u.id;ji({id:m,parentId:i,item:u,itemMetaLookup:p,siblingsMetaLookup:d});const b=n.getItemLabel?n.getItemLabel(u):u.label;if(b==null)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.","An item was provided without label in the `items` prop:",JSON.stringify(u)].join(`
`));const a=(n.getItemChildren?n.getItemChildren(u):u.children)||[];c.push({id:m,children:a}),h[m]=u,d[m]={id:m,label:b,parentId:i,idAttribute:void 0,expandable:l(u,a),disabled:n.isItemDisabled?n.isItemDisabled(u):!1,depth:r},f.push(m)};for(const u of o)x(u);return{metaLookup:d,modelLookup:h,orderedChildrenIds:f,childrenIndexes:Tn(f),itemsChildren:c}}function ji({id:e,parentId:n,item:o,itemMetaLookup:i,siblingsMetaLookup:r}){if(e==null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.","An item was provided without id in the `items` prop:",JSON.stringify(o)].join(`
`));if(r[e]!=null||i[e]!=null&&i[e].parentId!==n)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${e}"`].join(`
`))}const Pe=v.createContext(()=>-1),yi=[],E={domStructure:A(e=>e.items.domStructure),disabledItemFocusable:A(e=>e.items.disabledItemsFocusable),itemMetaLookup:A(e=>e.items.itemMetaLookup),itemOrderedChildrenIdsLookup:A(e=>e.items.itemOrderedChildrenIdsLookup),itemMeta:A((e,n)=>e.items.itemMetaLookup[n??Z]??null),itemOrderedChildrenIds:A((e,n)=>e.items.itemOrderedChildrenIdsLookup[n??Z]??yi),itemModel:A((e,n)=>e.items.itemModelLookup[n]),isItemDisabled:A((e,n)=>Xe(e.items.itemMetaLookup,n)),itemIndex:A((e,n)=>{const o=e.items.itemMetaLookup[n];return o==null?-1:e.items.itemChildrenIndexesLookup[o.parentId??Z][o.id]}),itemParentId:A((e,n)=>e.items.itemMetaLookup[n]?.parentId??null),itemDepth:A((e,n)=>e.items.itemMetaLookup[n]?.depth??0),canItemBeFocused:A((e,n)=>e.items.disabledItemsFocusable||!Xe(e.items.itemMetaLookup,n))},Ae=({instance:e,params:n,store:o})=>{const i=v.useMemo(()=>({isItemDisabled:n.isItemDisabled,getItemLabel:n.getItemLabel,getItemChildren:n.getItemChildren,getItemId:n.getItemId}),[n.isItemDisabled,n.getItemLabel,n.getItemChildren,n.getItemId]),r=v.useCallback(I=>E.itemModel(o.state,I),[o]),l=v.useCallback(I=>E.itemMeta(o.state,I)?.parentId||null,[o]),p=q(({itemId:I,shouldBeDisabled:S})=>{if(!o.state.items.itemMetaLookup[I])return;const y=j({},o.state.items.itemMetaLookup);y[I]=j({},y[I],{disabled:S??!y[I].disabled}),o.set("items",j({},o.state.items,{itemMetaLookup:y}))}),d=v.useCallback(()=>{const I=S=>{const y=E.itemModel(o.state,S),T=j({},y),D=E.itemOrderedChildrenIds(o.state,S);return D.length>0?T.children=D.map(I):delete T.children,T};return E.itemOrderedChildrenIds(o.state,null).map(I)},[o]),h=v.useCallback(I=>E.itemOrderedChildrenIds(o.state,I),[o]),f=I=>{const S=E.itemMeta(o.state,I);if(S==null)return null;const y=Qe({treeId:Me.treeId(o.state),itemId:I,id:S.idAttribute});return document.getElementById(y)},c=v.useRef(!1),x=v.useCallback(()=>{c.current=!0},[]),u=v.useCallback(()=>c.current,[]),m=({items:I,parentId:S,getChildrenCount:y})=>{const T=S??Z,D=S==null?-1:E.itemDepth(o.state,S),{metaLookup:k,modelLookup:w,orderedChildrenIds:P,childrenIndexes:L}=Fn({config:i,items:I,parentId:S,depth:D+1,isItemExpandable:y?ee=>y(ee)>0:()=>!1,otherItemsMetaLookup:E.itemMetaLookup(o.state)}),B={itemModelLookup:j({},o.state.items.itemModelLookup,w),itemMetaLookup:j({},o.state.items.itemMetaLookup,k),itemOrderedChildrenIdsLookup:j({},o.state.items.itemOrderedChildrenIdsLookup,{[T]:P}),itemChildrenIndexesLookup:j({},o.state.items.itemChildrenIndexesLookup,{[T]:L})};o.set("items",j({},o.state.items,B))},b=q(I=>{const S=Object.keys(o.state.items.itemMetaLookup).reduce((k,w)=>{const P=o.state.items.itemMetaLookup[w];return P.parentId===I?k:j({},k,{[P.id]:P})},{}),y=j({},o.state.items.itemOrderedChildrenIdsLookup),T=j({},o.state.items.itemChildrenIndexesLookup),D=I??Z;delete T[D],delete y[D],o.set("items",j({},o.state.items,{itemMetaLookup:S,itemOrderedChildrenIdsLookup:y,itemChildrenIndexesLookup:T}))}),a=q(I=>{const S=j({},o.state.items.itemMetaLookup);for(const y of I)S[y]=j({},S[y],{expandable:!0});o.set("items",j({},o.state.items,{itemMetaLookup:S}))});v.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const I=Pn({disabledItemsFocusable:n.disabledItemsFocusable,items:n.items,config:i});o.set("items",j({},o.state.items,I))},[e,o,n.items,n.disabledItemsFocusable,i]);const g=q((I,S)=>{n.onItemClick&&n.onItemClick(I,S)});return{getRootProps:()=>({style:{"--TreeView-itemChildrenIndentation":typeof n.itemChildrenIndentation=="number"?`${n.itemChildrenIndentation}px`:n.itemChildrenIndentation}}),publicAPI:{getItem:r,getItemDOMElement:f,getItemTree:d,getItemOrderedChildrenIds:h,setIsItemDisabled:p,getParentId:l},instance:{getItemDOMElement:f,preventItemUpdates:x,areItemUpdatesPrevented:u,setItemChildren:m,removeChildren:b,addExpandableItems:a,handleItemClick:g}}};Ae.getInitialState=e=>({items:Pn({items:e.items,disabledItemsFocusable:e.disabledItemsFocusable,config:{isItemDisabled:e.isItemDisabled,getItemId:e.getItemId,getItemLabel:e.getItemLabel,getItemChildren:e.getItemChildren}})});Ae.applyDefaultValuesToParams=({params:e})=>j({},e,{disabledItemsFocusable:e.disabledItemsFocusable??!1,itemChildrenIndentation:e.itemChildrenIndentation??"12px"});Ae.wrapRoot=({children:e})=>t.jsx(Pe.Provider,{value:E.itemDepth,children:e});Ae.params={disabledItemsFocusable:!0,items:!0,isItemDisabled:!0,getItemLabel:!0,getItemChildren:!0,getItemId:!0,onItemClick:!0,itemChildrenIndentation:!0};const Rn=()=>{},Ci=()=>{},we=typeof document<"u"?v.useLayoutEffect:Ci,bt=Re(e=>e.expansion.expandedItems,e=>{const n=new Map;return e.forEach(o=>{n.set(o,!0)}),n}),z={expandedItemsRaw:A(e=>e.expansion.expandedItems),expandedItemsMap:bt,flatList:Re(E.itemOrderedChildrenIdsLookup,bt,(e,n)=>{function o(i){if(!n.has(i))return[i];const r=[i],l=e[i]||[];for(const p of l)r.push(...o(p));return r}return(e[Z]??[]).flatMap(o)}),triggerSlot:A(e=>e.expansion.expansionTrigger),isItemExpanded:A(bt,(e,n)=>e.has(n)),isItemExpandable:A(E.itemMeta,(e,n)=>e?.expandable??!1)},Mn=({isItemEditable:e,expansionTrigger:n})=>n||(e?"iconContainer":"content"),Ei=(e,n,o)=>{e.$$publishEvent(n,o)},et=({instance:e,store:n,params:o})=>{Rn({controlled:o.expandedItems,defaultValue:o.defaultExpandedItems}),we(()=>{const f=Mn({isItemEditable:o.isItemEditable,expansionTrigger:o.expansionTrigger});n.state.expansion.expansionTrigger!==f&&n.set("expansion",j({},n.state.expansion,{expansionTrigger:f}))},[n,o.isItemEditable,o.expansionTrigger]);const i=(f,c)=>{o.expandedItems===void 0&&n.set("expansion",j({},n.state.expansion,{expandedItems:c})),o.onExpandedItemsChange?.(f,c)},r=q(()=>{i(null,[])}),l=q(({itemId:f,event:c,shouldBeExpanded:x})=>{const u=z.expandedItemsRaw(n.state);let m;x?m=[f].concat(u):m=u.filter(b=>b!==f),o.onItemExpansionToggle&&o.onItemExpansionToggle(c,f,x),i(c,m)}),p=q(({itemId:f,event:c=null,shouldBeExpanded:x})=>{const u=z.isItemExpanded(n.state,f),m=x??!u;if(u===m)return;const b={isExpansionPrevented:!1,shouldBeExpanded:m,event:c,itemId:f};Ei(e,"beforeItemToggleExpansion",b),!b.isExpansionPrevented&&e.applyItemExpansion({itemId:f,event:c,shouldBeExpanded:m})}),d=q(f=>z.isItemExpanded(n.state,f)),h=(f,c)=>{const x=E.itemMeta(n.state,c);if(x==null)return;const m=E.itemOrderedChildrenIds(n.state,x.parentId).filter(a=>z.isItemExpandable(n.state,a)&&!z.isItemExpanded(n.state,a)),b=z.expandedItemsRaw(n.state).concat(m);m.length>0&&(o.onItemExpansionToggle&&m.forEach(a=>{o.onItemExpansionToggle(f,a,!0)}),i(f,b))};return we(()=>{const f=o.expandedItems;f!==void 0&&n.set("expansion",j({},n.state.expansion,{expandedItems:f}))},[n,o.expandedItems]),{publicAPI:{setItemExpansion:p,isItemExpanded:d},instance:{setItemExpansion:p,applyItemExpansion:l,expandAllSiblings:h,resetItemExpansion:r}}},ki=[];et.applyDefaultValuesToParams=({params:e})=>j({},e,{defaultExpandedItems:e.defaultExpandedItems??ki});et.getInitialState=e=>({expansion:{expandedItems:e.expandedItems===void 0?e.defaultExpandedItems:e.expandedItems,expansionTrigger:Mn(e)}});et.params={expandedItems:!0,defaultExpandedItems:!0,onExpandedItemsChange:!0,onItemExpansionToggle:!0,expansionTrigger:!0};const St=(e,n)=>{let o=n.length-1;for(;o>=0&&!E.canItemBeFocused(e,n[o]);)o-=1;if(o!==-1)return n[o]},An=(e,n)=>{const o=E.itemMeta(e,n);if(!o)return null;const i=E.itemOrderedChildrenIds(e,o.parentId),r=E.itemIndex(e,n);if(r===0)return o.parentId;let l=r-1;for(;!E.canItemBeFocused(e,i[l])&&l>=0;)l-=1;if(l===-1)return o.parentId==null?null:An(e,o.parentId);let p=i[l],d=St(e,E.itemOrderedChildrenIds(e,p));for(;z.isItemExpanded(e,p)&&d!=null;)p=d,d=St(e,E.itemOrderedChildrenIds(e,p));return p},Ue=(e,n)=>{if(z.isItemExpanded(e,n)){const i=E.itemOrderedChildrenIds(e,n).find(r=>E.canItemBeFocused(e,r));if(i!=null)return i}let o=E.itemMeta(e,n);for(;o!=null;){const i=E.itemOrderedChildrenIds(e,o.parentId),r=E.itemIndex(e,o.id);if(r<i.length-1){let l=r+1;for(;!E.canItemBeFocused(e,i[l])&&l<i.length-1;)l+=1;if(E.canItemBeFocused(e,i[l]))return i[l]}o=E.itemMeta(e,o.parentId)}return null},Ln=e=>{let n=null;for(;n==null||z.isItemExpanded(e,n);){const o=E.itemOrderedChildrenIds(e,n),i=St(e,o);if(i==null)return n;n=i}return n},Je=e=>E.itemOrderedChildrenIds(e,null).find(n=>E.canItemBeFocused(e,n)),On=(e,n,o)=>{if(n===o)return[n,o];const i=E.itemMeta(e,n),r=E.itemMeta(e,o);if(!i||!r)return[n,o];if(i.parentId===r.id||r.parentId===i.id)return r.parentId===i.id?[i.id,r.id]:[r.id,i.id];const l=[i.id],p=[r.id];let d=i.parentId,h=r.parentId,f=p.indexOf(d)!==-1,c=l.indexOf(h)!==-1,x=!0,u=!0;for(;!c&&!f;)x&&(l.push(d),f=p.indexOf(d)!==-1,x=d!==null,!f&&x&&(d=E.itemParentId(e,d))),u&&!f&&(p.push(h),c=l.indexOf(h)!==-1,u=h!==null,!c&&u&&(h=E.itemParentId(e,h)));const m=f?d:h,b=E.itemOrderedChildrenIds(e,m),a=l[l.indexOf(m)-1],g=p[p.indexOf(m)-1];return b.indexOf(a)<b.indexOf(g)?[n,o]:[o,n]},Ti=(e,n,o)=>{const i=h=>{if(z.isItemExpandable(e,h)&&z.isItemExpanded(e,h))return E.itemOrderedChildrenIds(e,h)[0];let f=E.itemMeta(e,h);for(;f!=null;){const c=E.itemOrderedChildrenIds(e,f.parentId),x=E.itemIndex(e,f.id);if(x<c.length-1)return c[x+1];f=f.parentId?E.itemMeta(e,f.parentId):null}throw new Error("Invalid range")},[r,l]=On(e,n,o),p=[r];let d=r;for(;d!==l;)d=i(d),E.isItemDisabled(e,d)||p.push(d);return p},Pi=e=>{let n=Je(e);const o=[];for(;n!=null;)o.push(n),n=Ue(e,n);return o},wt=(e,n)=>n!==e.closest('*[role="treeitem"]'),Dn=Re(e=>e.selection.selectedItems,e=>Array.isArray(e)?e:e!=null?[e]:[]),Ht=Re(Dn,e=>{const n=new Map;return e.forEach(o=>{n.set(o,!0)}),n}),O={selectedItemsRaw:A(e=>e.selection.selectedItems),selectedItems:Dn,selectedItemsMap:Ht,enabled:A(e=>e.selection.isEnabled),isMultiSelectEnabled:A(e=>e.selection.isMultiSelectEnabled),isCheckboxSelectionEnabled:A(e=>e.selection.isCheckboxSelectionEnabled),propagationRules:A(e=>e.selection.selectionPropagation),isItemSelected:A(Ht,(e,n)=>e.has(n)),canItemBeSelected:A(E.isItemDisabled,e=>e.selection.isEnabled,(e,n,o)=>n&&!e)},Ve=e=>{const n={};return e.forEach(o=>{n[o]=!0}),n},_n=({store:e,oldModel:n,newModel:o})=>{const i=new Map;return o.forEach(r=>{i.set(r,!0)}),{added:o.filter(r=>!O.isItemSelected(e.state,r)),removed:n.filter(r=>!i.has(r))}},Fi=({store:e,selectionPropagation:n,newModel:o,oldModel:i,additionalItemsToPropagate:r})=>{if(!n.descendants&&!n.parents)return o;let l=!1;const p=Ve(o),d=_n({store:e,newModel:o,oldModel:i});return r?.forEach(h=>{p[h]?d.added.includes(h)||d.added.push(h):d.removed.includes(h)||d.removed.push(h)}),d.added.forEach(h=>{if(n.descendants){const f=c=>{c!==h&&(l=!0,p[c]=!0),E.itemOrderedChildrenIds(e.state,c).forEach(f)};f(h)}if(n.parents){const f=x=>p[x]?E.itemOrderedChildrenIds(e.state,x).every(f):!1,c=x=>{const u=E.itemParentId(e.state,x);if(u==null)return;E.itemOrderedChildrenIds(e.state,u).every(f)&&(l=!0,p[u]=!0,c(u))};c(h)}}),d.removed.forEach(h=>{if(n.parents){let f=E.itemParentId(e.state,h);for(;f!=null;)p[f]&&(l=!0,delete p[f]),f=E.itemParentId(e.state,f)}if(n.descendants){const f=c=>{c!==h&&(l=!0,delete p[c]),E.itemOrderedChildrenIds(e.state,c).forEach(f)};f(h)}}),l?Object.keys(p):o},Ri=A((e,n)=>{if(O.isItemSelected(e,n))return"checked";let o=!1,i=!1;const r=p=>{p!==n&&(O.isItemSelected(e,p)?o=!0:i=!0),E.itemOrderedChildrenIds(e,p).forEach(r)};return r(n),O.propagationRules(e).parents?o&&i?"indeterminate":o&&!i?"checked":"empty":o?"indeterminate":"empty"}),Mi=({props:e})=>{const{itemId:n}=e,{store:o}=be(),i=_(o,O.isCheckboxSelectionEnabled),r=_(o,O.canItemBeSelected,n),l=_(o,Ri,n),p=_(o,O.canItemBeSelected,n);return{propsEnhancers:{root:()=>{let d;return l==="checked"?d=!0:l==="indeterminate"?d="mixed":p?d=!1:d=void 0,{"aria-checked":d}},checkbox:({externalEventHandlers:d,interactions:h})=>({tabIndex:-1,onChange:c=>{d.onChange?.(c),!c.defaultMuiPrevented&&O.canItemBeSelected(o.state,n)&&h.handleCheckboxSelection(c)},visible:i,disabled:!r,checked:l==="checked",indeterminate:l==="indeterminate"})}}},Le=({store:e,params:n})=>{Rn({controlled:n.selectedItems,defaultValue:n.defaultSelectedItems});const o=v.useRef(null),i=v.useRef({}),r=(u,m,b)=>{const a=O.selectedItemsRaw(e.state);let g;const I=O.isMultiSelectEnabled(e.state);if(I&&(n.selectionPropagation.descendants||n.selectionPropagation.parents)?g=Fi({store:e,selectionPropagation:n.selectionPropagation,newModel:m,oldModel:a,additionalItemsToPropagate:b}):g=m,n.onItemSelectionToggle)if(I){const S=_n({store:e,newModel:g,oldModel:a});n.onItemSelectionToggle&&(S.added.forEach(y=>{n.onItemSelectionToggle(u,y,!0)}),S.removed.forEach(y=>{n.onItemSelectionToggle(u,y,!1)}))}else n.onItemSelectionToggle&&g!==a&&(a!=null&&n.onItemSelectionToggle(u,a,!1),g!=null&&n.onItemSelectionToggle(u,g,!0));n.selectedItems===void 0&&e.set("selection",j({},e.state.selection,{selectedItems:g})),n.onSelectedItemsChange?.(u,g)},l=({itemId:u,event:m=null,keepExistingSelection:b=!1,shouldBeSelected:a})=>{if(!O.enabled(e.state))return;let g;const I=O.isMultiSelectEnabled(e.state);if(b){const S=O.selectedItems(e.state),y=O.isItemSelected(e.state,u);y&&(a===!1||a==null)?g=S.filter(T=>T!==u):!y&&(a===!0||a==null)?g=[u].concat(S):g=S}else a===!1||a==null&&O.isItemSelected(e.state,u)?g=I?[]:null:g=I?[u]:u;r(m,g,[u]),o.current=u,i.current={}},p=(u,[m,b])=>{if(!O.isMultiSelectEnabled(e.state))return;let g=O.selectedItems(e.state).slice();Object.keys(i.current).length>0&&(g=g.filter(T=>!i.current[T]));const I=Ve(g),S=Ti(e.state,m,b),y=S.filter(T=>!I[T]);g=g.concat(y),r(u,g),i.current=Ve(S)},d=(u,m)=>{if(o.current!=null){const[b,a]=On(e.state,m,o.current);p(u,[b,a])}},h=(u,m)=>{p(u,[Je(e.state),m])},f=(u,m)=>{p(u,[m,Ln(e.state)])},c=u=>{if(!O.isMultiSelectEnabled(e.state))return;const b=Pi(e.state);r(u,b),i.current=Ve(b)},x=(u,m,b)=>{if(!O.isMultiSelectEnabled(e.state))return;let g=O.selectedItems(e.state).slice();Object.keys(i.current).length===0?(g.push(b),i.current={[m]:!0,[b]:!0}):(i.current[m]||(i.current={}),i.current[b]?(g=g.filter(I=>I!==m),delete i.current[m]):(g.push(b),i.current[b]=!0)),r(u,g)};return we(()=>{e.set("selection",{selectedItems:n.selectedItems===void 0?e.state.selection.selectedItems:n.selectedItems,isEnabled:!n.disableSelection,isMultiSelectEnabled:n.multiSelect,isCheckboxSelectionEnabled:n.checkboxSelection,selectionPropagation:{descendants:n.selectionPropagation.descendants,parents:n.selectionPropagation.parents}})},[e,n.selectedItems,n.multiSelect,n.checkboxSelection,n.disableSelection,n.selectionPropagation.descendants,n.selectionPropagation.parents]),{getRootProps:()=>({"aria-multiselectable":n.multiSelect}),publicAPI:{setItemSelection:l},instance:{setItemSelection:l,selectAllNavigableItems:c,expandSelectionRange:d,selectRangeFromStartToItem:h,selectRangeFromItemToEnd:f,selectItemFromArrowNavigation:x}}};Le.itemPlugin=Mi;const Ai=[],Li={};Le.applyDefaultValuesToParams=({params:e})=>j({},e,{disableSelection:e.disableSelection??!1,multiSelect:e.multiSelect??!1,checkboxSelection:e.checkboxSelection??!1,defaultSelectedItems:e.defaultSelectedItems??(e.multiSelect?Ai:null),selectionPropagation:e.selectionPropagation??Li});Le.getInitialState=e=>({selection:{selectedItems:e.selectedItems===void 0?e.defaultSelectedItems:e.selectedItems,isEnabled:!e.disableSelection,isMultiSelectEnabled:e.multiSelect,isCheckboxSelectionEnabled:e.checkboxSelection,selectionPropagation:e.selectionPropagation}});Le.params={disableSelection:!0,multiSelect:!0,checkboxSelection:!0,defaultSelectedItems:!0,selectedItems:!0,onSelectedItemsChange:!0,onItemSelectionToggle:!0,selectionPropagation:!0};const Xt=Re(O.selectedItems,z.expandedItemsMap,E.itemMetaLookup,E.disabledItemFocusable,e=>E.itemOrderedChildrenIds(e,null),(e,n,o,i,r)=>{const l=e.find(d=>{if(!i&&Xe(o,d))return!1;const h=o[d];return h&&(h.parentId==null||n.has(h.parentId))});if(l!=null)return l;const p=r.find(d=>i||!Xe(o,d));return p??null}),ge={defaultFocusableItemId:Xt,isItemTheDefaultFocusableItem:A(Xt,(e,n)=>e===n),focusedItemId:A(e=>e.focus.focusedItemId),isItemFocused:A((e,n)=>e.focus.focusedItemId===n)},Pt=({instance:e,params:n,store:o})=>{const i=q(c=>{ge.focusedItemId(o.state)!==c&&o.set("focus",j({},o.state.focus,{focusedItemId:c}))}),r=c=>{const x=E.itemMeta(o.state,c);return x&&(x.parentId==null||z.isItemExpanded(o.state,x.parentId))},l=(c,x)=>{const u=e.getItemDOMElement(x);u&&u.focus(),i(x),n.onItemFocus&&n.onItemFocus(c,x)},p=q((c,x)=>{r(x)&&l(c,x)}),d=q(()=>{const c=ge.focusedItemId(o.state);if(c==null)return;if(E.itemMeta(o.state,c)){const u=e.getItemDOMElement(c);u&&u.blur()}i(null)});ii(o,E.itemMetaLookup,()=>{const c=ge.focusedItemId(o.state);if(c==null||!!E.itemMeta(o.state,c))return;const u=ge.defaultFocusableItemId(o.state);if(u==null){i(null);return}l(null,u)});const h=c=>x=>{if(c.onFocus?.(x),x.defaultMuiPrevented)return;const u=ge.defaultFocusableItemId(o.state);x.target===x.currentTarget&&u!=null&&l(x,u)},f=c=>x=>{c.onBlur?.(x),!x.defaultMuiPrevented&&i(null)};return{getRootProps:c=>({onFocus:h(c),onBlur:f(c)}),publicAPI:{focusItem:p},instance:{focusItem:p,removeFocusedItem:d}}};Pt.getInitialState=()=>({focus:{focusedItemId:null}});Pt.params={onItemFocus:!0};const Oi=[];function Di(e){v.useEffect(e,Oi)}const Ce=0;class Ft{static create(){return new Ft}currentId=Ce;start(n,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=Ce,o()},n)}isStarted(){return this.currentId!==Ce}clear=()=>{this.currentId!==Ce&&(clearTimeout(this.currentId),this.currentId=Ce)};disposeEffect=()=>this.clear}function _i(){const e=Te(Ft.create).current;return Di(e.disposeEffect),e}const qe=(e,n)=>e.getAvailablePlugins().has(n),ce={isItemEditable:A(e=>e.label?.isItemEditable,E.itemModel,(e,n,o)=>!n||e==null?!1:typeof e=="boolean"?e:e(n)),isItemBeingEdited:A((e,n)=>n==null?!1:e.label?.editedItemId===n),isAnyItemBeingEdited:A(e=>!!e.label?.editedItemId)},zi=({props:e})=>{const{store:n}=be(),{label:o,itemId:i}=e,[r,l]=v.useState(o),p=_(n,ce.isItemEditable,i),d=_(n,ce.isItemBeingEdited,i);return v.useEffect(()=>{d||l(o)},[d,o]),{propsEnhancers:{label:()=>({editable:p}),labelInput:({externalEventHandlers:h,interactions:f})=>p?{value:r??"","data-element":"labelInput",onChange:m=>{h.onChange?.(m),l(m.target.value)},onKeyDown:m=>{if(h.onKeyDown?.(m),m.defaultMuiPrevented)return;const b=m.target;m.key==="Enter"&&b.value?f.handleSaveItemLabel(m,b.value):m.key==="Escape"&&f.handleCancelItemLabelEditing(m)},onBlur:m=>{h.onBlur?.(m),!m.defaultMuiPrevented&&m.target.value&&f.handleSaveItemLabel(m,m.target.value)},autoFocus:!0,type:"text"}:{}}}},fe=({store:e,params:n})=>{const o=r=>{r!==null&&!ce.isItemEditable(e.state,r)||e.set("label",j({},e.state.label,{editedItemId:r}))},i=(r,l)=>{if(!l)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","The label of an item cannot be empty.",r].join(`
`));const p=e.state.items.itemMetaLookup[r];p.label!==l&&(e.set("items",j({},e.state.items,{itemMetaLookup:j({},e.state.items.itemMetaLookup,{[r]:j({},p,{label:l})})})),n.onItemLabelChange&&n.onItemLabelChange(r,l))};return we(()=>{e.set("label",j({},e.state.label,{isItemEditable:n.isItemEditable}))},[e,n.isItemEditable]),{instance:{setEditedItem:o,updateItemLabel:i},publicAPI:{setEditedItem:o,updateItemLabel:i}}};fe.itemPlugin=zi;fe.applyDefaultValuesToParams=({params:e})=>j({},e,{isItemEditable:e.isItemEditable??!1});fe.getInitialState=e=>({label:{isItemEditable:e.isItemEditable,editedItemId:null}});fe.params={onItemLabelChange:!0,isItemEditable:!0};function $i(e){return!!e&&e.length===1&&!!e.match(/\S/)}const Ni=500,zn=({instance:e,store:n,params:o})=>{const i=Xn(),r=v.useRef({}),l=v.useRef(""),p=_i(),d=q(a=>{r.current=a(r.current)}),h=_(n,E.itemMetaLookup);v.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const a={},g=I=>{a[I.id]=I.label.toLowerCase()};Object.values(h).forEach(g),r.current=a},[h,o.getItemId,e]);const f=a=>{const g=Ue(n.state,a);return g===null?Je(n.state):g},c=(a,g)=>{let I=null;const S={};let y=g.length>1?a:f(a);for(;I==null&&!S[y];)r.current[y]?.startsWith(g)?I=y:(S[y]=!0,y=f(y));return I},x=(a,g)=>{const I=g.toLowerCase(),S=`${l.current}${I}`,y=c(a,S);if(y!=null)return l.current=S,y;const T=c(a,I);return T!=null?(l.current=I,T):(l.current="",null)},u=a=>O.enabled(n.state)&&!E.isItemDisabled(n.state,a),m=a=>!E.isItemDisabled(n.state,a)&&z.isItemExpandable(n.state,a);return{instance:{updateLabelMap:d,handleItemKeyDown:async(a,g)=>{if(a.defaultMuiPrevented||a.altKey||wt(a.target,a.currentTarget))return;const I=a.ctrlKey||a.metaKey,S=a.key,y=O.isMultiSelectEnabled(n.state);switch(!0){case(S===" "&&u(g)):{a.preventDefault(),y&&a.shiftKey?e.expandSelectionRange(a,g):e.setItemSelection({event:a,itemId:g,keepExistingSelection:y,shouldBeSelected:void 0});break}case S==="Enter":{qe(e,fe)&&ce.isItemEditable(n.state,g)&&!ce.isItemBeingEdited(n.state,g)?e.setEditedItem(g):m(g)?(e.setItemExpansion({event:a,itemId:g}),a.preventDefault()):u(g)&&(y?(a.preventDefault(),e.setItemSelection({event:a,itemId:g,keepExistingSelection:!0})):O.isItemSelected(n.state,g)||(e.setItemSelection({event:a,itemId:g}),a.preventDefault()));break}case S==="ArrowDown":{const T=Ue(n.state,g);T&&(a.preventDefault(),e.focusItem(a,T),y&&a.shiftKey&&u(T)&&e.selectItemFromArrowNavigation(a,g,T));break}case S==="ArrowUp":{const T=An(n.state,g);T&&(a.preventDefault(),e.focusItem(a,T),y&&a.shiftKey&&u(T)&&e.selectItemFromArrowNavigation(a,g,T));break}case(S==="ArrowRight"&&!i||S==="ArrowLeft"&&i):{if(I)return;if(z.isItemExpanded(n.state,g)){const T=Ue(n.state,g);T&&(e.focusItem(a,T),a.preventDefault())}else m(g)&&(e.setItemExpansion({event:a,itemId:g}),a.preventDefault());break}case(S==="ArrowLeft"&&!i||S==="ArrowRight"&&i):{if(I)return;if(m(g)&&z.isItemExpanded(n.state,g))e.setItemExpansion({event:a,itemId:g}),a.preventDefault();else{const T=E.itemParentId(n.state,g);T&&(e.focusItem(a,T),a.preventDefault())}break}case S==="Home":{u(g)&&y&&I&&a.shiftKey?e.selectRangeFromStartToItem(a,g):e.focusItem(a,Je(n.state)),a.preventDefault();break}case S==="End":{u(g)&&y&&I&&a.shiftKey?e.selectRangeFromItemToEnd(a,g):e.focusItem(a,Ln(n.state)),a.preventDefault();break}case S==="*":{e.expandAllSiblings(a,g),a.preventDefault();break}case(String.fromCharCode(a.keyCode)==="A"&&I&&y&&O.enabled(n.state)):{e.selectAllNavigableItems(a),a.preventDefault();break}case(!I&&!a.shiftKey&&$i(S)):{p.clear();const T=x(g,S);T!=null?(e.focusItem(a,T),a.preventDefault()):l.current="",p.start(Ni,()=>{l.current=""});break}}}}}};zn.params={};function Bi(e){return e.replace(/["\\]/g,"\\$&")}const $n=v.createContext(null);function Nn(e){const{children:n,itemId:o=null,idAttribute:i}=e,{instance:r,store:l,rootRef:p}=be(),d=v.useRef(new Map);v.useEffect(()=>{if(!p.current)return;const f=E.itemOrderedChildrenIds(l.state,o??null)??[],c=Bi(i??p.current.id);if(o!=null){const b=p.current.querySelector(`*[id="${c}"][role="treeitem"]`);if(b&&b.getAttribute("aria-expanded")==="false")return}const x=p.current.querySelectorAll(`${o==null?"":`*[id="${c}"] `}[role="treeitem"]:not(*[id="${c}"] [role="treeitem"] [role="treeitem"])`),u=Array.from(x).map(b=>d.current.get(b.id));(u.length!==f.length||u.some((b,a)=>b!==f[a]))&&r.setJSXItemsOrderedChildrenIds(o??null,u)});const h=v.useMemo(()=>({registerChild:(f,c)=>d.current.set(f,c),unregisterChild:f=>d.current.delete(f),parentId:o}),[o]);return t.jsx($n.Provider,{value:h,children:n})}const Jt={dataSource:A(e=>e.lazyLoading?.dataSource),isItemLoading:A((e,n)=>e.lazyLoading?.dataSource.loading[n??Z]??!1),itemHasError:A((e,n)=>!!e.lazyLoading?.dataSource.errors[n??Z]),itemError:A((e,n)=>e.lazyLoading?.dataSource.errors[n??Z])},Rt=e=>Array.isArray(e)?e.length>0&&e.some(Rt):!!e,Ui=({itemId:e,children:n})=>{const{instance:o,store:i,publicAPI:r}=be(),l=_(i,z.isItemExpandable,e),p=_(i,Jt.isItemLoading,e),d=_(i,Jt.itemHasError,e),h=Rt(n)||l,f=_(i,z.isItemExpanded,e),c=_(i,ge.isItemFocused,e),x=_(i,O.isItemSelected,e),u=_(i,E.isItemDisabled,e),m=_(i,ce.isItemBeingEdited,e),b=_(i,ce.isItemEditable,e),a={expandable:h,expanded:f,focused:c,selected:x,disabled:u,editing:m,editable:b,loading:p,error:d},g=w=>{if(a.disabled)return;a.focused||o.focusItem(w,e);const P=O.isMultiSelectEnabled(i.state)&&(w.shiftKey||w.ctrlKey||w.metaKey);a.expandable&&!(P&&z.isItemExpanded(i.state,e))&&o.setItemExpansion({event:w,itemId:e})},I=w=>{if(a.disabled)return;!a.focused&&!a.editing&&o.focusItem(w,e),O.isMultiSelectEnabled(i.state)&&(w.shiftKey||w.ctrlKey||w.metaKey)?w.shiftKey?o.expandSelectionRange(w,e):o.setItemSelection({event:w,itemId:e,keepExistingSelection:!0}):o.setItemSelection({event:w,itemId:e,shouldBeSelected:!0})},S=w=>{const P=w.nativeEvent.shiftKey,L=O.isMultiSelectEnabled(i.state);L&&P?o.expandSelectionRange(w,e):o.setItemSelection({event:w,itemId:e,keepExistingSelection:L,shouldBeSelected:w.target.checked})},y=()=>{qe(o,fe)&&(m?o.setEditedItem(null):o.setEditedItem(e))};return{interactions:{handleExpansion:g,handleSelection:I,handleCheckboxSelection:S,toggleItemEditing:y,handleSaveItemLabel:(w,P)=>{qe(o,fe)&&ce.isItemBeingEdited(i.state,e)&&(o.updateItemLabel(e,P),y(),o.focusItem(w,e))},handleCancelItemLabelEditing:w=>{qe(o,fe)&&ce.isItemBeingEdited(i.state,e)&&(y(),o.focusItem(w,e))}},status:a,publicAPI:r}},Vi=({props:e,rootRef:n,contentRef:o})=>{const{instance:i,store:r}=be(),{children:l,disabled:p=!1,label:d,itemId:h,id:f}=e,c=v.useContext($n);if(c==null)throw new Error(["MUI X: Could not find the Tree View Children Item context.","It looks like you rendered your component outside of a SimpleTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));const{registerChild:x,unregisterChild:u,parentId:m}=c,b=Rt(l),a=v.useRef(null),g=He(a,o),I=_(r,Me.treeId);return we(()=>{const S=Qe({itemId:h,treeId:I,id:f});return x(S,h),()=>{u(S),u(S)}},[r,i,x,u,h,f,I]),we(()=>i.insertJSXItem({id:h,idAttribute:f,parentId:m,expandable:b,disabled:p}),[i,m,h,b,p,f]),v.useEffect(()=>{if(d)return i.mapLabelFromJSX(h,(a.current?.textContent??"").toLowerCase())},[i,h,d]),{contentRef:g,rootRef:n}},Oe=({instance:e,store:n})=>{e.preventItemUpdates();const o=q(l=>{if(n.state.items.itemMetaLookup[l.id]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${l.id}"`].join(`
`));return n.set("items",j({},n.state.items,{itemMetaLookup:j({},n.state.items.itemMetaLookup,{[l.id]:l}),itemModelLookup:j({},n.state.items.itemModelLookup,{[l.id]:{id:l.id,label:l.label??""}})})),()=>{const p=j({},n.state.items.itemMetaLookup),d=j({},n.state.items.itemModelLookup);delete p[l.id],delete d[l.id],n.set("items",j({},n.state.items,{itemMetaLookup:p,itemModelLookup:d}))}}),i=(l,p)=>{const d=l??Z;n.set("items",j({},n.state.items,{itemOrderedChildrenIdsLookup:j({},n.state.items.itemOrderedChildrenIdsLookup,{[d]:p}),itemChildrenIndexesLookup:j({},n.state.items.itemChildrenIndexesLookup,{[d]:Tn(p)})}))},r=q((l,p)=>(e.updateLabelMap(d=>(d[l]=p,d)),()=>{e.updateLabelMap(d=>{const h=j({},d);return delete h[l],h})}));return{instance:{insertJSXItem:o,setJSXItemsOrderedChildrenIds:i,mapLabelFromJSX:r}}};Oe.itemPlugin=Vi;Oe.wrapItem=({children:e,itemId:n,idAttribute:o})=>{const i=v.useContext(Pe);return t.jsx(Nn,{itemId:n,idAttribute:o,children:t.jsx(Pe.Provider,{value:i+1,children:e})})};Oe.wrapRoot=({children:e})=>t.jsx(Nn,{itemId:null,idAttribute:null,children:t.jsx(Pe.Provider,{value:0,children:e})});Oe.params={};const qi=[Ae,et,Le,Pt,zn,Oe],Gi=["slots","slotProps"],Ki=In(),Wi=e=>{const{classes:n}=e;return v.useMemo(()=>an({root:["root"],item:["item"],itemContent:["itemContent"],itemGroupTransition:["itemGroupTransition"],itemIconContainer:["itemIconContainer"],itemLabel:["itemLabel"],itemCheckbox:["itemCheckbox"]},Po,n),[n])},Hi=Q("ul",{name:"MuiSimpleTreeView",slot:"Root"})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"}),Xi=[],Ji=v.forwardRef(function(n,o){const i=Ki({props:n,name:"MuiSimpleTreeView"}),{slots:r,slotProps:l}=i,p=Fe(i,Gi),{getRootProps:d,contextValue:h}=bi({plugins:qi,rootRef:o,props:j({},p,{items:Xi})}),f=Wi(i),c=r?.root??Hi,x=W({elementType:c,externalSlotProps:l?.root,className:f.root,getSlotProps:d,ownerState:i});return t.jsx(Ii,{contextValue:h,classes:f,slots:r,slotProps:l,children:t.jsx(c,j({},x))})}),Yi=(e,n,o)=>typeof o=="function"?o(e,n):o,Zi=e=>{const{runItemPlugins:n,instance:o,publicAPI:i,store:r}=be(),l=v.useContext(Pe),p=_(r,Yi,e.itemId,l),{id:d,itemId:h,label:f,children:c,rootRef:x}=e,{rootRef:u,contentRef:m,propsEnhancers:b}=n(e),{interactions:a,status:g}=Ui({itemId:h,children:c}),I=v.useRef(null),S=v.useRef(null),y=He(x,u,I),T=He(m,S),D=v.useRef(null),k=_(r,Me.treeId),w=_(r,O.isCheckboxSelectionEnabled),P=Qe({itemId:h,treeId:k,id:d}),L=_(r,ge.isItemTheDefaultFocusableItem,h),B={rootRefObject:I,contentRefObject:S,interactions:a},ee=F=>C=>{F.onFocus?.(C),!C.defaultMuiPrevented&&!g.focused&&E.canItemBeFocused(r.state,h)&&C.currentTarget===C.target&&o.focusItem(C,h)},Ie=F=>C=>{if(F.onBlur?.(C),C.defaultMuiPrevented)return;const N=o.getItemDOMElement(h);g.editing||C.relatedTarget&&wt(C.relatedTarget,N)&&(C.target&&C.target?.dataset?.element==="labelInput"&&wt(C.target,N)||C.relatedTarget?.dataset?.element==="labelInput")||o.removeFocusedItem()},ye=F=>C=>{F.onKeyDown?.(C),!(C.defaultMuiPrevented||C.target?.dataset?.element==="labelInput")&&o.handleItemKeyDown(C,h)},De=F=>C=>{F.onDoubleClick?.(C),!C.defaultMuiPrevented&&a.toggleItemEditing()},tt=F=>C=>{F.onClick?.(C),o.handleItemClick(C,h),!(C.defaultMuiPrevented||D.current?.contains(C.target))&&(z.triggerSlot(r.state)==="content"&&a.handleExpansion(C),w||a.handleSelection(C))},_e=F=>C=>{F.onMouseDown?.(C),!C.defaultMuiPrevented&&(C.shiftKey||C.ctrlKey||C.metaKey||g.disabled)&&C.preventDefault()},nt=F=>C=>{F.onClick?.(C),!C.defaultMuiPrevented&&z.triggerSlot(r.state)==="iconContainer"&&a.handleExpansion(C)};return{getContextProviderProps:()=>({itemId:h,id:d}),getRootProps:(F={})=>{const C=j({},X(e),X(F)),N=j({},C,{ref:y,role:"treeitem",tabIndex:L?0:-1,id:P,"aria-expanded":g.expandable?g.expanded:void 0,"aria-disabled":g.disabled||void 0},F,{style:j({},F.style??{},{"--TreeView-itemDepth":p}),onFocus:ee(C),onBlur:Ie(C),onKeyDown:ye(C)}),me=b.root?.(j({},B,{externalEventHandlers:C}))??{};return j({},N,me)},getContentProps:(F={})=>{const C=X(F),N=j({},C,F,{ref:T,onClick:tt(C),onMouseDown:_e(C),status:g});["expanded","selected","focused","disabled","editing","editable"].forEach(zt=>{g[zt]&&(N[`data-${zt}`]="")});const me=b.content?.(j({},B,{externalEventHandlers:C}))??{};return j({},N,me)},getGroupTransitionProps:(F={})=>{const C=X(F);return j({},C,{unmountOnExit:!0,component:"ul",role:"group",in:g.expanded,children:c},F)},getIconContainerProps:(F={})=>{const C=X(F);return j({},C,F,{onClick:nt(C)})},getCheckboxProps:(F={})=>{const C=X(F),N=j({},C,{ref:D,"aria-hidden":!0},F),me=b.checkbox?.(j({},B,{externalEventHandlers:C}))??{};return j({},N,me)},getLabelProps:(F={})=>{const C=j({},X(F)),N=j({},C,{children:f},F,{onDoubleClick:De(C)}),me=b.label?.(j({},B,{externalEventHandlers:C}))??{};return j({},me,N)},getLabelInputProps:(F={})=>{const C=X(F),N=b.labelInput?.(j({},B,{externalEventHandlers:C}))??{};return j({},F,N)},getDragAndDropOverlayProps:(F={})=>{const C=X(F),N=b.dragAndDropOverlay?.(j({},B,{externalEventHandlers:C}))??{};return j({},F,N)},getErrorContainerProps:(F={})=>{const C=X(F);return j({},C,F)},getLoadingContainerProps:(F={})=>{const C=X(F);return j({size:"12px",thickness:6},C,F)},rootRef:y,status:g,publicAPI:i}};function Qi(e){return rn("MuiTreeItem",e)}sn("MuiTreeItem",["root","content","groupTransition","iconContainer","label","checkbox","labelInput","dragAndDropOverlay","errorIcon","loadingIcon","expanded","selected","focused","disabled","editable","editing"]);const er=ln(t.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),tr=ln(t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),nr=["ownerState"];function It(e,n,o){return e!==void 0?e:n!==void 0?n:o}function or(e){const{slots:n,slotProps:o,status:i}=e,{slots:r,slotProps:l}=kn(),p={collapseIcon:It(n?.collapseIcon,r.collapseIcon,tr),expandIcon:It(n?.expandIcon,r.expandIcon,er),endIcon:It(n?.endIcon,r.endIcon),icon:n?.icon};let d;p?.icon?d="icon":i.expandable?i.expanded?d="collapseIcon":d="expandIcon":d="endIcon";const h=p[d],f=W({elementType:h,externalSlotProps:x=>j({},$t(l[d],x),$t(o?.[d],x)),ownerState:{}}),c=Fe(f,nr);return h?t.jsx(h,j({},c)):null}const ir=Q("div",{name:"MuiTreeItemDragAndDropOverlay",slot:"Root",shouldForwardProp:e=>Ct(e)&&e!=="action"})(({theme:e})=>({position:"absolute",left:0,display:"flex",top:0,bottom:0,right:0,pointerEvents:"none",variants:[{props:{action:"make-child"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderRadius:e.shape.borderRadius,backgroundColor:e.vars?`rgba(${e.vars.palette.primary.darkChannel} / ${e.vars.palette.action.focusOpacity})`:Ee(e.palette.primary.dark,e.palette.action.focusOpacity)}},{props:{action:"reorder-above"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderTop:`1px solid ${(e.vars||e).palette.action.active}`}},{props:{action:"reorder-below"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderBottom:`1px solid ${(e.vars||e).palette.action.active}`}},{props:{action:"move-to-parent"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * calc(var(--TreeView-itemDepth) - 1))",borderBottom:`1px solid ${(e.vars||e).palette.action.active}`}}]}));function rr(e){return e.action==null?null:t.jsx(ir,j({},e))}function sr(e){const{children:n,itemId:o,id:i}=e,{wrapItem:r,instance:l,store:p}=be(),d=_(p,Me.treeId),h=Qe({itemId:o,treeId:d,id:i});return t.jsx(v.Fragment,{children:r({children:n,itemId:o,instance:l,idAttribute:h})})}const ar=Q("input",{name:"MuiTreeItem",slot:"LabelInput"})(({theme:e})=>j({},e.typography.body1,{width:"100%",backgroundColor:(e.vars||e).palette.background.paper,borderRadius:e.shape.borderRadius,border:"none",padding:"0 2px",boxSizing:"border-box","&:focus":{outline:`1px solid ${(e.vars||e).palette.primary.main}`}})),lr=["visible"],cr=["id","itemId","label","disabled","children","slots","slotProps","classes"],dr=In(),ur=Q("li",{name:"MuiTreeItem",slot:"Root"})({listStyle:"none",margin:0,padding:0,outline:0}),pr=Q("div",{name:"MuiTreeItem",slot:"Content",shouldForwardProp:e=>Ct(e)&&e!=="status"})(({theme:e})=>({padding:e.spacing(.5,1),paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`,borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",position:"relative",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&[data-disabled]":{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent",cursor:"auto"},"&[data-focused]":{backgroundColor:(e.vars||e).palette.action.focus},"&[data-selected]":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ee(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ee(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ee(e.palette.primary.main,e.palette.action.selectedOpacity)}}},"&[data-selected][data-focused]":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ee(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}})),fr=Q("div",{name:"MuiTreeItem",slot:"Label",shouldForwardProp:e=>Ct(e)&&e!=="editable"})(({theme:e})=>j({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative",overflow:"hidden"},e.typography.body1,{variants:[{props:({editable:n})=>n,style:{paddingLeft:"2px"}}]})),mr=Q("div",{name:"MuiTreeItem",slot:"IconContainer"})({width:16,display:"flex",flexShrink:0,justifyContent:"center",position:"relative",cursor:"inherit","& svg":{fontSize:18}}),xr=Q(Zn,{name:"MuiTreeItem",slot:"GroupTransition",overridesResolver:(e,n)=>n.groupTransition})({margin:0,padding:0}),hr=Q("div",{name:"MuiTreeItem",slot:"ErrorIcon"})({position:"absolute",right:-3,width:7,height:7,borderRadius:"50%",backgroundColor:"red"}),gr=Q(Yn,{name:"MuiTreeItem",slot:"LoadingIcon"})({color:"text.primary"}),br=Q(v.forwardRef((e,n)=>{const{visible:o}=e,i=Fe(e,lr);return o?t.jsx(Jn,j({},i,{ref:n})):null}),{name:"MuiTreeItem",slot:"Checkbox"})({padding:0}),Ir=e=>{const{classes:n}=kn(),o=j({},e,{root:Y(e?.root,n.root),content:Y(e?.content,n.itemContent),iconContainer:Y(e?.iconContainer,n.itemIconContainer),checkbox:Y(e?.checkbox,n.itemCheckbox),label:Y(e?.label,n.itemLabel),groupTransition:Y(e?.groupTransition,n.itemGroupTransition),labelInput:Y(e?.labelInput,n.itemLabelInput),dragAndDropOverlay:Y(e?.dragAndDropOverlay,n.itemDragAndDropOverlay),errorIcon:Y(e?.errorIcon,n.itemErrorIcon),loadingIcon:Y(e?.loadingIcon,n.itemLoadingIcon)});return an({root:["root"],content:["content"],iconContainer:["iconContainer"],checkbox:["checkbox"],label:["label"],groupTransition:["groupTransition"],labelInput:["labelInput"],dragAndDropOverlay:["dragAndDropOverlay"],errorIcon:["errorIcon"],loadingIcon:["loadingIcon"],expanded:["expanded"],editing:["editing"],editable:["editable"],selected:["selected"],focused:["focused"],disabled:["disabled"]},Qi,o)},pe=v.forwardRef(function(n,o){const i=dr({props:n,name:"MuiTreeItem"}),{id:r,itemId:l,label:p,disabled:d,children:h,slots:f={},slotProps:c={},classes:x}=i,u=Fe(i,cr),{getContextProviderProps:m,getRootProps:b,getContentProps:a,getIconContainerProps:g,getCheckboxProps:I,getLabelProps:S,getGroupTransitionProps:y,getLabelInputProps:T,getDragAndDropOverlayProps:D,getErrorContainerProps:k,getLoadingContainerProps:w,status:P}=Zi({id:r,itemId:l,children:h,label:p,disabled:d}),L=Ir(x),B=f.root??ur,ee=W({elementType:B,getSlotProps:b,externalForwardedProps:u,externalSlotProps:c.root,additionalProps:{ref:o},ownerState:{},className:L.root}),Ie=f.content??pr,ye=W({elementType:Ie,getSlotProps:a,externalSlotProps:c.content,ownerState:{},className:Y(L.content,P.expanded&&L.expanded,P.selected&&L.selected,P.focused&&L.focused,P.disabled&&L.disabled,P.editing&&L.editing,P.editable&&L.editable)}),De=f.iconContainer??mr,tt=W({elementType:De,getSlotProps:g,externalSlotProps:c.iconContainer,ownerState:{},className:L.iconContainer}),_e=f.label??fr,nt=W({elementType:_e,getSlotProps:S,externalSlotProps:c.label,ownerState:{},className:L.label}),ot=f.checkbox??br,At=W({elementType:ot,getSlotProps:I,externalSlotProps:c.checkbox,ownerState:{},className:L.checkbox}),it=f.groupTransition??void 0,Lt=W({elementType:it,getSlotProps:y,externalSlotProps:c.groupTransition,ownerState:{},className:L.groupTransition}),rt=f.labelInput??ar,Ot=W({elementType:rt,getSlotProps:T,externalSlotProps:c.labelInput,ownerState:{},className:L.labelInput}),st=f.dragAndDropOverlay??rr,Dt=W({elementType:st,getSlotProps:D,externalSlotProps:c.dragAndDropOverlay,ownerState:{},className:L.dragAndDropOverlay}),at=f.errorIcon??hr,_t=W({elementType:at,getSlotProps:k,externalSlotProps:c.errorIcon,ownerState:{},className:L.errorIcon}),lt=f.loadingIcon??gr,F=W({elementType:lt,getSlotProps:w,externalSlotProps:c.loadingIcon,ownerState:{},className:L.loadingIcon});return t.jsx(sr,j({},m(),{children:t.jsxs(B,j({},ee,{children:[t.jsxs(Ie,j({},ye,{children:[t.jsxs(De,j({},tt,{children:[P.error&&t.jsx(at,j({},_t)),P.loading?t.jsx(lt,j({},F)):t.jsx(or,{status:P,slots:f,slotProps:c})]})),t.jsx(ot,j({},At)),P.editing?t.jsx(rt,j({},Ot)):t.jsx(_e,j({},nt)),t.jsx(st,j({},Dt))]})),h&&t.jsx(xr,j({as:it},Lt))]}))}))}),Mt="http://localhost:8082",vr=async(e,n)=>(await Et.put(Mt+e,n)).data,Sr=async(e,n)=>(await Et.post(Mt+e,n)).data,wr=async e=>(await Et.get(Mt+e)).data,jt={alteraSenha:async e=>await vr("/portaria/v1/usuario/alterarSenha",e),handlePermission:async(e,n)=>await Sr(`/module/add/${n}`,e),ListaModulo:async()=>await wr("/module/lista")},jr=io`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,Ne={Main:s.div`
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 20px;
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
    animation: ${({loading:e})=>e?`${jr} 1s linear infinite`:"none"};
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
  `,Card:s.div`
    background: #fff;
    border-radius: 12px;
    padding: 15px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

    @media (min-width: 768px) {
      padding: 24px;
      margin-bottom: 20px;
    }
  `,CardHeaderPrincipal:s.div`
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
  `};function yr({listaFiliais:e,carregarDadosLogistico:n}){return t.jsx(Ne.FilterArea,{children:t.jsxs(Ne.SelectGroup,{children:[t.jsx(Ne.Label,{children:"Mudar filial:"}),t.jsxs(Ne.Select,{onChange:o=>n(o.target.value),children:[t.jsx("option",{value:"",children:"Selecione uma filial..."}),e.map((o,i)=>t.jsxs("option",{value:o?.numeroFilial,children:[o?.numeroFilial," - ",o?.nome]},i))]})]})})}function Cr({handleReset:e,usuario:n,modulos:o}){const[i,r]=v.useState({}),[l,p]=v.useState({}),d=k=>{r(w=>({...w,[k]:!w[k]}))},h=k=>{p(w=>({...w,[k]:!w[k]})),console.log("click")},[f,c]=v.useState([]),[x,u]=v.useState([]),m=async()=>{const k=await jt.ListaModulo();k&&c(k)},b=v.useCallback(async()=>{const k=await V.FiliaisUsuario(n?.id);k.acess&&u(k.acess)},[n?.id]),[a,g]=v.useState(""),I=async()=>{const k={lista:Object.entries(l).map(([P,L])=>({permissionId:Number(P),ativo:L}))};await V.addFiliais(k,n?.id);const w={mod:{filial:a},lista:Object.entries(i).map(([P,L])=>({permissionId:Number(P.replace("mod-","")),ativo:L}))};await jt.handlePermission(w,n?.id)},S=async()=>{try{await I(),H("Permissões e filiais salvas com sucesso","success"),e()}catch(k){H("Erro ao salvar permissões","error"),console.error(k)}},[y,T]=v.useState([]),D=async()=>{try{const k=await Ze.lista();k?.filial&&T(k.filial)}catch{H("Erro ao carregar filiais","error")}};return v.useEffect(()=>{m(),b(),D()},[n.id,b]),v.useEffect(()=>{if(o?.length){const k={};o.forEach(w=>{k[`mod-${w.id}`]=!0}),r(k)}else r({});if(x?.length){const k={};x.forEach(w=>{k[w.id]=!0}),p(k)}else p({})},[o,x]),t.jsxs(t.Fragment,{children:[t.jsx(ve,{sx:{minHeight:352,minWidth:250},children:t.jsxs(Ji,{onSelectedItemsChange:(k,w)=>{k?.code==="Space"&&(String(w).startsWith("mod-")?d(w):h(Number(w)))},children:[t.jsx(pe,{sx:{fontSize:13,fontFamily:"sans-serif"},itemId:"grid",label:"Acess - "+n?.nome,children:f?.map(k=>t.jsx(pe,{itemId:`mod-${k.id}`,label:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},onClick:w=>{w.stopPropagation(),d(`mod-${k.id}`)},children:[t.jsx("input",{type:"checkbox",checked:!!i[`mod-${k.id}`],readOnly:!0}),t.jsx("span",{style:{fontFamily:"sans-serif",fontSize:13},children:k.titulo})]})},`mod-${k.id}`))}),t.jsx(pe,{sx:{fontSize:13,fontFamily:"sans-serif"},itemId:"filiais",label:"Inclusão de Filias ",children:y?.map((k,w)=>t.jsx(pe,{itemId:String(k.id),label:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},onClick:P=>{P.stopPropagation(),h(k.id)},children:[t.jsx("input",{type:"checkbox",checked:!!l[k.id],readOnly:!0}),t.jsx("span",{style:{fontFamily:"sans-serif",fontSize:13},children:k.nome+k.numeroFilial})]})},w))}),t.jsx(pe,{itemId:"grid02",label:"Perfil",children:t.jsx(pe,{itemId:n?.perfil.nome.toString(),label:n?.perfil?.nome})}),t.jsx(pe,{itemId:"grid03",label:"Filial Atual - "+n?.filial,children:t.jsx(pe,{itemId:n.nome,label:t.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:t.jsx(yr,{listaFiliais:y,carregarDadosLogistico:k=>g(k)})})})})]})}),t.jsxs(oe.area_btn,{children:[t.jsx(de,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:S}),t.jsx(de,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:e})]})]})}const Er=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(!1),[r,l]=v.useState(),p=async h=>{h.preventDefault();const f=await V.BuscaPefilUsuario(e);f.usuario&&(i(!0),l(f.usuario))},d=()=>{i(!1),n("")};return t.jsxs(Se,{children:[t.jsxs(oe.form,{onSubmit:p,children:[t.jsx("div",{style:{marginBottom:10},children:t.jsx(oe.container_titulo,{children:"Inclusão de Acesso"})}),t.jsx(oe.area_campo,{children:t.jsxs(oe.CamposInput,{children:[t.jsx(oe.label,{children:"Email do usuario"}),t.jsx(oe.input,{value:e,type:"search",autoFocus:!0,onChange:h=>n(h.target.value)})]})})]}),o&&t.jsx(t.Fragment,{children:t.jsx(Cr,{modulos:r?.acess,handleReset:d,usuario:r})})]})},kr=()=>t.jsx(t.Fragment,{children:t.jsx(oe.container,{children:t.jsx(oe.container_int,{children:t.jsx(oe.conainter_right,{children:t.jsx(Er,{})})})})}),ne={container:s.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,BtnLogin:s.button`
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
    
    `,leftArea:s.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `,TableContainer:s.div`
        width: 100%;
        overflow-x: auto;
        margin-top: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `,Table:s.table`
        width: 100%;
        border-collapse: collapse;
        background-color: #fff;
        font-family: "Inter", sans-serif;
    
        th, td {
          padding: 10px 5px;
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
      `,trBTN:s.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1px;
        `,ativo:s.div`
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: ${({ativo:e})=>e?"green":"red"};
        `},Tr=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(null),[r,l]=v.useState(!1),[p,d]=v.useState(!1),[h,f]=v.useState(""),c=async()=>{const b=await V.BuscaPefilUsuario(e);b&&i(b?.usuario)},x=b=>{f(b),d(!1),l(!0)},u=b=>{f(b),d(!0),l(!1)},m=async b=>{const a=await V.AdicionarPefil(h,b.idPerfil,null);a&&(l(!1),H(a.msg,"success"),setTimeout(()=>{c()},1e3))};return t.jsx(t.Fragment,{children:t.jsxs(ne.container,{children:[t.jsx(ne.titulo,{children:"Perfil Usuario"}),t.jsxs(ne.FormSub,{children:[t.jsxs(ne.CamposInput,{children:[t.jsx(ne.label,{children:"Email"}),t.jsx(ne.Campos,{placeholder:"@exmplo.com",type:"email",onChange:b=>n(b.target.value),onKeyDown:b=>{b.key==="Enter"&&c()}})]}),o?t.jsx(ne.TableContainer,{children:t.jsxs(ne.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Nome"}),t.jsx("th",{children:"Perfil"}),t.jsx("th",{children:"Status"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:o?.id}),t.jsx("td",{children:o?.nome}),t.jsx("td",{children:o?.perfil.nome}),t.jsx("td",{children:o?.ativo?t.jsx(ne.ativo,{ativo:o?.ativo}):"DESTIVADO"}),t.jsx("td",{children:t.jsxs(ne.trBTN,{children:[t.jsx(le,{onClick:()=>u(o?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(on,{})}),t.jsx(le,{onClick:()=>x(o?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(yt,{})})]})})]})})]})}):"Nada encontrado..."]}),r&&t.jsx(bn,{ID:void 0,handleConfirm:m,handleCancel:()=>l(!1),message:"",ativoBtn:!1}),p&&t.jsx(mn,{handleConfirm:function(){throw new Error("Function not implemented.")},handleCancel:()=>d(!1),message:"",ativoBtn:!1})]})})},$={container:s.div`
        height: 100%;
        padding:32px 156px;
        @media screen  and (max-width: 760px){
            padding:32px 5px;

                
              }

    `,container_int:s.div`
              height:calc(100vh - 62px);
              display: flex;
              gap:20px;
              @media screen  and (max-width:1080px){
                flex-direction: column;
                
              }


    `,Erros:s.div`
         color: #ff4d4f;
          font-size: 12px;
          margin: 0px 10px;
         
        
        `,container_left:s.section`
    flex: 1;
    @media screen  and (max-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }

    padding: 20px;
    border-radius: 10px;
    `,conainter_right:s.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
        border-radius: 10px;


    flex: 2;
    `,container_usuarioArea:s.div`
    display: flex;
    gap: 10px;
    `,container_img:s.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:220px;
    height:160px;
    margin: 0;
    aspect-ratio: 4 / 3;
    padding:0.5px;
        color:#0f1724;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit:contain;
        border-radius: 5px;
    }
        
    `,container_titulo:s.div`
     margin:0 0 8px 0;
    font-size:18px;
    font-weight: 600;
        color:#1565c0;
     `,area_infor:s.div`
     width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
     `,meta:s.div`
     margin-top: 14px;
      color: #6b7280;
       font-size: 14;
     display: flex;
     flex-direction: column;
     `,span:s.span`
       padding: 5px 0;
     `,small:s.small`
      margin:0; color:#6b7280; font-size:13px; 
     `,area_forma:s.div`
     display: flex;
     flex-direction: column;
     height: 100vh;
     overflow-y: auto;
      gap: 10px;
      scrollbar-width: thin;
     `,input:s.input`
     width:100%;
    padding:10px 12px;
    border-radius:8px;
    border:1px solid rgba(15,23,36,0.08);
    background: #fff;
    font-size:14px;
     border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
     `,CamposInput:s.div`
     display: flex;
    width: 100%;
    flex-direction: column;
     margin: 5px 0;
    `,area_campo:s.div`
        display: flex;
        gap: 10px;
     `,area_btn:s.div`
        display: flex;
                width: 150px;

        gap: 10px;
     `,label:s.label`
      display:block;
    font-size:13px;
    color:#0f1724;
    margin-bottom:2px;
     `,nomeFilial:s.div`
      text-align:start; margin-top:2px; color:#888; font-size:13px;
     `},Pr=({handle:e})=>{const{register:n,handleSubmit:o,reset:i,formState:{errors:r}}=je(),l=async d=>{const h=await Ze.cadastro(d);h.msg&&(H(h.msg,"success"),e(),i())},p=()=>{i()};return t.jsx(Se,{children:t.jsxs("form",{onSubmit:o(l),children:[t.jsx("div",{style:{marginBottom:10},children:t.jsx($.container_titulo,{children:"Inclusão de Filial"})}),t.jsxs($.area_campo,{children:[t.jsxs($.CamposInput,{children:[t.jsx($.label,{children:"Nome da Filial"}),t.jsx($.input,{hasError:!!r.nome,type:"text",...n("nome",{required:"Nome da filial e obrigatorio"}),placeholder:"Nome da nova filial"})]}),t.jsxs($.CamposInput,{children:[t.jsx($.label,{children:"Numero da nova Filial"}),t.jsx($.input,{type:"text",...n("numeroFilial",{required:"Informe o número da filial",minLength:{value:2,message:"Mínimo de 2 dígitos"},maxLength:{value:5,message:"Máximo de 5 dígitos"},pattern:{value:/^[0-9]+$/,message:"Apenas números são permitidos"}}),placeholder:"Numero da Filial"})]})]}),t.jsxs($.Erros,{children:[r.nome&&t.jsx("p",{children:r.nome.message}),r.numeroFilial&&t.jsx("p",{children:r?.numeroFilial.message})]}),t.jsxs($.area_btn,{children:[t.jsx(de,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:o(l)}),t.jsx(de,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:p})]})]})})},Fr=()=>{const[e,n]=v.useState([]),o=async()=>{const i=await Ze.lista();i?.filial&&n(i?.filial)};return v.useEffect(()=>{o()},[]),t.jsx(t.Fragment,{children:t.jsx($.container,{children:t.jsxs($.container_int,{children:[t.jsx($.conainter_right,{children:t.jsx(Pr,{handle:o})}),t.jsxs(Se,{children:[t.jsx($.container_titulo,{children:"Filias Inclusas"}),e.length===0?t.jsx(t.Fragment,{children:"Sem filiais"}):t.jsx($.area_forma,{children:e.map(i=>t.jsxs($.CamposInput,{children:[t.jsxs($.label,{children:["Filial ",i?.numeroFilial]}),t.jsx($.nomeFilial,{children:i?.nome})]},i?.id))})]})]})})})},M={container:s.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 5px;
     max-width: 700px;
    margin: 0 auto;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:s.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 5px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,SelectItens:s.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,TextArea:s.textarea`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,Options:s.option``,Erros:s.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,BtnLogin:s.button`
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
    
    `,leftArea:s.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `},Rr=[{nome:"GERENTE OPERACIONAL"},{nome:"GERENTE DE LOGISTICA"},{nome:"GERENTE DE TRANSPORTE"},{nome:"GERENTE DE MANUTENÇÃO"},{nome:"PROGRAMADOR"},{nome:"FISCAL"},{nome:"DIRETOR"},{nome:"SUPERVISOR"},{nome:"COORDENADOR"},{nome:"PRESIDENTE"}];function Mr(){const e=pn(),{register:n,handleSubmit:o,formState:{errors:i},reset:r,watch:l}=je(),p=l("password"),d=async a=>{a.usuarioLogado=e;const{repeteSenha:g,...I}=a,S=await V.cadastroUsuaro(I);S&&(H(S.msg,"success"),r())},[h,f]=v.useState(),[c,x]=v.useState([]),u=async()=>{const a=await Ze.lista();a?.filial&&x(a?.filial)};v.useEffect(()=>{(async()=>{const g=await V.listaPerfil();g&&g.perfis&&f(g.perfis)})(),u()},[]);const m=v.useRef(null),b=(a,g)=>{a.key==="Enter"&&g?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(M.container,{children:[t.jsx(M.titulo,{children:"Cadastro de Usuario"}),t.jsxs(M.FormSub,{onSubmit:o(d),children:[t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Nome *"}),t.jsx(M.Campos,{hasError:!!i.nome,type:"text",autoComplete:"current-password",placeholder:"Nome completo",...n("nome",{required:"Nome E obrigatorio"}),onKeyDown:a=>b(a,m)}),t.jsx(M.Erros,{children:i.nome&&t.jsx("p",{children:i.nome.message})})]}),t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Email *"}),t.jsx(M.Campos,{hasError:!!i.email,placeholder:"Nome Completo",type:"text",autoComplete:"current-password",...n("email",{required:"Email e obrigatório",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email inválido. Ex: usuario@dominio.com"}}),onKeyDown:a=>b(a)}),t.jsx(M.Erros,{children:i.email&&t.jsx("p",{children:i.email.message})})]}),t.jsx(M.Select,{children:t.jsxs(M.leftArea,{children:[t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Ocupaçao"}),t.jsxs(M.SelectItens,{...n("ocupacaoOperacional",{required:"Selecione ocupação"}),children:[t.jsx(M.Options,{value:"",children:"Selecione"}),Rr.flatMap((a,g)=>t.jsx(M.Options,{value:a.nome,children:a.nome},g))]}),i.ocupacaoOperacional&&t.jsx(M.Erros,{children:t.jsx("p",{children:i.ocupacaoOperacional.message})})]}),t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Filial"}),t.jsxs(M.SelectItens,{...n("filial",{required:"Selecione a filial"}),children:[t.jsx(M.Options,{value:"",children:"Selecione filial"}),c.flatMap(a=>t.jsxs(M.Options,{value:a?.numeroFilial,children:[a?.numeroFilial," - ",a?.nome]},a.id)),"                                "]}),i.filial&&t.jsx(M.Erros,{children:t.jsx("p",{children:i.filial.message})})]})]})}),t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Perfil"}),t.jsxs(M.SelectItens,{...n("perfilId",{required:"Selecione o perfil"}),children:[t.jsx(M.Options,{value:"",children:"Selecione o perfil"}),h?.flatMap(a=>t.jsx(M.Options,{value:a.id,children:a.nome},a?.id))]}),i.perfilId&&t.jsx(M.Erros,{children:t.jsx("p",{children:i.perfilId.message})})]}),t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Senha *"}),t.jsx(M.Campos,{hasError:!!i.password,type:"text",autoComplete:"current-password",placeholder:"Senha",...n("password",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),onKeyDown:a=>b(a,m)}),t.jsx(M.Erros,{children:i.password&&t.jsx("p",{children:i.password.message})})]}),t.jsxs(M.CamposInput,{children:[t.jsx(M.label,{children:"Repete Senha *"}),t.jsx(M.Campos,{hasError:!!i.repeteSenha,type:"text",autoComplete:"current-password",placeholder:"Confirme senha",...n("repeteSenha",{required:"Senha E obrigatorio",validate:a=>a===p||"Senhas não conferem"}),onKeyDown:a=>b(a,m)}),t.jsx(M.Erros,{children:i.repeteSenha&&t.jsx("p",{children:i.repeteSenha.message})})]}),t.jsx(M.BtnLogin,{children:"Cadastrar Usuario"})]})]})})}const K={container:s.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
     max-width: 700px;
    margin: 0 auto;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,titulo:s.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:s.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:s.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:s.div`
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:s.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:s.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,SelectItens:s.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,TextArea:s.textarea`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,Options:s.option``,Erros:s.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,BtnLogin:s.button`
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
    
    `,leftArea:s.div`
    width: 100%;
    padding:5px 0;
      display: flex;
      gap: 10px;
    `},Ar=()=>{const{register:e,handleSubmit:n,formState:{errors:o},reset:i,watch:r}=je(),l=r("password"),p=async f=>{const{repeteSenha:c,...x}=f,u=await V.cadastroUsuaro(x);u&&(H(u.msg,"success"),i())},d=v.useRef(null),h=(f,c)=>{f.key==="Enter"&&c?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(K.container,{children:[t.jsx(K.titulo,{children:"Alterar senha de Usuario"}),t.jsxs(K.FormSub,{onSubmit:n(p),children:[t.jsxs(K.CamposInput,{children:[t.jsx(K.label,{children:"Senha *"}),t.jsx(K.Campos,{hasError:!!o.password,type:"text",autoComplete:"current-password",placeholder:"Senha",...e("password",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),onKeyDown:f=>h(f,d)}),t.jsx(K.Erros,{children:o.password&&t.jsx("p",{children:o.password.message})})]}),t.jsxs(K.CamposInput,{children:[t.jsx(K.label,{children:"Repete Senha *"}),t.jsx(K.Campos,{hasError:!!o.repeteSenha,type:"text",autoComplete:"current-password",placeholder:"Repita a senha",...e("repeteSenha",{required:"Senha E obrigatorio",validate:f=>f===l||"Senhas não conferem"}),onKeyDown:f=>h(f,d)}),t.jsx(K.Erros,{children:o.repeteSenha&&t.jsx("p",{children:o.repeteSenha.message})})]}),t.jsx(K.BtnLogin,{children:"Alterar senha"})]})]})})},se={container:s.div`
height: 100vh;
  display: flex;
  flex-direction: column;

    `,main:s.div`
     flex: 1;
  display: flex;
  background: #f4f6f9;      
;

    `,container_2:s.div`
  flex: 1;
  height:100vh;
  padding: 0 10px;
  position: relative;
       @media screen and (max-width: 560px){
       padding:0 3px ;
   } 



  padding-right: 8px; /* evita cortar scrollbar */
    overflow-y: auto;
    overflow-x: hidden;
  `,scroll:s.div`
    max-width: 1220px;
    width: 100%;
    margin:50px auto;
  `,titulo:s.h2`
    font-size: 16px;
    letter-spacing: 0.5px;
    margin: 20px 0 16px 10px;
    color:#444;
     @media screen and (min-width: 560px){
        margin: 20px 0 16px 10px;
   } 
  `,grid:s.div`
    width: 100%;
    display: grid;
    padding: 2px 0;
    grid-template-columns:repeat(2,1fr);
      gap: 20px;

  /* grid-template-columns:repeat(auto-fill,minmax(2,1fr)); */
       @media screen and (max-width: 560px){
       padding:0 ;
       gap: 15px;
   } 

  `,link:s.div`
            background: white;
            padding: 20px;
            text-decoration:none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: .2s;
            border-left: 4px solid #5B7FFF;
            &:hover{
                   transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(46, 45, 45, 0.15);
             background: #f7f5f5;
            }
                 @media screen and (max-width: 560px){
                  padding: 10px ;
   } 

  `,card_title:s.div`
            font-size: 16px;
            font-family: "inter",inherit, Helvetica, sans-serif;
            color: #443e3e;
            margin: 10px 0;
            margin-bottom: 8px;
  `,card_desc:s.div`
  font-size: 13px;
  color: #555;
         @media screen and (max-width: 560px){
        display: none;
   } 

  `,disabledCard:s.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:s.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
  `,semItens:s.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;
    `,iconSemItens:s(xn)`
      font-size: 60px;
      color: #999;
    `,footer:s.footer`
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #c09a9a;
  padding: 10px;
  `},Lr=()=>{const e=Ge(),n=Ye(),o=p=>{n(p,{replace:!1})},[i,r]=v.useState([]);v.useEffect(()=>{window.scroll(0,0),(async()=>{const d=await dn.modulo(e?.id);if(d){const h=d.acess;if(h.length===1){n(d?.acess[0].router,{replace:!1});return}r(h)}})()},[]);function l(p,d){switch(p){case"PORTARIA_ACCESS":return t.jsx(gn,{color:"#5B7FFF",size:d});case"INVENTARIO_ACCESS":return t.jsx(en,{sx:{color:"#5B7FFF",fontSize:d}});case"RECEBIMENTO_ACCESS":return t.jsx(Qt,{sx:{color:"#5B7FFF",fontSize:d,fontWeight:"bold"}});case"LOGISTICO_ACCESS":return t.jsx(Zt,{sx:{color:"#5B7FFF",fontSize:d,fontWeight:"bold"}})}}return t.jsxs(se.container_2,{children:[i.length===0&&t.jsxs(se.semItens,{children:[t.jsx(se.iconSemItens,{}),"Sem permissão encontrada"]}),i.length>0&&t.jsx(se.scroll,{children:t.jsx(se.grid,{children:i.map((p,d)=>t.jsxs(se.link,{onClick:()=>o(p.router),children:[l(p?.permission_name,24),t.jsx(se.card_title,{children:p?.titulo}),t.jsx(se.card_desc,{children:p?.subtitulo})]},d))})}),t.jsx(se.footer,{children:"© SuiteCore"})]})},R={container:s.div`
        height: 100%;
        padding:32px 156px;
        @media screen  and (max-width: 760px){
            padding:32px 5px;

                
              }

    `,container_int:s.div`
              height:calc(100vh - 62px);
              display: flex;
              gap:20px;
              @media screen  and (max-width:1080px){
                flex-direction: column;
                
              }


    `,Erros:s.div`
         color: #ff4d4f;
          font-size: 12px;
          margin: 0px 10px;
         
        
        `,container_left:s.section`
    flex: 1;
    @media screen  and (max-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }

    padding: 20px;
    border-radius: 10px;
    `,conainter_right:s.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
        border-radius: 10px;


    flex: 2;
    `,container_usuarioArea:s.div`
    display: flex;
    gap: 10px;
    `,container_img:s.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:220px;
    height:160px;
    margin: 0;
    aspect-ratio: 4 / 3;
    padding:0.5px;
        color:#0f1724;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit:contain;
        border-radius: 5px;
    }
        
    `,container_titulo:s.div`
     margin:0 0 8px 0;
    font-size:18px;
    font-weight: 600;
        color:#1565c0;
     `,area_infor:s.div`
     width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
     `,meta:s.div`
     margin-top: 14px;
      color: #6b7280;
       font-size: 14;
     display: flex;
     flex-direction: column;
     `,span:s.span`
       padding: 5px 0;
     `,small:s.small`
      margin:0; color:#6b7280; font-size:13px; 
     `,area_forma:s.div`
     display: flex;
     flex-direction: column;
      gap: 10px;
     `,input:s.input`
     width:100%;
    padding:10px 12px;
    border-radius:8px;
    border:1px solid rgba(15,23,36,0.08);
    background: #fff;
    font-size:14px;
     border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:e})=>e?"#ff4d4f":"#007BFF"};
    }
     `,CamposInput:s.div`
     display: flex;
    width: 100%;
    flex-direction: column;
     margin: 5px 0;
    `,area_campo:s.div`
        display: flex;
        gap: 10px;
     `,area_btn:s.div`
        display: flex;
                width: 150px;

        gap: 10px;
     `,label:s.label`
      display:block;
    font-size:13px;
    color:#0f1724;
    margin-bottom:6px;
     `,foother:s.div`
        text-align:center; margin-top:14px; color:var(--muted); font-size:13px;
     `},Or=()=>{const{register:e,handleSubmit:n,reset:o,watch:i,formState:{errors:r}}=je(),l=i("novaSenha"),p=async h=>{const f=localStorage.getItem("order");if(f!=null){h.usuarioId=f;const c=await jt.alteraSenha(h);c.msg&&(H(c.msg,"success"),o())}},d=()=>{o()};return t.jsx(Se,{children:t.jsxs("form",{onSubmit:n(p),children:[t.jsxs("div",{style:{marginBottom:10},children:[t.jsx(R.container_titulo,{children:"Segurança & Senha"}),t.jsx(R.small,{children:"Mude sua senha periodicamente para manter sua conta segura."})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Senha atual"}),t.jsx(R.input,{type:"password",...e("senhaAntiga"),placeholder:"Senha antiga"})]}),t.jsxs(R.area_campo,{children:[t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Nova senha"}),t.jsx(R.input,{hasError:!!r.novaSenha,type:"password",...e("novaSenha",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),placeholder:"Senha nova"})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Confirmar nova senha"}),t.jsx(R.input,{type:"password",...e("reperteSenha",{validate:h=>h===l||"Senhas não conferem",required:"Confirme Senha E obrigatorio"}),placeholder:"Repete senha"})]})]}),t.jsxs(R.Erros,{children:[r.reperteSenha&&t.jsx("p",{children:r.reperteSenha.message}),r.novaSenha&&t.jsx("p",{children:r?.novaSenha.message})]}),t.jsx(R.small,{children:"A senha precisa ter no mínimo 8 caracteres, com letras e números."}),t.jsxs(R.area_btn,{children:[t.jsx(de,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:n(p)}),t.jsx(de,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:d})]})]})})},Be={container:s.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 620px) {
      padding: 0 20px;
    }
  `,container_int:s.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,header:s.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,content:s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,buttons:s.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
  `},Dr=({handleConfirm:e,handleFileSelect:n,resetSignal:o,handleCancel:i,message:r,ativoBtn:l})=>t.jsx(Be.container,{children:t.jsx(Be.container_int,{children:t.jsxs(Be.content,{children:[t.jsx(ae,{variant:"h6",sx:{mb:2},children:t.jsx(ae,{variant:"h6",sx:{mb:2},children:r})}),t.jsx(lo,{onFileSelect:n,resetSignal:o}),t.jsxs(Be.buttons,{children:[l&&t.jsx(ke,{variant:"contained",color:"error",onClick:e,sx:{borderRadius:2},children:"Atualizar"}),t.jsx(ke,{variant:"outlined",onClick:i,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})})}),_r="portaria",zr="2.0.0",Yt={name:_r,version:zr},$r=()=>{const e=pn(),[n,o]=v.useState(0),[i,r]=v.useState(null),[l,p]=v.useState(),[d,h]=v.useState(!1),f=Ye(),[c,x]=v.useState(!1),u=async()=>{const I=localStorage.getItem("order");if(I!=null){const S=await V.buscaUsuario(I);S&&p(S)}};v.useEffect(()=>{u()},[]);const m=()=>{h(!0)},b=async()=>{i||H("Por favor, selecione uma imagem para continuar.","error"),(await V.selecionarImagem(e,i)).msg&&(o(S=>S+1),u(),h(!1))},a=()=>{alert("EM DESENVOLVIMENTO")},g=()=>{x(!0),setTimeout(()=>{f("/",{replace:!1}),x(!1)},1e3)};return t.jsx(t.Fragment,{children:l?t.jsx(R.container,{children:t.jsxs(R.container_int,{children:[t.jsxs(Se,{children:[t.jsx(R.container_titulo,{children:"Perfil Usuario"}),t.jsxs(R.container_usuarioArea,{children:[t.jsx(R.container_img,{children:l?.avatar?t.jsx("img",{src:l?.avatar}):t.jsx(Qn,{style:{fontSize:100,color:"#1976d2"}})}),t.jsxs(R.area_infor,{children:[t.jsx(de,{titulo:"Adicionar imagem",isvalid:!1,nome_btn:"undefined",click:m}),t.jsx(de,{titulo:"Remover Imagem",isvalid:!0,nome_btn:"d",click:a}),t.jsxs(R.meta,{children:[t.jsx(R.span,{children:t.jsx("strong",{children:l?.nome})}),t.jsx(R.small,{children:l?.ocupacaoOperacional}),t.jsxs(R.small,{children:["Filial: ",l?.filial]})]})]}),d&&t.jsx(Dr,{handleConfirm:b,handleCancel:()=>h(!1),message:"",ativoBtn:d,handleFileSelect:r,resetSignal:n})]}),t.jsxs(R.area_forma,{children:[t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Nome completo"}),t.jsx(R.input,{disabled:!0,value:l?.nome,placeholder:"digite um campo"})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"E-mail"}),t.jsx(R.input,{disabled:!0,value:l?.email,placeholder:"digite um campo"})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Ocupação Profissional"}),t.jsx(R.input,{disabled:!0,value:l?.ocupacaoOperacional,placeholder:"digite um campo"})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Filial"}),t.jsx(R.input,{disabled:!0,value:l?.filial,placeholder:"digite um campo"})]}),t.jsx(R.area_btn,{})]})]}),t.jsxs(R.conainter_right,{children:[t.jsx(Or,{}),t.jsx(Se,{children:t.jsx(de,{isvalid:!1,nome_btn:"undefined",click:g,children:t.jsx(eo,{})})}),t.jsxs(R.foother,{children:["@Desenvolvido por Elivandro  ",t.jsxs("div",{style:{color:"#464545",fontSize:"10px"},children:["Versão ",Yt?.version," - ",Yt?.name]})]}),c&&t.jsx(Ke,{})]})]})}):t.jsx(Ke,{})})},Wr=()=>t.jsxs(ro,{children:[t.jsxs(U,{path:"/",element:t.jsx(vo,{}),children:[t.jsx(U,{index:!0,element:t.jsx(Lr,{})}),t.jsx(U,{path:"reset",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(jo,{},Date.now())})}),t.jsx(U,{path:"profile",element:t.jsx($r,{},Date.now())}),t.jsx(U,{path:"cadastro/usuario",element:t.jsx(J,{allowedPermissions:["CADASTRO_USUARIO"],children:t.jsx(Mr,{},Date.now())})}),t.jsx(U,{path:"senha/usuario",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Ar,{},Date.now())})}),t.jsx(U,{path:"perfil",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Tr,{},Date.now())})}),t.jsx(U,{path:"filiais",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Fr,{},Date.now())})}),t.jsx(U,{path:"access",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(kr,{},Date.now())})}),t.jsx(U,{path:"usuarios/lista",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(ko,{},Date.now())})}),t.jsx(U,{path:"outros",element:t.jsx(J,{allowedPermissions:["ALTERAR_CONFIGURACOES"],children:t.jsx(Eo,{},Date.now())})}),t.jsx(U,{path:"logs",element:t.jsx(J,{allowedPermissions:["GERENCIAR_REGISTROS"],children:t.jsx(yo,{},Date.now())})}),t.jsx(U,{path:"permissoes",element:t.jsx(J,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(go,{},Date.now())})})]}),t.jsx(U,{path:"/config",element:t.jsx(J,{allowedPermissions:["LISTA_GERAL"],children:t.jsx(So,{},Date.now())})}),t.jsx(U,{path:"*",element:t.jsx(po,{})})]});export{Wr as default};
