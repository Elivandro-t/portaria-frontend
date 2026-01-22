import styled from "styled-components"

const Sem = styled.div`
display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      gap: 10px;
      opacity: 0.8;`
const IconSemItens =  styled.div`
font-size: 60px;
      color: #999;`

export const SemItens = () => {

    return (

        <Sem>
            <IconSemItens/>
            Sem dados encontrado
        </Sem>

    )
}