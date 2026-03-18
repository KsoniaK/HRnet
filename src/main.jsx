import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode : prévenir les erreurs, d’améliorer la qualité du code et de détecter des pratiques obsolètes ou dangereuses
  <StrictMode>
    <App />
  </StrictMode>,
)
