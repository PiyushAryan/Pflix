import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Login from './pages/login'
import Error from './pages/error'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Projects from './pages/projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
