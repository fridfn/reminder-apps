import React from 'react';
import EachUtils from '@/utils/eachUtils';

const MotivasiCards = ({ data, title }) => {
  return (
    <div className='container-motivasi-cards'>
     <div className='box-motivasi-cards'>
     <p className='text' id='title-motivasi'>{title}</p>
     <EachUtils
      of={data}
      render={(items, index) => (
       <p className='text' style={index == 0 ? {fontSize: 22 + 'px', textAlign: 'end'} : {}} key={index}>{items}</p>
      )}/>
     </div>
    </div>
   )
}

export default MotivasiCards;