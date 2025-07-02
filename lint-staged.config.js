const config = {
    '*.{js,jsx,ts,tsx}': ['yarn run lint:eslint', 'yarn run format:check'],
    '*.css': ['yarn run lint:stylelint', 'yarn run format:check'],
    '*.json': ['yarn run format:check'],
    '*.md': ['yarn run format:check'],
    '*.html': ['yarn run format:check']
}

export default config
