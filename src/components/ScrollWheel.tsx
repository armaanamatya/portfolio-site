import { useEffect, useMemo, useRef, useState } from 'react';
import './ScrollWheel.css';

interface SectionItem {
  id: string;
  label: string;
}

function ScrollWheel() {
  const sections: SectionItem[] = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'what-im-up-to', label: "What I'm Up To" },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    // { id: 'hackathons', label: 'Hackathons' }
  ], []);

  const [activeId, setActiveId] = useState<string>('about');
  const tickingRef = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const viewportTop = 0;
        let nextActive: string | null = null;
        let smallestPositiveTop = Number.POSITIVE_INFINITY;

        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          // Choose the section whose top is closest to the top of the viewport but not above it
          if (rect.top >= viewportTop && rect.top < smallestPositiveTop) {
            smallestPositiveTop = rect.top;
            nextActive = s.id;
          }
        }

        if (!nextActive) {
          // If all are above the top (e.g., scrolled past), pick the last section in view
          // Find the section with the largest top less than 0
          let largestNegativeTop = -Number.POSITIVE_INFINITY;
          for (const s of sections) {
            const el = document.getElementById(s.id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top <= viewportTop && rect.top > largestNegativeTop) {
              largestNegativeTop = rect.top;
              nextActive = s.id;
            }
          }
        }

        if (nextActive && nextActive !== activeId) {
          setActiveId(nextActive);
        }
        tickingRef.current = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections, activeId]);

  const onClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="scroll-wheel" aria-label="Section navigation">
      <ul className="wheel-list">
        {sections.map((s) => (
          <li key={s.id} className={`wheel-item ${activeId === s.id ? 'active' : ''}`}>
            <button className="wheel-button" onClick={() => onClick(s.id)} aria-current={activeId === s.id ? 'true' : undefined}>
              <span className="wheel-dot" />
              <span className="wheel-label">{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ScrollWheel;


