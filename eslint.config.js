// @ts-check
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/', '.astro/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs['flat/recommended'],
  // Всегда последним: отключает правила, которые спорят с Prettier
  prettier,
]);
