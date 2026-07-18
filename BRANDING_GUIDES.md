# Horizon Grove — Branding Guide

> Derived from §1.3 (Typography) and §1.4 (Color Palette) of the Visual Spec.
> All values are implemented as CSS custom properties in `src/index.css` via Tailwind v4 `@theme` directive.
> **Never hardcode hex values in components** — always reference tokens.

---

## Color Palette

| Token | CSS Custom Property | Hex | Tailwind Class | Use |
|---|---|---|---|---|
| Background Base | `--color-bg-base` | `#FFFFFF` | `bg-bg-base` | Primary background |
| Background Alt | `--color-bg-alt` | `#F6F6F3` | `bg-bg-alt` | Warm off-white sections (FAQ) |
| Text Primary | `--color-text-primary` | `#111111` | `text-text-primary` | Headings, primary copy |
| Text Muted | `--color-text-muted` | `#7A7A78` | `text-text-muted` | Secondary copy, meta |
| Border Subtle | `--color-border-subtle` | `#E6E6E2` | `border-border-subtle` | Accordion rows, dividers |
| Surface Dark | `--color-surface-dark` | `#0A0A0A` | `bg-surface-dark` | Dark stat cards, footer |
| Surface Light Alt | `--color-surface-light-alt` | `#EFEFEC` | `bg-surface-light-alt` | Light stat cards |
| Button Primary BG | `--color-btn-primary-bg` | `#111111` | `.btn-pill-dark` | Solid dark pill CTAs |
| Button Primary Text | `--color-btn-primary-text` | `#FFFFFF` | — | White text on dark pills |
| Button Inverse BG | `--color-btn-inverse-bg` | `#FFFFFF` | `.btn-pill-light` | Solid light pill CTAs |
| Button Inverse Text | `--color-btn-inverse-text` | `#111111` | — | Dark text on light pills |

> [!IMPORTANT]
> No accent color is in the observed palette. If a muted bronze/clay (`~#A8856C`) or deep forest green (`~#2D5A3D`) accent is desired for "quiet luxury," add it as `--color-accent` and update this guide. Do not add without explicit approval.

---

## Typography

| Role | Font Family | Token / Class | Weight | Size | Tracking | Leading |
|---|---|---|---|---|---|---|
| Display / Headings | DM Sans (fallback: General Sans, Satoshi) | `font-heading` | 700–800 | 36–56px | -0.02em (tight) | 1.1 |
| Body Copy | Inter | `font-body` (default) | 400 | 16px | normal | 1.6 |
| Nav / Eyebrow Labels | Inter | `.eyebrow` | 500–600 | 12–13px | 0.08em (wide) | — |
| Stat / Price Numbers | DM Sans | `font-heading` | 700 | 24–40px | — | 1.2 |

**Casing rules:**
- Headings: Sentence case ("Welcome to Horizon Grove")
- Nav / Eyebrow: UPPERCASE
- Body: Sentence case

---

## Spacing Scale

Based on 8px grid:

| Token | Value | Common Use |
|---|---|---|
| `2` | `8px` | Fine gaps |
| `4` | `16px` | Inline spacing, small gaps |
| `6` | `24px` | Card internal padding (min) |
| `8` | `32px` | Card internal padding (max), component gaps |
| `12` | `48px` | Medium section gaps |
| `16` | `64px` | Large internal gaps |
| `24` | `96px` | Section vertical spacing |
| `30` | `120px` | Maximum section spacing |

---

## Border Radius

| Token | CSS Property | Value | Use |
|---|---|---|---|
| Small-Medium | `--radius-md` | `12px` | FAQ accordion rows |
| Large | `--radius-lg` | `20px` | Cards |
| Extra Large | `--radius-xl` | `24px` | Images, large cards |
| Full | `--radius-full` | `9999px` | Pill buttons, circular icon buttons |

---

## Shadows & Elevation

- **Glass cards (hero only):** `box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)`
- **All other cards:** No shadow. Separation via whitespace and background color alternation.
- **Hover states:** `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` + `translateY(-4px)`

---

## Iconography

- **Library:** Lucide React
- **Style:** Thin outline
- **Icons used:** `ChevronDown`, `ArrowUpRight`, `ChevronLeft`, `ChevronRight`, `Home`, `Menu`, `X`, `Facebook`, `Instagram`
