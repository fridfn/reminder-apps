import React from 'react';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';

const Navbar = () => {
  const button = property.component.navbar.button.icons;
  
  return (
    <div className='navbar'>
     <div className='wrapper'>
      <EachUtils
       of={button}
       render={(items, index) => (
        <div className='items' key={index}>
         <ion-icon class="icons bg-txt" name={items}></ion-icon>
        </div>
       )}/>
     </div>
    </div>
  )
}

export default Navbar;