import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingR } from "./factures/LoadingR";
import { HomeComponent } from "./factures/home/home";
import { LoginComponen } from "./factures/auth/login/Login";
import { ProtectedRoute } from "./service/ProtectedRoute";
import { MeusRegistros } from "./factures/registros/registro_portaria/registro";
import { NotFoundPage } from "./factures/404/NotFund";
import VisualizarRegistro from "./factures/registros/detalhes_registro/visualizar_registro";
import { RegistrosPortaria } from "./factures/novo registro/registroPortaria";
import { UnauthorizedPage } from "./factures/unauthorized/unauthorized";
import { MeusRegistroComponets } from "./factures/registros/meus_registros/meusRegistros";
import {useState } from "react";
import {  ProviderUser } from "./reducer/userProvider/userProvider";
import { ControleDeAcesso } from "./components/controleDeacesso/controledeAcesso";
import { RegistroDeUsuarioComponent } from "./factures/novoUsuario/registroUsuario";
import { ConfigComponent } from "./factures/config/config";
import { AlterarSenhaUsuarioComponent } from "./factures/resetsenha/resetSenha";
import { AdicionarPerfilRouter } from "./factures/adicionarPerfil/adicionarPerfil";
import { PermissoesComponets } from "./factures/permissoes/permissoes";
import { VisitantesListaComponets } from "./factures/Visitantes/visitantes";
import { UsuarioListaComponets } from "./factures/Usuarios/Usuarios";
import { ListahistoryComponent } from "./factures/history/lista/ListaHistory";
import { LogsComponets } from "./factures/logsDoSistema/Logs";
import { ResetComponets } from "./factures/reseteSenha/reseteRadom";
import { MeuPerfil } from "./factures/meu_perfil/meu_Perfil";
import { RedirectByPermissoes } from "./factures/RedirectByPerfil";
import { subjet } from "./service/jwt/jwtservice";
import { OutrosPage } from "./factures/outros/outroInfor";
import { ControleFilial } from "./factures/controle_de_filial_page/controleFIlial";
import { ListaRegistroComponent } from "./factures/history/RegistroFiliais/ListaRegistroHistory";
const App = () => {
  const [appKey, setAppKey] = useState(0);
  const handleReset = () => setAppKey((k) => k + 1);
  const perfil = subjet()
  return (
    //  <LoadingR></LoadingR>
    <ProviderUser key={appKey} onReset={handleReset}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RedirectByPermissoes permissoes={perfil?.perfil}/>} 
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
              <ProtectedRoute allowedPermissions={["REGISTRAR_SAIDA", "REGISTRAR_ENTRADA","VISUALIZAR_REGISTRO"]}>
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
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </ProviderUser>
  )
}
export default App; 