# Yoga Fitness Studio (`mianfeitizi.world`)

Official web platform for Yoga Fitness Studio — featuring class disciplines, interactive alignment guides, weekly timetables, instructor profiles, membership plans, seasonal immersions, and an editorial wellness journal.

## Architecture & SEO Highlights

- **Static Generation**: Built with Astro 7 (`output: 'static'`, `trailingSlash: 'always'`).
- **Original URL Hierarchy**:
  - `/` — Studio Home (`/#philosophy`, `/#sessions`, `/#alignment`, `/#timetable`, `/#instructors`, `/#first-session`, `/#memberships`, `/#member-stories`, `/#community-moments`, `/#immersions`, `/#common-questions`, `/#editorial`, `/#begin-practice`)
  - `/journal/` — Editorial Journal index and `/journal/[slug]/` long-form articles
  - `/contact/` — Studio contact, location & inquiry form
  - `/sitemap-index.xml`, `/rss.xml`, `/robots.txt`
- **Semantic Media Asset Structure**: Organized under `/media/brand/`, `/media/banners/`, `/media/sessions/`, `/media/instructors/`, `/media/immersions/`, `/media/community/`, and `/media/journal/`.
- **Structured Data (JSON-LD)**: Complete `WebSite`, `HealthAndBeautyBusiness` (with `OfferCatalog` & `OpeningHoursSpecification`), `FAQPage`, `BlogPosting`, and `BreadcrumbList` schemas.

## Development

```bash
npm install
npm run dev
```

## Production Build & Type Check

```bash
npm run check
npm run build
npm run preview
```
