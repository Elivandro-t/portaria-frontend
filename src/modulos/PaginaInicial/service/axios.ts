import axios from "axios";
import { notify } from "../../portaria/service/snackbarService";
const rotasPublicas = ["/portaria/v1/usuario/login",
];
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("acessToken");
  const url = config.url ?? "";

  const isPublic = rotasPublicas.some(rota => url.includes(rota));

  if (!isPublic && token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
const removeToken = async () => {
  localStorage.removeItem("acessToken")
  localStorage.removeItem("order")
}

api.interceptors.response.use(response => {
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
        //  removeToken()
        // setTimeout(() => {
        //   window.location.href = "/verify";

        // }, 2000)
        
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

export default api;