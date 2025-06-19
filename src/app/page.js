'use client';
import Image from 'next/image';
import MusicToggle from '@/components/MusicToggle';
import ThemeToggle from '@/components/ThemeToggle';
import IconNav from '@/components/IconNav';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DraggableStars from '@/components/DraggableStars';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState('overview');
  const viewStates = ['overview', 'skills-soft', 'skills-hard'];
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const bg = isDark ? '/dark-mode/dark-bg.png' : '/light-mode/light-bg.png';
  const card = isDark ? '/dark-mode/dark-main-card.png' : '/light-mode/light-main-card.png';
  const avatarFront = isDark ? '/dark-mode/dark-avatar.png' : '/light-mode/light-avatar.png';
  const avatarBack = isDark ? '/dark-mode/dark-pfp.png' : '/light-mode/light-pfp.png';
  const arrowLeft = isDark ? '/dark-mode/dark-arrow-left.png' : '/light-mode/light-arrow-left.png';
  const arrowRight = isDark ? '/dark-mode/dark-arrow-right.png' : '/light-mode/light-arrow-right.png';

  const toggleLeft = () => {
    const currentIndex = viewStates.indexOf(view);
    const newIndex = (currentIndex - 1 + viewStates.length) % viewStates.length;
    setView(viewStates[newIndex]);
  };

  const toggleRight = () => {
    const currentIndex = viewStates.indexOf(view);
    const newIndex = (currentIndex + 1) % viewStates.length;
    setView(viewStates[newIndex]);
  };

  const renderContent = () => {
    switch (view) {
      case 'overview':
        return (
          <div className="text-black">
            <h1 className="text-2xl font-bold">Haii, I am Mochii (˶˃ ᵕ ˂˶) .ᐟ.ᐟ 💗</h1>
            <p className="mt-2 leading-relaxed text-xl max-w-[90%] text-gray-700">
              With over a decade as a full-time scholar and a gal of <br /> leadership,
              I&apos;ve built a strong foundation in discipline, <br /> strategy, and
              excellence. Now, I&apos;m channeling that <br /> experience toward my goal
              of becoming an impactful <br /> woman in the world of tech and gaming.
            </p>
          </div>
        );
      case 'skills-soft':
        return (
          <div className="text-black">
            <h2 className="text-2xl font-bold">✨ Soft Skills ✨</h2>
            <p className="mt-1 mb-2 leading-relaxed text-lg max-w-[90%] text-gray-700">
              <li>
                Transformational and Participative Leadership Styles,
                Event/ <br /> Digital Product Marketing (Hosting, Pitching, Negotiation), <br />
                Analytical Skills (Integration of Theoretical processes for
                <br /> Analysis and Decision-making), Intrapersonal Discipline <br /> & Self-Management
                (Consistently balanced freelance work and <br />
                leadership roles with academics, delivering projects under <br />
                pressure and quickly adapting to new tech stacks.)
              </li>
            </p>
          </div>
        );
      case 'skills-hard':
        return (
          <div className="text-black">
            <h2 className="text-2xl font-semibold">✨ Hard Skills ✨</h2>
            <p className="mt-1 mb-2 leading-relaxed text-lg max-w-[90%] text-gray-700">
              <li>
                <b>Languages & Technologies:</b> HTML, CSS, JavaScript, Python, <br /> PHP, C++, SQL<br />
                <b>Frameworks & Libraries:</b> React.js, Next.js, Django, Express,<br /> Prisma, Flutter, REST, OpenGL<br />
                <b>Tools & Platforms:</b> Git, Firebase, Google Cloud Platform (GCP), <br />
                Azure DevOps, Jira, Trello, Google Workspace, Canva, <br />
                AI tools (ChatGPT, Claude)
              </li>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gradient animation overlay */}
      <div className="gradient-overlay" />

      {/* Fading background image */}
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${bg}')` }}
      />

      {/* Top Left: Music + Theme */}
      <div className="absolute top-4 left-4 z-50 flex gap-3">
        {/* Music Button with Tooltip */}
        <div className="relative group">
          <div className="absolute -bottom-14 left-1/2 text-center -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            Listen to music
          </div>
          <MusicToggle />
        </div>

        {/* Theme Button with Tooltip */}
        <div className="relative group">
          <div className="absolute -bottom-16 left-1/2 text-center -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            Switch light/dark mode
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
        <DraggableStars />
      </div>

      {/* Card Layout */}
      <div className="flex justify-center items-center h-screen relative z-10">
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative w-[1300px] h-[700px]"
        >
          <Image
            src={card}
            alt="Main Card"
            fill
            className="object-contain"
            priority
          />

          {/* Arrows */}
          <div className="absolute left-[150px] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition">
            <Image src={arrowLeft} alt="Previous" width={80} height={80} onClick={toggleLeft} />
          </div>
          <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition">
            <Image src={arrowRight} alt="Next" width={80} height={80} onClick={toggleRight} />
          </div>

          {/* Text Content */}
          <div className="absolute top-[180px] left-[580px] right-[20px] bottom-[90px] z-10 flex flex-col justify-between">
            {renderContent()}
          </div>

          {/* Avatar & IconNav */}
          <div className="absolute top-[180px] left-[350px] z-10">
            <div
              className="relative w-[210px] h-[210px] perspective cursor-pointer group"
              onClick={() => setFlipped(prev => !prev)}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                Tap to flip
              </div>
              <div
                className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full ${
                  flipped ? 'rotate-y-180' : ''
                } hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]`}
              >
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden">
                  <Image
                    src={avatarFront}
                    alt="Avatar Front"
                    width={210}
                    height={210}
                    className="rounded-full shadow-2xl object-cover"
                  />
                </div>
                {/* Back Face */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                  <Image
                    src={avatarBack}
                    alt="Avatar Back"
                    width={210}
                    height={210}
                    className="rounded-full shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pr-4">
              <IconNav />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-white text-s italic z-20 bg-black/10 backdrop-blur-sm py-2">
        ⋆౨ৎ˚⟡˖ ࣪ @mochiicakes | Made with imagination, logic & love | 2025 ࣪ ˖⟡˚౨ৎ⋆
      </footer>
    </main>
  );
}
