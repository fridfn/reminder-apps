import EachUtils from '@/utils/eachUtils';
import { useNavigate } from 'react-router-dom'
import { TextSpeech, convertToArabicNumbers, setDataInfo } from '@/components/features/quran/service';

const SurahItems = ({ surah, attr, classes, pages, asma }) => {
  const navigate = useNavigate();
  
  const handleOpenSurah = ( surah ) => {
    navigate(`/home/surah/${surah.number - 1}`, { state: { isSurah: {
      nama: surah.name,
      arti: surah.translation,
      numberOfAyahs: surah.numberOfAyahs,
    },
      pages: pages 
    }});
  }
  
  return (
  <EachUtils of={surah}
    render={(surah, index) => (
     <div
      key={index}
      data-aos='zoom-in'
      className='box-surah'
      data-aos-delay={`${(index + 1) * 300}`}>
      <div className="ribbon ribbon-surah">&nbsp;&nbsp;Juz {surah?.ayahs[index]?.meta?.juz}&nbsp;&nbsp;</div>
      <div 
       className='wrapper-surah'
       onClick={() => handleOpenSurah(surah)}>
       <span className='name-surah'>
        <p 
         className={setDataInfo({ index: 3, classes: classes })}>
          {surah.name}
        </p>
        <p 
         className={setDataInfo({ index: 2, classes: classes })}>
          {surah.revelation} - {surah.numberOfAyahs} Ayat
        </p>
        </span>
        <p
         id='number-surah'
         className={setDataInfo({ index: 1, classes: classes })}>
         {convertToArabicNumbers(surah.number)}
        </p>
       </div>
       <p 
        onClick={() => TextSpeech(`surat ${surah.name}`)}
        className={setDataInfo({ index: 0, classes: classes })}>
         {asma[index].asma}
       </p>
     </div>
   )}/>
  )
}


export default SurahItems;