export default function Home() {
  const services = ["Plumbing", "Drain Cleaning", "Emergency Plumbing"]
  const calendarLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book"

  return (
    <main style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc' }}>
      <section style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 9999,
            padding: '6px 16px',
            fontSize: 14,
            color: '#f59e0b',
            marginBottom: 24,
          }}>
            Birmingham, AL · Plumbing & Drain Specialists
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            Birmingham Plumbing and Drainworks
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: 32, lineHeight: 1.6 }}>
            Reliable plumbing and drain solutions in Birmingham, Alabama
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#widget" style={{
              background: '#f59e0b',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Try AI Receptionist
            </a>
            <a href="tel:+12058628351" style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              Call (205) 862-8351
            </a>
          </div>
        </div>
      </section>

      <section id="widget" style={{ padding: '80px 24px', background: '#0f172a' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Talk to Our AI Receptionist</h2>
          <p style={{ color: '#94a3b8', marginBottom: 32 }}>
            Available 24/7 to answer your plumbing questions instantly
          </p>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: 12 }}
          />
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#0c1426' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Our Services</h2>
          <p style={{ color: '#94a3b8', marginBottom: 48 }}>
            Comprehensive plumbing solutions across Birmingham, AL
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {services.map((service) => (
              <div key={service} style={{
                background: '#132f4c',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
              }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'rgba(37, 99, 235, 0.2)',
                  borderRadius: 12,
                  margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>🔧</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#0f172a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Why an AI Receptionist?</h2>
          <p style={{ color: '#94a3b8', marginBottom: 48 }}>
            Never miss a customer enquiry - even at 2am
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { icon: '🕐', title: '24/7 Availability', desc: 'Your AI receptionist never sleeps. Answer calls and book jobs around the clock.' },
              { icon: '📅', title: 'Instant Booking', desc: 'Customers can book jobs instantly without waiting on hold or leaving voicemails.' },
              { icon: '📞', title: 'Never Miss a Call', desc: 'Every enquiry gets a professional response, every time - no more lost leads.' },
            ].map((f) => (
              <div key={f.title} style={{
                background: '#132f4c',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                borderRadius: 16,
                padding: 32,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>
            Ready to grow your plumbing business?
          </h2>
          <p style={{ color: '#bfdbfe', marginBottom: 32, lineHeight: 1.6 }}>
            Book a free demo call and see how an AI receptionist can transform your business.
          </p>
          <a href={calendarLink} style={{
            background: '#f59e0b',
            color: 'white',
            padding: '16px 40px',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Book a Demo Call
          </a>
        </div>
      </section>
    </main>
  )
}
