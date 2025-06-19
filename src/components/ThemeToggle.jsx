'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getIcon = () => {
    return theme === 'dark'
      ? '/dark-mode/dark-mode-on.png'
      : '/light-mode/light-mode-on.png';
  };

  return (
    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="cursor-pointer w-[120px] h-[120px] relative hover:scale-110 transition">
      <Image src={getIcon()} alt="Toggle Theme" fill />
    </div>
  );
}
