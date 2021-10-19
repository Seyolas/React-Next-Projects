import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import './css/tablet.css'
import './css/mobile.css'
import './css/global.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
      <App/> 
      </Router> 
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
