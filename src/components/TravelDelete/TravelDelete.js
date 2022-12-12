import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TravelDelete = ({id}) => {

  const ident = {_id: id}
  console.log(ident);

    // const travelDelete = () => {
    //     axios({
    //         method: 'delete',
    //         url: 'https://backend-travelapp.fly.dev/delete'
    //     })
    //     .catch(err => console.log(err))
    // }

    const removeTravel = () => {
      try {
        const remove = axios.delete('https://backend-travelapp.fly.dev/delete', {_id: id})
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div>
        <button className='delete' onClick={removeTravel}>Delete</button>
    </div>
  )
}

export default TravelDelete