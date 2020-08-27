const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      //加载 CSS
      {
        test: /\.css$/,
	      use: ['style-loader','css-loader']
      },
      //记载图片文件
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      //加载字体文件
      {
        test: /\.(woff|wofff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      //加载数据
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.(xml)$/,
        use: ['xml-loader']
      }
    ]
  }
}
