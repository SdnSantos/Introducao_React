module.exports = {
  presets: [
    // alterar as funcionalidades do JS que o navegador não entende (import, export, arrow functions, classes)
    "@babel/preset-env",
    // transformar as coisas que o navegador não entende do react
    "@babel/preset-react"
  ]
};
