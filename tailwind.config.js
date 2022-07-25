const AnimateCss = require('animated-tailwindcss')




module.exports = AnimateCss(
  {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
)