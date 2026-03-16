import getUser from '@/hooks/getUser'
import Header from '@/components/header'
import Input from '@/components/common/input'
import ComponentImages from '@/components/common/componentImages'
import { SelectedActivity} from "@/components/ui/selectedActivity"


export const pagesPersonality = ({ functions, index }) => {
  const userData = getUser();
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
    <ComponentImages pages='login' getting='images' img='lantern' />
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
