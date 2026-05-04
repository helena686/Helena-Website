import { CheckIcon, XIcon } from './Icons';

const gain = [
  {
    h: 'A Reclaimed Sense of Self',
    p: 'Wake up knowing who you are again — clear on your values, your voice, and what you actually want.',
  },
  {
    h: 'Healthy, Honest Relationships',
    p: 'Set the kind of boundaries that come from self-respect, not fear. Choose people who choose you back.',
  },
  {
    h: 'Inner Calm & Clarity',
    p: 'Feel grounded in your own body. Quiet the inner critic. Trust your decisions again.',
  },
  {
    h: 'A Purpose That Pulls You Forward',
    p: 'Reconnect with the dreams you tucked away. Rebuild a life that excites you to wake up to.',
  },
  {
    h: 'Confidence That Comes From Within',
    p: 'Stop seeking permission. Stand in your worth — without apology, without performance.',
  },
];

const remove = [
  {
    h: 'The Weight of Toxic Patterns',
    p: 'Release what tethered you to people and dynamics that made you smaller. You are allowed to outgrow them.',
  },
  {
    h: 'Constant Self-Doubt',
    p: "Quiet the voice that tells you you're too much, not enough, or asking for too much. It's lying.",
  },
  {
    h: 'Living for Everyone But You',
    p: 'Step out of the role of fixer, pleaser, and emotional caretaker. Let yourself be the one who is held.',
  },
  {
    h: 'The Fog of Feeling Lost',
    p: 'No more drifting through days that feel grey. Find direction without forcing it.',
  },
  {
    h: 'Hopelessness & Burnout',
    p: 'Move from depleted and disconnected to alive, present, and actually here for your own life.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container text-center">
        <div className="section-eyebrow">Your Journey</div>
        <h2 className="section-title">
          What you&apos;ll <em>gain</em> · what you&apos;ll <em>release</em>
        </h2>
        <p className="section-lead">
          The patterns you&apos;ve been carrying for years, and what life looks like once
          they&apos;re not running you anymore.
        </p>

        <div className="compare">
          <div className="compare-col compare-col--gain">
            <header className="compare-header">
              <div className="compare-badge compare-badge--gain">
                <CheckIcon />
              </div>
              <h3>What You&apos;ll Gain</h3>
              <p>The woman underneath all of it</p>
            </header>
            <ul className="compare-list">
              {gain.map((it, i) => (
                <li className="compare-item compare-item--gain" key={i}>
                  <span className="compare-item-icon">
                    <CheckIcon />
                  </span>
                  <div>
                    <h4>{it.h}</h4>
                    <p>{it.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-col compare-col--remove">
            <header className="compare-header">
              <div className="compare-badge compare-badge--remove">
                <XIcon />
              </div>
              <h3>What You&apos;ll Release</h3>
              <p>What was never yours to hold</p>
            </header>
            <ul className="compare-list">
              {remove.map((it, i) => (
                <li className="compare-item compare-item--remove" key={i}>
                  <span className="compare-item-icon">
                    <XIcon />
                  </span>
                  <div>
                    <h4>{it.h}</h4>
                    <p>{it.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="callout">
          This is the work. Not pretending you are healed. Actually being it.
        </div>
      </div>
    </section>
  );
}
