import React from 'react'

function Home({travels}) {
  return (
    <div className='home'>
      Home Page Test <br/>
      {travels.id} <br/>
      {travels.name}<br/>
      {/* {travels.moves[0].move.name && travels.moves[0].move.name}  */}

    </div>
  )
}

export default Home