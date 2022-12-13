import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimCursor from './components/AnimCursor';
// Components 
import Header from './components/Header/Header.js' 
import Home from './components/Home/Home.js'
import TravelCreate from './components/TravelCreate/TravelCreate.js';
import TravelDetails from './components/TravelDetails/TravelDetails.js'
import TravelDelete from './components/TravelDelete/TravelDelete'
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';


// Variables

const locationOne = {
  address: 'Houston, TX',
  lat: 29.762778,
  lng: -95.383056,
}


function App() {
  const [travels, setTravels] = useState([])
  const [location, setLocation] = useState({
    address: 'Houston, TX',
    lat: 29.762778,
    lng: -95.383056,
  })


  const getTravels =  async () => {
     const response = await axios({
      method: 'get',
      url: 'https://backend-travelapp.fly.dev/'
    })
    .then(res => 
      setTravels(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTravels()
  }, [])

  console.log(travels)

  const refreshState = () => {
    setTravels([])
    getTravels()
  }


  return (
    <div>
      <AnimCursor/>
      <div className='app-body'>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home travels={travels} getTravels={getTravels}/>} />
        <Route path='/travels/:id' element={<TravelDetails travels={travels} setLocation={setLocation}/>} />
        <Route path='/create' element={<TravelCreate />} />
        <Route path='/delete/:id' element={<TravelDelete />} />
      </Routes>

      <Footer refreshState={refreshState} />
    </div>
  )
}

export default App