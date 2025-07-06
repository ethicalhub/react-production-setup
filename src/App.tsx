import { Feature1Page } from '@features/feature1'

import './index.css'
import { Feature2Page } from '@features/feature2'

const App = () => {
    return (
        <div className="text-red-400 flex items-center min-h-screen justify-center text-5xl font-bold italic underline underline-offset-2">
            React Production Setup + {import.meta.env.VITE_ENV}
            <Feature1Page />
            <Feature2Page />
        </div>
    )
}

export default App
