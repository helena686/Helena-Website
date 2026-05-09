import Image from 'next/image';
import CalendlyButton from './CalendlyButton';
import { ArrowRightIcon, QuoteIcon } from './Icons';

export default function About() {
  return (
    <section id="about" className="section section--lg about-section">
      <div className="container about-grid">
        <div className="about-portrait-wrap">
          <div className="about-portrait">
            <Image
              src="/assets/helena-about.jpg"
              alt="Helena Menadue"
              fill
              className="object-cover object-center"
              sizes="(max-width: 900px) 400px, 460px"
            />
          </div>
          <div className="about-decor--2" />
          <div className="about-quote">
            <QuoteIcon />
            <p>
              &ldquo;You don&apos;t need to become a new woman. Come home to the one you&apos;ve
              been hiding.&rdquo;
            </p>
          </div>
        </div>

        <div className="about-text">
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(20px, 5vw, 48px)' }}
          >
            I&apos;ve walked this road. <em>Now I walk it with you.</em>
          </h2>

          <p>
            I&apos;m Helena. I know what it&apos;s like to lose yourself inside a relationship,
            because I lived it. I raised four children alone while quietly disappearing inside.
            I survived cancer and realised it wasn&apos;t the cancer that almost killed me.
            It was the years of putting myself last.
          </p>

          <p>
            I grew up in Egypt, in a culture that taught women their job was to be smaller,
            quieter, easier to love. I performed that role for decades. By the time I got out,
            I didn&apos;t know who I was without it. I had to find her. And she&apos;s the one
            writing this to you now.
          </p>

          <p>
            That&apos;s the work I do with my clients. Not because I read about it in a book.
            Because I lived it, healed it, and built the methodology I now use to walk other women
            through it. Tools I needed myself. Tools no-one handed to me. I hand them to you.
          </p>

          <ul className="credentials">
            <li>
              <span className="cred-dot" />
              8 years coaching women through emotional and relational trauma
            </li>
            <li>
              <span className="cred-dot" />
              Certified in Hypnotherapy, Neuroscience Therapy, and Energy Healing
            </li>
            <li>
              <span className="cred-dot" />
              Mother of four · Cancer survivor · Speaks English &amp; Arabic
            </li>
          </ul>

          <CalendlyButton className="btn btn--primary btn--lg" style={{ marginTop: 12 }}>
            Book a Clarity Call <ArrowRightIcon />
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
