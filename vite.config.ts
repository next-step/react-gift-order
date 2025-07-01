import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; 

export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [
          ["@emotion/babel-plugin"],
        ],
      },
    }
  )],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
