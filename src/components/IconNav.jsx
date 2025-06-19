'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const icons = [
  { label: 'Education', file: 'education-button.png', link: '/education' },
  { label: 'Advocacy', file: 'advocacy-button.png', link: '/advocacies' },
  { label: 'Projects', file: 'projects-button.png', link: '/projects' },
  { label: 'Hobbies', file: 'hobbies-button.png', link: '/hobbies' },
  { label: 'Contact', file: 'contact-button.png', link: '/contact' },
];

export default function IconNav() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex justify-between items-center gap-3">
      {icons.map(({ label, file, link }) => {
        const src = theme === 'dark'
          ? `/dark-mode/dark-${file}`
          : `/light-mode/light-${file}`;

        return (
          <a key={label} href={link} className="hover:scale-110 transition">
            <Image src={src} alt={label} width={125} height={125} />
          </a>
        );
      })}
    </div>
  );
}
