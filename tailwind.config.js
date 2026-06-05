/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        card: '#111111',
        'card-alt': '#161616',
        accent: '#00E5B4',
        'accent-dim': '#00c49a',
        gold: '#C9A84C',
        border: '#1C1C1C',
        muted: '#555555',
        'text-primary': '#F5F5F0',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'ticker': 'ticker 30s linear infinite',
        'ticker-reverse': 'tickerReverse 30s linear infinite',
        'scroll-line': 'scrollLine 1.8s ease-in-out infinite',
        'cursor-trail': 'cursorTrail 0.3s ease',
        'grain': 'grain 0.8s steps(1) infinite',
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '1' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '1' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom', opacity: '0' },
        },
        grain: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '20% 25%' },
          '50%': { backgroundPosition: '-25% 10%' },
          '60%': { backgroundPosition: '15% 5%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '25% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #1C1C1C 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
    },
  },
  plugins: [],
}
