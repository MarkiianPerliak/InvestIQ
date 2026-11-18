import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HashRouter } from "react-router-dom";
import { AuthListener } from './features/auth/AuthListener.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}><HashRouter><AuthListener /><App /></HashRouter></Provider>
  </StrictMode>,
)
