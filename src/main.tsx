import * as Sentry from '@sentry/react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

Sentry.init({
    dsn: 'https://5bd4b0deaf9d7b5bd13d88f414c7a824@o4509623096377344.ingest.us.sentry.io/4509623113154560',
    enabled: import.meta.env.VITE_ENV === 'production',
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
