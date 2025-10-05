import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { initAnalytics } from './lib/analytics'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

initAnalytics()


