import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/ContextProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
)
