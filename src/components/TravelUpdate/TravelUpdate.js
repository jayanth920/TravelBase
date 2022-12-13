import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './TravelUpdate.css'

// Components 
import TravelDelete from '../TravelDelete/TravelDelete'

const TravelUpdate = ({id, travels, travelSearch, getTravels, setTravelData}) => {
  const travelsData = travels
  console.log(travelsData, travelSearch);
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
    if (discoverImage.trim().length !== 0) {
      console.log('image not empty, will change')
    } else {
      image = travelsData[travelSearch].discover.imageURL
      console.log('image empty, will retain');
    }
    if (discoverName.trim().length !==0) {
      console.log('discover name not empty, will change');
    } else {
      discName = travelsData[travelSearch].discover.name
      console.log('discover name empty, will retain');
    }
    if (discoverStar.trim().length !==0) {
      console.log('discover star not empty, will change');
    } else {
      discStar = travelsData[travelSearch].discover.stars
      console.log('discover star empty, will retain');
    }
    if (foodPlace.trim().length !==0) {
      console.log('food place not empty, will change');
    } else {
      foodLocation = travelsData[travelSearch].food.place
      console.log('food place empty, will retain');
    }
    if (foodStars.trim().length !== 0) {
      console.log('food stars is not empty, will update');
    } else {
      foodRating = travelsData[travelSearch].food.stars
      console.log('food stars is empty, will retain');
    }
    if (foodDes.trim().length !==0) {
      console.log('food description is not empty, will update');
    } else {
      foodStory = travelsData[travelSearch].food.description
      console.log('food description empty, will retain');
    }
    try {
        const change = await axios.put('https://backend-travelapp.fly.dev/update', {
          name: named,
          location: location,
          population: population,
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