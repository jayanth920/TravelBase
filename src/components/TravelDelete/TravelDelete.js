import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TravelDelete = ({id}) => {

  const ident = {_id: id}
  console.log(ident);


  const removeTravel = () => {
    const res = axios.delete('https://backend-travelapp.fly.dev/delete', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {_id: id}
    })
    console.log('delete');
  }

  return (
    <div>
        <button className='delete' onClick={removeTravel}>Delete</button>
    </div>
  )
}

export default TravelDelete