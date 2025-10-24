# Website Redesign Plan - Marci Metzger Real Estate
**Date:** October 24, 2025
**Designer:** Senior UI/UX Designer & Front-End Developer

---

## 🎯 Project Overview

**Objective:** Complete website renovation with fresh layout, refined styling, and unique visual identity while maintaining professionalism of the reference site.

**Reference Site:** https://marcimetzger.com/
**Approach:** Use reference as baseline but create distinctly different visual identity

---

## 📋 NEW SITE MAP & SECTION ORDER

### Proposed Layout Flow:

```
1. HERO SECTION (Split-Screen Design)
   ├── Left: Bold headline + CTA
   └── Right: Dynamic property showcase carousel

2. TRUST INDICATORS (Horizontal Stats Bar)
   └── Years Experience | Properties Sold | Client Satisfaction | Awards

3. SERVICES GRID (3-Column Interactive Cards)
   └── Residential | Commercial | Investment

4. PROPERTY SHOWCASE (Masonry Grid Gallery)
   └── Featured listings with uniform image alignment

5. ABOUT MARCI (Asymmetric Layout)
   ├── Left: Large portrait
   └── Right: Biography + credentials

6. TESTIMONIALS (Animated Carousel)
   └── Client reviews with photos

7. CONTACT SECTION (Full-Width with Map)
   ├── Left: Contact form
   └── Right: Embedded map + office info

8. FOOTER (Minimal Design)
   └── Links | Social | Legal
```

### **Why This Order?**
- **Hero first** - Immediate impact with split design (different from reference's centered hero)
- **Trust indicators** - Quick credibility before services (reference buries this)
- **Services before properties** - Establish value proposition early
- **Masonry gallery** - Visual interest vs. reference's standard grid
- **Asymmetric about section** - Creates movement and differentiation
- **Testimonials near bottom** - Social proof before CTA
- **Contact with map** - Practical, actionable ending

---

## 🎨 COMPREHENSIVE STYLE GUIDE

### Color Palette (DISTINCT from reference)

```css
/* Primary Colors */
--color-primary: #2C5F2D;        /* Forest Green - trust, growth, stability */
--color-primary-light: #97BC62;  /* Sage Green - fresh, approachable */
--color-primary-dark: #1B3A1C;   /* Deep Forest - sophistication */

/* Secondary Colors */
--color-secondary: #D4A574;      /* Warm Gold - luxury, success */
--color-secondary-light: #E8C9A0; /* Champagne - elegance */
--color-secondary-dark: #B8864F;  /* Bronze - established */

/* Neutrals */
--color-white: #FFFFFF;
--color-off-white: #FAFAF8;      /* Warm white */
--color-gray-100: #F5F5F3;
--color-gray-200: #E5E5E0;
--color-gray-300: #CACAC5;
--color-gray-700: #4A4A45;
--color-gray-900: #2A2A25;
--color-black: #1A1A18;

/* Accent Colors */
--color-accent-success: #7CB342;  /* Green for success states */
--color-accent-warning: #FFA726;  /* Orange for alerts */
--color-accent-info: #29B6F6;     /* Blue for info */
```

**Color Decision Rationale:**
- **Green palette** vs. reference's burgundy/mauve - represents growth, prosperity, Nevada landscape
- **Warm gold accents** - luxury real estate without pretension
- **Warm neutrals** - comfortable, inviting (not stark white)

---

### Typography System

```css
/* Font Families */
--font-heading: 'Playfair Display', serif;  /* Elegant but different from Cinzel */
--font-body: 'Inter', sans-serif;           /* Modern vs. Source Sans Pro */
--font-accent: 'Space Grotesk', sans-serif; /* Contemporary, geometric */

/* Font Sizes (Fluid Typography) */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);    /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);       /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);    /* 16-18px */
--text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);      /* 18-22px */
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);     /* 20-28px */
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);        /* 24-36px */
--text-3xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);           /* 32-48px */
--text-4xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);           /* 40-64px */
--text-5xl: clamp(3rem, 2.5rem + 3vw, 5rem);             /* 48-80px */

/* Line Heights */
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Font Weights */
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.02em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

**Typography Decision Rationale:**
- **Playfair Display** - Classic serif with personality (vs. Cinzel's formality)
- **Inter** - Modern, highly readable, excellent at all sizes
- **Fluid typography** - Better responsive behavior than fixed breakpoints
- **Generous line-height** - Improved readability vs. cramped reference

---

### Spacing System (8px Base Grid)

```css
/* Spacing Scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */

/* Section Padding */
--section-padding-sm: var(--space-12);   /* 48px mobile */
--section-padding-md: var(--space-16);   /* 64px tablet */
--section-padding-lg: var(--space-24);   /* 96px desktop */

/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

**Spacing Decision Rationale:**
- **8px grid system** - Mathematical harmony, easier calculations
- **Larger section padding** - More breathing room than reference
- **Soft shadows** - Modern depth without heavy borders
- **Generous border radius** - Friendly, contemporary feel

---

### Animation & Transition System

```css
/* Timing Functions */
--ease-linear: cubic-bezier(0, 0, 1, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Duration */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;

/* Scroll Animation Settings */
--scroll-offset: 100px;          /* Trigger 100px before viewport */
--scroll-stagger-delay: 100ms;   /* Delay between staggered elements */
```

---

## 🖼️ IMAGE ALIGNMENT STRATEGY

### Uniform Grid System

```
HERO CAROUSEL:
- Aspect ratio: 16:9
- Min height: 600px (desktop), 400px (mobile)
- Object-fit: cover
- Images: 3-5 rotating properties

PROPERTY SHOWCASE (Masonry Grid):
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column

Image specs:
- Width: 100% of grid cell
- Height: Auto (maintains aspect ratio)
- Aspect ratios: Mix of 4:3 and 3:4 for visual interest
- Gap: 24px
- Hover: Scale 1.05 + overlay gradient

SERVICES CARDS:
- Fixed height: 400px
- Background images with overlay
- Icon overlay: 80x80px
- Hover: Icon lift animation

ABOUT SECTION:
- Portrait: 500x600px
- Border radius: 16px
- Shadow: --shadow-xl
- Position: Offset left with text wrap

TESTIMONIALS:
- Client photos: 80x80px circles
- Carousel: 3 visible on desktop, 1 on mobile
- Auto-play: 5s interval
```

**Decision Rationale:**
- **Masonry grid** - More dynamic than reference's uniform grid
- **Mixed aspect ratios** - Visual interest while maintaining structure
- **Consistent gaps** - Clean, organized feel
- **Hover interactions** - Engaging without overwhelming

---

## ⚡ ANIMATION SPECIFICATIONS

### Scroll Animations (Intersection Observer)

```javascript
// Fade In Up
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Fade In Left
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Fade In Right
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Scale In
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// Stagger children (applied via JS)
.stagger-children > * {
  animation-delay: calc(var(--stagger-index) * 100ms);
}
```

### Hover Animations

```css
/* Image Hover */
.image-hover {
  transition: transform var(--duration-slow) var(--ease-smooth);
}
.image-hover:hover {
  transform: scale(1.05);
}

/* Button Hover */
.btn-hover {
  position: relative;
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}
.btn-hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width var(--duration-slow) var(--ease-out),
              height var(--duration-slow) var(--ease-out);
}
.btn-hover:hover::before {
  width: 300px;
  height: 300px;
}

/* Card Lift */
.card-lift {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}
.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
--breakpoint-xs: 0px;       /* 0-479px */
--breakpoint-sm: 480px;     /* 480-767px */
--breakpoint-md: 768px;     /* 768-1023px */
--breakpoint-lg: 1024px;    /* 1024-1279px */
--breakpoint-xl: 1280px;    /* 1280-1535px */
--breakpoint-2xl: 1536px;   /* 1536px+ */

@media (max-width: 479px) {
  /* Extra small devices */
  --section-padding: var(--space-8);
  --heading-size: var(--text-3xl);
}

@media (min-width: 480px) and (max-width: 767px) {
  /* Small devices */
  --section-padding: var(--space-12);
  --heading-size: var(--text-4xl);
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablets */
  --section-padding: var(--space-16);
  --heading-size: var(--text-4xl);
}

@media (min-width: 1024px) {
  /* Desktop */
  --section-padding: var(--space-24);
  --heading-size: var(--text-5xl);
}
```

---

## ♿ ACCESSIBILITY GUIDELINES

### Color Contrast
- Text/Background: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Focus States
```css
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Alt text on all images
- Form labels properly associated

---

## 🎯 KEY DIFFERENTIATORS FROM REFERENCE

| Aspect | Reference Site | New Design |
|--------|---------------|------------|
| **Hero** | Centered, full-width image | Split-screen with carousel |
| **Color** | Burgundy/mauve accents | Forest green & gold |
| **Layout** | Vertical sections | Asymmetric, overlapping elements |
| **Images** | Standard grid | Masonry grid with mixed ratios |
| **Typography** | Cinzel + Source Sans Pro | Playfair + Inter |
| **Animations** | Subtle opacity | Multi-directional scroll animations |
| **Cards** | Simple hover color | Lift effect with shadows |
| **About** | Centered layout | Asymmetric with image offset |
| **CTA** | Standard buttons | Ripple effect buttons |
| **Spacing** | Moderate | Generous, airy |

---

## 📦 IMPLEMENTATION PHASES

### Phase 1: Foundation (Day 1)
- [ ] Set up CSS custom properties
- [ ] Create base typography system
- [ ] Implement spacing utilities
- [ ] Build responsive grid system

### Phase 2: Core Sections (Day 2-3)
- [ ] Hero section with split design
- [ ] Trust indicators bar
- [ ] Services grid with animations
- [ ] Property showcase masonry

### Phase 3: Content Sections (Day 4)
- [ ] About section asymmetric layout
- [ ] Testimonials carousel
- [ ] Contact form + map integration

### Phase 4: Interactions (Day 5)
- [ ] Scroll animation implementation
- [ ] Hover effects on all interactive elements
- [ ] Form validation
- [ ] Mobile menu

### Phase 5: Polish & Optimization (Day 6)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Final responsive adjustments

---

**Next Steps:** Begin implementation with Phase 1 foundation code.
