import React from 'react'
import { createRoot } from 'react-dom/client'
import '../server'
import App from "./App"

createRoot(document.getElementById('root')).render(
    <App />
)
