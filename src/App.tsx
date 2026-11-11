import './App.css'
import { Suspense } from "react"
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
// import { PrivateRoutes } from "./routes/Private";
// import { RestrictedRoutes } from "./routes/Restricted";

const Registration = lazy(() => import("./components/pages/Registration/Registration"))
const Dashboard = lazy(() => import("./components/pages/Dashboard/Dashboard"))
const Transactions = lazy(() => import("./components/pages/Transactions/Transactions"))

function App() {
  return (
    <>
      <Suspense>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
