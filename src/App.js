import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Components 
import Header from './components/Header/Header.js' 
import Home from './components/Home/Home.js'
import TravelCreate from './components/TravelCreate/TravelCreate.js';
import TravelDetails from './components/TravelDetails/TravelDetails.js'


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

  console.log(travels.discover && travels.discover[0].name);
  // console.log(travels[0]._id);
  console.log(travels)


  return (
    <div>
      <div className='app-body'>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home travels={travels} />} />
        <Route path='/travels/:id' element={<TravelDetails travels={travels} />} />
        <Route path='/create' element={<TravelCreate />} />
      </Routes>
    </div>
  )
}

export default App