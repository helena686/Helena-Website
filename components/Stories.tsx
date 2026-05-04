'use client';

import { useState } from 'react';
import CalendlyButton from './CalendlyButton';
import { ChevronIcon } from './Icons';

type Tone = 'rose' | 'gold' | 'plum';

const items: { label: string; tone: Tone }[] = [
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' },
  { label: 'Client Story', tone: 'plum' },
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' },
  { label: 'Client Story', tone: 'plum' },
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' },
];

export default function Stories() {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? items : items.slice(0, 4);

  return (
    <section id="stories" className="dark-section angled-both">
      {/* pt-10/pb-10 on mobile (40px), md:pt-14/pb-14 on desktop (56px) */}
      <div
        className="container text-center pt-10 pb-10 md:pt-14 md:pb-14"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>
          Real Stories
        </div>
        <h2 className="section-title">Women, transformed</h2>

        {/* margin-bottom: 32px mobile, 48px desktop */}
        <p
          className="w-full md:max-w-[540px] mx-auto mb-8 md:mb-12"
          style={{ color: 'rgba(251,246,238,0.75)' }}
        >
          The women who walked through this didn&apos;t become someone new. They came back to
          who they always were.
        </p>

        <div className="gallery">
          {visible.map((it, i) => (
            <div className={`gallery-item gallery-item--${it.tone}`} key={i}>
              <div className="gallery-text-card">
                <span>{it.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack vertically on mobile, side-by-side from sm: (640px) up */}
        <div className="flex flex-col items-center gap-3 mt-10 sm:flex-row sm:justify-center">
          <CalendlyButton className="btn btn--primary btn--lg">
            Book a Clarity Call
          </CalendlyButton>
          <button
            className="btn btn--ghost-light btn--lg"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show fewer stories' : 'Show more stories'}
            <ChevronIcon
              style={{
                transform: showMore ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
