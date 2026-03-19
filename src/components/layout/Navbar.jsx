import React from 'react';
import property from '@/property';
import EachUtils from '@/utils/eachUtils';
import { useNavigate } from 'react-router-dom'

const Navbar = ({ active }) => {
  const navigate = useNavigate()
  const path = property.component.navbar.path;
  const { title, icons } = property.component.navbar.button;
  
  return (
    <div className='navbar'>
     <div className='wrapper'>
      <EachUtils
       of={icons}
       render={(items, index) => {
       const isActive = active && items == active
       
       return (
        <div 
         key={index}
         className="items"
         onClick={() => navigate(path[index])}>
         <ion-icon class={`icons bg-txt ${isActive ? 'active': ''}`} name={items}></ion-icon>
        </div>
       )}}/>
     </div>
    </div>
  )
}

export default Navbar;