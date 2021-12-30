import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {AppContext} from './components/context/appContext'

ReactDOM.render(
  <React.StrictMode>
   <AppContext>
    <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
)
