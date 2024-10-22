import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'no-var': 'error',
            'prefer-const': 'warn',
            'react/prop-types': 'off',
            'react/jsx-no-target-blank': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
