// src/utils/youtube.js
let isAPILoaded = false;

export function loadYouTubeAPI() {
  return new Promise((resolve) => {
    if (isAPILoaded) return resolve(window.YT);

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    window.onYouTubeIframeAPIReady = () => {
      isAPILoaded = true;
      resolve(window.YT);
    };

    document.body.appendChild(tag);
  });
}
