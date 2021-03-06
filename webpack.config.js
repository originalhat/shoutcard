const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: "./src/index.tsx",
    // FIXME: not properly splitting bundles up (cf. splitChunks optimization)
    vendor: ["react", "react-dom"]
  },

  output: {
    filename: "./dist/[name].js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: '[local]___[hash:base64:8]'
            }
          }
        ]
      }
    ]
  }
};