import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { ThemeContext, ThemeContextProvider } from './context/context.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeContextProvider>
      <Router>
        <App/>
      </Router>
    </ThemeContextProvider>
  </>
)
