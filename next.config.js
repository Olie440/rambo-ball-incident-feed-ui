const withSass = require('@zeit/next-sass')
module.exports = withSass({ 
    cssModules: true,
    webpack: (config, { dev }) => {
        const eslintRule = {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                // Emit errors as warnings for dev to not break webpack build.
                // Eslint errors are shown in console for dev, yay :-)
                emitWarning: dev,
            },
        };

        config.module.rules.push(eslintRule);
        return config;
    },
});