import React from 'react';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';

const ComponentImages = ({ pages, getting, img }) => {
  const values = property[pages][getting][img]
  const { image, position, space } = property[pages][getting][img];
  
  const disableContext = (e) => { e.preventDefault()}
  
  const positions = Object.entries(values).map((key, index) => { return key[0] })[3];
  const pos = values[positions];
  const isPosition = position === 'right';
  
  return (
   <EachUtils
     of={space}
     render={(value, index) => (
      <img
        src={image} 
        key={index} 
        className='component-images'
        onContextMenu={disableContext}
        style={{
        ...(isPosition ? { right: value + 'px' } : { left: value + 'px' }),
        ...(positions === 'top' ? { top: pos[index] + 'px' } : { bottom: pos[index] + 'px' })
       }}
      />
     )}
    />
  )
}

export default ComponentImages;