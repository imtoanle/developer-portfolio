import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

const tsConfigs = tseslint.configs.recommended.map((config) => ({
  ...config,
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    ...(config.plugins ?? {}),
  },
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
}));

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },
  ...astro.configs['flat/recommended'],
  ...tsConfigs,
  {
    files: ['**/*.{js,mjs,ts,astro}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
