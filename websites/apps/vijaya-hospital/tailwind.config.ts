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
        primary: { DEFAULT: "#0f766e", foreground: "#ffffff" },
        secondary: { DEFAULT: "#0d9488", foreground: "#ffffff" },
        accent: { DEFAULT: "#14b8a6", foreground: "#ffffff" },
      },
    },
  },
};
export default config;