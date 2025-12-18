import axios from "axios";

const base = import.meta.env.VITE_API_URL;

const AlteraSenha = async(endpoint:string,data:any)=>{
    const json = await axios.put(base+endpoint,data);
   return json.data;

}
const handlePermission = async(endpoint:any,data:any)=>{
   const json = await axios.post(base+endpoint,data);
   return json.data;
}
const ListaModulo = async(endpoint:any)=>{
    const resposta = await axios.get(base+endpoint);
    return resposta.data;
}
export default {
    alteraSenha:async(data:any)=>{
       const json = await AlteraSenha("/portaria/v1/usuario/alterarSenha",data);
       return json;
    },
     handlePermission:async(data:any,usuarioId:any)=>{
       const json = await handlePermission(`/module/add/${usuarioId}`,data);
       return json;
    },
    ListaModulo:async()=>{
       const json = await ListaModulo("/module/lista");
       return json;
    }
}

