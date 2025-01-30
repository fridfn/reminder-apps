import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import generateRandomValue from '@/utils/generateRandomValue';

const ButtonPagination = ({ endpoint, func, props }) => {
  const { title, icons } = props;
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
    func(getOneResult, getOneImage);
   }
   handleFetch(endpoints);
  }
  
  return (
   <div className='container-button'>
   <EachUtils
    of={title}
    render={(items, index) => (
     <div className='box-button' key={index}>
      <div className='items' onClick={() => {handleNext(endpoints)}}>
       <button className='button'>{items}</button>
       <ion-icon class="small" name={icons[index]}></ion-icon>
      </div>
     </div>
    )}/>
   </div>
  )
}

export default ButtonPagination;