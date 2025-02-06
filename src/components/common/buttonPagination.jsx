import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import generateRandomValue from '@/utils/generateRandomValue';

const ButtonPagination = ({ endpoint, func, props, values }) => {
  const { title, icons } = props;
  const [content, setContent] = useState([]);
  const [endpoints, setEndpoint] = useState({});
  
  useEffect(() => {
   setEndpoint(endpoint);
  }, [])
  
  const handleNext = (endpoints, values) => {
   const handleFetch = async (endpoints) => {
    const result = await fetchData(endpoints);
    const getOneResult = generateRandomValue( result[values]);
     const images = property?.pages?.home?.data?.image
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
      <div className='items' onClick={() => {
        if (values === 'surah') {
         func(index === 0 ? 'next' : 'prev')
        } else {
         handleNext(endpoints, values)
        }
       }}>
       <button className='button'>{items}</button>
       {icons ? (
       <ion-icon class="small" name={icons[index]}></ion-icon>) : (null)}
      </div>
     </div>
    )}/>
   </div>
  )
}

export default ButtonPagination;