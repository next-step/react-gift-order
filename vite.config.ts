import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Vite에서 alias 인식을 위해 옵션 추가
    alias: {
      '@': '/src', // @를 쓰면 src 폴더를 가리키게 됨
    },
  },
});
