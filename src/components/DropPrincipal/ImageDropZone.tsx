import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Template from "./dropcss";
import imageCompression from "browser-image-compression";
import { CircularProgress, Box, Typography, Modal, Button } from "@mui/material";
import Cropper, { type Point, type Area } from "react-easy-crop";

// ================== UTIL ==================
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });

async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<File> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Contexto não encontrado");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(new File([blob], "avatar.jpg", { type: "image/jpeg" }));
      }
    }, "image/jpeg");
  });
}

// ================== STYLES ==================
const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ isActive }) => (isActive ? "#6366f1" : "#e2e8f0")};
  border-radius: 12px;
  min-height: 180px;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s;
`;

// ================== PROPS ==================
interface ImageDropZoneProps {
  onFileSelect?: (file: File | null, avatarUrl?: string | null) => void;
  resetSignal?: number;
  titulo?: string;
  aspectRatio?: number;
  permission: any
}

// ================== COMPONENT ==================
const DropPrincipal: React.FC<ImageDropZoneProps> = ({
  onFileSelect,
  resetSignal,
  titulo,
  aspectRatio = 1,
  permission
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [isAvatarIcon, setIsAvatarIcon] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Cropper
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  // Avatares padrão (flat)
  const avatarIcons = [
    "/avatar/man.png",
    "/avatar/user.png",
    "/avatar/woman.png"];

  // ================== DROP ==================
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file?.type.startsWith("image/")) {
      setTempImage(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: uploading || !!tempImage,
  });

  // ================== CROP ==================
  const onCropComplete = useCallback((_area: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const handleConfirmCrop = async () => {
    if (!tempImage || !croppedAreaPixels) return;

    try {
      setUploading(true);

      const croppedFile = await getCroppedImg(tempImage, croppedAreaPixels);
      setImage(URL.createObjectURL(croppedFile));
      setTempImage(null);
      setIsAvatarIcon(false);

      const compressedFile = await imageCompression(croppedFile, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1280,
        useWebWorker: true,
        onProgress: (p) => setProgress(p),
      });

      onFileSelect?.(compressedFile, null);
    } catch (e) {
      console.error(e);
    } finally {
      setUploading(false);
    }
  };
  // Seleciono um avatar para exibir no drop
  const selecionarAvatar = async (src: string) => {
    setIsAvatarIcon(true);
    setImage(src);

    const response = await fetch(src);
    const blob = await response.blob();


    const file = new File([blob], "avatar.png", { type: blob.type });

    // FORM RECEBE UM FILE REAL
    onFileSelect?.(file, null);
  };

  // ================== REMOVE ==================
  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    setIsAvatarIcon(false);
    setProgress(0);
    onFileSelect?.(null, null);
    if (inputRef.current) inputRef.current.value = "";
  };

  // ================== RESET ==================
  useEffect(() => {
    setImage(null);
    setTempImage(null);
    setIsAvatarIcon(false);
    setProgress(0);
  }, [resetSignal]);

  // ================== RENDER ==================
  return (
    <>
      <Container {...getRootProps()} isActive={isDragActive}>
        <input {...getInputProps()} />

        {uploading ? (
          <Box textAlign="center">
            <CircularProgress variant="determinate" value={progress} />
            <Typography>{Math.round(progress)}%</Typography>
          </Box>
        ) : image ? (
          <Template.Div>
            <Template.RemoveButton onClick={removeImage}>×</Template.RemoveButton>
            <Template.PreviewImage src={image} />
            <Template.Text>
              {isAvatarIcon ? "Avatar selecionado" : "Imagem selecionada"}
            </Template.Text>
          </Template.Div>
        ) : (
          <Box textAlign="center">
            <Template.Text>{titulo || "Selecione uma imagem"}</Template.Text>
            {permission === "UNICO" && (
              <>
                <Typography variant="caption" color="text.secondary">
                  ou escolha um avatar
                </Typography>

                <Box mt={2} display="flex" gap={1} justifyContent="center">
                  {avatarIcons.map((avatar) => (
                    <Box
                      key={avatar}
                      onClick={(e) => {
                        e.stopPropagation();
                        selecionarAvatar(avatar);
                      }}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        border: "1px solid #e2e8f0",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": { borderColor: "#6366f1" },
                      }}
                    >
                      <img src={avatar} width={28} />
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        )}
      </Container>

      {/* MODAL CROP */}
      <Modal open={!!tempImage} onClose={() => setTempImage(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            borderRadius: 3,
            p: 3,
          }}
        >
          <Typography variant="h6" mb={2}>
            Ajuste a imagem
          </Typography>

          <Box sx={{ position: "relative", height: 300 }}>
            {tempImage && (
              <Cropper
                image={tempImage}
                crop={crop}
                zoom={zoom}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </Box>

          <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={() => setTempImage(null)}>Cancelar</Button>
            <Button variant="contained" onClick={handleConfirmCrop}>
              Cortar e salvar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DropPrincipal;
