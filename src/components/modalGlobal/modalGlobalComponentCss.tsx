import { styled } from "styled-components";

export default {
    container:styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      position: fixed;
      z-index: 9999;
      background-color: rgba(0,0,0,0.5);
    `,
   container_left:styled.section`
   display: flex;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `,
}