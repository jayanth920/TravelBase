import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

const TravelUpdate = ({id, travels}) => {
  const travelsData = travels
  const [population, setPopulation] = useState(0)
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [discoverName, setDiscoverName] = useState('')
  const [discoverDes, setDiscoverDes] = useState('')
  const [discoverImage, setDiscoverImage] = useState('')
  const [foodPlace, setFoodPlace] = useState('')
  const [foodStars, setFoodStars] = useState('')
  const [foodDes, setFoodDes] = useState('')
  const [date, setDate] = useState('')
  const [weather, setWeather] = useState('')

      
      const travelRefresh = async () => {
        try {
            const change = await axios.put('https://backend-travelapp.fly.dev/update', {
              name: name,
              location: location,
              population: population,
              discover:{
                name: discoverName,
                description: discoverDes,
                imageURL: discoverImage
              },
              food:{
                place: foodPlace,
                stars: foodStars,
                description:foodDes
              },
              date: date,
              weather: weather,
              _id: id
            })
        } catch (err) {
            console.log(err);
        }
      }

  return (
    <div>
        <form className='recipe-update-form'>
            <input placeholder='City Name' name='name' onChange={(e) => {setName(e.target.value)}} required></input>
            <input placeholder='Location' name='location' onChange={(e) => {setLocation(e.target.value)}} required></input>
            <input placeholder='Population' name='population' onChange={(e) => {setPopulation(e.target.value)}} required></input>
            <input placeholder='Place to Discover' onChange={(e) => {setDiscoverName(e.target.value)}} required></input>
            <input placeholder='Place Description' onChange={(e) => {setDiscoverDes(e.target.value)}} required></input>
            <input placeholder='Place Image URL' onChange={(e) => {setDiscoverImage(e.target.value)}} required></input>
            <input placeholder='Place to Eat' onChange={(e) => {setFoodPlace(e.target.value)}} required></input>
            <input placeholder='Stars Rating' onChange={(e) => {setFoodStars(e.target.value)}} required></input>
            <input placeholder='Food Place Description' onChange={(e) => {setFoodDes(e.target.value)}} required></input>
            <input placeholder='Date Entered MM-DD-YYYY' onChange={(e) => {setDate(e.target.value)}} required></input>
            <input placeholder='Weather' onChange={(e) => {setWeather(e.target.value)}} required></input>
        </form>
        <button className='update-button' onClick={travelRefresh}>Update Recipe</button>
        <Link to='/'><TravelDelete id={id} /></Link>
    </div>
  )
}

export default TravelUpdate