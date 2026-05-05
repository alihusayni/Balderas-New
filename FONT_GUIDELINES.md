# Homepage font guidelines

Reference for typography as implemented on **`app/page.tsx`** and the components it composes (`InfoTicker`, `ServicesSpotlight`, `ServicesDetailGrid`, `WhyTrustSection`, `MeetOwnerSection`, `TestimonialsSection`, `ContactCtaSection`, plus nested UI such as hero, headings, buttons, and forms).

## Typefaces

| Role | Implementation | Uses |
|------|----------------|------|
| **Display / impact** | `Anton` via `next/font/google` → CSS var **`--font-anton`** | Large titles, ticker, stats, badges line |
| **Body / UI** | **Maison Neue** (`next/font/local` from `/public/fonts/maison`) → **`--font-maison`** via class **`font-maison`** | Paragraphs, buttons, labels, captions |
| **Theme defaults** | Geist Sans / Mono (layout variables) | Available for general UI if needed |

Apply Anton with `"[font-family:var(--font-anton)] …"` where not using shared heading components.

---

## Hero (`app/page.tsx` + `HeroHeading`, `HeroSubheading`, `HeroCtas`)

| Element | Face | Sizes (responsive) | Other |
|---------|------|-------------------|-------|
| **Eyebrow** (“Orange County…”) | Anton | **14px** → **16px (sm)** → **18px (md)** → **20px (lg)** (`text-sm` … `lg:text-xl`) | `tracking-[0.08em]`, `font-medium` |
| **Badge icon** — `Image` only | — | **18×20×24 px** tall (`sm`/`md`), width auto | — |
| **Main hero title** | Anton | **`9vw`** → **`text-6xl`** (sm) → **72px** (md) → **`text-7xl`** (lg) | `leading-[1.05]`, `font-normal` |
| **Subheading** | Maison | **`4.5vw`** → **21px** from `md` | `leading` ~ **1.35** / **1.32**, `font-medium` |
| **Primary / secondary CTAs** | Maison bold | Wrapper: **15 → 16 → 17 px**; link text also **19 → 17 → 18 px** (overlays default button text) | `Button` `size="hero"`: built-in **16 → 18 → 20 px** (`xl`) when links don’t override |
| **Hero CTA arrow SVG** | — | **16×16** px | — |
| **Scroll direction control** (`DirectionButton`) | — | Button **88×88** px circle; **`DirectionArrowIcon`** **33×21** svg (shown as **`h-[21px] w-[33px]`**) | Decorative only |

---

## Info ticker (`InfoTicker`)

| Element | Face | Sizes | Other |
|---------|------|-------|-------|
| **Slide labels** | Anton | **`text-sm`** (14 px) | `tracking-[0.08em]` |
| **TOP CHOICE badge** | — | **`14×14`** px (`Image`) | — |
| **Separator dot** | — | Inherited / square character | Tint `white/80` |

---

## Service spotlight (`ServicesSpotlight`)

| Element | Face | Sizes | Notes |
|---------|------|-------|-------|
| **Label** (“Service Spotlight”) | Maison | **`text-lg` (18 px)** → **`sm:text-xl` (20 px)** → **`md:text-2xl` (24 px)**; **`xl:font-medium`** | Default **`font-bold`** until `xl` |
| **Stacked mega lines** (“Dumpsters…”) | Anton | **`clamp(42px, 10vw, 100px)`**, **lg** line-height **128px** | Uppercase stack, gradient fills |
| **Supporting line** | Maison | **`5vw`** → **28px** (`sm`+), **xl** **`1.5vw`** | `leading-[1.15]`, weight **bold** → **medium** (`md`/`xl`) |
| **Side list** | Maison | **`5vw`** → **24px**, **xl** **`1.2vw`** | — |
| **CTAs** | Maison | **`text-base` / `md:17`** (desktop hidden link); mobile link **15 → 16 → 17 px** | Uses hero `Button` |

---

## Services detail grid (`ServicesDetailGrid`)

Uses **`SectionHeading`**, **`SectionSubheading`**, and per-feature copy.

### Section headings (shared primitive `SectionHeading`)

Default (most rows):

| Breakpoint | Size |
|------------|------|
| base | **34 px** |
| sm | **40 px** |
| md | **46 px** |
| lg | **54 px** |

Anton, `leading-[1.05]`, `tracking-[-0.02em]`.

### Section subheading (`SectionSubheading`)

| Breakpoint | Size |
|------------|------|
| base | **`text-sm`** + semibold (~14 px) |
| sm | **15 px** |
| md+ | **`text-base`** → **17 px** (lg) |
| Leading | **`1.45`** |

### Feature rows (icon + title + description)

| Part | Maison | Sizes |
|------|--------|-------|
| **Icon slot** | — | **`h-10 w-10`** (40 px); inline SVGs mostly **16×16**, **20×20** in one junk icon |
| **Feature title** | Maison | **15 → 17 → 20 px**, `leading-[1.2]`, bold / 700 |
| **Feature description** | Maison | **15 px** mobile → **13 → 14 px** (`sm`/`md`), `leading-[1.35]`, weight 400 |

---

## Why us (`WhyTrustSection`)

| Element | Face | Sizes | Notes |
|---------|------|-------|-------|
| **Eyebrow** (“Why Us?”) | Maison | **18 px (lg)** → **20 px (xl)** (`text-lg`/`sm:text-xl`), semibold | — |
| **Main heading** (`HeroHeading` **overridden**) | Anton | **40 → 54 → 68 → 68 px** (`sm`/`md`/`lg`), uppercase | `leading-[0.95]` |
| **Right blurb** | Maison | **`text-base` → `lg` → `xl`** (16 → 18 → 20 px), **font-black** | — |
| **Card stat number** | Anton | **44 px** desktop-first → **32 px** (`sm`) | `leading-none` |
| **Card title** | Maison | **30 → 24 px** (`sm`) | bold |
| **Card description** | Maison | **`text-base`** + **`sm:text-md`** (if configured in Tailwind theme) | `leading-[1.35]`, medium |

---

## Meet the owner (`MeetOwnerSection`)

| Element | Notes |
|---------|------|
| **Section heading** | Same **`SectionHeading`**, overridden: **→ 56 / 70 / 78 px** (`sm`/`md`/`lg`), uppercase, orange accent line |
| **Body** (`SectionSubheading` override) | **`text-sm` → `base` → 19 px** (`md`), `leading-[1.5]`, medium |

---

## Testimonials (`TestimonialsSection`)

| Element | Face | Sizes |
|---------|------|-------|
| **Eyebrow** (“Testimonial”) | Maison bold | **`text-base` → `lg` (18 px)** (`sm:text-lg`) |
| **Section title** | Anton | **42 → 56 → 72 px** (`sm`/`md`) |
| **Quote body** | Maison | **14 px**, `leading-[1.6]` |
| **Reviewer name** | Maison bold | **15 px** |
| **Date** | Maison | **13 px** |
| **Verified icon** | SVG | **14×14** |
| Carousel nav icons | SVG | **18×18** (`stroke` arrows) |

---

## Contact CTA (`ContactCtaSection` → `ContactCtaText` + `ContactFormPanel`)

### Text column

| Primitive | Face | Sizes |
|-----------|------|-------|
| **`MainHeading`** | Anton | **48 px** → **68 px line / 68–70 px leading** (`lg`) |
| **`SimpleText`** | Maison | **18 px**, **leading 27 px** → **20 / 29** (`lg`) |

Homepage passes white text via `className` on those components.

### Form panel (`ContactFormPanel`)

| Element | Face | Sizes |
|---------|------|-------|
| **Field labels** | Maison | **20 px**, leading **29 px** |
| **Inputs / textarea / select** | Maison | **18 px** |
| **Submit label** (`span`) | Maison bold | **24 px** |
| **Submit arrow** | SVG | **16×16** |

Underlying **`Button`** `hero` sizes still apply (height / padding); label span sets display type size explicitly.

---

## Quick reference — common pixel steps

Rough scale used across the homepage (not exhaustive):

- **13–14 px** — small meta, testimonials date, descriptions (small)
- **15–18 px** — UI chrome, hero subtext breakpoint, inputs, eyebrow adjacent
- **20–21 px** — form labels, simple text breakpoint, spotlight body (fixed)
- **24–28 px** — spotlight list, subsection titles (`SubHeading`), contact submit
- **34–72 px** — section/page titles (`SectionHeading`, `MainHeading`, large section H2)
- **`clamp` / vw** — hero title, spotlight display lines — fluid with caps

---

## Shared components worth reusing

| Component | Typical use |
|-----------|--------------|
| `HeroHeading` / `HeroSubheading` / `HeroCtas` | Full-width heroes |
| `SectionHeading` / `SectionSubheading` | Grey sections, owner block |
| `MainHeading` / `SimpleText` | CTA columns, article-style intros |
| `SubHeading` (Maison **28 → 32 px** lg) | Use elsewhere for Maison section labels |
| `Button` (`size="hero"`) | Primary orange / dark fills with Maison bold |

Keep new sections aligned with these tokens so typography stays coherent with the homepage.
