import globals from 'globals';
import js from '@eslint/js';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2024,
            },
            parserOptions: eslintReact.configs.recommended.parserOptions,
        },
    },
    {
        plugins: {
            'react-hooks': eslintReactHooks,
            react: eslintReact,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ['node-modules', 'dist'],
    },
    js.configs.recommended,
    {
        rules: {
            ...eslintConfigPrettier.rules,
            ...prettierPlugin.configs.recommended.rules,
            'no-unused-vars': 'off',
            'arrow-body-style': 'off',
            'prefer-arrow-callback': 'off',
            'no-var': 'error',
            'prefer-const': 'warn',
            'react/prop-types': 'off',
            'react/jsx-no-target-blank': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
