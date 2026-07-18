import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import propertyImg from '../assets/images/property-card.png'

/* TODO: PLACEHOLDER — $58,000 price is likely template data; flag for real content */
/* TODO: PLACEHOLDER — This card repeats in the reference; using same data per spec transcription */
const properties = [
  {
    id: 1,
    image: propertyImg,
    title: 'Riverside Heights',
    beds: 3,
    baths: 2,
    sqft: '1,720',
    address: '45 Willow Lane, Austin, TX 78702',
    price: '$58,000,00',
  },
  {
    id: 2,
    image: propertyImg,
    title: 'Riverside Heights',
    beds: 3,
    baths: 2,
    sqft: '1,720',
    address: '45 Willow Lane, Austin, TX 78702',
    price: '$58,000,00',
  },
  {
    id: 3,
    image: propertyImg,
    title: 'Riverside Heights',
    beds: 3,
    baths: 2,
    sqft: '1,720',
    address: '45 Willow Lane, Austin, TX 78702',
    price: '$58,000,00',
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

export default function PopularArea() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.offsetWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section-spacing bg-bg-base">
      <div className="container-main">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              Popular In your Area
            </h2>
          </div>

          {/* Carousel Controls and Subtext */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <p
              className="text-base"
              style={{ color: 'var(--color-text-muted)' }}
            >
              The most viewed and favorited homes in the past day.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="btn-icon-circle"
                aria-label="Previous properties"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="btn-icon-circle btn-icon-circle-solid"
                aria-label="Next properties"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards — horizontal scroll with snap on mobile, 3-col grid on desktop */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {properties.map((property, i) => (
            <motion.article
              key={property.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="min-w-[85%] sm:min-w-[60%] lg:min-w-0 snap-start flex-shrink-0 cursor-pointer"
            >
              <div
                className="group transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-[32px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-4">
                  <h3
                    className="text-lg"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {property.title}
                  </h3>

                  <p
                    className="mt-1 text-sm"
                    style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}
                  >
                    {property.beds} beds · {property.baths} baths · {property.sqft} sq ft
                  </p>

                  <p
                    className="mt-0.5 text-sm"
                    style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}
                  >
                    {property.address}
                  </p>

                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {property.price}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
