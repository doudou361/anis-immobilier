import { useForm } from 'react-hook-form'

interface EmailFormValues {
  email: string
}

const navLinks = ['Home', 'Categories', 'Testimonials', 'Blog']

export default function Footer() {
  const { register, handleSubmit } = useForm<EmailFormValues>()

  const onSubmit = (_data: EmailFormValues) => {
    // No submit endpoint — validation stub only
  }

  return (
    <footer
      className="bg-surface-dark text-white"
      style={{ paddingTop: '96px', paddingBottom: '48px' }}
    >
      <div className="container-main">
        {/* ── Top section: headline + subtext ── */}
        <div className="text-center mb-12">
          {/* NOTE: Headline partially cropped in reference ('...ntact us today'), reconstructed */}
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 36px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Contact us today
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Get in touch with our team to find your perfect home.
          </p>
        </div>

        {/* ── Email capture row ── */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 mx-auto"
          style={{ maxWidth: '520px' }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className="w-full sm:flex-1 outline-none rounded-full"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              padding: '14px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
            }}
          />
          <button type="submit" className="btn-pill btn-pill-light flex-shrink-0 rounded-full">
            Subscribe
          </button>
        </form>

        {/* Legal text */}
        <p
          className="text-center text-sm mb-16"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255, 255, 255, 0.4)',
            maxWidth: '520px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          By subscribing, you agree to receive our promotional emails. You can
          unsubscribe at any time.
        </p>

        {/* ── Divider ── */}
        <div
          className="w-full mb-12"
          style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Wordmark */}
          <span
            className="text-white flex-shrink-0"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Horizon Grove
          </span>

          {/* Center — Nav links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right — Social icons */}
          <div className="flex items-center gap-3">
            {/* Twitter / X */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="inline-flex items-center justify-center transition-colors duration-300"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'transparent',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                𝕏
              </span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center transition-colors duration-300"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'transparent',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center transition-colors duration-300"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'transparent',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
