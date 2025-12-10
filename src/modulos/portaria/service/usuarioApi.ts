import axios from "axios";

const base = import.meta.env.VITE_API_URL;

const AlteraSenha = async(endpoint:string,data:any)=>{
    const json = await axios.put(base+endpoint,data);
   return json.data;

}
export default {
    alteraSenha:async(data:any)=>{
       const json = await AlteraSenha("/portaria/v1/usuario/alterarSenha",data);
       return json;
    }
}

