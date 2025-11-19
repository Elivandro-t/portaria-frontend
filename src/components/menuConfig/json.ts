const menuConfig = [
  {
    label: "Configurações",
    items: [
      { label: "Perfis", to: "/config/perfil" },
      { label: "Permissões", to: "/config/permissoes" },
      { label: "Logs", to: "/config/logs" },
      { label: "Outros", to: "/config/outros" }
    ]
  },
  {
    label: "Portaria",
    items: [
      { label: "Solicitar Entrada", to: "/config/portaria/novo" },
      { label: "Entradas Pendentes", to: "/portaria/pendentes" },
      { label: "Portarias Gerais", to: "/config/portaria" } // sem rota no seu código
    ]
  },
  {
    label: "Visitantes",
    items: [
      { label: "Relatórios", to: null },
      { label: "Visitantes Cadastrados", to: "/config/visitantes/lista" },
      { label: "Historico", to: "/config/historico" }
    ]
  },
  {
    label: "Usuario",
    items: [
      { label: "Cadastro", to: "/config/cadastro/usuario" },
       { label: "Usuarios Cadastrados", to: "/config/usuarios/lista" },
      { label: "Resetar Senha", to: "/config/reset" }
    ]
  }
];

export default menuConfig;


export type MenuItem = {
    label: string;
    to: string | null; // quando o item não tem rota
};

export type MenuSection = {
    label: string;
    items: MenuItem[];
};
