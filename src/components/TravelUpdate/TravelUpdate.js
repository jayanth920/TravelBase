import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const TravelUpdate = ({id}) => {
    const [form, setForm] = useState({
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

      const travelRefresh = async () => {
        try {
            const change = await axios.put('url', form)
        } catch (err) {
            console.log(err);
        }
      }

      const handleChange  = (e) => {
        const newObj = {...form}

        newObj[e.target.name] = e.target.value
        setForm(newObj)
      }



  return (
    <div>
        <form className='recipe-update-form'>
            <input placeholder='City Name'></input>
            <input placeholder='Location'></input>
            <input placeholder='Population'></input>
            <input placeholder='Place to Discover'></input>
            <input placeholder='Place Description'></input>
            <input placeholder='Place Image URL'></input>
            <input placeholder='Place to Eat'></input>
            <input placeholder='Food Place Description'></input>
            <input placeholder='Stars Rating'></input>
            <input placeholder='Date Entered MM-DD-YYYY'></input>
            <input placeholder='Weather'></input>
        </form>
        <button>Update Recipe</button>
    </div>
  )
}

export default TravelUpdate