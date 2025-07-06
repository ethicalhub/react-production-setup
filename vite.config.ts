/// <reference types="vitest" />

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type ServerOptions } from 'vite'

// https://vite.dev/config/

type TMode = 'development' | 'production' | 'test'
interface AppEnv {
    PORT?: string
    VITE_ENV?: TMode
    BACKEND_URL_PROXY?: string
    SENTRY_TOKEN?: string
}

const validateEnv = (mode: TMode, env: AppEnv) => {
    const requiredValidators: (keyof AppEnv)[] = ['PORT', 'VITE_ENV', 'BACKEND_URL_PROXY']

    if (mode === 'production') {
        requiredValidators.push('SENTRY_TOKEN')
    }

    for (const key of requiredValidators) {
        if (!env[key]) {
            throw new Error(`Environment variable ${key} is required in ${mode} mode.`)
        }
    }
}

const normalizePort = (port: string) => {
    const normalizedPort = parseInt(port)
    if (isNaN(normalizedPort)) {
        throw new Error(`Invalid port number: ${port}`)
    }

    return normalizedPort
}

export default defineConfig((mode) => {
    const envMode = mode.mode as TMode
    const currentPath = fileURLToPath(import.meta.url)
    const __dirname = dirname(currentPath)

    const env = loadEnv(envMode, __dirname, '') as unknown as AppEnv
    validateEnv(envMode, env)

    const port = normalizePort(env.PORT as string)

    const config: ServerOptions = {
        port: port,
        open: true,
        proxy: {
            '/api': {
                target: env.BACKEND_URL_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
    return {
        plugins: [
            react(),
            tailwindcss(),
            env.VITE_ENV === 'production' &&
                sentryVitePlugin({
                    org: '0xcoders',
                    authToken: env.SENTRY_TOKEN,
                    project: 'react-project-setup',
                    sourcemaps: {
                        filesToDeleteAfterUpload: 'dist/assets/**/*.map'
                    }
                })
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'src/setupTests.ts',
            include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            coverage: {
                reporters: ['json', 'html'],
                include: ['src/**/*.{js,ts,jsx,tsx}'],
                exclude: [
                    'coverage',
                    'src/**/*.{spec,test}.{js,ts,jsx,tsx}',
                    'dist',
                    'build',
                    'node_modules',
                    'src/setupTests.ts'
                ],
                thresholds: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80
                }
            }
        },
        resolve: {
            alias: {
                '@features': path.resolve(__dirname, 'src/features'),
                '@shared': path.resolve(__dirname, 'src/shared')
            }
        },
        server: config,
        preview: config,
        build: {
            minify: envMode === 'production',
            sourcemap: envMode === 'production',
            rollupOptions: {
                external: [/.*\.(test|spec)\.(js|ts|jsx|tsx)$/]
            }
        }
    }
})
