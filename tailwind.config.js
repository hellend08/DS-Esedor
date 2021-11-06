module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  import: true,
  plugins: [],
}
