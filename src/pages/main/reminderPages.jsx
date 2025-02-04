import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/sidebar'
import { ReminderSec, ReminderThird } from '@/components/common/reminder'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import fetchData from '@/utils/fetchData'
import generateRandomValue from '@/utils/generateRandomValue'
import ButtonPagination from '@/components/common/buttonPagination'
import muslimWoman5 from '@/assets/muslim_woman_5.webp'
import property from '@/property'
import getUser from '@/hooks/getUser'

const ReminderPages = () => {
  const userData = getUser()
  const [image, setImage] = useState('')
  const [animate, setAnimate] = useState(false)
  const [reminder, setReminder] = useState([])
  const { inti, artinya, nomor_sumber } = reminder
  const button_reminder = property.pages.reminder.button;
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData('/hadits.json')
    const getOneHadist = generateRandomValue(data.hadist)
    setReminder(getOneHadist)
   }
   handlerFetchData()
  }, [])
  
  
  const handleGenerateReminder = (data, image) => {
   const element = document.getElementById('tops-reminder');
   const element2 = document.querySelector('.section-reminder');
   [element, element2].forEach((items) => {items.scrollIntoView({behavior: 'auto'})})
   
   setImage(image)
   setAnimate(true)
   setReminder(data)
  }
  
  useEffect(() => {
   if (animate) {
   const interval = setInterval(() => {
    setAnimate(prevState => !prevState)
   }, 200)
   
   return () => clearInterval(interval)
   }
  },[animate])
 
  return (
   <div className='container' id='motivasi-pages'>
    <Sidebar active='reminder' />
    <Navbar />
    {userData.nama ? (
     reminder ? (
     <section className='section-reminder' id='wrapper-motivasi'>
      <Header title={`Reminder Of The Day, ${userData.nama.split(' ')[0]}`} quote='Selalu ingat dan amalkan hadits di bawah ini dalam keseharian kamu ya!' />
      <div className='wrapper' id='wrapper-content-reminder'>
       <div id='tops-reminder'></div>
       <ReminderSec inti={inti} image={image || muslimWoman5} animate={animate} />
       <ReminderThird data={reminder} value={artinya} attr='Artinya :' />
       <ReminderThird data={reminder} attr={`Pelajaran dari ${!nomor_sumber ? 'ayat' : 'hadits'} :`} />
      </div>
     </section>) : (null)
    ) : (null)}
       <div className='section-reminder' id='wrapper-button-pagination'>
       <ButtonPagination 
        endpoint='/hadits.json'
        func={handleGenerateReminder} 
        props={button_reminder} 
        values='hadist'
       />
      </div>
   </div>
  )
}

export default ReminderPages