import Axios  from "axios"
const base = import.meta.env.VITE_API_URL;
const ListaModulo = (endpoint:any,usuarioid:any)=>{
    const params = new URLSearchParams();
    params.append("usuarioId",usuarioid)
    return Axios.get(base+endpoint,{params:Object.fromEntries(params)})
}
const api ={
    modulo:async(usuarioId:any)=>{
       const json = await ListaModulo("/portaria/v1/usuario/busca/valid",usuarioId);
       return json.data;
    }
}
export default api;