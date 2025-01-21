import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

const SurahPages = () => {
  return (
   <div className='container'>
    <Sidebar active='surah' />
    <Navbar />
   </div>
  )
}

export default SurahPages;