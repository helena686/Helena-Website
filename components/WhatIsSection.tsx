import CalendlyButton from './CalendlyButton';
import { HeartIcon, SparkleIcon, SunIcon, LeafIcon, BloomIcon } from './Icons';

const principles = [
  { icon: <HeartIcon />, label: 'Hypnotherapy' },
  { icon: <SparkleIcon />, label: 'Neuroscience' },
  { icon: <SunIcon />, label: 'Nervous System' },
  { icon: <LeafIcon />, label: 'Energy Healing' },
  { icon: <BloomIcon />, label: 'Embodiment' },
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

      {/* pt-10/pb-10 on mobile (40px), md:pt-14/pb-14 on desktop (56px) — keeps angled clip clear */}
      <div
        className="container text-center font-light pt-10 pb-10 md:pt-14 md:pb-14"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>
          The Approach
        </div>
        <h2 className="section-title">
          I don&apos;t just talk. <em>I rewire.</em>
        </h2>

        {/* text-base on mobile → text-[17px] on md+ */}
        <p
          className="text-base md:text-[17px] font-medium w-full md:max-w-[680px] mx-auto mb-4"
          style={{ color: 'rgba(251,246,238,0.85)' }}
        >
          Talk therapy gives you insight. But insight doesn&apos;t stop you from going back. The
          patterns aren&apos;t in your thinking mind. They&apos;re in your nervous system.
          That&apos;s where I work.
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

        <p
          className="text-sm md:text-[15px] w-full md:max-w-[600px] mx-auto mt-8 md:mt-10 mb-7"
          style={{ color: 'rgba(251,246,238,0.75)' }}
        >
          Five modalities, one woman holding the space, working with what you actually need. Not a
          programme. A practice.
        </p>

        <CalendlyButton className="btn btn--primary btn--lg">Book a Clarity Call</CalendlyButton>
      </div>
    </section>
  );
}
