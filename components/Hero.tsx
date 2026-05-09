import Image from 'next/image';
import CalendlyButton from './CalendlyButton';
import { ArrowRightIcon, ArrowDownIcon } from './Icons';

export default function Hero() {
  return (
    /*
      Section: relative so the abs-positioned background + scroll indicator
      anchor correctly. isolate prevents stacking-context bleed from the nav.
    */
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden flex flex-col pt-24 pb-12 md:pt-36 md:pb-20"
    >
      {/* ── Decorative background: gradient + dot pattern ────── */}
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-pattern" />
      </div>

      {/*
        ── Main two-column container ────────────────────────────
        Mobile  → flex-col: portrait stacks ABOVE text, zero overlap
        Desktop → md:flex-row: text LEFT, portrait RIGHT, side-by-side
      */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 flex-1 w-full max-w-[1200px] mx-auto px-5 md:px-8">

        {/*
          PORTRAIT — first in DOM so it sits on top in the mobile column.
          md:order-2 moves it to the right slot on desktop without touching DOM order.
        */}
        <div className="flex justify-center md:justify-end md:order-2 md:flex-shrink-0">
          <div className="hero-portrait-block">
            <Image
              src="/assets/helena-hero.png"
              alt="Helena Menadue, life and relationship coach"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 260px, 460px"
            />
          </div>
        </div>

        {/*
          TEXT — second in DOM so it sits below the portrait on mobile.
          md:order-1 moves it to the left slot on desktop.
        */}
        <div className="md:order-1 md:max-w-[600px] flex-1">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Now accepting 1:1 clients
          </div>

          <h1 className="hero-title">
            <span className="hero-title-1">Heal what the relationship broke.</span>
            <span className="hero-title-2">
              <em>Get to the root of why you keep ending up here</em>
            </span>
          </h1>

          <p className="hero-sub">
            Life &amp; relationship coaching for women healing from emotional pain,
            self-doubt and toxic relationships.
          </p>

          <div className="hero-cta-row">
            <CalendlyButton className="btn btn--primary btn--lg">
              Book a Clarity Call <ArrowRightIcon />
            </CalendlyButton>
            <a href="#about" className="hero-link">
              Meet Helena <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — anchors to bottom-center of the section */}
      <a href="#intro" className="scroll-indicator" aria-label="Scroll down">
        <ArrowDownIcon />
      </a>
    </section>
  );
}
