import './App.css'
import Registration from './components/pages/Registration/Registration'
import { useState, Suspense } from "react"
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation/Navigation"
import { PrivateRoutes } from "./routes/Private";
import { RestrictedRoutes } from "./routes/Restricted";

const Registration = lazy(() => import("./components/pages/Registration/Registration"))
const Dashboard = lazy(() => import("./components/pages/Dashboard/Dashboard"))
const Transactions = lazy(() => import("./components/pages/Transactions/Transactions"))

function App() {
  return (
    <>
      <Navigation />
      <Suspense>
      <Routes>
        <Route path="/" element={<RestrictedRoutes><Registration /></RestrictedRoutes>} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/transactions" element={<PrivateRoutes><Transactions /></PrivateRoutes>} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
