import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
type props = {
    titulo: "success" | "info" | "warning" | "error",
    msg: string
}
export const AlertComponent = ({ titulo, msg }: props) => {
    return (
        <Stack sx={{ width: '100%'}} spacing={1}>
            <Alert severity={titulo}>{msg}</Alert>
        </Stack>
    )
}