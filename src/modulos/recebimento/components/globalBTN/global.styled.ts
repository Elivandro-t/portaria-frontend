import styled from "styled-components";
type props = {
    cor: any
}
export default {
    AddButton: styled.button<props>`
      display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${({ cor }:any) =>
            cor
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                : "red"
        };
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px -1px rgba(109, 40, 217, 0.3);
    white-space: nowrap;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px -1px rgba(109, 40, 217, 0.4);
      filter: brightness(1.1);
    }

    &:active {
      transform: translateY(0);
    }

    svg {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      width: 100%;
      order: -1; /* No mobile, ele aparece no topo */
    }
  `,
};
