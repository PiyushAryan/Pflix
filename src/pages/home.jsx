import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hero from '../components/hero';
import Tile from '../components/tile';
import Navbar from '../components/navbar';

function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tile />
    </>
  )
}

export default home;