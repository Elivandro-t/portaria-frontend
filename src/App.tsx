import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingR } from "./modulos/portaria/factures/LoadingR";
import { HomeComponent } from "./modulos/portaria/factures/home/home";
import { LoginComponen } from "./modulos/portaria/factures/auth/login/Login";
import { ProtectedRoute } from "./modulos/portaria/service/ProtectedRoute";
import { RegistrosPortaria } from "./modulos/portaria/factures/novo registro/registroPortaria";
import { UnauthorizedPage } from "./modulos/portaria/factures/unauthorized/unauthorized";
import { MeusRegistroComponets } from "./modulos/portaria/factures/registros/meus_registros/meusRegistros";
import { useState, type ComponentType } from "react";
import { ProviderUser } from "./reducer/userProvider/userProvider";
import { ControleDeAcesso } from "./components/controleDeacesso/controledeAcesso";
import { ConfigComponent } from "./modulos/portaria/factures/config/config";
import { AlterarSenhaUsuarioComponent } from "./modulos/portaria/factures/resetsenha/resetSenha";
import { AdicionarPerfilRouter } from "./modulos/portaria/factures/adicionarPerfil/adicionarPerfil";
import { PermissoesComponets } from "./modulos/portaria/factures/permissoes/permissoes";
import { VisitantesListaComponets } from "./modulos/portaria/factures/Visitantes/visitantes";
import { UsuarioListaComponets } from "./modulos/portaria/factures/Usuarios/Usuarios";
import { ListahistoryComponent } from "./modulos/portaria/factures/history/lista/ListaHistory";
import { LogsComponets } from "./modulos/portaria/factures/logsDoSistema/Logs";
import { ResetComponets } from "./modulos/portaria/factures/reseteSenha/reseteRadom";
import { MeuPerfil } from "./modulos/portaria/factures/meu_perfil/meu_Perfil";
import { RedirectByPermissoes } from "./RedirectByPerfil";
import { subjet } from "./modulos/portaria/service/jwt/jwtservice";
import { OutrosPage } from "./modulos/portaria/factures/outros/outroInfor";
import { ControleFilial } from "./modulos/portaria/factures/controle_de_filial_page/controleFIlial";
import { ListaRegistroComponent } from "./modulos/portaria/factures/history/RegistroFiliais/ListaRegistroHistory";
import { lazy, Suspense } from "react";
import { LoadingSecundary } from "./components/LoadingSecundary/LoadingSecundary";
const App = () => {
  const [appKey, setAppKey] = useState(0);
  const handleReset = () => setAppKey((k) => k + 1);
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
  const RegistrosPortariaAntigo = lazyWidth(() => import("./modulos/portaria/factures/novo registro/registroPortariaAntigo"), 500);
  const NotFund = lazyWidth(() => import("./modulos/portaria/factures/404/NotFund"), 500);
  const MeusRegistros = lazyWidth(() => import("./modulos/portaria/factures/registros/registro_portaria/registro"), 500);
  const VisualizarRegistro = lazyWidth(() => import("./modulos/portaria/factures/registros/detalhes_registro/visualizar_registro"), 500);
  const RegistroDeUsuarioComponent = lazyWidth(()=>import("./modulos/portaria/factures/novoUsuario/registroUsuario"),500);

  return (
    //  <LoadingR></LoadingR>
    <ProviderUser key={appKey} onReset={handleReset}>
      <Suspense fallback={<LoadingSecundary />}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <RedirectByPermissoes permissoes={perfil?.perfil} />}
            />
            <Route path="/portaria"
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
              {/* <Route path="meus-pedidos"  element={<MainComponent />} /> */}
            </Route>
            <Route index path="verify" element={<LoadingR />} />
            <Route path="/login" element={<LoginComponen />} />
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

            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFund />} />

          </Routes>
        </BrowserRouter>
      </Suspense>
    </ProviderUser>
  )
}
export default App; 