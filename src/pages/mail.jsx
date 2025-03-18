import React, { useState, useEffect } from 'react'
import property from '@/property';
import getUser from '@/hooks/getUser';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

const ProfilePages = ({ data }) => {
  return (
   <div className='container'>
    <Sidebar />
    <Navbar active='mail' />
    <h3>Segera Hadir</h3>
   </div>
  )
}

export default ProfilePages;