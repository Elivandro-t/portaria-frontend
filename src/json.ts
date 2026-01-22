const menuConfig = [
  {
    label: "Configurações",
    permission:"ALTERAR_CONFIGURACOES",
    items: [
      { label: "Perfis", to: "/required/perfil", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Permissões", to: "/required/permissoes", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Logs", to: "/required/logs", permission: "LISTA_GERAL" },
      { label: "Outros", to: "/required/outros", permission: "ALTERAR_CONFIGURACOES" }
    ]
  },
  {
    label: "Usuario",
    permission:"GERENCIAR_USUARIOS",
    items: [
      { label: "Cadastro", to: "/required/cadastro/usuario", permission: "CADASTRO_USUARIO" },
      { label: "Usuarios Cadastrados", to: "/required/usuarios/lista", permission: "GERENCIAR_USUARIOS" },
      { label: "Resetar Senha", to: "/required/reset", permission: "EDITAR_USUARIO" }
    ]
  }
];

export default menuConfig;
