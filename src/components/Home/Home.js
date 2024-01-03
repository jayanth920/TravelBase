import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({travels}) => {
  const [travelList, setTravelList] = useState('');

  const getList = useCallback(() => {
    let travelMap = travels.map((travels, index) => {
      return (
        <div className='travel-list' key={index}>
          <Link to={'/travels/' + travels._id}>
            <div className='name'>{travels.name}</div>
          </Link>
        </div>
      );
    });
    setTravelList(travelMap);
  }, [travels]);

  useEffect(() => {
    getList();
  }, [travels, getList]);

  return (
    <div className='home'>
      <div className='travel-list-container'>{travelList}</div>
    </div>
  );
};

export default Home;
