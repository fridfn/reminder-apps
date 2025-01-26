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
  const { arab, artinya, inti, latin, sumber, nomor_sumber } = reminder
  const { nama } = userData
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData('/hadits.json')
    const getOneHadist = generateRandomValue(data.hadist)
    setReminder(getOneHadist)
   }
   handlerFetchData()
  }, [])
  
  
  const handleGenerateReminder = (data, image) => {
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
   <div className='container'>
    <Sidebar active='reminder' />
    <Navbar />
    {userData.nama ? (
     reminder ? (
     <section className='section-reminder'>
      <Header title={`Reminder Of The Day, ${nama.split(' ')[0]}`} quote='Selalu ingat hadits di bawah ini ya!' />
      <ReminderSec inti={inti} image={image || muslimWoman5} animate={animate} />
      <div className='wrapper'>
       <ReminderThird data={reminder} />
       <ButtonPagination endpoint='/hadits.json' onFetch={handleGenerateReminder} name='Next' />
      </div>
     </section>) : (null)
    ) : (null)}
   </div>
  )
}

export default ReminderPages