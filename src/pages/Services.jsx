import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import { Smartphone, PenTool, BarChart3, BadgeDollarSign, Megaphone, Crosshair, Globe, Camera, Video, GraduationCap } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

const SERVICES = [
  {
    id: 'social-media-management', img: '/services/social-media-management.png', icon: <Smartphone size={32} strokeWidth={1.5} />, title: 'Social Media Management',
    desc: 'Full-cycle management of Instagram, TikTok, LinkedIn, X & YouTube. Posting schedules, community engagement, and follower growth — all handled.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'X']
  },
  {
    id: 'content-creation', img: '/services/content-creation.png', icon: <PenTool size={32} strokeWidth={1.5} />, title: 'Content Creation & Video Editing',
    desc: 'Scroll-stopping graphics, reels, carousels, and professionally edited videos tailored to your brand voice. Our creative team produces 30+ pieces monthly.',
    tags: ['Reels', 'Video Editing', 'Carousels', 'Design']
  },
  {
    id: 'event-photography', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop', icon: <Camera size={32} strokeWidth={1.5} />, title: 'Event Photography',
    desc: 'Professional event photography for school ceremonies, corporate functions, product launches, and conferences. High-resolution edited images delivered fast.',
    tags: ['School Events', 'Corporate', 'Ceremonies', 'Product Launches']
  },
  {
    id: 'event-videography', img: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=900&auto=format&fit=crop', icon: <Video size={32} strokeWidth={1.5} />, title: 'Event Videography',
    desc: 'Cinematic event coverage with professional-grade equipment. Full event films, highlight reels, and social-ready cuts — all post-produced in-house.',
    tags: ['Event Films', 'Highlight Reels', 'Drone', 'Social Cuts']
  },
  {
    id: 'web-services', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=900&auto=format&fit=crop', icon: <Globe size={32} strokeWidth={1.5} />, title: 'Web Services & Development',
    desc: 'Custom-built websites for schools and businesses — from simple landing pages to full portals with online admissions, fee payments, and CRM integrations.',
    tags: ['School Sites', 'Portals', 'Admissions', 'CRM']
  },
  {
    id: 'lms-saas', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=900&auto=format&fit=crop', icon: <GraduationCap size={32} strokeWidth={1.5} />, title: 'LMS & SaaS Projects',
    desc: 'End-to-end development of Learning Management Systems and SaaS platforms. We build scalable e-learning tools, student dashboards, and admin portals for educational institutions.',
    tags: ['LMS', 'E-Learning', 'SaaS', 'Student Portal']
  },
  // {
  //   id: 'analytics-reporting', img: '/services/analytics-reporting.png', icon: <BarChart3 size={32} strokeWidth={1.5} />, title: 'Analytics & Reporting',
  //   desc: 'Monthly deep-dive reports with KPI tracking, competitor benchmarking, and actionable roadmaps to continuously improve ROI.',
  //   tags: ['KPIs', 'Dashboards', 'Insights', 'ROI']
  // },
  {
    id: 'paid-advertising', img: '/services/paid-advertising.png', icon: <BadgeDollarSign size={32} strokeWidth={1.5} />, title: 'Paid Advertising',
    desc: 'High-ROAS ad campaigns on Meta, TikTok, Google & YouTube. From audience research to creative testing and full optimisation.',
    tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Retargeting']
  },
  // {
  //   id: 'brand-strategy', img: '/services/brand-strategy.png', icon: <Crosshair size={32} strokeWidth={1.5} />, title: 'Brand Strategy',
  //   desc: 'Brand positioning, voice guidelines, visual identity, and a 12-month growth roadmap built specifically around your goals.',
  //   tags: ['Positioning', 'Identity', 'Voice', 'Roadmap']
  // },
]

const PROCESS = [
  { n: '01', title: 'Audit & Research', desc: 'We analyse your current channels, audience, and competitors to find the biggest opportunities.' },
  { n: '02', title: 'Strategy Build', desc: 'A tailored social strategy with content pillars, posting cadence, and campaign calendar.' },
  { n: '03', title: 'Create & Publish', desc: 'Our team produces and schedules all content, managing engagement daily.' },
  { n: '04', title: 'Report & Refine', desc: 'Monthly review meetings with performance data and optimised next-steps.' },
]

const PLATFORMS = ['Instagram', 'TikTok', 'LinkedIn', 'X / Twitter', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat']

function Badge({ t, children }) {
  return <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 20 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />{children}</span>
}

export default function Services({ theme: t }) {
  const openBooking = useBooking()

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── PAGE HERO ── */}
      <section style={{ background: t.bg, padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 600, height: 600, background: `radial-gradient(circle,rgba(${t.rgb},.18),transparent 70%)`, top: -200, right: -150, pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Badge t={t}>What We Offer</Badge>
          <h1 className="hero-h font-display" style={{ color: t.textHeading, fontSize: 'clamp(2.4rem,5vw,4.5rem)', marginBottom: 18 }}>
            Everything You Need to <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Grow</span>
          </h1>
          <p style={{ fontSize: 17, color: t.text, maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.75 }}>
            From social media management and event photography to custom websites and LMS platforms — we handle every growth channel so you can focus on what you do best.
          </p>
          <Link to="/contact" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>Get a Free Audit →</Link>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      <div>
        {SERVICES.map(({ id, img, icon, title, desc, tags }, i) => (
          <section key={id} id={id} className="sec" style={{ background: i % 2 === 0 ? t.bgSection : t.bg, scrollMarginTop: '80px' }}>
            <AnimatedReveal className="wrap flex-res" style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', gap: 'clamp(32px, 5vw, 60px)' }}>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 24 }}>{icon}</div>
                <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 32, color: t.textHeading, marginBottom: 16 }}>{title}</h2>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: t.text, marginBottom: 24 }}>{desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tags.map(tag => (
                    <span key={tag} style={{ fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 99, background: `rgba(${t.rgb},.1)`, color: t.accent, border: `1px solid rgba(${t.rgb},.2)` }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 300px', maxWidth: '600px', width: '100%', aspectRatio: '16 / 10', borderRadius: 28, overflow: 'hidden', boxShadow: t.shadow, border: `1px solid ${t.border}` }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </AnimatedReveal>
          </section>
        ))}
      </div>

      {/* ── PLATFORMS ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap" style={{ textAlign: 'center' }}>
          <Badge t={t}>Platforms We Manage</Badge>
          <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 36 }}>Everywhere Your <span className="g-text" style={{ backgroundImage: t.grad }}>Audience Is</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
            {PLATFORMS.map(p => (
              <div key={p} style={{ padding: '12px 24px', borderRadius: 99, background: t.bgCard, border: `1px solid ${t.border}`, fontSize: 14, fontWeight: 600, color: t.textHeading, transition: 'all .25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.boxShadow = t.shadow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textHeading; e.currentTarget.style.boxShadow = 'none' }}
              >{p}</div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="sec" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge t={t}>Our Workflow</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>How We <span className="g-text" style={{ backgroundImage: t.grad }}>Manage</span> Your Social</h2>
          </div>
          <div className="grid-4">
            {PROCESS.map(({ n, title, desc }, i) => (
              <div key={n} style={{ position: 'relative', height: '100%' }}>
                <div className="card" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '28px 24px', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="g-text font-display" style={{ backgroundImage: t.grad, fontSize: 13, fontWeight: 800, letterSpacing: '.1em', marginBottom: 14 }}>STEP {n}</div>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, color: t.textHeading, marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text }}>{desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div style={{ display: 'none', position: 'absolute', top: 40, right: -14, color: t.accent, fontSize: 20, zIndex: 2 }} className="process-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>Let's Build Your <span className="g-text" style={{ backgroundImage: t.grad }}>Social Empire</span></h2>
          <p style={{ fontSize: 16, color: t.text, marginBottom: 32 }}>Start with a free audit — we'll show you exactly where you're leaving growth on the table.</p>
          <button onClick={openBooking} className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>Book Free Audit</button>
        </AnimatedReveal>
      </section>
    </main>
  )
}
