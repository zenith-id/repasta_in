export const WHATSAPP_NUMBER = '+621919423939'

export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`

export const OPENING_HOURS = {
  weekday: 'Senin–Jumat: 09.00–18.00',
  saturday: 'Sabtu: 10.00–15.00',
} as const