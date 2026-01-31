import { MdInbox } from "react-icons/md";
import styled from "styled-components";

interface CamposProps {
    hasError?: boolean;
}

type colorProps = {
    color: string;
}

const Styles = {
    container: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 40px;
        background-color: #f8fafc;
        width: 100%;
        box-sizing: border-box;

        @media (max-width: 768px) {
            padding: 16px;
            gap: 15px;
        }
    `,

    titulo: styled.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        letter-spacing: -0.025em;
        margin: 0;
    `,

    FormSub: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background: #ffffff;
        padding: 20px 0;
        border-radius: 12px;
    `,

    CamposInput: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px;
        background: #f1f5f9;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        & > * {
            @media (max-width: 480px) {
                flex: 1 1 100%;
            }
        }
    `,

    Chip: styled.div<colorProps>`
        display: inline-flex;
        align-items: center;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        background-color: ${({ color }) => color + '15'}; 
        color: ${({ color }) => color};
        border: 1px solid ${({ color }) => color + '30'};
        white-space: nowrap;
    `,

    // --- LÓGICA DO SCROLL NO TOPO ---
    TableContainer: styled.div`
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: #fff;

        /* Inverte o container para o scroll ir para o topo */
        transform: rotateX(180deg); 
        
        /* Personalização da barra para mobile/web */
        &::-webkit-scrollbar {
            height: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
    `,

    Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        font-family: "Inter", sans-serif;
        min-width: 800px; 

        /* Inverte o conteúdo da tabela de volta ao normal */
        transform: rotateX(180deg); 

        thead {
            background-color: #f8fafc;
        }

        th {
            padding: 14px 16px;
            font-size: 0.7rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            border-bottom: 2px solid #e2e8f0;
            text-align: left;
        }

        td {
            padding: 12px 16px;
            font-size: 0.85rem;
            color: #334155;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
            white-space: nowrap; 
        }

        tbody tr:hover {
            background-color: #f8fafc;
        }
    `,
    // --- FIM DA LÓGICA DO SCROLL ---

    loadingRow: styled.tr`
        td {
            padding: 40px 0;
            text-align: center;
            border-bottom: none;
        }
    `,

    loadingContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #64748b;
    `,

    trBTN: styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 4px;
    `,

    visitante: styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #e2e8f0;
        h5 { margin: 0; color: #1e293b; font-size: 1.1rem; }
    `,

    imgemVisitante: styled.img`
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #6366f1;
    `,

    imagemArea: styled.div`
        display: flex;
        gap: 20px;
        padding: 20px;
        overflow-y: auto;
        max-height: 500px;
        @media (max-width: 768px) {
            flex-direction: column;
            max-height: 70vh;
        }
    `,

    divArea: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: #f8fafc;
        padding: 15px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        position: relative;
    `,

    tituloLabel: styled.label`
        font-size: 0.875rem;
        font-weight: 600;
        color: #475569;
    `,

    imgem: styled.img`
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
        @media (max-width: 768px) {
            height: auto;
        }
    `,

    btnDownload: styled.div`
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
    `,

    erro: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
    `,

    semItens: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #94a3b8;
    `,

    iconSemItens: styled(MdInbox)`
        font-size: 64px;
        color: #cbd5e1;
    `,

    Options: styled.option``,
    Select: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,
    label: styled.label`
        font-size: 0.9rem;
        font-weight: 500;
        color: #475569;
        margin-bottom: 4px;
    `,
    Campos: styled.input<CamposProps>`
        width: 100%;
        height: 38px;
        border-radius: 8px;
        border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#e2e8f0')};
        padding: 8px 12px;
        box-sizing: border-box;
        &:focus {
            outline: none;
            border-color: #6366f1;
        }
    `
};

export default Styles;