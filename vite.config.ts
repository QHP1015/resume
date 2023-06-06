import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const srcPath = resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // 本机的局域网IP
    port: 5173, // 端口号，一般情况下为8080
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
    modules: {
      // 样式小驼峰转化,       //css: goods-list => tsx: goodsList
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@/": `${srcPath}/`,
    },
  },
});
