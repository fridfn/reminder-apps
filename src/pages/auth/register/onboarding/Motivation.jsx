import property from '@/property'
import useUser from '@/hooks/useUser'
import Header from '@/components/layout'
import { Input, InputButton } from '@/components/ui/forms'
import Images from '@/components/shared'
import { SelectedActivity } from "@/components/features/activity"
import React, { useEffect, useState } from 'react'


const Inspiration = ({ functions, index }) => {
  const userData = useUser();
  const { nama, email, kelas } = userData?.dataLogin
  const [valueTrigger, setValueTrigger] = useState('')
  
  return (
   <section data-aos='fade-left'>
    <Images pages='login' getting='images' img='lantern' />
    <Header 
     quote='Apa janji dan motivasi kamu untuk diri kamu sendiri agar menjadi pribadi yang lebih baik?'
     title={`Welcome to Reminder App, ${nama?.split(' ')[0]}`}
    />
    <div className='box-content'>
     <Input 
      index={index} 
      minLength={50}
      functions={functions}
      trigger={valueTrigger}
      propData={{ SET: 'janji', DATAS: 'tidak ada' }}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 3`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       disable={false}
       form='custom-input' 
       title='Selanjutnya' 
       setTrigger={setValueTrigger} />
     </div>
    </div>
   </section>
  )
}

export default Inspiration;