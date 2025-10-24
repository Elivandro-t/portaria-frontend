import { jwtDecode } from "jwt-decode"
type JwtPayload = {
  sub?: string; // id do usuário
  nome?: string;
  exp?: number; // data de expiração em timestamp
  iat?: number;
  id:number,
  filial:any,
  perfil:any,
  permissoes:string[]// data de emissão
};


const token  = localStorage.getItem("acessToken")

export const subjet = ()=>{
    if(token!=null){
   const jwtResposta = jwtDecode<JwtPayload>(token);
   return jwtResposta;
    }
}