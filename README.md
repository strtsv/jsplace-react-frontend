This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Webpack config to be loaded from react-scripts.
e.g.

Loading webpack config from:
../react-app/node_modules/react-scripts/config/webpack.config.js

You need to inject in react-scripts by adding webpackConfig to:
    ...
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
     ...