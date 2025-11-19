import styled from "styled-components";

export default {
  container: styled.div`
    background-color: #f2f2f2;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `,
  container_int: styled.div`
    padding: 40px 5px;
    margin-top: 2em;

    min-height: 100vh;

  `,
  div:styled.div`
    position: fixed;
    padding: 30px 10px;
    background-color: #f2f2f2;
    height: 40px;
    margin-top: 10px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

  width: 100%;
  `,
  busca: styled.input`
      width:100%;
      border-radius:5px;
      padding:10px ;
      border: 1px solid #b6aeaeff;
      outline: none;
      @media screen and (min-width: 760px){
         width:60%;
      }
    `,

};
