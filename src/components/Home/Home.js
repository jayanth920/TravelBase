import React, {useState, useEffect} from 'react'


const Home = ({travels}) => {
  const [travelList, setTravelList] = useState('')

  const getList = () => {
    let travelMap = travels.map((travels) => {
      return <div className='travel-list'>{travels.name}</div>
    })
    setTravelList(travelMap)
  }

  useEffect(() => {
    getList()
  },[travels])


console.log(travelList);

  return (
    <div className='home'>
      <p>Welcome Home</p>
      <div className='travel-list-container'>
        {travelList}
      </div>
    </div>
  )
}

export default Home