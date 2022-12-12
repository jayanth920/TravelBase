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
      <marquee><p className='footer-text'>Footer</p></marquee>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={reloaded}>Regular Load</button>
      <button onClick={refreshState}>State Fresh</button>
      {/* <button onClick={() => navigate(1)}>Forward</button> */}
    </div>
  )
}

export default Footer