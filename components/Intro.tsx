import CalendlyButton from './CalendlyButton';
import { HeartIcon, CompassIcon, BloomIcon } from './Icons';

const pillars = [
  {
    icon: <HeartIcon />,
    title: 'Heal the Root',
    body: "I don't just talk about what happened. I use hypnotherapy and nervous system work to clear the trauma at its source, so it stops running you.",
  },
  {
    icon: <CompassIcon />,
    title: 'Rediscover Yourself',
    body: "Stop second-guessing every feeling. Stop apologising for taking up space. Come back to a version of you that knows what's real and what isn't.",
  },
  {
    icon: <BloomIcon />,
    title: 'Break the Pattern',
    body: 'So this is the last time. No more falling for the same person in different clothes. No more losing yourself trying to be loved.',
  },
];

const promises = [
  { icon: '✦', text: 'You shame yourself for being “too sensitive”' },
  { icon: '☾', text: 'You keep wondering if you were the problem.' },
  { icon: '❀', text: 'You keep ending up in the same place, with different people' },
];

export default function Intro() {
  return (
    <section id="intro" className="section">
      <div className="container text-center">
        <div className="section-eyebrow">IF YOU&apos;RE HERE, YOU ALREADY KNOW</div>
        <h2 className="section-title">
          You&apos;ve been telling yourself
          <br />
          <em>it wasn&apos;t that bad</em> · for a long time.
        </h2>
        <p className="section-lead">
          To everyone else, you&apos;re the woman who has it together. The strong one. The one
          everyone leans on. But in the quiet moments, you know how much of you didn&apos;t make
          it out. And how tired you are of pretending you did.
        </p>

        <ul className="promise-list">
          {promises.map((p, i) => (
            <li key={i}>
              <span className="promise-icon">{p.icon}</span>
              {p.text}
            </li>
          ))}
        </ul>

        <div className="pillars">
          {pillars.map((p, i) => (
            <article className="pillar" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>

        <div className="callout">
          None of this is who you are. It&apos;s what was done to you. And it can be undone.
        </div>

        <CalendlyButton className="btn btn--dark btn--lg">Book a Clarity Call</CalendlyButton>
      </div>
    </section>
  );
}
