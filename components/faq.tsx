'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Berapa lama pengerjaan repaste laptop?',
    a: 'Untuk repaste standar, prosesnya memakan waktu 1–2 jam. Deep clean bisa lebih lama tergantung kondisi perangkat, namun kami selalu berusaha selesai di hari yang sama.',
  },
  {
    q: 'Apakah data di laptop saya aman?',
    a: 'Sangat aman. Kami hanya membersihkan dan mengganti pasta termal pada bagian hardware — tidak ada akses ke data atau sistem Anda. Proses dilakukan transparan di depan Anda.',
  },
  {
    q: 'Apakah bisa dipanggil ke rumah atau kampus?',
    a: 'Ya! Teknisi kami melayani kunjungan ke rumah, kost, kampus, maupun kantor di area Padang. Hubungi kami untuk menjadwalkan kunjungan.',
  },
  {
    q: 'Apa bedanya Repaste Regular, Phase Change, dan Liquid Metal?',
    a: 'Regular menggunakan pasta termal cair biasa (CryoFuze 5/Arctic MX-6) — cocok untuk penggunaan standar. Phase Change (PTM 7950) lebih tahan lama dan efisien. Liquid Metal konduktivitas tertinggi (128 W/mK) untuk performa ekstrem — tapi butuh penanganan khusus.',
  },
  {
    q: 'Apakah ada garansi jika laptop bermasalah setelah servis?',
    a: 'Ya. Setiap layanan dilindungi garansi 6 bulan. Jika ada masalah terkait pekerjaan kami dalam periode tersebut, kami tangani tanpa biaya tambahan.',
  },
  {
    q: 'Bagaimana cara pembayaran?',
    a: 'Kami menerima transfer bank, dompet digital (GoPay, OVO, Dana), maupun tunai. Pembayaran dilakukan setelah pekerjaan selesai dan Anda puas dengan hasilnya.',
  },
  {
    q: 'Apakah melayani semua merek laptop?',
    a: 'Ya, kami menangani semua merek — Asus, Lenovo, HP, Dell, Acer, MSI, MacBook, dan lainnya. Teknisi kami berpengalaman dengan berbagai tipe dan model.',
  },
]

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      className="border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-card/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4 font-poppins text-sm sm:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className={open ? 'text-primary' : 'text-muted-foreground'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50 bg-card/30">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-4 mx-auto w-fit">
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="text-balance-title mb-4 font-poppins">
            Pertanyaan yang{' '}
            <span className="text-primary">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tidak menemukan jawaban? Tanya langsung via WhatsApp.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} idx={i} />
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
