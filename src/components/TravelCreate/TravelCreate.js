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

        <h2 className='travel-create-header'>Welcome, add a new travel destinantion!</h2>
        

        <form className='travel-form'>
            <input placeholder='City Name'></input>
            <input placeholder='GPS Coordinates'></input>
            <input placeholder='Population'></input>
            <input placeholder='Places to Discover'></input>
            <input placeholder='Places to Eat'></input>
            <button className='travel-form-button'>Submit</button>
        </form>

    </div>
  )
}

export default TravelCreate