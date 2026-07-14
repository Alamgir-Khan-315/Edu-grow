import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'
import { CalendarCheck, Video, Megaphone, Laptop, Building2, Music, Trophy, Rocket, GlassWater, GraduationCap, Globe, Users, Camera, Mic2, MapPin, Check } from 'lucide-react'
import CountUp from '../components/CountUp'

// Gallery Images
import corporateImg from '../assets/events/corporate.png'
import musicImg from '../assets/events/music.png'
import awardImg from '../assets/events/award.png'
import launchImg from '../assets/events/launch.png'

const EVENTS = [
  { id: 'event-planning', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', icon: <CalendarCheck size={32} strokeWidth={1.5} />, title:'Event Planning & Coordination',
    desc:'Full end-to-end event management — venue sourcing, vendor coordination, timelines, logistics, and on-the-day supervision for flawless execution.',
    features:['Venue Sourcing','Vendor Management','Run-of-Show','On-site Team'] },
  { id: 'videography-photography', img: '/assets/videography.png', icon: <Camera size={32} strokeWidth={1.5} />, title:'Videography & Photography',
    desc:'Professional visual storytelling for your events. High-end cinematic videography and candid photography to capture every important moment in stunning detail.',
    features:['Event Videography','Cinematic Editing','Portrait & Candid','Fast Turnaround'] },
  { id: 'event-hosting', img: '/assets/hosting.png', icon: <Mic2 size={32} strokeWidth={1.5} />, title:'Professional Event Hosting',
    desc:'Expert MCs and hosts to lead your event with high energy and professionalism. We ensure smooth transitions and keep your audience fully engaged.',
    features:['Professional MCs','Stage Hosting','Interactive Q&A','Scripting & Prep'] },
  { id: 'event-promotion', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop', icon: <Megaphone size={32} strokeWidth={1.5} />, title:'Event Promotion & Marketing',
    desc:'Pre-event buzz campaigns, ticket campaigns, email sequences, influencer seeding, and post-event content to maximise attendance and reach.',
    features:['Social Campaigns','Email Marketing','Influencer Outreach','Press & PR'] },
  { id: 'virtual-events', img: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=800&auto=format&fit=crop', icon: <Laptop size={32} strokeWidth={1.5} />, title:'Virtual & Hybrid Events',
    desc:'Fully managed virtual conferences, webinars, and hybrid events with interactive Q&A, breakout rooms, and global audience management.',
    features:['Webinars','Conferences','Breakout Rooms','Global Reach'] },
]

const TYPES = [
  { icon: <Building2 size={32} strokeWidth={1.5} />, label:'Corporate Conferences' },
  { icon: <Music size={32} strokeWidth={1.5} />, label:'Music & Festivals' },
  { icon: <Trophy size={32} strokeWidth={1.5} />, label:'Award Ceremonies' },
  { icon: <Rocket size={32} strokeWidth={1.5} />, label:'Product Launches' },
  { icon: <GlassWater size={32} strokeWidth={1.5} />, label:'Social Events' },
  { icon: <GraduationCap size={32} strokeWidth={1.5} />, label:'Academic Events' },
  { icon: <Globe size={32} strokeWidth={1.5} />, label:'Virtual Summits' },
  { icon: <Users size={32} strokeWidth={1.5} />, label:'Networking Events' },
]

const NUMBERS = [
  { n:'200+', label:'Events Produced' },
  { n:'50K+', label:'Total Attendees' },
  { n:'15+',  label:'Countries' },
  { n:'100%', label:'On-time Delivery' },
]

const GALLERY = [
  { img: corporateImg, title: 'Global Tech Summit 2023', location: 'Singapore', category: 'Corporate' },
  { img: musicImg, title: 'Summer Beats Festival', location: 'London', category: 'Music' },
  { img: awardImg, title: 'Annual Industry Awards', location: 'New York', category: 'Awards' },
  { img: launchImg, title: 'NextGen Product Reveal', location: 'Tokyo', category: 'Product Launch' },
]

function Badge({ t, children }) {
  return <span className="badge" style={{ background:`rgba(${t.rgb},.12)`, color:t.accent, border:`1px solid rgba(${t.rgb},.25)`, marginBottom:20 }}><span style={{ width:6,height:6,borderRadius:'50%',background:t.accent,display:'inline-block' }}/>{children}</span>
}

export default function Events({ theme: t }) {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── PAGE HERO ── */}
      <section style={{ background:t.bg, padding:'80px 0 64px', position:'relative', overflow:'hidden' }}>
        <div className="blob" style={{ width:700,height:700,background:`radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`,top:-250,left:-200,pointerEvents:'none' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <Badge t={t}>Event Management</Badge>
          <h1 className="hero-h font-display" style={{ color:t.textHeading, fontSize:'clamp(2.4rem,5vw,4.5rem)', marginBottom:18 }}>
            Events That <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Leave a Mark</span>
          </h1>
          <p style={{ fontSize:17, color:t.text, maxWidth:580, margin:'0 auto 36px', lineHeight:1.75 }}>
            From intimate brand activations to large-scale conferences — we plan, produce, and promote events that people remember.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow }}>Plan My Event →</Link>
            <Link to="/process" className="btn-outline btn" style={{ color:t.accent, border:`1.5px solid rgba(${t.rgb},.35)` }}>See Our Process</Link>
          </div>
        </div>
      </section>

      {/* ── EVENT NUMBERS ── */}
      <section style={{ background:t.bgSection, padding:'56px 0' }}>
        <AnimatedReveal className="wrap">
          <div className="stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:t.border, borderRadius:20, overflow:'hidden' }}>
            {NUMBERS.map(({ n, label }) => (
              <div key={label} style={{ background:t.bgCard, padding:'clamp(24px, 5vw, 36px) 16px', textAlign:'center' }}>
                <div className="g-text font-display" style={{ backgroundImage:t.grad, fontSize:'clamp(1.6rem,4vw,2.8rem)', fontWeight:900, lineHeight:1 }}>
                  <CountUp end={n} />
                </div>
                <div style={{ fontSize:12, color:t.textMuted, marginTop:8, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '.05em' }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── EVENT SECTIONS ── */}
      <div>
        {EVENTS.map(({ id, img, icon, title, desc, features }, i) => (
          <section key={id} id={id} className="sec" style={{ background: i % 2 === 0 ? t.bg : t.bgSection, scrollMarginTop: '80px' }}>
            <AnimatedReveal className="wrap flex-res" style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', gap: 'clamp(32px, 5vw, 60px)' }}>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 24 }}>{icon}</div>
                <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 32, color: t.textHeading, marginBottom: 16 }}>{title}</h2>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: t.text, marginBottom: 24 }}>{desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {features.map(f => (
                    <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 99, background: `rgba(${t.rgb},.1)`, color: t.accent, border: `1px solid rgba(${t.rgb},.2)` }}><Check size={14} strokeWidth={2.5} /> {f}</span>
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

      {/* ── EVENT TYPES ── */}
      <section className="sec-sm" style={{ background:t.bgSection }}>
        <AnimatedReveal className="wrap" style={{ textAlign:'center' }}>
          <Badge t={t}>Types of Events</Badge>
          <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:40 }}>Events We <span className="g-text" style={{ backgroundImage:t.grad }}>Specialise</span> In</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:16 }}>
            {TYPES.map(({ icon, label }) => (
              <div key={label} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background:t.bgCard, border:`1px solid ${t.border}`, borderRadius:18, padding:'28px 20px', textAlign:'center', cursor:'default' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`rgba(${t.rgb},.5)`; e.currentTarget.style.boxShadow=t.shadow }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:32, marginBottom:12, color: t.accent }}>{icon}</div>
                <div style={{ fontSize:14, fontWeight:600, color:t.textHeading }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── RECENT EVENTS GALLERY ── */}
      <section className="sec" style={{ background:t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <Badge t={t}>Recent Highlights</Badge>
            <h2 className="sec-h font-display" style={{ color:t.textHeading }}>Experience the <span className="g-text" style={{ backgroundImage:t.grad }}>Magic</span></h2>
            <p style={{ color:t.text, fontSize:16, marginTop:12 }}>A glimpse into some of our most successful recent collaborations.</p>
          </div>
          
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:24 }}>
            {GALLERY.map(({ img, title, location, category }) => (
              <div key={title} className="card-shine" style={{ position:'relative', borderRadius:24, overflow:'hidden', height:350, background:t.bgCard, border:`1px solid ${t.border}`, cursor:'pointer', group:'true' }}
                onMouseEnter={e => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  const imgEl = e.currentTarget.querySelector('img');
                  if (overlay) overlay.style.opacity = '1';
                  if (imgEl) imgEl.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  const overlay = e.currentTarget.querySelector('.overlay');
                  const imgEl = e.currentTarget.querySelector('img');
                  if (overlay) overlay.style.opacity = '0';
                  if (imgEl) imgEl.style.transform = 'scale(1)';
                }}
              >
                <img src={img} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                
                <div className="overlay" style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:32, opacity:0, transition:'opacity .4s ease' }}>
                  <span style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:1, color:t.accent, marginBottom:8 }}>{category}</span>
                  <h3 style={{ color:'#fff', fontSize:22, fontWeight:700, marginBottom:4, fontFamily:'Syne,sans-serif' }}>{title}</h3>
                  <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, display: 'inline-flex', alignItems: 'center', gap: 6 }}><MapPin size={14} /> {location}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </section>

      {/* ── CTA ── */}
      <section className="sec-sm" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap">
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 28, padding: 'clamp(40px, 8vw, 72px) clamp(24px, 6vw, 48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="blob" style={{ width:400,height:400,background:`radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`,top:-80,left:'50%',transform:'translateX(-50%)',pointerEvents:'none' }} />
            <div style={{ position:'relative', zIndex:1 }}>
              <h2 className="sec-h font-display" style={{ color:t.textHeading, marginBottom:16 }}>
                Tell Us About <span className="g-text anim-grad" style={{ backgroundImage:t.grad }}>Your Event</span>
              </h2>
              <p style={{ fontSize:16, color:t.text, marginBottom:32 }}>Get a custom quote in 24 hours. No commitment required.</p>
              <Link to="/contact" className="btn btn-lg" style={{ background:t.grad, color:'#fff', boxShadow:t.shadow, display: 'inline-flex', alignItems: 'center', gap: 8 }}>Request a Quote <CalendarCheck size={18} /></Link>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  )
}
