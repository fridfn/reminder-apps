import { createContext, useContext, useRef, useState, useEffect } from "react";

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {

  const audioRef = useRef(new Audio());
  const playlistRef = useRef([]);
  const indexRef = useRef(0);
  const ayatRefs = useRef([]);
  const currentSurahRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState(null);

  // ================================
  // Setup Audio sekali saja
  // ================================

  useEffect(() => {

    const audio = audioRef.current;

    audio.preload = "auto";
    audio.setAttribute("playsinline", "");

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onEnded = () => {
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

  // ================================
  // Setup MediaSession sekali saja
  // ================================

  useEffect(() => {

    if ("mediaSession" in navigator) {

      navigator.mediaSession.setActionHandler("play", resumeAudio);
      navigator.mediaSession.setActionHandler("pause", pauseAudio);
      navigator.mediaSession.setActionHandler("nexttrack", nextAudio);
      navigator.mediaSession.setActionHandler("previoustrack", prevAudio);

    }

  }, []);

  // ================================
  // Stop Audio
  // ================================

  const stopAudio = () => {

    const audio = audioRef.current;

    audio.pause();
    audio.currentTime = 0;

    setIsPlaying(false);

  };

  // ================================
  // Stop jika beda surah
  // ================================

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

  // ================================
  // Play Audio
  // ================================

  const playAudio = (playlist, index = 0, surah) => {

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

      }

      playlistRef.current = playlist;
      indexRef.current = index;

      const source = playlist[index];

      if (!source) return;

      audio.src = source;
      audio.currentTime = 0;

      setCurrentIndex(index);

      updateMediaSessionMetadata(surah, index);

      audio.play().catch((err) => {
        console.log("Play gagal:", err);
      });

    } catch (err) {

      console.log("gagal memutar audio", err);

    }

  };

  // ================================
  // Next Ayat
  // ================================

  const nextAudio = () => {

    const playlist = playlistRef.current;

    const nextIndex = indexRef.current + 1;

    if (nextIndex < playlist.length) {

      playAudio(playlist, nextIndex, currentSurahRef.current);

    } else {

      setIsPlaying(false);

    }

  };

  // ================================
  // Previous Ayat
  // ================================

  const prevAudio = () => {

    const playlist = playlistRef.current;

    const prevIndex = indexRef.current - 1;

    if (prevIndex >= 0) {

      playAudio(playlist, prevIndex, currentSurahRef.current);

    }

  };

  // ================================
  // Pause
  // ================================

  const pauseAudio = () => {

    audioRef.current.pause();

  };

  // ================================
  // Resume
  // ================================

  const resumeAudio = () => {

    audioRef.current.play().catch((err) => {
      console.log("resume gagal:", err);
    });

  };

  // ================================
  // Register Ayat Ref
  // ================================

  const registerAyatRef = (index, el) => {

    ayatRefs.current[index] = el;

  };

  // ================================
  // Scroll ke ayat aktif
  // ================================

  useEffect(() => {

    const el = ayatRefs.current[currentIndex];

    if (el) {

      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }, [currentIndex]);

  // ================================
  // Update MediaSession Metadata
  // ================================

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
        stopIfDifferentSurah,
        isPlaying,
        currentIndex,
        currentSurah,
        registerAyatRef,
      }}
    >

      {children}

    </AudioPlayerContext.Provider>

  );

};

export const useAudioPlayer = () => useContext(AudioPlayerContext);