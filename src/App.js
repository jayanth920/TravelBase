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

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}


function App() {
  const [travels, setTravels] = useState([])


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
        <Route path='/travels/:id' element={<TravelDetails travels={travels} />} />
        <Route path='/create' element={<TravelCreate />} />
        <Route path='/delete/:id' element={<TravelDelete />} />
      </Routes>

      <Footer refreshState={refreshState} />
      <Map location={location} zoomLevel={17} />
    </div>
  )
}

export default App