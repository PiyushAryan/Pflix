import { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {app} from "./firebase"
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'


const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, 'users/piyush'),
    {
      id : 1,
      name : 'Piyush Aryan',
      age : 21,
    })
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
