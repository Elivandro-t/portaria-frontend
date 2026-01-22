import{r as v,j as t,E as Yt,G as Zt,H as Qt,k as gt,b as Ce,n as en,I as re,g as tn,J as wt,D as nn,u as Nn,h as _t,L as Bn,t as Un,K as Vn,N as on,O as rn,P as qn,Q as Gn,_ as w,U as Te,X as Kn,Y as Hn,Z as W,$ as Q,a0 as sn,a1 as X,a2 as an,a3 as zt,a4 as jt,a5 as ye,a6 as J,a7 as Wn,C as Xn,a8 as Jn,d as Yn,a9 as Zn,aa as Qn}from"./mui-ChBlBfgN.js";import{c as ln,d as a,i as Se,o as G,n as Z,e as eo,b as Ve,u as Xe,p as bt,q as cn,f as to,O as dn,h as no,L as qe,a as yt,m as oo,s as un,R as io,j as U}from"./index-CS6IxeNG.js";import{M as ro,T as De,P as pn,a as fn,b as so,B as ce,D as ao,c as K}from"./menuConfig-Fp3u0O0b.js";import{M as mn,G as lo,f as Je}from"./filiasAPi-C54P03xb.js";import{H as co}from"./header.component-D0J9S6Kd.js";import{r as xn}from"./react-OvXVS5lI.js";import uo from"./NotFund-aO3XNhde.js";const po=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],fo=ln("chevron-down",po);const mo=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],xo=ln("log-out",mo),se={container:a.div`
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
  

    
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.form`
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
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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
  `},ho=()=>{const{register:e,handleSubmit:n,formState:{errors:o},reset:i}=Se(),r=async d=>{const g=await G.cadastroUsuaro(d);g&&(Z(g.msg,"success"),i())},l=v.useRef(null),p=(d,g)=>{d.key==="Enter"&&g?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(se.container,{children:[t.jsx(se.titulo,{children:"Buscar permissões de Usuario "}),t.jsxs(t.Fragment,{children:["(",t.jsx(t.Fragment,{children:"Em desenvolvimento"}),")"]}),t.jsxs(se.FormSub,{onSubmit:n(r),children:[t.jsxs(se.CamposInput,{children:[t.jsx(se.label,{children:"Email usuario *"}),t.jsx(se.Campos,{hasError:!!o.email,type:"text",autoComplete:"current-password",placeholder:"Senha",...e("email",{required:"Email E obrigatorio"}),onKeyDown:d=>p(d,l)}),t.jsx(se.Erros,{children:o.email&&t.jsx("p",{children:o.email.message})})]}),t.jsx(se.TableContainer,{children:t.jsxs(se.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Nome"}),t.jsx("th",{children:"Status"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"1"}),t.jsx("td",{children:"João Silva"}),t.jsx("td",{children:"Ativo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"2"}),t.jsx("td",{children:"Maria Oliveira"}),t.jsx("td",{children:"Inativo"})]})]})]})})]})]})})},at={container:a.div`
  display: flex;
  height: 100%;
  flex-direction: column;

    `,main:a.div`
    flex: 1;
  display: flex;
  background: #f4f6f9;      
;

    `,container_2:a.div`
  flex: 1;
  padding: 0 10px;
  position: relative;


  padding-right: 8px; /* evita cortar scrollbar */
    overflow-x: hidden;
  `,scroll:a.div`
    width: 100%;
    height: calc(100vh - 80px);
    overflow:auto;
    padding: 20px 5px;
    scrollbar-width: thin;
  `,titulo:a.h2`
    font-size: 16px;
    letter-spacing: 0.5px;
    margin: 20px 0 16px 10px;
    color:#444;
     @media screen and (min-width: 560px){
        margin: 20px 0 16px 10px;

   } 
  `,grid:a.div`
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
  `,link:a.div`
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
  `,card_title:a.div`
            font-size: 22px;
            font-family: "inter",inherit, Helvetica, sans-serif;
            color: #504a4aff;
            margin: 10px 0;
            margin-bottom: 8px;
  `,card_desc:a.div`
  font-size: 14px;
            color: #555;`,disabledCard:a.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:a.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
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
    `,iconSemItens:a(mn)`
      font-size: 60px;
      color: #999;
    `,footer:a.footer`
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #c09a9a;
  padding: 10px;
  `},q={container:a.div`
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
    `,container_int:a.div`
        height: 100vh;
        background-color: #FFF;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 560px) {
            width: 300px;
        }
    `,areaMenu:a.div`
        padding: 10px 0;
    `,menu_nav:a.nav`
        width: 100%;
    `,menu_ul:a.ul`
        list-style: none;
        padding: 0;
        margin: 0;

    `,menu_li:a.li`
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
    `,menu_liApi:a.li`
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
    `,LabelSection:a.div`
        padding: 20px 20px 10px 20px;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 700;
        color: #999;
        letter-spacing: 1px;
        background-color: #fcfcfc;
    `,submenu:a.ul`
        list-style: none;
        padding: 0;
        margin-top: 10px;
        max-height: ${e=>e.isOpen?"500px":"0"};
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        opacity: ${e=>e.isOpen?"1":"0"};
    `,submenu_item:a.li`
        padding: 10px 20px;
        font-size: 14px;
        color: #666;
        border-left: 2px solid transparent;

        &:hover {
            color: #5B7FFF;
            border-left: 2px solid #5B7FFF;
            background-color: #eef4ff;
        }
    `};function hn(e){return lo({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}const go=[{label:"Configurações",permission:"ALTERAR_CONFIGURACOES",items:[{label:"Perfis",to:"/required/perfil",permission:"ALTERAR_CONFIGURACOES"},{label:"Permissões",to:"/required/permissoes",permission:"ALTERAR_CONFIGURACOES"},{label:"Logs",to:"/required/logs",permission:"LISTA_GERAL"},{label:"Outros",to:"/required/outros",permission:"ALTERAR_CONFIGURACOES"}]},{label:"Usuario",permission:"GERENCIAR_USUARIOS",items:[{label:"Cadastro",to:"/required/cadastro/usuario",permission:"CADASTRO_USUARIO"},{label:"Usuarios Cadastrados",to:"/required/usuarios/lista",permission:"GERENCIAR_USUARIOS"},{label:"Resetar Senha",to:"/required/reset",permission:"EDITAR_USUARIO"}]}],bo=({handleBtn:e})=>{const n=()=>{window.location.href="/verify",to.logout()},[o,i]=v.useState([]),[r,l]=v.useState(null),p=v.useContext(eo),d=b=>{l(r===b?null:b)},g=Ve(),f=Xe(),[c,h]=v.useState([]);v.useEffect(()=>{window.scroll(0,0),(async()=>{const s=await cn.modulo(g?.id);s&&h(s?.acess)})()},[]),v.useEffect(()=>{c?.length===1&&f(c[0].router)},[c]),v.useEffect(()=>{const b=Ve();i(b?.permissoes||[])},[p?.user]);const u=b=>b?o.includes(b):!0;function m(b,s){switch(b){case"PORTARIA_ACCESS":return t.jsx(hn,{color:"#5B7FFF",size:s});case"INVENTARIO_ACCESS":return t.jsx(Qt,{sx:{color:"#5B7FFF",fontSize:s}});case"RECEBIMENTO_ACCESS":return t.jsx(Zt,{sx:{color:"#5B7FFF",fontSize:s,fontWeight:"bold"}});case"LOGISTICO_ACCESS":return t.jsx(Yt,{sx:{color:"#5B7FFF",fontSize:s,fontWeight:"bold"}})}}return t.jsx(q.container,{onClick:e,children:t.jsx(q.container_int,{onClick:b=>b.stopPropagation(),children:t.jsx(q.areaMenu,{children:t.jsxs(q.menu_nav,{children:[g?.permissoes&&g?.permissoes.includes("GERENCIAR_USUARIOS")&&t.jsx(q.LabelSection,{children:"Menu Principal"}),t.jsx(q.menu_ul,{children:go.filter(b=>u(b.permission)).map((b,s)=>t.jsxs(q.menu_li,{onClick:()=>d(s),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.label,t.jsx(fo,{size:14,style:{transform:r===s?"rotate(180deg)":"none",transition:"0.3s"}})]}),t.jsx(q.submenu,{isOpen:r===s,onClick:x=>x.stopPropagation(),children:b.items.filter(x=>u(x.permission)).map((x,I)=>t.jsx(bt,{to:x?.to,onClick:e,style:{textDecoration:"none"},children:t.jsx(q.submenu_item,{children:x.label})},I))})]},s))}),t.jsx(q.LabelSection,{children:"Permissões & Ações"}),t.jsxs(q.menu_ul,{children:[c.flatMap((b,s)=>t.jsx(q.menu_liApi,{children:t.jsxs(bt,{to:b.router,children:[m(b?.permission_name,16),b.titulo]})},s)),t.jsxs(q.menu_liApi,{onClick:n,children:[t.jsx(xo,{color:"#5B7FFF",size:16}),"Sair"]})]})]})})})})};function Io(){v.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const[e,n]=v.useState(!1),o=()=>{n(!e)};return t.jsxs(at.container,{children:[t.jsx(co,{ativaBtnDrower:!0,handleBtn:o}),t.jsxs(at.main,{children:[e&&t.jsx(bo,{handleBtn:o}),t.jsx(at.scroll,{children:t.jsx(dn,{})})]})]})}const lt={container:a.main`
    position: relative;
   height: 100vh;
    `,Container_int:a.main`
     background-color:var(--cor-auth);

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
  `},vo=()=>{const e=no();return v.useEffect(()=>{window.scrollTo(0,0)},[e]),t.jsxs(lt.container,{children:[t.jsx(ro,{}),t.jsx(lt.container_int,{children:e?t.jsx(dn,{}):t.jsxs(lt.placeholder,{children:[t.jsx("h2",{children:"Bem-vindo às Configurações ⚙️"}),t.jsx("p",{children:"Selecione uma opção no menu para começar."})]})})]})},fe={container:a.div`
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
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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
  `},So=({handleCancel:e,message:n})=>t.jsx(De.container,{children:t.jsx(De.container_int,{children:t.jsxs(De.content,{children:[t.jsx(gt,{variant:"h6",sx:{mb:2},children:n}),t.jsx(De.buttons,{children:t.jsx(Ce,{variant:"outlined",onClick:e,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})})]})})}),wo=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(""),[r,l]=v.useState(!1),p=async()=>{const d=await G.reset(e);d&&(Z("Senha Resetada com sucesso!","success"),i(d.psw),l(!0))};return t.jsx(t.Fragment,{children:t.jsxs(fe.container,{children:[t.jsx(fe.titulo,{children:"Reset senha de Usuario "}),t.jsxs(fe.FormSub,{children:[t.jsxs(fe.CamposInput,{children:[t.jsx(fe.label,{children:"Email usuario *"}),t.jsx(fe.Campos,{autoComplete:"current-password",placeholder:"Senha",onChange:d=>n(d.target.value),onKeyDown:d=>{d.key==="Enter"&&p()}})]}),t.jsx(fe.TableContainer,{}),r&&t.jsx(So,{handleCancel:()=>l(!1),message:o,ativoBtn:!1})]})]})})},de={container:a.div`
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
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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
  `,trBTN:a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:a.div`
    padding: 10px;
    
  `},jo=()=>{const[e,n]=v.useState([]),[o,i]=v.useState(!1),[r,l]=v.useState(""),[p,d]=v.useState(!1),[g,f]=v.useState(!1),[c,h]=v.useState(0),u=async x=>{const I=await so.buscaLogs(r,x);d(!0),I.content&&setTimeout(()=>{d(!1),n(I.content),h(I.totalPages)},1e3)},m=(x,I)=>{const S=I-1;u(S)};v.useEffect(()=>{r.trim()===""&&u()},[r]);const b=x=>{i(x),f(!0)},s=()=>{i(o)};return t.jsx(t.Fragment,{children:t.jsxs(de.container,{children:[t.jsx(de.titulo,{children:"Logs do Sistema"}),t.jsxs(de.FormSub,{children:[t.jsxs(de.CamposInput,{children:[t.jsx(en,{variant:"outlined",size:"small",placeholder:"Buscar...",value:r,onChange:x=>l(x.target.value)}),t.jsx(re,{onClick:u,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:t.jsx(tn,{})}),t.jsx(pn,{totalPage:c,handleNextPage:m})]}),t.jsx(de.TableContainer,{children:t.jsxs(de.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Id"}),t.jsx("th",{children:"ID_USUARIO"}),t.jsx("th",{children:"USUARIO"}),t.jsx("th",{children:"DESCRIÇÃO"}),t.jsx("th",{children:"AÇÂO"}),t.jsx("th",{children:"DATA"}),t.jsx("th",{children:"FILIAL"}),t.jsx("th",{})]})}),t.jsxs("tbody",{children:[e.length==0&&t.jsx(de.erro,{children:"Sem dados"}),e.flatMap((x,I)=>t.jsxs("tr",{children:[t.jsx("td",{children:x.id}),t.jsx("td",{children:x.usuarioId}),t.jsx("td",{children:x.usuario}),t.jsx("td",{children:x.descricao}),t.jsx("td",{children:x.acao}),t.jsx("td",{children:new Date(x?.dataHora).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),t.jsx("td",{children:x.filial}),t.jsx("td",{children:t.jsxs(de.trBTN,{children:[t.jsx(re,{"aria-label":"editar",onClick:()=>s(),sx:{color:"black","&:hover":{backgroundColor:"#e0e0e0"}},children:t.jsx(wt,{})}),t.jsx(re,{"aria-label":"deletar",onClick:()=>b(x.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(nn,{})})]})})]},I))]})]})})]}),g&&t.jsx(fn,{handleCancel:()=>f(!1),handleConfirm:()=>{},message:"Deseja realmente atualizar o item com ID",ativoBtn:!1}),p&&t.jsx(qe,{})]})})},te={container:a.div`
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
  

    
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 10px;
    color: var(--cor-titulo);
  `,grid:a.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
  gap: 20px;
  `,card:a.div`
  
  `,link:a(bt)`
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
  `,card_title:a.div`
    font-size: 18px;
            font-weight: bold;
            color: #6a0dad;
            margin-bottom: 8px;
  `,card_desc:a.div`
  font-size: 14px;
            color: #555;`,disabledCard:a.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:a.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
  `},yo=[{label:"Usuários",desc:"Cadastrar, editar, remover e gerenciar usuários.",to:"/required/usuarios",icon:"PersonIcon",ativo:!1},{label:"Adicionar Modulo",desc:"Configurar modulos de acesso e mudar filial do usuario.",to:"/required/access",icon:"BadgeIcon",ativo:!0},{label:"Permissões",desc:"Definir o que cada perfil pode acessar.",to:"/required/permissoes",icon:"KeyIcon",ativo:!1},{label:"Filiais",desc:"Cadastrar e gerenciar filiais.",to:"/required/filiais",icon:"StoreIcon",ativo:!0},{label:"Logs do Sistema",desc:"Visualizar acessos e operações registradas.",to:"/required/logs",icon:"ListAltIcon",ativo:!0},{label:"Resetar Senha",desc:"Gerenciar redefinição de senhas.",to:"/required/reset",icon:"RestartAltIcon",ativo:!0},{label:"Configurações Gerais",desc:"Alterar regras do sistema e preferências.",to:"/required/geral",icon:"SettingsIcon",ativo:!1},{label:"Auditoria",desc:"Acompanhar ações dos usuários.",to:"/required/auditoria",icon:"VisibilityIcon",ativo:!1}],Co=()=>t.jsx(t.Fragment,{children:t.jsxs(te.container,{children:[t.jsx(te.titulo,{children:"Configurações do Sistema"}),t.jsx(te.grid,{children:yo.map((e,n)=>e.ativo?t.jsxs(te.link,{to:e.to,children:[t.jsx(te.card_title,{children:e.label}),t.jsx(te.card_desc,{children:e.desc})]},n):t.jsxs(te.disabledCard,{children:[t.jsx(te.small,{children:"Em desenvolvimento 'INATIVO'"}),t.jsx(te.card_title,{children:e.label}),t.jsx(te.card_desc,{children:e.desc})]},n))})]})}),ne={container:a.div`
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
    margin-left: 10px;
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
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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
  `,trBTN:a.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:a.div`
    padding: 10px;
    
  `,ativo:a.div`
  width: 15px;
  height: 15px;
    background-color: ${({ativo:e})=>e?"#22c55e":"#ef4444"};
    border-radius: 15px;
  `,device:a.div`
  font-size: 14px;
  color:#22c55e;
  border-radius: 15px;
  `},me={container:a.div`
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
  `,container_int:a.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,header:a.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,content:a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,buttons:a.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
  `,SelectItens:a.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid #ccc;
    
    `,Options:a.option``},gn=({handleConfirm:e,handleCancel:n})=>{const{register:o,handleSubmit:i}=Se(),[r,l]=v.useState();return v.useEffect(()=>{(async()=>{const d=await G.listaPerfil();d&&d.perfis&&l(d.perfis)})()},[]),t.jsx(me.container,{children:t.jsx(me.container_int,{children:t.jsxs(me.content,{children:[t.jsxs(me.SelectItens,{...o("idPerfil",{required:"Selecione o perfil"}),children:[t.jsx(me.Options,{value:"",children:"Selecione o perfil"}),r?.flatMap(p=>t.jsx(me.Options,{value:p.id,children:p.nome},p?.id))]}),t.jsxs(me.buttons,{children:[t.jsx(Ce,{variant:"contained",color:"error",onClick:i(e),sx:{borderRadius:2},children:"Atualizar"}),t.jsx(Ce,{variant:"outlined",onClick:n,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})})})},Eo=()=>{const[e,n]=v.useState([]),[o,i]=v.useState(""),[r,l]=v.useState(""),[p,d]=v.useState(0),g=Xe(),[f,c]=v.useState(!1),u=Ve()?.permissoes,m=async j=>{c(!0);const T=await G.listAusuario(r.trim(),j);T&&setTimeout(()=>{c(!1),n(T.content),d(T?.totalPages)},1e3)},b=(j,T)=>{const L=T-1;m(L)};v.useEffect(()=>{r.trim()===""&&m()},[r]);const s=j=>{i(j.id),k(!0)},x=()=>{g("/config/cadastro/usuario")},I=j=>{D(null,!0,j),console.log(" ativo true susuario "+j)},S=j=>{D(null,!1,j)},[y,k]=v.useState(!1),D=async(j,T,L)=>{const B=o||L,ee=await G.AdicionarPefil(B,j?.idPerfil,T);ee&&(k(!1),Z(ee.msg,"success"),m())},_=j=>{const T=new Date(j),L=String(T.getDate()).padStart(2,"0"),B=String(T.getMonth()+1).padStart(2,"0"),ee=T.getFullYear(),ge=String(T.getHours()).padStart(2,"0"),we=String(T.getMinutes()).padStart(2,"0");return`${L}/${B}/${ee} às ${ge}:${we}`};return t.jsx(t.Fragment,{children:t.jsxs(ne.container,{children:[t.jsx(ne.titulo,{children:"Lista de Usuarios"}),t.jsxs(ne.FormSub,{children:[t.jsxs(ne.CamposInput,{children:[t.jsx(en,{variant:"outlined",size:"small",placeholder:"Buscar...",value:r,onChange:j=>l(j.target.value)}),t.jsx(re,{onClick:m,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:t.jsx(tn,{})}),t.jsx(re,{onClick:x,sx:{backgroundColor:"#4caf50",color:"#fff","&:hover":{backgroundColor:"#43a047"}},children:t.jsx(Nn,{})}),t.jsx(pn,{totalPage:p,handleNextPage:b})]}),t.jsx(ne.TableContainer,{children:t.jsxs(ne.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Avatar"}),t.jsx("th",{children:"Nome"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Função"}),t.jsx("th",{children:"Filial"}),t.jsx("th",{children:"Pefil"}),t.jsx("th",{children:"Device"}),t.jsx("th",{children:"Ultima Sessão"}),t.jsx("th",{children:"Status"}),u?.includes("ADICIONAR_ACESSo")&&t.jsx("th",{})]})}),t.jsxs("tbody",{children:[e.length==0&&t.jsx(ne.erro,{children:"Sem dados"}),e.flatMap((j,T)=>t.jsxs("tr",{children:[t.jsx("td",{children:j?.avatar?t.jsx(_t,{sx:{width:40,height:40,objectFit:"contain"},alt:j?.nome,src:j?.avatar}):t.jsx(_t,{sx:{width:40,height:40,objectFit:"contain"},alt:j.nome,src:"/static/images/avatar/2.jpg"})}),t.jsx("td",{children:j.nome}),t.jsx("td",{children:j.email}),t.jsx("td",{children:j.ocupacaoOperacional}),t.jsx("td",{children:j.filial}),t.jsx("td",{children:j?.perfil?.nome}),t.jsx("td",{children:t.jsxs(ne.device,{children:[" ",j?.sessionDevice?j?.sessionDevice:"0"]})}),t.jsx("td",{children:j?.sessionLastLogin?_(j?.sessionLastLogin):"Sem acesso"}),t.jsx("td",{children:t.jsx(ne.ativo,{ativo:j?.ativo})}),u?.includes("ADICIONAR_ACESSO")&&t.jsx("td",{children:t.jsxs(ne.trBTN,{children:[t.jsx(re,{"aria-label":"editar",onClick:()=>s(j),sx:{color:"black","&:hover":{backgroundColor:"#e0e0e0"}},children:t.jsx(wt,{})}),j.ativo?t.jsx(re,{"aria-label":"LockIcon",onClick:()=>S(j.id),sx:{color:"green","&:hover":{backgroundColor:"#e0e0e0"}},children:t.jsx(Bn,{})}):t.jsx(re,{"aria-label":"LockOpenIcon",onClick:()=>I(j.id),sx:{color:"red","&:hover":{backgroundColor:"#e0e0e0"}},children:t.jsx(Un,{})})]})})]},T))]})]})})]}),y&&t.jsx(gn,{ID:void 0,handleConfirm:j=>D(j,null,null),handleCancel:()=>k(!1),message:"",ativoBtn:!1}),f&&t.jsx(qe,{})]})})},ie={container:a.div`
        height: 100%;
        padding: 32px 156px;
        @media screen and (max-width: 760px) {
            padding: 32px 5px;
        }
    `,container_int:a.div`
        display: flex;
        gap: 20px;
        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
    `,container_left:a.section`
        flex: 1;
        padding: 20px;
        border-radius: 10px;
        @media screen and (max-width: 760px) {
            box-shadow: 0 8px 24px rgba(21, 101, 192, 0.08);
        }
    `,conainter_right:a.section`
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 25px;
        border-radius: 10px;
    `,container_usuarioArea:a.div`
        display: flex;
        gap: 10px;
    `,container_img:a.div`
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
    `,container_titulo:a.div`
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 600;
        color: #1565c0; /* Blue color for titles */
    `,area_infor:a.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
    `,meta:a.div`
        margin-top: 14px;
        color: #6b7280;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    `,span:a.span`
        padding: 5px 0;
    `,small:a.small`
        margin: 0; 
        color: #6b7280; 
        font-size: 13px;
    `,nomeFilial:a.div`
        text-align: start; 
        margin-top: 2px; 
        color: #888; 
        font-size: 13px;
    `,form:a.form`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `,area_forma:a.div`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 10px;
        scrollbar-width: thin;
    `,CamposInput:a.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 5px 0;
    `,input:a.input`
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
    `,label:a.label`
        display: block;
        font-size: 13px;
        color: #0f1724;
        margin-bottom: 2px;
    `,Erros:a.div`
        color: #ff4d4f; /* Red for errors */
        font-size: 12px;
        margin: 0px 10px;
    `,area_campo:a.div`
        display: flex;
        gap: 10px;
    `,area_btn:a.div`
        display: flex;
        width: 150px;
        gap: 10px;
    `},ko={container_left:a.section`
   display: flex;
    /* background-color: #F2F2F2; */
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `},Ie=({children:e})=>t.jsx(ko.container_left,{children:e});function bn(e){return Vn}function To(e){return on("MuiSimpleTreeView",e)}rn("MuiSimpleTreeView",["root","item","itemContent","itemGroupTransition","itemIconContainer","itemLabel","itemCheckbox"]);const $t={};function Ee(e,n){const o=v.useRef($t);return o.current===$t&&(o.current=e(n)),o}var Ge=Symbol("NOT_FOUND");function Po(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function Fo(e,n=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(n)}function Ro(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(o=>typeof o=="function")){const o=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${n}[${o}]`)}}var Nt=e=>Array.isArray(e)?e:[e];function Mo(e){const n=Array.isArray(e[0])?e[0]:e;return Ro(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function Ao(e,n){const o=[],{length:i}=e;for(let r=0;r<i;r++)o.push(e[r].apply(null,n));return o}function Lo(e){let n;return{get(o){return n&&e(n.key,o)?n.value:Ge},put(o,i){n={key:o,value:i}},getEntries(){return n?[n]:[]},clear(){n=void 0}}}function Oo(e,n){let o=[];function i(d){const g=o.findIndex(f=>n(d,f.key));if(g>-1){const f=o[g];return g>0&&(o.splice(g,1),o.unshift(f)),f.value}return Ge}function r(d,g){i(d)===Ge&&(o.unshift({key:d,value:g}),o.length>e&&o.pop())}function l(){return o}function p(){o=[]}return{get:i,put:r,getEntries:l,clear:p}}var Do=(e,n)=>e===n;function _o(e){return function(o,i){if(o===null||i===null||o.length!==i.length)return!1;const{length:r}=o;for(let l=0;l<r;l++)if(!e(o[l],i[l]))return!1;return!0}}function zo(e,n){const o=typeof n=="object"?n:{equalityCheck:n},{equalityCheck:i=Do,maxSize:r=1,resultEqualityCheck:l}=o,p=_o(i);let d=0;const g=r<=1?Lo(p):Oo(r,p);function f(){let c=g.get(arguments);if(c===Ge){if(c=e.apply(null,arguments),d++,l){const u=g.getEntries().find(m=>l(m.value,c));u&&(c=u.value,d!==0&&d--)}g.put(arguments,c)}return c}return f.clearCache=()=>{g.clear(),f.resetResultsCount()},f.resultsCount=()=>d,f.resetResultsCount=()=>{d=0},f}var $o=class{constructor(e){this.value=e}deref(){return this.value}},No=typeof WeakRef<"u"?WeakRef:$o,Bo=0,Bt=1;function _e(){return{s:Bo,v:void 0,o:null,p:null}}function In(e,n={}){let o=_e();const{resultEqualityCheck:i}=n;let r,l=0;function p(){let d=o;const{length:g}=arguments;for(let h=0,u=g;h<u;h++){const m=arguments[h];if(typeof m=="function"||typeof m=="object"&&m!==null){let b=d.o;b===null&&(d.o=b=new WeakMap);const s=b.get(m);s===void 0?(d=_e(),b.set(m,d)):d=s}else{let b=d.p;b===null&&(d.p=b=new Map);const s=b.get(m);s===void 0?(d=_e(),b.set(m,d)):d=s}}const f=d;let c;if(d.s===Bt)c=d.v;else if(c=e.apply(null,arguments),l++,i){const h=r?.deref?.()??r;h!=null&&i(h,c)&&(c=h,l!==0&&l--),r=typeof c=="object"&&c!==null||typeof c=="function"?new No(c):c}return f.s=Bt,f.v=c,c}return p.clearCache=()=>{o=_e(),p.resetResultsCount()},p.resultsCount=()=>l,p.resetResultsCount=()=>{l=0},p}function vn(e,...n){const o=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,i=(...r)=>{let l=0,p=0,d,g={},f=r.pop();typeof f=="object"&&(g=f,f=r.pop()),Po(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const c={...o,...g},{memoize:h,memoizeOptions:u=[],argsMemoize:m=In,argsMemoizeOptions:b=[]}=c,s=Nt(u),x=Nt(b),I=Mo(r),S=h(function(){return l++,f.apply(null,arguments)},...s),y=m(function(){p++;const D=Ao(I,arguments);return d=S.apply(null,D),d},...x);return Object.assign(y,{resultFunc:f,memoizedResultFunc:S,dependencies:I,dependencyRecomputations:()=>p,resetDependencyRecomputations:()=>{p=0},lastResult:()=>d,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:h,argsMemoize:m})};return Object.assign(i,{withTypes:()=>i}),i}var Uo=vn(In),Vo=Object.assign((e,n=Uo)=>{Fo(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const o=Object.keys(e),i=o.map(l=>e[l]);return n(i,(...l)=>l.reduce((p,d,g)=>(p[o[g]]=d,p),{}))},{withTypes:()=>Vo});const qo=vn({memoize:zo,memoizeOptions:{maxSize:1,equalityCheck:Object.is}}),M=(e,n,o,i,r,l,p,d,...g)=>{if(g.length>0)throw new Error("Unsupported number of selectors");let f;if(e&&n&&o&&i&&r&&l&&p&&d)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m),x=o(c,h,u,m),I=i(c,h,u,m),S=r(c,h,u,m),y=l(c,h,u,m),k=p(c,h,u,m);return d(b,s,x,I,S,y,k,h,u,m)};else if(e&&n&&o&&i&&r&&l&&p)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m),x=o(c,h,u,m),I=i(c,h,u,m),S=r(c,h,u,m),y=l(c,h,u,m);return p(b,s,x,I,S,y,h,u,m)};else if(e&&n&&o&&i&&r&&l)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m),x=o(c,h,u,m),I=i(c,h,u,m),S=r(c,h,u,m);return l(b,s,x,I,S,h,u,m)};else if(e&&n&&o&&i&&r)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m),x=o(c,h,u,m),I=i(c,h,u,m);return r(b,s,x,I,h,u,m)};else if(e&&n&&o&&i)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m),x=o(c,h,u,m);return i(b,s,x,h,u,m)};else if(e&&n&&o)f=(c,h,u,m)=>{const b=e(c,h,u,m),s=n(c,h,u,m);return o(b,s,h,u,m)};else if(e&&n)f=(c,h,u,m)=>{const b=e(c,h,u,m);return n(b,h,u,m)};else if(e)f=e;else throw new Error("Missing arguments");return f},Go=e=>(...n)=>{const o=new WeakMap;let i=1;const r=n[n.length-1],l=n.length-1||1,p=Math.max(r.length-l,0);if(p>3)throw new Error("Unsupported number of arguments");return(g,f,c,h)=>{let u=g.__cacheKey__;u||(u={id:i},g.__cacheKey__=u,i+=1);let m=o.get(u);if(!m){const b=n.length===1?[I=>I,r]:n;let s=n;const x=[void 0,void 0,void 0];switch(p){case 0:break;case 1:{s=[...b.slice(0,-1),()=>x[0],r];break}case 2:{s=[...b.slice(0,-1),()=>x[0],()=>x[1],r];break}case 3:{s=[...b.slice(0,-1),()=>x[0],()=>x[1],()=>x[2],r];break}default:throw new Error("Unsupported number of arguments")}m=qo(...s),m.selectorArgs=x,o.set(u,m)}switch(p){case 3:m.selectorArgs[2]=h;case 2:m.selectorArgs[1]=c;case 1:m.selectorArgs[0]=f}switch(p){case 0:return m(g);case 1:return m(g,f);case 2:return m(g,f,c);case 3:return m(g,f,c,h);default:throw new Error("unreachable")}}},Pe=Go();var ct={exports:{}},dt={};var Ut;function Ko(){if(Ut)return dt;Ut=1;var e=xn();function n(h,u){return h===u&&(h!==0||1/h===1/u)||h!==h&&u!==u}var o=typeof Object.is=="function"?Object.is:n,i=e.useState,r=e.useEffect,l=e.useLayoutEffect,p=e.useDebugValue;function d(h,u){var m=u(),b=i({inst:{value:m,getSnapshot:u}}),s=b[0].inst,x=b[1];return l(function(){s.value=m,s.getSnapshot=u,g(s)&&x({inst:s})},[h,m,u]),r(function(){return g(s)&&x({inst:s}),h(function(){g(s)&&x({inst:s})})},[h]),p(m),m}function g(h){var u=h.getSnapshot;h=h.value;try{var m=u();return!o(h,m)}catch{return!0}}function f(h,u){return u()}var c=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:d;return dt.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:c,dt}var Vt;function Sn(){return Vt||(Vt=1,ct.exports=Ko()),ct.exports}var Ho=Sn(),ut={exports:{}},pt={};var qt;function Wo(){if(qt)return pt;qt=1;var e=xn(),n=Sn();function o(f,c){return f===c&&(f!==0||1/f===1/c)||f!==f&&c!==c}var i=typeof Object.is=="function"?Object.is:o,r=n.useSyncExternalStore,l=e.useRef,p=e.useEffect,d=e.useMemo,g=e.useDebugValue;return pt.useSyncExternalStoreWithSelector=function(f,c,h,u,m){var b=l(null);if(b.current===null){var s={hasValue:!1,value:null};b.current=s}else s=b.current;b=d(function(){function I(_){if(!S){if(S=!0,y=_,_=u(_),m!==void 0&&s.hasValue){var j=s.value;if(m(j,_))return k=j}return k=_}if(j=k,i(y,_))return j;var T=u(_);return m!==void 0&&m(j,T)?(y=_,j):(y=_,k=T)}var S=!1,y,k,D=h===void 0?null:h;return[function(){return I(c())},D===null?void 0:function(){return I(D())}]},[c,h,u,m]);var x=r(f,b[0],b[1]);return p(function(){s.hasValue=!0,s.value=x},[x]),g(x),x},pt}var Gt;function Xo(){return Gt||(Gt=1,ut.exports=Wo()),ut.exports}var Jo=Xo();const Yo=parseInt(v.version,10),Zo=Yo>=19,Qo=Zo?ei:ti;function O(e,n,o,i,r){return Qo(e,n,o,i,r)}function ei(e,n,o,i,r){const l=v.useCallback(()=>n(e.getSnapshot(),o,i,r),[e,n,o,i,r]);return Ho.useSyncExternalStore(e.subscribe,l,l)}function ti(e,n,o,i,r){return Jo.useSyncExternalStoreWithSelector(e.subscribe,e.getSnapshot,e.getSnapshot,l=>n(l,o,i,r))}const ni=()=>{};function oi(e,n,o){const i=qn(ii,{store:e,selector:n}).current;i.effect=o,Gn(i.onMount)}function ii(e){const{store:n,selector:o}=e;let i=o(n.state);const r={effect:ni,dispose:null,subscribe:()=>{r.dispose??=n.subscribe(l=>{const p=o(l);if(!Object.is(i,p)){const d=i;i=p,r.effect(d,p)}})},onMount:()=>(r.subscribe(),()=>{r.dispose?.(),r.dispose=null})};return r.subscribe(),r}class Ct{static create(n){return new Ct(n)}constructor(n){this.state=n,this.listeners=new Set,this.updateTick=0}subscribe=n=>(this.listeners.add(n),()=>{this.listeners.delete(n)});getSnapshot=()=>this.state;setState(n){this.state=n,this.updateTick+=1;const o=this.updateTick,i=this.listeners.values();let r;for(;r=i.next(),!r.done;){if(o!==this.updateTick)return;const l=r.value;l(n)}}update(n){for(const o in n)if(!Object.is(this.state[o],n[o])){this.setState(w({},this.state,n));return}}set(n,o){Object.is(this.state[n],o)||this.setState(w({},this.state,{[n]:o}))}use=(n,o,i,r)=>O(this,n,o,i,r)}function Ke(e,n,o,i){const r=Ee(ri).current;return si(r,e,n,o,i)&&ai(r,[e,n,o,i]),r.callback}function ri(){return{callback:null,cleanup:null,refs:[]}}function si(e,n,o,i,r){return e.refs[0]!==n||e.refs[1]!==o||e.refs[2]!==i||e.refs[3]!==r}function ai(e,n){if(e.refs=n,n.every(o=>o==null)){e.callback=null;return}e.callback=o=>{if(e.cleanup&&(e.cleanup(),e.cleanup=null),o!=null){const i=Array(n.length).fill(null);for(let r=0;r<n.length;r+=1){const l=n[r];if(l!=null)switch(typeof l){case"function":{const p=l(o);typeof p=="function"&&(i[r]=p);break}case"object":{l.current=o;break}}}e.cleanup=()=>{for(let r=0;r<n.length;r+=1){const l=n[r];if(l!=null)switch(typeof l){case"function":{const p=i[r];typeof p=="function"?p():l(null);break}case"object":{l.current=null;break}}}}}}}class li{maxListeners=20;warnOnce=!1;events={};on(n,o,i={}){let r=this.events[n];r||(r={highPriority:new Map,regular:new Map},this.events[n]=r),i.isFirst?r.highPriority.set(o,!0):r.regular.set(o,!0)}removeListener(n,o){this.events[n]&&(this.events[n].regular.delete(o),this.events[n].highPriority.delete(o))}removeAllListeners(){this.events={}}emit(n,...o){const i=this.events[n];if(!i)return;const r=Array.from(i.highPriority.keys()),l=Array.from(i.regular.keys());for(let p=r.length-1;p>=0;p-=1){const d=r[p];i.highPriority.has(d)&&d.apply(this,o)}for(let p=0;p<l.length;p+=1){const d=l[p];i.regular.has(d)&&d.apply(this,o)}}once(n,o){const i=this;this.on(n,function r(...l){i.removeListener(n,r),o.apply(i,l)})}}const ci=e=>e.isPropagationStopped!==void 0,wn=()=>{const[e]=v.useState(()=>new li),n=v.useCallback((...i)=>{const[r,l,p={}]=i;p.defaultMuiPrevented=!1,!(ci(p)&&p.isPropagationStopped())&&e.emit(r,l,p)},[e]),o=v.useCallback((i,r)=>(e.on(i,r),()=>{e.removeListener(i,r)}),[e]);return{instance:{$$publishEvent:n,$$subscribeEvent:o}}};wn.params={};const jn=({plugins:e})=>{const n=new Set(e);return{instance:{getAvailablePlugins:()=>n}}};jn.params={};const Fe={treeId:M(e=>e.id.treeId)};let Kt=0;const di=()=>(Kt+=1,`mui-tree-view-${Kt}`),Ye=({id:e,treeId:n="",itemId:o})=>e??`${n}-${o}`,Et=({params:e,store:n})=>{v.useEffect(()=>{const i=n.state.id;e.id===i.providedTreeId&&i.treeId!==void 0||n.set("id",w({},i,{treeId:e.id??di()}))},[n,e.id]);const o=O(n,Fe.treeId);return{getRootProps:()=>({id:o})}};Et.params={id:!0};Et.getInitialState=({id:e})=>({id:{treeId:void 0,providedTreeId:e}});const ui=[wn,jn,Et],pi=["apiRef"],fi=e=>{let{props:{apiRef:n},plugins:o}=e,i=Te(e.props,pi);const r=v.useMemo(()=>{const d={};return o.forEach(g=>{Object.assign(d,g.params)}),d},[o]),{forwardedProps:l,pluginParams:p}=v.useMemo(()=>{const d={},g={};Object.keys(i).forEach(c=>{const h=i[c];r[c]?d[c]=h:g[c]=h});const f=o.reduce((c,h)=>h.applyDefaultValuesToParams?h.applyDefaultValuesToParams({params:c}):c,d);return{forwardedProps:g,pluginParams:f}},[o,i,r]);return{forwardedProps:l,pluginParams:p,apiRef:n}},mi=e=>{const{plugins:n,instance:o,publicAPI:i,store:r,rootRef:l}=e,p=v.useCallback(f=>{let c=null,h=null;const u=[],m={};n.forEach(x=>{if(!x.itemPlugin)return;const I=x.itemPlugin({props:f,rootRef:c,contentRef:h});I?.rootRef&&(c=I.rootRef),I?.contentRef&&(h=I.contentRef),I?.propsEnhancers&&(u.push(I.propsEnhancers),Object.keys(I.propsEnhancers).forEach(S=>{m[S]=!0}))});const b=x=>I=>{const S={};return u.forEach(y=>{const k=y[x];k!=null&&Object.assign(S,k(I))}),S},s=Object.fromEntries(Object.keys(m).map(x=>[x,b(x)]));return{contentRef:h,rootRef:c,propsEnhancers:s}},[n]),d=v.useCallback(({itemId:f,children:c,idAttribute:h})=>{let u=c;for(let m=n.length-1;m>=0;m-=1){const b=n[m];b.wrapItem&&(u=b.wrapItem({instance:o,itemId:f,children:u,idAttribute:h}))}return u},[n,o]),g=v.useCallback(({children:f})=>{let c=f;for(let h=n.length-1;h>=0;h-=1){const u=n[h];u.wrapRoot&&(c=u.wrapRoot({children:c}))}return c},[n]);return v.useMemo(()=>({runItemPlugins:p,wrapItem:d,wrapRoot:g,instance:o,publicAPI:i,store:r,rootRef:l}),[p,d,g,o,i,r,l])};function xi(e){return e.current==null&&(e.current={}),e}function hi(e){const n=v.useRef({});return e?xi(e):n}const gi=({plugins:e,rootRef:n,props:o})=>{const i=v.useMemo(()=>[...ui,...e],[e]),{pluginParams:r,forwardedProps:l,apiRef:p}=fi({plugins:i,props:o}),d=Ee(()=>({})).current,g=hi(p),f=v.useRef(null),c=Ke(f,n),h=Ee(()=>{const x={};for(const I of i)I.getInitialState&&Object.assign(x,I.getInitialState(r));return new Ct(x)}).current,u=mi({plugins:i,instance:d,publicAPI:g.current,store:h,rootRef:f}),m=[],b=x=>{const I=x({instance:d,params:r,rootRef:f,plugins:i,store:h});I.getRootProps&&m.push(I.getRootProps),I.publicAPI&&Object.assign(g.current,I.publicAPI),I.instance&&Object.assign(d,I.instance)};return i.forEach(b),{getRootProps:(x={})=>{const I=w({role:"tree"},l,x,{ref:c});return m.forEach(S=>{Object.assign(I,S(x))}),I},rootRef:c,contextValue:u}},yn=v.createContext(null),he=()=>{const e=v.useContext(yn);if(e==null)throw new Error(["MUI X: Could not find the Tree View context.","It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));return e},Cn=v.createContext({classes:{},slots:{},slotProps:{}}),En=()=>v.useContext(Cn),ft={};function bi(e){const{contextValue:n,classes:o=ft,slots:i=ft,slotProps:r=ft,children:l}=e,p=v.useMemo(()=>({classes:o,slots:{collapseIcon:i.collapseIcon,expandIcon:i.expandIcon,endIcon:i.endIcon},slotProps:{collapseIcon:r.collapseIcon,expandIcon:r.expandIcon,endIcon:r.endIcon}}),[o,i.collapseIcon,i.expandIcon,i.endIcon,r.collapseIcon,r.expandIcon,r.endIcon]);return t.jsx(yn.Provider,{value:n,children:t.jsx(Cn.Provider,{value:p,children:n.wrapRoot({children:l})})})}const mt=Kn[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],Ii=mt&&mt!==v.useLayoutEffect?mt:e=>e();function V(e){const n=Ee(vi).current;return n.next=e,Ii(n.effect),n.trampoline}function vi(){const e={next:void 0,callback:Si,trampoline:(...n)=>e.callback?.(...n),effect:()=>{e.callback=e.next}};return e}function Si(){}const Y="__TREE_VIEW_ROOT_PARENT_ID__",kn=e=>{const n={};return e.forEach((o,i)=>{n[o]=i}),n},He=(e,n)=>{if(n==null)return!1;let o=e[n];if(!o)return!1;if(o.disabled)return!0;for(;o.parentId!=null;){if(o=e[o.parentId],!o)return!1;if(o.disabled)return!0}return!1};function Tn(e){const{config:n,items:o,disabledItemsFocusable:i}=e,r={},l={},p={},d={};function g(f,c,h){const u=c??Y,{metaLookup:m,modelLookup:b,orderedChildrenIds:s,childrenIndexes:x,itemsChildren:I}=Pn({config:n,items:f,parentId:c,depth:h,isItemExpandable:(S,y)=>!!y&&y.length>0,otherItemsMetaLookup:r});Object.assign(r,m),Object.assign(l,b),p[u]=s,d[u]=x;for(const S of I)g(S.children||[],S.id,h+1)}return g(o,null,0),{disabledItemsFocusable:i,itemMetaLookup:r,itemModelLookup:l,itemOrderedChildrenIdsLookup:p,itemChildrenIndexesLookup:d,domStructure:"nested"}}function Pn(e){const{config:n,items:o,parentId:i,depth:r,isItemExpandable:l,otherItemsMetaLookup:p}=e,d={},g={},f=[],c=[],h=u=>{const m=n.getItemId?n.getItemId(u):u.id;wi({id:m,parentId:i,item:u,itemMetaLookup:p,siblingsMetaLookup:d});const b=n.getItemLabel?n.getItemLabel(u):u.label;if(b==null)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.","An item was provided without label in the `items` prop:",JSON.stringify(u)].join(`
`));const s=(n.getItemChildren?n.getItemChildren(u):u.children)||[];c.push({id:m,children:s}),g[m]=u,d[m]={id:m,label:b,parentId:i,idAttribute:void 0,expandable:l(u,s),disabled:n.isItemDisabled?n.isItemDisabled(u):!1,depth:r},f.push(m)};for(const u of o)h(u);return{metaLookup:d,modelLookup:g,orderedChildrenIds:f,childrenIndexes:kn(f),itemsChildren:c}}function wi({id:e,parentId:n,item:o,itemMetaLookup:i,siblingsMetaLookup:r}){if(e==null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.","An item was provided without id in the `items` prop:",JSON.stringify(o)].join(`
`));if(r[e]!=null||i[e]!=null&&i[e].parentId!==n)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${e}"`].join(`
`))}const ke=v.createContext(()=>-1),ji=[],E={domStructure:M(e=>e.items.domStructure),disabledItemFocusable:M(e=>e.items.disabledItemsFocusable),itemMetaLookup:M(e=>e.items.itemMetaLookup),itemOrderedChildrenIdsLookup:M(e=>e.items.itemOrderedChildrenIdsLookup),itemMeta:M((e,n)=>e.items.itemMetaLookup[n??Y]??null),itemOrderedChildrenIds:M((e,n)=>e.items.itemOrderedChildrenIdsLookup[n??Y]??ji),itemModel:M((e,n)=>e.items.itemModelLookup[n]),isItemDisabled:M((e,n)=>He(e.items.itemMetaLookup,n)),itemIndex:M((e,n)=>{const o=e.items.itemMetaLookup[n];return o==null?-1:e.items.itemChildrenIndexesLookup[o.parentId??Y][o.id]}),itemParentId:M((e,n)=>e.items.itemMetaLookup[n]?.parentId??null),itemDepth:M((e,n)=>e.items.itemMetaLookup[n]?.depth??0),canItemBeFocused:M((e,n)=>e.items.disabledItemsFocusable||!He(e.items.itemMetaLookup,n))},Re=({instance:e,params:n,store:o})=>{const i=v.useMemo(()=>({isItemDisabled:n.isItemDisabled,getItemLabel:n.getItemLabel,getItemChildren:n.getItemChildren,getItemId:n.getItemId}),[n.isItemDisabled,n.getItemLabel,n.getItemChildren,n.getItemId]),r=v.useCallback(I=>E.itemModel(o.state,I),[o]),l=v.useCallback(I=>E.itemMeta(o.state,I)?.parentId||null,[o]),p=V(({itemId:I,shouldBeDisabled:S})=>{if(!o.state.items.itemMetaLookup[I])return;const y=w({},o.state.items.itemMetaLookup);y[I]=w({},y[I],{disabled:S??!y[I].disabled}),o.set("items",w({},o.state.items,{itemMetaLookup:y}))}),d=v.useCallback(()=>{const I=S=>{const y=E.itemModel(o.state,S),k=w({},y),D=E.itemOrderedChildrenIds(o.state,S);return D.length>0?k.children=D.map(I):delete k.children,k};return E.itemOrderedChildrenIds(o.state,null).map(I)},[o]),g=v.useCallback(I=>E.itemOrderedChildrenIds(o.state,I),[o]),f=I=>{const S=E.itemMeta(o.state,I);if(S==null)return null;const y=Ye({treeId:Fe.treeId(o.state),itemId:I,id:S.idAttribute});return document.getElementById(y)},c=v.useRef(!1),h=v.useCallback(()=>{c.current=!0},[]),u=v.useCallback(()=>c.current,[]),m=({items:I,parentId:S,getChildrenCount:y})=>{const k=S??Y,D=S==null?-1:E.itemDepth(o.state,S),{metaLookup:_,modelLookup:j,orderedChildrenIds:T,childrenIndexes:L}=Pn({config:i,items:I,parentId:S,depth:D+1,isItemExpandable:y?ee=>y(ee)>0:()=>!1,otherItemsMetaLookup:E.itemMetaLookup(o.state)}),B={itemModelLookup:w({},o.state.items.itemModelLookup,j),itemMetaLookup:w({},o.state.items.itemMetaLookup,_),itemOrderedChildrenIdsLookup:w({},o.state.items.itemOrderedChildrenIdsLookup,{[k]:T}),itemChildrenIndexesLookup:w({},o.state.items.itemChildrenIndexesLookup,{[k]:L})};o.set("items",w({},o.state.items,B))},b=V(I=>{const S=Object.keys(o.state.items.itemMetaLookup).reduce((_,j)=>{const T=o.state.items.itemMetaLookup[j];return T.parentId===I?_:w({},_,{[T.id]:T})},{}),y=w({},o.state.items.itemOrderedChildrenIdsLookup),k=w({},o.state.items.itemChildrenIndexesLookup),D=I??Y;delete k[D],delete y[D],o.set("items",w({},o.state.items,{itemMetaLookup:S,itemOrderedChildrenIdsLookup:y,itemChildrenIndexesLookup:k}))}),s=V(I=>{const S=w({},o.state.items.itemMetaLookup);for(const y of I)S[y]=w({},S[y],{expandable:!0});o.set("items",w({},o.state.items,{itemMetaLookup:S}))});v.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const I=Tn({disabledItemsFocusable:n.disabledItemsFocusable,items:n.items,config:i});o.set("items",w({},o.state.items,I))},[e,o,n.items,n.disabledItemsFocusable,i]);const x=V((I,S)=>{n.onItemClick&&n.onItemClick(I,S)});return{getRootProps:()=>({style:{"--TreeView-itemChildrenIndentation":typeof n.itemChildrenIndentation=="number"?`${n.itemChildrenIndentation}px`:n.itemChildrenIndentation}}),publicAPI:{getItem:r,getItemDOMElement:f,getItemTree:d,getItemOrderedChildrenIds:g,setIsItemDisabled:p,getParentId:l},instance:{getItemDOMElement:f,preventItemUpdates:h,areItemUpdatesPrevented:u,setItemChildren:m,removeChildren:b,addExpandableItems:s,handleItemClick:x}}};Re.getInitialState=e=>({items:Tn({items:e.items,disabledItemsFocusable:e.disabledItemsFocusable,config:{isItemDisabled:e.isItemDisabled,getItemId:e.getItemId,getItemLabel:e.getItemLabel,getItemChildren:e.getItemChildren}})});Re.applyDefaultValuesToParams=({params:e})=>w({},e,{disabledItemsFocusable:e.disabledItemsFocusable??!1,itemChildrenIndentation:e.itemChildrenIndentation??"12px"});Re.wrapRoot=({children:e})=>t.jsx(ke.Provider,{value:E.itemDepth,children:e});Re.params={disabledItemsFocusable:!0,items:!0,isItemDisabled:!0,getItemLabel:!0,getItemChildren:!0,getItemId:!0,onItemClick:!0,itemChildrenIndentation:!0};const Fn=()=>{},yi=()=>{},ve=typeof document<"u"?v.useLayoutEffect:yi,xt=Pe(e=>e.expansion.expandedItems,e=>{const n=new Map;return e.forEach(o=>{n.set(o,!0)}),n}),z={expandedItemsRaw:M(e=>e.expansion.expandedItems),expandedItemsMap:xt,flatList:Pe(E.itemOrderedChildrenIdsLookup,xt,(e,n)=>{function o(i){if(!n.has(i))return[i];const r=[i],l=e[i]||[];for(const p of l)r.push(...o(p));return r}return(e[Y]??[]).flatMap(o)}),triggerSlot:M(e=>e.expansion.expansionTrigger),isItemExpanded:M(xt,(e,n)=>e.has(n)),isItemExpandable:M(E.itemMeta,(e,n)=>e?.expandable??!1)},Rn=({isItemEditable:e,expansionTrigger:n})=>n||(e?"iconContainer":"content"),Ci=(e,n,o)=>{e.$$publishEvent(n,o)},Ze=({instance:e,store:n,params:o})=>{Fn({controlled:o.expandedItems,defaultValue:o.defaultExpandedItems}),ve(()=>{const f=Rn({isItemEditable:o.isItemEditable,expansionTrigger:o.expansionTrigger});n.state.expansion.expansionTrigger!==f&&n.set("expansion",w({},n.state.expansion,{expansionTrigger:f}))},[n,o.isItemEditable,o.expansionTrigger]);const i=(f,c)=>{o.expandedItems===void 0&&n.set("expansion",w({},n.state.expansion,{expandedItems:c})),o.onExpandedItemsChange?.(f,c)},r=V(()=>{i(null,[])}),l=V(({itemId:f,event:c,shouldBeExpanded:h})=>{const u=z.expandedItemsRaw(n.state);let m;h?m=[f].concat(u):m=u.filter(b=>b!==f),o.onItemExpansionToggle&&o.onItemExpansionToggle(c,f,h),i(c,m)}),p=V(({itemId:f,event:c=null,shouldBeExpanded:h})=>{const u=z.isItemExpanded(n.state,f),m=h??!u;if(u===m)return;const b={isExpansionPrevented:!1,shouldBeExpanded:m,event:c,itemId:f};Ci(e,"beforeItemToggleExpansion",b),!b.isExpansionPrevented&&e.applyItemExpansion({itemId:f,event:c,shouldBeExpanded:m})}),d=V(f=>z.isItemExpanded(n.state,f)),g=(f,c)=>{const h=E.itemMeta(n.state,c);if(h==null)return;const m=E.itemOrderedChildrenIds(n.state,h.parentId).filter(s=>z.isItemExpandable(n.state,s)&&!z.isItemExpanded(n.state,s)),b=z.expandedItemsRaw(n.state).concat(m);m.length>0&&(o.onItemExpansionToggle&&m.forEach(s=>{o.onItemExpansionToggle(f,s,!0)}),i(f,b))};return ve(()=>{const f=o.expandedItems;f!==void 0&&n.set("expansion",w({},n.state.expansion,{expandedItems:f}))},[n,o.expandedItems]),{publicAPI:{setItemExpansion:p,isItemExpanded:d},instance:{setItemExpansion:p,applyItemExpansion:l,expandAllSiblings:g,resetItemExpansion:r}}},Ei=[];Ze.applyDefaultValuesToParams=({params:e})=>w({},e,{defaultExpandedItems:e.defaultExpandedItems??Ei});Ze.getInitialState=e=>({expansion:{expandedItems:e.expandedItems===void 0?e.defaultExpandedItems:e.expandedItems,expansionTrigger:Rn(e)}});Ze.params={expandedItems:!0,defaultExpandedItems:!0,onExpandedItemsChange:!0,onItemExpansionToggle:!0,expansionTrigger:!0};const It=(e,n)=>{let o=n.length-1;for(;o>=0&&!E.canItemBeFocused(e,n[o]);)o-=1;if(o!==-1)return n[o]},Mn=(e,n)=>{const o=E.itemMeta(e,n);if(!o)return null;const i=E.itemOrderedChildrenIds(e,o.parentId),r=E.itemIndex(e,n);if(r===0)return o.parentId;let l=r-1;for(;!E.canItemBeFocused(e,i[l])&&l>=0;)l-=1;if(l===-1)return o.parentId==null?null:Mn(e,o.parentId);let p=i[l],d=It(e,E.itemOrderedChildrenIds(e,p));for(;z.isItemExpanded(e,p)&&d!=null;)p=d,d=It(e,E.itemOrderedChildrenIds(e,p));return p},Ne=(e,n)=>{if(z.isItemExpanded(e,n)){const i=E.itemOrderedChildrenIds(e,n).find(r=>E.canItemBeFocused(e,r));if(i!=null)return i}let o=E.itemMeta(e,n);for(;o!=null;){const i=E.itemOrderedChildrenIds(e,o.parentId),r=E.itemIndex(e,o.id);if(r<i.length-1){let l=r+1;for(;!E.canItemBeFocused(e,i[l])&&l<i.length-1;)l+=1;if(E.canItemBeFocused(e,i[l]))return i[l]}o=E.itemMeta(e,o.parentId)}return null},An=e=>{let n=null;for(;n==null||z.isItemExpanded(e,n);){const o=E.itemOrderedChildrenIds(e,n),i=It(e,o);if(i==null)return n;n=i}return n},We=e=>E.itemOrderedChildrenIds(e,null).find(n=>E.canItemBeFocused(e,n)),Ln=(e,n,o)=>{if(n===o)return[n,o];const i=E.itemMeta(e,n),r=E.itemMeta(e,o);if(!i||!r)return[n,o];if(i.parentId===r.id||r.parentId===i.id)return r.parentId===i.id?[i.id,r.id]:[r.id,i.id];const l=[i.id],p=[r.id];let d=i.parentId,g=r.parentId,f=p.indexOf(d)!==-1,c=l.indexOf(g)!==-1,h=!0,u=!0;for(;!c&&!f;)h&&(l.push(d),f=p.indexOf(d)!==-1,h=d!==null,!f&&h&&(d=E.itemParentId(e,d))),u&&!f&&(p.push(g),c=l.indexOf(g)!==-1,u=g!==null,!c&&u&&(g=E.itemParentId(e,g)));const m=f?d:g,b=E.itemOrderedChildrenIds(e,m),s=l[l.indexOf(m)-1],x=p[p.indexOf(m)-1];return b.indexOf(s)<b.indexOf(x)?[n,o]:[o,n]},ki=(e,n,o)=>{const i=g=>{if(z.isItemExpandable(e,g)&&z.isItemExpanded(e,g))return E.itemOrderedChildrenIds(e,g)[0];let f=E.itemMeta(e,g);for(;f!=null;){const c=E.itemOrderedChildrenIds(e,f.parentId),h=E.itemIndex(e,f.id);if(h<c.length-1)return c[h+1];f=f.parentId?E.itemMeta(e,f.parentId):null}throw new Error("Invalid range")},[r,l]=Ln(e,n,o),p=[r];let d=r;for(;d!==l;)d=i(d),E.isItemDisabled(e,d)||p.push(d);return p},Ti=e=>{let n=We(e);const o=[];for(;n!=null;)o.push(n),n=Ne(e,n);return o},vt=(e,n)=>n!==e.closest('*[role="treeitem"]'),On=Pe(e=>e.selection.selectedItems,e=>Array.isArray(e)?e:e!=null?[e]:[]),Ht=Pe(On,e=>{const n=new Map;return e.forEach(o=>{n.set(o,!0)}),n}),A={selectedItemsRaw:M(e=>e.selection.selectedItems),selectedItems:On,selectedItemsMap:Ht,enabled:M(e=>e.selection.isEnabled),isMultiSelectEnabled:M(e=>e.selection.isMultiSelectEnabled),isCheckboxSelectionEnabled:M(e=>e.selection.isCheckboxSelectionEnabled),propagationRules:M(e=>e.selection.selectionPropagation),isItemSelected:M(Ht,(e,n)=>e.has(n)),canItemBeSelected:M(E.isItemDisabled,e=>e.selection.isEnabled,(e,n,o)=>n&&!e)},Be=e=>{const n={};return e.forEach(o=>{n[o]=!0}),n},Dn=({store:e,oldModel:n,newModel:o})=>{const i=new Map;return o.forEach(r=>{i.set(r,!0)}),{added:o.filter(r=>!A.isItemSelected(e.state,r)),removed:n.filter(r=>!i.has(r))}},Pi=({store:e,selectionPropagation:n,newModel:o,oldModel:i,additionalItemsToPropagate:r})=>{if(!n.descendants&&!n.parents)return o;let l=!1;const p=Be(o),d=Dn({store:e,newModel:o,oldModel:i});return r?.forEach(g=>{p[g]?d.added.includes(g)||d.added.push(g):d.removed.includes(g)||d.removed.push(g)}),d.added.forEach(g=>{if(n.descendants){const f=c=>{c!==g&&(l=!0,p[c]=!0),E.itemOrderedChildrenIds(e.state,c).forEach(f)};f(g)}if(n.parents){const f=h=>p[h]?E.itemOrderedChildrenIds(e.state,h).every(f):!1,c=h=>{const u=E.itemParentId(e.state,h);if(u==null)return;E.itemOrderedChildrenIds(e.state,u).every(f)&&(l=!0,p[u]=!0,c(u))};c(g)}}),d.removed.forEach(g=>{if(n.parents){let f=E.itemParentId(e.state,g);for(;f!=null;)p[f]&&(l=!0,delete p[f]),f=E.itemParentId(e.state,f)}if(n.descendants){const f=c=>{c!==g&&(l=!0,delete p[c]),E.itemOrderedChildrenIds(e.state,c).forEach(f)};f(g)}}),l?Object.keys(p):o},Fi=M((e,n)=>{if(A.isItemSelected(e,n))return"checked";let o=!1,i=!1;const r=p=>{p!==n&&(A.isItemSelected(e,p)?o=!0:i=!0),E.itemOrderedChildrenIds(e,p).forEach(r)};return r(n),A.propagationRules(e).parents?o&&i?"indeterminate":o&&!i?"checked":"empty":o?"indeterminate":"empty"}),Ri=({props:e})=>{const{itemId:n}=e,{store:o}=he(),i=O(o,A.isCheckboxSelectionEnabled),r=O(o,A.canItemBeSelected,n),l=O(o,Fi,n),p=O(o,A.canItemBeSelected,n);return{propsEnhancers:{root:()=>{let d;return l==="checked"?d=!0:l==="indeterminate"?d="mixed":p?d=!1:d=void 0,{"aria-checked":d}},checkbox:({externalEventHandlers:d,interactions:g})=>({tabIndex:-1,onChange:c=>{d.onChange?.(c),!c.defaultMuiPrevented&&A.canItemBeSelected(o.state,n)&&g.handleCheckboxSelection(c)},visible:i,disabled:!r,checked:l==="checked",indeterminate:l==="indeterminate"})}}},Me=({store:e,params:n})=>{Fn({controlled:n.selectedItems,defaultValue:n.defaultSelectedItems});const o=v.useRef(null),i=v.useRef({}),r=(u,m,b)=>{const s=A.selectedItemsRaw(e.state);let x;const I=A.isMultiSelectEnabled(e.state);if(I&&(n.selectionPropagation.descendants||n.selectionPropagation.parents)?x=Pi({store:e,selectionPropagation:n.selectionPropagation,newModel:m,oldModel:s,additionalItemsToPropagate:b}):x=m,n.onItemSelectionToggle)if(I){const S=Dn({store:e,newModel:x,oldModel:s});n.onItemSelectionToggle&&(S.added.forEach(y=>{n.onItemSelectionToggle(u,y,!0)}),S.removed.forEach(y=>{n.onItemSelectionToggle(u,y,!1)}))}else n.onItemSelectionToggle&&x!==s&&(s!=null&&n.onItemSelectionToggle(u,s,!1),x!=null&&n.onItemSelectionToggle(u,x,!0));n.selectedItems===void 0&&e.set("selection",w({},e.state.selection,{selectedItems:x})),n.onSelectedItemsChange?.(u,x)},l=({itemId:u,event:m=null,keepExistingSelection:b=!1,shouldBeSelected:s})=>{if(!A.enabled(e.state))return;let x;const I=A.isMultiSelectEnabled(e.state);if(b){const S=A.selectedItems(e.state),y=A.isItemSelected(e.state,u);y&&(s===!1||s==null)?x=S.filter(k=>k!==u):!y&&(s===!0||s==null)?x=[u].concat(S):x=S}else s===!1||s==null&&A.isItemSelected(e.state,u)?x=I?[]:null:x=I?[u]:u;r(m,x,[u]),o.current=u,i.current={}},p=(u,[m,b])=>{if(!A.isMultiSelectEnabled(e.state))return;let x=A.selectedItems(e.state).slice();Object.keys(i.current).length>0&&(x=x.filter(k=>!i.current[k]));const I=Be(x),S=ki(e.state,m,b),y=S.filter(k=>!I[k]);x=x.concat(y),r(u,x),i.current=Be(S)},d=(u,m)=>{if(o.current!=null){const[b,s]=Ln(e.state,m,o.current);p(u,[b,s])}},g=(u,m)=>{p(u,[We(e.state),m])},f=(u,m)=>{p(u,[m,An(e.state)])},c=u=>{if(!A.isMultiSelectEnabled(e.state))return;const b=Ti(e.state);r(u,b),i.current=Be(b)},h=(u,m,b)=>{if(!A.isMultiSelectEnabled(e.state))return;let x=A.selectedItems(e.state).slice();Object.keys(i.current).length===0?(x.push(b),i.current={[m]:!0,[b]:!0}):(i.current[m]||(i.current={}),i.current[b]?(x=x.filter(I=>I!==m),delete i.current[m]):(x.push(b),i.current[b]=!0)),r(u,x)};return ve(()=>{e.set("selection",{selectedItems:n.selectedItems===void 0?e.state.selection.selectedItems:n.selectedItems,isEnabled:!n.disableSelection,isMultiSelectEnabled:n.multiSelect,isCheckboxSelectionEnabled:n.checkboxSelection,selectionPropagation:{descendants:n.selectionPropagation.descendants,parents:n.selectionPropagation.parents}})},[e,n.selectedItems,n.multiSelect,n.checkboxSelection,n.disableSelection,n.selectionPropagation.descendants,n.selectionPropagation.parents]),{getRootProps:()=>({"aria-multiselectable":n.multiSelect}),publicAPI:{setItemSelection:l},instance:{setItemSelection:l,selectAllNavigableItems:c,expandSelectionRange:d,selectRangeFromStartToItem:g,selectRangeFromItemToEnd:f,selectItemFromArrowNavigation:h}}};Me.itemPlugin=Ri;const Mi=[],Ai={};Me.applyDefaultValuesToParams=({params:e})=>w({},e,{disableSelection:e.disableSelection??!1,multiSelect:e.multiSelect??!1,checkboxSelection:e.checkboxSelection??!1,defaultSelectedItems:e.defaultSelectedItems??(e.multiSelect?Mi:null),selectionPropagation:e.selectionPropagation??Ai});Me.getInitialState=e=>({selection:{selectedItems:e.selectedItems===void 0?e.defaultSelectedItems:e.selectedItems,isEnabled:!e.disableSelection,isMultiSelectEnabled:e.multiSelect,isCheckboxSelectionEnabled:e.checkboxSelection,selectionPropagation:e.selectionPropagation}});Me.params={disableSelection:!0,multiSelect:!0,checkboxSelection:!0,defaultSelectedItems:!0,selectedItems:!0,onSelectedItemsChange:!0,onItemSelectionToggle:!0,selectionPropagation:!0};const Wt=Pe(A.selectedItems,z.expandedItemsMap,E.itemMetaLookup,E.disabledItemFocusable,e=>E.itemOrderedChildrenIds(e,null),(e,n,o,i,r)=>{const l=e.find(d=>{if(!i&&He(o,d))return!1;const g=o[d];return g&&(g.parentId==null||n.has(g.parentId))});if(l!=null)return l;const p=r.find(d=>i||!He(o,d));return p??null}),xe={defaultFocusableItemId:Wt,isItemTheDefaultFocusableItem:M(Wt,(e,n)=>e===n),focusedItemId:M(e=>e.focus.focusedItemId),isItemFocused:M((e,n)=>e.focus.focusedItemId===n)},kt=({instance:e,params:n,store:o})=>{const i=V(c=>{xe.focusedItemId(o.state)!==c&&o.set("focus",w({},o.state.focus,{focusedItemId:c}))}),r=c=>{const h=E.itemMeta(o.state,c);return h&&(h.parentId==null||z.isItemExpanded(o.state,h.parentId))},l=(c,h)=>{const u=e.getItemDOMElement(h);u&&u.focus(),i(h),n.onItemFocus&&n.onItemFocus(c,h)},p=V((c,h)=>{r(h)&&l(c,h)}),d=V(()=>{const c=xe.focusedItemId(o.state);if(c==null)return;if(E.itemMeta(o.state,c)){const u=e.getItemDOMElement(c);u&&u.blur()}i(null)});oi(o,E.itemMetaLookup,()=>{const c=xe.focusedItemId(o.state);if(c==null||!!E.itemMeta(o.state,c))return;const u=xe.defaultFocusableItemId(o.state);if(u==null){i(null);return}l(null,u)});const g=c=>h=>{if(c.onFocus?.(h),h.defaultMuiPrevented)return;const u=xe.defaultFocusableItemId(o.state);h.target===h.currentTarget&&u!=null&&l(h,u)},f=c=>h=>{c.onBlur?.(h),!h.defaultMuiPrevented&&i(null)};return{getRootProps:c=>({onFocus:g(c),onBlur:f(c)}),publicAPI:{focusItem:p},instance:{focusItem:p,removeFocusedItem:d}}};kt.getInitialState=()=>({focus:{focusedItemId:null}});kt.params={onItemFocus:!0};const Li=[];function Oi(e){v.useEffect(e,Li)}const je=0;class Tt{static create(){return new Tt}currentId=je;start(n,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=je,o()},n)}isStarted(){return this.currentId!==je}clear=()=>{this.currentId!==je&&(clearTimeout(this.currentId),this.currentId=je)};disposeEffect=()=>this.clear}function Di(){const e=Ee(Tt.create).current;return Oi(e.disposeEffect),e}const Ue=(e,n)=>e.getAvailablePlugins().has(n),le={isItemEditable:M(e=>e.label?.isItemEditable,E.itemModel,(e,n,o)=>!n||e==null?!1:typeof e=="boolean"?e:e(n)),isItemBeingEdited:M((e,n)=>n==null?!1:e.label?.editedItemId===n),isAnyItemBeingEdited:M(e=>!!e.label?.editedItemId)},_i=({props:e})=>{const{store:n}=he(),{label:o,itemId:i}=e,[r,l]=v.useState(o),p=O(n,le.isItemEditable,i),d=O(n,le.isItemBeingEdited,i);return v.useEffect(()=>{d||l(o)},[d,o]),{propsEnhancers:{label:()=>({editable:p}),labelInput:({externalEventHandlers:g,interactions:f})=>p?{value:r??"","data-element":"labelInput",onChange:m=>{g.onChange?.(m),l(m.target.value)},onKeyDown:m=>{if(g.onKeyDown?.(m),m.defaultMuiPrevented)return;const b=m.target;m.key==="Enter"&&b.value?f.handleSaveItemLabel(m,b.value):m.key==="Escape"&&f.handleCancelItemLabelEditing(m)},onBlur:m=>{g.onBlur?.(m),!m.defaultMuiPrevented&&m.target.value&&f.handleSaveItemLabel(m,m.target.value)},autoFocus:!0,type:"text"}:{}}}},ue=({store:e,params:n})=>{const o=r=>{r!==null&&!le.isItemEditable(e.state,r)||e.set("label",w({},e.state.label,{editedItemId:r}))},i=(r,l)=>{if(!l)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","The label of an item cannot be empty.",r].join(`
`));const p=e.state.items.itemMetaLookup[r];p.label!==l&&(e.set("items",w({},e.state.items,{itemMetaLookup:w({},e.state.items.itemMetaLookup,{[r]:w({},p,{label:l})})})),n.onItemLabelChange&&n.onItemLabelChange(r,l))};return ve(()=>{e.set("label",w({},e.state.label,{isItemEditable:n.isItemEditable}))},[e,n.isItemEditable]),{instance:{setEditedItem:o,updateItemLabel:i},publicAPI:{setEditedItem:o,updateItemLabel:i}}};ue.itemPlugin=_i;ue.applyDefaultValuesToParams=({params:e})=>w({},e,{isItemEditable:e.isItemEditable??!1});ue.getInitialState=e=>({label:{isItemEditable:e.isItemEditable,editedItemId:null}});ue.params={onItemLabelChange:!0,isItemEditable:!0};function zi(e){return!!e&&e.length===1&&!!e.match(/\S/)}const $i=500,_n=({instance:e,store:n,params:o})=>{const i=Hn(),r=v.useRef({}),l=v.useRef(""),p=Di(),d=V(s=>{r.current=s(r.current)}),g=O(n,E.itemMetaLookup);v.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const s={},x=I=>{s[I.id]=I.label.toLowerCase()};Object.values(g).forEach(x),r.current=s},[g,o.getItemId,e]);const f=s=>{const x=Ne(n.state,s);return x===null?We(n.state):x},c=(s,x)=>{let I=null;const S={};let y=x.length>1?s:f(s);for(;I==null&&!S[y];)r.current[y]?.startsWith(x)?I=y:(S[y]=!0,y=f(y));return I},h=(s,x)=>{const I=x.toLowerCase(),S=`${l.current}${I}`,y=c(s,S);if(y!=null)return l.current=S,y;const k=c(s,I);return k!=null?(l.current=I,k):(l.current="",null)},u=s=>A.enabled(n.state)&&!E.isItemDisabled(n.state,s),m=s=>!E.isItemDisabled(n.state,s)&&z.isItemExpandable(n.state,s);return{instance:{updateLabelMap:d,handleItemKeyDown:async(s,x)=>{if(s.defaultMuiPrevented||s.altKey||vt(s.target,s.currentTarget))return;const I=s.ctrlKey||s.metaKey,S=s.key,y=A.isMultiSelectEnabled(n.state);switch(!0){case(S===" "&&u(x)):{s.preventDefault(),y&&s.shiftKey?e.expandSelectionRange(s,x):e.setItemSelection({event:s,itemId:x,keepExistingSelection:y,shouldBeSelected:void 0});break}case S==="Enter":{Ue(e,ue)&&le.isItemEditable(n.state,x)&&!le.isItemBeingEdited(n.state,x)?e.setEditedItem(x):m(x)?(e.setItemExpansion({event:s,itemId:x}),s.preventDefault()):u(x)&&(y?(s.preventDefault(),e.setItemSelection({event:s,itemId:x,keepExistingSelection:!0})):A.isItemSelected(n.state,x)||(e.setItemSelection({event:s,itemId:x}),s.preventDefault()));break}case S==="ArrowDown":{const k=Ne(n.state,x);k&&(s.preventDefault(),e.focusItem(s,k),y&&s.shiftKey&&u(k)&&e.selectItemFromArrowNavigation(s,x,k));break}case S==="ArrowUp":{const k=Mn(n.state,x);k&&(s.preventDefault(),e.focusItem(s,k),y&&s.shiftKey&&u(k)&&e.selectItemFromArrowNavigation(s,x,k));break}case(S==="ArrowRight"&&!i||S==="ArrowLeft"&&i):{if(I)return;if(z.isItemExpanded(n.state,x)){const k=Ne(n.state,x);k&&(e.focusItem(s,k),s.preventDefault())}else m(x)&&(e.setItemExpansion({event:s,itemId:x}),s.preventDefault());break}case(S==="ArrowLeft"&&!i||S==="ArrowRight"&&i):{if(I)return;if(m(x)&&z.isItemExpanded(n.state,x))e.setItemExpansion({event:s,itemId:x}),s.preventDefault();else{const k=E.itemParentId(n.state,x);k&&(e.focusItem(s,k),s.preventDefault())}break}case S==="Home":{u(x)&&y&&I&&s.shiftKey?e.selectRangeFromStartToItem(s,x):e.focusItem(s,We(n.state)),s.preventDefault();break}case S==="End":{u(x)&&y&&I&&s.shiftKey?e.selectRangeFromItemToEnd(s,x):e.focusItem(s,An(n.state)),s.preventDefault();break}case S==="*":{e.expandAllSiblings(s,x),s.preventDefault();break}case(String.fromCharCode(s.keyCode)==="A"&&I&&y&&A.enabled(n.state)):{e.selectAllNavigableItems(s),s.preventDefault();break}case(!I&&!s.shiftKey&&zi(S)):{p.clear();const k=h(x,S);k!=null?(e.focusItem(s,k),s.preventDefault()):l.current="",p.start($i,()=>{l.current=""});break}}}}}};_n.params={};function Ni(e){return e.replace(/["\\]/g,"\\$&")}const zn=v.createContext(null);function $n(e){const{children:n,itemId:o=null,idAttribute:i}=e,{instance:r,store:l,rootRef:p}=he(),d=v.useRef(new Map);v.useEffect(()=>{if(!p.current)return;const f=E.itemOrderedChildrenIds(l.state,o??null)??[],c=Ni(i??p.current.id);if(o!=null){const b=p.current.querySelector(`*[id="${c}"][role="treeitem"]`);if(b&&b.getAttribute("aria-expanded")==="false")return}const h=p.current.querySelectorAll(`${o==null?"":`*[id="${c}"] `}[role="treeitem"]:not(*[id="${c}"] [role="treeitem"] [role="treeitem"])`),u=Array.from(h).map(b=>d.current.get(b.id));(u.length!==f.length||u.some((b,s)=>b!==f[s]))&&r.setJSXItemsOrderedChildrenIds(o??null,u)});const g=v.useMemo(()=>({registerChild:(f,c)=>d.current.set(f,c),unregisterChild:f=>d.current.delete(f),parentId:o}),[o]);return t.jsx(zn.Provider,{value:g,children:n})}const Xt={dataSource:M(e=>e.lazyLoading?.dataSource),isItemLoading:M((e,n)=>e.lazyLoading?.dataSource.loading[n??Y]??!1),itemHasError:M((e,n)=>!!e.lazyLoading?.dataSource.errors[n??Y]),itemError:M((e,n)=>e.lazyLoading?.dataSource.errors[n??Y])},Pt=e=>Array.isArray(e)?e.length>0&&e.some(Pt):!!e,Bi=({itemId:e,children:n})=>{const{instance:o,store:i,publicAPI:r}=he(),l=O(i,z.isItemExpandable,e),p=O(i,Xt.isItemLoading,e),d=O(i,Xt.itemHasError,e),g=Pt(n)||l,f=O(i,z.isItemExpanded,e),c=O(i,xe.isItemFocused,e),h=O(i,A.isItemSelected,e),u=O(i,E.isItemDisabled,e),m=O(i,le.isItemBeingEdited,e),b=O(i,le.isItemEditable,e),s={expandable:g,expanded:f,focused:c,selected:h,disabled:u,editing:m,editable:b,loading:p,error:d},x=j=>{if(s.disabled)return;s.focused||o.focusItem(j,e);const T=A.isMultiSelectEnabled(i.state)&&(j.shiftKey||j.ctrlKey||j.metaKey);s.expandable&&!(T&&z.isItemExpanded(i.state,e))&&o.setItemExpansion({event:j,itemId:e})},I=j=>{if(s.disabled)return;!s.focused&&!s.editing&&o.focusItem(j,e),A.isMultiSelectEnabled(i.state)&&(j.shiftKey||j.ctrlKey||j.metaKey)?j.shiftKey?o.expandSelectionRange(j,e):o.setItemSelection({event:j,itemId:e,keepExistingSelection:!0}):o.setItemSelection({event:j,itemId:e,shouldBeSelected:!0})},S=j=>{const T=j.nativeEvent.shiftKey,L=A.isMultiSelectEnabled(i.state);L&&T?o.expandSelectionRange(j,e):o.setItemSelection({event:j,itemId:e,keepExistingSelection:L,shouldBeSelected:j.target.checked})},y=()=>{Ue(o,ue)&&(m?o.setEditedItem(null):o.setEditedItem(e))};return{interactions:{handleExpansion:x,handleSelection:I,handleCheckboxSelection:S,toggleItemEditing:y,handleSaveItemLabel:(j,T)=>{Ue(o,ue)&&le.isItemBeingEdited(i.state,e)&&(o.updateItemLabel(e,T),y(),o.focusItem(j,e))},handleCancelItemLabelEditing:j=>{Ue(o,ue)&&le.isItemBeingEdited(i.state,e)&&(y(),o.focusItem(j,e))}},status:s,publicAPI:r}},Ui=({props:e,rootRef:n,contentRef:o})=>{const{instance:i,store:r}=he(),{children:l,disabled:p=!1,label:d,itemId:g,id:f}=e,c=v.useContext(zn);if(c==null)throw new Error(["MUI X: Could not find the Tree View Children Item context.","It looks like you rendered your component outside of a SimpleTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));const{registerChild:h,unregisterChild:u,parentId:m}=c,b=Pt(l),s=v.useRef(null),x=Ke(s,o),I=O(r,Fe.treeId);return ve(()=>{const S=Ye({itemId:g,treeId:I,id:f});return h(S,g),()=>{u(S),u(S)}},[r,i,h,u,g,f,I]),ve(()=>i.insertJSXItem({id:g,idAttribute:f,parentId:m,expandable:b,disabled:p}),[i,m,g,b,p,f]),v.useEffect(()=>{if(d)return i.mapLabelFromJSX(g,(s.current?.textContent??"").toLowerCase())},[i,g,d]),{contentRef:x,rootRef:n}},Ae=({instance:e,store:n})=>{e.preventItemUpdates();const o=V(l=>{if(n.state.items.itemMetaLookup[l.id]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${l.id}"`].join(`
`));return n.set("items",w({},n.state.items,{itemMetaLookup:w({},n.state.items.itemMetaLookup,{[l.id]:l}),itemModelLookup:w({},n.state.items.itemModelLookup,{[l.id]:{id:l.id,label:l.label??""}})})),()=>{const p=w({},n.state.items.itemMetaLookup),d=w({},n.state.items.itemModelLookup);delete p[l.id],delete d[l.id],n.set("items",w({},n.state.items,{itemMetaLookup:p,itemModelLookup:d}))}}),i=(l,p)=>{const d=l??Y;n.set("items",w({},n.state.items,{itemOrderedChildrenIdsLookup:w({},n.state.items.itemOrderedChildrenIdsLookup,{[d]:p}),itemChildrenIndexesLookup:w({},n.state.items.itemChildrenIndexesLookup,{[d]:kn(p)})}))},r=V((l,p)=>(e.updateLabelMap(d=>(d[l]=p,d)),()=>{e.updateLabelMap(d=>{const g=w({},d);return delete g[l],g})}));return{instance:{insertJSXItem:o,setJSXItemsOrderedChildrenIds:i,mapLabelFromJSX:r}}};Ae.itemPlugin=Ui;Ae.wrapItem=({children:e,itemId:n,idAttribute:o})=>{const i=v.useContext(ke);return t.jsx($n,{itemId:n,idAttribute:o,children:t.jsx(ke.Provider,{value:i+1,children:e})})};Ae.wrapRoot=({children:e})=>t.jsx($n,{itemId:null,idAttribute:null,children:t.jsx(ke.Provider,{value:0,children:e})});Ae.params={};const Vi=[Re,Ze,Me,kt,_n,Ae],qi=["slots","slotProps"],Gi=bn(),Ki=e=>{const{classes:n}=e;return v.useMemo(()=>sn({root:["root"],item:["item"],itemContent:["itemContent"],itemGroupTransition:["itemGroupTransition"],itemIconContainer:["itemIconContainer"],itemLabel:["itemLabel"],itemCheckbox:["itemCheckbox"]},To,n),[n])},Hi=Q("ul",{name:"MuiSimpleTreeView",slot:"Root"})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"}),Wi=[],Xi=v.forwardRef(function(n,o){const i=Gi({props:n,name:"MuiSimpleTreeView"}),{slots:r,slotProps:l}=i,p=Te(i,qi),{getRootProps:d,contextValue:g}=gi({plugins:Vi,rootRef:o,props:w({},p,{items:Wi})}),f=Ki(i),c=r?.root??Hi,h=W({elementType:c,externalSlotProps:l?.root,className:f.root,getSlotProps:d,ownerState:i});return t.jsx(bi,{contextValue:g,classes:f,slots:r,slotProps:l,children:t.jsx(c,w({},h))})}),Ji=(e,n,o)=>typeof o=="function"?o(e,n):o,Yi=e=>{const{runItemPlugins:n,instance:o,publicAPI:i,store:r}=he(),l=v.useContext(ke),p=O(r,Ji,e.itemId,l),{id:d,itemId:g,label:f,children:c,rootRef:h}=e,{rootRef:u,contentRef:m,propsEnhancers:b}=n(e),{interactions:s,status:x}=Bi({itemId:g,children:c}),I=v.useRef(null),S=v.useRef(null),y=Ke(h,u,I),k=Ke(m,S),D=v.useRef(null),_=O(r,Fe.treeId),j=O(r,A.isCheckboxSelectionEnabled),T=Ye({itemId:g,treeId:_,id:d}),L=O(r,xe.isItemTheDefaultFocusableItem,g),B={rootRefObject:I,contentRefObject:S,interactions:s},ee=P=>C=>{P.onFocus?.(C),!C.defaultMuiPrevented&&!x.focused&&E.canItemBeFocused(r.state,g)&&C.currentTarget===C.target&&o.focusItem(C,g)},ge=P=>C=>{if(P.onBlur?.(C),C.defaultMuiPrevented)return;const N=o.getItemDOMElement(g);x.editing||C.relatedTarget&&vt(C.relatedTarget,N)&&(C.target&&C.target?.dataset?.element==="labelInput"&&vt(C.target,N)||C.relatedTarget?.dataset?.element==="labelInput")||o.removeFocusedItem()},we=P=>C=>{P.onKeyDown?.(C),!(C.defaultMuiPrevented||C.target?.dataset?.element==="labelInput")&&o.handleItemKeyDown(C,g)},Le=P=>C=>{P.onDoubleClick?.(C),!C.defaultMuiPrevented&&s.toggleItemEditing()},Qe=P=>C=>{P.onClick?.(C),o.handleItemClick(C,g),!(C.defaultMuiPrevented||D.current?.contains(C.target))&&(z.triggerSlot(r.state)==="content"&&s.handleExpansion(C),j||s.handleSelection(C))},Oe=P=>C=>{P.onMouseDown?.(C),!C.defaultMuiPrevented&&(C.shiftKey||C.ctrlKey||C.metaKey||x.disabled)&&C.preventDefault()},et=P=>C=>{P.onClick?.(C),!C.defaultMuiPrevented&&z.triggerSlot(r.state)==="iconContainer"&&s.handleExpansion(C)};return{getContextProviderProps:()=>({itemId:g,id:d}),getRootProps:(P={})=>{const C=w({},X(e),X(P)),N=w({},C,{ref:y,role:"treeitem",tabIndex:L?0:-1,id:T,"aria-expanded":x.expandable?x.expanded:void 0,"aria-disabled":x.disabled||void 0},P,{style:w({},P.style??{},{"--TreeView-itemDepth":p}),onFocus:ee(C),onBlur:ge(C),onKeyDown:we(C)}),pe=b.root?.(w({},B,{externalEventHandlers:C}))??{};return w({},N,pe)},getContentProps:(P={})=>{const C=X(P),N=w({},C,P,{ref:k,onClick:Qe(C),onMouseDown:Oe(C),status:x});["expanded","selected","focused","disabled","editing","editable"].forEach(Dt=>{x[Dt]&&(N[`data-${Dt}`]="")});const pe=b.content?.(w({},B,{externalEventHandlers:C}))??{};return w({},N,pe)},getGroupTransitionProps:(P={})=>{const C=X(P);return w({},C,{unmountOnExit:!0,component:"ul",role:"group",in:x.expanded,children:c},P)},getIconContainerProps:(P={})=>{const C=X(P);return w({},C,P,{onClick:et(C)})},getCheckboxProps:(P={})=>{const C=X(P),N=w({},C,{ref:D,"aria-hidden":!0},P),pe=b.checkbox?.(w({},B,{externalEventHandlers:C}))??{};return w({},N,pe)},getLabelProps:(P={})=>{const C=w({},X(P)),N=w({},C,{children:f},P,{onDoubleClick:Le(C)}),pe=b.label?.(w({},B,{externalEventHandlers:C}))??{};return w({},pe,N)},getLabelInputProps:(P={})=>{const C=X(P),N=b.labelInput?.(w({},B,{externalEventHandlers:C}))??{};return w({},P,N)},getDragAndDropOverlayProps:(P={})=>{const C=X(P),N=b.dragAndDropOverlay?.(w({},B,{externalEventHandlers:C}))??{};return w({},P,N)},getErrorContainerProps:(P={})=>{const C=X(P);return w({},C,P)},getLoadingContainerProps:(P={})=>{const C=X(P);return w({size:"12px",thickness:6},C,P)},rootRef:y,status:x,publicAPI:i}};function Zi(e){return on("MuiTreeItem",e)}rn("MuiTreeItem",["root","content","groupTransition","iconContainer","label","checkbox","labelInput","dragAndDropOverlay","errorIcon","loadingIcon","expanded","selected","focused","disabled","editable","editing"]);const Qi=an(t.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),er=an(t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),tr=["ownerState"];function ht(e,n,o){return e!==void 0?e:n!==void 0?n:o}function nr(e){const{slots:n,slotProps:o,status:i}=e,{slots:r,slotProps:l}=En(),p={collapseIcon:ht(n?.collapseIcon,r.collapseIcon,er),expandIcon:ht(n?.expandIcon,r.expandIcon,Qi),endIcon:ht(n?.endIcon,r.endIcon),icon:n?.icon};let d;p?.icon?d="icon":i.expandable?i.expanded?d="collapseIcon":d="expandIcon":d="endIcon";const g=p[d],f=W({elementType:g,externalSlotProps:h=>w({},zt(l[d],h),zt(o?.[d],h)),ownerState:{}}),c=Te(f,tr);return g?t.jsx(g,w({},c)):null}const or=Q("div",{name:"MuiTreeItemDragAndDropOverlay",slot:"Root",shouldForwardProp:e=>jt(e)&&e!=="action"})(({theme:e})=>({position:"absolute",left:0,display:"flex",top:0,bottom:0,right:0,pointerEvents:"none",variants:[{props:{action:"make-child"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderRadius:e.shape.borderRadius,backgroundColor:e.vars?`rgba(${e.vars.palette.primary.darkChannel} / ${e.vars.palette.action.focusOpacity})`:ye(e.palette.primary.dark,e.palette.action.focusOpacity)}},{props:{action:"reorder-above"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderTop:`1px solid ${(e.vars||e).palette.action.active}`}},{props:{action:"reorder-below"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))",borderBottom:`1px solid ${(e.vars||e).palette.action.active}`}},{props:{action:"move-to-parent"},style:{marginLeft:"calc(var(--TreeView-indentMultiplier) * calc(var(--TreeView-itemDepth) - 1))",borderBottom:`1px solid ${(e.vars||e).palette.action.active}`}}]}));function ir(e){return e.action==null?null:t.jsx(or,w({},e))}function rr(e){const{children:n,itemId:o,id:i}=e,{wrapItem:r,instance:l,store:p}=he(),d=O(p,Fe.treeId),g=Ye({itemId:o,treeId:d,id:i});return t.jsx(v.Fragment,{children:r({children:n,itemId:o,instance:l,idAttribute:g})})}const sr=Q("input",{name:"MuiTreeItem",slot:"LabelInput"})(({theme:e})=>w({},e.typography.body1,{width:"100%",backgroundColor:(e.vars||e).palette.background.paper,borderRadius:e.shape.borderRadius,border:"none",padding:"0 2px",boxSizing:"border-box","&:focus":{outline:`1px solid ${(e.vars||e).palette.primary.main}`}})),ar=["visible"],lr=["id","itemId","label","disabled","children","slots","slotProps","classes"],cr=bn(),dr=Q("li",{name:"MuiTreeItem",slot:"Root"})({listStyle:"none",margin:0,padding:0,outline:0}),ur=Q("div",{name:"MuiTreeItem",slot:"Content",shouldForwardProp:e=>jt(e)&&e!=="status"})(({theme:e})=>({padding:e.spacing(.5,1),paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`,borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",position:"relative",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&[data-disabled]":{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent",cursor:"auto"},"&[data-focused]":{backgroundColor:(e.vars||e).palette.action.focus},"&[data-selected]":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ye(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ye(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ye(e.palette.primary.main,e.palette.action.selectedOpacity)}}},"&[data-selected][data-focused]":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ye(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}})),pr=Q("div",{name:"MuiTreeItem",slot:"Label",shouldForwardProp:e=>jt(e)&&e!=="editable"})(({theme:e})=>w({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative",overflow:"hidden"},e.typography.body1,{variants:[{props:({editable:n})=>n,style:{paddingLeft:"2px"}}]})),fr=Q("div",{name:"MuiTreeItem",slot:"IconContainer"})({width:16,display:"flex",flexShrink:0,justifyContent:"center",position:"relative",cursor:"inherit","& svg":{fontSize:18}}),mr=Q(Jn,{name:"MuiTreeItem",slot:"GroupTransition",overridesResolver:(e,n)=>n.groupTransition})({margin:0,padding:0}),xr=Q("div",{name:"MuiTreeItem",slot:"ErrorIcon"})({position:"absolute",right:-3,width:7,height:7,borderRadius:"50%",backgroundColor:"red"}),hr=Q(Xn,{name:"MuiTreeItem",slot:"LoadingIcon"})({color:"text.primary"}),gr=Q(v.forwardRef((e,n)=>{const{visible:o}=e,i=Te(e,ar);return o?t.jsx(Wn,w({},i,{ref:n})):null}),{name:"MuiTreeItem",slot:"Checkbox"})({padding:0}),br=e=>{const{classes:n}=En(),o=w({},e,{root:J(e?.root,n.root),content:J(e?.content,n.itemContent),iconContainer:J(e?.iconContainer,n.itemIconContainer),checkbox:J(e?.checkbox,n.itemCheckbox),label:J(e?.label,n.itemLabel),groupTransition:J(e?.groupTransition,n.itemGroupTransition),labelInput:J(e?.labelInput,n.itemLabelInput),dragAndDropOverlay:J(e?.dragAndDropOverlay,n.itemDragAndDropOverlay),errorIcon:J(e?.errorIcon,n.itemErrorIcon),loadingIcon:J(e?.loadingIcon,n.itemLoadingIcon)});return sn({root:["root"],content:["content"],iconContainer:["iconContainer"],checkbox:["checkbox"],label:["label"],groupTransition:["groupTransition"],labelInput:["labelInput"],dragAndDropOverlay:["dragAndDropOverlay"],errorIcon:["errorIcon"],loadingIcon:["loadingIcon"],expanded:["expanded"],editing:["editing"],editable:["editable"],selected:["selected"],focused:["focused"],disabled:["disabled"]},Zi,o)},be=v.forwardRef(function(n,o){const i=cr({props:n,name:"MuiTreeItem"}),{id:r,itemId:l,label:p,disabled:d,children:g,slots:f={},slotProps:c={},classes:h}=i,u=Te(i,lr),{getContextProviderProps:m,getRootProps:b,getContentProps:s,getIconContainerProps:x,getCheckboxProps:I,getLabelProps:S,getGroupTransitionProps:y,getLabelInputProps:k,getDragAndDropOverlayProps:D,getErrorContainerProps:_,getLoadingContainerProps:j,status:T}=Yi({id:r,itemId:l,children:g,label:p,disabled:d}),L=br(h),B=f.root??dr,ee=W({elementType:B,getSlotProps:b,externalForwardedProps:u,externalSlotProps:c.root,additionalProps:{ref:o},ownerState:{},className:L.root}),ge=f.content??ur,we=W({elementType:ge,getSlotProps:s,externalSlotProps:c.content,ownerState:{},className:J(L.content,T.expanded&&L.expanded,T.selected&&L.selected,T.focused&&L.focused,T.disabled&&L.disabled,T.editing&&L.editing,T.editable&&L.editable)}),Le=f.iconContainer??fr,Qe=W({elementType:Le,getSlotProps:x,externalSlotProps:c.iconContainer,ownerState:{},className:L.iconContainer}),Oe=f.label??pr,et=W({elementType:Oe,getSlotProps:S,externalSlotProps:c.label,ownerState:{},className:L.label}),tt=f.checkbox??gr,Rt=W({elementType:tt,getSlotProps:I,externalSlotProps:c.checkbox,ownerState:{},className:L.checkbox}),nt=f.groupTransition??void 0,Mt=W({elementType:nt,getSlotProps:y,externalSlotProps:c.groupTransition,ownerState:{},className:L.groupTransition}),ot=f.labelInput??sr,At=W({elementType:ot,getSlotProps:k,externalSlotProps:c.labelInput,ownerState:{},className:L.labelInput}),it=f.dragAndDropOverlay??ir,Lt=W({elementType:it,getSlotProps:D,externalSlotProps:c.dragAndDropOverlay,ownerState:{},className:L.dragAndDropOverlay}),rt=f.errorIcon??xr,Ot=W({elementType:rt,getSlotProps:_,externalSlotProps:c.errorIcon,ownerState:{},className:L.errorIcon}),st=f.loadingIcon??hr,P=W({elementType:st,getSlotProps:j,externalSlotProps:c.loadingIcon,ownerState:{},className:L.loadingIcon});return t.jsx(rr,w({},m(),{children:t.jsxs(B,w({},ee,{children:[t.jsxs(ge,w({},we,{children:[t.jsxs(Le,w({},Qe,{children:[T.error&&t.jsx(rt,w({},Ot)),T.loading?t.jsx(st,w({},P)):t.jsx(nr,{status:T,slots:f,slotProps:c})]})),t.jsx(tt,w({},Rt)),T.editing?t.jsx(ot,w({},At)):t.jsx(Oe,w({},et)),t.jsx(it,w({},Lt))]})),g&&t.jsx(mr,w({as:nt},Mt))]}))}))}),Ft="http://192.168.88.239:8083",Ir=async(e,n)=>(await yt.put(Ft+e,n)).data,vr=async(e,n)=>(await yt.post(Ft+e,n)).data,Sr=async e=>(await yt.get(Ft+e)).data,St={alteraSenha:async e=>await Ir("/portaria/v1/usuario/alterarSenha",e),handlePermission:async(e,n)=>await vr(`/module/add/${n}`,e),ListaModulo:async()=>await Sr("/module/lista")},wr=oo`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,ze={Main:a.div`
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 20px;
    }
  `,HeaderCard:a.div`
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
  `,TitleSection:a.div`
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
  `,FilterArea:a.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:a.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:a.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:e})=>e?`${wr} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:a.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:a.select`
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
  `,Container:a.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,Card:a.div`
    background: #fff;
    border-radius: 12px;
    padding: 15px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

    @media (min-width: 768px) {
      padding: 24px;
      margin-bottom: 20px;
    }
  `,CardHeaderPrincipal:a.div`
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
  `,TableWrapper:a.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:a.table`
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
  `,Thead:a.thead``,Tbody:a.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:a.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:a.button`
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
  `};function jr({listaFiliais:e,carregarDadosLogistico:n}){return t.jsx(ze.FilterArea,{children:t.jsxs(ze.SelectGroup,{children:[t.jsx(ze.Label,{children:"Mudar filial:"}),t.jsxs(ze.Select,{onChange:o=>n(o.target.value),children:[t.jsx("option",{value:"",children:"Selecione uma filial..."}),e.map((o,i)=>t.jsxs("option",{value:o?.numeroFilial,children:[o?.numeroFilial," - ",o?.nome]},i))]})]})})}function yr({handleReset:e,usuario:n,modulos:o}){const[i,r]=v.useState({}),l=s=>{r(x=>({...x,[s]:!x[s]}))},[p,d]=v.useState([]);v.useEffect(()=>{(async()=>{const x=await St.ListaModulo();x&&d(x)})()},[]);const[g,f]=v.useState(""),c=async()=>{console.log(g);const s={mod:{filial:g},lista:Object.entries(i).map(([I,S])=>({permissionId:Number(I),ativo:S}))},x=await St.handlePermission(s,n?.id);x.msg&&Z(x.msg,"success"),e()},h=v.useRef(!1),[u,m]=v.useState([]),b=v.useCallback(async()=>{try{const s=await Je.lista();s?.filial&&m(s.filial)}catch{Z("Erro ao carregar filiais","error")}},[]);return v.useEffect(()=>{if(!o||o.length===0){r({});return}const s={};o.forEach(x=>{s[x.id]=!0}),r(s),h.current=!0,b()},[n?.id]),t.jsxs(t.Fragment,{children:[t.jsx(Yn,{sx:{minHeight:352,minWidth:250},children:t.jsxs(Xi,{onSelectedItemsChange:(s,x)=>{s?.code==="Space"&&(s.preventDefault(),l(Number(x)))},children:[t.jsx(be,{sx:{fontSize:13,fontFamily:"sans-serif"},itemId:"grid",label:"Acess - "+n?.nome,children:p?.map(s=>t.jsx(be,{itemId:s.id.toString(),label:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},onClick:x=>{x.stopPropagation(),l(s.id)},children:[t.jsx("input",{type:"checkbox",checked:!!i[s.id],readOnly:!0}),t.jsx("span",{style:{fontFamily:"sans-serif",fontSize:13},children:s.titulo})]})},s.id))}),t.jsx(be,{itemId:"grid02",label:"Perfil",children:t.jsx(be,{itemId:n?.perfil.nome.toString(),label:n?.perfil?.nome})}),t.jsx(be,{itemId:"grid03",label:"Filial Atual - "+n?.filial,children:t.jsx(be,{itemId:n?.filial.toString(),label:t.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:t.jsx(jr,{listaFiliais:u,carregarDadosLogistico:s=>f(s)})})})})]})}),t.jsxs(ie.area_btn,{children:[t.jsx(ce,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:c}),t.jsx(ce,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:e})]})]})}const Cr=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(!1),[r,l]=v.useState(),p=async g=>{g.preventDefault();const f=await G.BuscaPefilUsuario(e);f.usuario&&(i(!0),l(f.usuario))},d=()=>{i(!1),n("")};return t.jsxs(Ie,{children:[t.jsxs(ie.form,{onSubmit:p,children:[t.jsx("div",{style:{marginBottom:10},children:t.jsx(ie.container_titulo,{children:"Inclusão de Acesso"})}),t.jsx(ie.area_campo,{children:t.jsxs(ie.CamposInput,{children:[t.jsx(ie.label,{children:"Email do usuario"}),t.jsx(ie.input,{value:e,type:"search",autoFocus:!0,onChange:g=>n(g.target.value)})]})})]}),o&&t.jsx(t.Fragment,{children:t.jsx(yr,{modulos:r?.acess,handleReset:d,usuario:r})})]})},Er=()=>t.jsx(t.Fragment,{children:t.jsx(ie.container,{children:t.jsx(ie.container_int,{children:t.jsx(ie.conainter_right,{children:t.jsx(Cr,{})})})})}),oe={container:a.div`
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
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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
      `,trBTN:a.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1px;
        `,ativo:a.div`
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: ${({ativo:e})=>e?"green":"red"};
        `},kr=()=>{const[e,n]=v.useState(""),[o,i]=v.useState(null),[r,l]=v.useState(!1),[p,d]=v.useState(!1),[g,f]=v.useState(""),c=async()=>{const b=await G.BuscaPefilUsuario(e);b&&i(b?.usuario)},h=b=>{f(b),d(!1),l(!0)},u=b=>{f(b),d(!0),l(!1)},m=async b=>{const s=await G.AdicionarPefil(g,b.idPerfil,null);s&&(l(!1),Z(s.msg,"success"),setTimeout(()=>{c()},1e3))};return t.jsx(t.Fragment,{children:t.jsxs(oe.container,{children:[t.jsx(oe.titulo,{children:"Perfil Usuario"}),t.jsxs(oe.FormSub,{children:[t.jsxs(oe.CamposInput,{children:[t.jsx(oe.label,{children:"Email"}),t.jsx(oe.Campos,{placeholder:"@exmplo.com",type:"email",onChange:b=>n(b.target.value),onKeyDown:b=>{b.key==="Enter"&&c()}})]}),o?t.jsx(oe.TableContainer,{children:t.jsxs(oe.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Nome"}),t.jsx("th",{children:"Perfil"}),t.jsx("th",{children:"Status"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:o?.id}),t.jsx("td",{children:o?.nome}),t.jsx("td",{children:o?.perfil.nome}),t.jsx("td",{children:o?.ativo?t.jsx(oe.ativo,{ativo:o?.ativo}):"DESTIVADO"}),t.jsx("td",{children:t.jsxs(oe.trBTN,{children:[t.jsx(re,{onClick:()=>u(o?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(nn,{})}),t.jsx(re,{onClick:()=>h(o?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:t.jsx(wt,{})})]})})]})})]})}):"Nada encontrado..."]}),r&&t.jsx(gn,{ID:void 0,handleConfirm:m,handleCancel:()=>l(!1),message:"",ativoBtn:!1}),p&&t.jsx(fn,{handleConfirm:function(){throw new Error("Function not implemented.")},handleCancel:()=>d(!1),message:"",ativoBtn:!1})]})})},$={container:a.div`
        height: 100%;
        padding:32px 156px;
        @media screen  and (max-width: 760px){
            padding:32px 5px;

                
              }

    `,container_int:a.div`
              height:calc(100vh - 62px);
              display: flex;
              gap:20px;
              @media screen  and (max-width:1080px){
                flex-direction: column;
                
              }


    `,Erros:a.div`
         color: #ff4d4f;
          font-size: 12px;
          margin: 0px 10px;
         
        
        `,container_left:a.section`
    flex: 1;
    @media screen  and (max-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }

    padding: 20px;
    border-radius: 10px;
    `,conainter_right:a.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
        border-radius: 10px;


    flex: 2;
    `,container_usuarioArea:a.div`
    display: flex;
    gap: 10px;
    `,container_img:a.div`
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
        
    `,container_titulo:a.div`
     margin:0 0 8px 0;
    font-size:18px;
    font-weight: 600;
        color:#1565c0;
     `,area_infor:a.div`
     width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
     `,meta:a.div`
     margin-top: 14px;
      color: #6b7280;
       font-size: 14;
     display: flex;
     flex-direction: column;
     `,span:a.span`
       padding: 5px 0;
     `,small:a.small`
      margin:0; color:#6b7280; font-size:13px; 
     `,area_forma:a.div`
     display: flex;
     flex-direction: column;
     height: 100vh;
     overflow-y: auto;
      gap: 10px;
      scrollbar-width: thin;
     `,input:a.input`
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
     `,CamposInput:a.div`
     display: flex;
    width: 100%;
    flex-direction: column;
     margin: 5px 0;
    `,area_campo:a.div`
        display: flex;
        gap: 10px;
     `,area_btn:a.div`
        display: flex;
                width: 150px;

        gap: 10px;
     `,label:a.label`
      display:block;
    font-size:13px;
    color:#0f1724;
    margin-bottom:2px;
     `,nomeFilial:a.div`
      text-align:start; margin-top:2px; color:#888; font-size:13px;
     `},Tr=({handle:e})=>{const{register:n,handleSubmit:o,reset:i,formState:{errors:r}}=Se(),l=async d=>{const g=await Je.cadastro(d);g.msg&&(Z(g.msg,"success"),e(),i())},p=()=>{i()};return t.jsx(Ie,{children:t.jsxs("form",{onSubmit:o(l),children:[t.jsx("div",{style:{marginBottom:10},children:t.jsx($.container_titulo,{children:"Inclusão de Filial"})}),t.jsxs($.area_campo,{children:[t.jsxs($.CamposInput,{children:[t.jsx($.label,{children:"Nome da Filial"}),t.jsx($.input,{hasError:!!r.nome,type:"text",...n("nome",{required:"Nome da filial e obrigatorio"}),placeholder:"Nome da nova filial"})]}),t.jsxs($.CamposInput,{children:[t.jsx($.label,{children:"Numero da nova Filial"}),t.jsx($.input,{type:"text",...n("numeroFilial",{required:"Informe o número da filial",minLength:{value:2,message:"Mínimo de 2 dígitos"},maxLength:{value:5,message:"Máximo de 5 dígitos"},pattern:{value:/^[0-9]+$/,message:"Apenas números são permitidos"}}),placeholder:"Numero da Filial"})]})]}),t.jsxs($.Erros,{children:[r.nome&&t.jsx("p",{children:r.nome.message}),r.numeroFilial&&t.jsx("p",{children:r?.numeroFilial.message})]}),t.jsxs($.area_btn,{children:[t.jsx(ce,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:o(l)}),t.jsx(ce,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:p})]})]})})},Pr=()=>{const[e,n]=v.useState([]),o=async()=>{const i=await Je.lista();i?.filial&&n(i?.filial)};return v.useEffect(()=>{o()},[]),t.jsx(t.Fragment,{children:t.jsx($.container,{children:t.jsxs($.container_int,{children:[t.jsx($.conainter_right,{children:t.jsx(Tr,{handle:o})}),t.jsxs(Ie,{children:[t.jsx($.container_titulo,{children:"Filias Inclusas"}),e.length===0?t.jsx(t.Fragment,{children:"Sem filiais"}):t.jsx($.area_forma,{children:e.map(i=>t.jsxs($.CamposInput,{children:[t.jsxs($.label,{children:["Filial ",i?.numeroFilial]}),t.jsx($.nomeFilial,{children:i?.nome})]},i?.id))})]})]})})})},R={container:a.div`
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
  

    
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    `,label:a.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 5px;        // dá um respiro entre label e input
    display: inline-block;
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
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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


    `,SelectItens:a.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,TextArea:a.textarea`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,Options:a.option``,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
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
    `},Fr=[{nome:"GERENTE OPERACIONAL"},{nome:"GERENTE DE LOGISTICA"},{nome:"GERENTE DE TRANSPORTE"},{nome:"GERENTE DE MANUTENÇÃO"},{nome:"PROGRAMADOR"},{nome:"FISCAL"},{nome:"DIRETOR"},{nome:"SUPERVISOR"},{nome:"COORDENADOR"},{nome:"PRESIDENTE"}];function Rr(){const e=un(),{register:n,handleSubmit:o,formState:{errors:i},reset:r,watch:l}=Se(),p=l("password"),d=async s=>{s.usuarioLogado=e;const{repeteSenha:x,...I}=s,S=await G.cadastroUsuaro(I);S&&(Z(S.msg,"success"),r())},[g,f]=v.useState(),[c,h]=v.useState([]),u=async()=>{const s=await Je.lista();s?.filial&&h(s?.filial)};v.useEffect(()=>{(async()=>{const x=await G.listaPerfil();x&&x.perfis&&f(x.perfis)})(),u()},[]);const m=v.useRef(null),b=(s,x)=>{s.key==="Enter"&&x?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(R.container,{children:[t.jsx(R.titulo,{children:"Cadastro de Usuario"}),t.jsxs(R.FormSub,{onSubmit:o(d),children:[t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Nome *"}),t.jsx(R.Campos,{hasError:!!i.nome,type:"text",autoComplete:"current-password",placeholder:"Nome completo",...n("nome",{required:"Nome E obrigatorio"}),onKeyDown:s=>b(s,m)}),t.jsx(R.Erros,{children:i.nome&&t.jsx("p",{children:i.nome.message})})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Email *"}),t.jsx(R.Campos,{hasError:!!i.email,placeholder:"Nome Completo",type:"text",autoComplete:"current-password",...n("email",{required:"Email e obrigatório",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email inválido. Ex: usuario@dominio.com"}}),onKeyDown:s=>b(s)}),t.jsx(R.Erros,{children:i.email&&t.jsx("p",{children:i.email.message})})]}),t.jsx(R.Select,{children:t.jsxs(R.leftArea,{children:[t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Ocupaçao"}),t.jsxs(R.SelectItens,{...n("ocupacaoOperacional",{required:"Selecione ocupação"}),children:[t.jsx(R.Options,{value:"",children:"Selecione"}),Fr.flatMap((s,x)=>t.jsx(R.Options,{value:s.nome,children:s.nome},x))]}),i.ocupacaoOperacional&&t.jsx(R.Erros,{children:t.jsx("p",{children:i.ocupacaoOperacional.message})})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Filial"}),t.jsxs(R.SelectItens,{...n("filial",{required:"Selecione a filial"}),children:[t.jsx(R.Options,{value:"",children:"Selecione filial"}),c.flatMap(s=>t.jsxs(R.Options,{value:s?.numeroFilial,children:[s?.numeroFilial," - ",s?.nome]},s.id)),"                                "]}),i.filial&&t.jsx(R.Erros,{children:t.jsx("p",{children:i.filial.message})})]})]})}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Perfil"}),t.jsxs(R.SelectItens,{...n("perfilId",{required:"Selecione o perfil"}),children:[t.jsx(R.Options,{value:"",children:"Selecione o perfil"}),g?.flatMap(s=>t.jsx(R.Options,{value:s.id,children:s.nome},s?.id))]}),i.perfilId&&t.jsx(R.Erros,{children:t.jsx("p",{children:i.perfilId.message})})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Senha *"}),t.jsx(R.Campos,{hasError:!!i.password,type:"text",autoComplete:"current-password",placeholder:"Senha",...n("password",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),onKeyDown:s=>b(s,m)}),t.jsx(R.Erros,{children:i.password&&t.jsx("p",{children:i.password.message})})]}),t.jsxs(R.CamposInput,{children:[t.jsx(R.label,{children:"Repete Senha *"}),t.jsx(R.Campos,{hasError:!!i.repeteSenha,type:"text",autoComplete:"current-password",placeholder:"Confirme senha",...n("repeteSenha",{required:"Senha E obrigatorio",validate:s=>s===p||"Senhas não conferem"}),onKeyDown:s=>b(s,m)}),t.jsx(R.Erros,{children:i.repeteSenha&&t.jsx("p",{children:i.repeteSenha.message})})]}),t.jsx(R.BtnLogin,{children:"Cadastrar Usuario"})]})]})})}const H={container:a.div`
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
  

    
  `,titulo:a.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:a.form`
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
    width: 100%;
    position: relative;
     margin: 5px 0;
    `,Select:a.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:a.input.withConfig({shouldForwardProp:e=>e!=="hasError"})`
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


    `,SelectItens:a.select`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,TextArea:a.textarea`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:transparent;
        background-color:#FFF;

    border-radius: 5px;
    border: 1px solid ${({hasError:e})=>e?"#ff4d4f":"#ccc"};
    
    `,Options:a.option``,Erros:a.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
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
    `},Mr=()=>{const{register:e,handleSubmit:n,formState:{errors:o},reset:i,watch:r}=Se(),l=r("password"),p=async f=>{const{repeteSenha:c,...h}=f,u=await G.cadastroUsuaro(h);u&&(Z(u.msg,"success"),i())},d=v.useRef(null),g=(f,c)=>{f.key==="Enter"&&c?.current?.focus()};return t.jsx(t.Fragment,{children:t.jsxs(H.container,{children:[t.jsx(H.titulo,{children:"Alterar senha de Usuario"}),t.jsxs(H.FormSub,{onSubmit:n(p),children:[t.jsxs(H.CamposInput,{children:[t.jsx(H.label,{children:"Senha *"}),t.jsx(H.Campos,{hasError:!!o.password,type:"text",autoComplete:"current-password",placeholder:"Senha",...e("password",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),onKeyDown:f=>g(f,d)}),t.jsx(H.Erros,{children:o.password&&t.jsx("p",{children:o.password.message})})]}),t.jsxs(H.CamposInput,{children:[t.jsx(H.label,{children:"Repete Senha *"}),t.jsx(H.Campos,{hasError:!!o.repeteSenha,type:"text",autoComplete:"current-password",placeholder:"Repita a senha",...e("repeteSenha",{required:"Senha E obrigatorio",validate:f=>f===l||"Senhas não conferem"}),onKeyDown:f=>g(f,d)}),t.jsx(H.Erros,{children:o.repeteSenha&&t.jsx("p",{children:o.repeteSenha.message})})]}),t.jsx(H.BtnLogin,{children:"Alterar senha"})]})]})})},ae={container:a.div`
height: 100vh;
  display: flex;
  flex-direction: column;

    `,main:a.div`
     flex: 1;
  display: flex;
  background: #f4f6f9;      
;

    `,container_2:a.div`
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
  `,scroll:a.div`
    max-width: 1220px;
    width: 100%;
    margin:50px auto;
  `,titulo:a.h2`
    font-size: 16px;
    letter-spacing: 0.5px;
    margin: 20px 0 16px 10px;
    color:#444;
     @media screen and (min-width: 560px){
        margin: 20px 0 16px 10px;
   } 
  `,grid:a.div`
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

  `,link:a.div`
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

  `,card_title:a.div`
            font-size: 16px;
            font-family: "inter",inherit, Helvetica, sans-serif;
            color: #443e3e;
            margin: 10px 0;
            margin-bottom: 8px;
  `,card_desc:a.div`
  font-size: 13px;
  color: #555;
         @media screen and (max-width: 560px){
        display: none;
   } 

  `,disabledCard:a.div`
    padding: 20px;
  border-radius: 14px;
  background: #3a3030;
  border: 1px solid #444;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`,small:a.small`
    color: #c9c9c9;
    display: block;
    margin-bottom: 8px;
    font-size: 0.75rem;
    font-weight: 500;
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
    `,iconSemItens:a(mn)`
      font-size: 60px;
      color: #999;
    `,footer:a.footer`
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #c09a9a;
  padding: 10px;
  `},Ar=()=>{const e=Ve(),n=Xe(),o=p=>{n(p,{replace:!1})},[i,r]=v.useState([]);v.useEffect(()=>{window.scroll(0,0),(async()=>{const d=await cn.modulo(e?.id);d&&r(d?.acess)})()},[]),v.useEffect(()=>{i?.length===1&&n(i[0].router,{replace:!1})},[i]);function l(p,d){switch(p){case"PORTARIA_ACCESS":return t.jsx(hn,{color:"#5B7FFF",size:d});case"INVENTARIO_ACCESS":return t.jsx(Qt,{sx:{color:"#5B7FFF",fontSize:d}});case"RECEBIMENTO_ACCESS":return t.jsx(Zt,{sx:{color:"#5B7FFF",fontSize:d,fontWeight:"bold"}});case"LOGISTICO_ACCESS":return t.jsx(Yt,{sx:{color:"#5B7FFF",fontSize:d,fontWeight:"bold"}})}}return t.jsxs(ae.container_2,{children:[i.length===0&&t.jsxs(ae.semItens,{children:[t.jsx(ae.iconSemItens,{}),"Sem permissão encontrada"]}),i.length>0&&t.jsx(ae.scroll,{children:t.jsx(ae.grid,{children:i.map((p,d)=>t.jsxs(ae.link,{onClick:()=>o(p.router),children:[l(p?.permission_name,24),t.jsx(ae.card_title,{children:p?.titulo}),t.jsx(ae.card_desc,{children:p?.subtitulo})]},d))})}),t.jsx(ae.footer,{children:"© SuiteCore"})]})},F={container:a.div`
        height: 100%;
        padding:32px 156px;
        @media screen  and (max-width: 760px){
            padding:32px 5px;

                
              }

    `,container_int:a.div`
              height:calc(100vh - 62px);
              display: flex;
              gap:20px;
              @media screen  and (max-width:1080px){
                flex-direction: column;
                
              }


    `,Erros:a.div`
         color: #ff4d4f;
          font-size: 12px;
          margin: 0px 10px;
         
        
        `,container_left:a.section`
    flex: 1;
    @media screen  and (max-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }

    padding: 20px;
    border-radius: 10px;
    `,conainter_right:a.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
        border-radius: 10px;


    flex: 2;
    `,container_usuarioArea:a.div`
    display: flex;
    gap: 10px;
    `,container_img:a.div`
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
        
    `,container_titulo:a.div`
     margin:0 0 8px 0;
    font-size:18px;
    font-weight: 600;
        color:#1565c0;
     `,area_infor:a.div`
     width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
     `,meta:a.div`
     margin-top: 14px;
      color: #6b7280;
       font-size: 14;
     display: flex;
     flex-direction: column;
     `,span:a.span`
       padding: 5px 0;
     `,small:a.small`
      margin:0; color:#6b7280; font-size:13px; 
     `,area_forma:a.div`
     display: flex;
     flex-direction: column;
      gap: 10px;
     `,input:a.input`
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
     `,CamposInput:a.div`
     display: flex;
    width: 100%;
    flex-direction: column;
     margin: 5px 0;
    `,area_campo:a.div`
        display: flex;
        gap: 10px;
     `,area_btn:a.div`
        display: flex;
                width: 150px;

        gap: 10px;
     `,label:a.label`
      display:block;
    font-size:13px;
    color:#0f1724;
    margin-bottom:6px;
     `,foother:a.div`
        text-align:center; margin-top:14px; color:var(--muted); font-size:13px;
     `},Lr=()=>{const{register:e,handleSubmit:n,reset:o,watch:i,formState:{errors:r}}=Se(),l=i("novaSenha"),p=async g=>{const f=localStorage.getItem("order");if(f!=null){g.usuarioId=f;const c=await St.alteraSenha(g);c.msg&&(Z(c.msg,"success"),o())}},d=()=>{o()};return t.jsx(Ie,{children:t.jsxs("form",{onSubmit:n(p),children:[t.jsxs("div",{style:{marginBottom:10},children:[t.jsx(F.container_titulo,{children:"Segurança & Senha"}),t.jsx(F.small,{children:"Mude sua senha periodicamente para manter sua conta segura."})]}),t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Senha atual"}),t.jsx(F.input,{type:"password",...e("senhaAntiga"),placeholder:"Senha antiga"})]}),t.jsxs(F.area_campo,{children:[t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Nova senha"}),t.jsx(F.input,{hasError:!!r.novaSenha,type:"password",...e("novaSenha",{required:"Senha E obrigatorio",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,message:"Senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial"}}),placeholder:"Senha nova"})]}),t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Confirmar nova senha"}),t.jsx(F.input,{type:"password",...e("reperteSenha",{validate:g=>g===l||"Senhas não conferem",required:"Confirme Senha E obrigatorio"}),placeholder:"Repete senha"})]})]}),t.jsxs(F.Erros,{children:[r.reperteSenha&&t.jsx("p",{children:r.reperteSenha.message}),r.novaSenha&&t.jsx("p",{children:r?.novaSenha.message})]}),t.jsx(F.small,{children:"A senha precisa ter no mínimo 8 caracteres, com letras e números."}),t.jsxs(F.area_btn,{children:[t.jsx(ce,{titulo:"Salvar",isvalid:!1,nome_btn:"undefined",click:n(p)}),t.jsx(ce,{titulo:"Cancelar",isvalid:!0,nome_btn:"undefined",click:d})]})]})})},$e={container:a.div`
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
  `,container_int:a.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,header:a.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,content:a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,buttons:a.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
  `},Or=({handleConfirm:e,handleFileSelect:n,resetSignal:o,handleCancel:i,message:r,ativoBtn:l})=>t.jsx($e.container,{children:t.jsx($e.container_int,{children:t.jsxs($e.content,{children:[t.jsx(gt,{variant:"h6",sx:{mb:2},children:t.jsx(gt,{variant:"h6",sx:{mb:2},children:r})}),t.jsx(ao,{onFileSelect:n,resetSignal:o}),t.jsxs($e.buttons,{children:[l&&t.jsx(Ce,{variant:"contained",color:"error",onClick:e,sx:{borderRadius:2},children:"Atualizar"}),t.jsx(Ce,{variant:"outlined",onClick:i,sx:{borderRadius:2,color:"black",borderColor:"#bdbdbd","&:hover":{backgroundColor:"#f5f5f5"}},children:"Cancelar"})]})]})})}),Dr="portaria",_r="2.0.0",Jt={name:Dr,version:_r},zr=()=>{const e=un(),[n,o]=v.useState(0),[i,r]=v.useState(null),[l,p]=v.useState(),[d,g]=v.useState(!1),f=Xe(),[c,h]=v.useState(!1),u=async()=>{const I=localStorage.getItem("order");if(I!=null){const S=await G.buscaUsuario(I);S&&p(S)}};v.useEffect(()=>{u()},[]);const m=()=>{g(!0)},b=async()=>{i||Z("Por favor, selecione uma imagem para continuar.","error"),(await G.selecionarImagem(e,i)).msg&&(o(S=>S+1),u(),g(!1))},s=()=>{alert("EM DESENVOLVIMENTO")},x=()=>{h(!0),setTimeout(()=>{f("/",{replace:!1}),h(!1)},1e3)};return t.jsx(t.Fragment,{children:l?t.jsx(F.container,{children:t.jsxs(F.container_int,{children:[t.jsxs(Ie,{children:[t.jsx(F.container_titulo,{children:"Perfil Usuario"}),t.jsxs(F.container_usuarioArea,{children:[t.jsx(F.container_img,{children:l?.avatar?t.jsx("img",{src:l?.avatar}):t.jsx(Zn,{style:{fontSize:100,color:"#1976d2"}})}),t.jsxs(F.area_infor,{children:[t.jsx(ce,{titulo:"Adicionar imagem",isvalid:!1,nome_btn:"undefined",click:m}),t.jsx(ce,{titulo:"Remover Imagem",isvalid:!0,nome_btn:"d",click:s}),t.jsxs(F.meta,{children:[t.jsx(F.span,{children:t.jsx("strong",{children:l?.nome})}),t.jsx(F.small,{children:l?.ocupacaoOperacional}),t.jsxs(F.small,{children:["Filial: ",l?.filial]})]})]}),d&&t.jsx(Or,{handleConfirm:b,handleCancel:()=>g(!1),message:"",ativoBtn:d,handleFileSelect:r,resetSignal:n})]}),t.jsxs(F.area_forma,{children:[t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Nome completo"}),t.jsx(F.input,{disabled:!0,value:l?.nome,placeholder:"digite um campo"})]}),t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"E-mail"}),t.jsx(F.input,{disabled:!0,value:l?.email,placeholder:"digite um campo"})]}),t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Ocupação Profissional"}),t.jsx(F.input,{disabled:!0,value:l?.ocupacaoOperacional,placeholder:"digite um campo"})]}),t.jsxs(F.CamposInput,{children:[t.jsx(F.label,{children:"Filial"}),t.jsx(F.input,{disabled:!0,value:l?.filial,placeholder:"digite um campo"})]}),t.jsx(F.area_btn,{})]})]}),t.jsxs(F.conainter_right,{children:[t.jsx(Lr,{}),t.jsx(Ie,{children:t.jsx(ce,{isvalid:!1,nome_btn:"undefined",click:x,children:t.jsx(Qn,{})})}),t.jsxs(F.foother,{children:["@Desenvolvido por Elivandro  ",t.jsxs("div",{style:{color:"#464545",fontSize:"10px"},children:["Versão ",Jt?.version," - ",Jt?.name]})]}),c&&t.jsx(qe,{})]})]})}):t.jsx(qe,{})})},Kr=()=>t.jsxs(io,{children:[t.jsxs(U,{path:"/",element:t.jsx(Io,{}),children:[t.jsx(U,{index:!0,element:t.jsx(Ar,{})}),t.jsx(U,{path:"reset",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(wo,{},Date.now())})}),t.jsx(U,{path:"cadastro/usuario",element:t.jsx(K,{allowedPermissions:["CADASTRO_USUARIO"],children:t.jsx(Rr,{},Date.now())})}),t.jsx(U,{path:"senha/usuario",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Mr,{},Date.now())})}),t.jsx(U,{path:"perfil",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(kr,{},Date.now())})}),t.jsx(U,{path:"filiais",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Pr,{},Date.now())})}),t.jsx(U,{path:"access",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Er,{},Date.now())})}),t.jsx(U,{path:"usuarios/lista",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(Eo,{},Date.now())})}),t.jsx(U,{path:"outros",element:t.jsx(K,{allowedPermissions:["ALTERAR_CONFIGURACOES"],children:t.jsx(Co,{},Date.now())})}),t.jsx(U,{path:"logs",element:t.jsx(K,{allowedPermissions:["GERENCIAR_REGISTROS"],children:t.jsx(jo,{},Date.now())})}),t.jsx(U,{path:"permissoes",element:t.jsx(K,{allowedPermissions:["GERENCIAR_USUARIOS"],children:t.jsx(ho,{},Date.now())})})]}),t.jsx(U,{path:"/config",element:t.jsx(K,{allowedPermissions:["LISTA_GERAL"],children:t.jsx(vo,{},Date.now())}),children:t.jsx(U,{path:"profile",element:t.jsx(K,{allowedPermissions:["VISUALIZAR_REGISTRO"],children:t.jsx(zr,{},Date.now())})})}),t.jsx(U,{path:"*",element:t.jsx(uo,{})})]});export{Kr as default};
