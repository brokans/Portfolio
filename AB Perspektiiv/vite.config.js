import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { contactApiDevPlugin } from "./vite.contactApiPlugin.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), contactApiDevPlugin(env)],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
