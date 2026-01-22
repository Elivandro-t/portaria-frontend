import { Route, Routes } from "react-router-dom"
import { PermissoesComponets } from "./factures/permissoes/permissoes"
import { ProtectedRoute } from "../portaria/service/ProtectedRoute"
import PaginaInicial from "./PaginaInicial"
import { ConfigComponent } from "./factures/config/config"
import { ResetComponets } from "./factures/reseteSenha/reseteRadom"
import { LogsComponets } from "../portaria/factures/logsDoSistema/Logs"
import { OutrosPage } from "./factures/outros/outroInfor"
import { UsuarioListaComponets } from "./factures/Usuarios/Usuarios"
import { PermissionComponent } from "./factures/Usuarios/permission/controle_de_filial_page/permission"
import { AdicionarPerfilRouter } from "./factures/adicionarPerfil/adicionarPerfil"
import { ControleFilial } from "./factures/controle_de_filial_page/controleFIlial"
import RegistroDeUsuarioComponent from "./factures/novoUsuario/registroUsuario"
import { AlterarSenhaUsuarioComponent } from "./factures/resetsenha/resetSenha"
import { HomeItens } from "./factures/homeItens/HomeItens"
import { MeuPerfil } from "./factures/meu_perfil/meu_Perfil"
import NotFund from "../../paga_segunds/404/NotFund"

const PaginaInicialRouter = () => {
    return (
        <Routes >
            <Route path="/" element={<PaginaInicial />}>
                <Route index element={<HomeItens />} />
                <Route path="reset" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <ResetComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                }>

                </Route>
                <Route path="profile" element={
                    <MeuPerfil key={Date.now()}
                    />
                } />

                <Route path="cadastro/usuario" element={
                    <ProtectedRoute allowedPermissions={["CADASTRO_USUARIO"]}>
                        <RegistroDeUsuarioComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="senha/usuario" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <AlterarSenhaUsuarioComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="perfil" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <AdicionarPerfilRouter key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="filiais" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <ControleFilial key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="access" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <PermissionComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="usuarios/lista" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <UsuarioListaComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="outros" element={
                    <ProtectedRoute allowedPermissions={["ALTERAR_CONFIGURACOES"]}>
                        <OutrosPage key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="logs" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_REGISTROS"]}>
                        <LogsComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="permissoes" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <PermissoesComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="/config" element={
                <ProtectedRoute allowedPermissions={["LISTA_GERAL"]}>
                    <ConfigComponent key={Date.now()}
                    />
                </ProtectedRoute>
            } >
            


            </Route>
            <Route path="*" element={<NotFund />} />


        </Routes>
    )
}
export default PaginaInicialRouter;