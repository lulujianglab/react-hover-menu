const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {// 通过babel准换JSX和ES6的代码
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets:["env", "react"],
          plugins: [
            [  "import",{libraryName: "antd", style: "css"}] // antd按需加载
          ]
        }
      },
      {// CSS处理
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        exclude: /node_modules/,
      },
      {// antd样式处理
        test:/\.css$/,
        exclude:/src/,
        use:[
            { loader: "style-loader",},
            {
                loader: "css-loader",
                options:{
                    importLoaders:1
                }
            }
        ]
      },
      {// less样式处理
        test: /\.less$/,
        use: 
        [
          "style-loader", 
          {
            loader: 'css-loader', 
            options: {
              sourceMap: 1,
              modules:true
            }
          }, 
          {
            loader: "postcss-loader",
            options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: (loader) => [
                  require('autoprefixer')(), //CSS浏览器兼容
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
            }
          }
        ]
      },
    ]
  },
  externals: [nodeExternals()]
}
