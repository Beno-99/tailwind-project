/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme:{
    extend: {
      fontFamily:{
        'font-one':['fontOne', 'sans-serif']
      },
    },
    screens:{
      'sm':'300px',
      'md':'768px',
      'lg':'1024px'
    }
  }
}
