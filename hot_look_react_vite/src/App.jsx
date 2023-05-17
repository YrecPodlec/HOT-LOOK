import './index.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
          <AppRouter/>
          <NavBar/>
          <div style={{marginTop: "-248px"}}>
              <Footer/>
          </div>
      </BrowserRouter>
      </Provider>
  )
}

export default App
