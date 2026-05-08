import CalendlyButton from './CalendlyButton';
import { ArrowRightIcon } from './Icons';

export default function BookSection() {
  return (
    <section id="book" className="section book-section">
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">Begin</div>

        {/* clamp floor lowered from 36px → 22px so it scales down on phones */}
        <h2
          className="section-title"
          style={{ fontSize: 'clamp(22px, 6vw, 64px)' }}
        >
          Your next chapter <em>starts here.</em>
        </h2>

        {/* mb-8 on mobile (32px), mb-10 on desktop (40px) */}
        <p className="section-lead mb-14 md:mb-12">
          A free, 30 minutes call. Just you and me. We&apos;ll talk through what&apos;s been
          weighing on you, what you want different, and whether this work is the right fit.
          No pitch. No pressure. Just a real conversation.
        </p>

        {/* btn--book: 22px/44px padding on desktop, 14px/24px on mobile (defined in globals.css) */}
        <CalendlyButton className="btn btn--primary btn--book">
          Book a Free Call with Helena <ArrowRightIcon />
        </CalendlyButton>

        <p className="form-note mt-8">
          Free · 30 minutes · No obligation
        </p>
      </div>
    </section>
  );
}
