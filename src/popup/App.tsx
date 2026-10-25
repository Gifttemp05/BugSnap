function BugMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M11 11.5h10a4 4 0 0 1 4 4v5a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5v-5a4 4 0 0 1 4-4Z" fill="currentColor" />
        <path d="M12 11a4 4 0 1 1 8 0M6 15h4m12 0h4M6 21h4m12 0h4M16 16v5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="m21.5 5.5 1 2.2 2.4.3-1.8 1.6.5 2.4-2.1-1.2-2.1 1.2.5-2.4-1.8-1.6 2.4-.3 1-2.2Z" fill="#F8C35B" />
      </svg>
    </div>
  )
}

export default function App() {
  return (
    <main className="popup-shell">
      <header className="topbar">
        <div className="brand">
          <BugMark />
          <div><div className="brand-name">BugSnap<span>®</span></div><div className="brand-caption">Make bugs easier to fix</div></div>
        </div>
        <button className="icon-button" aria-label="Settings" title="Settings">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" stroke="currentColor" strokeWidth="1.7"/><path d="m19.4 13.5 1.1.9-1.5 2.6-1.4-.5a7.8 7.8 0 0 1-1.5.9l-.3 1.5h-3l-.3-1.5a7.8 7.8 0 0 1-1.5-.9l-1.4.5-1.5-2.6 1.1-.9a7 7 0 0 1 0-1.8l-1.1-.9 1.5-2.6 1.4.5a7.8 7.8 0 0 1 1.5-.9l.3-1.5h3l.3 1.5a7.8 7.8 0 0 1 1.5.9l1.4-.5 1.5 2.6-1.1.9a7 7 0 0 1 0 1.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
        </button>
      </header>

      <section className="hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> READY WHEN YOU ARE</div>
        <h1>Found something<br />that doesn't look right?</h1>
        <p>Capture the moment. Add a few details.<br />Give your team a head start on the fix.</p>
        <button className="capture-button" type="button" disabled>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1.2-1.5h6.6L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8"/></svg>
          Capture a bug
          <span className="button-arrow">→</span>
        </button>
        <div className="capture-note"><span className="lock-icon">♢</span> Nothing is captured until you click</div>
      </section>

      <section className="status-card" aria-label="Monitoring status">
        <div className="status-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5 19 6v5.3c0 4.4-2.9 7.6-7 9.2-4.1-1.6-7-4.8-7-9.2V6l7-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 12h6m-3-3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="status-copy"><strong>Error monitoring</strong><span>Only starts when you choose</span></div>
        <div className="status-off"><i /> Off</div>
      </section>

      <section className="draft-row">
        <div className="draft-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 4.8h8l4 4v10.4H6V4.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M14 5v4h4M9 13h6m-6 3h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="draft-copy"><strong>Your saved reports</strong><span>Pick up where you left off</span></div>
        <div className="draft-count">0 <span>→</span></div>
      </section>

      <footer className="footer"><button type="button">Help &amp; privacy</button><span className="footer-dot">·</span><span>All data stays on this device</span></footer>
      <div className="setup-notice">Capture workflow is part of the next milestone.</div>
    </main>
  )
}
