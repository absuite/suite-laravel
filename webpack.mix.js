const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
        rules: [{
            test: /\.theme$/,
            use: ['raw-loader', 'sass-loader']
        }]
    }
});
mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['axios', 'lodash', 'vue', 'vue-router','uuid','highcharts','iscroll','d3','moment']);
mix.sass('resources/assets/sass/app.scss', 'public/css');

mix.copyDirectory('resources/assets/img', 'public/img');

mix.version();
