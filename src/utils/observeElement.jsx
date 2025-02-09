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

export default ObserveElement;