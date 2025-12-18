export type ModuloRegistry = {
  titulo: string;
  subtitulo: string;
  route: string;
  permissoes: string[];
};

export const MODULOS: ModuloRegistry[] = [
  {
    titulo: "Portaria",
    subtitulo: "Controle de acesso de visitantes",
    route: "/portaria",
    permissoes: ["PORTARIA_ACCESS"]
  },
  {
    titulo: "Recebimento",
    subtitulo: "Gestão de recebimento",
    route: "/recebimento",
    permissoes: ["RECEBIMENTO_ACCESS","PORTARIA_ACCESS"]
  },
  {
    titulo: "Inventário",
    subtitulo: "Gestão de estoque",
    route: "/inventario",
    permissoes: ["INVENTARIO_ACCESS"]
  }
];