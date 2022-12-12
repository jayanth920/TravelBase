import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

const TravelUpdate = ({id, travels}) => {
  const travelsData = travels
  const [population, setPopulation] = useState('')
  const [name, setName] = useState('')
  // console.log(travelsData[0].name);
  let popData = population

    const [form, setForm] = useState({
        name: undefined,
        location: undefined,
        population: popData,
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
        date: undefined,
        weather: undefined,
        _id: id
      })


      // const travelRefresh = async () => {
      //   try {
      //       const change = await axios.put('https://backend-travelapp.fly.dev/update', form)
      //   } catch (err) {
      //       console.log(err);
      //   }
      // }
      
      const travelRefresh = async () => {
        try {
            const change = await axios.put('https://backend-travelapp.fly.dev/update', {
              name: name,
              location: undefined,
              population: population,
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
              date: undefined,
              weather: undefined,
              _id: id
            })
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

  return (
    <div>
        <form className='recipe-update-form'>
            <input placeholder='City Name' name='name' onChange={(e) => {setName(e.target.value)}} required></input>
            <input placeholder='Location' name='location' value={form.location} onChange={handleChange} required></input>
            <input placeholder='Population' name='population' onChange={(e) => {setPopulation(e.target.value)}} required></input>
            <input placeholder='Place to Discover' name='discover.name' value={form.discover.name} onChange={handleChange} required></input>
            <input placeholder='Place Description' name='discover.description' value={form.discover.description} onChange={handleChange} required></input>
            {/* <input placeholder='Place Image URL' name='discover.imageURL' value={form.discover.imageURL} onChange={handleChange} required></input> */}
            <input placeholder='Place to Eat' name='food.place' value={form.food.place} onChange={handleChange} required></input>
            <input placeholder='Stars Rating' name='food.stars' value={form.food.stars} onChange={handleChange} required></input>
            <input placeholder='Food Place Description' name='food.description' value={form.food.description} onChange={handleChange} required></input>
            <input placeholder='Date Entered MM-DD-YYYY' name='date' value={form.date} onChange={handleChange} required></input>
            <input placeholder='Weather' name='weather' value={form.weather} onChange={handleChange} required></input>
        </form>
        <button className='update-button' onClick={travelRefresh}>Update Recipe</button>
        <Link to='/'><TravelDelete id={id} /></Link>
    </div>
  )
}

export default TravelUpdate