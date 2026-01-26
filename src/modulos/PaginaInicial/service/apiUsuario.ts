import axios from "axios"
import { notify } from "../../portaria/service/snackbarService";
const base = import.meta.env.VITE_API_URL;
const rotasPublicas = ["/portaria/v1/usuario/login",
];
axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("acessToken")
  const urlPath = new URL(config.url, window.location.origin).pathname;
  if (!rotasPublicas.some(rota => urlPath.includes(rota))) {
    if (!config.headers) config.headers = {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (erro) => {
  return Promise.reject(erro)
})
const removeToken = async () => {
  localStorage.removeItem("acessToken")
  localStorage.removeItem("order")
}

axios.interceptors.response.use(response => {
  return response;

}, (error) => {
  if (error.code === "ERR_NETWORK") {
        notify(error.message)

   notify("Serviço indisponível. Tente novamente mais tarde.","info")
    throw new Error("Servidor indisponível. Verifique sua conexão.");
  }
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;
    
    switch (status) {
      case 400:
        if (error.message) {
          notify(data.message)
        } else {
          notify(data.erro)
        }
        break
      case 401:
        const from = location.pathname + location.search + location.hash;
        sessionStorage.setItem("redirectAfterLogin", from);
        const msg = data.message || data.error;
        console.log("sm "+msg)
        notify(msg);
        break
      case 403:
         if(data.error){
           notify(data.error)
         }
         removeToken()
        setTimeout(() => {
          window.location.href = "/verify";

        }, 2000)
        
        break
      case 500:
        removeToken()
        setTimeout(() => {
          window.location.href = "/verify";

        }, 1000)
        notify(data.message)
        break
      case 502:
        notify("bad gateway")
        break
      case 5023:
        notify("serviço indisponível")
        break
      case 504:
        notify("gateway timeout")
        break
    }
  }
})

const login = async (endpoint: string, body: any) => {
  const response = await axios.post(base + endpoint, body);
  return response.data;
}
const ListaPefil = async (endpoint: string) => {
  const response = await axios.get(base + endpoint);
  return response.data;
}
const cadastroUsario = async (endpoint: string, body: any) => {
  try {
    const response = await axios.post(base + endpoint, body);
    return response.data;
  } catch (error: any) {
    // Aqui você pode tratar o erro ou lançar novamente
    console.error("Erro ao cadastrar usuário:", error.response?.data || error.message);
    throw error;
  }
}
const atualizaCadastro = async (endpoint: string, body: any) => {
  try {
    const response = await axios.put(base + endpoint, body);
    return response.data;
  } catch (error: any) {
    // Tratar todos os casos: com response e sem response
    if (axios.isAxiosError(error)) {
      console.error("Erro ao atualizar usuário:", error.response?.data ?? error.message);
      throw error.response?.data ?? error.message;
    } else {
      console.error("Erro inesperado:", error);
      throw error;
    }
  }
}

const listAusuario = async (endpoint: string, busca: string, page: any) => {
  try {
    const params = new URLSearchParams();
    params.append("busca", busca)
    if (page !== undefined && page !== null) {
      params.append("page", page)
    }
    const response = await axios.get(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
const deletar = async (endpoint: string, id: any, usuarioId: any) => {
  try {
    const params = new URLSearchParams();
    params.append("id", id)
    params.append("usuario_id", usuarioId)
    const response = await axios.put(base + endpoint, null, { params: Object.fromEntries(params) });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
const deleteItem = async (endpoint: string, id: any, usuarioId: any) => {
  try {
    const params = new URLSearchParams();
    params.append("registroId", id)
    params.append("usuarioId", usuarioId)
    const response = await axios.delete(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

const BuscaPefilUsuario = async (endpoint: string, email: any) => {
  try {
    const params = new URLSearchParams();
    params.append("email", email)
    const response = await axios.get(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
const AdicionarPefil = async (endpoint: any, usuarioId: any, perfilId: any, ativo?: any) => {
  try {
    console.log("usuario "+usuarioId)
    const params = new URLSearchParams()
    params.append("usuarioId", usuarioId)
    if (perfilId) {
      params.append("perfilId", perfilId)
    }
    if (ativo !== undefined && ativo !== null) {
      params.append("ativo", ativo)
    }
     const response = await axios.get(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (erro: any) {
    throw erro;
  }
}
const BuscaUsuario = async (endpoint: any, usuarioId: any) => {
  try {
    const params = new URLSearchParams()
    params.append("usuarioId", usuarioId)
    const response = await axios.get(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (erro: any) {
    throw erro;
  }
}
const addFilial = async(endpoint:any,body:any)=>{
  const resposta  = await axios.put(base+endpoint,body)
  return resposta.data;
}
const ReseteSenha = async (endpoint: string) => {
  try {
    const response = await axios.post(base + endpoint);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
const Logs = async (endpoint: any, busca: any, page: any) => {
  try {
    const params = new URLSearchParams();
    params.append("busca", busca);
    if (page !== undefined && page !== null) {
      params.append("page", page)
    }
    const response = await axios.get(base + endpoint, { params: Object.fromEntries(params) });
    return response.data;
  } catch (erro: any) {
    throw erro;
  }
}


const salvaImagemUsuario = async (endpoint: any, usuarioId: any, file: File) => {
  const formdata = new FormData();
  formdata.append("usuarioId", usuarioId);
  formdata.append("file", file)

  const resposta = await axios.put(base + endpoint, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  return resposta.data;

}


////////////////////////////
const api = {
  //api de login
  login: async (data: any) => {
    const json = await login("/portaria/v1/usuario/login", data);
    return json;
  },
  atualizarRegistro: async (data: any) => {
    const json = await atualizaCadastro("/portaria/v1/update", data)
    return json;
  },
  listaPerfil: async () => {
    const json = await ListaPefil("/perfil/lista")
    return json;
  },
  cadastroUsuaro: async (body: any) => {
    const json = await cadastroUsario("/portaria/v1/usuario/cadastro", body)
    return json;
  },

  listAusuario: async (busca: string, page: any) => {
    const json = await listAusuario("/portaria/v1/usuario/lista", busca, page)
    return json;
  },
  deletar: async (id: any, usuarioId: any) => {
    const json = await deletar("/historico/delete", id, usuarioId)
    return json;
  },

  deletarPortaria: async (id: any, usuarioId: any) => {
    const json = await deleteItem("/portaria/v1/solicitacao/delete/registro", id, usuarioId)
    return json;
  },
  BuscaPefilUsuario: async (email: any) => {
    const json = await BuscaPefilUsuario("/portaria/v1/usuario/usuario-lista-perfil", email)
    return json;
  },
  AdicionarPefil: async (usuarioId: any, perfilId: any, ativo: boolean) => {
    const json = await AdicionarPefil("/portaria/v1/usuario/usuario-add-perfil", usuarioId, perfilId, ativo)
    return json;
  },
  reset: async (email: any) => {
    const json = await ReseteSenha(`/portaria/v1/usuario/alterar/senha?email=${email}`)
    return json;
  },
  buscaLogs: async (busca: any, page: any) => {
    const json = await Logs("/logs/lista", busca, page)
    return json;
  },
  buscaUsuario: async (usuarioId: any) => {
    const json = await BuscaUsuario("/portaria/v1/usuario/busca/unit", usuarioId)
    return json;
  },
  FiliaisUsuario: async (usuarioId: any) => {
    const json = await BuscaUsuario("/portaria/v1/usuario/busca/filiais", usuarioId)
    return json;
  },
  selecionarImagem: async (usuarioId: any, file: File) => {
    const json = await salvaImagemUsuario("/portaria/v1/usuario/avatar", usuarioId, file);
    return json;
  },
  addFiliais:async(lista:any,usuarioId:any)=>{
    const json = await addFilial(`/module/v1/filial/add/${usuarioId}`,lista);
    return json;
  }
}


export default api;
