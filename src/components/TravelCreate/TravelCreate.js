import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const TravelCreate = () => {
    const[name,setName]= useState('')
    const[location,setLocation]= useState('')
    const[population,setPopulation]= useState(0)
    const[discoverName,setDiscovername]= useState('')
    const[discoverDescription,setDiscoverdescription]= useState('')
    const[imageURL,setimageURL]= useState('')
    const[foodPlace,setFoodplace]= useState('')
    const[foodDescription,setFooddescription]= useState('')
    const[stars,setStars]= useState(0)
    const[date,setDate]= useState('00-00-0000')
    const[weather,setWeather]= useState('')
const baseUrl= 'https://travelbase-backend.onrender.com'
const addToBase = () => {

    axios
        .post(`${baseUrl}/add`, {
          name:name,
          location:location,
          population:population,
          discover:{
            name:discoverName,
            stars:discoverDescription,
            imageURL:imageURL
          },
          food:{
            place:foodPlace,
            stars:stars,
            description:foodDescription
          },
          date:date,
          weather:weather
        })
        refreshPage()
}

function refreshPage () {
  setTimeout(() => {
    window.location.reload(false)
  }, 500)
}

  return (
    <div className='travel-create'>

        <h2 className='travel-create-header'>Welcome, add a new travel destinantion!</h2>
        

        <form className='travel-form'>
            <input placeholder='City Name' onChange={(e) => {setName(e.target.value)}} required></input>
            <input placeholder='Location' onChange={(e) => {setLocation(e.target.value)}}></input>
            <input placeholder='Population' onChange={(e) => {setPopulation(e.target.value)}}></input>
            <input placeholder='Place to Discover'onChange={(e) => {setDiscovername(e.target.value)}}></input>
            <input placeholder='Place Rating'onChange={(e) => {setDiscoverdescription(e.target.value)}}></input>
            <input placeholder='Place Image URL'onChange={(e) => {setimageURL(e.target.value)}}></input>
            <input placeholder='Place to Eat'onChange={(e) => {setFoodplace(e.target.value)}}></input>
            <input placeholder='Food Place Description'onChange={(e) => {setFooddescription(e.target.value)}}></input>
            <input placeholder='Stars for the Food place'onChange={(e) => {setStars(e.target.value)}}></input>
            <input placeholder='Date Entered MM-DD-YYYY'onChange={(e) => {setDate(e.target.value)}}></input>
            <input placeholder='Weather' onChange={(e) => {setWeather(e.target.value)}}></input>
            <Link to='/'><button onClick={addToBase} className='travel-form-button'>Submit</button></Link>
        </form>
    </div>
  )
}

export default TravelCreate