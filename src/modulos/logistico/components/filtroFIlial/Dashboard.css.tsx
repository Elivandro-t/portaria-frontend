import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
const Template = {

  FilterArea: styled.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */    
    @media (min-width: 768px) {
      width: auto;
     
    }
  `,

  SelectGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,
  RefreshButton: styled.button<{ loading: boolean }>`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({ loading }) =>
      loading ? `${rotate} 1s linear infinite` : "none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,

  Label: styled.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,

  Select: styled.select`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    width: 100%; /* Full width no mobile */
    font-size: 14px;
    outline: none;

    @media (min-width: 768px) {
      min-width: 250px;
      width: auto;
    }
  `,

  Container: styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `,
  AddButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
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

export default Template;