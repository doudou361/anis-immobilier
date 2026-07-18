import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { t } = useTranslation()
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null)
  
  const intents = [
    { id: 'buy', label: t('modal.buy') },
    { id: 'sell', label: t('modal.sell') },
    { id: 'rent', label: t('modal.rent') },
    { id: 'invest', label: t('modal.invest') }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation stub
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg bg-bg-base rounded-[32px] p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5 text-text-primary" />
            </button>

            <h2 className="text-3xl font-bold font-[var(--font-heading)] text-text-primary mb-2">
              {t('modal.title')}
            </h2>
            <p className="text-text-muted mb-8">
              {t('modal.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Intent Selector */}
              <div className="grid grid-cols-2 gap-3">
                {intents.map((intent) => (
                  <button
                    key={intent.id}
                    type="button"
                    onClick={() => setSelectedIntent(intent.id)}
                    className={`py-3 px-4 rounded-[16px] text-sm font-medium transition-all ${
                      selectedIntent === intent.id
                        ? 'bg-text-primary text-white'
                        : 'bg-surface-light-alt text-text-primary hover:bg-black/5'
                    }`}
                  >
                    {intent.label}
                  </button>
                ))}
              </div>

              {/* Personal Info */}
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder={t('modal.fullName')}
                  className="w-full bg-surface-light-alt px-5 py-4 rounded-[16px] outline-none border border-transparent focus:border-text-primary/20 transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder={t('modal.phoneNumber')}
                  className="w-full bg-surface-light-alt px-5 py-4 rounded-[16px] outline-none border border-transparent focus:border-text-primary/20 transition-colors"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-muted ml-1">{t('modal.date')}</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-surface-light-alt px-5 py-4 rounded-[16px] outline-none border border-transparent focus:border-text-primary/20 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-muted ml-1">{t('modal.time')}</label>
                  <input
                    type="time"
                    required
                    className="w-full bg-surface-light-alt px-5 py-4 rounded-[16px] outline-none border border-transparent focus:border-text-primary/20 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-pill btn-pill-dark w-full justify-center mt-2"
              >
                {t('modal.book')}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
