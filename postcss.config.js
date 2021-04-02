const postcssNesting = require('postcss-nesting')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-custom-properties'),
    postcssNesting()
  ]
}
