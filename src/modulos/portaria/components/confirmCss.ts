import styled, { keyframes } from "styled-components";

const overs = keyframes`
  0% {
    width: 0%;
    background-color: #15c4faff; /* amarelo */
  }

  50% {
    width: 50%;
    background-color: #15fadbff; /* continua amarelo */
  }

  100% {
    width: 100%;
    background-color: #16a34a; /* verde */
  }
`;
export default {
    container: styled.div`
      margin-top: 15px;
      color: #16a34a;
      font-weight: bold;
    `,
    loadingBar: styled.div`
      height: 6px;
      width: 0%;
      background: #16a34a;
      animation: ${overs} 2s linear forwards;
    
    `
}