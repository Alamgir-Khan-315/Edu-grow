import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import { Search, ClipboardList, Palette, Rocket, LineChart, Radio, Target, Handshake, Zap, Lock, FileText } from 'lucide-react'

const STEPS = [
  { n:'01', icon: <Search size={32} strokeWidth={1.5} />, title:'Discovery Call',
    time:'Week 1',
    desc:'We start with a 30-minute strategy call to understand your brand, goals, audience and current challenges. No fluff — just the info we need to build something real.',
    deliverable:'Brand Questionnaire + Competitor Analysis' },
  { n:'02', icon: <ClipboardList size={32} strokeWidth={1.5} />, title:'Strategy & Roadmap',
    time:'Week 1–2',
    desc:'Our strategists build a data-driven plan: content pillars, platform selection, campaign calendar, and KPI targets. You review and approve before we touch anything.',
    deliverable:'90-Day Strategy Document' },
  { n:'03', icon: <Palette size={32} strokeWidth={1.5} />, title:'Creative Production',
    time:'Ongoing',
    desc:'Our creative team produces all content — graphics, videos, copy, and ads. Every asset is brand-reviewed internally before scheduling or publishing.',
    deliverable:'Monthly Content Calendar + Assets' },
  { n:'04', icon: <Rocket size={32} strokeWidth={1.5} />, title:'Launch & Execute',
    time:'Ongoing',
    desc:'We go live. Posts scheduled, ads running, community managed daily. For events, we coordinate vendors, brief crew, and run the show.',
    deliverable:'Live Campaigns + Daily Management' },
  { n:'05', icon: <LineChart size={32} strokeWidth={1.5} />, title:'Optimise & Iterate',
    time:'Monthly',
    desc:'We track every metric that matters. Monthly review meetings with full performance reports and a refined action plan for the next cycle.',
    deliverable:'Performance Report + Next-cycle Plan' },
  { n:'06', icon: <Radio size={32} strokeWidth={1.5} />, title:'Scale & Expand',
    time:'Quarterly',
    desc:'Once we find what works, we scale it. New platforms, bigger ad budgets, larger events — we build momentum strategically and sustainably.',
    deliverable:'Quarterly Growth Review' },
]

const VALUES = [
  { icon: <Target size={36} strokeWidth={1.5} />, title:'Results-Driven', desc:'Every decision is backed by data. We track what matters and cut what doesn\'t.' },
  { icon: <Handshake size={36} strokeWidth={1.5} />, title:'True Partnership',   desc:'We work as an extension of your team — transparent, responsive, and invested.' },
  { icon: <Zap size={36} strokeWidth={1.5} />, title:'Speed & Quality', desc:'Fast turnarounds without compromising on creative excellence.' },
  { icon: <Lock size={36} strokeWidth={1.5} />, title:'Full Ownership',  desc:'You own 100% of all content, data, and accounts. Always.' },
]

function Badge({ t, children }) {
  return <span className="badge" style={{ background:`rgba(${t.rgb},.12)`, color:t.accent, border:`1px solid rgba(${t.rgb},.25)`, marginBottom:20 }}><span style={{ width:6,height:6,borderRadius:'50%',background:t.accent,display:'inline-block' }}/>{children}</span>
}

export default function Process({ theme: t }) {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{ background:t.bg, padding:'80px 0 64px', position:'relative', overflow:'hidden' }}>
        <div className="blob" style={{ width:600,height:600,background:`radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`,top:-150,right:-150,pointerEvents:'none' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <Badge t={t}>How We Work</Badge>
          <h1 className="hero-h font-display" style={{ color:t.textHeading, fontSize:'clamp(2.4rem,5vw,4.5rem)', marginBottom:18 }}>
            Our <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Proven</span> Process
          </h1>
          <p style={{ fontSize:17, color:t.text, maxWidth:560, margin:'0 auto', lineHeight:1.75 }}>
            A clear, repeatable framework that delivers consistent results for social media and events — every single time.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="sec" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {STEPS.map(({ n, icon, title, time, desc, deliverable }, i) => (
              <div key={n} className="card card-shine flex-res" style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:22, padding:'clamp(24px, 5vw, 40px)', display:'flex', alignItems:'flex-start', gap:'clamp(20px, 4vw, 32px)', position: 'relative' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
              >
                {/* Step num */}
                <div style={{ flexShrink:0 }}>
                  <div style={{ width:60,height:60,borderRadius:18,background:`rgba(${t.rgb},.12)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26, color: t.accent }}>{icon}</div>
                </div>

                {/* Content */}
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:10, flexWrap:'wrap' }}>
                    <span className="g-text font-display" style={{ backgroundImage:t.grad, fontSize:13, fontWeight:800, letterSpacing:'.1em' }}>STEP {n}</span>
                    <span style={{ fontSize:12, fontWeight:600, padding:'3px 10px', borderRadius:99, background:`rgba(${t.rgb},.1)`, color:t.accent, border:`1px solid rgba(${t.rgb},.2)` }}>{time}</span>
                  </div>
                  <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:22, color:t.textHeading, marginBottom:10 }}>{title}</h3>
                  <p style={{ fontSize:15, lineHeight:1.75, color:t.text, marginBottom:16 }}>{desc}</p>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'8px 16px', borderRadius:99, background:`rgba(${t.rgb},.08)`, border:`1px solid ${t.border}` }}>
                    <span style={{ color:t.accent, display: 'flex' }}><FileText size={16} /></span>
                    <span style={{ fontSize:13, fontWeight:600, color:t.textHeading }}>Deliverable:</span>
                    <span style={{ fontSize:13, color:t.text }}>{deliverable}</span>
                  </div>
                </div>

                {/* Number */}
                <div style={{ position: 'absolute', top: 20, right: 24, fontSize:'clamp(2.5rem,5vw,5rem)', fontWeight:900, lineHeight:1, opacity:.05, color:t.textHeading, fontFamily:'Syne,sans-serif', userSelect:'none', pointerEvents: 'none' }}>{n}</div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── VALUES ── */}
      <section className="sec" style={{ background:t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <Badge t={t}>Our Values</Badge>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>Why Clients <span className="g-text" style={{ backgroundImage:t.grad }}>Stay With Us</span></h2>
          </div>
          <div className="grid-4">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:20, padding:'32px 24px', textAlign:'center' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:36, marginBottom:16, color: t.accent }}>{icon}</div>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:17, color:t.textHeading, marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:14, lineHeight:1.7, color:t.text }}>{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap" style={{ textAlign:'center' }}>
          <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:16 }}>
            Ready to Start <span className="g-text" style={{ backgroundImage:t.grad }}>Step One?</span>
          </h2>
          <p style={{ fontSize:16, color:t.text, marginBottom:32 }}>Book your free discovery call — we'll show you exactly how we'd approach your brand.</p>
          <a href="tel:03376062635" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration:'none' }}>Book Discovery Call <Rocket size={18} /></a>
        </AnimatedReveal>
      </section>
    </main>
  )
}
