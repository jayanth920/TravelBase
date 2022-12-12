import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './TravelDetails.css'
import axios from 'axios'

//Components
import TravelUpdate from '../TravelUpdate/TravelUpdate'


const TravelDetails = ({travels}) => {

  const [travelData, setTravelData] = useState()

  const getTravels =  async () => {
    const response = await axios({
     method: 'get',
     url: 'https://backend-travelapp.fly.dev/'
   })
   .then(res => 
     setTravelData(res.data))
   .catch(err => console.log(err))
 }

 useEffect(() => {
  getTravels()
}, [])

 console.log(travelData);
//  console.log(travelData && travelData[0].name);
 console.log(travels);
//  console.log(travelData);

  const {id} = useParams()
  const travelsArr = travels
  const travelsArrTwo = travelData
  console.log(travelsArr);
  // console.log(travelsArrTwo);

  const travelSearch = travelData && travelsArr.findIndex(travel => travel._id == id)
  const travelSearchTwo = travelData && travelsArrTwo.findIndex(travel => travel._id == id)


  // console.log(id);
  // console.log(travelsArr);
  console.log(travelSearch);
  console.log(travelSearchTwo);
  console.log(travelData && travelData[travelSearchTwo].name);

  return (
    <div className="travel-details">
      <div className="center text">
        <label data-content="Location Details">
          <div className='heading'>Location Details</div><br></br>
        </label>
      </div>
<br></br>
      <div className="travel-details-list">
        {/* <div className="elements">City Name: {travels[travelSearch].name}</div> */}
        <div className="elements">City Name: {travelData && travelData[travelSearchTwo].name}</div>
        <br></br>
        {/* <div className='elements'>Location: {travels[travelSearch].location}</div> */}
        {/* <div className='elements'>Location: {travels[travelSearch].location}</div> */}
        <br></br>
        <div className='elements'>Population: {travelData && travelData[travelSearchTwo].population}</div>
        <br></br>
        <div className='elements'>Weather: {travelData && travelData[travelSearchTwo].weather}</div>
        <br></br>
        <div className='elements'>Places to Discover: {travelData && travelData[travelSearchTwo].discover.name}</div>
        <br></br>
        {/* <img
          className="discover-image"
          src={travels[travelSearch].discover.imageURL}
        ></img> */}
        <br></br>
        <div className='elements'>Food: {travelData && travelData[travelSearchTwo].name}</div>
        <br></br>
        <div className='elements'>Stars: {travelData && travelData[travelSearchTwo].name}</div>
        <br></br>
        <div className='elements'>Description: {travelData && travelData[travelSearchTwo].name}</div>
      </div>
      <TravelUpdate id={id} />   
    </div>
  );
}

export default TravelDetails