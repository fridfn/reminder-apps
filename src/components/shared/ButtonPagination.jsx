import React, { useEffect, useState } from 'react';
import property from '@/property';
import { Link } from 'react-router-dom';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import generateRandomValue from '@/utils/generateRandomValue';


const ButtonPagination = ({ endpoint, func, props, values }) => {
  const { title, icons } = props;
  const [content, setContent] = useState([]);
  const [endpoints, setEndpoint] = useState({});
  
  const fetchContent = async () => {
    const result = await fetchData(endpoints);
    
    const randomResult = generateRandomValue( result?.[values]);
    const images = property?.pages?.home?.data?.image
    const getOneImage = generateRandomValue(images);
    
    setContent(result);
    func(getOneResult, getOneImage);
  }
  
  const handleNext = () => fetchContent();
  
  const handleClick = (index) => {
    if (values === 'surah') {
      func(index === 0 ? 'next' : 'prev')
      return;
    } else if (values === 'alquran') {
      func(index === 0 ? 'al_quran' : 'surah_pendek');
      return;
    }
    
    handleNext();
  }
  
  useEffect(() => { setEndpoint(endpoint)}, [endpoint])
  
  return (
   <div className='container-button'>
   <EachUtils
     of={title}
     render={(items, index) => (
      <div className='box-button' key={index}>
       <div 
         className='items'
         onClick={() => handleClick(index)}
       >
       <button className='button'>
       {items}
       </button>
        {icons && (
          <ion-icon 
            class="small" 
            name={icons[index]}>
          </ion-icon>
        )}
       </div>
      </div>
    )}/>
   </div>
  )
}

export default ButtonPagination;