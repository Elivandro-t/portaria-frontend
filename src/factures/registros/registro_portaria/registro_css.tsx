import styled from "styled-components";

export default {
  container: styled.div`
    background-color: #f2f2f2;
    padding: 80px 2px;
    min-height: 100vh;
  `,
  container_int:styled.div`
      background-color: #f2f2f2;

  display: flex;
  gap: 20px;
  width: 200px;
     position: fixed;
    top: 70px; /* altura do header */
    right:6.2%;
    z-index: 999;
    font-size: 20px;
    font-weight: bold;
    background: #FFF;
    border-radius: 5px;
    padding: 10px 20px;
    @media screen and (min-width:900px) {
          right:1.5%;

    }

  `
  
  }
