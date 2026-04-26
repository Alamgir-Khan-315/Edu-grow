import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'

const SERVICES = [
  { icon:'📱', title:'Social Media Management',
    desc:'Full-cycle management of Instagram, TikTok, LinkedIn, X & YouTube. Posting schedules, community engagement, and follower growth — all handled.',
    tags:['Instagram','TikTok','LinkedIn','X'] },
  { icon:'✍️', title:'Content Creation',
    desc:'Scroll-stopping graphics, reels, carousels, and copy tailored to your brand voice. Our creative team produces 30+ pieces monthly.',
    tags:['Reels','Carousels','Copywriting','Design'] },
  { icon:'📊', title:'Analytics & Reporting',
    desc:'Monthly deep-dive reports with KPI tracking, competitor benchmarking, and actionable roadmaps to continuously improve ROI.',
    tags:['KPIs','Dashboards','Insights','ROI'] },
  { icon:'💰', title:'Paid Advertising',
    desc:'High-ROAS ad campaigns on Meta, TikTok, Google & YouTube. From audience research to creative testing and full optimisation.',
    tags:['Meta Ads','Google Ads','TikTok Ads','Retargeting'] },
  { icon:'🌟', title:'Influencer Marketing',
    desc:'Identify, negotiate, and manage creator partnerships that authentically amplify your brand to highly targeted audiences.',
    tags:['Nano','Micro','Macro','UGC'] },
  { icon:'🎯', title:'Brand Strategy',
    desc:'Brand positioning, voice guidelines, visual identity, and a 12-month growth roadmap built specifically around your goals.',
    tags:['Positioning','Identity','Voice','Roadmap'] },
]

const PROCESS = [
  { n:'01', title:'Audit & Research', desc:'We analyse your current channels, audience, and competitors to find the biggest opportunities.' },
  { n:'02', title:'Strategy Build',   desc:'A tailored social strategy with content pillars, posting cadence, and campaign calendar.' },
  { n:'03', title:'Create & Publish', desc:'Our team produces and schedules all content, managing engagement daily.' },
  { n:'04', title:'Report & Refine',  desc:'Monthly review meetings with performance data and optimised next-steps.' },
]

const PLATFORMS = ['Instagram','TikTok','LinkedIn','X / Twitter','YouTube','Facebook','Pinterest','Snapchat']

function Badge({ t, children }) {
  return <span className="badge" style={{ background:`rgba(${t.rgb},.12)`, color:t.accent, border:`1px solid rgba(${t.rgb},.25)`, marginBottom:20 }}><span style={{ width:6,height:6,borderRadius:'50%',background:t.accent,display:'inline-block' }}/>{children}</span>
}

export default function Services({ theme: t }) {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── PAGE HERO ── */}
      <section style={{ background:t.bg, padding:'80px 0 64px', position:'relative', overflow:'hidden' }}>
        <div className="blob" style={{ width:600,height:600,background:`radial-gradient(circle,rgba(${t.rgb},.18),transparent 70%)`,top:-200,right:-150,pointerEvents:'none' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <Badge t={t}>What We Offer</Badge>
          <h1 className="hero-h font-display" style={{ color:t.textHeading, fontSize:'clamp(2.4rem,5vw,4.5rem)', marginBottom:18 }}>
            Social Media <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Services</span>
          </h1>
          <p style={{ fontSize:17, color:t.text, maxWidth:560, margin:'0 auto 36px', lineHeight:1.75 }}>
            From strategy to execution — we manage every facet of your social presence so you can focus on running your business.
          </p>
          <Link to="/contact" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow }}>Get a Free Audit →</Link>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="sec" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>Our <span className="g-text" style={{ backgroundImage:t.grad }}>Six Core</span> Services</h2>
          </div>
          <div className="grid-3">
            {SERVICES.map(({ icon, title, desc, tags }) => (
              <div key={title} className="card card-shine" style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:20, padding:'32px 28px', display:'flex', flexDirection:'column' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ width:54,height:54,borderRadius:16,background:`rgba(${t.rgb},.12)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,marginBottom:18 }}>{icon}</div>
                <h3 style={{ fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:18,color:t.textHeading,marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:14,lineHeight:1.75,color:t.text,marginBottom:18,flex:1 }}>{desc}</p>
                <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                  {tags.map(tag => (
                    <span key={tag} style={{ fontSize:11,fontWeight:600,padding:'4px 10px',borderRadius:99,background:`rgba(${t.rgb},.1)`,color:t.accent,border:`1px solid rgba(${t.rgb},.2)` }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="sec-sm" style={{ background:t.bg }}>
        <AnimatedReveal className="wrap" style={{ textAlign:'center' }}>
          <Badge t={t}>Platforms We Manage</Badge>
          <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:36 }}>Everywhere Your <span className="g-text" style={{ backgroundImage:t.grad }}>Audience Is</span></h2>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:14 }}>
            {PLATFORMS.map(p => (
              <div key={p} style={{ padding:'12px 24px', borderRadius:99, background:t.bgCard, border:`1px solid ${t.border}`, fontSize:14, fontWeight:600, color:t.textHeading, transition:'all .25s' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=t.accent; e.currentTarget.style.color=t.accent; e.currentTarget.style.boxShadow=t.shadow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.color=t.textHeading; e.currentTarget.style.boxShadow='none' }}
              >{p}</div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="sec" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <Badge t={t}>Our Workflow</Badge>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>How We <span className="g-text" style={{ backgroundImage:t.grad }}>Manage</span> Your Social</h2>
          </div>
          <div className="grid-4">
            {PROCESS.map(({ n, title, desc }, i) => (
              <div key={n} style={{ position:'relative' }}>
                <div className="card" style={{ background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:20, padding:'28px 24px', height:'100%' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
                >
                  <div className="g-text font-display" style={{ backgroundImage:t.grad, fontSize:13, fontWeight:800, letterSpacing:'.1em', marginBottom:14 }}>STEP {n}</div>
                  <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:17, color:t.textHeading, marginBottom:10 }}>{title}</h3>
                  <p style={{ fontSize:14, lineHeight:1.7, color:t.text }}>{desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div style={{ display:'none', position:'absolute', top:40, right:-14, color:t.accent, fontSize:20, zIndex:2 }} className="process-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background:t.bg }}>
        <AnimatedReveal className="wrap" style={{ textAlign:'center' }}>
          <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:16 }}>Let's Build Your <span className="g-text" style={{ backgroundImage:t.grad }}>Social Empire</span></h2>
          <p style={{ fontSize:16, color:t.text, marginBottom:32 }}>Start with a free audit — we'll show you exactly where you're leaving growth on the table.</p>
          <Link to="/contact" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow }}>Book Free Audit</Link>
        </AnimatedReveal>
      </section>
    </main>
  )
}
