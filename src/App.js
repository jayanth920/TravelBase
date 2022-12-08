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
  const [pokemon, setPokemon] = useState([])



  const getTravels =  async () => {
     const response = await axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    })
    .then(res => 
      setPokemon(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTravels()
  }, [])

    



  console.log(pokemon);
  console.log(pokemon.name);
  console.log(pokemon.sprites && pokemon.sprites.front_default);

  if (pokemon.name) {
    console.log('exists');
  }

  if (pokemon.sprites && pokemon.sprites.front_default) {
    console.log('exists');
  } else {
    console.log('no show');
  }




  return (
    <div>
      <div className='app-body'>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home travels={travels} pokemon={pokemon} />} />
        <Route path='/travels' element={<TravelDetails />} />
        <Route path='/create' element={<TravelCreate />} />
      </Routes>
    </div>
  )
}

export default App