export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div
              className="nav-logo"
              style={{ fontSize: 22, marginBottom: 16, display: 'flex' }}
            >
              <span style={{ color: 'var(--cream-50)' }}>
                Luminous{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Life</em>
              </span>
            </div>
            <p style={{ maxWidth: 360, lineHeight: 1.6 }}>
              Coaching for women rebuilding themselves after toxic and narcissistic
              relationships. Helena Menadue — Trauma-informed coach · Australia.
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
              <li><a href="mailto:hello@luminouslife.co">hello@luminouslife.co</a></li>
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
    </footer>
  );
}
