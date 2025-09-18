import React, { useRef, useEffect, useState } from 'react';

function Player({ song, onNext, onPrev }) {
  const audioRef = useRef(null);
  const volumeRef = useRef(null); // for wheel event
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);


  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.volume = volume;
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateTime);
    };
  }, [volume, song]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song?.src) return;

    audio.load();
    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay prevented:', err);
        setIsPlaying(false);
      }
    };
    tryPlay();
  }, [song]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Play failed:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const skipForward = () => {
    const newTime = Math.min(duration, currentTime + 10);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(0, currentTime - 10);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // ✅ Scroll to change volume with passive:false
  useEffect(() => {
    const input = volumeRef.current;
    if (!input) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const step = 0.05;
      const delta = e.deltaY < 0 ? step : -step;
      const newVolume = Math.min(1, Math.max(0, volume + delta));
      setVolume(newVolume);
      if (audioRef.current) audioRef.current.volume = newVolume;
    };

    input.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      input.removeEventListener('wheel', handleWheel);
    };
  }, [volume]);

  return (
    <div className="max-w-6/12 bg-gray-700 text-white sm:w-2/3 mx-auto p-4 rounded-xl shadow mt-4">
      <h2 className="text-xl font-bold">{song?.title || "No Song Selected"}</h2>
      <p className="text-sm text-gray-300 mb-2">{song?.artist || "Unknown Artist"}</p>

      <audio ref={audioRef} loop={isLooping}>
        <source src={song?.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Time & Seek Bar */}
      <div className="flex items-center mt-3">
        <span className="text-sm mr-2 w-12">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="flex-1"
        />
        <span className="text-sm ml-2 w-12 text-right">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={onPrev}>⏮</button>
        <button onClick={skipBackward}>⏪ 10s</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
        <button onClick={() => setIsLooping(!isLooping)}>
        {isLooping ? "🔁 Looping" : "🔂 No Loop"}
        </button>
        <button onClick={skipForward}>10s ⏩</button>
        <button onClick={onNext}>⏭</button>
      </div>

      {/* Volume Control */}
      <div className="mt-4 flex items-center gap-2">
        <label htmlFor="volume">🔉</label>
        <input
          ref={volumeRef}
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1"
        />
        <span className="w-10 text-right text-sm">{Math.round(volume * 100)}%</span>
      </div>
    </div>
  );
}

export default Player;
