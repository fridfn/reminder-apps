import ComponentImages from '@/components/common/componentImages'
import Reac, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { pagesMotivation, pagesPersonalize, pagesPersonality, pagesFavorite, pagesLogin } from '@/components/common/layoutsPages'
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
    handle: handlePagesNext,
    background: 'background_cloud'
   },
   1: {
    pages: pagesMotivation,
    handle: handlePagesNext,
    background: 'background_mosque'
   },
   2: {
    pages: pagesPersonalize,
    handle: handlePagesNext,
    background: 'background_mosque'
   },
   3: {
    pages: pagesPersonality,
    handle: handlePagesNext,
    background: 'background_mosque'
   },
   4: { 
    pages: pagesFavorite,
    handle: handlePagesNext,
    background: 'background_mosque'
   }
  }
  
  const CurrentPagesComponent = pagesList[currentPage]?.pages;
  const CurrentFuncComponent = pagesList[currentPage]?.handle;
  const CurrentBackgroundComponent = pagesList[currentPage]?.background;
  
  return (
   <div className='container-personal'>
    <span>
      <ComponentImages pages='login' getting='images' img='lantern' />
    </span>
    {!isLoading && CurrentPagesComponent ? (
      <CurrentPagesComponent 
      index={currentPage}
      functions={CurrentFuncComponent}
    />) : (<Loader />)}
    {!isLoading && CurrentPagesComponent ? (
      <ComponentImages 
      pages='login'
      getting='images'
      img={CurrentBackgroundComponent}
    />) : (null)}
   </div>
  )
}

export default Personal;