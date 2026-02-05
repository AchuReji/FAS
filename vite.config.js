import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
{import('tailwindcss').Config} 

// https://vite.dev/config/
export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
     keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  marquee: 'marquee var(--duration) linear infinite',
},
    }
  },
  plugins: [
    tailwindcss(),
    react()

  ],
})


