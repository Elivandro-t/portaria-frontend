import{j as t}from"./mui-ChBlBfgN.js";import{d as o,m as n,u as i}from"./index-CS6IxeNG.js";import"./react-OvXVS5lI.js";const a=n`
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
`,e=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    background-color: #fff; /* fundo branco */

  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  gap: 30px;
  animation: ${a} 0.8s ease forwards;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,s=o.h1`
  font-size: 2.5rem;
  color: #ff6b6b;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`,d=o.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,p=o.span`
  font-weight: bold;
  color: #ccbcb7;
  font-size: 1.2rem;
  display: block;
  margin-top: 20px;
`,c=o.button`
  background-color: #7b9dfc; /* azul suave */
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 20px;
  &:hover {
     transform: translateY(-1px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    background-color: #6a8de5; /* azul hover mais escuro */
  }

  &:active {
    background-color: #5c7bd1;
  }


  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 15px 40px;
  }
`;o.img`
  width: 60%;
  max-width: 300px;
  margin: 20px 0;
  animation: ${a} 1s ease forwards;

  @media (min-width: 768px) {
    width: 300px;
  }
`;const f=()=>{const r=i();return t.jsxs(e,{children:[t.jsx(s,{children:"Não Autorizado"}),t.jsx(d,{children:"Ops! Voce não tem permissão para acessar essa pagina."}),t.jsx(c,{onClick:()=>r("/"),children:"Voltar para Home"}),t.jsx(p,{children:"© Elivandro develop"})]})};export{f as default};
