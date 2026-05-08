'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CalendlyButton from './CalendlyButton';
import { ChevronIcon, XIcon } from './Icons';

type Tone = 'rose' | 'gold' | 'plum';

interface Testimonial {
  name: string;
  paragraphs: string[];
  tone: Tone;
}

const testimonials: Testimonial[] = [
  {
    name: 'MICHELLE',
    tone: 'rose',
    paragraphs: [
      "I reached out to Helena because I was so full of anger, resentment, shame, guilt and unworthiness that it was affecting every single relationship in my life as well as seriously affecting my health. I was suicidal and had no idea how to be free. I had had enough of living inside my own hellish prison, a nightmare, but didn't know how to change it.",
      "Helena gently and compassionately guided me through a soul awakening journey.",
      "Everything I hoped I could be I now am. The life I hoped I could have I have. I'm remembering and living in the magic that is in me.",
      "I am no longer suicidal, I find joy in waking up every morning. My relationships are genuinely loving, I can't get enough of the beautiful people in my life. My health has improved beyond what I could have imagined and I've learned I have the power to do all of that within me. I am living a life full of my true essence. WOW, I'm so grateful 🙏 xxx",
    ],
  },
  {
    name: 'DONNA',
    tone: 'gold',
    paragraphs: [
      "I came to Helena defeated and disconnected from myself. I spent years in therapy it helped, but nothing ever lasted. So I gave myself one last chance, and that's when I found her.",
      "Helena listened in a way no one ever had. Not to fix me. Not to label me. Just to truly hear me.",
      "What I discovered through her program changed everything. I wasn't lost I was buried under pain and beliefs that were never even mine. And now that I've found myself again, I feel unstoppable.",
      "I know how to be me. I know how to live. And that is everything.",
      "Thank you, Helena. You guided me back to my true self.",
    ],
  },
  {
    name: 'LISA',
    tone: 'plum',
    paragraphs: [
      "When I found Helena, I was exhausted, emotionally drained, and questioning my worth in my relationship. I loved deeply but felt invisible, unheard, and afraid to speak up. I thought something was wrong with me.",
      "Helena helped me see that I wasn't broken I had just forgotten my value. With her guidance, I learned how to set boundaries without guilt and choose myself without fear.",
      "The shift was profound. My confidence grew, my voice returned, and my relationship transformed in ways I never imagined. More than anything, I finally feel strong, calm, and grounded within myself. Working with Helena changed my life.",
    ],
  },
  {
    name: 'JENNY',
    tone: 'rose',
    paragraphs: [
      "I came to Helena at a time when I felt completely disconnected from life. I was functioning on the outside but felt lost and empty inside. I didn't know who I was anymore or what my purpose was.",
      "Helena gently guided me back to myself. Through our work together, the fog began to lift. I started to trust myself again, feel aligned, and reconnect with who I truly am.",
      "Today, my life feels completely different. I have clarity, direction, and purpose. I've stepped into a new job that I love, and I wake up feeling grounded and excited about life. Helena didn't just help me find answers she helped me find me.",
    ],
  },
  {
    name: 'SANDRA',
    tone: 'gold',
    paragraphs: [
      "Before working with Helena, I wasn't really living I was just getting through each day. I felt numb, disconnected, and unsure of who I was beneath all the roles I was playing.",
      "Helena helped me slow down and truly look at my life with compassion instead of judgment. The life audit we did was life changing. For the first time, I understood myself, my patterns, and what I actually needed to feel alive again.",
      "I feel like a completely different woman now present, aware, and deeply connected to myself. I now know what it means to live, not just exist. Helena helped me rediscover my life.",
    ],
  },
  {
    name: 'WENDY',
    tone: 'plum',
    paragraphs: [
      "I kept attracting emotionally unavailable and toxic partners, and every time it ended, I felt more broken and unworthy. I started to believe that this was all I deserved.",
      "Working with Helena was a turning point. She helped me uncover the deep pattern behind my choices and guided me to truly know and value myself. For the first time, I learned what self respect and healthy love actually feel like.",
      "Today, my life looks completely different. I am in a loving relationship with a man who respects, values, and chooses me. The biggest change wasn't the relationship it was me. Helena helped me break the cycle and choose myself.",
    ],
  },
  {
    name: 'CLAIRE',
    tone: 'rose',
    paragraphs: [
      "Before working with Helena, I had seen many therapists and psychologists. I had done years of talking, but the emotional pain was still there. My trauma felt too deep, and I felt lost, disconnected, and exhausted from trying to survive every day.",
      "I reached a point where I didn't know what to do with my life anymore. I felt so overwhelmed by the pain that I didn't even want to be here. I felt broken and hopeless.",
      "From the very first session, Helena created something I had never experienced before a truly safe space. I felt seen, heard, and deeply held with compassion. For the first time, I didn't feel rushed, judged, or misunderstood. I felt safe enough to be vulnerable, and that changed everything.",
      "In just six weeks, my life has completely transformed. I feel grounded, calm, and connected to life again. I'm enjoying life, trusting myself, and feeling hopeful for the future.",
      "Helena didn't just help me heal she walked beside me with so much care and compassion. I want everyone to know about her and the incredible work she does. She saved me in ways I didn't think were possible.",
    ],
  },
  {
    name: 'EMMA S.',
    tone: 'gold',
    paragraphs: [
      "After seeing Helena, life coaching has been transformative for me. I've gained so much clarity, confidence, and direction in my life. I feel more empowered and able to tackle challenges with a positive mindset now.",
    ],
  },
];

export default function Stories() {
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [mounted, setMounted] = useState(false);

  // Mark as mounted so the portal can safely reference document.body
  useEffect(() => { setMounted(true); }, []);

  const visible = showMore ? testimonials : testimonials.slice(0, 4);

  // Close on Escape + lock body scroll while modal is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden'; // prevent page scroll behind overlay
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';       // always restore on unmount
    };
  }, [selected]);

  return (
    <>
    <section id="stories" className="dark-section angled-both">
      {/* relative z-10 renders content above background — pt-20 pb-24 preserved */}
      <div className="container text-center relative z-10 pt-20 pb-24 md:pt-14 md:pb-14">
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>
          Real Stories
        </div>
        <h2 className="section-title">Women, transformed</h2>

        <p
          className="w-full md:max-w-[540px] mx-auto mb-8 md:mb-12"
          style={{ color: 'rgba(251,246,238,0.75)' }}
        >
          The women who walked through this didn&apos;t become someone new. They came back to
          who they always were.
        </p>

        {/*
          Grid: 2-col mobile / 4-col desktop via .gallery CSS class (preserved).
          Each card is a <button> so the gradient from .gallery-item--{tone}
          shows correctly (class selector beats element selector in specificity).
        */}
        <div className="gallery">
          {visible.map((item) => (
            <button
              key={item.name}
              className={`gallery-item gallery-item--${item.tone}`}
              onClick={() => setSelected(item)}
              aria-label={`Read ${item.name}'s story`}
            >
              {/* gold tone = beige bg = dark text; rose & plum = white text */}
              {(() => {
                const dark = item.tone === 'gold';
                const nameColor   = dark ? '#2A1F2E' : '#ffffff';
                const bodyColor   = dark ? 'rgba(42,31,46,0.78)' : 'rgba(255,255,255,0.80)';
                const ctaColor    = dark ? '#2A1F2E' : '#ffffff';
                return (
                  <div className="absolute inset-0 flex flex-col h-full p-5 text-left">
                    <p className="font-bold text-lg tracking-wider" style={{ color: nameColor }}>
                      {item.name}
                    </p>
                    <div className="flex-grow mt-3">
                      <p className="font-normal text-base leading-relaxed line-clamp-6" style={{ color: bodyColor }}>
                        {item.paragraphs[0]}
                      </p>
                    </div>
                    <p className="mt-auto pt-4 text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity" style={{ color: ctaColor }}>
                      Read full story →
                    </p>
                  </div>
                );
              })()}
            </button>
          ))}
        </div>

        {/* Buttons: stacked on mobile, side-by-side from sm: (640px) */}
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

      {/*
        Portal: renders the modal as a direct child of document.body,
        completely escaping the section's overflow:hidden containment.
        This ensures the backdrop blur and overlay cover the entire viewport.
      */}
      {mounted && selected && createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: 'var(--plum-800)',
              border: '1px solid rgba(232,184,106,0.25)',
              boxShadow: 'var(--shadow-lg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header — always visible even when body scrolls */}
            <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-5 flex-shrink-0">
              <p
                className="font-bold text-xl tracking-wider"
                style={{ color: 'var(--gold-400)' }}
              >
                {selected.name}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="flex-shrink-0 transition-opacity hover:opacity-100 mt-1"
                style={{ color: 'rgba(251,246,238,0.45)' }}
                aria-label="Close"
              >
                <XIcon width={20} height={20} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-8 pb-8">
              {selected.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed mb-4 last:mb-0"
                  style={{ color: 'rgba(251,246,238,0.85)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
