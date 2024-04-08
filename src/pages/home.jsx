import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hero from '../components/hero';
import Tile from '../components/tile';

function home() {
  return (
    <>
      <Hero />
      <Tile />
    </>
  )
}

export default home;