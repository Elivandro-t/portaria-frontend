import styled from "styled-components";

export default {
  container: styled.main`
    position: relative;
   background-color:var(--cor-auth);
   height: 100vh;
    `,
  Container_int: styled.main`
      padding:0 26px;
      @media screen and (max-width: 560px) {
        padding: 0;
      }


    
  `,
  container_int: styled.div`
  width: 100%;
  `,
  placeholder: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #ccc;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
      color: #007bff;
    }

    p {
      font-size: 16px;
      color: #000;
    }
  `,
}