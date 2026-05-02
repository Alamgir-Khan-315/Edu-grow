import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import { Smartphone, Calendar, TrendingUp, Target, Star, Rocket } from 'lucide-react'
import CountUp from '../components/CountUp'

const STATS = [
  { n:'500+', label:'Happy Clients' },
  { n:'10M+', label:'Monthly Reach' },
  { n:'200+', label:'Events Produced' },
  { n:'98%',  label:'Client Retention' },
]

const HIGHLIGHTS = [
  { icon: <Smartphone size={28} strokeWidth={1.5} />, title:'Social Media',  desc:'Full platform management — Instagram, TikTok, LinkedIn, X, YouTube. We handle posting, engagement and growth.', to:'/services' },
  { icon: <Calendar size={28} strokeWidth={1.5} />, title:'Event Services', desc:'End-to-end event planning, videography, photography and professional hosting services.', to:'/events' },
  { icon: <TrendingUp size={28} strokeWidth={1.5} />, title:'Analytics',     desc:'Real-time reporting dashboards and monthly deep-dives to keep you ahead of the data.', to:'/services' },
  { icon: <Target size={28} strokeWidth={1.5} />, title:'Paid Ads',      desc:'High-ROAS campaigns across Meta, TikTok, Google and YouTube — setup to scale.', to:'/services' },
]

const TESTIMONIALS = [
  { name:'Sarah Johnson', role:'CEO, Luxe Boutique', initials:'SJ', rating:5,
    quote:'Edugrow took our Instagram from 2K to 85K followers in 6 months. Sales doubled. Absolutely transformative.' },
  { name:'Marcus Davis', role:'Event Director, Apex Corp', initials:'MD', rating:5,
    quote:'Our 2,000-attendee conference was flawless — from live streaming to on-the-day social coverage. Incredible team.' },
  { name:'Priya Sharma', role:'Brand Manager, Nova Foods', initials:'PS', rating:5,
    quote:'3 million TikTok views in a single month. The content team just gets what audiences want.' },
]

function Blob({ t, style }) {
  return <div className="blob" style={{ background: `radial-gradient(circle, rgba(${t.rgb},.22), transparent 70%)`, ...style }} />
}

function Badge({ t, children }) {
  return (
    <span className="badge" style={{ background:`rgba(${t.rgb},.12)`, color:t.accent, border:`1px solid rgba(${t.rgb},.25)`, marginBottom:20 }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background:t.accent, display:'inline-block' }} />
      {children}
    </span>
  )
}

export default function Home({ theme: t }) {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ background:t.bg, position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', alignItems:'center' }}>
        <Blob t={t} style={{ width:700, height:700, top:-200, left:-180, opacity:.7 }} />
        <Blob t={t} style={{ width:500, height:500, bottom:-120, right:-120, opacity:.5 }} />

        {/* Decorative ring */}
        <div className="anim-spin" style={{ position:'absolute', width:520, height:520, borderRadius:'50%', border:`1px dashed rgba(${t.rgb},.15)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

        <div className="wrap" style={{ position:'relative', zIndex:1, paddingTop:140, paddingBottom:100, textAlign:'center' }}>
          <Badge t={t}>Social Media &amp; Events Agency</Badge>

          <h1 className="hero-h font-display anim-up" style={{ color:t.textHeading, marginBottom:24 }}>
            Grow Your{' '}
            <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Brand</span>
            <br />
            Elevate Your{' '}
            <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Events</span>
          </h1>

          <p className="anim-up2" style={{ fontSize:18, lineHeight:1.7, color:t.text, maxWidth:560, margin:'0 auto 40px' }}>
            We craft viral social strategies and produce unforgettable events — turning audiences into loyal communities.
          </p>

          <div className="anim-up3" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/services" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow }}>Explore Services →</Link>
            <Link to="/contact" className="btn-outline btn" style={{ color:t.accent, borderColor:`rgba(${t.rgb},.35)`, border:`1.5px solid rgba(${t.rgb},.35)` }}>Talk to Us</Link>
          </div>

          {/* Stats bar */}
          <div className="anim-up4 stats-grid" style={{ 
            display:'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap:'clamp(16px, 4vw, 48px)', 
            marginTop:80, 
            paddingTop:48, 
            borderTop:`1px solid ${t.border}` 
          }}>
            {STATS.map(({ n, label }) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div className="g-text font-display" style={{ backgroundImage:t.grad, fontSize:'clamp(1.5rem, 5vw, 2.8rem)', fontWeight:900, lineHeight:1 }}>
                  <CountUp end={n} />
                </div>
                <div style={{ fontSize:11, color:t.textMuted, marginTop:6, letterSpacing:'.03em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="sec" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <Badge t={t}>What We Do</Badge>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>Everything You Need to <span className="g-text" style={{ backgroundImage:t.grad }}>Dominate</span></h2>
            <p style={{ color:t.text, marginTop:12, fontSize:16, maxWidth:520, margin:'12px auto 0' }}>One agency. Full stack. Zero gaps.</p>
          </div>
          <div className="grid-2">
            {HIGHLIGHTS.map(({ icon, title, desc, to }) => (
              <Link key={title} to={to} style={{ textDecoration:'none' }}>
                <div className="card card-shine" style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:20, padding:'36px 32px', height:'100%' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
                >
                  <div style={{ width:56, height:56, borderRadius:16, background:`rgba(${t.rgb},.12)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:20 }}>{icon}</div>
                  <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:20, color:t.textHeading, marginBottom:10 }}>{title}</h3>
                  <p style={{ fontSize:14, lineHeight:1.7, color:t.text, marginBottom:16 }}>{desc}</p>
                  <span style={{ fontSize:13, fontWeight:600, color:t.accent }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sec" style={{ background:t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <Badge t={t}>Client Love</Badge>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>What Our Clients <span className="g-text" style={{ backgroundImage:t.grad }}>Say</span></h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map(({ name, role, initials, rating, quote }) => (
              <div key={name} className="card card-shine" style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:20, padding:'32px 28px' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.45)`; e.currentTarget.style.boxShadow=t.glow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ display:'flex', gap:3, marginBottom:16, color:t.accent }}>
                  {Array(rating).fill('').map((_,i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p style={{ fontSize:15, lineHeight:1.75, color:t.text, fontStyle:'italic', marginBottom:24 }}>"{quote}"</p>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:42, height:42, borderRadius:'50%', background:t.grad, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:700, color:'#fff' }}>{initials}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:14, color:t.textHeading }}>{name}</div>
                    <div style={{ fontSize:12, color:t.textMuted }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA BAND ── */}
      <section className="sec-sm" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:28, padding:'clamp(40px, 8vw, 72px) clamp(24px, 6vw, 48px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
            <div className="blob" style={{ width:400, height:400, background:`radial-gradient(circle,rgba(${t.rgb},.18),transparent 70%)`, top:-100, left:'50%', transform:'translateX(-50%)', pointerEvents:'none' }} />
            <div style={{ position:'relative', zIndex:1 }}>
              <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:16 }}>
                Ready to <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Grow?</span>
              </h2>
              <p style={{ fontSize:17, color:t.text, marginBottom:36, maxWidth:460, margin:'0 auto 36px' }}>
                Book a free 30-minute strategy call. No pressure, just insights.
              </p>
              <Link to="/contact" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow, display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book Free Call <Rocket size={18} /></Link>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  )
}
