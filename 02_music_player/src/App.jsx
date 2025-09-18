// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Player, Playlist, SearchBar, CategoryFilter } from './components';
import { initAudius,searchAudiusMusic} from "./api/audius"; // 👈 import


function App() {
  const [song, setSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

   const fileInputRef = useRef(null);
 useEffect(() => {
  initAudius();
}, []);



  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('audio')) {
      const localURL = URL.createObjectURL(file);
      const newSong = {
        title: file.name,
        artist: 'Local File',
        src: localURL,
      };
      setSong(newSong);
      setPlaylist([newSong]);
      setCurrentIndex(0);
    }
  };

    const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleLocalFiles(files);
  };

 const handleLocalFiles = (files) => {
  const audioFiles = files.filter((file) => file.type.startsWith("audio/"));
  const newSongs = audioFiles.map((file) => ({
    title: file.name,
    artist: "Local File",
    src: URL.createObjectURL(file),
    type: "local"
  }));
console.log("01_newSongs",newSongs);

  // ⬇ Append to existing playlist
  setPlaylist((prev) => [...prev, ...newSongs]);

  // ⬇ If no song is playing yet, start with the first one
  if (!song && newSongs.length > 0) {
    setSong(newSongs[0]);
    setCurrentIndex(0);
  }
};


const handleSearch = async (term) => {
  const results = await searchAudiusMusic(term);
  console.log("02_result",results);
  
  if (results.length > 0) {
    setPlaylist(results);
    setSong(results[0]);
    setCurrentIndex(0);
  }
};



  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setSong(playlist[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setSong(playlist[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
     className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-700 dark:bg-gray-850 text-gray-900 dark:text-white"
    >
      <h1 className="text-3xl font-bold text-center mb-4">🎵 Music Player</h1>

      <SearchBar onSearch={handleSearch} />

      <CategoryFilter />
      


       {/* Drop & Search Section */}
      {song ? (
        <>
  <Player song={song} onNext={handleNext} onPrev={handlePrev} />
  <button
      onClick={() => fileInputRef.current.click()}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      + Add Songs
    </button>
    <input
  type="file"
  ref={fileInputRef}
  accept="audio/*"
  multiple
  onChange={handleFileSelect}
  className="hidden"
/>
  </>
) : (
  <div
    className="text-center text-gray-500 mt-6 border border-dashed border-gray-400 p-8 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
    onClick={() => fileInputRef.current.click()}
    onDragOver={(e) => e.preventDefault()}
    onDrop={handleDrop}
  >
    <p className="mb-2">🎵 Drag & Drop Music Here or Click to Browse</p>
    <input
      type="file"
      ref={fileInputRef}
      accept="audio/*"
      multiple
      onChange={handleFileSelect}
      className="hidden"
    />
    <p className="text-sm text-gray-400">(Only audio files are supported)</p>
  </div>
)}




      <Playlist
        songs={playlist}
        onSelect={(index) => {
        setCurrentIndex(index);
        setSong(playlist[index]);
        }}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default App;
