// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <- 이 줄을 추가합니다.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // <- 이 resolve 블록을 추가합니다.
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
