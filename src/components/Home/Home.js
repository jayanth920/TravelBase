import React from 'react'

const Home = ({pokemon}) => {
  return (
    <div className='home'>
      <p>Welcome Home <br></br> {pokemon.id} {" "} {pokemon.name}</p>
      <img src={pokemon.sprites && pokemon.sprites.front_default}></img>
    </div>
  )
}

export default Home