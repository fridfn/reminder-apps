import React from 'react';
import props from '@/property';
import EachUtils from '@/utils/eachUtils';
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const { title } = props.component.sidebar.button;
  const path = props.component.sidebar.path;
  
  return (
   <>
     <div className='sidebar'>
     <EachUtils
      of={title}
      render={(items, index) => {
      const isActive = active && items == active;
       
       return (
        <nav key={index} onClick={() => navigate(path[index])}>
          <p className={isActive ? 'text active' : 'text'}>{items}</p>
          {isActive ? (
           <div className='is-active-page active'></div>
          ) : ( null )}
        </nav>
       )}}/>
     </div>
   </>
  )
}

export default Sidebar;