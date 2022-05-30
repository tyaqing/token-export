module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier'],
    parserOptions: {
        ecmaVersion: 2021,
    },
    plugins: [],
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/v-on-event-hyphenation': 'off',
        // 'vue/html-closing-bracket-spacing': [
        //   'error',    //   {    //     startTag: 'always',    //     endTag: 'always',    //     selfClosingTag: 'always',    //   },    // ],  },
    }
}