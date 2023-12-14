import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import About from './component/Default/About'
import Contact from './component/Default/Contact'
import Home from './component/Default/Home'
import Menu from './component/Default/Menu'
import Pnf from './component/Default/Pnf'
import Footer from './component/Default/Footer'
import BasicLevel from './component/Default/BasicLevel'
import SpokenLevel from './component/Default/SpokenLevel'
import AdvanceLevel from './component/Default/AdvanceLevel'



function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-right'} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/basic-level' element={<BasicLevel />} />
        <Route path='/spoken-level' element={<SpokenLevel />} />
        <Route path='/advance-level' element={<AdvanceLevel />} />

        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
