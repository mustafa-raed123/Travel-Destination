import React from 'react'
import './Header.css'
// import { NavLink,Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header container bg-primary text-white text-center mb-5 p-3'>
    <h1>travel destinations</h1>
    <div className='links'>
      {/* <Link to = '/'>Home</Link> */}
      </div>
    </div>
  )
}

export default Header
