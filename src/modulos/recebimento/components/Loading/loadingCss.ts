import styled, { keyframes } from "styled-components";
const rotate = keyframes`
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}

`
export default {
    Container: styled.div`
    display: flex;
    width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      opacity: 0.8;
  color: #5B7FFF; /* O azul da sua marca */

  svg {
    animation: ${rotate} 1s linear infinite;
  }

  span {
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
  }
`
}