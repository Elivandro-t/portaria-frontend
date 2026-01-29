import styled from "styled-components";

export default {
  container: styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    padding: 16px 5px;
     @media (min-width: 768px) {
      padding: 16px;
    }
  `,

  modal: styled.div`
  padding-left: 10px 0;
    border-radius: 12px;

    width: 100%;
    max-width: 700px;
    max-height: 90vh;

    padding: 16px 5px;
    overflow-y: auto;
    display: block;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    @media (min-width: 768px) {
      padding: 24px;
    }
  `,
};
