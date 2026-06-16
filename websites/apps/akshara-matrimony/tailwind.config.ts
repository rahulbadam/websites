import type { Config } from "tailwindcss";
import sharedConfig from "@websites/config/tailwind.config";

const config: Config = {
  content: [
    "./**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#d97706", foreground: "#ffffff" },
        secondary: { DEFAULT: "#f59e0b", foreground: "#ffffff" },
        accent: { DEFAULT: "#fbbf24", foreground: "#1c1917" },
      },
    },
  },
};
export default config;