import styled from "styled-components";
export default {
    container: styled.div`
    display: flex;
    flex-direction: column; 
    height: 100vh;
    position: relative; /* Garante que o botão se posicione em relação a este container */
    `,
    Main: styled.section`
    padding: 0 5px;
    `,
    ButtonContainer: styled.div`
     position: fixed; /* Troquei para fixed para ele não sumir ao dar scroll */
        bottom: 30px;
        right: 30px;
        z-index: 999;
    `,
    StyledActionButton: styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Gradiente moderno */
        color: white;
        border: none;
        cursor: pointer;
        font-size: 30px;
        box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1) rotate(90deg);
            box-shadow: 0 6px 20px rgba(37, 117, 252, 0.6);
            filter: brightness(1.1);
        }

        &:active {
            transform: scale(0.9); /* Efeito de clique */
        }
    `
}