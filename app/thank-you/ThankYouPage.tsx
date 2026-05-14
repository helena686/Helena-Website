/**
 * ThankYouPage.tsx — Helena Menadue · Life & Relationship Coaching
 * Drop-in Next.js page component. Tailwind CSS only, mobile-first.
 *
 * ─── SETUP REQUIRED ──────────────────────────────────────────────────────────
 *
 * 1. Add to tailwind.config.js → theme.extend.fontFamily:
 *
 *      fontFamily: {
 *        display: ['Fraunces', 'Georgia', 'serif'],
 *        body:    ['Outfit', 'system-ui', 'sans-serif'],
 *      },
 *
 * 2. Import Google Fonts in your root layout (app/layout.tsx):
 *
 *      import { Fraunces, Outfit } from 'next/font/google'
 *
 *      const fraunces = Fraunces({
 *        subsets: ['latin'],
 *        variable: '--font-display',
 *        axes: ['opsz'],
 *      })
 *      const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' })
 *
 *      // Then on <html>: className={`${fraunces.variable} ${outfit.variable}`}
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use client';

import { useState } from 'react';
import Stories from '@/components/Stories';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FaqItem {
  q: string;
  sub: string;
  a: string;
}

interface CallPoint {
  icon: React.ReactNode;
  heading: string;
  body: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// Only the 2 post-booking FAQs
const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What if I can't talk about it?",
    sub: "You don't have to.",
    a: "You don't have to say anything you're not ready to. Some women come and barely speak the words for the first few minutes. That's okay. There's no pressure to perform or explain yourself. We start from where you are.",
  },
  {
    q: "What if I'm still in the relationship?",
    sub: "You don't need to have left.",
    a: "You don't need to have left. Some of the most powerful work happens with women still inside it — getting clear, regulating their nervous system, and making decisions that are right for them, in their own time. You're not here to be told what to do. You're here to come back to your own knowing.",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9h6v6c0 5-4 9-9 9z" />
      <path d="M4 20c4-3 6-7 8-12" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24" width="20" height="20" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── CALL POINTS data (defined after icons so JSX is valid) ──────────────────

const CALL_POINTS: CallPoint[] = [
  {
    icon: <ClockIcon />,
    heading: '30 minutes, just you and me.',
    body: 'A real conversation, not a pitch. No script, nothing to prepare.',
  },
  {
    icon: <ChatIcon />,
    heading: "We'll talk about what's weighing on you.",
    body: "What you've been carrying. What you want different. What you're ready for.",
  },
  {
    icon: <CompassIcon />,
    heading: "I'll share how I work.",
    body: "And whether it feels like the right fit for where you are now.",
  },
  {
    icon: <LeafIcon />,
    heading: 'No pressure either way.',
    body: "If it's not right, we both know. That's a good outcome too.",
  },
];

// ─── NAV (logo only) ─────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center px-7 py-3 rounded-full bg-[rgba(31,19,34,0.88)] backdrop-blur-md border border-[rgba(232,184,106,0.15)] shadow-[0_12px_32px_rgba(31,19,34,0.12)]">
        <span className="font-display text-[17px] font-medium tracking-[-0.01em] text-[#fbf6ee]">
          Helena <em className="italic text-[#e8b86a]">Menadue</em>
        </span>
      </div>
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#1f1322] px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-[440px] w-[440px] rounded-full bg-[#d4a04a] opacity-[0.07] blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-10 h-[380px] w-[380px] rounded-full bg-[#c97863] opacity-[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(232,184,106,0.25)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-[12.5px] font-medium tracking-[0.06em] text-[#e8b86a]">
          <span className="h-[7px] w-[7px] flex-shrink-0 animate-pulse rounded-full bg-[#d4a04a] shadow-[0_0_8px_#e8b86a]" />
          YOUR CALL IS BOOKED
        </div>

        {/* Title */}
        <h1 className="font-display mb-5 text-[clamp(34px,6vw,62px)] font-[400] leading-[1.07] tracking-[-0.03em] text-[#fbf6ee]">
          Thank you for reaching out.{' '}
          <em className="bg-gradient-to-r from-[#b8842f] via-[#c97863] to-[#d4a04a] bg-clip-text italic text-transparent">
            I can&apos;t wait to meet you.
          </em>
        </h1>

        <p className="font-body mb-3 max-w-2xl text-[17px] leading-[1.65] text-[rgba(251,246,238,0.82)]">
          Booking this call took courage, and that&apos;s already part of the work.
          I&apos;ll see you soon — until then, take a breath.
        </p>
        <p className="font-body mb-10 max-w-xl text-[15px] leading-[1.65] text-[rgba(251,246,238,0.5)]">
          Your call details are in your inbox. Watch the short message below before we meet.
        </p>

        {/* Helena's video message */}
        <div className="relative w-full aspect-[9/16] md:aspect-video md:max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">

          {!isPlaying ? (
            /* ── Facade: golden play button ── */
            <div
              className="cursor-pointer group w-full h-full flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-20 h-20 rounded-full bg-[#D6B052] flex items-center justify-center shadow-[0_8px_32px_rgba(214,176,82,0.45)] group-hover:scale-110 transition-transform duration-200">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ) : (
            /* ── Live Vimeo iframe ── */
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1192207643?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1"
              style={{ border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="A message from Helena"
            />
          )}
        </div>
      </div>
    </section>
  );
}

// ─── BEFORE WE TALK ──────────────────────────────────────────────────────────

function BeforeWeTalk() {
  return (
    <section className="bg-[#fbf6ee] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="font-body mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#b8842f]">
            Before We Talk
          </p>
          <h2 className="font-display text-[clamp(28px,4.5vw,46px)] font-medium leading-tight tracking-[-0.02em] text-[#2a1d2e]">
            Here&apos;s what our call{' '}
            <em className="bg-gradient-to-r from-[#b8842f] to-[#c97863] bg-clip-text italic text-transparent">
              will look like.
            </em>
          </h2>
        </div>

        {/* 4-point grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CALL_POINTS.map((point, i) => (
            <div
              key={i}
              className="group flex gap-5 rounded-2xl border border-[#e8ddca] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,160,74,0.4)] hover:shadow-[0_12px_32px_rgba(31,19,34,0.08)]"
            >
              {/* Icon bubble */}
              <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e8b86a] to-[#e8b4a8] text-[#1f1322]">
                {point.icon}
              </div>
              <div>
                <h3 className="font-display mb-1.5 text-[17px] font-medium leading-snug tracking-[-0.01em] text-[#2a1d2e]">
                  {point.heading}
                </h3>
                <p className="font-body text-[14.5px] leading-relaxed text-[#4a3a4f]">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? -1 : i));

  return (
    <section className="bg-[#fbf6ee] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="font-body mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#b8842f]">
            In Case You&apos;re Wondering
          </p>
          <h2 className="font-display text-[clamp(26px,4vw,42px)] font-medium leading-tight tracking-[-0.02em] text-[#2a1d2e]">
            A couple of things people often ask{' '}
            <em className="bg-gradient-to-r from-[#b8842f] to-[#c97863] bg-clip-text italic text-transparent">
              once they&apos;ve booked.
            </em>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                  isOpen
                    ? 'border-[#d4a04a] shadow-[0_1px_2px_rgba(31,19,34,0.06)]'
                    : 'border-[#e8ddca]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border font-body text-[12.5px] font-semibold transition-colors duration-200 ${
                      isOpen
                        ? 'border-[#d4a04a] bg-[#e8b86a] text-[#1f1322]'
                        : 'border-[#e8ddca] bg-[#f5ecde] text-[#b8842f]'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <strong className="font-body block text-[15.5px] font-semibold leading-snug text-[#2a1d2e]">
                      {item.q}
                    </strong>
                    <small className="font-body mt-0.5 block text-[13px] text-[#7a6a7e]">
                      {item.sub}
                    </small>
                  </span>
                  <span className={`transition-colors duration-200 ${isOpen ? 'text-[#b8842f]' : 'text-[#7a6a7e]'}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[400px]' : 'max-h-0'
                  }`}
                >
                  <p className="font-body pb-6 pl-[72px] pr-6 text-[15px] leading-relaxed text-[#4a3a4f]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER (minimal) ────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#1f1322] px-6 pb-8 pt-10">
      <div className="mx-auto max-w-3xl">
        {/* Top row */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[rgba(251,246,238,0.08)] pb-6 sm:flex-row sm:items-center">
          {/* Logo */}
          <span className="font-display text-[18px] font-medium text-[#fbf6ee]">
            Helena <em className="italic text-[#e8b86a]">Menadue</em>
          </span>
          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:helena@beautylish.com.au"
              className="font-body text-[13px] text-[rgba(251,246,238,0.55)] transition-colors duration-200 hover:text-[#e8b86a]"
            >
              helena@beautylish.com.au
            </a>
            <a
              href="https://www.instagram.com/helenawellnesscoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-[rgba(251,246,238,0.55)] transition-colors duration-200 hover:text-[#e8b86a]"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/helena.selfworthcoach"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-[rgba(251,246,238,0.55)] transition-colors duration-200 hover:text-[#e8b86a]"
            >
              Facebook
            </a>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span className="font-body text-[12px] text-[rgba(251,246,238,0.35)]">
            © 2026 Helena Menadue
          </span>
          <div className="flex gap-5">
            <a href="#" className="font-body text-[12px] text-[rgba(251,246,238,0.35)] hover:text-[rgba(251,246,238,0.6)] transition-colors duration-200">Privacy</a>
            <a href="#" className="font-body text-[12px] text-[rgba(251,246,238,0.35)] hover:text-[rgba(251,246,238,0.6)] transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ThankYouPage() {
  return (
    <main className="min-h-screen antialiased">
      <Nav />
      <Hero />
      <BeforeWeTalk />
      <Stories />
      <FAQ />
      <Footer />
    </main>
  );
}
