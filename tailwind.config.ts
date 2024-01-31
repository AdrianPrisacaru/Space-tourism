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
        'desktopDestination': "url('/background-destination-desktop.jpg')",
        'tabletDestination': "url('/background-destination-tablet.jpg')",
        'mobileDestination': "url('/background-destination-mobile.jpg')",
        'desktopTechnology': "url('/background-technology-desktop.jpg')",
        'tabletTechnology': "url('/background-technology-tablet.jpg')",
        'mobileTechnology': "url('/background-technology-mobile.jpg')",
        'desktopCrew': "url('/background-crew-desktop.jpg')",
        'tabletCrew': "url('/background-crew-tablet.jpg')",
        'mobileCrew': "url('/background-crew-mobile.jpg')",
        'imageVehicleLaunchPortrait': "url('/technology/image-launch-vehicle-portrait.jpg')",
        'imageVehicleLaunchLandscape': "url('/technology/image-launch-vehicle-landscape.jpg')",
        'imageCapsuleLaunchPortrait': "url('/technology/image-space-capsule-portrait.jpg')",
        'imageCapsuleLaunchLandscape': "url('/technology/image-space-capsule-landscape.jpg')",
        'imageSpaceportLaunchPortrait': "url('/technology/image-spaceport-portrait.jpg')",
        'imageSpaceportLaunchLandscape': "url('/technology/image-spaceport-landscape.jpg')",
      }),
      screens: {
        'sm': '150px',
        'md': '648px', 
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
      },
      colors: {
        'spaceSecondColor': '#D0D6F9'
      },
      fontFamily: {
        barlowFont: ['Barlow_Condensed', 'sans-serif'],
        barlowSimple: ['Barlow', 'serif']
      }
    },
  },
  plugins: [],
}
export default config
