/* global React, Icon */
const { useState: useStateNav } = React;

// =================================================================
// NAV
// =================================================================
function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav-logo">
        <span>Luminous <em style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Life</em></span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#book" className="nav-cta" style={{ whiteSpace: 'nowrap' }}>Book&nbsp;a&nbsp;call</a>
    </nav>);

}

// =================================================================
// HERO
// =================================================================
function Hero({ heroLine1, heroLine2 }) {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-portrait" data-label="Portrait of Helena · soft natural light">
          <div className="hero-portrait-glow"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Now accepting 1:1 clients · 2026
        </div>

        <h1 className="hero-title">
          <span className="hero-title-1" style={{ fontSize: "62px" }}>{heroLine1}</span>
          <span className="hero-title-2" style={{ lineHeight: "0.8" }}><em style={{ fontSize: "62px", lineHeight: "1" }}>{heroLine2}</em></span>
        </h1>

        <p className="hero-sub">Coaching for women rebuilding themselves after toxic and narcissistic relationships. We work at the root. The trauma, the patterns, the self-abandonment. So this is the last time.


        </p>

        <div className="hero-cta-row">
          <a href="#book" className="btn btn--primary btn--lg">
            Book a Discovery Call <Icon.ArrowRight />
          </a>
          <a href="#about" className="hero-link">
            Meet Helena <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <a href="#intro" className="scroll-indicator" aria-label="Scroll">
        <Icon.ArrowDown />
      </a>
    </section>);

}

// =================================================================
// INTRO + 3 PILLARS
// =================================================================
function Intro() {
  const pillars = [
  {
    icon: <Icon.Heart />,
    title: 'Heal the Root',
    body: "We don't just talk about what happened. We use hypnotherapy and nervous system work to clear the trauma at its source, so it stops running you."
  },
  {
    icon: <Icon.Compass />,
    title: 'Rediscover Yourself',
    body: "Stop second-guessing every feeling. Stop apologising for taking up space. Come back to a version of you that knows what's real and what isn't."
  },
  {
    icon: <Icon.Bloom />,
    title: 'Break the Pattern',
    body: 'So this is the last time. No more falling for the same person in different clothes. No more losing yourself trying to be loved.'
  }];


  const promises = [
  { icon: '✦', text: "You shame yourself for being 'too sensitive'" },
  { icon: '☾', text: "You keep wondering if you were the problem." },
  { icon: '❀', text: "You keep ending up in the same place, with different people" }];


  return (
    <section id="intro" className="section">
      <div className="container text-center">
        <div className="section-eyebrow">IF YOU'RE HERE, YOU ALREADY KNOW</div>
        <h2 className="section-title" style={{ fontSize: "56px" }}>
          You&apos;ve been telling yourself ·<br /><em>it wasn&apos;t that bad</em> · for a long time.
        </h2>
        <p className="section-lead" style={{ width: "668px", height: "120px" }}>
          <strong></strong> To everyone else, you're the woman who has it together. The strong one. The one everyone leans on. But in the quiet moments, you know how much of you didn't make it out. And how tired you are of pretending you did.
        

        </p>

        <ul className="promise-list">
          {promises.map((p, i) =>
          <li key={i}><span className="promise-icon">{p.icon}</span>{p.text}</li>
          )}
        </ul>

        <div className="pillars">
          {pillars.map((p, i) =>
          <article className="pillar" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          )}
        </div>

        <div className="callout">None of this is who you are. It's what was done to you. And it can be undone.


        </div>

        <a href="#book" className="btn btn--dark btn--lg">Book a Discovery Call</a>
      </div>
    </section>);

}

window.Nav = Nav;
window.Hero = Hero;
window.Intro = Intro;