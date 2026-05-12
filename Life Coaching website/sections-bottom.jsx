/* global React, Icon */
// useStateBottom removed — using useState directly

// =================================================================
// JOURNEY — gain / remove
// =================================================================
function Journey() {
  const gain = [
  { h: 'A Reclaimed Sense of Self', p: 'Wake up knowing who you are again — clear on your values, your voice, and what you actually want.' },
  { h: 'Healthy, Honest Relationships', p: 'Set the kind of boundaries that come from self-respect, not fear. Choose people who choose you back.' },
  { h: 'Inner Calm & Clarity', p: 'Feel grounded in your own body. Quiet the inner critic. Trust your decisions again.' },
  { h: 'A Purpose That Pulls You Forward', p: 'Reconnect with the dreams you tucked away. Rebuild a life that excites you to wake up to.' },
  { h: 'Confidence That Comes From Within', p: 'Stop seeking permission. Stand in your worth — without apology, without performance.' }];

  const remove = [
  { h: 'The Weight of Toxic Patterns', p: 'Release what tethered you to people and dynamics that made you smaller. You are allowed to outgrow them.' },
  { h: 'Constant Self-Doubt', p: 'Quiet the voice that tells you you\u2019re too much, not enough, or asking for too much. It\u2019s lying.' },
  { h: 'Living for Everyone But You', p: 'Step out of the role of fixer, pleaser, and emotional caretaker. Let yourself be the one who is held.' },
  { h: 'The Fog of Feeling Lost', p: 'No more drifting through days that feel grey. Find direction without forcing it.' },
  { h: 'Hopelessness & Burnout', p: 'Move from depleted and disconnected to alive, present, and actually here for your own life.' }];


  return (
    <section id="journey" className="section">
      <div className="container text-center">
        <div className="section-eyebrow">Your Journey</div>
        <h2 className="section-title">What you'll <em>gain</em> · what you'll <em>release</em></h2>
        <p className="section-lead">The patterns you've been carrying for years, and what life looks like once they're not running you anymore.


        </p>

        <div className="compare">
          <div className="compare-col compare-col--gain">
            <header className="compare-header">
              <div className="compare-badge compare-badge--gain"><Icon.Check /></div>
              <h3>What You'll Gain</h3>
              <p>The woman underneath all of it</p>
            </header>
            <ul className="compare-list">
              {gain.map((it, i) =>
              <li className="compare-item compare-item--gain" key={i}>
                  <span className="compare-item-icon"><Icon.Check /></span>
                  <div>
                    <h4 dangerouslySetInnerHTML={{ __html: it.h }} />
                    <p dangerouslySetInnerHTML={{ __html: it.p }} />
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="compare-col compare-col--remove">
            <header className="compare-header">
              <div className="compare-badge compare-badge--remove"><Icon.X /></div>
              <h3>What You'll Release</h3>
              <p>What was never yours to hold</p>
            </header>
            <ul className="compare-list">
              {remove.map((it, i) =>
              <li className="compare-item compare-item--remove" key={i}>
                  <span className="compare-item-icon"><Icon.X /></span>
                  <div>
                    <h4 dangerouslySetInnerHTML={{ __html: it.h }} />
                    <p dangerouslySetInnerHTML={{ __html: it.p }} />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="callout">
          This is the work. Not pretending you are healed. Actually being it.
        </div>
      </div>
    </section>);

}

// =================================================================
// REAL TRANSFORMATIONS GALLERY
// =================================================================
function Stories({ showMore, setShowMore }) {
  const items = [
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' },
  { label: 'Client Story', tone: 'plum' },
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' },
  { label: 'Client Story', tone: 'plum' },
  { label: 'Client Story', tone: 'rose' },
  { label: 'Client Story', tone: 'gold' }];

  const visible = showMore ? items : items.slice(0, 4);

  return (
    <section id="stories" className="dark-section angled-both">
      <div className="container text-center" style={{ position: 'relative', zIndex: 1, paddingTop: 56, paddingBottom: 56 }}>
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>Real Stories</div>
        <h2 className="section-title">Women, transformed</h2>
        <p style={{ color: 'rgba(251,246,238,0.75)', maxWidth: 540, margin: '0 auto 48px' }}>
          A small glimpse of the brave women who chose themselves —
          and the lives they built on the other side.
        </p>

        <div className="gallery">
          {visible.map((it, i) =>
          <div className={`gallery-item gallery-item--${it.tone}`} key={i}>
              <div className="gallery-text-card">
                <span>{it.label}</span>
              </div>
            </div>
          )}
        </div>

        <button className="btn btn--primary btn--lg" style={{ marginTop: 40 }} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show fewer stories' : 'Show more stories'} <Icon.Chevron style={{ transform: showMore ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
        </button>
      </div>
    </section>);

}

// =================================================================
// FAQ
// =================================================================
function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
  {
    q: 'What if I am still in the relationship?',
    sub: 'You don\u2019t need to have left',
    a: 'You don\u2019t need to have left. Some of the most powerful work happens with women still inside it, getting clear, regulating their nervous systems, and making the decisions that are right for them, in their own time. You\u2019re not here to be told what to do. You\u2019re here to come back to your own knowing.'
  },
  {
    q: 'It has been years. Shouldn\u2019t I be over it by now?',
    sub: 'Trauma doesn\u2019t follow a timeline',
    a: 'No. Unresolved trauma doesn\u2019t just fade \u2014 it lives in the nervous system until it\u2019s addressed. The fact that you\u2019re still carrying it isn\u2019t a failure. It\u2019s information. And it means the root was never reached. That\u2019s exactly what we work on.'
  },
  {
    q: 'I\u2019ve been in therapy for years. How is this different?',
    sub: 'Beyond talk therapy',
    a: 'Therapy can give you insight into why you are the way you are. This work changes it. We use hypnotherapy, neuroscience, and nervous-system regulation to reach the part of you that talk can\u2019t access \u2014 the subconscious, the body, the place where the patterns actually live. Most of my clients have done years of therapy. They come here when they\u2019re ready for something to actually shift.'
  },
  {
    q: 'Is this therapy?',
    sub: 'The difference between coaching and therapy',
    a: 'No. I\u2019m a coach, not a therapist. Therapy looks back to understand why. This work goes into the body and subconscious to change what\u2019s there. If you\u2019re in active crisis or need clinical mental-health support, I\u2019ll always tell you and refer you to someone qualified. Many of my clients work with both a therapist and me \u2014 therapy holds the diagnosis, I do the rewiring.'
  },
  {
    q: 'What if I can\u2019t talk about it?',
    sub: 'You don\u2019t have to',
    a: 'You don\u2019t have to relive it to release it. We don\u2019t need to go over the story again and again. We work with the nervous system and the subconscious \u2014 which means we can shift things without you having to narrate every detail. Many women find that a relief.'
  },
  {
    q: 'What does it cost?',
    sub: 'Investment & payment plans',
    a: 'The full program is six weeks of 1:1 work, including weekly sessions, voice-note support between calls, and the tools you\u2019ll keep using long after we\u2019re done. Pricing is shared on the discovery call so you can ask about payment plans and decide what\u2019s right for you, with no pressure to commit on the spot.'
  }];


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
          {items.map((it, i) =>
          <div className="faq-item" key={i} data-open={open === i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q-text">
                  <strong>{it.q}</strong>
                  <small>{it.sub}</small>
                </span>
                <span className="faq-chevron"><Icon.Chevron /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// =================================================================
// FINAL CTA / BOOKING
// =================================================================
function BookSection() {
  return (
    <section id="book" className="section book-section">
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">Begin</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Your next chapter <em>starts here.</em>
        </h2>
        <p className="section-lead" style={{ marginBottom: 40 }}>
          A free, 30 minutes call. Just you and me. We&apos;ll talk through what&apos;s been weighing on you, what you want different, and whether this work is the right fit. No pitch. No pressure. Just a real conversation.
        </p>
        <a href="#" className="btn btn--primary btn--lg" style={{ padding: '22px 44px', fontSize: 17 }}>
          Book a Free Call with Helena <Icon.ArrowRight />
        </a>
        <p className="form-note" style={{ marginTop: 20 }}>Free · 30 minutes · No obligation</p>
      </div>
    </section>);

}

// =================================================================
// FOOTER
// =================================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ fontSize: 22, marginBottom: 16 }}>
              <span style={{ color: 'var(--cream-50)' }}>Luminous <em style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Life</em></span>
            </div>
            <p style={{ maxWidth: 360, lineHeight: 1.6 }}>
              Coaching for women coming home to themselves. Helena Menadue · holistic life
              &amp; relationship coach.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About Helena</a></li>
              <li><a href="#approach">The Approach</a></li>
              <li><a href="#journey">Your Journey</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="#book">Book a call</a></li>
              <li><a href="#">hello@luminouslife.co</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Substack</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Luminous Life · Helena Menadue. Made with care.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>);

}

window.Journey = Journey;
window.Stories = Stories;
window.FAQ = FAQ;
window.BookSection = BookSection;
window.Footer = Footer;