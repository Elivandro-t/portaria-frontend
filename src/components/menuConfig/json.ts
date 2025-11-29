const menuConfig = [
  {
    label: "Configurações",
    permison:"",
    items: [
      { label: "Perfis", to: "/config/perfil", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Permissões", to: "/config/permissoes", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Logs", to: "/config/logs", permission: "LISTA_GERAL" },
      { label: "Outros", to: "/config/outros", permission: "ALTERAR_CONFIGURACOES" }
    ]
  },
  {
    label: "Portaria",
    permison:"",
    items: [
      { label: "Solicitar Entrada", to: "/config/portaria/novo", permission: "CRIAR_REGISTRO" },
      { label: "Entradas Pendentes", to: "/portaria/pendentes", permission: "VISUALIZAR_REGISTRO" },
      { label: "Portarias Gerais", to: "/config/portaria", permission: "LISTA_GERAL" }
    ]
  },
  {
    label: "Visitantes",
    permison:"",
    items: [
      { label: "Relatórios", to: null, permission: "GERAR_RELATORIO" },
      { label: "Visitantes Cadastrados", to: "/config/visitantes/lista", permission: "VISUALIZAR_VISITANTES" },
      { label: "Historico", to: "/config/historico", permission: "VISUALIZAR_VISITANTES" }
    ]
  },
  {
    label: "Usuario",
    permison:"",
    items: [
      { label: "Cadastro", to: "/config/cadastro/usuario", permission: "CADASTRO_USUARIO" },
      { label: "Usuarios Cadastrados", to: "/config/usuarios/lista", permission: "GERENCIAR_USUARIOS" },
      { label: "Resetar Senha", to: "/config/reset", permission: "EDITAR_USUARIO" }
    ]
  }
];

export default menuConfig;
