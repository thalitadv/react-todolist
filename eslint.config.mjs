import globals from 'globals';
import eslint from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 1. Configurações Globais
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  // 2. Regras base do ESLint
  eslint.configs.recommended,

  // 3. Regras recomendadas para React
  reactRecommended,

  // 4. Desativa regras do ESLint que conflitam com o Prettier (DEVE SER O ÚLTIMO)
  eslintConfigPrettier,

  // 5. Configurações e regras customizadas do seu projeto
  {
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Regra não necessária com o novo JSX Transform do React
      'react/prop-types': 'off' // Desativa a verificação de prop-types se você usa TypeScript ou prefere não usar
    },
  },
];
