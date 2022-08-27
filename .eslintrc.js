module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    'parser': '@typescript-eslint/parser',
    'plugins': ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-empty-function': ['error', {allow: ['arrowFunctions']}],
        '@typescript-eslint/no-empty-function': [
            'error',
            {allow: ['arrowFunctions']},
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'max-len': 'off',
        'no-unexpected-multiline': 'off',
        'linebreak-style': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    ignorePatterns: ['node_modules/*', 'app.js'],
}