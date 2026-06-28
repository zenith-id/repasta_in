# CTA and Google Maps Redesign

**What:** Redesign the current Call to Action (CTA) / Contact section of Repasta to use a premium split-grid layout (2 columns on desktop) with a custom-designed, highly stylized dark-mode map mock-up featuring an animated pulsing pin location marker and a floating glassmorphic info bar linking to Google Maps.  
**Why:** The current CTA section is simple and lacks visual impact for the location representation. An interactive-feel, stylized, high-fidelity dark-mode map mockup adds premium polish, showcases the Bandung shop location beautifully, avoids heavy iframe loading scripts for superior performance, and improves user conversion for in-person visits.  
**Success criteria:**
- The CTA section is visually stunning, matching the rest of the dark/navy modern aesthetic.
- The map card has a pulsing location pin and a floating glassmorphism card.
- Performance remains high (no external iframe blocking main thread).
- Fully responsive layout from mobile (stacked) to desktop (split grid).

---

## 2. Requirements

### Must Have
- A split layout on desktop: Left side contains CTA copy (headline, subtext, primary WhatsApp button, secondary "Lihat Layanan" button) and working hours badge. Right side contains the custom Google Maps mockup card.
- An animated pulsing location pin marking the Repasta shop.
- A floating glassmorphic card on the bottom of the map containing the street address and a "Buka Petunjuk Arah" button pointing to Google Maps.
- Smooth transitions and hover animations (using Framer Motion).
- Full responsiveness (collapsing to a single-column layout on mobile/tablet).

### Should Have
- SVG-based road map graphic of the area around the shop to look sharp on all screen resolutions and loads instantly.
- High-contrast visual elements (glowing borders, smooth gradients, and backdrop blur) matching the site's dark mode palette.

### Nice to Have
- Subtle interactive zoom/panning mockup effect on the SVG map card using Framer Motion.

---

## 3. Architecture

### Component Structure
The changes will be contained in:
- `components/sections/cta.tsx` — Layout, structure, and Framer Motion animations.
- `constants/sections/cta.ts` — Update contents if needed to add detailed address or map links.

### Data Flow
```
[User Action: Click WhatsApp] ----> Opens WhatsApp Chat link
[User Action: Click Direction] ----> Opens Google Maps URL in new window
[User Action: Hover Map Card]  ----> Triggers Framer Motion hover scale and card elevation
```

### External Dependencies
- `framer-motion` (already in package.json)
- `lucide-react` (already in package.json)

---

## 4. UI/UX Design

### Layout
- **Desktop (split-grid)**: 2 columns. Column 1 (Left): 55% width, Column 2 (Right): 45% width. Generous spacing, alignment centered vertically.
- **Mobile (stacked)**: 1 column. Column 2 (Map Card) stack underneath the CTA text.

### Interactions
- Map Card Hover: Card translates `y: -6`, shadow glow intensifies, map image scales `scale: 1.03` inside the overflow-hidden container.
- Pulsing Pin: Marker element has a persistent animation loop containing an inner circle and an expanding glowing ring (`animate-ping`).

### Responsive Breakpoints
- Mobile (< 768px): 1 column, stacked.
- Tablet (768px - 1024px): Stacked or compact split depending on width.
- Desktop (>= 1024px): 2 columns, split-grid.

---

## 5. Implementation Notes

### File Changes
| Action | File | Description |
|--------|------|-------------|
| MODIFY | `components/sections/cta.tsx` | Redesign structure into split-grid layout, add the custom SVG map mock-up, styling, and motion animations. |
| MODIFY | `constants/sections/cta.ts` | Add coordinates/address details to ctaContent for the map representation. |

### New Components
- None (refactoring inside `components/sections/cta.tsx`).

### New Dependencies
- None.

---

## 6. Testing

### Test Cases
- Verify layout renders correctly on mobile, tablet, and desktop viewports.
- Click the WhatsApp CTA button and confirm it opens the correct chat link.
- Click the "Buka Petunjuk Arah" button on the glassmorphic card and confirm it opens Google Maps.
- Verify hover states on the map card (lifting card, scaling SVG map, pulsing marker).

### Edge Cases
- Long address text rendering on extremely narrow screen sizes (e.g., iPhone SE).
- Rapid mouse enter/leave on the map card (ensured smooth transition with Framer Motion spring/duration).

---

## 7. Timeline

| Task | Estimate |
|------|----------|
| Update CTA constants & schema | 5 mins |
| Implement Split Layout and SVG Mockup Map in `cta.tsx` | 30 mins |
| Add Framer Motion Animations & Hover States | 15 mins |
| Cross-device Responsive Testing & Optimization | 10 mins |

---

## 8. Open Questions

- None. All requirements have been approved by the user.

---

**Status:** Approved  
**Last Updated:** 2026-06-18
