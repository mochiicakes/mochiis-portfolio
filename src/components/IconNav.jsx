'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const icons = [
  {
    label: 'Education',
    file: 'education-button.png',
    link: 'https://www.linkedin.com/in/michaella-gonzales-203626296/details/education/',
  },
  {
    label: 'Advocacy',
    file: 'advocacy-button.png',
    link: 'https://sites.google.com/view/mochii-does-things/portfolio',
  },
  {
    label: 'Projects',
    file: 'projects-button.png',
    link: 'https://github.com/mochiicakes',
  },
  {
    label: 'Contact',
    file: 'contact-button.png',
    link: null,
  },
];

export default function IconNav() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleCopyEmail = () => {
    const email = 'michaellagonzales.owo@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    });
  };

  return (
    <div className="flex justify-between items-center gap-3">
      {icons.map(({ label, file, link }) => {
        const src =
          theme === 'dark'
            ? `/dark-mode/dark-${file}`
            : `/light-mode/light-${file}`;

        const isContact = label === 'Contact';

        return link ? (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image src={src} alt={label} width={125} height={125} />
          </a>
        ) : (
          <div
            key={label}
            onClick={handleCopyEmail}
            className="relative group hover:scale-110 transition cursor-pointer"
          >
            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Click to copy my email
            </div>
            <Image src={src} alt={label} width={125} height={125} />
          </div>
        );
      })}
    </div>
  );
}
