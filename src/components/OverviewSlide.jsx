export default function OverviewSlide({ currentSlide }) {
    if (currentSlide === 'skills') {
      return (
        <>
          <h2 className="font-bold text-lg">Skill Sets ✨</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Soft: Leadership, Empathy, Communication</li>
            <li>Hard: HTML/CSS, React, Next.js, Git</li>
          </ul>
        </>
      );
    }
  
    return (
      <>
        <h1 className="text-lg font-bold">Haii, I am Mochii ♡</h1>
        <p className="mt-2">
          With over a decade as a full-time scholar and a gal of leadership, I’ve built a strong foundation in discipline, strategy, and excellence. Now, I'm channeling that experience toward my goal of becoming an impactful woman in the tech and advocacy scene...
        </p>
      </>
    );
  }
  