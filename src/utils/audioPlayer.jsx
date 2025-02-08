import React, { useState } from 'react';

const useAudioPlayer = () => {
  const [audioUrl, setAudioUrl] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [audioInstance, setAudioInstance] = useState(null)
  
  const playAudio = (audio, index) => {
  try {
    const isAudio = audio[index] || audio;
    
    if (audioInstance) {
     audioInstance.pause();
     audioInstance.currentTime = 0;
    }
    
    const player = new Audio(isAudio);
    setAudioInstance(player);
    player.play();
    
    player.onended = () => {
     if (index < audio.length - 1) {
      playAudio(audio, index + 1)
     } else {
      alert('sudah habus')
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
  };
}
 
export default useAudioPlayer;