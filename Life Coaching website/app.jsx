/* global React, ReactDOM, Nav, Hero, Intro, WhatIsSection, About, Journey, Stories, FAQ, BookSection, Footer */
/* global useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakText */
const { useState, useEffect } = React;

// Tweaks defaults — wrapped in EDITMODE markers so the host can persist edits.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentPreset": "gold",
  "heroLine1": "Heal what the relationship broke.",
  "heroLine2": "Get to the root of why you keep ending up here"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  gold:    { '--accent': '#d4a04a', '--accent-deep': '#b8842f', '--gold-400': '#e8b86a', '--gold-500': '#d4a04a', '--gold-600': '#b8842f' },
  rose:    { '--accent': '#c97863', '--accent-deep': '#a35a47', '--gold-400': '#e8b4a8', '--gold-500': '#c97863', '--gold-600': '#a35a47' },
  sage:    { '--accent': '#7a9577', '--accent-deep': '#5b7459', '--gold-400': '#9bb39a', '--gold-500': '#7a9577', '--gold-600': '#5b7459' },
  plum:    { '--accent': '#8e5a7e', '--accent-deep': '#5a3866', '--gold-400': '#c79bb8', '--gold-500': '#8e5a7e', '--gold-600': '#5a3866' },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [showMore, setShowMore] = useState(false);

  // Apply accent preset live
  useEffect(() => {
    const preset = ACCENT_PRESETS[tweaks.accentPreset] || ACCENT_PRESETS.gold;
    Object.entries(preset).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [tweaks.accentPreset]);

  return (
    <>
      <Nav />
      <main>
        <Hero heroLine1={tweaks.heroLine1} heroLine2={tweaks.heroLine2} />
        <Intro />
        <WhatIsSection />
        <About />
        <Journey />
        <Stories showMore={showMore} setShowMore={setShowMore} />
        <FAQ />
        <BookSection />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent palette" subtitle="Shift the warm-light hue across the whole site">
          <TweakRadio
            value={tweaks.accentPreset}
            onChange={(v) => setTweak('accentPreset', v)}
            options={[
              { value: 'gold', label: 'Gold' },
              { value: 'rose', label: 'Rose' },
              { value: 'sage', label: 'Sage' },
              { value: 'plum', label: 'Plum' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero copy" subtitle="The first thing they read">
          <TweakText label="Line 1" value={tweaks.heroLine1} onChange={(v) => setTweak('heroLine1', v)} />
          <TweakText label="Line 2 (italicised)" value={tweaks.heroLine2} onChange={(v) => setTweak('heroLine2', v)} multiline />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
