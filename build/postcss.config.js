'use strict'

module.exports = (ctx) => ({
  map: ctx.file.basename === 'docs.min.css' || ctx.file.dirname.includes('examples') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {}
  }
})
