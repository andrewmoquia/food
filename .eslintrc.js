module.exports = {
    env: {
        'react-native/react-native': true,
    },
    plugins: ['react', 'react-native', '@typescript-eslint', 'eslint-plugin-prefer-arrow'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-native/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:eslint-comments/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        '@typescript-eslint/no-unused-vars': ['error'],
        'prefer-arrow/prefer-arrow-functions': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase'],
            },
        ],
        '@typescript-eslint/no-namespace': 'error',
        'import/namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
};
