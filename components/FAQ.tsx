'use client';

import { useState } from 'react';
import { ChevronIcon } from './Icons';

const items = [
  {
    q: 'What if I am still in the relationship?',
    sub: "You don't need to have left",
    a: "You don't need to have left. Some of the most powerful work happens with women still inside it, getting clear, regulating their nervous systems, and making the decisions that are right for them, in their own time. You're not here to be told what to do. You're here to come back to your own knowing.",
  },
  {
    q: "It has been years. Shouldn't I be over it by now?",
    sub: "Trauma doesn't follow a timeline",
    a: "No. Unresolved trauma doesn't just fade — it lives in the nervous system until it's addressed. The fact that you're still carrying it isn't a failure. It's information. And it means the root was never reached. That's exactly what we work on.",
  },
  {
    q: "I've been in therapy for years. How is this different?",
    sub: 'Beyond talk therapy',
    a: "Therapy can give you insight into why you are the way you are. This work changes it. I use hypnotherapy, neuroscience, and nervous-system regulation to reach the part of you that talk can't access — the subconscious, the body, the place where the patterns actually live. Most of my clients have done years of therapy. They come here when they're ready for something to actually shift.",
  },
  {
    q: 'Is this therapy?',
    sub: 'The difference between coaching and therapy',
    a: "No. I'm a coach, not a therapist. Therapy looks back to understand why. This work goes into the body and subconscious to change what's there. If you're in active crisis or need clinical mental-health support, I'll always tell you and refer you to someone qualified. Many of my clients work with both a therapist and me — therapy holds the diagnosis, I do the rewiring.",
  },
  {
    q: "What if I can't talk about it?",
    sub: "You don't have to",
    a: "You don't have to relive it to release it. I don't need to go over the story again and again. I work with the nervous system and the subconscious — which means I can shift things without you having to narrate every detail. Many women find that a relief.",
  },
  {
    q: 'What does it cost?',
    sub: 'Investment & payment plans',
    a: "The full program is six weeks of 1:1 work, including weekly sessions, voice-note support between calls, and the tools you'll keep using long after we're done. Pricing is shared on the discovery call so you can ask about payment plans and decide what's right for you, with no pressure to commit on the spot.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="section">
      <div className="container text-center">
        <div className="section-eyebrow">Common Questions</div>
        <h2 className="section-title">Before you begin</h2>
        <p className="section-lead">
          The questions women most often ask before stepping into this work.
          Don&apos;t see yours? Bring it to the discovery call.
        </p>

        <div className="faq-list">
          {items.map((it, i) => (
            <div
              className="faq-item"
              key={i}
              data-open={open === i ? 'true' : 'false'}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q-text">
                  <strong>{it.q}</strong>
                  <small>{it.sub}</small>
                </span>
                <span className="faq-chevron">
                  <ChevronIcon />
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
