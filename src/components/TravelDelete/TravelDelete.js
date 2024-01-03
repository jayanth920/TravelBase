import axios from 'axios'

const TravelDelete = ({id}) => {

  const removeTravel = () => {
    axios.delete('https://travelbase-backend.onrender.com/delete', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {_id: id}
    })
    console.log('delete');
  }

  return (
    <div>
        <button className='delete' onClick={removeTravel}>Delete</button>
    </div>
  )
}

export default TravelDelete