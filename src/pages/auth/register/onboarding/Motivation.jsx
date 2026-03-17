import getUser from '@/hooks/getUser'
import Header from '@/components/header'
import Input from '@/components/common/input'
import ComponentImages from '@/components/common/componentImages'
import InputButton from '@/components/common/buttonInput'
import React, { useEffect, useState } from 'react'

const Inspiration = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData?.dataLogin
  const [valueTrigger, setValueTrigger] = useState('')
  
  return (
   <section data-aos='fade-left'>
    <ComponentImages pages='login' getting='images' img='lantern' />
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