import axios from "axios";

const base = import.meta.env.VITE_API_URL;
const listaTipoPessa = async (endpoint:any)=>{
    const resposta = axios.get(base+endpoint)
    return (await resposta).data;
}

const listaRecorrencia= async (endpoint:any)=>{
    const resposta = await axios.get(base+endpoint)
    return resposta.data;
}
export default {
    lista: async()=>{
        const json = await listaTipoPessa("/portaria/tipo_pessoa/lista");
        return json;
    },
    recorrecia: async()=>{
        const json = await listaRecorrencia("/recorrencia");
        return json;
    }
}