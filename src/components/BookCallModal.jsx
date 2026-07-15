import { useEffect, useMemo, useState } from 'react'
import { X, Calendar, Clock, User, Phone, MessageCircle, CheckCircle2, ArrowLeft, Video } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// YOUR WHATSAPP NUMBER — country code, no "+", no spaces

const AGENCY_WHATSAPP = '923144085533'

const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM',
]

function getNextThreeDays() {
  return [1, 2, 3].map(i => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    return d
  })
}

const fmt = (date) => ({
  weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
  day: date.getDate(),
  month: date.toLocaleDateString('en-US', { month: 'short' }),
  full: date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
})

export default function BookCallModal({ open, onClose, theme: t }) {
  const days = useMemo(getNextThreeDays, [open])
  const [step, setStep] = useState(1)          // 1 slot → 2 details → 3 done
  const [selDay, setSelDay] = useState(null)
  const [selTime, setSelTime] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!open) return null

  const reset = () => { setStep(1); setSelDay(null); setSelTime(null); setName(''); setPhone(''); setError('') }
  const handleClose = () => { reset(); onClose() }

  const handleConfirm = () => {
    if (!name.trim()) { setError('Please enter your name.'); return }
    if (!/^[0-9+\-() ]{7,16}$/.test(phone.trim())) { setError('Please enter a valid phone number.'); return }
    setError('')

    const message =
      `*New Appointment Request — Edugrow*\n\n` +
      `Name: ${name.trim()}\n` +
      `Phone: ${phone.trim()}\n` +
      `Date: ${fmt(selDay).full}\n` +
      `Time: ${selTime}\n\n` +
      `Please confirm my booking. Thank you!`

    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setStep(3)
  }

  const input = {
    width: '100%', padding: '12px 14px', borderRadius: 12, fontSize: 14,
    fontFamily: 'inherit', outline: 'none', background: t.bg,
    border: `1px solid ${t.border}`, color: t.textHeading, marginBottom: 16,
  }
  const label = {
    display: 'flex', alignItems: 'center', gap: 8, fontSize: 13,
    fontWeight: 600, color: t.textHeading, marginBottom: 8,
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}
    >
      {/* Responsive layout rules for this modal only */}
      <style>{`
        .bkm-card { display: flex; width: 100%; max-width: 880px; max-height: 92vh; }
        .bkm-info { width: 40%; }
        .bkm-body { width: 60%; overflow-y: auto; }
        @media (max-width: 760px) {
          .bkm-card { flex-direction: column; max-height: 94vh; overflow-y: auto; }
          .bkm-info, .bkm-body { width: 100%; }
          .bkm-info { padding: 24px 26px 20px !important; }
          .bkm-info-desc, .bkm-info-list { display: none; }
        }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        className="bkm-card anim-up"
        style={{
          background: t.bgCard, border: `1px solid ${t.border}`,
          borderRadius: 24, boxShadow: t.glow, overflow: 'hidden', position: 'relative',
        }}
      >
        {/* Close */}
        <button onClick={handleClose} aria-label="Close booking window"
          style={{ position: 'absolute', top: 16, right: 16, zIndex: 5, background: `rgba(${t.rgb},.1)`, border: 'none', borderRadius: '50%', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.accent, cursor: 'pointer' }}>
          <X size={17} />
        </button>

        {/* ══ LEFT — info panel (like the reference page) ══ */}
        <div className="bkm-info" style={{ padding: '38px 32px', background: t.bgSection, borderRight: `1px solid ${t.border}`, position: 'relative', overflow: 'hidden' }}>
          <div className="blob" style={{ width: 260, height: 260, background: `radial-gradient(circle,rgba(${t.rgb},.2),transparent 70%)`, top: -80, left: -80 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="badge" style={{ background: `rgba(${t.rgb},.12)`, color: t.accent, border: `1px solid rgba(${t.rgb},.25)`, marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.accent, display: 'inline-block' }} />
              Strategy Session
            </span>

            <h2 className="font-display" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.02em', color: t.textHeading, marginBottom: 14 }}>
              Book Your <span className="g-text" style={{ backgroundImage: t.grad }}>Free Growth Call</span>
            </h2>

            <p className="bkm-info-desc" style={{ fontSize: 13.5, lineHeight: 1.75, color: t.text, marginBottom: 24 }}>
              A live call with our team. We map out your social media strategy, look at your current numbers, and show you the exact system that turns followers into loyal clients — even if we never work together.
            </p>

            <div className="bkm-info-list" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: <Clock size={15} />, text: '30 minutes' },
                { icon: <Video size={15} />, text: 'WhatsApp / Phone call' },
                { icon: <CheckCircle2 size={15} />, text: 'Instant confirmation on WhatsApp' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 9, background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.accent, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.textHeading }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ RIGHT — booking flow ══ */}
        <div className="bkm-body" style={{ padding: '38px 32px' }}>

          {/* ── STEP 1 : pick a time ── */}
          {step === 1 && (
            <>
              <h3 className="font-display" style={{ fontSize: 17, fontWeight: 800, color: t.textHeading, marginBottom: 4 }}>Pick a time that works for you</h3>
              <p style={{ fontSize: 12.5, color: t.textMuted, marginBottom: 22 }}>Available for the next 3 days</p>

              <div style={label}><Calendar size={15} color={t.accent} /> Select a date</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 22 }}>
                {days.map(d => {
                  const info = fmt(d)
                  const active = selDay?.toDateString() === d.toDateString()
                  return (
                    <button key={d.toDateString()} onClick={() => setSelDay(d)}
                      style={{
                        padding: '14px 6px', borderRadius: 16, cursor: 'pointer', textAlign: 'center',
                        fontFamily: 'inherit', transition: 'all .25s',
                        background: active ? t.grad : t.bg,
                        border: active ? '1px solid transparent' : `1px solid ${t.border}`,
                        color: active ? '#fff' : t.text,
                        boxShadow: active ? t.shadow : 'none',
                      }}>
                      <div style={{ fontSize: 11, fontWeight: 600, opacity: .85, textTransform: 'uppercase', letterSpacing: '.06em' }}>{info.weekday}</div>
                      <div className="font-display" style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.2, color: active ? '#fff' : t.textHeading }}>{info.day}</div>
                      <div style={{ fontSize: 11, opacity: .85 }}>{info.month}</div>
                    </button>
                  )
                })}
              </div>

              <div style={label}><Clock size={15} color={t.accent} /> Select a time</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 24 }}>
                {TIME_SLOTS.map(time => {
                  const active = selTime === time
                  return (
                    <button key={time} onClick={() => setSelTime(time)} disabled={!selDay}
                      style={{
                        padding: '10px 4px', borderRadius: 99, fontSize: 12.5, fontWeight: 600,
                        fontFamily: 'inherit', transition: 'all .2s',
                        cursor: selDay ? 'pointer' : 'not-allowed',
                        opacity: selDay ? 1 : .4,
                        background: active ? `rgba(${t.rgb},.12)` : 'transparent',
                        border: active ? `1px solid ${t.accent}` : `1px solid ${t.border}`,
                        color: active ? t.accent : t.text,
                      }}>
                      {time}
                    </button>
                  )
                })}
              </div>

              <button onClick={() => setStep(2)} disabled={!selDay || !selTime} className="btn btn-lg"
                style={{
                  width: '100%', justifyContent: 'center', background: t.grad, color: '#fff',
                  boxShadow: (!selDay || !selTime) ? 'none' : t.shadow,
                  opacity: (!selDay || !selTime) ? .45 : 1,
                  cursor: (!selDay || !selTime) ? 'not-allowed' : 'pointer',
                }}>
                Continue →
              </button>
            </>
          )}

          {/* ── STEP 2 : details ── */}
          {step === 2 && (
            <>
              <h3 className="font-display" style={{ fontSize: 17, fontWeight: 800, color: t.textHeading, marginBottom: 18 }}>Almost there — your details</h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderRadius: 14, marginBottom: 20, background: `rgba(${t.rgb},.08)`, border: `1px solid rgba(${t.rgb},.2)` }}>
                <Calendar size={15} color={t.accent} />
                <span style={{ fontSize: 13.5, fontWeight: 600, color: t.textHeading }}>
                  {fmt(selDay).full} · {selTime}
                </span>
              </div>

              <div style={label}><User size={15} color={t.accent} /> Your name</div>
              <input style={input} value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />

              <div style={label}><Phone size={15} color={t.accent} /> WhatsApp number</div>
              <input style={input} value={phone} onChange={e => setPhone(e.target.value)} placeholder="0300 1234567" inputMode="tel" />

              {error && <p style={{ fontSize: 13, color: '#e5484d', marginBottom: 12 }}>{error}</p>}

              <button onClick={handleConfirm} className="btn btn-lg"
                style={{ width: '100%', justifyContent: 'center', gap: 8, background: t.grad, color: '#fff', boxShadow: t.shadow }}>
                <MessageCircle size={17} /> Confirm on WhatsApp
              </button>
              <button onClick={() => setStep(1)}
                style={{ width: '100%', marginTop: 10, padding: 10, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: t.textMuted, fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <ArrowLeft size={14} /> Change date or time
              </button>
            </>
          )}

          {/* ── STEP 3 : done ── */}
          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '30px 4px' }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', margin: '0 auto 18px', background: `rgba(${t.rgb},.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={34} color={t.accent} />
              </div>
              <h3 className="font-display" style={{ fontSize: 19, fontWeight: 800, color: t.textHeading, marginBottom: 10 }}>
                Tap <span className="g-text" style={{ backgroundImage: t.grad }}>Send</span> in WhatsApp
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: t.text, maxWidth: 320, margin: '0 auto 24px' }}>
                WhatsApp opened with your appointment details. Send the message to complete your booking — we'll reply to confirm, and that confirmation stays in your chat as proof.
              </p>
              <button onClick={handleClose} className="btn btn-md"
                style={{ background: t.grad, color: '#fff', boxShadow: t.shadow }}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
