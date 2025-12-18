import styled from "styled-components";

type Props = {
  hasError?: boolean;
};

const Styles = {
    container: styled.div`
        height: 100%;
        padding: 32px 156px;
        @media screen and (max-width: 760px) {
            padding: 32px 5px;
        }
    `,
    container_int: styled.div`
        display: flex;
        gap: 20px;
        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
    `,

    container_left: styled.section`
        flex: 1;
        padding: 20px;
        border-radius: 10px;
        @media screen and (max-width: 760px) {
            box-shadow: 0 8px 24px rgba(21, 101, 192, 0.08);
        }
    `,
    conainter_right: styled.section`
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 25px;
        border-radius: 10px;
    `,
    container_usuarioArea: styled.div`
        display: flex;
        gap: 10px;
    `,
    container_img: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 160px;
        margin: 0;
        aspect-ratio: 4 / 3;
        padding: 0.5px;
        color: #0f1724;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 5px;
        }
    `,

    container_titulo: styled.div`
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 600;
        color: #1565c0; /* Blue color for titles */
    `,
    area_infor: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 2px;
    `,
    meta: styled.div`
        margin-top: 14px;
        color: #6b7280;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    `,
    span: styled.span`
        padding: 5px 0;
    `,
    small: styled.small`
        margin: 0; 
        color: #6b7280; 
        font-size: 13px;
    `,
    nomeFilial: styled.div`
        text-align: start; 
        margin-top: 2px; 
        color: #888; 
        font-size: 13px;
    `,

    form: styled.form`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `,
    area_forma: styled.div`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 10px;
        scrollbar-width: thin;
    `,
    CamposInput: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 5px 0;
    `,
    input: styled.input<Props>`
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid rgba(15, 23, 36, 0.08);
        background: #fff;
        font-size: 14px;
        border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#ccc')};
        &:focus {
            outline: none;
            border-color: ${({ hasError }) => (hasError ? '#ff4d4f' : '#007BFF')};
        }
    `,
    label: styled.label`
        display: block;
        font-size: 13px;
        color: #0f1724;
        margin-bottom: 2px;
    `,
    Erros: styled.div`
        color: #ff4d4f; /* Red for errors */
        font-size: 12px;
        margin: 0px 10px;
    `,

    area_campo: styled.div`
        display: flex;
        gap: 10px;
    `,
    area_btn: styled.div`
        display: flex;
        width: 150px;
        gap: 10px;
    `,
};

export default Styles;