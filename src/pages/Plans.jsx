import { Link, useNavigate } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import {
  Check, Image, Clapperboard, Sparkles, Globe, LayoutTemplate, Rocket,
  FileText, CalendarClock, Wallet, RefreshCw, ShieldCheck, KeyRound, Star
} from 'lucide-react'

const SMM_PLANS = [
  {
    id: 'smm-1',
    icon: <Image size={26} strokeWidth={1.5} />,
    name: 'Graphic Designing Posts',
    tag: 'Package 1',
    price: '25,000',
    period: '/ month',
    blurb: 'Consistent, on-brand social presence with custom-designed posts.',
    features: [
      '8 high-quality Instagram posts / month',
      'Custom graphic design for each post',
      'On-brand templates & colour system',
      'Scheduled posting',
    ],
    popular: false,
  },
  {
    id: 'smm-2',
    icon: <Clapperboard size={26} strokeWidth={1.5} />,
    name: 'Reels + Graphics',
    tag: 'Package 2',
    price: '65,000',
    period: '/ month',
    blurb: 'Video-first growth blending short-form reels with graphic posts.',
    features: [
      '8 Reels per month (editing & posting)',
      '10 Graphics per month',
      'Trend-based reel concepts',
      'Captions & hashtag strategy',
    ],
    popular: false,
  },
  {
    id: 'smm-3',
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    name: 'Complete Social Media Management',
    tag: 'Package 3',
    price: '110,000',
    period: '/ month',
    blurb: 'Full-stack management with professional videography and staff training.',
    features: [
      '4 Reels shot by a professional videographer',
      '10 Posts + 8 Reels (20 posts / month total)',
      '30 Stories per month',
      'One-time online SMM training for 1 staff member',
      'Priority content approval workflow',
    ],
    popular: true,
    note: 'Final scope & fee confirmed in writing before the contract begins.',
  },
]

const WEB_PLANS = [
  {
    id: 'web-a',
    icon: <Globe size={26} strokeWidth={1.5} />,
    name: 'Essential Site',
    tag: 'Package A',
    price: '70,000',
    period: 'one-time',
    blurb: 'A clean, mobile-friendly presence to get your school online.',
    features: [
      'Up to 5-page responsive website',
      'Home, About, Admissions, Academics, Contact',
      'Mobile-friendly design',
      'Basic SEO setup',
      'Contact / inquiry form',
      '1 round of revisions',
      '3 months free technical support',
    ],
    popular: false,
  },
  {
    id: 'web-b',
    icon: <LayoutTemplate size={26} strokeWidth={1.5} />,
    name: 'Standard Site',
    tag: 'Package B',
    price: '90,000',
    period: 'one-time',
    blurb: 'A content-rich site built to drive admission inquiries.',
    features: [
      'Up to 8-page website',
      'News / Events section + Faculty page',
      'Online Admission Inquiry form',
      'Photo / video gallery',
      'On-page SEO',
      'Google Maps & social media integration',
      '2 rounds of revisions',
      '3 months free technical support',
    ],
    popular: true,
  },
  {
    id: 'web-c',
    icon: <Rocket size={26} strokeWidth={1.5} />,
    name: 'Premium Site',
    tag: 'Package C',
    price: '120,000',
    period: 'one-time',
    blurb: 'A fully custom platform with portals, payments and CRM.',
    features: [
      'Fully custom design (up to 12 pages)',
      'Student / Parent Portal login area',
      'Online Fee Payment gateway integration',
      'Admissions CRM form',
      'Blog / News module',
      'Advanced SEO + speed & security optimization',
      '3 rounds of revisions',
      '3 months free support & maintenance',
    ],
    popular: false,
  },
]

const TERMS = [
  { icon: <CalendarClock size={22} strokeWidth={1.6} />, title: 'Contract Duration', desc: 'Minimum 3-month term for Social Media Management, continuing month-to-month afterward unless notice is given.' },
  { icon: <FileText size={22} strokeWidth={1.6} />, title: 'Cancellation Notice', desc: 'One month advance written notice required. Services and payment continue through the full notice period.' },
  { icon: <Wallet size={22} strokeWidth={1.6} />, title: 'Payment Schedule', desc: '30% advance at the start of each cycle, 50% mid-month on deliverable confirmation, 20% on completion.' },
  { icon: <RefreshCw size={22} strokeWidth={1.6} />, title: 'Approval & Revisions', desc: 'All content is shared for approval before publishing. Revision rounds are as specified per package.' },
  { icon: <KeyRound size={22} strokeWidth={1.6} />, title: 'Ownership', desc: 'All final creative assets and website files become your property upon full and final payment.' },
  { icon: <ShieldCheck size={22} strokeWidth={1.6} />, title: 'Confidentiality', desc: 'Both parties keep confidential business information strictly private throughout the engagement.' },
]

function Badge({ t, children }) {
  return (
    <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 20 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />
      {children}
    </span>
  )
}

function PlanCard({ t, plan }) {
  const { icon, name, tag, price, period, blurb, features, popular, note } = plan
  const navigate = useNavigate()

  const handleChoose = () => {
    navigate('/contact', {
      state: {
        planName: name,
        planTag: tag,
        planPrice: price,
        planPeriod: period,
      },
    })
  }

  return (
    /* Outer wrapper has paddingTop on popular cards so the badge is never clipped */
    <div style={{ paddingTop: popular ? 20 : 0, height: '100%' }}>
      <div
        className="card card-shine"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: t.bgCard,
          border: `1.5px solid ${popular ? t.accent : t.border}`,
          borderRadius: 24,
          padding: 'clamp(28px, 4vw, 36px)',
          boxShadow: popular ? t.glow : 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.boxShadow = t.shadow }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = popular ? t.accent : t.border; e.currentTarget.style.boxShadow = popular ? t.glow : 'none' }}
      >
        {popular && (
          <span style={{
            position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: t.grad, color: '#fff', fontSize: 11, fontWeight: 800,
            letterSpacing: '.1em', textTransform: 'uppercase', padding: '7px 16px',
            borderRadius: 99, boxShadow: t.shadow, whiteSpace: 'nowrap',
            zIndex: 2,
          }}>
            <Star size={12} fill="currentColor" strokeWidth={0} /> Most Popular
          </span>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: `rgba(${t.rgb},.12)`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: t.textMuted }}>{tag}</span>
        </div>

        <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 22, color: t.textHeading, marginBottom: 8, lineHeight: 1.2 }}>{name}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text, marginBottom: 22 }}>{blurb}</p>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 24 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: t.textMuted, marginBottom: 6 }}>PKR</span>
          <span className="g-text font-display" style={{ backgroundImage: t.grad, fontSize: 'clamp(2rem, 5vw, 2.6rem)', fontWeight: 900, lineHeight: 1 }}>{price}</span>
          <span style={{ fontSize: 14, color: t.textMuted, marginBottom: 6 }}>{period}</span>
        </div>

        <div style={{ height: 1, background: t.border, marginBottom: 22 }} />

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.6, color: t.text }}>
              <span style={{ color: t.accent, flexShrink: 0, marginTop: 2, display: 'flex' }}><Check size={16} strokeWidth={2.5} /></span>
              {f}
            </li>
          ))}
        </ul>

        {note && (
          <p style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.6, marginTop: 18, fontStyle: 'italic' }}>{note}</p>
        )}

        <button
          onClick={handleChoose}
          className="btn btn-md"
          style={{
            marginTop: 24, justifyContent: 'center', display: 'flex', width: '100%',
            background: popular ? t.grad : 'transparent',
            color: popular ? '#fff' : t.accent,
            border: popular ? 'none' : `1.5px solid rgba(${t.rgb},.35)`,
            boxShadow: popular ? t.shadow : 'none',
            cursor: 'pointer',
          }}
        >
          Choose {tag}
        </button>
      </div>
    </div>
  )
}

export default function Plans({ theme: t }) {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{ background: t.bg, padding: '80px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 640, height: 640, background: `radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`, top: -220, right: -160, pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Badge t={t}>Plans &amp; Pricing</Badge>
          <h1 className="hero-h font-display" style={{ color: t.textHeading, fontSize: 'clamp(2.4rem,5vw,4.5rem)', marginBottom: 18 }}>
            Packages Built to <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Grow You</span>
          </h1>
          <p style={{ fontSize: 17, color: t.text, maxWidth: 620, margin: '0 auto', lineHeight: 1.75 }}>
            Transparent pricing for social media management, video editing, and website development — designed to help schools and IT companies fill classrooms and win clients.
          </p>
        </div>
      </section>

      {/* ── SMM PLANS ── */}
      <section className="sec" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge t={t}>Social Media Management</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>Marketing &amp; <span className="g-text" style={{ backgroundImage: t.grad }}>Video Editing</span></h2>
            <p style={{ color: t.text, fontSize: 16, marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>Monthly management plans that keep your audience engaged and your admissions funnel full.</p>
          </div>
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            {SMM_PLANS.map(plan => <PlanCard key={plan.id} t={t} plan={plan} />)}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── WEBSITE PLANS ── */}
      <section className="sec" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge t={t}>Website Development</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>Websites That <span className="g-text" style={{ backgroundImage: t.grad }}>Convert</span></h2>
            <p style={{ color: t.text, fontSize: 16, marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>One-time builds — from an essential presence to a fully custom portal with online payments.</p>
          </div>
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            {WEB_PLANS.map(plan => <PlanCard key={plan.id} t={t} plan={plan} />)}
          </div>
          <p style={{ textAlign: 'center', color: t.textMuted, fontSize: 13, marginTop: 28, maxWidth: 620, margin: '28px auto 0', lineHeight: 1.7 }}>
            Domain &amp; hosting charges are separate unless otherwise agreed in writing. Additional pages or custom functionality beyond the listed scope are quoted separately.
          </p>
        </AnimatedReveal>
      </section>

      {/* ── TERMS ── */}
      <section className="sec" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge t={t}>Terms &amp; Conditions</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>Simple, <span className="g-text" style={{ backgroundImage: t.grad }}>Fair Terms</span></h2>
          </div>
          <div className="grid-3">
            {TERMS.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ height: '100%', background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 20, padding: '28px 26px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow = t.shadow }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 14, background: `rgba(${t.rgb},.12)`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, color: t.textHeading, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text }}>{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 28, padding: 'clamp(40px, 8vw, 72px) clamp(24px, 6vw, 48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="blob" style={{ width: 400, height: 400, background: `radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`, top: -100, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="sec-h font-display" style={{ color: t.textHeading, marginBottom: 16 }}>
                Not Sure Which <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Plan Fits?</span>
              </h2>
              <p style={{ fontSize: 17, color: t.text, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
                Tell us your goals and we'll recommend the right package — with a tailored quote within 24 hours.
              </p>
              <Link to="/contact" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get a Custom Quote <Rocket size={18} />
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  )
}
