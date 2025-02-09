import React, { useState, useEffect } from 'react';

const useAudioPlayer = () => {
  const [audioInstance, setAudioInstance] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const playAudio = (audio, index) => {
   try {
    const isAudio = typeof(audio) === 'object' > 0 ? audio[index] : audio;
    
    if (audioInstance) {
     audioInstance.pause();
     audioInstance.currentTime = 0;
    }
    
    const player = new Audio(isAudio);
    setAudioInstance(player);
    setCurrentIndex(index)
    player.play();
    
    player.onended = () => {
     if (index < audio.length - 1 && typeof(audio) === 'object') {
      playAudio(audio, index + 1)
     } else {
      console.log('selesai')
     }
    }
   } catch (error) {
    console.error('Audio creation failed:', error);
   }
  }
  
  const stopAudio = () => {
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }
  };
  
  return {
    playAudio,
    stopAudio,
    currentIndex,
  };
}
 
export default useAudioPlayer;