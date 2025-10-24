import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Template from "./dropcss";
import imageCompression from "browser-image-compression";

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ isActive }) => (isActive ? "#3b82f6" : "#a1a1aa")};
  background-color: ${({ isActive }) => (isActive ? "#f0f9ff" : "#fafafa")};
  border-radius: 16px;
  padding: 20px ;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
`;

interface ImageDropZoneProps {
  onFileSelect?: (file: File | null) => void;
  resetSignal?: number;
  titulo?:string,
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({ onFileSelect,resetSignal,titulo }) => {
  const [image, setImage] = useState<string | null>(null);
  const options = {
    maxSizeMB: 1, // tamanho máximo (em MB)
    maxWidthOrHeight: 1280, // redimensiona se for muito grande
    useWebWorker: true, // processa em segundo plano (mais rápido)
  };
  
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file && file.type.startsWith("image/")) {
        setImage(URL.createObjectURL(file));
        try {
          const compressedFile = await imageCompression(file, options);
          onFileSelect?.(compressedFile);
        } catch (error) {
          console.error("Erro ao comprimir a imagem:", error);
        }




      }
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps, isDragActive,inputRef: dropzoneInputRef } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    onFileSelect?.(null); // limpa no componente pai também
    onFileSelect?.(null);
      if (dropzoneInputRef.current) dropzoneInputRef.current.value = "";
    
  };

 useEffect(() => {
    // 👇 sempre que resetSignal mudar, limpa a imagem
    setImage(null);
    onFileSelect?.(null);
    onFileSelect?.(null);
    if (dropzoneInputRef.current) dropzoneInputRef.current.value = "";

  }, [resetSignal]);

  return (
    <Container {...getRootProps()} isActive={isDragActive}>
      <input {...getInputProps()} ref={dropzoneInputRef}/>
      {image ? (
        <Template.Div>
          <Template.RemoveButton onClick={removeImage}>×</Template.RemoveButton>
          <Template.PreviewImage src={image} alt="Prévia" />
          <Template.Text>{titulo}</Template.Text>
        </Template.Div>
      ) : (
        <Template.Text>
          {isDragActive
            ? "Solte a imagem aqui..."
            : "Arraste e solte uma imagem ou clique para selecionar"}
        </Template.Text>
      )}
    </Container>
  );
};

export default ImageDropZone;
