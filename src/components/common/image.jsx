import React from 'react';

const Image = ({ image }) => {
  const disable =(e) => { e.preventDefault() }
  return (
   <img src={image} onContextMenu={disable} className='component-images' alt='image' />
  )
}

export default Image;