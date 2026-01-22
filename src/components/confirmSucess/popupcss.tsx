import styled, { keyframes } from "styled-components";
const over = keyframes`
   0% {
    width: 100%;
    background-color: #15c4faff; /* amarelo */
  }

  100% {
    width: 0%;
    background-color: #16a34a; /* verde */
  }
`
export default {
  container: styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;

    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 560px) {
      padding: 0 25px;
    }
  `,
  confirm:styled.div`
   display: flex;
   width: 100%;
   height: 250px;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 20px;
   button{
    bottom: 0;
   }
  `,
  container_int: styled.section`
    width: 400px;
    min-height: 220px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
  `,

  header: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,

  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  `,

  buttons: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
    @media screen and (max-width: 560px) {
     font-size:14px;
    }
  `,
   loadingBar: styled.div`
        height: 6px;
        width: 100%;
        background: #2197e6;
        animation: ${over} 2s linear forwards;
      
    `
};
