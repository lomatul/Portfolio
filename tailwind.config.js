/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem', // 32rem equals 512px
      },
      height: {
        '108': '32rem', // 32rem equals 512px
      }
    },
  },
  plugins: [],
}