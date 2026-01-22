// import React, { useState, useCallback, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import styled from "styled-components";
// import Template from "./dropcss";
// import imageCompression from "browser-image-compression";
// import { CircularProgress, Box, Typography } from "@mui/material";

// const Container = styled.div<{ isActive: boolean; hasImage: boolean }>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 2px dashed ${({ isActive }) => (isActive ? "#6366f1" : "#e2e8f0")};
//   background-color: ${({ isActive }) => (isActive ? "#f8fafc" : "#ffffff")};
//   border-radius: 12px;
//   min-height: 180px;
//   padding: 20px;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   position: relative;
//   overflow: hidden;

//   &:hover {
//     border-color: #cbd5e1;
//     background-color: #fcfcfc;
//   }
// `;

// interface ImageDropZoneProps {
//   onFileSelect?: (file: File | null) => void;
//   resetSignal?: number;
//   titulo?: string;
// }

// const DropPrincipal: React.FC<ImageDropZoneProps> = ({ onFileSelect, resetSignal, titulo }) => {
//   const [image, setImage] = useState<string | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const onDrop = useCallback(
//     async (acceptedFiles: File[]) => {
//       const file = acceptedFiles[0];
//       if (file && file.type.startsWith("image/")) {
//         setImage(URL.createObjectURL(file));
//         setUploading(true);
//         setProgress(0);

//         const options = {
//           maxSizeMB: 1,
//           maxWidthOrHeight: 1280,
//           useWebWorker: true,
//           // Callback de progresso nativo da biblioteca
//           onProgress: (p: number) => setProgress(p),
//         };

//         try {
//           const compressedFile = await imageCompression(file, options);
//           onFileSelect?.(compressedFile);
//         } catch (error) {
//           console.error("Erro ao comprimir:", error);
//         } finally {
//           setUploading(false);
//         }
//       }
//     },
//     [onFileSelect]
//   );

//   const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//     multiple: false,
//     disabled: uploading, // Bloqueia novo drop enquanto processa
//   });

//   const removeImage = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setImage(null);
//     setProgress(0);
//     onFileSelect?.(null);
//     if (inputRef.current) inputRef.current.value = "";
//   };

//   useEffect(() => {
//     setImage(null);
//     setProgress(0);
//     if (inputRef.current) inputRef.current.value = "";
//   }, [resetSignal]);

//   return (
//     <Container {...getRootProps()} isActive={isDragActive} hasImage={!!image}>
//       <input {...getInputProps()} />

//       {uploading ? (
//         <Box sx={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress variant="determinate" value={progress} size={60} thickness={4} sx={{ color: '#6366f1' }} />
//           <Box
//             sx={{
//               top: 0, left: 0, bottom: 0, right: 0,
//               position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
//             }}
//           >
//             <Typography variant="caption" component="div" color="text.secondary" sx={{ fontWeight: 700 }}>
//               {`${Math.round(progress)}%`}
//             </Typography>
//           </Box>
//           <Template.Text>Processando imagem...</Template.Text>
//         </Box>
//       ) : image ? (
//         <Template.Div>
//           <Template.RemoveButton onClick={removeImage}>×</Template.RemoveButton>
//           <Template.PreviewImage src={image} alt="Prévia" />
//           <Template.Text >{titulo || "Imagem selecionada"}</Template.Text>
//         </Template.Div>
//       ) : (
//         <Box sx={{ textAlign: 'center' }}>
//           <Template.Text>
//             {isDragActive
//               ? "Solte para processar"
//               : titulo ? titulo : "Arraste uma foto ou clique aqui"}
//           </Template.Text>
//           <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mt: 1 }}>
//             PNG, JPG até 10MB (será otimizada)
//           </Typography>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default DropPrincipal;
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import Template from "./dropcss";
import imageCompression from "browser-image-compression";
import { CircularProgress, Box, Typography, Modal, Button } from "@mui/material";
import Cropper, { type Point, type Area } from "react-easy-crop";

// funcao que corta a imagem antes de enviar
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
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
        resolve(new File([blob], "cropped_image.jpg", { type: "image/jpeg" }));
      }
    }, "image/jpeg");
  });
}

// --- Componente Principal ---

const Container = styled.div<{ isActive: boolean; hasImage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ isActive }) => (isActive ? "#6366f1" : "#e2e8f0")};
  background-color: ${({ isActive }) => (isActive ? "#f8fafc" : "#ffffff")};
  border-radius: 12px;
  min-height: 180px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #cbd5e1;
    background-color: #fcfcfc;
  }
`;

interface ImageDropZoneProps {
  onFileSelect?: (file: File | null) => void;
  resetSignal?: number;
  titulo?: string;
  aspectRatio?: number; // Opcional: ex: 1 para quadrado, 16/9 para wide
}

const DropPrincipal: React.FC<ImageDropZoneProps> = ({ onFileSelect, resetSignal, titulo, aspectRatio = 1 }) => {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Estados do Cropper
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("image/")) {
      setTempImage(URL.createObjectURL(file));
    }
  }, []);

  const onCropComplete = useCallback((_area: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

const handleConfirmCrop = async () => {
    if (!tempImage || !croppedAreaPixels) return;

    try {
      setUploading(true);
      const croppedFile = await getCroppedImg(tempImage, croppedAreaPixels);

      // Limpa modal de crop e mostra preview local
      setImage(URL.createObjectURL(croppedFile));
      setTempImage(null);

      // Compressão
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1280,
        useWebWorker: true,
        onProgress: (p: number) => setProgress(p),
      };

      const compressedFile = await imageCompression(croppedFile, options);
      onFileSelect?.(compressedFile);
    } catch (error) {
      console.error("Erro ao processar imagem:", error);
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: uploading || !!tempImage,
  });
// funcao que remove a imagem
  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    setProgress(0);
    onFileSelect?.(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    setImage(null);
    setTempImage(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  }, [resetSignal]);

  return (
    <>
      <Container {...getRootProps()} isActive={isDragActive} hasImage={!!image}>
        <input {...getInputProps()} />

        {uploading ? (
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress variant="determinate" value={progress} size={60} sx={{ color: '#6366f1' }} />
            <Typography variant="caption" display="block">{Math.round(progress)}%</Typography>
            <Template.Text>Otimizando...</Template.Text>
          </Box>
        ) : image ? (
          <Template.Div>
            <Template.RemoveButton onClick={removeImage}>×</Template.RemoveButton>
            <Template.PreviewImage src={image} alt="Prévia" />
            <Template.Text>{titulo || "Imagem selecionada"}</Template.Text>
          </Template.Div>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Template.Text>{titulo || "Clique ou arraste uma foto"}</Template.Text>
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>PNG, JPG até 10MB</Typography>
          </Box>
        )}
      </Container>

      {/* MODAL DE CORTE */}
      <Modal open={!!tempImage} onClose={() => setTempImage(null)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: { xs: '90vw', md: 500 }, bgcolor: 'white', borderRadius: 4, p: 4, boxShadow: 24
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Ajuste sua imagem</Typography>

          <Box sx={{ position: 'relative', width: '100%', height: 300, bgcolor: '#333' }}>
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

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button onClick={() => setTempImage(null)} color="inherit">Cancelar</Button>
            <Button
              onClick={handleConfirmCrop}
              variant="contained"
              sx={{ bgcolor: '#6366f1', '&:hover': { bgcolor: '#4f46e5' } }}
            >
              Cortar e Salvar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DropPrincipal;