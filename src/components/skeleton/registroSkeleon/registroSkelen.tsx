import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function CardSkeleton() {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Texto "Criado em..." */}
      <Skeleton
        variant="text"
        sx={{ width: 200, height: 20, mb: 1, ml: 1 }}
      />

      {/* Card */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* Imagem */}
        <Skeleton variant="rectangular" width={80} height={80} sx={{ borderRadius: "6px" }} />

        {/* Textos */}
        <Box sx={{ flex: 1, ml: 2 }}>
          <Skeleton variant="text" width={160} height={22} />
          <Skeleton variant="text" width={260} height={22} />
          <Skeleton variant="text" width={200} height={22} />
          <Skeleton variant="text" width={180} height={22} />
        </Box>

        {/* Chips "AGUARDANDO ENTRADA" */}
        <Skeleton variant="rounded" width={160} height={32} />
      </Box>
    </Box>
  );
}
