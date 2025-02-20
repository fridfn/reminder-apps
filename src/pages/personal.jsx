import ComponentImages from '@/components/common/componentImages'
import Reac, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { pagesMotivation, pagesPersonalize, pagesFavorite, pagesLogin } from '@/components/common/layoutsPages'
import Loader, { LoaderDots } from '@/components/loader'

const Personal = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
  const handlePagesNext = (index) => {
   setCurrentPage(index)
   setIsLoading(true)
  }
  
  useEffect(() => {
    if (isLoading) {
     const randomTimer = Math.floor(Math.random() * (4500 - 2000 + 1)) + 2000;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, randomTimer);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, currentPage]);
  
  const pagesList = {
   0: {
    pages: pagesLogin,
    handle: handlePagesNext
   },
   1: {
    pages: pagesMotivation,
    handle: handlePagesNext
   },
   2: {
    pages: pagesPersonalize,
    handle: handlePagesNext
   },
   3: { 
    pages: pagesFavorite,
    handle: handlePagesNext
   }
  }
  
  const CurrentPagesComponent = pagesList[currentPage]?.pages;
  const CurrentFuncComponent = pagesList[currentPage]?.handle;
  
  return (
   <div className='container-personal'>
    {!isLoading && CurrentPagesComponent ? ( <CurrentPagesComponent functions={CurrentFuncComponent} index={currentPage} />) : (<Loader />)}
    {!isLoading && CurrentPagesComponent ? (
    <ComponentImages pages='login' getting='images' img='background_mosque' />) : (null)}
   </div>
  )
}

export default Personal;