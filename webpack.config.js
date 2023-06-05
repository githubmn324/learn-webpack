const path = require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin")

module.exports = {
    mode: "development", // porduction に変更すると余計な余白を排除したりとコンパクトにしてくれる
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader" // 昔のブラウザにも対応させる
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"), // バンドル結果出力先
        filename: "bundle.js",
    },
    resolve: {              // import 文で拡張子付きでなくてもエラーが起きないようにする
        extensions: [".js", ".jsx", ".ts", ".ts"]
    },
    plugins: [              // htmlもdistフォルダに出力させるためのプラグイン
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ], 
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        }, // どこのファイルのローカルサーバを開くか
        port: 3004,
    }
}