import React, { useState, useEffect } from 'react'
import property from '@/property';
import useUser from '@/hooks/useUser';
import { Header, Sidebar, Navbar } from '@/components/layout';
import { Image, Images } from '@/components/shared';
import muslimWoman from '@/assets/muslim_woman_5.webp';
import { SelectedActivity } from '@/components/features/activity';

const HeaderSection = () => {
  return (
    <div className='wrapper'>
     <div className='box'>
      <p onClick={() => handleClick()} className='title'>Hello, Yulita Rohana Syahrani</p>
      <p className='description'>tetap semangat ya jalanin hari hari nya, aku tau kamu pasti bisa!!</p>
     </div>
    </div>
  )
}

const Profile = ({ data }) => {
  return (
   <div className='container' id='profile'>
    <Sidebar />
    <Navbar active='person' />
    <h3>Segera Hadir</h3>
   </div>
  )
}

// <div className='section-reminder' id='profile-pages'>
//      <div className='content'>
//       <HeaderSection />
//       <section className='section-reminder'>
//        <div className='box-description'>
//         <p className='description'>sayangnya tidak semua nilai dari objek yang akan membuat ku semakin besar saat saya ingin di dalam elemen nya</p>
//        </div>
//        <div className="box-description">
//        </div>
//       </section>
//        <Images 
//         pages='profile'
//         getting='images'
//         img='lantern'
//        />
//      </div>
//     </div>

export default Profile;