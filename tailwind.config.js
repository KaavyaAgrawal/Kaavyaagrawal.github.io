/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cosmic-void': '#000011',
        'deep-ocean': '#001122',
        'midnight-blue': '#002244',
        'nebula-purple': '#1a0d2e',
        'stellar-cyan': '#00d4ff',
        'bioluminescent': '#00ffaa',
        'cosmic-violet': '#6366f1',
        'ocean-teal': '#008b8b',
        'starlight': '#ffffff',
        'void-black': '#000000',
        'abyss': '#0a0a1a',
      },
      fontFamily: {
        'cosmic': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-gentle': 'float-gentle 8s ease-in-out infinite',
        'drift-slow': 'drift-slow 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'shimmer-wave': 'shimmer-wave 4s ease-in-out infinite',
        'cosmic-drift': 'cosmic-drift 30s linear infinite',
        'bioluminescent': 'bioluminescent 4s ease-in-out infinite',
      },
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'drift-slow': {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-50px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
            opacity: '0.8'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.2)',
            opacity: '1'
          },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'shimmer-wave': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'cosmic-drift': {
          '0%': { transform: 'translateX(-50px) translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateX(calc(100vw + 50px)) translateY(-100px) rotate(360deg)' },
        },
        'bioluminescent': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};