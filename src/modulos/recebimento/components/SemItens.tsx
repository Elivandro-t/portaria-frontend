import styled from "styled-components";
// Exemplo: import { PackageSearch } from "lucide-react"; 

const Sem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555;
  height: 60vh;
  font-size: 16px;
  gap: 10px;
  opacity: 0.8;
  text-align: center; /* Garante centralização do texto em telas menores */
`;

const IconSemItens = styled.div`
  font-size: 60px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SemItens = () => {
  return (
    <Sem>
      <IconSemItens>
        {/* Você pode colocar um emoji ou um componente de ícone aqui dentro */}
        📂 
      </IconSemItens>
      Nenhum registro diário encontrado
    </Sem>
  );
};