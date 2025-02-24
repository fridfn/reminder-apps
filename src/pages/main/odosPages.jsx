import React from 'react';
import getUser from '@/hooks/getUser';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

const OdosPages = () => {
  const { userData } = getUser()
  const { nama } = userData
  
  return (
   <div className='container'>
    <Sidebar active='odos' />
    <Navbar />
    <section className='section-reminder'>
     <Header title={`Hello, ${nama}`} />
     <div className='section-cards'>
      <div className='wrapper' id='wrapper-surah'>
       <img style={{zIndex: '20', position: 'absolute', top: '20px'}} src="https://render.gitanimals.org/lines/fridfn?pet-id=671615300271345171" width="600" height="150"/>
       {userData?.nama ? (
         <p>nambahin header v2</p>
       ): (null)}
      </div>
     </div>
    </section>
   </div>
  )
}

export default OdosPages;