import styled from "styled-components";

export default {
    container:styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color:rgba(0,0,0.2);
    
    `,
    modal:styled.div`
    border-radius: 12px;
    height: 50%;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    position: relative;

    @media (min-width: 768px) {
      padding:40px 24px;
      margin-bottom: 20px;
    }
    `
}