module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      colors: {
        dark: '#18191A',
        darklight: '#242526',
        light: '#C9D1D9',
        lightwhite: 'rgba(255,255,255,0.17)',
        newGray: '#EBEAEB',
      }
    },
  },
  plugins: [],
}
