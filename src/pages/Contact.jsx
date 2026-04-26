import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedReveal from '../components/AnimatedReveal'

const FAQS = [
  { q: 'How quickly can you start?', a: 'We can onboard new clients within 3–5 business days. For events, we recommend reaching out at least 4 weeks before your event date.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with businesses of all sizes — from solo founders to enterprise brands. Our packages scale to fit your budget.' },
  { q: 'What platforms do you manage?', a: 'Instagram, TikTok, LinkedIn, X (Twitter), YouTube, Facebook, Pinterest, and Snapchat. We recommend a focused platform strategy rather than spreading thin.' },
  { q: 'How do I get a quote for my event?', a: `Fill in the contact form with your event details and we'll send a tailored proposal within 24 hours, no obligation.` },
  { q: 'Do I retain ownership of my content?', a: 'Yes — 100%. All content, accounts, and data belong to you. Always.' },
]

const SERVICES_CONTACT = ['Social Media Management', 'Content Creation', 'Paid Advertising', 'Influencer Marketing', 'Analytics & Reporting', 'Event Planning', 'Live Streaming', 'Event Promotion', 'Virtual Events', 'Brand Strategy']

function Badge({ t, children }) {
  return <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 20 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />{children}</span>
}

function FaqItem({ q, a, t }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: `1px solid ${open ? `rgba(${t.rgb},.4)` : t.border}`, borderRadius: 16, overflow: 'hidden', transition: 'border-color .25s', marginBottom: 10 }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: open ? `rgba(${t.rgb},.06)` : t.bgCard, border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background .2s' }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: t.textHeading }}>{q}</span>
        <span style={{ fontSize: 20, color: t.accent, transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s', flexShrink: 0 }}>+</span>
      </button>
      {open && <div style={{ padding: '0 24px 20px', fontSize: 14, lineHeight: 1.75, color: t.text, background: `rgba(${t.rgb},.04)` }}>{a}</div>}
    </div>
  )
}

export default function Contact({ theme: t }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  const inp = {
    width: '100%', padding: '13px 16px', borderRadius: 12,
    border: `1.5px solid ${t.border}`, background: t.bgSection,
    color: t.textHeading, fontSize: 14, outline: 'none', fontFamily: 'Inter,sans-serif',
    transition: 'border-color .2s',
  }
  const focus = e => e.target.style.borderColor = t.accent
  const blur = e => e.target.style.borderColor = t.border

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{ background: t.bg, padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 600, height: 600, background: `radial-gradient(circle,rgba(${t.rgb},.16),transparent 70%)`, bottom: -150, right: -150, pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Badge t={t}>Get In Touch</Badge>
          <h1 className="hero-h font-display" style={{ color: t.textHeading, fontSize: 'clamp(2.4rem,5vw,4.5rem)', marginBottom: 18 }}>
            Let's <span className="g-text anim-grad" style={{ backgroundImage: t.grad }}>Work Together</span>
          </h1>
          <p style={{ fontSize: 17, color: t.text, maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
            Tell us about your project. We'll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="sec" style={{ background: t.bgSection }}>
        <AnimatedReveal className="wrap">
          <div className="contact-grid">

            {/* Left — info */}
            <div>
              <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 28, color: t.textHeading, marginBottom: 16 }}>Contact Information</h2>
              <p style={{ fontSize: 15, color: t.text, lineHeight: 1.75, marginBottom: 36 }}>
                Prefer to reach us directly? We're available via email or phone. Response guaranteed within 24 hours on business days.
              </p>

              {/* Info cards */}
              {[
                { icon: '📧', label: 'Email Us', val: 'hello@edugrow.agency' },
                { icon: '📞', label: 'Call Us', val: '+1 (234) 567-8900' },
                { icon: '📍', label: 'Office', val: '123 Agency St, New York, NY 10001' },
                { icon: '🕐', label: 'Working Hours', val: 'Mon–Fri · 9:00 AM – 6:00 PM EST' },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, padding: '18px 20px', borderRadius: 16, background: t.bgCard, border: `1px solid ${t.border}` }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, letterSpacing: '.05em', textTransform: 'uppercase' }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: t.textHeading, marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ marginTop: 28 }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: t.textMuted, marginBottom: 14 }}>Follow Us</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['𝕏', 'LinkedIn', 'Instagram', 'TikTok', 'YouTube'].map(s => (
                    <button key={s} style={{ padding: '8px 14px', borderRadius: 99, border: `1px solid ${t.border}`, background: `rgba(${t.rgb},.08)`, color: t.text, cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all .2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.background = `rgba(${t.rgb},.16)` }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.text; e.currentTarget.style.background = `rgba(${t.rgb},.08)` }}
                    >{s}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 24, padding: '40px 36px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 24, color: t.textHeading, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontSize: 15, color: t.text, lineHeight: 1.7, marginBottom: 28 }}>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn btn-md" style={{ background: t.grad, color: '#fff' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 22, color: t.textHeading, marginBottom: 28 }}>Send Us a Message</h3>

                  <div className="contact-form-grid">
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={handle} onFocus={focus} onBlur={blur} placeholder="Jane Smith" style={inp} />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handle} onFocus={focus} onBlur={blur} placeholder="jane@company.com" style={inp} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Company</label>
                    <input name="company" value={form.company} onChange={handle} onFocus={focus} onBlur={blur} placeholder="Your Company" style={inp} />
                  </div>

                  <div className="contact-form-grid">
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Service Needed</label>
                      <select name="service" value={form.service} onChange={handle} onFocus={focus} onBlur={blur} style={{ ...inp, appearance: 'none' }}>
                        <option value="">Select service...</option>
                        {SERVICES_CONTACT.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Monthly Budget</label>
                      <select name="budget" value={form.budget} onChange={handle} onFocus={focus} onBlur={blur} style={{ ...inp, appearance: 'none' }}>
                        <option value="">Select budget...</option>
                        {['Under $1K', '$1K–$3K', '$3K–$5K', '$5K–$10K', '$10K+'].map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, display: 'block', marginBottom: 6 }}>Your Message *</label>
                    <textarea required name="message" value={form.message} onChange={handle} onFocus={focus} onBlur={blur} rows={5} placeholder="Tell us about your brand, goals, and what you're looking to achieve..." style={{ ...inp, resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn btn-lg" style={{ background: t.grad, color: '#fff', boxShadow: t.shadow, width: '100%', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* ── FAQ ── */}
      <section className="sec" style={{ background: t.bg }}>
        <AnimatedReveal className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge t={t}>FAQ</Badge>
            <h2 className="sec-h font-display" style={{ color: t.textHeading }}>Common <span className="g-text" style={{ backgroundImage: t.grad }}>Questions</span></h2>
          </div>
          {FAQS.map(faq => <FaqItem key={faq.q} {...faq} t={t} />)}
        </AnimatedReveal>
      </section>

    </main>
  )
}
