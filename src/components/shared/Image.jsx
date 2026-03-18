import React from 'react';

const Image = ({ image, animate }) => {
  const disable =(e) => { e.preventDefault() }
  return (
   <img 
     alt='image'
     src={image} 
     onContextMenu={disable} className={`component-images ${animate ? 'active' : ''}`}
     />
  )
}

export default Image;