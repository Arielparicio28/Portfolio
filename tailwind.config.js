/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        text: 'hsl(0, 0%, 99%)',
        textDim: 'hsl(0, 0%, 60%)',
        background: 'hsl(0, 0%, 7%)',
        primary: {
          DEFAULT: 'hsl(155, 100%, 65%)',
          bg: 'hsla(155, 100%, 65%, 1%)',
          hi: 'hsla(155, 100%, 75%, 25%)',
          fg: 'hsl(155, 100%, 85%)',
        },
        secondary: {
          DEFAULT: 'hsl(156, 51%, 14%)',
          fg: 'hsl(156, 51%, 75%)',
          bg: 'hsla(156, 51%, 14%, 5%)',
          hi: 'hsla(156, 51%, 30%, 50%)',
        },
        accent: {
          DEFAULT: 'hsl(155, 100%, 94%)',
          bg: 'hsla(155, 100%, 94%, 1%)',
          hi: 'hsla(155, 100%, 100%, 25%)',
        },
      }, 
    },   
    screens: {
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', 
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },

    fontFamily:{
      font:[ "Dancing Script", "cursive"],
      manrope: ["Manrope", "sans-serif"],
    },
    
    keyframes: {
      zoomOut: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.2)' },
      },

      typewriter: {
        from: { width: '0' },
        to: { width: '100%' },
      },
      blinkingCursor: {
        '0%, 100%': { borderRightColor: 'rgba(255,255,255,.75)' },
        '50%': { borderRightColor: 'transparent' },
      },
      hideCursor: {
        to: { borderRightColor: 'transparent' },
      },

      itemHover: {
        '0%': { transform: 'translateZ(0)' },
        '100%': { transform: 'translateZ(calc(var(--index) * 10))' },
      },
      itemFocus: {
        '0%': { width: 'calc(var(--index) * 3)', filter: 'brightness(0.5)' },
        '100%': { width: '28vw', filter: 'brightness(1)', zIndex: 100 },
      },

    },
    animation: {
      zoomOut: 'zoomOut 0.5s ease forwards',
      typewriter: 'typewriter 5s steps(50) 1s 1 normal both',
      blinkingCursor: 'blinkingCursor 500ms steps(50) infinite normal',
      hideCursor: 'hideCursor 0.5s forwards',
      itemHover: 'itemHover 1.25s cubic-bezier(.1, .7, 0, 1) forwards',
      itemFocus: 'itemFocus 1.25s cubic-bezier(.1, .7, 0, 1) forwards',
    },

    perspective: {
      '35': 'calc(1vw + 1vh * 35)',
    }

  },
  plugins: [],
}

