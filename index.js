const prettier = require('prettier')
const path = require('path')

const out = prettier.format('p Hello World', {
  semi: false,
  parser: 'pug',
  pluginSearchDirs: [
    path.resolve(__dirname, './a'),
    path.resolve(__dirname, './b')
  ]
})
console.log(out)
