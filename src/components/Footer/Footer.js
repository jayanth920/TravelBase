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
      <p className='project'>PROJECT By: Nikhil Prasad, Jayanth & Naveed 🚀</p>
      <button className='back' onClick={() => navigate(-1)}>Back</button>
      <button className='reload' onClick={reloaded}>Reload</button>
      {/* <button onClick={refreshState}>State Fresh</button> */}
      {/* <button onClick={() => navigate(1)}>Forward</button> */}
    </div>
  )
}

export default Footer