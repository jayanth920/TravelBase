import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const TravelCreate = () => {
    const [newTravel, setNewTravel] = useState({
        name: '',
        location: '',
        population: '',
        discover: [{
            name: String,
            description: String,
            imageURL: String
        }],
        food: [{
            place: String,
            stars: Number,
            description: String
        }],
        date: Date,
        weather: String
    })

    
    const travelCreate = async () => {
    }


  return (
    <div className='travel-create'>
        <form className='travel-form'>
            <input placeholder='Enter City Name...'></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
        </form>

    </div>
  )
}

export default TravelCreate