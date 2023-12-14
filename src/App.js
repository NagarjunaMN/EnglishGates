import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import About from './component/Default/About'
import Contact from './component/Default/Contact'
import Home from './component/Default/Home'
import Menu from './component/Default/Menu'
import Pnf from './component/Default/Pnf'
import Footer from './component/Default/Footer'



function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-right'} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
