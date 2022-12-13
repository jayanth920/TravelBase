import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = ({travels, getTravels}) => {
  const [travelList, setTravelList] = useState('')

  const getList = () => {
    let travelMap = travels.map((travels, index) => {
      return <div className='travel-list' key={index}>
        <Link to={'/travels/'+ travels._id}>
          <div className='name'>{travels.name}</div>
        </Link>
            </div>
    })
    setTravelList(travelMap)
  }

  useEffect(() => {
    getList()
  },[travels])

  const refresh = () => {
    setTravelList([])
    getTravels()
  }



  return (
    <div className='home'>
      <div className='travel-list-container'>
        {travelList}
      </div>
      {/* <button onClick={refresh}>Refresh Demo</button> */}
    </div>
  )
}

export default Home