import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist', 'node_modules', 'build', 'coverage', 'dist-ssr', '*.local']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
      "no-console": "error",
      "react-hooks/rules-of-hooks": "error",
		},
    
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
