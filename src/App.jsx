import '@/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/pseudo.scss';
import { Hadist, Ayat, Motivation, Odos, Surah, Reminder }  from '@/pages/dashboard';
import { Activity, Entry, Inspiration, Personality, Surahs }  from '@/pages/auth/register/onboarding';
import ProtectedRoute from '@/protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  AOS.init({ duration: '700', mirror: true, once: false });
  
  useEffect(() => {
    const checkIsSend = () => {
      const isSend = localStorage.getItem("update-user");
      const isTOKEN = localStorage.getItem("TOKEN")
      const user = JSON.parse(localStorage.getItem("user"))
      
      if (!isSend && isTOKEN) {
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
