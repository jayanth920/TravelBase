import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './TravelUpdate.css'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

const TravelUpdate = ({id, travels, travelSearch, getTravels, setTravelData}) => {
  const travelsData = travels
  const [population, setPopulation] = useState(0)
  const [location, setLocation] = useState(travelsData[travelSearch] && travelsData[travelSearch].location)
  const [name, setName] = useState('')
  const [discoverName, setDiscoverName] = useState('')
  const [discoverStar, setDiscoverStar] = useState('')
  const [discoverImage, setDiscoverImage] = useState('')
  const [foodPlace, setFoodPlace] = useState('')
  const [foodStars, setFoodStars] = useState('')
  const [foodDes, setFoodDes] = useState('')
  const [date, setDate] = useState(travelsData[travelSearch] && travelsData[travelSearch].date)
  const [weather, setWeather] = useState(travelsData[travelSearch] && travelsData[travelSearch].weather)
  let named = name
  let pop = population
  let image = discoverImage
  let discName = discoverName
  let discStar = discoverStar
  let foodLocation = foodPlace
  let foodRating = foodStars
  let foodStory = foodDes


      
  const travelRefresh = async (e) => {
    e.preventDefault();
    if (name.trim().length !== 0) {
    } else {
      named = travelsData[travelSearch].name
    }
    if (population !== 0) {

    } else {

      pop = travelsData[travelSearch].population
    }
    if (discoverImage.trim().length !== 0) {

    } else {
      image = travelsData[travelSearch].discover.imageURL

    }
    if (discoverName.trim().length !==0) {

    } else {
      discName = travelsData[travelSearch].discover.name

    }
    if (discoverStar.trim().length !==0) {

    } else {
      discStar = travelsData[travelSearch].discover.stars

    }
    if (foodPlace.trim().length !==0) {

    } else {
      foodLocation = travelsData[travelSearch].food.place

    }
    if (foodStars.trim().length !== 0) {

    } else {
      foodRating = travelsData[travelSearch].food.stars

    }
    if (foodDes.trim().length !==0) {

    } else {
      foodStory = travelsData[travelSearch].food.description

    }
    try {
        await axios.put('https://travelbase-backend.onrender.com/update', {
          name: named,
          location: location,
          population: pop,
          discover:{
            name: discName,
            stars: discStar,
            imageURL: image
          },
          food:{
            place: foodLocation,
            stars: foodRating,
            description:foodStory
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
  }

  function refreshPage () {
    setTimeout(() => {
      window.location.reload(false)
    }, 500)
  }

  return (
    <div>
      <h1 className='update-title'>Update Here 🚀</h1>
        <form className='recipe-update-form'>
            <input className='input-elements'placeholder='City Name' name='name' onChange={(e) => {setName(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Location' name='location' onChange={(e) => {setLocation(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Population' name='population' onChange={(e) => {setPopulation(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Place to Discover' onChange={(e) => {setDiscoverName(e.target.value)}} required></input>
            <input className='input-elements'placeholder='Place Rating' onChange={(e) => {setDiscoverStar(e.target.value)}} required></input>
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