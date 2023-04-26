import './index.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
        {/*<footer>*/}
        {/*    <div>*/}
        {/*        <div style={{marginTop: "-25vh", overflow: "hidden"}}>*/}
        {/*            <Footer/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</footer>*/}
    </BrowserRouter>
  )
}

export default App
