# Before/After Gallery Feature Design

**Date:** 2026-04-28  
**Feature:** Before/After Comparison Section  
**Status:** Draft

---

## 1. Overview

**What:**  
Section baru untuk membandingkan kondisi laptop sebelum dan sesudah servis menggunakan compare slider interaktif.

**Why:**  
Memberikan visual proof nyata kepada customers bahwa servis Repasta memberikan hasil nyata. Meningkatkan trust dan conversion rate.

**Success criteria:**  
- Users bisa drag slider untuk lihat perbedaan before/after
- Section loading cepat (lazy load images)
- Mobile-friendly touch interaction
- Konsisten dengan theme Repasta

---

## 2. Requirements

### Must Have
- Compare slider dengan horizontal drag interaction
- 4-6 before/after comparison items
- Mobile touch support
- Responsive layout (1 column mobile, 2 columns desktop)
- Lazy loading images

### Should Have
- Label "Sebelum" dan "Sesudah"
- Handlebar visual di tengah
- Hover state untuk desktop

### Nice to Have
- Autoplay animation
- Lightbox untuk view full size
- Touch-friendly size

---

## 3. Architecture

### Component Structure
```
components/
  ├── before-after-gallery.tsx    # Main section component
  └── ui/
      └── compare-slider.tsx      # Reusable slider component
```

### Data Flow
```
constants/before-after.ts  →  before-after-gallery.tsx  →  compare-slider.tsx
        ↓                            ↓                         ↓
   Image pairs              Renders items grid          Individual slider
```

### Dependencies
- `framer-motion` (already installed)
- `@tabler/icons-react` (for handlebar icon) - **NOTE:** May need to add
- No @tsparticles dependency (simplified version)

---

## 4. UI/UX Design

### Layout
```
┌─────────────────────────────────────────────┐
│              Section Header                 │
│         "Transformasi Nyata"                 │
│     "Lihat perbedaan sebelum &             │
│      sesudah servis kami"                   │
├─────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐ │
│  │ [Compare Slider] │  │ [Compare Slider] │ │
│  │  Before │After   │  │  Before │After   │ │
│  │  ←──────●───────→│  │  ←──────●───────→│ │
│  │     Laptop Kotor │  │   Kipas Bersih   │ │
│  └───────────────────┘  └───────────────────┘ │
│  ┌───────────────────┐  ┌───────────────────┐ │
│  │ [Compare Slider] │  │ [Compare Slider] │ │
│  └───────────────────┘  └───────────────────┘ │
├─────────────────────────────────────────────┤
│        CTA: "Lihat semua portofolio"         │
│              (link ke gallery)               │
└─────────────────────────────────────────────┘
```

### Slider Interaction
- **Desktop:** Drag handlebar horizontally with mouse
- **Mobile:** Touch and drag
- **Handlebar:** Vertical line dengan drag handle di tengah
- **Labels:** "Sebelum" (kiri) dan "Sesudah" (kanan) overlay

### Responsive Breakpoints
| Breakpoint | Columns | Card Width |
|------------|---------|------------|
| Mobile (<640px) | 1 | 100% |
| Tablet (640-1024px) | 2 | 50% |
| Desktop (>1024px) | 2 | auto |

---

## 5. Implementation

### New Files
| File | Purpose |
|------|---------|
| `components/before-after-gallery.tsx` | Main section with grid layout |
| `components/ui/compare-slider.tsx` | Reusable slider component |
| `constants/before-after.ts` | Before/after image pairs data |

### File Changes
| File | Change |
|------|--------|
| `app/page.tsx` | Add `<BeforeAfterGallery />` component |
| `constants/index.ts` | Export from `before-after.ts` |

### CompareSlider Component API
```typescript
interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}
```

### Data Structure
```typescript
// constants/before-after.ts
export const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "...",
    afterImage: "...",
    beforeAlt: "Laptop kotor sebelum deep clean",
    afterAlt: "Laptop bersih setelah deep clean",
  },
  // ... 4-6 items
]
```

---

## 6. Styling

### Theme Consistency
- Use existing Tailwind CSS tokens from globals.css
- Border radius: `rounded-2xl` (matching gallery)
- Primary color for handlebar accent
- Consistent with hero/features section styling

### Colors
- Background: `bg-background`
- Border: `border-border`
- Handlebar: gradient `from-primary to-transparent`

---

## 7. Images

### Image Sources
- Use existing gallery images from `constants/gallery.ts`
- Create before/after pairs dari foto yang sama
- Or add new dedicated before/after images

### Image Sizes
- Thumb: 500x400px (grid view)
- Full: Original (for lightbox if implemented)
- Format: WebP preferred, fallback JPEG

---

## 8. Technical Notes

### Performance
- Lazy load all images
- Use Next.js Image component
- No heavy particles (simplified compare, no sparkles)
- Mobile-first approach

### Accessibility
- `aria-label` on slider
- Keyboard accessible handlebar (future enhancement)
- Alt text for both images

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Touch support for mobile
- CSS clip-path for image reveal

---

## 9. Open Questions

- [x] ~~Lokasi section~~ → Section terpisah (between Services & Features)
- [x] ~~Jumlah items~~ → 4-6 items
- [x] ~~Interaction~~ → Horizontal drag slider
- [x] ~~Dependencies~~ → No sparkles, simplified version
- [ ] Image sources (use existing or add new?)

---

## 10. Next Steps

1. Create `components/ui/compare-slider.tsx`
2. Create `constants/before-after.ts`
3. Create `components/before-after-gallery.tsx`
4. Update `app/page.tsx`
5. Test on mobile

---

> **Status:** Draft → In Review → Approved → In Progress → Done