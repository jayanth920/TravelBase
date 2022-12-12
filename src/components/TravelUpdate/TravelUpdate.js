import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const TravelUpdate = ({id}) => {
    const [forms, setForm] = useState({
        name: '',
        location: '',
        population: 0,
        discover:{
          name: '',
          description: '',
          imageURL: ''
        },
        food:{
          place: '',
          stars: '',
          description: ''
        },
        date: '',
        weather: ''
      })



  return (
    <div>TravelUpdate</div>
  )
}

export default TravelUpdate