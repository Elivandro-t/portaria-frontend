import axios from "axios";

const base = import.meta.env.VITE_API_URL;
const listaFiliais = async (endpoint:any)=>{
    const resposta = axios.get(base+endpoint)
    return (await resposta).data;
}

const cadastro= async (endpoint:any,body:any)=>{
    console.log(JSON.stringify(body))
    const resposta = await axios.post(base+endpoint,body)
    return resposta.data;
}
export default {
    lista: async()=>{
        const json = await listaFiliais("/filial");
        return json;
    },
     cadastro: async(data:any)=>{
        const json = await cadastro("/filial/registro",data);
        return json;
    }
}