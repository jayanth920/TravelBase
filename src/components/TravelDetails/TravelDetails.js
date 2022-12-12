import React from 'react'
import { useParams } from 'react-router-dom'
import './TravelDetails.css'


const TravelDetails = ({travels}) => {

  const {id} = useParams()
  const travelsArr = travels

  const travelSearch = travelsArr.findIndex(travel => travel._id == id)


  console.log(id);
  console.log(travelsArr);
  console.log(travelSearch);

  return (
    <div className="travel-details">
      <div className="center text">
        <label data-content="Location Details">
          <div className='heading'>Location Details</div><br></br>
        </label>
      </div>
<br></br>
      <div className="travel-details-list">
        <div className="elements">City Name: {travels[travelSearch].name}</div>
        <br></br>
        <div className='elements'>Location: {travels[travelSearch].location}</div>
        <br></br>
        <div className='elements'>Population: {travels[travelSearch].population}</div>
        <br></br>
        <div className='elements'>Weather: {travels[travelSearch].weather}</div>
        <br></br>
        <div className='elements'>Places to Discover: {travels[travelSearch].discover.name}</div>
        <br></br>
        <img
          className="discover-image"
          src={travels[travelSearch].discover.imageURL}
        ></img>
        <br></br>
        <div className='elements'>Food: {travels[travelSearch].food.place}</div>
        <br></br>
        <div className='elements'>Stars: {travels[travelSearch].food.stars}</div>
        <br></br>
        <div className='elements'>Description: {travels[travelSearch].food.description}</div>
      </div>
      <button className='updateButton'>UPDATE</button>
    </div>
  );
}

export default TravelDetails