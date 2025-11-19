import axios from "axios";

const base = import.meta.env.VITE_API_URL;


const visitanteBuscaPlaca= async (endpoint:any,data:any)=>{
    const params = new URLSearchParams();
    params.append("placa",data)
    const resposta = await axios.get(base+endpoint,{params:Object.fromEntries(params)})
    return resposta.data;
}
export default {
    visitante: async(busca:any)=>{
        const json = await visitanteBuscaPlaca("/visitante/placa",busca);
        return json;
    }
}