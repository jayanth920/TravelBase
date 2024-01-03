import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './TravelDetails.css'
import axios from 'axios'

//Components
import TravelUpdate from '../TravelUpdate/TravelUpdate'

const TravelDetails = ({travels}) => {

  const [travelData, setTravelData] = useState()

  const getTravels =  async () => {
    await axios({
     method: 'get',
     url: 'https://travelbase-backend.onrender.com/'
   })
   .then(res => 
     setTravelData(res.data))
   .catch(err => console.log(err))
 }

 useEffect(() => {
  getTravels()
}, [])

  const {id} = useParams()
  const travelsArr = travels
  const travelsArrTwo = travelData

  const travelSearch = travelData && travelsArr.findIndex(travel => travel._id === id)
  const travelSearchTwo = travelData && travelsArrTwo.findIndex(travel => travel._id === id)

  return (
    <div className='travel-container'>
      <div className="travel-details">
        <div className="travel-details-list">
          <div className='city-name'><h1>{travelData && travelData[travelSearchTwo].name}</h1></div>
          <br></br>
          <div className='elements'>Location: {travelData && travelData[travelSearchTwo].location}</div>
          <br></br>
          <div className='elements'>Population: {travelData && travelData[travelSearchTwo].population}</div>
          <br></br>
          <div className='elements'>Weather: {travelData && travelData[travelSearchTwo].weather}</div>
          <br></br>
          <br></br>
          <img className="discover-image" alt="pic" src={travelData && travelData[travelSearchTwo].discover.imageURL}></img>
          <br></br>
          <div className='elements'>Discover: {travelData && travelData[travelSearchTwo].discover.name}</div>
          <br></br>
          <div className='elements'>Stars: {travelData && travelData[travelSearchTwo].discover.stars}</div>
          <br></br>
          <div className='elements'>Food: {travelData && travelData[travelSearchTwo].food.place}</div>
          <br></br>
          <div className='elements'>Stars: {travelData && travelData[travelSearchTwo].food.stars}</div>
          <br></br>
          <div className='elements'>Description: {travelData && travelData[travelSearchTwo].food.description}</div>
          <br></br>
          <div>Date Updated: {travelData && travelData[travelSearchTwo].date}</div>
        </div>
        <TravelUpdate id={id} travels={travels} travelSearch={travelSearch}/>   
      </div>
    </div>
  );
}

export default TravelDetails