// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                    alias: {
                        '@components': './src/components',
                    },
                },
            ],
            [
                'module:react-native-dotenv',
                {
                    envName: 'APP',
                    moduleName: '@env',
                    path: '.env',
                    blocklist: null,
                    allowlist: null,
                    safe: false,
                    allowUndefined: true,
                    verbose: false,
                },
            ],
        ],
    };
};
