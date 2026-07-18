import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import faqImg from '../assets/images/faq-interior.png'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className="border border-border-subtle overflow-hidden"
      style={{ borderRadius: 'var(--radius-md)' }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left cursor-pointer border-none"
        aria-expanded={isOpen}
      >
        <span
          className="text-text-primary font-medium"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '16px' }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0 text-text-muted"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p
                className="text-text-muted leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontSize: '15px' }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const faqItems = [
  {
    /* TODO: PLACEHOLDER — 'homely' wording per reference transcription */
    question: 'Can I personalize my homely?',
    answer:
      'This is a placeholder answer that would contain detailed information about the property and services offered by Horizon Grove.',
  },
  {
    /* TODO: PLACEHOLDER — 'homely' wording per reference transcription */
    question: 'Where can I find homely?',
    answer:
      'This is a placeholder answer that would contain detailed information about the property and services offered by Horizon Grove.',
  },
  {
    /* TODO: PLACEHOLDER — 'homely' wording per reference transcription */
    question: 'What steps to buy a homely?',
    answer:
      'This is a placeholder answer that would contain detailed information about the property and services offered by Horizon Grove.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-bg-alt section-spacing">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left — Image (~40%) */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <img
              src={faqImg}
              alt="Modern interior of a Horizon Grove property"
              className="w-full h-full object-cover rounded-[32px]"
              style={{
                minHeight: '400px',
              }}
            />
          </div>

          {/* Right — Content (~60%) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="eyebrow mb-4">🏠 FAQs</span>

            {/* Headline */}
            {/* TODO: PLACEHOLDER — 'homely' appears verbatim in reference; likely source template product name, not Horizon Grove voice. Flag for rewrite. */}
            <h2
              className="text-text-primary mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Everything about homely
            </h2>

            {/* Copy */}
            {/* TODO: PLACEHOLDER — This paragraph duplicates the Categories section copy in the reference; likely unedited placeholder text. */}
            <p
              className="text-text-muted mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                maxWidth: '520px',
              }}
            >
              We know that buying, selling, or investing in real estate can be
              overwhelming. Here are some frequently asked questions to help
              guide you through the process.
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
