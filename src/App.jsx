import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import {Link, NavLink } from 'react-router-dom'



function App() {

  return (
    <>

      <Navbar />
      <Home />
 
    </>
  )
}

export default App;
