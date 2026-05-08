import CalendlyButton from './CalendlyButton';

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav-logo whitespace-nowrap text-[15px] md:text-[18px]">
        <span>
          Helena <em style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Menadue</em>
        </span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <CalendlyButton className="nav-cta">Book&nbsp;a&nbsp;call</CalendlyButton>
    </nav>
  );
}
