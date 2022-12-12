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
            <input placeholder='City Name' value={form.name}></input>
            <input placeholder='Location' value={form.location}></input>
            <input placeholder='Population' value={form.population}></input>
            <input placeholder='Place to Discover' value={form.discover.name}></input>
            <input placeholder='Place Description' value={form.discover.description}></input>
            <input placeholder='Place Image URL' value={form.discover.imageURL}></input>
            <input placeholder='Place to Eat' value={form.food.place}></input>
            <input placeholder='Stars Rating' value={form.food.stars}></input>
            <input placeholder='Food Place Description' value={form.food.description}></input>
            <input placeholder='Date Entered MM-DD-YYYY' value={form.date}></input>
            <input placeholder='Weather' value={form.weather}></input>
        </form>
        <button>Update Recipe</button>
    </div>
  )
}

export default TravelUpdate