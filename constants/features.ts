import { Variants } from 'framer-motion'
import { Shield, Wrench, CheckCircle, Zap } from 'lucide-react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64',
]

export const chartData = [30, 50, 40, 70, 55, 90, 75, 100, 85]

export const servicesData = [
  { icon: Wrench, label: 'Bersih & Pasta Thermal' },
  { icon: Zap, label: 'Upgrade RAM & SSD' },
  { icon: Shield, label: 'Perbaikan Hardware' },
  { icon: CheckCircle, label: 'Instal & Optimasi OS' },
]