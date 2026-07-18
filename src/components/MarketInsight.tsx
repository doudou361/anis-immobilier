import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import blogImg from '../assets/images/blog-card.png'

/* NOTE: Headline reconstructed from partially cropped reference — not directly observed */

const articles = [
  {
    id: 1,
    image: blogImg,
    title: 'insight.card1.title',
    author: 'insight.card1.author',
    meta: 'insight.card1.meta',
  },
  {
    id: 2,
    image: blogImg,
    title: 'insight.card1.title',
    author: 'insight.card1.author',
    meta: 'insight.card1.meta',
  },
  {
    id: 3,
    image: blogImg,
    title: 'insight.card1.title',
    author: 'insight.card1.author',
    meta: 'insight.card1.meta',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

export default function MarketInsight() {
  const { t } = useTranslation()

  return (
    <section className="section-spacing bg-bg-base">
      <div className="container-main">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            {t('insight.title')}
          </h2>

          <a
            href="#"
            className="text-sm transition-colors duration-200 hover:underline ml-auto"
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '14px',
              textDecorationColor: 'var(--color-text-muted)',
            }}
          >
            {t('insight.viewAll')}
          </a>
        </div>

        {/* Blog Cards Grid — 3 cols on desktop, 1-up stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Image */}
              <div
                className="overflow-hidden rounded-[32px]"
              >
                <img
                  src={article.image}
                  alt={t(article.title)}
                  className="w-full aspect-video object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {t(article.title)}
                </h3>

                <p
                  className="mt-2"
                  style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}
                >
                  {t(article.author)}
                </p>

                <p
                  className="mt-1"
                  style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}
                >
                  {t(article.meta)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
