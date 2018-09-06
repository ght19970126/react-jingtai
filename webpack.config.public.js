const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const Webpack=require('webpack');
module.exports={
   entry:'./src/component/js/index.js',
   output:{
       path:path.resolve(__dirname,"build"),
       filename:'js/bundle.js'
   },
   plugins:[
       new HtmlWebpackPlugin({
           filename:"index.html",
           template:"./src/component/index.html"
       }),
       new Webpack.ProvidePlugin({
           React:'react',
           ReactDOM:'react-dom'
       })

   ],
   module:{
       loaders:[
           {
             test:/\.css$/,
             loader:'style-loader!css-loader'    
           },
           {
            test:/\.(jpg|png|gif)$/,
            loader:'url-loader',
            options:{
              limit:10000,//限制小于10000字节,进行base64编码
              name:'img/[name]_[hash].[ext]'
            }
          },
          {
            test: /\.jsx?$/,//表示要编译的文件的类型，这里要编译的是js文件
            loader: 'babel-loader',//装载的哪些模块
            exclude: /node_modules/,//标识不编译node_modules文件夹下面的内容
            query: {//具体的编译的类型，
                compact: false,//表示不压缩
                presets: [ 'react']//我们需要编译的是react
            }
        }
      
       ]
   },
   resolve:{
       extensions:['.jsx','.js','.css']
   }
}