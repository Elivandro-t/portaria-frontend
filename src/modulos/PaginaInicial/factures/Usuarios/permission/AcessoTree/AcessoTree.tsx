import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useCallback, useEffect, useState } from 'react';
import { BtnGlobal } from '../../../../../../components/btnGlobal/btnGlobal';
import Template from "../controle_de_filial_page/peermissionCss"
import PermissionApi from "../../../../../portaria/service/usuarioApi"
import { notify } from '../../../../../portaria/service/snackbarService';
import { FiltroFIlial } from '../../filtroFIlial/filtroFIlial';
import apiFiliais from "../../../../../portaria/service/filiaisApi/filiasAPi";
import filiaisUsuario from "../../../../service/apiUsuario"

type acess = {
    modulos: any[],
    handleReset: () => void,
    usuario: any,
}
export default function AcessoTree({ handleReset, usuario, modulos }: acess) {
    //habileta os checked dentro do ckeckbox
    const [checked, setChecked] = useState<Record<string, boolean>>({});
    const [checkedFilial, setCheckedFilial] = useState<Record<string, boolean>>({});

    const handleTogle = (key: any) => {
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
    }
    const handleTogleFilial = (key: number | string) => {
        setCheckedFilial((prev) => ({ ...prev, [key]: !prev[key] }));
        console.log("click")
    }

    const [lista, setLista] = useState<any[] | null>([])
    const [listaUsuario, setListaUsuario] = useState<any[] | null>([])
    const handleModule = async () => {
        const json = await PermissionApi.ListaModulo();
        if (json) {
            setLista(json)
        }
    }
    const handleModuleFilias = useCallback(async () => {
        const json = await filiaisUsuario.FiliaisUsuario(usuario?.id);
        if (json.acess) {
            setListaUsuario(json.acess)
        }
    }, [usuario?.id]
    )
    const [filial, setFilial] = useState("")

    const handleSalveFIliais = async () => {
        const data = {
            lista: Object.entries(checkedFilial).map(([id, ativo]) => ({
                permissionId: Number(id),
                ativo
            }))
        }
         await filiaisUsuario.addFiliais(data, usuario?.id);
        const list = {
            mod: {
                filial: filial
            },

            lista: Object.entries(checked).map(([id, ativo]) => ({
                permissionId: Number(id.replace("mod-", "")),
                ativo: ativo
            }))
        }
        await PermissionApi.handlePermission(list, usuario?.id);

    }

    const handleSalvarTudo = async () => {
        try {
                await handleSalveFIliais()
            notify("Permissões e filiais salvas com sucesso", "success");
            handleReset();
        } catch (error) {
            notify("Erro ao salvar permissões", "error");
            console.error(error);
        }
    };
    const [listaFiliais, setListaFiliais] = useState<any[]>([]);


    const carregarFiliais = async () => {
        try {
            const resposta = await apiFiliais.lista();
            if (resposta?.filial) {
                setListaFiliais(resposta.filial);
            }
        } catch (error) {
            notify("Erro ao carregar filiais", "error");
        }
    };
    useEffect(() => {
        handleModule();
        handleModuleFilias();
        carregarFiliais()

    }, [usuario.id, handleModuleFilias])
    useEffect(() => {
        // módulos
        if (modulos?.length) {
            const inicial: Record<string, boolean> = {};
            modulos.forEach((m) => {
                inicial[`mod-${m.id}`] = true;
            });
            setChecked(inicial);
        } else {
            setChecked({});
        }

        // filiais
        if (listaUsuario?.length) {
            const inicialFilial: Record<string, boolean> = {};
            listaUsuario.forEach((m) => {
                inicialFilial[m.id] = true;
            });
            setCheckedFilial(inicialFilial);
        } else {
            setCheckedFilial({});
        }
    }, [modulos, listaUsuario]);

    return (
        <>
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView
                    onSelectedItemsChange={(e: any, ids: any) => {
                        if (e?.code !== 'Space') return;

                        if (String(ids).startsWith("mod-")) {
                            handleTogle(ids);
                        } else {
                            handleTogleFilial(Number(ids));
                        }
                    }}
                >
                    <TreeItem sx={{ fontSize: 13, fontFamily: "sans-serif" }} itemId="grid" label={"Acess " + "- " + usuario?.nome}>
                        {lista?.map(item => (
                            <TreeItem
                                key={`mod-${item.id}`}
                                itemId={`mod-${item.id}`}

                                label={
                                    <div
                                        style={{ display: "flex", alignItems: "center", gap: 6 }}

                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTogle(`mod-${item.id}`);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={!!checked[`mod-${item.id}`]}
                                            readOnly
                                        />
                                        <span style={{ fontFamily: "sans-serif", fontSize: 13 }}>{item.titulo}</span>
                                    </div>
                                }
                            />
                        ))}
                    </TreeItem>
                    <TreeItem sx={{ fontSize: 13, fontFamily: "sans-serif" }} itemId="filiais" label={"Inclusão de Filias "}>
                        {listaFiliais?.map((item, index) => (
                            <TreeItem
                                key={index}
                                itemId={String(item.id)}
                                label={
                                    <div
                                        style={{ display: "flex", alignItems: "center", gap: 6 }}

                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTogleFilial(item.id);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={!!checkedFilial[item.id]}
                                            readOnly
                                        />
                                        <span style={{ fontFamily: "sans-serif", fontSize: 13 }}>{item.nome + item.numeroFilial}</span>
                                    </div>
                                }
                            />
                        ))}
                    </TreeItem>
                    <TreeItem itemId="grid02" label={"Perfil"}>
                        <TreeItem itemId={usuario?.perfil.nome.toString()} label={usuario?.perfil?.nome}>

                        </TreeItem>
                    </TreeItem>
                    <TreeItem itemId="grid03" label={"Filial Atual - " + usuario?.filial}>
                        <TreeItem itemId={usuario.nome} label={
                            <div
                                style={{ display: "flex", alignItems: "center", gap: 6 }}
                            >
                                <FiltroFIlial listaFiliais={listaFiliais} carregarDadosLogistico={(n) => setFilial(n)} />
                            </div>
                        }>

                        </TreeItem>
                    </TreeItem>
                </SimpleTreeView>
            </Box>
            <Template.area_btn>
                <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={handleSalvarTudo} />
                <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={handleReset} />
            </Template.area_btn>
        </>
    );
}
