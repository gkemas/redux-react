import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import PrivateRouter from "./PrivateRouter"
import News from "../pages/News"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="" element={<News />} />
      </Route>

      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default AppRouter