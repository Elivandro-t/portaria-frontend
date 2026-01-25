import axios from "axios";
const base = import.meta.env.VITE_API_URL_LOGISTICO
const listaItens = async (endpoint: any,filial:any,listaFiliais:any) => {
     const params = new URLSearchParams();
     if(listaFiliais!=null){
        params.append("filiais",listaFiliais)
     }

    if(filial!=null){
       params.append("filial",filial)
    }
    const json = await axios.get(base + endpoint,{params:Object.fromEntries(params)});

    return json.data;
}
const listaItensGerais = async (endpoint: any,filial:any) => {
     const params = new URLSearchParams();

    if(filial!=null){
       params.append("filial",filial)
    }
    const json = await axios.get(base + endpoint,{params:Object.fromEntries(params)});

    return json.data;
}
const cadastro = async (enpoint: any, body: any) => {
    const resposta = await axios.post(base + enpoint, body);
    if (resposta.data) {
        return resposta.data;
    } else {
        return null;
    }
}
const update = async (enpoint: any, body: any) => {
    const resposta = await axios.put(base + enpoint, body);
    if (resposta.data) {
        return resposta.data;
    } else {
        return null;
    }
}
const deleteContainer = async (enpoint: any, registroId?: any,
  filial?: any) => {
    const params = new URLSearchParams();
    if(registroId!=null && filial!=null){
        params.append("registroId",registroId);
        params.append("filial",filial);
    }
    const resposta = await axios.delete(base + enpoint,{params:Object.fromEntries(params)});
    if (resposta.data) {
        return resposta.data;
    } else {
        return null;
    }
}

const listaItensTipo = async (enpoint: any, tipo: any, filial: any) => {
    const params = new URLSearchParams();
    if (tipo !== null && filial != null) {
        params.append("tipo", tipo)
        params.append("filial", filial)
    }
    const resposta = await axios.get(base + enpoint, { params: Object.fromEntries(params) });
    if (resposta.data) {
        return resposta.data;
    } else {
        return null;
    }
}
export default {
    lista: async (filial:any,listaFiliais:any) => {
        const json = await listaItens("/communit/v1/runmit/lista",filial,listaFiliais);
        return json;
    },
    listaGerais: async (filial:any) => {
        const json = await listaItensGerais("/communit/v1/runmit/lista/geral",filial);
        return json;
    },
    findItensMaterial: async (tipo: string, filial: any) => {
        const json = await listaItensTipo("/material/v1/findOne", tipo, filial);
        return json;
    },
    cadastro: async (data: any) => {
        const json = await cadastro("/communit/v1/runmit/registro", data);
        return json; 
    },
    update: async (data: any) => {
        const json = await update("/communit/v1/runmit/update", data);
        return json; 
    },
    delete: async (id: any,filial:any) => {
        const json = await deleteContainer("/communit/v1/runmit/delete/cardlogistico", id,filial);
        return json; 
    }
}

