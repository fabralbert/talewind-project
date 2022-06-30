/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      sm: '415px',
      md: '800px',
      lg: '1080px',
      xl: '1400px',
    },
    colors: {
      primary: '#ffffff',
      secondary: '#171836',
      third: '#9A9CCB',
      fourth: '#1F2143',
      fifth: '#282B57',
      sixth: '#BBBBC4',
      seventh: '#3F458D',
      orange: '#F5443B',
      green: '#3BF5BD',
      blue: '#8F91D0',
      gray: '#D1D1D7',
      bgStudents: 'rgba(63,69,141, .63)',
      borderStudent: 'rgba(76,94,157, .63)',
      bgClasses: 'rgba(40, 43, 87, 0.17)',
      borderClasses: 'rgba(50, 52, 101, 0.5)',
      bgClasses2: 'rgba(255, 255, 255, 0.2)',
      avatarBg: 'rgba(255, 255, 255, 0.12)',
      avatarBorder: 'rgba(255, 255, 255, 0.5)',
      bgGetApp: 'rgba(18, 11, 35, 0.09)',
    },
    extend: {},
  },
  plugins: [],
}
