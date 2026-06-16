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
        primary: { DEFAULT: "#1e40af", foreground: "#ffffff" },
        secondary: { DEFAULT: "#ea580c", foreground: "#ffffff" },
        accent: { DEFAULT: "#f97316", foreground: "#ffffff" },
      },
    },
  },
};
export default config;