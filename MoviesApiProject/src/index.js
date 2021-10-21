import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import './css/tablet.css'
import './css/mobile.css'
import './css/global.css'
import './css/iphone.css'

import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom';


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