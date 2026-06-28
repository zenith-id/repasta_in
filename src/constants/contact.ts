export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6282323633819'

export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`

export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'repastain@gmail.com'

export const EMAIL_LINK = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const OPENING_HOURS = {
  weekday: 'Senin–Jumat: 09.00–18.00',
  saturday: 'Sabtu: 10.00–15.00',
} as const
