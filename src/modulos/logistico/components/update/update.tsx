import Template from "../../factures/Registro/registroCss";
import {Button, TextField, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// interface FilialItem {
//     tipo: string;
//     qtdAtivo: number | string;
//     qtdManutencao: number | string;
// }
type props = {
    itemMP: any[]
}
export const UpdateRegistro = ({ itemMP }: props) => {
    const loading = false;
    

    return (
        <Template.Card>
            <h2 style={{ marginBottom: '20px', color: '#334155' }}>Registro de Movimentação</h2>

            {/* Seleção de Filial */}

            {/* Grid de Itens */}
            <Template.container_int>
                {itemMP.map((item, index) => (
                    <Template.form key={index} >
                        <TextField
                            label="Tipo"
                            type="txt"
                            size="small"
                            value={item?.tipo}
                        />

                        <TextField
                            label="Qtd.Disponivel"
                            type="number"
                            size="small"
                            value={item?.qtdAtivo}
                        />

                        <TextField
                            label="Qtd.Manutenção"
                            type="number"
                            size="small"
                            value={item?.qtdManutencao}

                        />

                    </Template.form>
                ))}


            </Template.container_int>

            <Button
                variant="contained"
                fullWidth
                size="large"
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                disabled={loading}
                sx={{ bgcolor: '#5B7FFF', '&:hover': { bgcolor: '#4a6cf0' } }}
            >
                {loading ? 'Enviando...' : 'Atualizar Registro'}
            </Button>
        </Template.Card>
    );
};
{/* <td className="bold">{item?.tipo}</td>
                                <td className="status-ativo">{item?.qtdAtivo}</td>
                                <td className="status-manutencao">{item?.qtdManutencao}</td> */}