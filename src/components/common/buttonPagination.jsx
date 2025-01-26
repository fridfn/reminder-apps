import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import generateRandomValue from '@/utils/generateRandomValue';

const ButtonPagination = ({ endpoint, onFetch, name }) => {
  const [content, setContent] = useState([]);
  const [endpoints, setEndpoint] = useState({});
  
  useEffect(() => {
   setEndpoint(endpoint);
  }, [])
  
  const handleNext = (endpoints) => {
   const handleFetch = async (endpoints) => {
    const result = await fetchData(endpoints);
    const getOneResult = generateRandomValue( result.hadist);
     const images = property.pages.home.data.image
     const getOneImage = generateRandomValue(images);
    
    setContent(result);
    onFetch(getOneResult, getOneImage);
   }
   handleFetch(endpoints);
  }
  
  return (
   <div className='container-button'>
    <div className='box-button'>
     <div className='items'>
      <button className='button' onClick={() => {handleNext(endpoints)}}>{name}</button>
      <ion-icon class="small" name='arrow-forward-circle'></ion-icon>
     </div>
    </div>
   </div>
  )
}

export default ButtonPagination;