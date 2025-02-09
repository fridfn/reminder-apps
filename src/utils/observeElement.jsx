import React, { useEffect, useRef } from 'react';

const ObserveElement = ({ element, classes, threshold = 0.7 }) => {
  const itemRef = useRef([]);
  console.log({threshold})
  useEffect(() => {
   const observer = new IntersectionObserver(
    (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add(classes);
       } else {
         entry.target.classList.remove(classes);
         const unactivePreviewHadits = entry.target.querySelector(element)
         unactivePreviewHadits.classList.remove(classes)
       }
     });
   },
   { threshold, }
   );
   itemRef.current.forEach((item) => {
     if (item) observer.observe(item);
   });

   return () => {
     itemRef.current.forEach((item) => {
       if (item) observer.unobserve(item);
     });
   };
 }, []);
 
 return { itemRef }
}

export default ObserveElement;