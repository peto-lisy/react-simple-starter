var Webpack = require('webpack');
var Path = require('path');


module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        // add the client script for hot-reload
        'webpack-hot-middleware/client',
        // app main file
        Path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: Path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        // even when build fails, webpack watch should not die
        new Webpack.NoErrorsPlugin()
    ],

    // and now the fun part, compilers
    module: {
        loaders: [{
            // what files should be loaded using this loader
            test: /\.js/,
            loaders: ['babel'], // this will get better (& way more messy), trust me
            include: Path.join(__dirname, 'src')
        }]
    }
};
