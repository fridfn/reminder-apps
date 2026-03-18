import { createContext, useContext, useRef, useState, useEffect } from "react";
import { useSurahAudio } from "@/components/features/quran/hooks";

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const playlistRef = useRef([]);
  const indexRef = useRef(0);
  const ayatRefs = useRef([]);
  const currentSurahRef = useRef(null);
  const startTimeRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState(null);
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = "auto";
    audio.setAttribute("playsinline", "");

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      saveListeningStats();
      nextAudio();
    };
    
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);
  
  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("play", resumeAudio);
      navigator.mediaSession.setActionHandler("pause", pauseAudio);
      navigator.mediaSession.setActionHandler("nexttrack", nextAudio);
      navigator.mediaSession.setActionHandler("previoustrack", prevAudio);
    }
  }, []);
  
  const stopAudio = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };
  
  const saveListeningStats = () => {
    if (!currentSurahRef.current || !startTimeRef.current) return;
    
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTimeRef.current) / 1000);
    const stats = JSON.parse(localStorage.getItem("murrotal_stats") || "{}");
    const surahName = currentSurahRef.current.nama;
    
    if (!stats[surahName]) {
      stats[surahName] = {
        playCount: 0,
        totalSeconds: 0
      };
    }
    
    stats[surahName].totalSeconds += duration;
    localStorage.setItem("murrotal_stats", JSON.stringify(stats));
    startTimeRef.current = null;
  };
  
  const stopIfDifferentSurah = (surahName) => {
    if (currentSurahRef.current && currentSurahRef.current !== surahName) {
      stopAudio();
      
      indexRef.current = 0;
      setCurrentIndex(0);
      playlistRef.current = [];
      currentSurahRef.current = null;
      setCurrentSurah(null);
    }
  };
  
  const playAudio = (playlist, index = 0, surah) => {
    const { isSurah, loading, currentAyat, currentListAyat, currentListLatin, handlePlayAudio, dataSurah } = useSurahAudio();
    
    try {
      if (!Array.isArray(playlist)) return;
  
      const audio = audioRef.current;
      
      if (surah && currentSurahRef.current && currentSurahRef.current !== surah) {
        stopAudio();
        indexRef.current = 0;
        index = 0;
      }
      
      if (surah) {
        currentSurahRef.current = surah;
        setCurrentSurah(surah);
        
        const stats = JSON.parse(localStorage.getItem("murrotal_stats") || "{}");
        const surahName = surah.nama;
        
        if (!stats[surahName]) {
          stats[surahName] = {
            playCount: 0,
            totalSeconds: 0
          };
        }
        
        stats[surahName].playCount += 1;
        
        localStorage.setItem("murrotal_stats", JSON.stringify(stats));
      }
      
      playlistRef.current = playlist;
      indexRef.current = index;
      const source = playlist[index];
      
      if (!source) return;
      
      audio.src = source;
      audio.currentTime = 0;
      
      setCurrentIndex(index);
      updateMediaSessionMetadata(surah, index);
      
      audio.play()
       .then(() => {
         startTimeRef.current = Date.now();
       })
       .catch((err) => {
         console.log("Play gagal:", err);
       });
    } catch (err) {
      console.log("gagal memutar audio", err);
    }
  };
  
  const nextAudio = () => {
    const playlist = playlistRef.current;
    const nextIndex = indexRef.current + 1;
    
    if (nextIndex < playlist.length) {
      playAudio(playlist, nextIndex, currentSurahRef.current);
    } else {
      setIsPlaying(false);
    }
  };
  
  const prevAudio = () => {
    const playlist = playlistRef.current;
    const prevIndex = indexRef.current - 1;
    
    if (prevIndex >= 0) {
      playAudio(playlist, prevIndex, currentSurahRef.current);
    }
  };
  
  const pauseAudio = () => {
    saveListeningStats();
    audioRef.current.pause();
  };
  
  const resumeAudio = () => {
    audioRef.current.play().catch((err) => {
      console.log("resume gagal:", err);
    });
  };
  
  const registerAyatRef = (index, el) => {
    ayatRefs.current[index] = el;
  };
  
  useEffect(() => {
    const el = ayatRefs.current[currentIndex];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [currentIndex]);
  
  const updateMediaSessionMetadata = (surah, index) => {
    try {
      if ("mediaSession" in navigator) {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        
        navigator.mediaSession.metadata = new MediaMetadata({
           title: `${surah?.nama} - [${index + 1}:${surah?.numberOfAyahs}]`,
           artist: "Murrotal Quran",
           album: user?.nama || "Murrotal",
        });
      }
    } catch (err) {
      console.log("metadata error", err);
    }
  };
  
  return (
    <AudioPlayerContext.Provider
      value={{
        playAudio,
        pauseAudio,
        resumeAudio,
        stopAudio,
        nextAudio,
        prevAudio,
        isPlaying,
        currentIndex,
        currentSurah,
        registerAyatRef,
        stopIfDifferentSurah,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const getMurrotalStats = () => {
  const stats = JSON.parse(localStorage.getItem("murrotal_stats") || "{}");
  
  return Object.entries(stats).map(([surah, data]) => ({
    surah,
    playCount: data.playCount,
    minutes: Math.floor(data.totalSeconds / 60)
  }));
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);