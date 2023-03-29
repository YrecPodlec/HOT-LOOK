import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import './styles/navbar.scss'
import './styles/home/homePage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgrundLines from "./components/backgrund_lines.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BackgrundLines/>
      <App />
  </React.StrictMode>
)
