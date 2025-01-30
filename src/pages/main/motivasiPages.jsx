import React from 'react';
import getUser from '@/hooks/getUser';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import BubbleMessage from '@/components/common/cards';
import MotivasiCards from '@/components/common/motivasi';

const MotivasiPages = () => {
  const userData = getUser();
  const title = userData.nama?.split(' ')[0] + ', Tetaplah optimis karena...';
  
  const datas = [
  "إن مأَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْبَثًا,  ", "Sesungguhnya Allah, Dialah Maha Pemberi rezeki yang mempunyai kekuatan lagi sangat kokoh.",
  "Q.S Adz-Dzariyat: 58", 
  "Rezeki berasal dari Allah, Sang Pemberi Rezeki. Jangan menyerah, karena Dia akan mencukupkan rezeki bagi siapa yang berusaha dan tawakkal kepada-Nya."]
  
  return (
   <div className='container' id='motivasi-pages'>
    <Sidebar active='motivasi' />
    <Navbar />
    <Header title={title} quote='Tetap semangat ya, aku tahu kamu pasti bisa melewatinya. Semangatt'/>
    <div className='section-reminder' id='wrapper-motivasi'>
     <BubbleMessage />
     <span>
      <p className='bg-txt'>Tapi...</p>
      <p className='md-txt'>Yulita, harus ingat ayat ini</p>
     </span>
     <MotivasiCards data={datas} title={"Allah SWT Berfirman :"} />
    </div>
   </div>
  )
}

export default MotivasiPages;