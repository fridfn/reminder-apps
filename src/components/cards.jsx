import React from 'react';
import muslimWoman1 from '@/assets/muslim_woman_1.webp';

const Cards = () => {
  const handleMenu = (e) => {
   e.preventDefault();
  }
  
  const HeaderCards = ({ title }) => {
   return (
     <div className='header-cards'>
       <p className='md-txt title'>Hello, {title}!</p>
       <p className='tny-txt'>Jangan malas malasan yah</p>
     </div>
   )
  }
  
  const Description = ({ desc }) => {
   return (
     <div className='description-cards'>
       <div className='description'>
          <p className='tny-txt'>do proident qui velit do minim deserunt cillum non et pariatur et dolore ex proident officia velit tempor sunt ullamco excepteur commodo
          </p>
       </div>
       <div className='box-icons'>
         <ion-icon name='heart' class='icons'></ion-icon>
       </div>
     </div>
   )
  }
  
  const Reminder = ({ hadits }) => {
   return (
     <div className='reminder'>
       <div className='wrapper-reminder'>
         <p className='tny-txt'>eu velit nostrud esse adipisicing cupidatat labore ut eiusmod fugiat nisi veniam officia tempor minim id ex qui labore excepteur sint occaecat pariatur adipisicing officia dolor velit irure nulla elit</p>
       </div>
     </div>
   )
  }
  
  return (
    <div className='cards'>
     <HeaderCards title='farid' />
      <div className='box-cards'>
        <div className='box-image-cards'>
          <img src={muslimWoman1} className='image-cards' onContextMenu={handleMenu} />
        </div>
        <Description />
      </div>
      <Reminder />
    </div>
  )
}

export default Cards;