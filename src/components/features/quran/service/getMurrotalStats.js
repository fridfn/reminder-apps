const getMurrotalStats = () => {
  const stats = JSON.parse(localStorage.getItem("murrotal_stats") || "{}");
  
  return Object.entries(stats).map(([surah, data]) => ({
    surah,
    playCount: data.playCount,
    minutes: Math.floor(data.totalSeconds / 60) /* data.totalSeconds*/
  }));
};

export { getMurrotalStats };