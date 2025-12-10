import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingRota = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color:rgba(123, 176, 233, 1);
  border-radius: 50%;
  animation: ${rotate} 0.5s linear infinite;
  margin:40px 0;

`;


export const Section = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 100%;
height: 100vh;
padding:10px 0;
color:#7788;
font-size:20px;
`