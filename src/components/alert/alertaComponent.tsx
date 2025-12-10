import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
type props = {
    titulo: "success" | "info" | "warning" | "error",
    msg: string,
    link?:any,
    linkRouter?:any
}
export const AlertComponent = ({ titulo, msg,linkRouter}: props) => {
    return (
        <Stack sx={{ width: '100%'}} spacing={1}>
            <Alert severity={titulo}>{msg}
                {linkRouter &&
             <Link style={{marginLeft:10}} to={linkRouter} >
               Acesso antigo
             </Link>
            }
            </Alert>
            
        </Stack>
    )
}