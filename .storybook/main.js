const path = require('path');

module.exports = {
    addons: ['@storybook/addon-a11y/register'],

    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            include: path.resolve(__dirname, '..'),
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
                    },
                },
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
