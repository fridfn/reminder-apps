import React, { useState, useEffect } from 'react'
import property from '@/property';
import useUser from '@/hooks/useUser';
import { Sidebar, Navbar } from '@/components/layout';

const Message = ({ data }) => {
  return (
   <div className='container'>
    <Sidebar />
    <Navbar active='mail' />
    <h3>Segera Hadir</h3>
   </div>
  )
}

export default Message;