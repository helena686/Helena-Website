import CalendlyButton from './CalendlyButton';
import { HeartIcon, SparkleIcon, SunIcon, LeafIcon, BloomIcon } from './Icons';

const principles = [
  { icon: <HeartIcon />, label: 'Hypnotherapy' },
  { icon: <SparkleIcon />, label: 'Neuroscience' },
  { icon: <SunIcon />, label: 'Nervous System' },
  { icon: <LeafIcon />, label: 'Energy Healing' },
  { icon: <BloomIcon />, label: 'Quantum Healing' },
];

export default function WhatIsSection() {
  return (
    <section className="dark-section angled-both" id="approach">
      <div
        className="blob"
        style={{ background: 'var(--gold-500)', width: 400, height: 400, top: -100, left: -100 }}
      />
      <div
        className="blob"
        style={{
          background: 'var(--rose-500)',
          width: 360,
          height: 360,
          bottom: -120,
          right: -80,
          opacity: 0.25,
        }}
      />

      {/* relative z-10 renders content above the blob layers */}
      <div
        className="container text-center font-light relative z-10 pt-20 pb-24 md:pt-14 md:pb-14"
      >
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>
          The Approach
        </div>
        <h2 className="section-title">
          I don&apos;t just talk about the pain.
          <br />
          <em>I gently rewire the patterns beneath it.</em>
        </h2>

        {/* text-base on mobile → text-[17px] on md+ */}
        <p
          className="text-base md:text-[17px] font-medium w-full md:max-w-[680px] mx-auto mb-4"
          style={{ color: 'rgba(251,246,238,0.85)' }}
        >
          Insight alone doesn&apos;t stop you from going back. The patterns aren&apos;t in your
          thinking mind. They&apos;re in your nervous system. That&apos;s where I work.
        </p>

        {/* text-sm on mobile → text-[15px] on md+ */}
        <p
          className="text-sm md:text-[15px] w-full md:max-w-[640px] mx-auto mb-10 md:mb-12"
          style={{ color: 'rgba(251,246,238,0.7)' }}
        >
          Sessions are 1:1 and online. Some weeks I go to the root with hypnotherapy. Some weeks I
          regulate the body before I touch the mind. There&apos;s no script. There&apos;s a method.
        </p>

        <div className="principle-grid">
          {principles.map((p, i) => (
            <div className="principle" key={i}>
              <div className="principle-icon">{p.icon}</div>
              <div className="principle-label">{p.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full md:max-w-[600px] mx-auto mt-8 md:mt-10 mb-7 flex flex-col gap-2 text-center">
          {/* Line 1 — intro, bright cream, semibold */}
          <p className="text-base font-semibold text-white">
            The work moves through five places.
          </p>
          {/* Line 2 — five pillars separated by mid-dots, readable */}
          <p className="text-sm md:text-[15px]" style={{ color: 'rgba(251,246,238,0.88)' }}>
            Clarity &middot; Understanding the patterns &middot; Inner child &amp; subconscious
            healing &middot; Rebuilding self-trust &middot; Future self integration
          </p>
          {/* Line 3 — closing, italic and dimmed */}
          <p className="text-sm italic" style={{ color: 'rgba(251,246,238,0.45)' }}>
            Not a programme. A practice.
          </p>
        </div>

        <CalendlyButton className="btn btn--primary btn--lg">Book a Clarity Call</CalendlyButton>
      </div>
    </section>
  );
}
