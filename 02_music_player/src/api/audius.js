// src/api/youtube.js
//const API_KEY = "AIzaSyAcxd4hVjcKXAEuWTf960csauLPjWW_ahA"; // replace with your key



// 

let BASE_URL = "";
console.log("01_audius_BASE_URL_Return",BASE_URL);

export async function initAudius() {
  try {
    const res = await fetch("https://api.audius.co");
    const data = await res.json();
    console.log("02_audius_fetch",res,data);
    
    BASE_URL = data.data[0];
    console.log("✅ Audius BASE_URL set to:", BASE_URL);
  } catch (err) {
    console.error("❌ Error initializing Audius API:", err);
  }
}

export async function searchAudiusMusic(query) {
  if (!BASE_URL) {
    console.warn("06_⚠️ Audius BASE_URL not initialized");
    return [];
  }

  const response = await fetch(
    `${BASE_URL}/v1/tracks/search?query=${encodeURIComponent(query)}&app_name=YOUR_APP_NAME`
  );
  const data = await response.json();
  console.log("03_audius_api",data);
  
  const songs = data.data.map((track) => ({
    id: track.id,
    title: track.title,
    artist: track.user?.name || "Unknown Artist",
    src: `${BASE_URL}/v1/tracks/${track.id}/stream?app_name=YOUR_APP_NAME`,
    type: "audius"
  }));
  console.log("04_audius_api",songs);
  

  return songs;
}
