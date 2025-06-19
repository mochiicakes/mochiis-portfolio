'use client';
import { useEffect, useRef } from 'react';

export default function VolumeSlider({ isPlaying, volume, setVolume, musicPath }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.src = musicPath;
    audio.load();

    if (isPlaying) {
      audio.volume = volume;
      audio.play().catch((e) => {
        console.error('Playback failed:', e);
      });
    }
  }, [musicPath, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="flex items-center gap-2 z-50">
      <audio ref={audioRef} loop />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-24 cursor-pointer accent-pink-400"
        />
    </div>
  );
}
