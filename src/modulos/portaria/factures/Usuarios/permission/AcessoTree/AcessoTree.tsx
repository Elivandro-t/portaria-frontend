import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useEffect, useRef, useState } from 'react';
import { BtnGlobal } from '../../../../../../components/btnGlobal/btnGlobal';
import Template from "../controle_de_filial_page/peermissionCss"
import PermissionApi from "../../../../service/usuarioApi"
import { notify } from '../../../../service/snackbarService';
type acess = {
    modulos: any[],
    handleReset: () => void,
    usuario:any,
}
export default function AcessoTree({ handleReset, usuario,modulos }: acess) {
    const [checked, setChecked] = useState<Record<string, boolean>>({});

    const handleTogle = (key: any) => {
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
    }
    const [lista, setLista] = useState<any[] | null>([])
    useEffect(() => {
        const handleModule = async () => {
            const json = await PermissionApi.ListaModulo();
            if (json) {
                setLista(json)
            }
        }
        handleModule();
    },[])
    const handleSalve = async () => {
        const lista = {

            lista: Object.entries(checked).map(([id, ativo]) => ({
                permissionId: Number(id),
                ativo: ativo
            }))
        }
        console.log(lista)
        const json = await PermissionApi.handlePermission(lista, usuario?.id);
        if (json.msg) {
            notify(json.msg, "success");
        }
                handleReset()

    }
   const initializedRef = useRef(false);

useEffect(() => {
 if (!modulos || modulos.length === 0) {
            setChecked({});
            return;
        }

  const inicial: Record<string, boolean> = {};

  modulos.forEach((m) => {
    inicial[m.id] = true;
  });

  setChecked(inicial);
  initializedRef.current = true;
}, [usuario?.id]);
    return (
        <>
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView
                    onSelectedItemsChange={(e: any, ids: any) => {
                        if (e?.code === 'Space') {
                            e.preventDefault();
                            handleTogle(Number(ids));

                        }
                    }}
                    
                >
                    <TreeItem sx={{fontSize:13,fontFamily:"sans-serif"}} itemId="grid" label={"Acess " +"- "+usuario?.nome}>
                        {lista?.map(item => (
                            <TreeItem
                                key={item.id}
                                itemId={item.id.toString()}
                                label={
                                    <div
                                        style={{ display: "flex", alignItems: "center", gap: 6 }}

                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTogle(item.id);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={!!checked[item.id]}
                                            readOnly
                                        />
                                        <span style={{fontFamily:"sans-serif",fontSize:13}}>{item.titulo}</span>
                                    </div>
                                }
                            />
                        ))}
                    </TreeItem>
                     <TreeItem itemId="grid02" label={"Perfil"}>
                        <TreeItem itemId={usuario?.perfil.nome.toString()} label={usuario?.perfil?.nome}>

                        </TreeItem>
                     </TreeItem>
                </SimpleTreeView>
            </Box>
            <Template.area_btn>
                <BtnGlobal titulo="Salvar" isvalid={false} nome_btn={"undefined"} click={handleSalve} />
                <BtnGlobal titulo="Cancelar" isvalid={true} nome_btn={"undefined"} click={handleReset} />
            </Template.area_btn>
        </>
    );
}
