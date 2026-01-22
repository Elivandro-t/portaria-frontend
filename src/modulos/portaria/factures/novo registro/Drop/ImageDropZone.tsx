import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Template from "./dropcss";
import imageCompression from "browser-image-compression";
import { LinearProgress, Box, Typography } from "@mui/material";

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ isActive }) => (isActive ? "#6366f1" : "#e2e8f0")};
  background-color: ${({ isActive }) => (isActive ? "#f8fafc" : "#ffffff")};
  border-radius: 16px;
  padding: 20px;
  min-height: 180px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  text-align: center;

  &:hover {
    border-color: #cbd5e1;
  }
`;

interface ImageDropZoneProps {
  onFileSelect?: (file: File | null) => void;
  resetSignal?: number;
  titulo?: string;
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({ onFileSelect, resetSignal, titulo }) => {
  const [image, setImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isCompressing, setIsCompressing] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file && file.type.startsWith("image/")) {
        setImage(URL.createObjectURL(file));
        setIsCompressing(true);
        setProgress(0);

        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1280,
          useWebWorker: true,
          // Callback que atualiza o progresso de 0 a 100
          onProgress: (val: number) => setProgress(val),
        };

        try {
          const compressedFile = await imageCompression(file, options);
          onFileSelect?.(compressedFile);
          setProgress(100);
        } catch (error) {
          console.error("Erro ao comprimir a imagem:", error);
        } finally {
          // Pequeno delay para o usuário ver a barra completa antes de finalizar
          setTimeout(() => setIsCompressing(false), 600);
        }
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive, inputRef: dropzoneInputRef } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: isCompressing,
  });

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    setProgress(0);
    onFileSelect?.(null);
    if (dropzoneInputRef.current) dropzoneInputRef.current.value = "";
  };

  useEffect(() => {
    setImage(null);
    setProgress(0);
    setIsCompressing(false);
    if (dropzoneInputRef.current) dropzoneInputRef.current.value = "";
  }, [resetSignal]);

  return (
    <Container {...getRootProps()} isActive={isDragActive}>
      <input {...getInputProps()} ref={dropzoneInputRef} capture="environment" accept="image/*" />
      
      {isCompressing ? (
        <Box sx={{ width: '100%', px: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
            carregando: {progress}%
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#f1f5f9',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#6366f1',
                borderRadius: 4,
              }
            }} 
          />
        </Box>
      ) : image ? (
        <Template.Div>
          <Template.RemoveButton onClick={removeImage}>×</Template.RemoveButton>
          <Template.PreviewImage src={image} alt="Prévia" />
          <Template.Text>{titulo}</Template.Text>
        </Template.Div>
      ) : (
        <Template.Text>
          {isDragActive
            ? "Solte a imagem aqui...."
            : titulo || "Arraste uma imagem ou clique para selecionar"}
        </Template.Text>
      )}
    </Container>
  );
};

export default ImageDropZone;