import EachUtils from '@/utils/eachUtils';
import { setDataInfo } from '@/utils/setDataInfo'
import { convertToArabicNumbers } from "@/utils/convertToArabicNumbers"


export const ShortSurah = ({ surah, attr, classes }) => {
  return (
   <EachUtils
    of={surah}
    render={(surah, index) => (
     <div
      key={index}
      data-aos='zoom-in'
      className='box-surah'
      id='wrapper-surah-pendek'>
      <div className='wrapper-surah'>
       <p 
        className={setDataInfo({ index: 3, classes: classes })}>
        {surah.doa}
       </p>
       <p
        id='number-surah'
        className={setDataInfo({ index: 1, classes: classes })}>
        {convertToArabicNumbers(surah.id)}
       </p>
      </div>
      <p
       className={setDataInfo({ index: 0, classes: classes })}>
       {surah.ayat}
      </p>
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}>
        {surah.latin}
       </p>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {surah.artinya}
       </p>
      </div>
     </div>
   )}/>
  )
}