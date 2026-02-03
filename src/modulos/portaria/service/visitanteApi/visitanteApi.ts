import axios from "axios";
const base = import.meta.env.VITE_API_URL;
const visitanteBuscaPlaca= async (endpoint:any,visitanteID?:any,nome?:any)=>{
    const params = new URLSearchParams();
    if(visitanteID!==null && visitanteID!==undefined){
    params.append("visitanteId",visitanteID)
    }
    if(nome!==null && nome!==undefined&& nome.trim() !== ""){
    params.append("nome",nome)
    }
    const resposta = await axios.get(base+endpoint,{params:Object.fromEntries(params)})
    return resposta.data;
}

const visitanteFiltro= async (endpoint:any)=>{
    const params = new URLSearchParams();
    const sze = 1000;
    params.append("size",sze as any)
    const resposta = await axios.get(base+endpoint,{params:Object.fromEntries(params)})
    return resposta.data;
}
const deleteVisitante = async (endpoint: string, id: any, usuarioId: any,type:any) => {
  try {
    const params = new URLSearchParams();
    params.append("visitanteId", id)
    params.append("usuarioId", usuarioId)
    params.append("type", type)
    const response = await axios.delete(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
export default {
    visitante: async(visitanteId?:any,nome?:any)=>{
        const json = await visitanteBuscaPlaca("/visitante/placa",visitanteId,nome);
        return json;
    },
    FiltroVisitante: async()=>{
        const json = await visitanteFiltro("/visitante/filtro");
        return json;
    },
      deletarVisitante: async (id: any, usuarioId: any,type:any) => {
    const json = await deleteVisitante("/visitante/delete/registro", id, usuarioId,type)
    return json;
  },
}