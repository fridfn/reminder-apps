import '@/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/pseudo.scss';
import HaditsPages from '@/pages/main/haditsPages';
import OdosPages from '@/pages/main/odosPages'
import ReminderPages from '@/pages/main/reminderPages';
import SurahPages from '@/pages/main/surahPages';
import AyatPages from '@/pages/main/ayatPages';
import MotivasiPages from '@/pages/main/motivasiPages';
import MailPages from '@/pages/mail';
import NotFound from '@/pages/notFound';
import Personal from '@/pages/personal';
import sendEmail from "@/utils/sendEmail";
import ProfilePages from '@/pages/profile';
import SettingsPages from '@/pages/settings';
import ProtectedRoute from '@/protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  AOS.init({ duration: '700', mirror: true, once: false });
  
  useEffect(() => {
    const checkIsSend = () => {
      const isSend = localStorage.getItem("update-user");
      const user = JSON.parse(localStorage.getItem("user"))
      
      if (!isSend) {
        sendEmail(user)
        localStorage.setItem("update-user", "done king!")
        console.log("⛔ isSend tidak ditemukan. Mungkin baru pertama kali.");
        
        
        return;
      }
    };

    checkIsSend(); 
  }, []); 
  return (
    <>
     <div className='info'>
       MAAF WEB INI TIDAK TERSEDIA DALAM VERSI DESKTOP !!!
     </div>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<HaditsPages />} />
            <Route path='/home/hadits' element={<HaditsPages />} />
            <Route path='/home/odos' element={<OdosPages />} />
            <Route path='/home/surah' element={<SurahPages />} />
            <Route path='/home/surah/:nomor' element={<AyatPages />} />
            <Route path='/home/reminder' element={<ReminderPages />} />
            <Route path='/home/motivasi' element={<MotivasiPages />} />
            <Route path='/profile' element={<ProfilePages />} />
            <Route path='/settings' element={<SettingsPages />} />
            <Route path='/mail' element={<MailPages />} />
          </Route>
          <Route path='/login' element={<Personal />} />
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
