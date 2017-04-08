/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  javaScript: {
    transpileDependencies: [
      '@klarna'
    ],
    typeCheckAll: true
  },

  webpack: {
    babel: {
      babelrc: false, // So @klarna/ui does not fail
      presets: ['sagui']
    },
    devServer: {
      inline: true // So React Development Tools work
    }
  }
}
