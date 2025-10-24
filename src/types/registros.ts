type Visitante = {
    id: number;
    nomeCompleto: string;
    imagem: string;
    ocupacao: string;
    filial: number;
    dataCriacao: string; // ou Date, se você fizer o parsing
    tipoAcesso: string;
    tipoMotorista: string;
    tipoPessoa: string;
};

type Autorizador = {
    nome: string;
    email: string;
    ocupacaoOperacional: string;
    filial: number;
};

export type RegistroVisitante = {
    id: number;
    protocolo: string;
    placaVeiculo: string;
    nomeCompleto: string;
    Obs: string;
    tipPessoa: string;
    visitante: Visitante;
    autorizador: Autorizador;
    dataCriacao: string; // ou Date
    status: string;
    bloco:string,
    ativo: boolean;
    filial:string,
    entrada:Entrada,
    saida:Saida
};
export interface Entrada {
  dataEntrada: string;      // Data em formato ISO
  nomeFiscal: string;       // Nome do fiscal responsável
  fiscalEntradaId: number;  // ID do fiscal
  imagem: string;           // URL da imagem
}
export interface Saida {
  dataSaida: string;      // Data em formato ISO
  nomeFiscal: string;       // Nome do fiscal responsável
  fiscalSaida: number;  // ID do fiscal
  imagem: string;           // URL da imagem
}

