import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TravelDelete = () => {
    const id = useParams()

    const travelDelete = () => {
        axios({
            method: 'POST',
            url: 'https://backend-travelapp.fly.dev/delete'
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <button className='delete'>Delete</button>
    </div>
  )
}

export default TravelDelete