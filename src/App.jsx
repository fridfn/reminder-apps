import '@/App.scss';
import '@/styles/pseudo.scss';
import Home from '@/pages/home';
import Loading from '@/pages/loading';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
