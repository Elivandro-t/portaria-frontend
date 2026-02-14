import styled from "styled-components";

const Template = {
  FilterArea: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 0;

    @media (min-width: 768px) {
      width: auto;
      margin-bottom: 0;
    }
  `,

  SelectGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  `,

  Label: styled.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: #444;
    font-family: "Inter", sans-serif;
  `,

  Select: styled.select`
    width: 100%;
    height: 48px; /* Altura confortável para mobile */
    padding: 0 12px;
    border-radius: 8px;
    border: 1.5px solid #e1e1e1;
    background: #fafafa;
    font-size: 16px; /* Evita zoom chato no iPhone */
    color: #333;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:focus {
      border-color: #007BFF;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    @media (min-width: 768px) {
      height: 42px;
      font-size: 14px;
      min-width: 280px;
    }
  `,

  // Container para envolver o componente se necessário
  Container: styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
  `,
};

export default Template;