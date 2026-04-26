export const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1588702547923-7408822a4b85?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1588702547923-7408822a4b85?auto=format&fit=crop&w=500&q=70',
    label: 'Motherboard Repair',
    tag: 'Hardware',
    tall: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=500&q=70',
    label: 'Thermal Paste Repaste',
    tag: 'Repaste',
    tall: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=70',
    label: 'Komponen Internal',
    tag: 'Hardware',
    tall: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=70',
    label: 'Laptop Setelah Deepclean',
    tag: 'Deepclean',
    tall: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=70',
    label: 'Keyboard Cleaning',
    tag: 'Cleaning',
    tall: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=500&q=70',
    label: 'Upgrade SSD & RAM',
    tag: 'Upgrade',
    tall: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=70',
    label: 'Laptop Gaming Repaste',
    tag: 'Repaste',
    tall: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=500&q=70',
    label: 'Workspace Repasta',
    tag: 'Workspace',
    tall: true,
  },
] as const

export const tagColors: Record<string, string> = {
  Repaste:   'bg-primary/10 text-primary border-primary/20',
  Deepclean: 'bg-foreground/8 text-foreground border-foreground/15',
  Hardware:  'bg-primary/10 text-primary border-primary/20',
  Cleaning:  'bg-foreground/8 text-foreground border-foreground/15',
  Upgrade:   'bg-primary/10 text-primary border-primary/20',
  Workspace: 'bg-foreground/8 text-foreground border-foreground/15',
}

export const WHATSAPP_LINK = (msg: string) => `https://wa.me/621919423939?text=${encodeURIComponent(msg)}`