import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from "./redux/store";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}><PersistGate persistor={persistor}><HashRouter><App /></HashRouter></PersistGate></Provider> */}
        <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
