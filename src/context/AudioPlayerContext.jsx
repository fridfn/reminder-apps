import { createContext, useContext, useRef, useState, useEffect } from "react";
const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const playlistRef = useRef([]);
  const indexRef = useRef(0);
  const ayatRefs = useRef([]);
  const currentSurahRef = useRef(null); // ✅ tambahan: track nama surah aktif

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState(null); // ✅ state untuk UI jika perlu

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  // ✅ Dipanggil dari halaman surah saat user pindah/navigasi
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
    try {
      if (!Array.isArray(playlist)) return;

      // ✅ Validasi: jika surah berbeda, stop & reset index ke 0
      if (surah && currentSurahRef.current && currentSurahRef.current !== surah) {
        stopAudio();
        indexRef.current = 0;
        index = 0;
      }
      // ✅ Update surah aktif
      if (surah) {
        currentSurahRef.current = surah;
        setCurrentSurah(surah);
      }

      playlistRef.current = playlist;
      indexRef.current = index;
      const source = playlist[index];

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const player = new Audio(source);
      audioRef.current = player;

      setCurrentIndex(index);
      setIsPlaying(true);

      if ("mediaSession" in navigator) {
        const { nama } = JSON.parse(localStorage.getItem("user"));
        navigator.mediaSession.metadata = new MediaMetadata({
          title: `${surah?.nama} - [${index + 1}:${surah.numberOfAyahs}]`,
          artist: "Murrotal Quran",
          album: `${nama}`,
        });
        navigator.mediaSession.setActionHandler("play", resumeAudio);
        navigator.mediaSession.setActionHandler("pause", pauseAudio);
        navigator.mediaSession.setActionHandler("nexttrack", nextAudio);
        navigator.mediaSession.setActionHandler("previoustrack", prevAudio);
      }

      player.play();
      player.onended = () => nextAudio();

    } catch (err) {
      console.log(err, "gagal memutar audio");
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
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const resumeAudio = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const registerAyatRef = (index, el) => {
    ayatRefs.current[index] = el;
  };

  useEffect(() => {
    const el = ayatRefs.current[currentIndex];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentIndex]);

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