import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config([
    globalIgnores(['dist', 'node_modules', 'build', 'coverage', 'dist-ssr', '*.local', 'coverage']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: importPlugin
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            eslintConfigPrettier
        ],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'no-console': 'error',
            'react-hooks/rules-of-hooks': 'error',

            // Good import rules to include manually:
            'import/no-unresolved': 'error',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: { order: 'asc', caseInsensitive: true }
                }
            ],
            'import/no-duplicates': 'warn'
        },

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: ['./tsconfig.app.json', './tsconfig.node.json']
                }
            }
        }
    }
])
