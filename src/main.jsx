
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalcontextProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(

    <GlobalcontextProvider>

        <App />
    </GlobalcontextProvider>

)
