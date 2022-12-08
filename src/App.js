import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Components 
import Header from './components/Header/Header.js' 
import Home from './components/Home/Home.js'
import TravelCreate from './components/TravelCreate/TravelCreate';


function App() {
  const [travels, setTravels] = useState([])


  const getTravels =  async () => {
     const response = await axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    })
    .then(res => 
      setTravels(res.data))
    .catch(err => console.log(err));;
  }

  useEffect(() => {
    getTravels()
  }, [travels.length])




  console.log(travels);
  // console.log(travels.moves[0].move.name)
  console.log(travels.name);

  return (
    <div>
      <div className='app-body'>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home travels={travels} />} />
        <Route path='/create' element={<TravelCreate />} />
        
      </Routes>
    </div>
  )
}

export default App