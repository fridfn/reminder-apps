import { setDataInfo } from '@/utils/setDataInfo'


export const MotivationCards = ({ data, title, attr, classes }) => {
  const objectToArray = Object.entries(data);
  
  return (
   <div className='container-motivasi-cards'>
    <div className='box-motivasi-cards'>
     <p className='text' id='title-motivasi'>{title}</p>
    <EachUtils
     of={data}
     render={(items, index) => (
      <p key={index}
       className={setDataInfo({ index: index, classes: classes })}
       data-info={setDataInfo({ index: index, classes: attr })}>
       {items}
      </p>
     )}/>
    </div>
   </div>
  )
}