export const primaryNav = [
  { label: 'Layanan', href: '#layanan',  id: 'layanan'  },
  { label: 'Harga',   href: '#harga',    id: 'harga'    },
  { label: 'Galeri',  href: '#galeri',   id: 'galeri'   },
] as const

export const mobileNav = [
  { label: 'Layanan',    href: '#layanan',    id: 'layanan'    },
  { label: 'Harga',      href: '#harga',      id: 'harga'      },
  { label: 'Cara Pesan', href: '#cara-pesan', id: 'cara-pesan' },
  { label: 'Galeri',     href: '#galeri',     id: 'galeri'     },
  { label: 'Testimoni',  href: '#testimoni',  id: 'testimoni'  },
  { label: 'FAQ',        href: '#faq',        id: 'faq'        },
] as const

export const WHATSAPP_LINK = (msg: string) => `https://wa.me/621919423939?text=${encodeURIComponent(msg)}`