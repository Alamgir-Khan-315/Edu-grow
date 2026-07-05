import { Link } from 'react-router-dom'

const COLS = {
  'Services': [
    { label: 'Social Media Management', to: '/services' },
    { label: 'Content Creation', to: '/services' },
    { label: 'Analytics & Reporting', to: '/services' },
    { label: 'Paid Advertising', to: '/services' },
    { label: 'Influencer Marketing', to: '/services' },
  ],
  'Events': [
    { label: 'Event Planning', to: '/events' },
    { label: 'Videography & Photography', to: '/events' },
    { label: 'Event Hosting', to: '/events' },
  ],
  'Company': [
    { label: 'Our Process', to: '/process' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'About', to: '/' },
  ],
}

const SOCIALS = ['in', '▶', '📘', '📸']

export default function Footer({ theme: t }) {
  const a = t.accent
  const lnk = { textDecoration: 'none', fontSize: 14, color: t.text, transition: 'color .2s', lineHeight: 2 }

  return (
    <footer style={{ background: t.bgSection, borderTop: `1px solid ${t.border}` }}>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 40 }}>
        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 140, display: 'flex', alignItems: 'center' }}>
                <img src="/Logo/PM-removebg-preview.png" alt="Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: t.text, maxWidth: 260, marginBottom: 20 }}>
              Your full-service social media &amp; events agency. We turn brands into communities and events into experiences.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map((s, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${t.border}`, background: `rgba(${t.rgb},.08)`, color: t.text, cursor: 'pointer', fontSize: 13, transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = `rgba(${t.rgb},.22)`; e.currentTarget.style.borderColor = a }}
                  onMouseLeave={e => { e.currentTarget.style.background = `rgba(${t.rgb},.08)`; e.currentTarget.style.borderColor = t.border }}
                >{s}</button>
              ))}
            </div>
          </div>

          {Object.entries(COLS).map(([heading, links]) => (
            <div key={heading}>
              <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: t.textHeading, marginBottom: 16 }}>{heading}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} style={lnk}
                      onMouseEnter={e => e.currentTarget.style.color = a}
                      onMouseLeave={e => e.currentTarget.style.color = t.text}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: `1px solid ${t.border}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: t.textMuted }}>© 2026 Edugrow Agency. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ ...lnk, fontSize: 13, color: t.textMuted }}
                onMouseEnter={e => e.currentTarget.style.color = a}
                onMouseLeave={e => e.currentTarget.style.color = t.textMuted}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
