import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './TravelUpdate.css'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

const TravelUpdate = ({id, travels, travelSearch}) => {
  const travelsData = travels
  console.log(travelsData, travelSearch);
  const [population, setPopulation] = useState(0)
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [discoverName, setDiscoverName] = useState('')
  const [discoverDes, setDiscoverDes] = useState('')
  const [discoverImage, setDiscoverImage] = useState('')
  const [foodPlace, setFoodPlace] = useState('')
  const [foodStars, setFoodStars] = useState('')
  const [foodDes, setFoodDes] = useState('')
  const [date, setDate] = useState(travelsData[travelSearch] && travelsData[travelSearch].date)
  const [weather, setWeather] = useState(travelsData[travelSearch] && travelsData[travelSearch].weather)
  let named = name
  let pop = population

  console.log(travelsData[travelSearch] && travelsData[travelSearch].name);
      
  const travelRefresh = async (e) => {
    e.preventDefault();
    if (name.trim().length !== 0) {
      console.log('name is not empty, will proceed with change');
    } else {
      console.log('name is empty, name will not change');
      named = travelsData[travelSearch].name
    }
    if (population !== 0) {
      console.log('pop is not empty');
    } else {
      console.log('pop is empty');
    }
    try {
        const change = await axios.put('https://backend-travelapp.fly.dev/update', {
          name: named,
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
    setTimeout(() => {
      window.location.reload(false)
    }, 500)
    console.log('updated/reload page')
  }

  function refreshPage () {
    setTimeout(() => {
      window.location.reload(false)
    }, 500)
    console.log('reloaded page');
  }


  return (
    <div>
      <h1 className='update-title'>Update Here 🚀</h1>
        <form className='recipe-update-form'>
            <input className='input-elements'placeholder='City Name' name='name' onChange={(e) => {setName(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Location' name='location' onChange={(e) => {setLocation(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Population' name='population' onChange={(e) => {setPopulation(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Place to Discover' onChange={(e) => {setDiscoverName(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Place Description' onChange={(e) => {setDiscoverDes(e.target.value)}} required></input>
            <input className='input-elements' placeholder='Place Image URL' onChange={(e) => {setDiscoverImage(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Place to Eat' onChange={(e) => {setFoodPlace(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Stars Rating' onChange={(e) => {setFoodStars(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Food Place Description' onChange={(e) => {setFoodDes(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Date Entered MM-DD-YYYY' onChange={(e) => {setDate(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Weather' onChange={(e) => {setWeather(e.target.value)}} required></input>
        </form>
        <button className='update-button' onClick={travelRefresh}>Update Destination</button>
        <Link to='/' onClick={refreshPage}><TravelDelete id={id} /></Link>
    </div>
  )
}

export default TravelUpdate