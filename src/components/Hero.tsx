import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import heroImg from '../assets/images/hero.png'

/* ── Animation variants ── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const slideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' },
  },
}

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen max-lg:min-h-[80vh] w-full overflow-hidden rounded-b-[40px]">
      {/* ── Background image ── */}
      <img
        src={heroImg}
        alt="Horizon Grove residential development"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Gradient scrim overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* ── Content layer ── */}
      <div className="relative z-10 container-main flex flex-col justify-end min-h-screen max-lg:min-h-[80vh] pb-16 lg:pb-24 pt-[120px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
          {/* ── Left: Text content ── */}
          <motion.div
            className="max-w-xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={slideUp}
              className="font-[var(--font-heading)] text-[32px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-white"
            >
              {t('hero.welcome')}
              <br />
              {t('hero.name')}
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="mt-5 lg:mt-6 text-white/80 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div variants={slideUp} className="mt-8">
              <button
                onClick={onOpenModal}
                className="btn-pill btn-pill-light"
              >
                {t('hero.viewApartments')}
              </button>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating cards ── */}
          <div className="flex flex-col items-end gap-4 lg:gap-5 shrink-0">
            {/* Availability badge */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="glass-card px-5 py-4 lg:px-6 lg:py-5"
            >
              <span className="block text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
                {t('hero.availability')}
              </span>
              <span className="block mt-1 text-[15px] lg:text-base font-semibold text-text-primary">
                {t('hero.limitedUnits')}
              </span>
            </motion.div>

            {/* Construction process card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              className="glass-card px-5 py-5 lg:px-6 lg:py-6 w-[260px] lg:w-[280px]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] lg:text-base font-semibold text-text-primary leading-snug">
                  {t('hero.constructionProcess')}
                </h3>
                <button
                  className="btn-icon-circle btn-icon-circle-solid w-10 h-10 lg:w-11 lg:h-11"
                  aria-label="View construction details"
                >
                  <ArrowUpRight className="w-[18px] h-[18px]" />
                </button>
              </div>

              {/* Progress section */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.06em]">
                    {t('hero.complete')}
                  </span>
                  <span className="text-[14px] font-semibold text-text-primary">
                    75%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-[6px] w-full rounded-full bg-border-subtle overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-surface-dark"
                    initial={{ width: '0%' }}
                    animate={{ width: '75%' }}
                    transition={{
                      duration: 1.2,
                      delay: 0.9,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
