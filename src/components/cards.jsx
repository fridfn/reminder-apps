import React, { useEffect, useRef } from 'react';
import property from '@/property';
import generateRandomValue from '@/utils/generateRandomValue';

const Cards = ({ data }) => {
  const itemRef = useRef([]);
  const handleMenu = (e) => {
   e.preventDefault();
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
         <p className='hadits-surah'>QS Al Isra Ayat 32</p>
         <p className='arab'>وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةً وَسَآءَ سَبِيلًا</p>
         <p className='tny-txt'>eu velit nostrud esse adipisicing cupidatat labore ut eiusmod fugiat nisi veniam officia tempor minim id ex qui labore excepteur sint occaecat pariatur adipisicing officia dolor velit irure nulla elit</p>
       </div>
     </div>
   )
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale');
          } else {
            entry.target.classList.remove('scale');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    itemRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  const images = property.home.data.image;
  
  return (
   <>
    {data.map((item, index) => {
     const randomImage = generateRandomValue(images);
     
     return (
      <div key={index} className='container-cards' ref={(el) => (itemRef.current[index] = el)}>
       <div className='cards'>
         <div className='box-cards'>
          <div className='box-image-cards'>
            <img src={randomImage} className='image-cards' onContextMenu={handleMenu} />
          </div>
          <Description />
         </div>
        <Reminder />
       </div>
      </div>
     )})}
   </>
  )
}

export default Cards;