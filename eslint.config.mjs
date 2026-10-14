import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['node_modules', 'playwright-report', 'test-results', 'blob-report', '.auth']),
  js.configs.recommended,
  tseslint.configs.recommended,
  { ...playwright.configs['flat/recommended'], files: ['tests/**/*.ts'] },
  prettier,
]);
