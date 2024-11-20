import globals from 'globals'
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
// eslint.config.js
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt', 'docs/**/*', 'DEBUG=1/**/*'],
  },
  {
    files: ['pages/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0,
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
]
