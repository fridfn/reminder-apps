import React from 'react';

const Image = ({ image, animate }) => {
  const disable =(e) => { e.preventDefault() }
  return (
   <img src={image} onContextMenu={disable} className={
    `component-images ${animate ? 'active' : ''}`
   } alt='image' />
  )
}

export default Image;