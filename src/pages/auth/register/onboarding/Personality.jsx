import property from '@/property'
import useUser from '@/hooks/useUser'
import { Header } from '@/components/layout'
import { Input, InputButton } from '@/components/ui/forms'
import { Images } from '@/components/shared'
import { SelectedActivity } from "@/components/features/activity"
import React, { useEffect, useState } from 'react'


const Personality = ({ functions, index }) => {
  const userData = useUser();
  const { nama, email, kelas } = userData?.dataLogin
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueTrigger, setValueTrigger] = useState('')
  const limitSelectedItems = 3;
  const listOfPersonality = property.datas.personality
  const disableButton = selectedItems.length < limitSelectedItems;
  
  useEffect(() => {
   if (limitSelectedItems) {
    setTimeout(() => {
     setLoading(false);
    }, 1000)
   }
  }, [])
  
  return (
   <section data-aos='fade-left'>
    <Images pages='login' getting='images' img='lantern' />
    <Header 
     quote='Bagaimana dengan personality kamu?'
     title={`${nama?.split(' ')[0]}, Lets personalize your experience`}
    />
    <div className='box-content'>
     <SelectedActivity
      datas={selectedItems}
      selectedItems={selectedItems}
      limitNumber={limitSelectedItems}
      setSelectedItems={setSelectedItems}
      info='Manakah kepribadian di bawah ini yang relate menggambarkan kepribadian diri kamu.'
     />
     {!loading ? (<ItemsActivity 
      datas={listOfPersonality} 
      selectedItems={selectedItems}
      limitNumber={limitSelectedItems}
      setSelectedItems={setSelectedItems}
     />) : (
       <div className='container-activity'>
         <LoaderDots />
       </div>
      )}
     <Input 
       index={index}
       minLength={50}
       functions={functions} 
       trigger={valueTrigger}
       attribute={`${selectedItems.length}/${limitSelectedItems} Terpilih`}
       propData={{ SET: 'personality', DATAS: selectedItems }}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 4`}>
      <InputButton 
        trigger='back'
        form='custom-input'
        setTrigger={setValueTrigger}
        title="<ion-icon name='arrow-back'></ion-icon>"
      />
      <InputButton 
        form='custom-input' 
        title='Selanjutnya' 
        disable={disableButton}
        setTrigger={setValueTrigger}
      />
     </div>
    </div>
   </section>
  )
}

export default Personality;