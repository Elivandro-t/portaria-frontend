import styled from "styled-components";

type LoginType = "code" | "admin" | "default";

type Props = {
  global: LoginType;
};

const loginStyles: Record<LoginType, { bg: string; hoverBg: string; color: string; hoverColor: string }> = {
  code: {
    bg: "#cad4d4",
    hoverBg: "transparent",
    color: "#000",
    hoverColor: "#dad6d6",
  },
  admin: {
    bg: "red",
    hoverBg: "darkred",
    color: "#fff",
    hoverColor: "#fff",
  },
  default: {
    bg: "#007BFF",
    hoverBg: "#0056b3",
    color: "#fff",
    hoverColor: "#fff",
  },
};

export const BtnLogin = styled.button<Props>`
  margin: 5px 0;
  width: 100%;
  height: 35px;
  border:0;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  transform: scale(0.97);
  cursor: pointer;
  
  background-color: ${({ global }) => loginStyles[global]?.bg ?? loginStyles.default.bg};
  color: ${({ global }) => loginStyles[global]?.color ?? loginStyles.default.color};

  &:active {
    transform: scale(0.95);
    font-size: 11px;
  }

  &:hover {
    background-color: ${({ global }) => loginStyles[global]?.hoverBg ?? loginStyles.default.hoverBg};
    color: ${({ global }) => loginStyles[global]?.hoverColor ?? loginStyles.default.hoverColor};
  }
`;
