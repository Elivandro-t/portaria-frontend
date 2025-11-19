import { createContext, useEffect, useState, type ReactNode } from "react";
import {subjet} from "../../service/jwt/jwtservice"
import api from "../../service/api";
type children = {
    children:ReactNode,
    onReset:()=>void
}
type usuario = {
  user:number,
  setUser:React.Dispatch<React.SetStateAction<number | null>>;
  logout:()=>void,
  permission:any[] | null,
  busca:string, 
  usuario:any;
  setBusca:(n:any)=>void,
  perfil:any
}

export const contextProvider = createContext<usuario|null>(null)

export const ProviderUser = ({children,onReset}:children)=>{
     const [user, setUser] = useState<any | null>(null);
     const [busca, setBusca] = useState<any | null>(null);
     const [permission,setPermission] = useState<any[] | null>(null);
     const [perfil,setPerfil] = useState<any[] | null>(null);

     const [usuario,setUsuario] = useState<any>()
  useEffect(() => {
    try {
      var usuariocrado = localStorage.getItem("order")
      const data = subjet()
      if(usuariocrado!=null &&  data?.permissoes!=null){
        setUser(usuariocrado);
        setPerfil(data.perfil)
        setPermission(data.permissoes)
      }

    } catch (err) {
      console.error("Erro ao pegar usuário:", err);
    }
  }, []);
  const logout = () => {
    localStorage.clear();
    setUser(null);
    onReset?.(); // chama reset geral
  };
const hendleBuscaUsuario = async () => {

        const order = localStorage.getItem("order")
        if (order != null) {
            const resposta = await api.buscaUsuario(order);
            if (resposta) {
                setUsuario(resposta)
            }

        }
}
useEffect(()=>{
  hendleBuscaUsuario()
},[])
    return(
        <contextProvider.Provider value={{user,setUser,perfil,usuario,logout,permission,busca,setBusca}}>
            {children}
        </contextProvider.Provider>
    )
}