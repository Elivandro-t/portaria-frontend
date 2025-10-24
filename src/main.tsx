// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from './service/snackbar.tsx'
import { NetworkProvider } from './reducer/networkContext.tsx'
createRoot(document.getElementById('root')!).render(
      <SnackbarProvider>
        <NetworkProvider>
            <App />
          </NetworkProvider>
      </SnackbarProvider >



)
