import Template from "../../factures/Registro/registroCardRecebimento.styled";
import { Button, TextField, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { subjet } from "../../../../jwt/jwtservice";
import api from "../../service/apiLogistico"
import { notify } from "../../../portaria/service/snackbarService";

type props = {
    registroId: any,
    itemMP: any[],
    onClickhTogle: () => void
}
type ItemForm = {
    id: number
    qtdAtivo: any;
    qtdManutencao: any;
};
type FormData = {
    registroId: any,
    usuarioId: any,
    itens: ItemForm[];
};
export const UpdateRegistro = ({ itemMP, registroId, onClickhTogle }: props) => {
    const loading = false;
    const { handleSubmit, register } = useForm<FormData>({
        defaultValues: {
            itens: itemMP.map(item => ({
                id: Number(item.id),
                qtdAtivo: Number(item.qtdAtivo),
                qtdManutencao: Number(item.qtdManutencao)
            }))
        }
    })
    const order = subjet()
    const handleClick = async (data: FormData) => {
        data.registroId = registroId;
        data.usuarioId = order?.id;
        data.itens = data.itens.map(item => ({
            id: Number(item.id),
            qtdAtivo: Number(item.qtdAtivo),
            qtdManutencao: Number(item.qtdManutencao)
        }));

        if (data != null) {
            console.log(JSON.stringify(data))
            const resposta = await api.update(data);
            if (resposta) {
                notify("Salvo com sucesso", "success")
                onClickhTogle()
            }
        }
    }
    return (
        <Template.Card>
            <h2 style={{ marginBottom: '20px', color: '#334155' }}>Registro de Movimentação</h2>
            <Template.container_int onSubmit={handleSubmit(handleClick)}>
                {itemMP.map((item, index) => (
                    <Template.form key={item.id} >
                        <TextField
                            disabled
                            label="Tipo"
                            type="txt"
                            size="small"
                            value={item?.tipo}
                        />

                        <TextField
                            label="Qtd.Disponivel"
                            type="number"
                            size="small"
                            {...register(`itens.${index}.qtdAtivo`)}

                        />

                        <TextField
                            label="Qtd.Manutenção"
                            type="number"
                            size="small"
                            {...register(`itens.${index}.qtdManutencao`)}

                        />

                        <input
                            type="hidden"
                            {...register(`itens.${index}.id`)}

                        />

                    </Template.form>
                ))}


            </Template.container_int>

            <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit(handleClick)}
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
