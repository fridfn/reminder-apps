import React, { useState, useEffect } from 'react'
import property from '@/property';
import { Sidebar, Navbar } from '@/components/layout';

const ProfilePages = ({ data }) => {
  return (
   <div className='container'>
    <Sidebar />
    <Navbar active='settings' />
    <h3>Segera Hadir</h3>
   </div>
  )
}

export default ProfilePages;