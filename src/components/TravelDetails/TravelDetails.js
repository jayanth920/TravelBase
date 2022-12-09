import React from 'react'
import { useParams } from 'react-router-dom'


const TravelDetails = ({travels}) => {

  const {id} = useParams()
  const travelsArr = travels

  const travelSearch = travelsArr.findIndex(travel => travel._id == id)


  console.log(id);
  console.log(travelsArr);
  console.log(travelSearch);

  return (
    <div className='travel-details'>
      <h2>Location Details</h2>

      <div className='travel-details-list'>
      City Name: {travels[travelSearch].name}
      <br></br>

      Location: {travels[travelSearch].location}
      <br></br>
      Population: {travels[travelSearch].population}
      <br></br>
      Weather: {travels[travelSearch].weather}
      <br></br>
      Places to Discover: {travels[travelSearch].discover[0].name} {' '}Stars: {travels[travelSearch].discover[0].stars}
      <br></br>
      <img src={travels[travelSearch].discover[0].imageURL}></img>
    </div>



    </div>
  )
}

export default TravelDetails