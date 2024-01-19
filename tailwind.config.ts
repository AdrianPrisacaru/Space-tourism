import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'desktop': "url('/background-home-desktop.jpg')",
        'tablet': "url('/background-home-tablet.jpg')",
        'mobile': "url('/background-home-mobile.jpg')",
      }),
      screens: {
        'sm': '280px',
        'md': '640px', 
        'lg': '1024px',
        'xl': '1280px', 
      },
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'xl': '18px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '56px',
        '5xl': '100px',
        '6xl': '150px',
      }
    },
    colors: {
      primary: "var(--primarySpaceColor)",
      second: "var(--secondSpaceColor)",
      fullWhite: "var(--whiteSpaceColor)"
    }
  },
  plugins: [],
}
export default config
