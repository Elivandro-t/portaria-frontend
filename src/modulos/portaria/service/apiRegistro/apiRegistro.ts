import axios from "axios"
const base = import.meta.env.VITE_API_URL;

const findAll = async(endpoint:any,filial:any,busca:any,ativo:any,page:any)=>{
    const params:any = {
        sort:"status,asc"
    }
    if(filial) params.filial = filial;
    if(ativo!=null) params.ativo = ativo;
    if(busca) params.busca = busca;
    if(page!=null) params.page = page;
    params.size=100

    const json = await axios.get(base+endpoint,{params});
    return json.data;
}
const salvaRegistro = async (endpoint: string, data: any, file?: File) => {
  const form = new FormData();
  if(file!=null){
    form.append("file", file);
  }
  form.append("data", JSON.stringify(data))
  const response = await axios.post(base + endpoint, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return response.data;
}
export default {
    findAll:async (filial:number,busca:any,ativo:any,page:any)=>{
        const json = await findAll("/portaria/v1/findAll",filial,busca,ativo,page);
        return json;
    },
     RegistroFactory: async (data: any, file?: File) => {
    const json = await salvaRegistro("/portaria/v1/factory", data, file)
    return json;
  },
}