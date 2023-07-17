const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js','.cjs','.mjs','.json','.vue'],

    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
