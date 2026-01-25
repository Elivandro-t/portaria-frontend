// import Template from "./registro_css";
// import Api from "../../../service/api_secundaria";
// import { useContext, useEffect, useRef, useState } from "react";
// import { contextProvider } from "../../../../../reducer/userProvider/userProvider";
// import { useNavigate } from "react-router-dom";
// import { LoadingSecundary } from "../../../../../components/LoadingSecundary/LoadingSecundary";
// import { ItensRegistro } from "../../../../../components/ItensRegistro/itensRegistro";
// import { subjet } from "../../../../../jwt/jwtservice";
// import { BtnGlobal } from "../../../../../components/btnGlobal/btnGlobal";

// function MeusRegistros() {
//     const user = subjet();
//     const context = useContext(contextProvider);
//     const navigate = useNavigate();

//     const [lista, setLista] = useState<any[]>([]);
//     const [loadingItens, setLoadingItens] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const [size, setSize] = useState(20);
//     const [totalElements, setTotalElements] = useState(0);
//     const [status, setStatus] = useState("");

//     /* ========================
//        NORMALIZA A BUSCA
//     ========================= */
//     const buscaNormalizada =
//         context?.busca && context.busca.trim() !== ""
//             ? context.busca
//             : null;

//     /* ========================
//        CARREGAR REGISTROS
//     ========================= */
//     const carregarRegistros = async (novoSize?: number) => {
//         if (loadingItens) return;

//         setLoadingItens(true);
//         const tamanho = novoSize ?? size;

//         try {
//             const resposta = await Api.Solicitacoes(
//                 user?.filial,
//                 buscaNormalizada,
//                 tamanho,
//                 status
//             );

//             if (resposta?.content) {
//                 setLista(resposta.content);
//                 setTotalElements(resposta.totalElements);
//             }
//         } finally {
//             setLoadingItens(false);
//         }
//     };

//     /* ========================
//        SCROLL INFINITO (NÃO MEXI)
//     ========================= */
//     const exibirMais = () => {
//         if (!loadingItens && lista.length < totalElements) {
//             const novoSize = size + 5;
//             setSize(novoSize);
//             carregarRegistros(novoSize);
//         }
//     };

//     /* ========================
//        EFFECT PRINCIPAL
//        - limpa status quando busca é apagada
//        - sempre recarrega corretamente
//     ========================= */
//     const buscaAnterior = useRef<string | null>(null);

//    useEffect(() => {
//     // 🔍 se a busca foi LIMPA agora (antes tinha valor)
//     if (
//         buscaAnterior.current &&
//         (!context?.busca || context.busca.trim() === "")
//     ) {
//         setStatus(""); // volta para geral
//     }
//     buscaAnterior.current = context?.busca ?? null;

//     setLista([]);
//     setSize(20);
//     carregarRegistros(20);

// }, [user?.filial, status, context?.busca]);


//     /* ========================
//        AÇÕES
//     ========================= */
//     const hendleDetalhesPedidos = (numeroDoRegistro: string) => {
//         setLoading(true);
//         setTimeout(() => {
//             navigate(
//                 `/portaria/controle/detalhes-registro?order=${numeroDoRegistro}`,
//                 { replace: false, state: { refresh: Date.now() } }
//             );
//         }, 2000);
//     };

//     const handleFiltroEntrada = () => {
//         setStatus("aguardando entrada");
//     };

//     const handleFiltroSaida = () => {
//         setStatus("aguardando saida");
//     };

//     /* ========================
//        RENDER
//     ========================= */
//     return (
//         <Template.container>
//             <Template.container_int>
                
//                 <BtnGlobal
//                     titulo="Entrada"
//                     click={handleFiltroEntrada}
//                     isvalid={status === "aguardando entrada"}
//                 />
//                 <BtnGlobal
//                     titulo="Saida"
//                     click={handleFiltroSaida}
//                     isvalid={status === "aguardando saida"}
//                 />
//             </Template.container_int>

//             <ItensRegistro
//                 lista={lista}
//                 hendleDetalhesPedidos={hendleDetalhesPedidos}
//                 hendleBusca={exibirMais}
//                 visibleCount={totalElements}
//                 loading={loadingItens}
//             />

//             {loading && <LoadingSecundary />}
//         </Template.container>
//     );
// }

// export default MeusRegistros;