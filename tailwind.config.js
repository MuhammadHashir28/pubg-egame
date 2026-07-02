/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base — muted, not pitch black
        dark: {
          base:  '#08080e',
          surface: '#0c0c16',
          card:   '#111122',
          cardAlt:'#14142a',
          900:    '#0a0a0f',
          800:    '#0c0c16',
          700:    '#111122',
          600:    '#181830',
        },
        // Accent — neon purple, electric blue
        accent: {
          purple:  '#8b5cf6',
          blue:    '#00d4ff',
          soft:    '#7c6fcd',
          purpleBright: '#a78bfa',
          blueBright:   '#38bdf8',
          purpleDim: 'rgba(139, 108, 240, 0.1)',
          blueDim:   'rgba(0, 212, 255, 0.1)',
        },
        // Text
        text: {
          primary:   '#f0f0f5',
          secondary: '#8a8a9e',
          muted:     '#55556a',
        },
        // Border
        border: {
          subtle:  'rgba(255, 255, 255, 0.055)',
          default: 'rgba(255, 255, 255, 0.10)',
          strong:  'rgba(255, 255, 255, 0.18)',
        },
        // Legacy compat
        primaryText: '#f0f0f5',
        secondaryText: '#8a8a9e',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'orb':   'orb 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':      { transform: 'translate(20px, -20px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #08080e 0%, #0c0c16 100%)',
      },
      boxShadow: {
        'card':     '0 2px 8px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
