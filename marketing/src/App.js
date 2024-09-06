import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./components/Landing.jsx"
import Pricing from "./components/Pricing.jsx"
import "./App.css";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </Router>
  )
}
export default App