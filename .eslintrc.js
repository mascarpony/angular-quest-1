module.exports = {
    root: true,
    env: {
        browser: true,
        jasmine: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: [
        '@typescript-eslint',
        'jasmine',
    ],
    extends: [
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jasmine/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off', // allow function without return
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/indent': ['error', 2, {
            'FunctionExpression': {'parameters': 'first'},
            'SwitchCase': 1,
            'MemberExpression': 'off',
        }],
        '@typescript-eslint/typedef': [
            'error',
            {
                'arrowParameter': true,
                'memberVariableDeclaration': true,
                'parameter': true,
                'propertyDeclaration': true,
                'variableDeclaration': true,
            }
        ],
        'import/prefer-default-export': 'off',
        'max-len': ['error', { 'code': 110 }],
        'no-return-assign': 'off',
        'class-methods-use-this': 'off',
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
                '@typescript-eslint/unbound-method': 'off',
            },
        },
    ],
};