import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Body from '../components/body';
import Footer from '../components/footer';


function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
    </>
  )
}

export default home;