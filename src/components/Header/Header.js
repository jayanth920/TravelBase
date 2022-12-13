import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <h1 className='header'>🛫🛬 TravelBase 🌎</h1>
        <nav className='nav'>
          <ul className='nav-list'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Add a Travel Destinantion!</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header