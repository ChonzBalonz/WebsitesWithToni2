import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';

export default antfu(
  {
    react: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: [
      'migrations/**/*',
      'node_modules/**/*',
      '.next/**/*',
      'dist/**/*',
      'out/**/*',
      'build/**/*',
      '.pnp',
      '.pnp.js',
      '.env*',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      'coverage/**/*',
      '*.lcov',
      '.nyc_output',
      'jspm_packages/**/*',
      '.npm',
      '.eslintcache',
      '.rpt2_cache/**/*',
      '.rts2_cache_cjs/**/*',
      '.rts2_cache_es/**/*',
      '.rts2_cache_umd/**/*',
      '.node_repl_history',
      '*.tgz',
      '.yarn-integrity',
      '.cache/**/*',
      '.parcel-cache/**/*',
      '.nuxt/**/*',
      '.vuepress/dist/**/*',
      '.serverless/**/*',
      '.fusebox/**/*',
      '.dynamodb/**/*',
      '.tern-port',
      '.vscode-test/**/*',
      '.yarn/cache/**/*',
      '.yarn/unplugged/**/*',
      '.yarn/build-state.yml',
      '.yarn/install-state.gz',
      '.pnp.*',
      '.vercel/**/*',
      '*.db',
      '*.sqlite',
      '*.sqlite3',
      '.pnpm-store/**/*',
      '**/.pnpm-store/**/*',
    ],
  },
  // --- Next.js Specific Rules ---
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Testing Rules ---
  {
    files: [
      '**/*.test.ts?(x)',
    ],
    ...jestDom.configs['flat/recommended'],
  },
  // --- E2E Testing Rules ---
  {
    files: [
      '**/*.spec.ts',
      '**/*.e2e.ts',
    ],
    ...playwright.configs['flat/recommended'],
  },
  // --- Storybook Rules ---
  ...storybook.configs['flat/recommended'],
  // --- JSON Files Configuration ---
  {
    files: [
      '**/*.json',
      '**/*.jsonc',
    ],
    rules: {
      // Disable all JSON formatting rules that cause deployment issues
      'jsonc/key-spacing': 'off',
      'jsonc/object-curly-spacing': 'off',
      'jsonc/comma-spacing': 'off',
      'jsonc/array-bracket-spacing': 'off',
      'jsonc/object-property-newline': 'off',
      'jsonc/object-curly-newline': 'off',
      'jsonc/array-element-newline': 'off',
      'jsonc/indent': 'off',
      'jsonc/quotes': 'off',
      'jsonc/quote-props': 'off',
      'jsonc/comma-dangle': 'off',
      'jsonc/no-multiple-empty-lines': 'off',
      'jsonc/no-trailing-spaces': 'off',
      'jsonc/eol-last': 'off',
      'jsonc/no-irregular-whitespace': 'off',
    },
  },
  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
      // Disable JSON formatting rules that cause deployment issues
      'jsonc/key-spacing': 'off',
      'jsonc/object-curly-spacing': 'off',
      'style/comma-spacing': 'off',
    },
  },
);
