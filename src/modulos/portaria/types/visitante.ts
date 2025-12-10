export type Visitante = {
  id: number;
  nomeCompleto: string;
  imagem: string;
  ocupacao: string;
  filial?: string | null;
  dataCriacao: string; // ou Date se você converter depois
  tipoAcesso: string;
  tipoMotorista: string;
  tipoPessoa: string;
};