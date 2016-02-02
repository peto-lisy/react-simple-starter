// Dev server - no production use!

var Path = require('path');
var Express = require('express');
var Webpack = require('webpack');
var DevMiddleware = require('webpack-dev-middleware');
var HotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config');


var app = Express();
var compiler = Webpack(config);


app.use(DevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(HotMiddleware(compiler));

app.get('*', function (req, res) {
    res.sendFile(Path.join(__dirname, 'index.html'));
});


app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        throw err;
    }

    console.log('App started at http://localhost:' + (process.env.PORT || 3000));
});

