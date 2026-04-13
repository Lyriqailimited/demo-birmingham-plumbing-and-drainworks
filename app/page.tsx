export default function Home() {
  const services = ["Plumbing", "Drain Cleaning", "Emergency Plumbing"]
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || '#book'

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(135deg, #2563eb 0%, #f59e0b 100%)' }}
        className="text-white py-24 px-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Birmingham Plumbing and Drainworks</h1>
        <p className="text-xl mb-8 opacity-90">Reliable plumbing and drain solutions in Birmingham, Alabama</p>
        <p className="text-lg mb-6 opacity-80">(205) 862-8351 &mdash; Birmingham, AL</p>
        <a
          href="#widget"
          className="inline-block bg-white font-bold px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
          style={{ color: '#2563eb' }}
        >
          Try AI Receptionist
        </a>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2563eb' }}>
            AI Voice Receptionist
          </h2>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2563eb' }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: '#2563eb' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2563eb' }}>
            Why an AI receptionist?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '24/7 Availability', desc: 'Never miss a lead - our AI answers calls day and night, even on holidays.' },
              { title: 'Instant Booking', desc: 'Customers book appointments instantly without waiting on hold.' },
              { title: 'Never Miss a Call', desc: 'Every inquiry is captured and responded to immediately.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f59e0b' }}>{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#2563eb' }}>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
        <p className="text-white opacity-80 mb-8 text-lg">
          Book a demo call with Birmingham Plumbing and Drainworks today.
        </p>
        <a
          href={bookingLink}
          className="inline-block bg-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition"
          style={{ color: '#2563eb' }}
        >
          Book a Demo Call
        </a>
      </section>
    </main>
  )
}
