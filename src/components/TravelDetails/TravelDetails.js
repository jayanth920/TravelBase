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



    </div>
  )
}

export default TravelDetails