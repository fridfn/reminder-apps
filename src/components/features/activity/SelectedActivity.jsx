import EachUtils from '@/utils/eachUtils'
import { handleClick } from "@/utils/handleClick"

export const SelectedActivity = ({ datas, selectedItems, setSelectedItems, limitNumber, info }) => {
  return (
   <div className='container-selected-activity' data-info={info}>
    <EachUtils
     of={datas}
     render={(selected, index) => {
     return (
      <div key={index} className='box-activity isSelected'>
       <p
        className='name'
        info={selected}
        onClick={(items) => handleClick({
         items: items,
         limitNumber: limitNumber,
         selectedItems: selectedItems,
         setSelectedItems: setSelectedItems,
        })}
       dangerouslySetInnerHTML={{ __html: selected.replace(/\d+/g, '').trim()}}/>
      <ion-icon name='close-circle'></ion-icon>
     </div>
    )}}/>
   </div>
  )
}