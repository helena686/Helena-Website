/* global React, Icon */

// =================================================================
// "WHAT IS LUMINOUS LIFE" — dark angled section with method icons
// =================================================================
function WhatIsSection() {
  const principles = [
  { icon: <Icon.Heart />, label: 'Hypnotherapy' },
  { icon: <Icon.Sparkle />, label: 'Neuroscience' },
  { icon: <Icon.Sun />, label: 'Nervous System' },
  { icon: <Icon.Leaf />, label: 'Energy Healing' },
  { icon: <Icon.Bloom />, label: 'Embodiment' }];

  return (
    <section className="dark-section angled-both" id="approach">
      <div className="blob" style={{ background: 'var(--gold-500)', width: 400, height: 400, top: -100, left: -100 }}></div>
      <div className="blob" style={{ background: 'var(--rose-500)', width: 360, height: 360, bottom: -120, right: -80, opacity: 0.25 }}></div>

      <div className="container text-center" style={{ position: 'relative', zIndex: 1, paddingTop: 56, paddingBottom: 56, fontWeight: "300" }}>
        <div className="section-eyebrow" style={{ color: 'var(--gold-400)' }}>The Approach</div>
        <h2 className="section-title">We don't just talk. <em>We rewire.</em></h2>

        <p style={{ color: 'rgba(251,246,238,0.85)', maxWidth: 680, margin: '0 auto 16px', fontSize: 17, fontWeight: "500" }}>
          <strong style={{ color: 'var(--cream-50)' }}></strong> Talk therapy gives you insight. But insight doesn't stop the panic when his name comes up. It doesn't stop you from going back. The patterns aren't in your thinking mind. They're in your nervous system and your body. That's where we work.
        

        </p>

        <p style={{ color: 'rgba(251,246,238,0.7)', maxWidth: 640, margin: '0 auto 48px', fontSize: 15 }}>Sessions are 1:1 and online. Some weeks we go to the root with hypnotherapy. Some weeks we regulate the body before we touch the mind. There's no script. There's a method.



        </p>

        <div className="principle-grid">
          {principles.map((p, i) =>
          <div className="principle" key={i}>
              <div className="principle-icon">{p.icon}</div>
              <div className="principle-label">{p.label}</div>
            </div>
          )}
        </div>

        <p style={{ color: 'rgba(251,246,238,0.75)', margin: '40px auto 28px', maxWidth: 600, fontSize: 15 }}>Five modalities, one woman holding the space, working with what you actually need. Not a programme. A practice.


        </p>

        <a href="#book" className="btn btn--primary btn--lg">Book a Discovery Call</a>
      </div>
    </section>);

}

// =================================================================
// ABOUT HELENA
// =================================================================
function About() {
  return (
    <section id="about" className="section section--lg about-section">
      <div className="container about-grid">
        <div className="about-portrait-wrap">
          <div className="about-portrait" data-label="Helena Menadue · portrait"></div>
          <div className="about-decor about-decor--1"></div>
          <div className="about-decor about-decor--2"></div>
          <div className="about-quote">
            <Icon.Quote />
            <p>"You don't need to become a new woman. Come home to the one you've been hiding."</p>
          </div>
        </div>

        <div className="about-text">
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            I&apos;ve walked this road. <em>Now I walk it with you.</em>
          </h2>

          <p> I'm Helena. I know what it's like to lose yourself inside a relationship, because I lived it. I know what it's like to wake up one day and not recognise the woman in the mirror. To raise four children on your own while quietly disappearing inside. To survive a cancer diagnosis and realise it wasn't the cancer that almost killed you. It was the years of putting yourself last.




          </p>

          <p>I grew up in Egypt, in a culture that taught women their job was to be smaller, quieter, easier to love. I performed that role for decades. By the time I got out, I didn't know who I was without it. I had to find her. And she's the one writing this to you now.




          </p>

          <p>That's the work I do with my clients. Not because I read about it in a book. Because I lived it, healed it, and built the methodology I now use to walk other women through it. Tools I needed myself. Tools no-one handed to me. I hand them to you.




          </p>

          <ul className="credentials">
            <li><span className="cred-dot"></span> 8 years coaching women through emotional and relational trauma</li>
            <li><span className="cred-dot"></span> Certified in Hypnotherapy, Neuroscience Therapy, and Energy Healing</li>
            <li><span className="cred-dot"></span> Mother of four · Cancer survivor · Speaks English & Arabic</li>
          </ul>

          <a href="#book" className="btn btn--primary btn--lg" style={{ marginTop: 12 }}>
            Book a Discovery Call <Icon.ArrowRight />
          </a>
        </div>
      </div>
    </section>);

}

window.WhatIsSection = WhatIsSection;
window.About = About;