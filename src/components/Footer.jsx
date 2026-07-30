import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa'

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
    { label: 'Plans & Pricing', to: '/plans' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'About', to: '/' },
  ],
}

const SOCIALS = [
  {
    icon: <FaLinkedinIn size={15} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/edugrow-digital_marketing/?viewAsMember=true',
    hoverColor: '#0A66C2',
    hoverBg: 'rgba(10,102,194,.14)',
  },
  {
    icon: <FaInstagram size={15} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/edugrow_digital/?hl=en',
    hoverColor: '#E1306C',
    hoverBg: 'rgba(225,48,108,.14)',
  },
  // { icon: <FaYoutube size={15} />,   label: 'YouTube',  href: '#', hoverColor: '#FF0000', hoverBg: 'rgba(255,0,0,.12)' },   // Uncomment when ready
  // { icon: <FaFacebookF size={15} />, label: 'Facebook', href: '#', hoverColor: '#1877F2', hoverBg: 'rgba(24,119,242,.14)' }, // Uncomment when ready
]

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
              {SOCIALS.map(({ icon, label, href, hoverColor, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: `1px solid ${t.border}`,
                    background: `rgba(${t.rgb},.08)`,
                    color: t.text,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .25s cubic-bezier(.4,0,.2,1)',
                    textDecoration: 'none',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = hoverColor;
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.background = hoverBg;
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.12)';
                    e.currentTarget.style.boxShadow = `0 6px 18px ${hoverBg}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = t.border;
                    e.currentTarget.style.color = t.text;
                    e.currentTarget.style.background = `rgba(${t.rgb},.08)`;
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {icon}
                </a>
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
