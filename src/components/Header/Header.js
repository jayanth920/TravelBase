import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
        <h1 className='header'>🛫🛬 TravelBase 🌎</h1>
        <nav className='nav'>
          <ul className='nav-list'>
            <li>
              <button className="Home" onClick={<Link to="/">Home</Link>}>HOME</button>
            </li>
            <li>
              <button className='Create'onClick={<Link to="/create">Add a Travel Destinantion!</Link>}>ADD A PLACE !</button>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header