import styled from "styled-components";

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
  `,
};
