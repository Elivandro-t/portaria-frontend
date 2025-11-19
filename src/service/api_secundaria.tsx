import axios from "axios"
const base = import.meta.env.VITE_API_URL;

import type { AtualizaStatus } from "../types/stualizaStatus"
const consulta_portaria = async (endpoint: string) => {
    const resposta = await axios.get(base + endpoint)
    return resposta.data

}
//buscar portaria cd: ja integrado
const lista_portaria = async (endpoint: string,filial:any,busca:string,size:any) => {
    const params = new URLSearchParams();
    params.append('filial', filial);
    params.append('busca', busca || '');
     params.append('size', size || '');
    const resposta = await axios.get(base + endpoint,{params:Object.fromEntries(params)});
    return resposta.data;
}
const alterarEntrada = async (endpoint: string, data: AtualizaStatus, file: File) => {
    const request = new FormData();
    request.append("file", file)
    request.append("data", JSON.stringify(data))
    const resposta = await axios.put(base + endpoint, request, {
        headers: { "Content-Type": "multipart/form-data", }
    });
    return resposta.data;
}
const alterarSaida = async (endpoint: string, data: AtualizaStatus, file: File) => {
    const request = new FormData();
    request.append("file", file)
    request.append("data", JSON.stringify(data))
    const resposta = await axios.put(base + endpoint, request, {
        headers: { "Content-Type": "multipart/form-data", }
    });
    return resposta.data;
}
const solitacaoAutorizador = async (endpoint: string,usuarioId:any,busca:string) => {
     const params = new URLSearchParams();
     params.append("usuario_id",usuarioId)
     params.append("busca",busca)

    const resposta = await axios.get(base + endpoint,{params:Object.fromEntries(params)})
    return resposta.data
}
const listaBloco = async (endpoint:any)=>{
    const resposta = await axios.get(base + endpoint)
    return resposta.data
}
// ja integrado
const consulta = {
    consuta_portaria: async (idRegistro: number) => {
        const json = await consulta_portaria(`/portaria/v1/solicitacao/visualizar/registro?registroId=${idRegistro}`);
        return json;
    },
    /// adicionar filial
    Solicitacoes: async (filial:any, busca: any,size:any) => {
        console.log("busca " + busca)
        const json = await lista_portaria(`/portaria/v1/lista/entradas/pendentes`,filial,busca,size);
        return json;
    },
    alterarEntrada: async (data: AtualizaStatus, file: File) => {
        const json = await alterarEntrada("/portaria/v1/aguardando_Entrada", data, file);
        return json;
    },
    alterarSaida: async (data: AtualizaStatus, file: File) => {
        const json = await alterarSaida("/portaria/v1/aguardando_saida", data, file);
        return json;
    },
    solitacaoAutorizador: async (usuarioId: number,busca:string) => {
        const json = await solitacaoAutorizador("/portaria/v1/solicitacao/autorizador",usuarioId,busca);
        return json;
    },
    blocos: async () => {
        const json = await listaBloco(`/bloco`);
        return json;
    },

}

export default consulta;