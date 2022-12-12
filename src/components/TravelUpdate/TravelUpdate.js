import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const TravelUpdate = ({id}) => {
    const [form, setForm] = useState({
        name: '',
        location: '',
        population: 0,
        discover:{
          name: '',
          description: '',
          imageURL: ''
        },
        food:{
          place: '',
          stars: '',
          description: ''
        },
        date: '',
        weather: ''
      })

      const travelRefresh = async () => {
        try {
            const change = await axios.put('url', form)
        } catch (err) {
            console.log(err);
        }
      }

      const handleChange  = (e) => {
        const newObj = {...form}

        newObj[e.target.name] = e.target.value
        setForm(newObj)
      }



  return (
    <div>
        <button>Update Recipe</button>
    </div>
  )
}

export default TravelUpdate