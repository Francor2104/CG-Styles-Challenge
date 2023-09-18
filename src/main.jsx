import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/navbar/navbar.jsx'
import Inputs from './Components/Inputs/Inputs.jsx'
import Footer from './Components/footer/footer.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Inputs/>
    <Footer/>
  </React.StrictMode>,
)
