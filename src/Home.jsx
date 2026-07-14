import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import { Smartphone, Calendar, TrendingUp, Target, Star, Rocket, Quote, CheckCircle2, Users } from 'lucide-react'
import CountUp from '../components/CountUp'
import heroImg from '../assets/hero.png'

const STATS = [
  { n: '10+', label: 'School Covered' },
  { n: '100+', label: 'Workshops Conducted' },
  { n: '1M+', label: 'Monthly Reach' },
  { n: '50+', label: 'Events Produced' },
]

const HIGHLIGHTS = [
  { icon: <Smartphone size={28} strokeWidth={1.5} />, title: 'Social Media', desc: 'Full platform management — Instagram, TikTok, LinkedIn, X, YouTube. We handle posting, engagement and growth.', to: '/services' },
  { icon: <Calendar size={28} strokeWidth={1.5} />, title: 'Event Services', desc: 'End-to-end event planning, videography, photography and professional hosting services.', to: '/events' },
  { icon: <TrendingUp size={28} strokeWidth={1.5} />, title: 'Analytics', desc: 'Real-time reporting dashboards and monthly deep-dives to keep you ahead of the data.', to: '/services' },
  { icon: <Target size={28} strokeWidth={1.5} />, title: 'Paid Ads', desc: 'High-ROAS campaigns across Meta, TikTok, Google and YouTube — setup to scale.', to: '/services' },
]

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    role: 'Principal, The Learning Academy',
    initials: 'AR',
    rating: 5,
    quote: 'Edugrow helped us engage students through creative events and digital campaigns. Their team was professional, reliable, and exceeded our expectations.'
  },
  {
    name: 'Fatima Khan',
    role: 'Marketing Manager, Bright Future Education',
    initials: 'FK',
    rating: 5,
    quote: 'From event coverage to social media management, everything was executed flawlessly. Our online engagement grew significantly within a few months.'
  },
  {
    name: 'Usman Ali',
    role: 'Director, Aspire Youth Foundation',
    initials: 'UA',
    rating: 5,
    quote: 'The team understood our vision from day one. Their content, branding, and event execution helped us reach thousands of students across multiple schools.'
  }
]

function Blob({ t, style }) {
  return <div className="blob" style={{ background: `radial-gradient(circle, rgba(${t.rgb},.22), transparent 70%)`, ...style }} />
}

function Badge({ t, children }) {
  return (
    <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 20 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />
      {children}
    </span>
  )
}

export default function Home({ theme: t }) {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ background: t.bg, position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Blob t={t} style={{ width: 700, height: 700, top: -220, left: -220, opacity: .6 }} />
        <Blob t={t} style={{ width: 500, height: 500, bottom: -140, right: -140, opacity: .45 }} />

        <div className="wrap hero-grid" style={{
          position: 'relative', zIndex: 1, paddingTop: 140, paddingBottom: 90,
          display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(24px,5vw,64px)', alignItems: 'center'
        }}>
          {/* ── Left: copy ── */}
          <div>
            <Badge t={t}>Social Media &amp; Events Agency</Badge>

            <h1 className="hero-h font-display anim-up" style={{ color: t.textHeading, marginBottom: 22 }}>
              Grow Your{' '}
              <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Brand</span>
            </h1>

            <p className="anim-up2" style={{ fontSize: 18, lineHeight: 1.7, color: t.text, maxWidth: 480, marginBottom: 36 }}>
              We craft viral social strategies and produce unforgettable events — turning audiences into loyal communities.
            </p>

            <div className="anim-up3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link to="/services" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>Explore Services →</Link>
              <Link to="/contact" className="btn-outline btn" style={{ color: t.accent, borderColor: `rgba(${t.rgb},.35)`, border: `1.5px solid rgba(${t.rgb},.35)` }}>Talk to Us</Link>
            </div>

            {/* Stats bar */}
            <div className="anim-up4 stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(12px, 2.5vw, 28px)',
              paddingTop: 36,
              borderTop: `1px solid ${t.border}`
            }}>
              {STATS.map(({ n, label }) => (
                <div key={label}>
                  <div className="g-text font-display" style={{ backgroundImage: t.grad, fontSize: 'clamp(1.3rem, 3.4vw, 2.2rem)', fontWeight: 900, lineHeight: 1 }}>
                    <CountUp end={n} />
                  </div>
                  <div style={{ fontSize: 10.5, color: t.textMuted, marginTop: 6, letterSpacing: '.03em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="anim-up3 hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 420 }}>
            <div className="anim-float" style={{
              position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '1/1',
              borderRadius: '42% 58% 63% 37% / 45% 40% 60% 55%',
              background: t.grad, boxShadow: t.glow,
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', inset: 14, borderRadius: '42% 58% 63% 37% / 45% 40% 60% 55%',
                background: t.bgCard, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src={heroImg} alt="Edugrow" style={{ width: '72%', height: '72%', objectFit: 'contain' }} />
              </div>
            </div>

            {/* Floating badge — rating */}
            <div className="anim-float2" style={{
              position: 'absolute', top: 8, left: -8, background: t.bgCard, border: `1px solid ${t.border}`,
              borderRadius: 16, padding: '12px 16px', boxShadow: t.shadow,
              display: 'flex', alignItems: 'center', gap: 10
            }}>
              <div style={{ display: 'flex', color: t.accent }}>
                {Array(5).fill('').map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.textHeading }}>5.0 Rating</span>
            </div>

            {/* Floating badge — schools covered */}
            <div className="anim-float" style={{
              position: 'absolute', bottom: 18, right: -12, background: t.bgCard, border: `1px solid ${t.border}`,
              borderRadius: 16, padding: '14px 18px', boxShadow: t.shadow,
              display: 'flex', alignItems: 'center', gap: 12
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.accent }}>
                <Users size={18} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 15, fontWeight: 800, color: t.textHeading, lineHeight: 1 }}>10+ Schools</div>
                <div style={{ fontSize: 10.5, color: t.textMuted, marginTop: 3 }}>Trust our team</div>
              </div>
            </div>

            {/* Floating badge — verified */}
            <div className="anim-float2" style={{
              position: 'absolute', top: '42%', right: -18, background: t.bgCard, border: `1px solid ${t.border}`,
              borderRadius: 14, padding: '10px 14px', boxShadow: t.shadow,
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              <CheckCircle2 size={16} color={t.accent2} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: t.textHeading }}>Verified Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="sec" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge t={t}>What We Do</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>Everything You Need to <span className="g-text" style={{ backgroundImage: t.grad }}>Dominate</span></h2>
            <p style={{ color: t.text, marginTop: 12, fontSize: 16, maxWidth: 520, margin: '12px auto 0' }}>One agency. Full stack. Zero gaps.</p>
          </div>
          <div className="grid-2">
            {HIGHLIGHTS.map(({ icon, title, desc, to }) => (
              <Link key={title} to={to} style={{ textDecoration: 'none' }}>
                <div className="card card-shine" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '36px 32px', height: '100%', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.grad }} />
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20, boxShadow: t.shadow }}>{icon}</div>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 20, color: t.textHeading, marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text, marginBottom: 16 }}>{desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.accent }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sec" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge t={t}>Client Love</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>What Our Clients <span className="g-text" style={{ backgroundImage: t.grad }}>Say</span></h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map(({ name, role, initials, rating, quote }) => (
              <div key={name} className="card card-shine" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '32px 28px', position: 'relative' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.45)`; e.currentTarget.style.boxShadow = t.glow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
              >
                <Quote size={30} style={{ color: t.accent, opacity: .25, marginBottom: 8 }} fill="currentColor" strokeWidth={0} />
                <div style={{ display: 'flex', gap: 3, marginBottom: 16, color: t.accent }}>
                  {Array(rating).fill('').map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: t.text, marginBottom: 24 }}>{quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: `1px solid ${t.border}` }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: t.textHeading }}>{name}</div>
                    <div style={{ fontSize: 12, color: t.textMuted }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA BAND ── */}
      <section className="sec-sm" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 28, padding: 'clamp(40px, 8vw, 72px) clamp(24px, 6vw, 48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="blob" style={{ width: 400, height: 400, background: `radial-gradient(circle,rgba(${t.rgb},.18),transparent 70%)`, top: -100, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>
                Ready to <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Grow?</span>
              </h2>
              <p style={{ fontSize: 17, color: t.text, marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
                Book a free 30-minute strategy call. No pressure, just insights.
              </p>
              <a href="tel:03376062635" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>Book Free Call <Rocket size={18} /></a>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  )
}
