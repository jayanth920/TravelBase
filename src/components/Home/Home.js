import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Home = ({travels}) => {
  const [travelList, setTravelList] = useState('')

  const getList = () => {
    let travelMap = travels.map((travels, index) => {
      return <div className='travel-list' key={index}>
        <Link to={'/travels/'+ travels._id}>
          <div>{travels.name}</div>
        </Link>
            </div>
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