import React from 'react'

const Home = ({travels}) => {
  return (
    <div className='home'>
      Welcome Home <br></br> {travels.id} {" "} {travels.name}
      
    </div>
  )
}

export default Home