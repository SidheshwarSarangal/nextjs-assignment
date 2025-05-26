//import type { Config } from "tailwindcss";

//export default {
//  content: [
//    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//  ],
//  theme: {
//    extend: {
//      colors: {
//        background: "var(--background)",
//        foreground: "var(--foreground)",
//      },
//    },
//  },
//  plugins: [],
//} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-4px)' },
          '40%': { transform: 'translateX(4px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
