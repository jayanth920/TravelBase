import React from 'react'

const Home = ({travels}) => {
  return (
    <div className='home'>
      <p>Welcome Home</p>
      {travels[0 ]&& travels[0].name}
    </div>
  )
}

export default Home