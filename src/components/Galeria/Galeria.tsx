import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

type Props = {
  src: string; // URL da imagem
  alt?: string;
  open: boolean;
  onClose: () => void;
};

export const ImageModal = ({ src, alt, open, onClose }: Props) => {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Header>
          <IconButton
            onClick={onClose}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Header>
        <Image src={src} alt={alt} />
      </ModalContent>
    </Overlay>
  );
};

// Styled-components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 10px 0;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: contain;

`;
