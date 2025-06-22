import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// .env cofiguration
import { config } from 'dotenv';
config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env
  },
   build: {
    outDir: 'dist', // Onde os arquivos buildados serão colocados
    emptyOutDir: true, // Limpa o diretório de saída antes de cada build
  },
});
