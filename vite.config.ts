/// <reference types="vitest" />

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type ServerOptions } from 'vite'

// https://vite.dev/config/

type TMode = 'development' | 'production' | 'test'
interface AppEnv {
    PORT?: string
    VITE_ENV?: TMode
    BACKEND_URL_PROXY?: string
}

const validateEnv = (mode: TMode, env: AppEnv) => {
    const requiredValidators: (keyof AppEnv)[] = ['PORT', 'VITE_ENV', 'BACKEND_URL_PROXY']

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
        plugins: [react(), tailwindcss()],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: 'src/setupTests.ts',
            include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
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
            rollupOptions: {
                external: [/.*\.(test|spec)\.(js|ts|jsx|tsx)$/]
            }
        }
    }
})
