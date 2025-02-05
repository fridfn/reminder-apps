import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import property from '@/property'
import generateRandomValue from '@/utils/generateRandomValue'

const Header = ({ size, title, quote, icons, action }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pages } = location.state || {}
  const [image, setImage] = useState('')
  const [animate, setAnimate] = useState(false)
  const [reminder, setReminder] = useState([])
  const [motivation, setMotivation] = useState('')
  
  useEffect(() => {
   console.log({pages}, 'get un jeader')
   const motivation = property.pages.home.data.motivation
   const randomMotivation = generateRandomValue(motivation)
   setMotivation(randomMotivation)
  }, []);
  
  const handleAction = (action) => {
   switch(action) {
    case 'surah':
     navigate('/home/surah', { state: { pages: pages }})
    break;
   default:
   console.log('please set action')
   }
  }
  
  return (
   <div className='header'>
     <div className='header-cards'>
       <p 
        className='md-txt title'
        style={size && {fontSize: size + 'px'}}>
        {title}
       </p>
       {motivation ? (
       <p className='text'>{!quote ? motivation : quote}</p>) : (null)}
     </div>
     <div className='box-notification' onClick={() => handleAction(action)}>
       <ion-icon name={icons || 'options'} class='icons'></ion-icon>
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