import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react(),
   

  ],
 server: {
    
    host: true,  // permite acessar via IP da rede
    port: 5173,
   
   
  },
  
})
