import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({refreshState}) => {
  const navigate = useNavigate()


  const reloaded = () => {
    window.location.reload()
  }


  return (
    <div className='footer'>
      <p>Footer</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={reloaded}>Regular Load</button>
      <button onClick={refreshState}>State Fresh</button>
      {/* <button onClick={() => navigate(1)}>Forward</button> */}
    </div>
  )
}

export default Footer