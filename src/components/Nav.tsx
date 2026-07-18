import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navLinks = ['about', 'features', 'offers', 'apartments'] as const

export default function Nav({ onOpenModal }: { onOpenModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-base shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* ── Wordmark ── */}
          <a
            href="#"
            className={`font-[var(--font-heading)] text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
          >
            Horizon Grove
          </a>

          {/* ── Center Links (desktop ≥ 1024px) ── */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={`text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:opacity-80 ${
                    scrolled ? 'text-text-primary' : 'text-white'
                  }`}
                >
                  {t(`nav.${link}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right side ── */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
              className={`text-[13px] font-medium tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-text-primary' : 'text-white'
              }`}
            >
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* CTA pill (desktop) */}
            <button
              onClick={onOpenModal}
              className={`btn-pill hidden lg:inline-flex items-center gap-2 text-[13px] transition-all duration-300 ${
                scrolled
                  ? 'bg-surface-dark text-white'
                  : 'bg-white/10 text-white backdrop-blur-sm border border-white/20'
              }`}
            >
              {t('nav.consultation')}
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Hamburger (mobile < 1024px) */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? 'text-text-primary' : 'text-white'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-[380px] bg-bg-base flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-border-subtle">
                <span className="font-[var(--font-heading)] text-lg font-bold text-text-primary tracking-tight">
                  Horizon Grove
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-text-primary"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-1 px-6 pt-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <a
                      href={`#${link}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[13px] font-medium uppercase tracking-[0.08em] text-text-primary hover:text-text-muted transition-colors"
                    >
                      {t(`nav.${link}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto px-6 pb-8">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    if (onOpenModal) onOpenModal()
                  }}
                  className="btn-pill btn-pill-dark w-full justify-center"
                >
                  {t('nav.consultation')}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
