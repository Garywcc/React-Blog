

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/js/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        publicPath:"/dist/",
        filename: "index.js"//打包后输出文件的文件名
  },
  devServer: {
    //contentBase: "./public",//本地服务器所加载的页面所在的目录
    port:8080,
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}