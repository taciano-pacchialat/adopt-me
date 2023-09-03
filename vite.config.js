import { defineConfig } from "vite";
import react from "@vitejs/plugins-react";

export default defaultConfig({
  plugins: [react()],
  root: "src",
});
