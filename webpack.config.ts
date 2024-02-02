import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import WebpackBar from 'webpackbar';

module.exports = {
  mode: 'production',
  entry: {
    'hooks/tool1': path.resolve('./src/hooks/tool1'),
    'components/GSelect': path.resolve('./src/components/GSelect'),
    'components/Foo': path.resolve('./src/components/Foo'),
    // index: path.resolve('src/index.ts'),
  },
  output: {
    clean: true,
    path: path.resolve('./dist'),
    // filename: '[name]/index.js',
    filename: '[name]/index.js',
    // filename: (pathData) => {
    //   console.log(pathData);
    //   return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    // },
    library: {
      // name: pkg.name,
      // type: 'umd',

      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    antd: 'antd',
    react: 'react',
    'react-dom': 'react-dom',
    // react: 'React',
    // 'react-dom': 'ReactDOM',
  },
  // externalsType: 'import',
  // cache: {
  //   type: 'filesystem',
  //   allowCollectingMemory: true,
  // },
  // performance: {
  //   hints: false,
  // },
  resolve: {
    extensions: ['.ts', '.tsx', '.less', '...'],
    alias: {
      'gyc-components': ['/src'],
      'gyc-components/*': ['/src/*', '*'],
    },
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       extractComments: false,
  //     }),
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'style-loader',

          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',

            // options: {
            //   lessOptions: {
            //     javascriptEnabled: true,
            //   },
            // },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                // {
                //   useBuiltIns: 'entry',
                // },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   exclude: /node_modules/,
      //   type: 'asset',
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 1024 * 1024, // 1MB (为了使用一些图片，所以只能打包进产物中)
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    // new ProvidePlugin({
    //   React: 'react',
    // }),
    // 抽离出css
    // new MiniCssExtractPlugin({
    //   filename: '[name]/index.css',
    // }),
    new CopyPlugin({
      patterns: [{ from: 'src/index.ts', to: 'index.js' }],
    }),

    new WebpackBar({
      color: '#85d',
      basic: true,
      // profile: true,
    }),
  ],
} as Configuration;
