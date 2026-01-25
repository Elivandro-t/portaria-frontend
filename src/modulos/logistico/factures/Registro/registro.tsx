import { useEffect, useState } from "react";
import Template from "./registroCss";
import { Select, MenuItem, FormControl, InputLabel, Button, TextField, IconButton, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import filiasUsuaro from "../../../PaginaInicial/service/apiUsuario";
import { jsonMaterial } from "../../components/json";
import apiCadastro from "../../service/apiLogistico";
import { subjet } from "../../../../jwt/jwtservice";
import { notify } from "../../../portaria/service/snackbarService";

interface FilialItem {
    tipo: string;
    qtdAtivo: number | string;
    qtdManutencao: number | string;
}

const RegistroLogistico = () => {
    const user = subjet();
    const [campos, setCampos] = useState<FilialItem[]>([{ tipo: "", qtdAtivo: 0, qtdManutencao: 0 }]);
    const [filial, setFilial] = useState<any>("");
    const [filiais, setFiliais] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Carregar filiais
    useEffect(() => {
        const fetchFiliais = async () => {
            const resposta = await filiasUsuaro.FiliaisUsuario(user?.id);
            if (resposta?.acess) setFiliais(resposta.acess);
        };
        fetchFiliais();
    }, []);

    const adicionarCampo = () => {
        if (campos.length < 3) {
            setCampos([...campos, { tipo: "", qtdAtivo: 0, qtdManutencao: 0 }]);
        }
    };

    const removerCampo = (index: number) => {
        if (campos.length > 1) {
            setCampos(campos.filter((_, i) => i !== index));
        }
    };

    const atualizarCampos = (index: number, campo: keyof FilialItem, valor: string | number) => {
        const novosCampos = [...campos];
        novosCampos[index] = { ...novosCampos[index], [campo]: valor };
        setCampos(novosCampos);
    };

    const enviarCampos = async () => {
        if (!filial) return notify("Selecione uma filial","error");
        
        const invalido = campos.some(item => !item.tipo || item.qtdAtivo === "" || item.qtdManutencao === "");
        if (invalido) return notify("Preencha todos os campos corretamente","error");

        setLoading(true);
        try {
            const data = {
                usuario: user?.nome,
                numeroFIlial: filial?.filial,
                nomeFilial: filial.nome,
                usuarioId: user?.id,
                itens: campos
            };
            const resposta = await apiCadastro.cadastro(data);
            if (resposta?.msg) {
                notify(resposta.msg,"success");
                setCampos([{ tipo: "", qtdAtivo: 0, qtdManutencao: 0 }]);
                setFilial("");
            }
        } finally {
            setLoading(false);
        }
    };

    const getMateriaisDisponiveis = (indexAtual: number) => {
        const selecionados = campos.filter((_, i) => i !== indexAtual).map(c => c.tipo);
        return jsonMaterial.filter(m => !selecionados.includes(m) || campos[indexAtual].tipo === m);
    };

    return (
        <Template.container>
            <Template.Card>
                <h2 style={{ marginBottom: '20px', color: '#334155' }}>Registro de Movimentação</h2>
                
                {/* Seleção de Filial */}
                <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                    <InputLabel>Selecione a Filial</InputLabel>
                    <Select
                        value={filial}
                        onChange={(e) => setFilial(e.target.value)}
                        label="Selecione a Filial"
                    >
                        {filiais.map((item) => (
                            <MenuItem key={item.id} value={item}>
                                {item.filial} - {item.nome}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Grid de Itens */}
                <Template.container_int>
                    {campos.map((item, index) => (
                        <Template.form  key={index} >
                            <FormControl fullWidth size="small">
                                <InputLabel>Material</InputLabel>
                                <Select
                                    value={item.tipo}
                                    label="Tipo.Logistico"
                                    onChange={(e) => atualizarCampos(index, "tipo", e.target.value)}
                                >
                                    {getMateriaisDisponiveis(index).map((m, i) => (
                                        <MenuItem key={i} value={m}>{m}</MenuItem>
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
                                disabled={campos.length === 1}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Template.form>
                    ))}

                    {campos.length < 3 && (
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
                    size="large"
                    onClick={enviarCampos}
                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    disabled={loading}
                    sx={{ bgcolor: '#5B7FFF', '&:hover': { bgcolor: '#4a6cf0' } }}
                >
                    {loading ? 'Enviando...' : 'Finalizar Registro'}
                </Button>
            </Template.Card>
        </Template.container>
    );
};

export default RegistroLogistico;