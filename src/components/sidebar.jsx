import React from 'react';
import props from '@/property';

const Sidebar = () => {
  const { title } = props.home.navbar.button;
  
  return (
   <>
     <div className='sidebar'>
      {title.map((item, index) => (
       <nav key={index}>
         <p className='sm-txt'>{item}</p>
       </nav>
      ))}
     </div>
   </>
  )
}

export default Sidebar;