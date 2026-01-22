import styled, { keyframes } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Fade, Backdrop } from "@mui/material";

type Props = {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
};

export const ImageModal = ({ src, alt, open, onClose }: Props) => {
  return (
    // Backdrop do MUI já resolve acessibilidade e bloqueio de scroll
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{ 
        zIndex: 9999, 
        backgroundColor: "rgba(121, 124, 131, 0.9)", // Slate 900 com opacidade
        backdropFilter: "blur(8px)" // Efeito de vidro no fundo
      }}
    >
      <Fade in={open}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Header>
            <IconButton
              onClick={onClose}
              sx={{ 
                color: "rgba(255,255,255,0.7)",
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: "0.3s",
                "&:hover": { 
                  color: "#fff", 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "rotate(90deg)" 
                }
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Header>
          
          <ImageWrapper>
            <Image 
              src={src} 
              alt={alt || "Visualização"} 
              onDragStart={(e) => e.preventDefault()} // UX: impede arrastar a imagem
            />
          </ImageWrapper>
          
          {alt && <Caption>{alt}</Caption>}
        </ModalContainer>
      </Fade>
    </Backdrop>
  );
};

// Animação de entrada da imagem
const zoomIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 1000px;
  outline: none;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

const ImageWrapper = styled.div`
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${zoomIn} 0.3s ease-out;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  user-select: none;
`;

const Caption = styled.p`
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-top: 16px;
  font-weight: 500;
`;