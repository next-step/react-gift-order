import viteConfig from "./vite.config.ts";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            environment: "jsdom",

            coverage: {
                provider: "v8",
                reporter: ["text", "json", "html"],
                include: ["src/**/*.{ts,tsx}"],
                exclude: ["src/**/*.stories.tsx", "src/**/*.d.ts"],
            },
        },
    }),
);
