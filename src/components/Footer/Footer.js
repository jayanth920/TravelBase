import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = ({refreshState}) => {
  const navigate = useNavigate()


  const reloaded = () => {
    window.location.reload()
  }


  return (
    <div className='footer'>
      
      <button className='back' onClick={() => navigate(-1)}>Back</button>
      <button className='reload' onClick={reloaded}>Reload</button>
      <p className='project'>PROJECT By: Nikhil, Jayanth, & Naveed 🚀</p>
    </div>
  )
}

export default Footer