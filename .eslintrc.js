module.exports = {
    env: {
        "react-native/react-native": true
    },
    plugins: [
        "react",
        "react-native",
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        "plugin:@typescript-eslint/recommended",
        "plugin:react-native/all",
        "plugin:prettier/recommended",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2,
        "react-native/no-single-element-style-arrays": 2,
    }
}