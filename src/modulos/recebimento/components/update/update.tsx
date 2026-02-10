import Template from "../../factures/Registro/registroCardRecebimento.styled";
import { Button, TextField, CircularProgress, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { subjet } from "../../../../jwt/jwtservice";
import api from "../../service/apiRecebimento"
import { notify } from "../../../portaria/service/snackbarService";
import { useState } from "react";
import { jsonMaterial } from "../json";
import { DeleteIcon } from "lucide-react";
import AddIcon from '@mui/icons-material/Add';

type props = {
    registroId: any,
    itemMP: any[],
    onClickhTogle: () => void
}
type ItemForm = {
    id: number
    qtdChamado: any;
    qtdPendentes: any;
};
type FormData = {
    registroId: any,
    usuarioId: any,
    itens: ItemForm[];
    save?: FilialItem[]
};
interface FilialItem {
    TipoBloco: string;
    qtdChamado: number | string;
    qtdPendentes: number | string;
}

export const UpdateRegistro = ({ itemMP, registroId, onClickhTogle }: props) => {
    const loading = false;

    //hook de validacao e envio de dados para api
    const { handleSubmit, register } = useForm<FormData>({
        defaultValues: {
            itens: itemMP.map(item => ({
                id: Number(item.id),
                qtdChamado: Number(item.qtdChamado),
                qtdPendentes: Number(item.qtdPendentes)
            }))
        }
    })
    //campos inputs
    const [campos, setCampos] = useState<FilialItem[]>([])
    //pega os dados que vem do token decodificado
    const order = subjet()
    //envia os dados para api
    const handleClick = async (data: FormData) => {
        data.registroId = registroId;
        data.usuarioId = order?.id;
        data.itens = data.itens.map(item => ({
            id: Number(item.id),
            qtdChamado: Number(item.qtdChamado),
            qtdPendentes: Number(item.qtdPendentes)
        }));
        const invalido = campos.some(item => !item.TipoBloco || item.qtdChamado === "" || item.qtdPendentes === "");
        if (invalido) return notify("Preencha todos os campos corretamente", "error");
        data.save = campos.map(item => ({
            TipoBloco: item.TipoBloco,
            qtdChamado: Number(item.qtdChamado),
            qtdPendentes: Number(item.qtdPendentes)
        }));

        console.log(JSON.stringify(data))
    if (data != null) {
        const resposta = await api.update(data);
        if (resposta) {
            notify("Salvo com sucesso", "success")
            onClickhTogle()
        }
    }
}
//pega o campo que ta vindo da api e valida com compos existente
const atualizarCampos = (index: number, campo: keyof FilialItem, valor: string | number) => {
    const novosCampos = [...campos];
    novosCampos[index] = { ...novosCampos[index], [campo]: valor };
    setCampos(novosCampos);
};
//adiciona mais uma campo na lista
const adicionarCampo = () => {
    const disponiveis = getMateriaisDisponiveis();
    if (disponiveis.length === 0) return;
    setCampos(prev => [...prev, {
        TipoBloco: "",
        qtdChamado: 0,
        qtdPendentes: 0
    }])
}
//// verifica se ainda tem o item do array disponivel
function getMateriaisDisponiveis(indexCampo?: any) {
    const tipoApi = itemMP.map(item => item.TipoBloco);
    return jsonMaterial.filter(s => {
        if (tipoApi.includes(s)) return false;
        const outroCampo = campos.some((item, index) => index !== indexCampo && item.TipoBloco === s);
        return !outroCampo;
    })
}
//remode o item pelo index
const removerCampo = (index: number) => {
    if (campos.length > 0) {
        setCampos(campos.filter((_, i) => i !== index));
    }
};
//pega o a quantidade de item da lista de bloco que está em json.ts
const totalMateriais = jsonMaterial.length;
//pega a quantidade de item que ta vindo da api
const usadosApi = itemMP.length;
const usadosFront = campos.length;
const totalUsados = usadosApi + usadosFront;
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
                        value={item?.TipoBloco}
                    />
                    <TextField
                        label="Qtd.Chamados"
                        type="number"
                        size="small"
                        {...register(`itens.${index}.qtdChamado`)}
                    />
                    <TextField
                        label="Qtd.Pendentes"
                        type="number"
                        size="small"
                        {...register(`itens.${index}.qtdPendentes`)}
                    />
                    <input
                        type="hidden"
                        {...register(`itens.${index}.id`)}
                    />
                </Template.form>
            ))}
        </Template.container_int>
        <Template.container_int>
            {campos.map((item, index) => (
                <Template.form key={index} >
                    <FormControl fullWidth size="small">
                        <InputLabel>Bloco</InputLabel>
                        <Select
                            value={item.TipoBloco}
                            label="Tipo.bloco"
                            onChange={(e) => atualizarCampos(index, "TipoBloco", e.target.value)}
                        >
                            {getMateriaisDisponiveis(index).map((m, i) => (
                                <MenuItem key={i} value={m}>{m}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        label="Qtd.qtdChamado"
                        type="number"
                        size="small"
                        value={item.qtdChamado}
                        onChange={(e) => atualizarCampos(index, "qtdChamado", e.target.value)}
                    />
                    <TextField
                        label="Qtd.qtdPendentes"
                        type="number"
                        size="small"
                        value={item.qtdPendentes}
                        onChange={(e) => atualizarCampos(index, "qtdPendentes", e.target.value)}
                    />
                    <IconButton
                        color="error"
                        disabled={campos.length === 0}
                        onClick={() => removerCampo(index)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Template.form>
            ))}

            {totalUsados < totalMateriais && (
                <Button
                    startIcon={<AddIcon />}
                    onClick={adicionarCampo}
                    sx={{ mt: 1, mb: 3 }}
                >
                    Adicionar outro material
                </Button>
            )}
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
