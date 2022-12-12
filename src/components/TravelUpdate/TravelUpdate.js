import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

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
        weather: '',
        _id: id
      })

      const ident = {_id: id}
      console.log(ident);

      const travelRefresh = async () => {
        try {
            const change = await axios.put('https://backend-travelapp.fly.dev/update', form)
        } catch (err) {
            console.log(err);
        }
      }

      const handleChange  = (e) => {
        const newObj = {...form}

        newObj[e.target.name] = e.target.value
        setForm(newObj)
        console.log(form)
      }

      const travelDelete = () => {
        const res = axios.delete('https://backend-travelapp.fly.dev/delete', {
          headers: {
            'Content-Type': 'application/json'
          },
          data: {_id: id}
        })
        console.log('done');
      }



  return (
    <div>
        <form className='recipe-update-form'>
            <input placeholder='City Name' name='name' value={form.name} onChange={handleChange}></input>
            <input placeholder='Location' name='location' value={form.location} onChange={handleChange}></input>
            <input placeholder='Population' name='population' value={form.population} onChange={handleChange}></input>
            <input placeholder='Place to Discover' name='discover.name' value={form.discover.name} onChange={handleChange}></input>
            <input placeholder='Place Description' name='discover.description' value={form.discover.description} onChange={handleChange}></input>
            <input placeholder='Place Image URL' name='discover.imageURL' value={form.discover.imageURL} onChange={handleChange}></input>
            <input placeholder='Place to Eat' name='food.place' value={form.food.place} onChange={handleChange}></input>
            <input placeholder='Stars Rating' name='food.stars' value={form.food.stars} onChange={handleChange}></input>
            <input placeholder='Food Place Description' name='food.description' value={form.food.description} onChange={handleChange}></input>
            <input placeholder='Date Entered MM-DD-YYYY' name='date' value={form.date} onChange={handleChange}></input>
            <input placeholder='Weather' name='weather' value={form.weather} onChange={handleChange}></input>
        </form>
        <button onClick={travelRefresh}>Update Recipe</button>
        <button onClick={travelDelete}>Delete</button>
        <TravelDelete id={id} />
    </div>
  )
}

export default TravelUpdate