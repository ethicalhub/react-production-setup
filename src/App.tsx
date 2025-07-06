import './index.css'

const App = () => {
    // throw new Error('This is a test error for Sentry integration')
    return (
        <div className="text-red-400 flex items-center min-h-screen justify-center text-5xl font-bold italic underline underline-offset-2">
            React Production Setup + {import.meta.env.VITE_ENV}
        </div>
    )
}

export default App
