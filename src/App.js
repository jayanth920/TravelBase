import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Components 
import Header from './components/Header/Header.js' 


function App() {
  const [travels, setTravels] = useState([])

  useEffect(() => {
    getTravels()
  }, [])

  const getTravels =  async () => {
     await axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/evolution-chain/25'
    })
    .then(res => 
      setTravels(res.data))
    .catch(err => console.log(err));
  }

  console.log(travels.chain.species.name);
  console.log(travels);

  return (
    <div>
      <div className='app-body'>
        <Header />
      </div>

      <Routes>
        
      </Routes>
    </div>
  )
}

export default App