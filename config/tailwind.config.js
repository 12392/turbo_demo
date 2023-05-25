// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   content: [
//     './public/*.html',
//     './app/helpers/**/*.rb',
//     './app/javascript/**/*.js',
//     './app/views/**/*.{erb,haml,html,slim}'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/container-queries'),
//   ]
// }

module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation :{
        'fade-in-up': 'fade-in-up 0.3s ease-in-out'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require("@tailwindcss/forms")],
}