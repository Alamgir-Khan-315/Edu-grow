import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Briefcase, Sparkles, Zap, Sun, Waves, Menu, X, ChevronDown } from 'lucide-react'

const themeIcons = {
  neon: <Zap size={15} />,
  light: <Sun size={15} />,
  ocean: <Waves size={15} />
}

const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Services', to: '/services', dropdown: [
      { label: 'Social Media Management', to: '/services#social-media-management' },
      { label: 'Content Creation', to: '/services#content-creation' },
      { label: 'Analytics & Reporting', to: '/services#analytics-reporting' },
      { label: 'Paid Advertising', to: '/services#paid-advertising' },
      { label: 'Influencer Marketing', to: '/services#influencer-marketing' },
    ]
  },
  {
    label: 'Events', to: '/events', dropdown: [
      { label: 'Event Planning', to: '/events#event-planning' },
      { label: 'Videography & Photography', to: '/events#videography-photography' },
      { label: 'Event Hosting', to: '/events#event-hosting' },
      { label: 'Event Promotion', to: '/events#event-promotion' },
      { label: 'Virtual Events', to: '/events#virtual-events' },
    ]
  },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ theme: t, themeList, activeTheme, setActiveTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const toggleMobileExpand = (label, e) => {
    e.preventDefault()
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? t.bgNav : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: `1px solid ${scrolled ? t.border : 'transparent'}`,
        transition: 'all .35s cubic-bezier(.4,0,.2,1)',
      }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16 }}>

          {/* ── Logo ── */}
          <Link to="/" onClick={() => setOpen(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ width: 'clamp(100px, 15vw, 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src="/Logo/PM-removebg-preview.png" alt="Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
            {/* <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: t.textHeading }}>
              Edugrow<span style={{ color: t.accent }}>.</span>
            </span> */}
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {NAV.map(({ label, to, dropdown }) => (
              <div key={label} className="nav-item">
                <NavLink to={to} end={to === '/'}
                  style={({ isActive }) => ({
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 99, fontSize: 14, fontWeight: 500,
                    textDecoration: 'none', transition: 'all .2s',
                    color: isActive ? t.accent : t.text,
                    background: isActive ? `rgba(${t.rgb},.1)` : 'transparent',
                  })}
                  onMouseEnter={e => { if (!e.currentTarget.style.background.includes('rgba')) { e.currentTarget.style.background = `rgba(${t.rgb},.07)`; e.currentTarget.style.color = t.accent } }}
                  onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = t.text } }}
                >
                  {label}
                  {dropdown && <ChevronDown size={14} style={{ opacity: 0.6, marginLeft: 4 }} />}
                </NavLink>

                {/* Desktop Dropdown */}
                {dropdown && (
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner" style={{ background: t.bgCard, border: `1px solid ${t.border}` }}>
                      {dropdown.map(dropItem => (
                        <Link key={dropItem.label} to={dropItem.to}
                          style={{
                            display: 'block', padding: '8px 12px', fontSize: 13, fontWeight: 500,
                            color: t.text, textDecoration: 'none', borderRadius: 8, transition: 'all .2s'
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = `rgba(${t.rgb},.06)`; e.currentTarget.style.color = t.accent }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = t.text }}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Right side controls ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 2vw, 12px)' }}>
            {/* Theme switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: `rgba(${t.rgb},.08)`, border: `1px solid ${t.border}`, borderRadius: 99, padding: '3px 5px' }}>
              {themeList.map(th => (
                <button key={th.id} onClick={() => setActiveTheme(th.id)} title={th.name}
                  style={{
                    width: 30, height: 30, borderRadius: '50%', border: 'none', cursor: 'pointer',
                    fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: activeTheme === th.id ? th.grad : 'transparent',
                    boxShadow: activeTheme === th.id ? th.glow : 'none',
                    transform: activeTheme === th.id ? 'scale(1.18)' : 'scale(1)',
                    transition: 'all .25s ease',
                  }}
                >{themeIcons[th.id] || th.emoji}</button>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link to="/contact" className="nav-cta btn btn-md" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>
              Get Started
            </Link>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              style={{
                background: `rgba(${t.rgb},.1)`, border: `1px solid ${t.border}`,
                borderRadius: 10, width: 40, height: 40, cursor: 'pointer',
                color: t.textHeading, fontSize: 18, display: 'none',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'all .2s',
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 99,
          background: t.bgCard,
          borderBottom: `1px solid ${t.border}`,
          transform: open ? 'translateY(0)' : 'translateY(-110%)',
          opacity: open ? 1 : 0,
          transition: 'transform .35s cubic-bezier(.4,0,.2,1), opacity .3s ease',
          pointerEvents: open ? 'auto' : 'none',
          boxShadow: open ? t.shadow : 'none',
          maxHeight: 'calc(100vh - 70px)',
          overflowY: 'auto'
        }}
      >
        <div className="wrap" style={{ paddingTop: 16, paddingBottom: 24 }}>
          {NAV.map(({ label, to, dropdown }) => (
            <div key={label} style={{ borderBottom: `1px solid ${t.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to={to} end={to === '/'} onClick={() => { if (!dropdown) setOpen(false) }}
                  style={({ isActive }) => ({
                    display: 'block', padding: '14px 0', fontSize: 16, fontWeight: 600,
                    textDecoration: 'none', flex: 1,
                    color: isActive ? t.accent : t.textHeading,
                    transition: 'color .2s',
                  })}
                >
                  {label}
                </NavLink>
                {dropdown && (
                  <button
                    onClick={(e) => toggleMobileExpand(label, e)}
                    style={{
                      background: 'none', border: 'none', color: t.textHeading, padding: '14px', cursor: 'pointer',
                      transform: mobileExpanded[label] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform .3s',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                  >
                    <ChevronDown size={16} />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown items */}
              {dropdown && mobileExpanded[label] && (
                <div style={{ paddingBottom: '14px', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {dropdown.map(dropItem => (
                    <Link key={dropItem.label} to={dropItem.to} onClick={() => setOpen(false)}
                      style={{ fontSize: 14, color: t.text, textDecoration: 'none' }}
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-md"
            style={{ background: t.grad, color: '#fff', marginTop: 20, display: 'flex', justifyContent: 'center', boxShadow: t.shadow }}>
            Get Started
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'rgba(0,0,0,.4)', backdropFilter: 'blur(4px)' }}
        />
      )}
    </>
  )
}
