export type HistoricoPortaria = {
  id: number;
  registroPortariaId: number;
  nomeCompleto: string;
  visitante: {
    id: number;
    nomeCompleto: string;
    imagem: string;
    ocupacao: string;
    filial: number | null;
    dataCriacao: string;
    tipoAcesso: string;
    tipoMotorista: string;
    tipoPessoa: string;
  };
  placaVeiculo: string;
  dataCriacao: string;
  descricao: string;
  status: string;
  criador: {
    id: number;
    nome: string;
    email: string;
    ocupacaoOperacional: string;
    filial: number;
  };
  filialSolicitado: number;
  ativo: boolean;
  protocolo: string;
  bloco: string;
  dataEntrada: string;
  dataSaida: string | null;
  ficalIdEntrada: number;
  ficalIdSaida: number | null;
  nomeFiscaEntrada: string;
  nomeFiscaSaida: string | null;
  imagemEntrada: string;
  imagemSaida: string | null;
};
