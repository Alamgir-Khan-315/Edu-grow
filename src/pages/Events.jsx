import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import {
  Camera, Clapperboard, Globe, LayoutTemplate, GraduationCap,
  Sparkles, Users, Building2, Rocket, Trophy, Music,
  Check, MapPin, Play, Star, Layers, Code2, BookOpen,
  Server, ShieldCheck, CalendarCheck, Video, Mic2
} from 'lucide-react'
import CountUp from '../components/CountUp'
import corporateImg from '../assets/events/corporate.png'
import awardImg from '../assets/events/award.png'
import launchImg from '../assets/events/launch.png'
import musicImg from '../assets/events/music.png'

// ─── Data ───────────────────────────────────────────────────────────────────

const STATS = [
  { n: '500+', label: 'Events Captured' },
  { n: '120+', label: 'Web Projects' },
  { n: '15+',  label: 'LMS Platforms' },
  { n: '100%', label: 'Delivery Rate' },
]

const PHOTO_FEATURES = [
  'Candid & portrait photography',
  'High-resolution edited gallery delivery',
  'Same-day preview shots',
  'Multi-photographer coverage',
  'Print-ready & digital formats',
  'Drone aerial photography',
]

const VIDEO_FEATURES = [
  'Cinematic 4K event films',
  'Short-form reels for social media',
  'Multi-camera live switching',
  'Professional audio capture',
  'Motion graphics & titles',
  'Fast 48-hour turnaround edit',
]

const WEB_SERVICES = [
  {
    icon: <LayoutTemplate size={26} strokeWidth={1.5} />,
    title: 'School & Institute Websites',
    desc: 'Modern, fast, mobile-first websites for schools, colleges and training institutes — with admission forms, portals and staff directories.',
  },
  {
    icon: <GraduationCap size={26} strokeWidth={1.5} />,
    title: 'LMS Platforms',
    desc: 'Full-featured Learning Management Systems — course creation, student tracking, quizzes, certificates and parent dashboards.',
  },
  {
    icon: <Code2 size={26} strokeWidth={1.5} />,
    title: 'IT Company Websites',
    desc: 'Premium tech company sites, SaaS landing pages, developer portfolios and product showcase pages built to convert.',
  },
  {
    icon: <Server size={26} strokeWidth={1.5} />,
    title: 'SaaS & Web Apps',
    desc: 'Custom web applications — inventory systems, booking platforms, HR tools and bespoke B2B software for growing businesses.',
  },
  {
    icon: <BookOpen size={26} strokeWidth={1.5} />,
    title: 'E-learning Content',
    desc: 'Structured online courses, video modules, interactive quizzes and SCORM-compliant content packages built for engagement.',
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: 'Maintenance & Support',
    desc: 'Ongoing hosting, security patches, performance optimisation and priority support to keep every platform running flawlessly.',
  },
]

const EVENT_TYPES = [
  { icon: <Building2 size={28} strokeWidth={1.5} />, label: 'Corporate Conferences' },
  { icon: <GraduationCap size={28} strokeWidth={1.5} />, label: 'School Graduations' },
  { icon: <Trophy size={28} strokeWidth={1.5} />, label: 'Award Ceremonies' },
  { icon: <Rocket size={28} strokeWidth={1.5} />, label: 'Product Launches' },
  { icon: <Music size={28} strokeWidth={1.5} />, label: 'Cultural Festivals' },
  { icon: <Users size={28} strokeWidth={1.5} />, label: 'Networking Events' },
  { icon: <Mic2 size={28} strokeWidth={1.5} />, label: 'Seminars & Talks' },
  { icon: <CalendarCheck size={28} strokeWidth={1.5} />, label: 'Sports Days' },
]

const GALLERY = [
  { img: corporateImg, title: 'Corporate Summit 2024',      location: 'Karachi',   category: 'Corporate' },
  { img: awardImg,     title: 'Annual Awards Night',         location: 'Lahore',    category: 'Awards' },
  { img: launchImg,    title: 'SaaS Product Reveal',         location: 'Islamabad', category: 'Launch' },
  { img: musicImg,     title: 'School Cultural Festival',    location: 'Karachi',   category: 'Education' },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Brief & Plan', desc: 'We discuss your goals, audience, and creative vision to map the full shoot or build.' },
  { n: '02', title: 'Production', desc: 'Our crew arrives fully equipped. We capture every angle — no moment missed.' },
  { n: '03', title: 'Edit & Deliver', desc: 'Professional colour grading, cutting and sound design delivered on your deadline.' },
  { n: '04', title: 'Publish & Grow', desc: 'Optimised assets ready to publish across web and social for maximum reach.' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function Badge({ t, children }) {
  return (
    <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 20 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />
      {children}
    </span>
  )
}

function FeatureList({ features, t }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {features.map(f => (
        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.6, color: t.text }}>
          <span style={{ flexShrink: 0, marginTop: 3, width: 20, height: 20, borderRadius: '50%', background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={12} strokeWidth={3} style={{ color: t.accent }} />
          </span>
          {f}
        </li>
      ))}
    </ul>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Events({ theme: t }) {

  const gradText = { backgroundImage: t.grad }

  return (
    <main style={{ paddingTop: 80, background: t.bg }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: t.bg, padding: '100px 0 80px' }} className="bg-grid">
        <div className="blob" style={{ width: 700, height: 700, background: `radial-gradient(circle,rgba(${t.rgb},.18),transparent 70%)`, top: -240, left: -200 }} />
        <div className="blob" style={{ width: 400, height: 400, background: `radial-gradient(circle,rgba(16,185,129,.14),transparent 70%)`, bottom: -80, right: -80 }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Badge t={t}>Photography · Videography · Web</Badge>
          <h1 className="hero-h font-display" style={{ color: t.textHeading, marginBottom: 22 }}>
            <span className="word-in word-in-1">We Capture.</span>{' '}
            <span className="word-in word-in-2">We Build.</span>{' '}
            <span className="word-in word-in-3 g-text anim-grad" style={gradText}>We Grow.</span>
          </h1>
          <p style={{ fontSize: 18, color: t.text, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Event photography &amp; cinematography that tells your story — plus world-class websites and SaaS platforms to keep your institution growing online.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>Book a Shoot</Link>
            <Link to="/plans" className="btn btn-lg" style={{ background: 'transparent', color: t.accent, border: `1.5px solid rgba(${t.rgb},.35)` }}>View Plans</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: t.bgSection, padding: '52px 0' }}>
        <AnimatedReveal className="wrap">
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: t.border, borderRadius: 20, overflow: 'hidden' }}>
            {STATS.map(({ n, label }) => (
              <div key={label} style={{ background: t.bgCard, padding: 'clamp(24px,5vw,40px) 16px', textAlign: 'center' }}>
                <div className="g-text font-display" style={{ ...gradText, fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, lineHeight: 1 }}>
                  <CountUp end={n} />
                </div>
                <div style={{ fontSize: 11, color: t.textMuted, marginTop: 8, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.06em' }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── EVENT PHOTOGRAPHY ── */}
      <section className="sec" id="photography" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'clamp(36px,6vw,72px)', flexWrap: 'wrap' }}>
          {/* Visual side */}
          <div style={{ flex: '1 1 320px', position: 'relative' }}>
            <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: t.shadow, aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop"
                alt="Event photography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* floating badge */}
            <div style={{
              position: 'absolute', bottom: -18, right: -12,
              background: t.bgCard, border: `1.5px solid ${t.border}`,
              borderRadius: 16, padding: '14px 20px', boxShadow: t.shadow,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={20} color="#fff" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: t.textHeading }}>500+ Events</div>
                <div style={{ fontSize: 11, color: t.textMuted }}>Captured nationwide</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div style={{ flex: '1 1 320px' }}>
            <Badge t={t}>Event Photography</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>
              Every Moment,{' '}
              <span className="g-text" style={gradText}>Perfectly Framed</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: t.text, marginBottom: 28 }}>
              From school prize distributions to corporate award nights — our photography team blends into your event and delivers a gallery that relives every highlight in stunning detail.
            </p>
            <FeatureList features={PHOTO_FEATURES} t={t} />
            <Link to="/contact" className="btn btn-md" style={{ marginTop: 32, background: t.grad, color: '#fff', boxShadow: t.shadow }}>
              Book Photography
            </Link>
          </div>
        </AnimatedReveal>
      </section>

      {/* ── VIDEOGRAPHY ── */}
      <section className="sec" id="videography" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 'clamp(36px,6vw,72px)', flexWrap: 'wrap' }}>
          {/* Visual side */}
          <div style={{ flex: '1 1 320px', position: 'relative' }}>
            <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: t.shadow, aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=900&auto=format&fit=crop"
                alt="Event videography"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* play overlay badge */}
            <div style={{
              position: 'absolute', bottom: -18, left: -12,
              background: t.bgCard, border: `1.5px solid ${t.border}`,
              borderRadius: 16, padding: '14px 20px', boxShadow: t.shadow,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={18} color="#fff" fill="#fff" strokeWidth={0} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: t.textHeading }}>4K Cinematic</div>
                <div style={{ fontSize: 11, color: t.textMuted }}>48-hr turnaround</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div style={{ flex: '1 1 320px' }}>
            <Badge t={t}>Event Videography</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>
              Cinematic Films{' '}
              <span className="g-text" style={gradText}>That Tell Stories</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: t.text, marginBottom: 28 }}>
              We produce high-end event films and social-ready reels for schools, corporates and IT companies. Multi-camera setups, professional audio rigs, and next-level post-production — every project delivered on time.
            </p>
            <FeatureList features={VIDEO_FEATURES} t={t} />
            <Link to="/contact" className="btn btn-md" style={{ marginTop: 32, background: t.grad, color: '#fff', boxShadow: t.shadow }}>
              Book Videography
            </Link>
          </div>
        </AnimatedReveal>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge t={t}>How We Work</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>
              Our <span className="g-text" style={gradText}>Production Process</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {PROCESS_STEPS.map(({ n, title, desc }, i) => (
              <div key={n} className="card card-shine" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', fontWeight: 900, lineHeight: 1, fontFamily: 'Syne,sans-serif', position: 'absolute', top: 10, right: 16, opacity: 0.06, color: t.accent, userSelect: 'none' }}>{n}</div>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: 14, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{n}</div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, color: t.textHeading, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text }}>{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── EVENT TYPES ── */}
      <section className="sec-sm" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap" style={{ textAlign: 'center' }}>
          <Badge t={t}>Events We Cover</Badge>
          <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 40 }}>
            From Schools to <span className="g-text" style={gradText}>Corporates</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 14 }}>
            {EVENT_TYPES.map(({ icon, label }) => (
              <div key={label} className="card" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, padding: '22px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ color: t.accent }}>{icon}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: t.textHeading, textAlign: 'center', lineHeight: 1.4 }}>{label}</span>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── RECENT GALLERY ── */}
      <section className="sec" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge t={t}>Portfolio Highlights</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>
              Recent <span className="g-text" style={gradText}>Work</span>
            </h2>
            <p style={{ color: t.text, fontSize: 15, marginTop: 10 }}>A glimpse of events we&apos;ve captured and projects we&apos;ve delivered.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
            {GALLERY.map(({ img, title, location, category }) => (
              <div key={title} className="card-shine"
                style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', height: 320, border: `1px solid ${t.border}`, cursor: 'pointer' }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('.g-overlay').style.opacity = '1'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('.g-overlay').style.opacity = '0'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                }}
              >
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s cubic-bezier(.4,0,.2,1)' }} />
                <div className="g-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,.82) 0%,transparent 55%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 28, opacity: 0, transition: 'opacity .4s ease' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, color: t.accent2 ?? t.accent, marginBottom: 6 }}>{category}</span>
                  <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 4, fontFamily: 'Syne,sans-serif' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}><MapPin size={13} /> {location}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── WEB SERVICES & LMS ── */}
      <section className="sec" id="web-services" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge t={t}>Web &amp; Digital Products</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>
              Websites, LMS &amp;{' '}
              <span className="g-text" style={gradText}>SaaS Platforms</span>
            </h2>
            <p style={{ color: t.text, fontSize: 16, marginTop: 12, maxWidth: 560, margin: '12px auto 0', lineHeight: 1.7 }}>
              We build digital infrastructure that helps schools, colleges and IT companies operate, enrol, and teach entirely online.
            </p>
          </div>

          <div className="grid-3">
            {WEB_SERVICES.map(({ icon, title, desc }) => (
              <div key={title} className="card card-shine"
                style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '32px 28px', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${t.rgb},.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.accent, marginBottom: 18 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, color: t.textHeading, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: t.text }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Marquee strip */}
          <div style={{ marginTop: 60, overflow: 'hidden', borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, padding: '18px 0' }}>
            <div className="marquee-track" style={{ gap: 48, whiteSpace: 'nowrap' }}>
              {[
                'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS',
                'Moodle', 'Custom LMS', 'REST APIs', 'AWS', 'Stripe Payments', 'CI/CD',
                'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS',
                'Moodle', 'Custom LMS', 'REST APIs', 'AWS', 'Stripe Payments', 'CI/CD',
              ].map((tech, i) => (
                <span key={i} style={{ fontSize: 13, fontWeight: 700, color: t.textMuted, letterSpacing: '.06em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 28, padding: 'clamp(44px,8vw,80px) clamp(24px,6vw,52px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="blob" style={{ width: 500, height: 500, background: `radial-gradient(circle,rgba(${t.rgb},.14),transparent 70%)`, top: -120, left: '50%', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Badge t={t}>Let&apos;s Work Together</Badge>
              <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>
                Ready to <span className="g-text anim-grad" style={gradText}>Tell Your Story?</span>
              </h2>
              <p style={{ fontSize: 16, color: t.text, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
                Whether you need a photographer, a cinematic event film, or a full LMS built from scratch — we deliver on time, every time.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>Get a Free Quote</Link>
                <Link to="/plans" className="btn btn-lg" style={{ background: 'transparent', color: t.accent, border: `1.5px solid rgba(${t.rgb},.3)` }}>View Pricing</Link>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>

    </main>
  )
}
