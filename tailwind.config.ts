import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('../assets/teste1.svg')",
      },
    colors:{
      'primary-blue':'#0078CD',
      'securdy-blue':'#00528C',
      'primary-yellow':'#FCEED5',
      'securdy-yellow':'#F1D092',
    }
    },
  },
  plugins: [],
};
export default config;
