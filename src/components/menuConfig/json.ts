const menuConfig = [
  {
    label: "Configurações",
    permison:"",
    items: [
      { label: "Perfis", to: "/portaria/config/perfil", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Permissões", to: "/portaria/config/permissoes", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Logs", to: "/portaria/config/logs", permission: "LISTA_GERAL" },
      { label: "Outros", to: "/portaria/config/outros", permission: "ALTERAR_CONFIGURACOES" }
    ]
  },
  {
    label: "Portaria",
    permison:"",
    items: [
      { label: "Solicitar Entrada", to: "/portaria/config/portaria/novo", permission: "CRIAR_REGISTRO" },
      { label: "Entradas Pendentes", to: "/portaria/portaria/pendentes", permission: "VISUALIZAR_REGISTRO" },
      { label: "Portarias Gerais", to: "/portaria/config/portaria", permission: "LISTA_GERAL" }
    ]
  },
  {
    label: "Visitantes",
    permison:"",
    items: [
      { label: "Relatórios", to: null, permission: "GERAR_RELATORIO" },
      { label: "Visitantes Cadastrados", to: "/portaria/config/visitantes/lista", permission: "VISUALIZAR_VISITANTES" },
      { label: "Historico", to: "/portaria/config/historico", permission: "VISUALIZAR_VISITANTES" }
    ]
  },
  {
    label: "Usuario",
    permison:"",
    items: [
      { label: "Cadastro", to: "/portaria/config/cadastro/usuario", permission: "CADASTRO_USUARIO" },
      { label: "Usuarios Cadastrados", to: "/portaria/config/usuarios/lista", permission: "GERENCIAR_USUARIOS" },
      { label: "Resetar Senha", to: "/portaria/config/reset", permission: "EDITAR_USUARIO" }
    ]
  }
];

export default menuConfig;
