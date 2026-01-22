const ObjConfig = [
  {
    label: "Portaria",
    permission:"",
    items: [
      { label: "Solicitar Entrada", to: "/portaria/configuracao/novo", permission: "CRIAR_REGISTRO" },
      { label: "Entradas Pendentes", to: "/portaria/active/pendentes", permission: "VISUALIZAR_REGISTRO" },
      { label: "Portarias Gerais", to: "/portaria/configuracao/geral", permission: "LISTA_GERAL" }
    ]
  },
  {
    label: "Visitantes",
    permission:"GERENCIAR_USUARIOS",
    items: [
      { label: "Relatórios", to: null, permission: "GERAR_RELATORIO" },
      { label: "Visitantes Cadastrados", to: "/portaria/configuracao/visitantes", permission: "VISUALIZAR_VISITANTES" },
      { label: "Historico", to: "/portaria/configuracao/historico", permission: "VISUALIZAR_VISITANTES" }
    ]
  }
];

export default ObjConfig;
