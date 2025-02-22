import AOS from 'aos';
import React, { useEffect, useRef } from 'react';

const ObserveElement = ({ element, classes, threshold = 0.7 }) => {
  const itemRef = useRef([]);
  
  const observeItems = () => {
   const observer = new IntersectionObserver(
    (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add(classes);
       } else {
         entry.target.classList.remove(classes);
         
         // opsional
         const unactivePreviewHadits = entry?.target?.querySelector('.full-hadits')
         if (unactivePreviewHadits !== null) {
           unactivePreviewHadits.classList.remove('active')
         }
       }
     });
    },
    { threshold, });
   itemRef.current.forEach((item) => {
     if (item) observer.observe(item);
   });
   return () => {
     itemRef.current.forEach((item) => {
       if (item) observer.unobserve(item);
     });
   };
  }
  return { itemRef, observeItems }
}

export const useAOS = ({ duration, delay = 0 }) => {
  const scrollableDivRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000,
     mirror: true
    });
    
    const handleScroll = () => {
      AOS.refresh();
    };
    
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
     scrollableDiv.addEventListener('scroll', handleScroll);
    }
    
    return () => {
     if (scrollableDiv) {
       scrollableDiv.removeEventListener('scroll', handleScroll);
     }
    };
  }, [duration, delay]);
  return scrollableDivRef;
}

export default ObserveElement;