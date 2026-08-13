# St. Michael's High School Website — Project Roadmap

> Last updated: August 2026
> Maintained by: Alumni contributor (Class of 2002)
> Live site: https://smhs-tangub.vercel.app

---

## Phase 1 — Static Landing Site ✅ COMPLETE

Goal: Build a polished, professional landing website with no backend required.
Status: **Live at https://smhs-tangub.vercel.app**

### Completed

- [x] Project setup — Next.js 16, TypeScript, Tailwind CSS v4
- [x] Theme tokens and global CSS (maroon/cream/gold palette)
- [x] Google Fonts — Playfair Display + Inter
- [x] SEO metadata — title, description, Open Graph
- [x] Favicon — official school seal
- [x] Logo component — official seal (header) + white version (footer)
- [x] Reveal component — scroll animation wrapper
- [x] Header — sticky, mobile hamburger drawer nav, 44px+ tap targets
- [x] Hero section — eyebrow, heading, description, CTA buttons
- [x] Gallery component — auto-sliding photo slideshow (3s per photo, slide transition)
- [x] About section — school introduction
- [x] Education Levels section — Kindergarten, Elementary, High School cards
- [x] Values section — Faith, Character, Learning, Service, Community
- [x] Community section — Rooted in Community
- [x] News section — placeholder announcement cards
- [x] CTA section — maroon call to action
- [x] Contact section — real address, Google Maps embed (lat: 8.062435, lng: 123.748116)
- [x] Footer — white logo, navigation, copyright, disclaimer
- [x] Back to Top button — appears after 400px scroll, maroon circle
- [x] Mobile-first responsive design (320px → 1920px)
- [x] Accessibility — semantic HTML, ARIA, keyboard nav, focus states
- [x] prefers-reduced-motion support across all animations
- [x] QA — Playwright tested across all breakpoints
- [x] Deployed to Vercel — auto-deploy on git push
- [x] GitHub repository — https://github.com/djmirontos/smhs
- [x] README.md and ROADMAP.md documentation

### Real Content Integrated
- [x] Official school seal (`school-logo.png`)
- [x] White logo for footer (`logo_white.png`)
- [x] Real school photo in hero slideshow (`school-photo.jpg`)
- [x] Real address — 3 3rd South Street, Tangub City, Northern Mindanao
- [x] Google Maps embed with exact coordinates
- [x] Correct official school name — St. Michael's High School (apostrophe-s)

---

## Phase 2 — Content & Engagement Features 🔄 IN PROGRESS

Goal: Make the site more engaging and useful for parents, students, and alumni.
Prerequisite: Present Phase 1 to school administration and get official buy-in.

### Queue (in order)

- [ ] **Enrollment CTA / Interest Form**
  — Simple form: parent name, student name, grade level, contact number
  — No backend needed initially — use Formspree or Resend for email delivery
  — Prominent placement above the footer

- [ ] **Facebook Feed Embed**
  — Embed the school's official Facebook page feed
  — Keeps the site feeling alive without manual content updates
  — Requires the school's official Facebook Page URL

- [ ] **Announcement Banner**
  — Dismissible top bar for urgent notices
  — Examples: "Enrollment now open", "Class suspension announced"
  — Hardcoded initially, CMS-managed in Phase 3

- [ ] **Alumni Section**
  — "Proud to be a Michaelean"
  — Notable alumni highlights (with permission)
  — Alumni connection/reunion call to action

- [ ] **Faculty & Staff Page**
  — `/faculty` route
  — Staff cards: photo, name, subject/role
  — Builds trust with parents
  — Requires official faculty information from the school

- [ ] **Photo Gallery Page**
  — `/gallery` route
  — Full-page masonry or grid gallery
  — Organized by category: Campus, Events, Activities, Graduation
  — Requires more official school photos

- [ ] **Virtual Tour Placeholder**
  — Interactive campus map or photo walkthrough
  — Key locations: Main building, classrooms, chapel, grounds
  — Can start as a simple annotated photo layout

---

## Phase 3 — Admin Panel & CMS 📋 PLANNED

Goal: Allow school administrators to manage website content without touching code.
Prerequisite: School officially adopts the website and assigns an administrator.

### Architecture Decision

**Stack:** Next.js + Supabase + Clerk Auth

This phase transforms the site from a static landing page into a managed web presence.

### Planned Features

**Authentication & Authorization**
- [ ] Admin login (Clerk)
- [ ] Role-based access: Super Admin, Content Editor
- [ ] Secure admin dashboard route (`/admin`)
- [ ] Session management and audit logs

**Content Management**
- [ ] Edit hero title and description
- [ ] Edit About section text
- [ ] Manage announcements (create, edit, publish, unpublish)
- [ ] Manage news posts (title, content, date, category)
- [ ] Update contact information (phone, email, address)
- [ ] Update social media links

**Media Management**
- [ ] Upload and manage gallery photos
- [ ] Replace hero slideshow images
- [ ] Upload faculty photos
- [ ] Image optimization pipeline

**Dynamic Pages**
- [ ] News/Blog system with categories and tags
- [ ] Faculty and staff management
- [ ] Events calendar

---

## Phase 4 — Student & Parent Portal 🔮 FUTURE

Goal: Extend the site into a lightweight school management system.
Prerequisite: Phase 3 complete, school IT infrastructure assessment done.

### Planned Features

- [ ] **Online Enrollment Form** — Full application with document upload
- [ ] **Student Portal Login** — Grades, schedule, announcements
- [ ] **Parent Portal** — Child's progress, school communications
- [ ] **SMS/Email Notifications** — Class suspensions, urgent announcements
- [ ] **Custom Domain** — `smhs.edu.ph` (Philippine DepEd school domain standard)

---

## Content Still Needed from School Administration

The following content is currently placeholder and must be replaced with official information:

| Content | Location | Status |
|---|---|---|
| Phone number | Contact section | ⏳ Pending |
| Email address | Contact section | ⏳ Pending |
| Facebook page URL | Contact + Footer | ⏳ Pending |
| Official mission statement | About section | ⏳ Pending |
| Official vision statement | About section | ⏳ Pending |
| Principal / head of school | — | ⏳ Pending |
| Faculty list | — | ⏳ Pending |
| More school photos | Gallery slots 1–5 | ⏳ Pending |
| Official school history | — | ⏳ Pending |
| Enrollment dates and info | — | ⏳ Pending |
| Tuition and fees | — | ⏳ Pending |

---

## Photo Gallery Slots

Drop photos with these exact filenames into `public/images/` to activate them:

| Filename | Status |
|---|---|
| `school-photo.jpg` | ✅ Active |
| `gallery-01.jpg` | ⏳ Waiting for photo |
| `gallery-02.jpg` | ⏳ Waiting for photo |
| `gallery-03.jpg` | ⏳ Waiting for photo |
| `gallery-04.jpg` | ⏳ Waiting for photo |
| `gallery-05.jpg` | ⏳ Waiting for photo |

---

## Technical Debt & Known Items

- `onError` placeholder flash: missing gallery images show a brief blank before the placeholder renders (inherent to client-side detection, acceptable until real photos replace placeholders)
- No analytics yet — consider adding Vercel Analytics or Plausible in Phase 2
- No sitemap.xml or robots.txt yet — add before Phase 3 for SEO
- Social media links currently point to `#` — update when official accounts are confirmed

---

## Presenting to School Administration

When ready to present Phase 1 to the school:

1. Share the live URL: https://smhs-tangub.vercel.app
2. Show it on mobile first — the mobile experience is the strongest
3. Emphasize: no fake information, all placeholder content clearly marked
4. Offer to transfer ownership of the repository and Vercel project to an official school account
5. Provide this ROADMAP.md as the development plan going forward

---

*This project is a community contribution. Built with respect for St. Michael's High School and the Tangub City community.*
