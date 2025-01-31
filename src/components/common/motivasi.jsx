import React from 'react';
import EachUtils from '@/utils/eachUtils';
import Image from '@/components/common/image';
import muslimWoman5 from '@/assets/muslim_woman_1.webp';

const setDataInfo = ({ index, classes }) => { return classes[index] };

const MotivasiCards = ({ data, title, attr, classes }) => {
  const objectToArray = Object.entries(data);
  
  return (
   <div className='container-motivasi-cards'>
    <div className='box-motivasi-cards'>
     <p className='text' id='title-motivasi'>{title}</p>
    <EachUtils
     of={data}
     render={(items, index) => (
      <p key={index}
       className={setDataInfo({ index: index, classes: classes })}
       data-info={setDataInfo({ index: index, classes: attr })}>
       {items}
      </p>
     )}/>
    </div>
   </div>
  )
}

export default MotivasiCards;