import { lazy, type ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import { ControleDeAcesso } from "../../components/controleDeacesso/controledeAcesso";
import { AdicionarPerfilRouter } from "./factures/adicionarPerfil/adicionarPerfil";
import { ConfigComponent } from "./factures/config/config";
import { ControleFilial } from "./factures/controle_de_filial_page/controleFIlial";
import { ListahistoryComponent } from "./factures/history/lista/ListaHistory";
import { LogsComponets } from "./factures/logsDoSistema/Logs";
import { MeuPerfil } from "./factures/meu_perfil/meu_Perfil";
import { OutrosPage } from "./factures/outros/outroInfor";
import { PermissoesComponets } from "./factures/permissoes/permissoes";
import { MeusRegistroComponets } from "./factures/registros/meus_registros/meusRegistros";
import { ResetComponets } from "./factures/reseteSenha/reseteRadom";
import { AlterarSenhaUsuarioComponent } from "./factures/resetsenha/resetSenha";
import { UsuarioListaComponets } from "./factures/Usuarios/Usuarios";
import { VisitantesListaComponets } from "./factures/Visitantes/visitantes";
import { ProtectedRoute } from "./service/ProtectedRoute";
import { HomeComponent } from "./factures/home/home";
import { ListaRegistroComponent } from "./factures/history/RegistroFiliais/ListaRegistroHistory";
import { RegistrosPortaria } from "./factures/novo registro/registroPortaria";
import NotFund from "../../paga_segunds/404/NotFund";
import { RedirectByPermissoes } from "../../RedirectByPerfil";
import { subjet } from "./service/jwt/jwtservice";
import MeusRegistros from "./factures/registros/registro_portaria/registro"
import { PermissionComponent } from "./factures/Usuarios/permission/controle_de_filial_page/permission";

function PortariaRoutes() {
  const perfil = subjet()

    function lazyWidth<T extends ComponentType>
        (factory: () => Promise<{ default: T }>, delay: number) {
        return lazy(() =>
            Promise.all([
                factory(),
                new Promise(resolve => setTimeout(resolve, delay))
            ]).then(([module]) => module)
        );
    }
    const RegistrosPortariaAntigo = lazyWidth(() => import("./factures/novo registro/registroPortariaAntigo"), 500);
    const VisualizarRegistro = lazyWidth(() => import("./factures/registros/detalhes_registro/visualizar_registro"), 500);
    const RegistroDeUsuarioComponent = lazyWidth(() => import("./factures/novoUsuario/registroUsuario"), 500);
    return (
        <Routes>
              <Route index element={
                           <RedirectByPermissoes permissoes={perfil?.perfil} />}
                         />
            <Route path="/active"
                element={
                    <ProtectedRoute >
                        <HomeComponent key={Date.now()} />
                    </ProtectedRoute>
                } >
                <Route path="pendentes" element={
                    <ProtectedRoute allowedPermissions={["REGISTRAR_ENTRADA"]}>
                        <MeusRegistros key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="gerais" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_REGISTROS"]}>
                        <ListaRegistroComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="/teste" element={<HomeComponent key={Date.now()} />} />
            {/* rota pai */}
            <Route path="/controle"
                element={
                    <ProtectedRoute >
                        <ControleDeAcesso key={Date.now()} />
                    </ProtectedRoute>
                } >
                <Route path="registro-portaria-cd" element={
                    <ProtectedRoute allowedPermissions={["CRIAR_REGISTRO"]}>
                        <RegistrosPortaria key={Date.now()}
                        />
                    </ProtectedRoute>

                } />
                <Route path="registro" element={
                    <ProtectedRoute allowedPermissions={["CRIAR_REGISTRO"]}>
                        <RegistrosPortariaAntigo key={Date.now()}
                        />
                    </ProtectedRoute>


                } />
                <Route path="meus-registros" element={
                    <ProtectedRoute allowedPermissions={["VISUALIZAR_REGISTRO"]}>
                        <MeusRegistroComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="profile" element={
                    <ProtectedRoute allowedPermissions={["VISUALIZAR_REGISTRO"]}>
                        <MeuPerfil key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                {/* <Route path="meus-pedidos"  element={<MainComponent />} /> */}
                <Route path="detalhes-registro" element={
                    <ProtectedRoute allowedPermissions={["REGISTRAR_SAIDA", "REGISTRAR_ENTRADA", "VISUALIZAR_REGISTRO"]}>
                        <VisualizarRegistro key={Date.now()}
                        />
                    </ProtectedRoute>
                } />

                {/*cadastro de usuario*/}LogsComponent
            </Route>
            <Route path="config" element={
                <ProtectedRoute allowedPermissions={["LISTA_GERAL"]}>
                    <ConfigComponent key={Date.now()}
                    />
                </ProtectedRoute>
            } >

                <Route path="reset" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <ResetComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                }>

                </Route>

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
                <Route path="permissoes" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <PermissoesComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="visitantes/lista" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_USUARIOS"]}>
                        <VisitantesListaComponets key={Date.now()}
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

                <Route path="historico" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_REGISTROS"]}>
                        <ListahistoryComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="portaria" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_REGISTROS"]}>
                        <ListaRegistroComponent key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
                <Route path="portaria/novo" element={
                    <ProtectedRoute allowedPermissions={["CRIAR_REGISTRO"]}>
                        <RegistrosPortaria key={Date.now()}
                        />
                    </ProtectedRoute>
                }>
                </Route>
                <Route path="logs" element={
                    <ProtectedRoute allowedPermissions={["GERENCIAR_REGISTROS"]}>
                        <LogsComponets key={Date.now()}
                        />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="*" element={<NotFund />} />


        </Routes>
    )
}

export default PortariaRoutes;