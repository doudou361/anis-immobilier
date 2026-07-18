import { motion } from 'framer-motion'
import marketHouse from '../assets/images/market-house.png'

/* NOTE: Headline reconstructed from partially cropped reference — not directly observed */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function MarketPerformance() {
  return (
    <section className="section-spacing bg-bg-base">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column — Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              Market Performance
              <br />
              &amp; Overview
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Real-time data and in-depth analysis of local real estate trends to
              support smarter decisions for buyers, sellers, and investors
            </motion.p>

            {/* Stat Cards */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-row gap-4 w-full"
            >
              {/* Dark Stat Card */}
              <div
                className="p-6 flex flex-col justify-between flex-1 rounded-[32px] bg-[#0A0A0A]"
              >
                <span
                  className="text-3xl md:text-4xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                  }}
                >
                  18 days
                </span>
                <span
                  className="mt-3 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '14px' }}
                >
                  Average on market
                </span>
              </div>

              {/* Light Stat Card */}
              <div
                className="p-6 flex flex-col justify-between flex-1 rounded-[32px] bg-[#EFEFEC]"
              >
                <span
                  className="text-3xl md:text-4xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  98%
                </span>
                <span
                  className="mt-3 text-sm"
                  style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}
                >
                  Customer Satisfaction
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={marketHouse}
              alt="Modern house showcasing market performance"
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
