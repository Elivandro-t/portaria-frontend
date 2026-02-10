import Template from "../../factures/Registro/registroCss";
import { Select, MenuItem, FormControl, InputLabel, Button, TextField, IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { subjet } from "../../../../jwt/jwtservice";
import api from "../../service/apiLogistico"
import { notify } from "../../../portaria/service/snackbarService";
import { jsonMaterial } from "../json"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";


import { useState } from "react";
import { DeleteIcon } from "lucide-react";
type props = {
    registroId: any,
    itemMP: any[],
    onClickhTogle: () => void,
    closed:()=>void
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
    update?: FilialItem[]
};
interface FilialItem {
    tipo: string;
    qtdAtivo: number | string;
    qtdManutencao: number | string;
}
export const UpdateRegistro = ({ itemMP, registroId, onClickhTogle,closed }: props) => {
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
    const [campos, setCampos] = useState<FilialItem[]>([])
    const order = subjet()
    const handleClick = async (data: FormData) => {
        
        data.registroId = registroId;
        data.usuarioId = order?.id;
        data.itens = data.itens.map(item => ({
            id: Number(item.id),
            qtdAtivo: Number(item.qtdAtivo),
            qtdManutencao: Number(item.qtdManutencao)
        }));
        if (campos.length > 0) {
        const invalido = campos.some(item => !item.tipo || item.qtdAtivo === "" || item.qtdManutencao === "");
                if (invalido) return notify("Preencha todos os campos corretamente","error");
            data.update = campos.map(item => ({
                tipo: item.tipo,
                qtdAtivo: Number(item.qtdAtivo),
                qtdManutencao: Number(item.qtdManutencao)
            }));
        } 
        if (data != null) {
            console.log(JSON.stringify(data))
            const resposta = await api.update(data);
            if (resposta) {
                notify("Salvo com sucesso", "success")
                onClickhTogle()
            }
        }
    }
    const atualizarCampos = (index: number, campo: keyof FilialItem, valor: string | number) => {
        const novosCampos = [...campos];
        novosCampos[index] = { ...novosCampos[index], [campo]: valor };
        setCampos(novosCampos);
    };
    const adicionarCampo = () => {
        const disponiveis = getMateriaisDisponiveis();

        if (disponiveis.length === 0) return;

        setCampos(prev => [
            ...prev,
            {
                tipo: "",
                qtdAtivo: 0,
                qtdManutencao: 0
            }
        ]);
    };


    const getMateriaisDisponiveis = (indexAtual?: number) => {
        const tiposApi = itemMP.map(item => item.tipo);

        return jsonMaterial.filter(m => {
            // nunca pode repetir item que já veio da API
            if (tiposApi.includes(m.descricao)) return false;
            // verifica se já foi selecionado em outro campo
            const usadoEmOutroCampo = campos.some(
                (c, i) => i !== indexAtual && c.tipo === m.descricao
            );

            return !usadoEmOutroCampo;
        });
    };
    const removerCampo = (index: number) => {
        if (campos.length > 0) {
            setCampos(campos.filter((_, i) => i !== index));
        }
    };
    const totalMateriais = jsonMaterial.length;

    const usadosApi = itemMP.length;
    const usadosFront = campos.length;

    const totalUsados = usadosApi + usadosFront;
    return (
        <Template.Card style={{position:"relative"}}>
            <h2 style={{ marginBottom: '20px', color: '#334155' }}>Registro de Movimentação</h2>
            <Template.container_int onSubmit={handleSubmit(handleClick)}>
                <IconButton 
                              onClick={closed}
                              sx={{ 
                                color: "rgba(7, 57, 131, 0.7)",
                                position:"absolute",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                top: 0,right:0,
                                transition: "0.3s",
                                margin:1,
                                "&:hover": { 
                                  color: "#3d3737", 
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  transform: "rotate(90deg)" 
                                }
                              }}
                            >
                              <CloseIcon fontSize="small" />
                            </IconButton>
                {/* <button style={{position:"absolute",top: 0,right:0,padding:10,margin:10}} >x</button> */}
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
                <Template.container_int>
                    {campos.map((item, index) => (
                        <Template.form key={index} >
                            <FormControl fullWidth size="small">
                                <InputLabel>Material</InputLabel>
                                <Select
                                    value={item.tipo}
                                    label="Tipo.Logistico"
                                    onChange={(e) => atualizarCampos(index, "tipo", e.target.value)}
                                >
                                    {getMateriaisDisponiveis(index).map((m, i) => (
                                        <MenuItem key={i} value={m?.descricao}>{m?.descricao}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                label="Qtd.Disponivel"
                                type="number"
                                size="small"
                                value={item.qtdAtivo}
                                onChange={(e) => atualizarCampos(index, "qtdAtivo", e.target.value)}
                            />

                            <TextField
                                label="Qtd.Manutenção"
                                type="number"
                                size="small"
                                value={item.qtdManutencao}
                                onChange={(e) => atualizarCampos(index, "qtdManutencao", e.target.value)}
                            />

                            <IconButton
                                color="error"
                                onClick={() => removerCampo(index)}
                                disabled={campos.length === 0}
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
