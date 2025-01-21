import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

const OdosPages = () => {
  return (
   <div className='container'>
    <Sidebar active='odos' />
    <Navbar />
   </div>
  )
}

export default OdosPages;