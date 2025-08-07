import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodePackageImporter } from 'sass-embedded';

export default defineConfig({
  plugins: [react()],
  css: {
		preprocessorOptions: {
		  scss: {
        importers: [new NodePackageImporter()],
        },
		},
	  },
  build: {
    outDir: '../webapp/dist', // Указываем папку, куда попадут собранные файлы
    emptyOutDir: true,  // Очищать папку перед каждой сборкой (опционально)
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080', // Прокси для API-запросов к Go-серверу
    },
  },
});