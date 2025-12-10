import CircularProgress from "@mui/material/CircularProgress";

import Backdrop from "@mui/material/Backdrop";

export const LoadingSecundary = ()=>{
    return(
   <Backdrop
        open={true}
        sx={{ color: "#032a57", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div style={{display:"flex",flexDirection:"column",gap:10,alignItems:"center"}}>
          <CircularProgress color="inherit" />
        <>carregando</>
        </div>
      </Backdrop>
    )
}