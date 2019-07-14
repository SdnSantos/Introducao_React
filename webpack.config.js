// deixar que a aplicação escolha o lado da barra dependendo
// do sistema operacional, cada vírgula é uma barra
const path = require("path");

module.exports = {
  // arquivo de entrada
  entry: path.resolve(__dirname, "src", "index.js"),
  // onde irá jogar o bundle com o código que o browser entende
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    // onde encontrará o arquivo index.html
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    // regras
    rules: [
      {
        // expressão regular = /\.js$/
        // significa que vai procurar arquivos que terminem com .js
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        // jpe?g significa que o e é opcional
        // então pode ser jpg ou jpeg
        // o i no final significa que não é case-sensitive
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
