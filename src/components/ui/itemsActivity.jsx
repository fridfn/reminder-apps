import EachUtils from '@/utils/eachUtils'


export const ItemsActivity = ({ datas, selectedItems, setSelectedItems, limitNumber }) => {
  return (
   <div className='container-activity' data-aos='zoom-in'>
    <EachUtils 
     of={datas}
     render={(nama = 'user', index) => {
      const removeHtmlTags = (text) => { return text.replace(/<\/?[^>]+(>|$)/g, "").trimStart() }
      const cleanNama = removeHtmlTags(nama)
      const isActive = selectedItems.includes(cleanNama)
      
      return (
       <div 
        key={index}
        className={`box-activity ${isActive ? 'active' : ''}`}>
         <p className='name'
          info={cleanNama}
          onClick={(items) => handleClick({
           items: items,
           limitNumber: limitNumber,
           selectedItems: selectedItems,
           setSelectedItems: setSelectedItems,
          })}
          dangerouslySetInnerHTML={{ __html: cleanNama }}/>
       </div>
      )}}/>
    </div>
   )
}
