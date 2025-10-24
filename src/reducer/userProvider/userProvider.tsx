import { createContext, useEffect, useState, type ReactNode } from "react";
import {subjet} from "../../service/jwt/jwtservice"
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
  setBusca:(n:any)=>void
}

export const contextProvider = createContext<usuario|null>(null)

export const ProviderUser = ({children,onReset}:children)=>{
     const [user, setUser] = useState<any | null>(null);
     const [busca, setBusca] = useState<any | null>(null);
     const [permission,setPermission] = useState<any[] | null>(null);
  useEffect(() => {
    try {
      var usuariocrado = localStorage.getItem("order")
      const data = subjet()
      if(usuariocrado!=null &&  data?.permissoes!=null){
        setUser(usuariocrado);
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

    return(
        <contextProvider.Provider value={{user,setUser,logout,permission,busca,setBusca}}>
            {children}
        </contextProvider.Provider>
    )
}