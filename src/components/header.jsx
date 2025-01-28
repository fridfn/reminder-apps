import React, { useEffect, useState } from 'react'
import property from '@/property'
import generateRandomValue from '@/utils/generateRandomValue'

const Header = ({ title, quote }) => {
  const [image, setImage] = useState('')
  const [animate, setAnimate] = useState(false)
  const [reminder, setReminder] = useState([])
  const [motivation, setMotivation] = useState('')
  
  useEffect(() => {
   const motivation = property.pages.home.data.motivation
   const randomMotivation = generateRandomValue(motivation)
   setMotivation(randomMotivation)
  }, [])
  
  return (
   <div className='header'>
     <div className='header-cards'>
       <p className='md-txt title'>{title}!</p>
       {motivation ? (
       <p className='text'>{!quote ? motivation : quote}</p>) : (null)}
     </div>
     <div className='box-notification'>
       <ion-icon name='options' class='icons'></ion-icon>
     </div>
   </div>
  )
}

export const HeaderSec = ({ title }) => {
  return (
   <div className='header-sec'>
     <p className='text'>{title}</p>
   </div>
  )
}

export default Header