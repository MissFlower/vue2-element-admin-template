'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

const title = defaultSettings.title || '工厂管理系统'

function resolve(dir) {
  return path.join(__dirname, dir)
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 8080 npm run dev OR npm run dev --port = 8080
const port = process.env.port || process.env.npm_config_port || 9000 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  outputDir: 'facweb',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://120.79.184.4:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src'),
        'src': resolve('src')
      }
    }
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     filename: '[path].gz[query]', // 目标资源名称
    //     algorithm: 'gzip',
    //     test: productionGzipExtensions, // 处理所有匹配此 {RegExp} 的资源
    //     threshold: 10240, // 只处理比这个值大的资源。按字节计算(设置10K以上进行压缩)
    //     minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
    //     deleteOriginalAssets: false // 是否删除源文件
    //   })
    // ]
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    config
      .plugin('html')
      .tap(args => {
        args[0].title = title
        return args
      })

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single')

      config
        .plugin('script-ext-html-webpack-plugin')
        .use(
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]', // 目标资源名称
            algorithm: 'gzip',
            test: productionGzipExtensions, // 处理所有匹配此 {RegExp} 的资源
            threshold: 10240, // 只处理比这个值大的资源。按字节计算(设置10K以上进行压缩)
            minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
            deleteOriginalAssets: false // 是否删除源文件
          })
        )
        .end()
    })
  }
}
