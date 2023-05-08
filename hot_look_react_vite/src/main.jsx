import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import CollectionsStore from "./store/mobxstore.jsx";
export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <Context.Provider value={{
          device: new CollectionsStore()
      }}>
          <div className={"background_lines"}></div>
          <App />
      </Context.Provider>
  </React.StrictMode>
)
