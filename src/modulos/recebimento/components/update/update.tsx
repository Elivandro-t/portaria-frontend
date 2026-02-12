import Template from "./update.styled";
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
    qtdPorto: any;
    qtdPendentes: any;
    qtdDescarregado:any
};
type FormData = {
    registroId: any,
    usuarioId: any,
    itens: ItemForm[];
    save?: FilialItem[]
};
interface FilialItem {
    TipoBloco: string;
    qtdPorto: number | string;
    qtdPendentes: number | string;
    qtdDescarregado:any
}

export const UpdateRegistro = ({ itemMP, registroId, onClickhTogle }: props) => {
    const loading = false;

    //hook de validacao e envio de dados para api
    const { handleSubmit, register } = useForm<FormData>({
        defaultValues: {
            itens: itemMP.map(item => ({
                id: Number(item.id),
                qtdChamado: Number(item?.qtdPorto),
                qtdPendentes: Number(item?.qtdPendentes),
                qtdDescarregado:Number(item?.qtdDescarregado)
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
            id: Number(item?.id),
            qtdPorto: Number(item?.qtdPorto),
            qtdPendentes: Number(item?.qtdPendentes),
            qtdDescarregado:Number(item?.qtdDescarregado)
        }));
        const invalido = campos.some(item => !item.TipoBloco || item.qtdPorto === "" || item.qtdPendentes === "");
        if (invalido) return notify("Preencha todos os campos corretamente", "error");
        data.save = campos.map(item => ({
            TipoBloco: item?.TipoBloco,
            qtdPorto: Number(item?.qtdPorto),
            qtdPendentes: Number(item?.qtdPendentes),
            qtdDescarregado:Number(item?.qtdDescarregado)
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
        qtdPorto: 0,
        qtdPendentes: 0,
        qtdDescarregado:0
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
        <h2>Registro de Movimentação</h2>
        
        {/* Seção de Itens Existentes (API) */}
        <Template.container_int>
            {itemMP.map((item, index) => (
                <Template.form key={item.id} >
                    <TextField
                        disabled
                        label="Tipo de Material"
                        variant="filled"
                        size="small"
                        fullWidth
                        value={item?.TipoBloco}
                    />
                    <TextField
                        label="Qtd. Porto"
                        type="number"
                        size="small"
                        fullWidth
                        {...register(`itens.${index}.qtdPorto`)}
                    />
                    <TextField
                        label="Qtd. Pendentes"
                        type="number"
                        size="small"
                        fullWidth
                        {...register(`itens.${index}.qtdPendentes`)}
                    />
                     <TextField
                        label="Qtd. Descarregado"
                        type="number"
                        size="small"
                        fullWidth
                        {...register(`itens.${index}.qtdDescarregado`)}
                    />
                    <div style={{ width: '40px' }} /> {/* Espaçador para alinhar com o botão de deletar abaixo */}
                    <input type="hidden" {...register(`itens.${index}.id`)} />
                </Template.form>
            ))}
        </Template.container_int>

        {/* Seção de Novos Itens (Campos Dinâmicos) */}
        <Template.container_int>
            {campos.map((item, index) => (
                <Template.form key={index} >
                    <FormControl fullWidth size="small">
                        <InputLabel>Selecionar Bloco</InputLabel>
                        <Select
                            value={item.TipoBloco}
                            label="Selecionar Bloco"
                            onChange={(e) => atualizarCampos(index, "TipoBloco", e.target.value)}
                        >
                            {getMateriaisDisponiveis(index).map((m, i) => (
                                <MenuItem key={i} value={m}>{m}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        label="Qtd. Porto"
                        type="number"
                        size="small"
                        fullWidth
                        value={item.qtdPorto}
                        onChange={(e) => atualizarCampos(index, "qtdPorto", e.target.value)}
                    />
                    <TextField
                        label="Qtd. Pendente"
                        type="number"
                        size="small"
                        fullWidth
                        value={item.qtdPendentes}
                        onChange={(e) => atualizarCampos(index, "qtdPendentes", e.target.value)}
                    />
                     <TextField
                        label="Qtd. Descarregado"
                        type="number"
                        size="small"
                        fullWidth
                        value={item.qtdDescarregado}
                        onChange={(e) => atualizarCampos(index, "qtdDescarregado", e.target.value)}
                    />
                    <IconButton
                        color="error"
                        onClick={() => removerCampo(index)}
                        sx={{ marginTop: '4px' }}
                    >
                        <DeleteIcon size={20} />
                    </IconButton>
                </Template.form>
            ))}

            {totalUsados < totalMateriais && (
                <Button
                    startIcon={<AddIcon />}
                    onClick={adicionarCampo}
                    variant="text"
                    sx={{ 
                        mt: 1, 
                        mb: 3, 
                        color: '#16a34a', 
                        '&:hover': { bgcolor: '#f0fdf4' },
                        fontWeight: 600
                    }}
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
            sx={{ 
                bgcolor: '#2563eb', 
                py: 1.5,
                borderRadius: '10px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                '&:hover': { bgcolor: '#1d4ed8', boxShadow: 'none' },
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600
            }}
        >
            {loading ? 'Processando...' : 'Salvar Alterações'}
        </Button>
    </Template.Card>
);
};
