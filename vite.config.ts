import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Portaria cd',
        short_name: 'Portaria',
        description: 'Meu aplicativo React rodando como PWA!',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'src/assets/ptcontroleBanner.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/ptcontroleBanner.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
    
  ],
  build: {
    chunkSizeWarningLimit: 1000, // define o limite para 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material']
        }
      }
    }
  },
 server: {
    
    host: true,  // permite acessar via IP da rede
    port: 5173,
 }
   
   
//   },
,
preview: {
    host: true,
    port: 4173
  }
  
})
