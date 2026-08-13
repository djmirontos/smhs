# St. Michael's High School — Official Website

> **Live Site:** https://smhs-tangub.vercel.app
> **Repository:** https://github.com/djmirontos/smhs

A modern, mobile-first landing website for **St. Michael's High School, Tangub City Inc.**, Tangub City, Northern Mindanao, Philippines. Built as a community contribution by an alumnus (Class of 2002).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Icons | Lucide React |
| Deployment | Vercel |
| Version Control | GitHub |

---

## Project Structure

```
smhs/
├── public/
│   ├── favicon.ico                  # Official school seal favicon
│   └── images/
│       ├── school-logo.png          # Official school seal (header)
│       ├── logo_white.png           # White version of seal (footer)
│       ├── school-photo.jpg         # Main school photo (hero slideshow)
│       ├── gallery-01.jpg           # Gallery slot 1 (add photo to activate)
│       ├── gallery-02.jpg           # Gallery slot 2 (add photo to activate)
│       ├── gallery-03.jpg           # Gallery slot 3 (add photo to activate)
│       ├── gallery-04.jpg           # Gallery slot 4 (add photo to activate)
│       └── gallery-05.jpg           # Gallery slot 5 (add photo to activate)
├── src/
│   ├── app/
│   │   ├── globals.css              # Global styles, theme tokens, animations
│   │   ├── layout.tsx               # Root layout, metadata, fonts, SEO
│   │   └── page.tsx                 # Main page assembly
│   └── components/
│       ├── Header.tsx               # Sticky header, mobile hamburger nav
│       ├── Hero.tsx                 # Hero section with slideshow gallery
│       ├── Gallery.tsx              # Auto-sliding photo slideshow component
│       ├── About.tsx                # School introduction section
│       ├── EducationLevels.tsx      # Kindergarten / Elementary / High School cards
│       ├── Values.tsx               # Faith, Character, Learning, Service, Community
│       ├── Community.tsx            # Rooted in Community section
│       ├── News.tsx                 # News and announcements placeholders
│       ├── CTA.tsx                  # Call to action section
│       ├── Contact.tsx              # Address, map, contact details
│       ├── Footer.tsx               # Footer with nav, logo, copyright
│       ├── Logo.tsx                 # School seal logo component
│       ├── Reveal.tsx               # Scroll reveal animation wrapper
│       └── BackToTop.tsx            # Fixed back-to-top button
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```powershell
# Clone the repository
git clone https://github.com/djmirontos/smhs.git
cd smhs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```powershell
npm run build
npm run start
```

### Lint

```powershell
npm run lint
```

---

## Adding Photos to the Gallery

The hero slideshow supports up to 6 photos. To add a photo:

1. Save the image as a `.jpg` file
2. Place it in `public/images/`
3. Use one of these exact filenames:

| Filename | Status |
|---|---|
| `school-photo.jpg` | ✅ Active (main photo) |
| `gallery-01.jpg` | ⏳ Placeholder (add photo to activate) |
| `gallery-02.jpg` | ⏳ Placeholder (add photo to activate) |
| `gallery-03.jpg` | ⏳ Placeholder (add photo to activate) |
| `gallery-04.jpg` | ⏳ Placeholder (add photo to activate) |
| `gallery-05.jpg` | ⏳ Placeholder (add photo to activate) |

No code changes needed — dropping the file with the correct name activates it automatically.

---

## Replacing the Logo

| File | Usage |
|---|---|
| `public/images/school-logo.png` | Header (colored seal on light background) |
| `public/images/logo_white.png` | Footer (white version on maroon background) |

Replace either file with an updated version using the same filename.

---

## Updating Content

All content is in the component files under `src/components/`. Each section is self-contained and clearly labeled with comments for placeholder areas that need official information.

### Content still using placeholders:
- Phone number (Contact section)
- Email address (Contact section)
- Facebook page URL (Contact + Footer)
- Official mission/vision statement (About, Values sections)
- News and announcements (News section)
- Faculty and staff information

---

## Deployment

The site is deployed on **Vercel** and connected to this GitHub repository.

Every `git push` to the `main` branch triggers an automatic redeploy.

```powershell
git add .
git commit -m "your message"
git push
```

Vercel handles the rest. Deployment takes approximately 60–90 seconds.

---

## Design System

| Token | Value |
|---|---|
| Primary Maroon | `#7A263A` |
| Dark Maroon | `#5A1B2A` |
| Light Maroon | `#A94B5E` |
| Warm Cream | `#FAF7F3` |
| Gold Accent | `#C7A45A` |
| Dark Text | `#292526` |
| Muted Text | `#6B6465` |

Fonts: **Playfair Display** (headings) + **Inter** (body)

---

## Accessibility

- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)
- All images have descriptive `alt` text
- Keyboard navigable (header, mobile menu, back to top)
- Visible focus states
- `prefers-reduced-motion` respected in all animations
- ARIA labels on interactive elements
- Sufficient color contrast ratios

---

## Browser Support

Tested and confirmed working on:
- Chrome (Desktop + Android)
- Safari (Desktop + iOS)
- Firefox
- Edge

Responsive breakpoints: 320px / 390px / 768px / 1024px / 1280px / 1920px

---

## Important Notice

This website is currently an **unofficial community project** built by an alumnus. It is not yet officially authorized or maintained by St. Michael's High School, Tangub City Inc. All placeholder content is clearly marked and intended to be replaced with official information upon school adoption.

---

## License

All rights reserved — St. Michael's High School, Tangub City Inc.
