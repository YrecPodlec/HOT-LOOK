import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import React from "react";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
