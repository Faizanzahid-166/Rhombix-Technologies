import React, { useEffect, useRef } from "react";
import { loadYouTubeAPI } from "../utils/youtube";

export default function YouTubePlayer({ videoId, onReady }) {
  const playerRef = useRef(null);

  useEffect(() => {
    let player;

    loadYouTubeAPI().then((YT) => {
      if (!videoId) return;

      player = new YT.Player(playerRef.current, {
        height: "360",
        width: "640",
        videoId,
        events: {
          onReady: (e) => onReady?.(e),
        },
        playerVars: {
          cc_load_policy: 1, // Enable subtitles if available
        },
      });
    });

    return () => {
      if (player) player.destroy();
    };
  }, [videoId]);

  return <div ref={playerRef} />;
}