import React from 'react';
import Sidebar from '@/components/sidebar';
import { ReminderSec, ReminderThird } from '@/components/common/reminder';
import { HeaderSec } from '@/components/header';
import Navbar from '@/components/navbar';

const ReminderPages = () => {
  return (
   <div className='container'>
    <Sidebar active='reminder' />
    <Navbar />
    <section className='section-reminder'>
     <HeaderSec title='Reminder Of The Day' />
     <ReminderSec text={true} data={true}/>
     <div className='wrapper'>
      <ReminderThird />
     </div>
    </section>
   </div>
  )
}

export default ReminderPages;