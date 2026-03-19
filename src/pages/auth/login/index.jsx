import ComponentImages from '@/components/common/componentImages'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagesMotivation, pagesPersonalize, pagesPersonality, pagesFavorite, pagesLogin } from '@/components/common/layoutsPages'
import Loader, { LoaderDots } from '@/components/loader'

const UserOnBoarding = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
  const handlePagesNext = (index) => {
   setCurrentPage(index)
   setIsLoading(true)
  }
  
  useEffect(() => {
    if (isLoading) {
     const randomTimer = Math.floor(Math.random() * (2500 - 2000 + 1)) + 2000;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, randomTimer);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, currentPage]);
  
  const pagesList = [
    { component: Login, background: "background_cloud" },
    { component: Motivation, background: "background_mosque" },
    { component: Favorite, background: "background_mosque" }
  ]

  const CurrentPage = pagesList[currentPage]?.component
  const CurrentBackground = pagesList[currentPage]?.background
  
  return (
   <div className='container-personal'>
    <span>
      <ComponentImages pages='login' getting='images' img='lantern' />
    </span>
    {!isLoading && CurrentPage ? (
      <CurrentPage 
        index={currentPage}
        functions={handlePagesNext}
      />
    ) : (
      <Loader />
    )}
    {(!isLoading && CurrentPage) && (
      <ComponentImages 
         pages='login'
         getting='images'
         img={CurrentBackground}
      />
    )}
   </div>
  )
}

export default UserOnBoarding;