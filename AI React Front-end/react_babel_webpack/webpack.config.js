// cjs (require e module.exports)
// ESM (import e export)

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // TODA NOSSA CONFIG AQUI DENTRO
    entry: "./src/index.js",
    // Configuração de saída
    output: {
        // Caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // Configuração do módulo
    module: {
        rules: [
            {
                // Regra para arquivos JS (tantos .js quanto .jsx)
                test: /\.(js|jsx)$/,
                // Excluir arquivos no diretório node_modules
                exclude: /node_modules/,
                // Usar o loader 'babel-loader' para transpilar o código
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    // LIsta de plugins do webpack
    plugins: [
        // PLugin para gerar automaticamente o arquivo HTML com o bundle injetado
        new HtmlWebpackPlugin({
            // Template HTML para ser usado
            template: "./public/index.html",
        }),
    ],
    // Configurações da resolução de ódulos
    resolve: {
        // Extensões de arquivos a serem resolvidas automaticamente
        extensions: [".js", ".jsx"],
    },
    // Configurações do servidor de desenvolvimento
    devServer: {
        // Configuração de arquivos estátivos a serem servidos
        static: {
            // Diretório do servidor de desenvolvimento
            directory: path.join(__dirname, "dist"),
        },
        // Porta do servidor de desenvolvimento
        port: 3000,
    },
};