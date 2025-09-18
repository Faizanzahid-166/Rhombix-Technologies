function Playlist({ songs, onSelect, currentSongIndex }) {
  return (
    <div className="w-2/4 bg-gray-600 mt-3 p-2 rounded-xl shadow">
      <h3 className="font-bold text-black text-center mb-2">Playlist</h3>
      
      {songs.map((song, index) => (
        <div
        
          key={song.id}
          onClick={() => onSelect(index)}
          className={`p-2 rounded cursor-pointer ${
            index === currentSongIndex ? "bg-blue-600" : "hover:bg-gray-500"
          }`}
        >
          🎶 {song.title} 
        </div>
      ))}
    </div>
  );
}

export default Playlist;
