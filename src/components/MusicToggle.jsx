'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update audio source when theme changes
  useEffect(() => {
    if (!mounted || !audioRef.current) return;

    const newSrc =
      theme === 'dark'
        ? '/music/late-night-streets.mp3.mp3'
        : '/music/pink-ocean.mp3.mp3';

    if (currentSrc !== newSrc) {
      fadeOut(() => {
        audioRef.current.src = newSrc;
        audioRef.current.volume = 0;
        audioRef.current.play().then(() => {
          setCurrentSrc(newSrc);
          fadeIn();
        });
      });
    }
  }, [theme]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      fadeOut(() => {
        audioRef.current.pause();
        setIsPlaying(false);
      });
    } else {
      const newSrc =
        theme === 'dark'
          ? '/music/late-night-streets.mp3.mp3'
          : '/music/pink-ocean.mp3.mp3';

      if (audioRef.current.src !== newSrc) {
        audioRef.current.src = newSrc;
      }

      audioRef.current.loop = true;
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        fadeIn();
        setIsPlaying(true);
        setCurrentSrc(newSrc);
      });
    }
  };

  const fadeOut = (callback) => {
    if (!audioRef.current) return;
    clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume > 0.05) {
        audioRef.current.volume -= 0.05;
      } else {
        clearInterval(fadeIntervalRef.current);
        audioRef.current.volume = 0;
        if (callback) callback();
      }
    }, 50);
  };

  const fadeIn = () => {
    if (!audioRef.current) return;
    clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume < 0.95) {
        audioRef.current.volume += 0.05;
      } else {
        clearInterval(fadeIntervalRef.current);
        audioRef.current.volume = 1;
      }
    }, 50);
  };

  const getIcon = () => {
    if (theme === 'dark') {
      return isPlaying
        ? '/dark-mode/dark-music-on.png'
        : '/dark-mode/dark-music-off.png';
    } else {
      return isPlaying
        ? '/light-mode/light-music-on.png'
        : '/light-mode/light-music-off.png';
    }
  };

  if (!mounted) return null;

  return (
    <div onClick={toggleMusic} className="cursor-pointer w-[120px] h-[120px] relative hover:scale-110 transition">
      <Image src={getIcon()} alt="Toggle Music" fill className="object-contain" />
      <audio ref={audioRef} loop />
    </div>
  );
}
