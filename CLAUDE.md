# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TalentLinx is a recruitment/hiring platform website built with Astro, React, and TailwindCSS. The site is deployed to Cloudflare Pages and uses Decap CMS for content management.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev
# or
npm start

# Build for production (includes type checking)
npm run build

# Preview production build locally
npm run preview

# Run Astro type checking only
npm run astro check

# Check for unused dependencies
npx depcheck
```

## Architecture

### Core Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: TailwindCSS with custom brand color palette
- **TypeScript**: Strict mode enabled
- **Deployment**: Cloudflare Pages (@astrojs/cloudflare adapter)
- **CMS**: Decap CMS (formerly Netlify CMS) with GitHub backend

### Content Management System

The site uses a **content-driven architecture** where all page content is stored in Markdown files in the `/content` directory and managed through Decap CMS.

**CMS Configuration**: `/public/admin/config.yml`
- Backend: GitHub repo (MohamedismailTL/talentlinx-website)
- Proxy: Custom Cloudflare Worker at decap-proxy.mohamed-ismail.workers.dev
- Content files: `/content/*.md`
- Media uploads: `/public/assets`

**Content Structure**:
Each section of the homepage has its own markdown file:
- `hero.md` - Hero section with job titles typewriter
- `features.md` - Main features grid (6 boxes)
- `problems.md` - Problems section
- `process.md` - 4-step process boxes
- `diagram.md` - Technologies diagram section
- `comparison.md` - Comparison section (2 boxes with bullet points)
- `statement.md` - Statement section with 3 statements and 3 statistics
- `conferences.md` - Conference logos section
- `testimonials.md` - Testimonials carousel
- `cta.md` - Call-to-action section
- `faq.md` - FAQ accordion
- `footer.md` - Footer with LinkedIn link and copyright
- `metadata.md` - Site-wide settings (CTA links, CRM link, SEO metadata)
- Legal pages: `imprint.md`, `privacy.md`, `agb.md`

### Project Structure

```
/
├── src/
│   ├── components/       # React components (.tsx files)
│   ├── layouts/          # Astro layouts (Layout.astro)
│   ├── pages/            # Astro pages (file-based routing)
│   └── assets/           # Images, logos, avatars
├── content/              # Markdown content files (managed via CMS)
├── public/
│   ├── admin/            # Decap CMS admin panel
│   └── assets/           # Public media uploads
└── astro.config.mjs
```

### Page Architecture

**Main Page** (`src/pages/index.astro`):
- Imports content from markdown files using Astro's content import syntax
- Each section is a React component that receives content via props
- Components are hydrated with `client:load` for interactivity
- Images are imported from `src/assets/` and passed as children or props

**Layout System**:
- `src/layouts/Layout.astro` - Base layout with SEO meta tags
- Takes `title` and `description` props from `metadata.md`

**Component Pattern**:
Components receive structured content from markdown frontmatter:
```tsx
<Hero content={hero} metadata={metadata} client:load>
  <Image src={talentLinxLogo} alt="TalentLinx Logo"/>
</Hero>
```

### Styling System

**Brand Colors** (defined in `tailwind.config.mjs`):
- `brand-primary-*`: Dark blue primary color (#1D3557 base)
- `brand-aqua-*`: Light aqua blue (#63C1E5 base)
- `brand-aquamarine-*`: Secondary aquamarine (#039BE5 base)
- `brand-coral-*`: Coral accent color (#FF6F61 base)

Use these brand colors consistently throughout the site rather than default Tailwind colors.

### Key Features

1. **Typewriter Effect**: Job titles in hero section rotate using `Typewriter.tsx` component
2. **Smooth Scrolling**: Navigation links use smooth scroll behavior (see `Hero.tsx:33-45`)
3. **Mobile Menu**: Headless UI Dialog component for responsive navigation
4. **Reviews Section**: Shows avatars and Google rating in hero
5. **Markdown Rendering**: Custom `MarkdownRenderer.tsx` using react-markdown with remark-gfm

## Important Notes

- Site URL: https://talentlinx.de
- All content changes should be made through Decap CMS at `/admin/` rather than editing markdown files directly
- The site is in German (language: "de")
- Images in `src/assets/` are processed by Astro's Image component; images in `public/assets/` are served directly
- Content markdown files use frontmatter for structured data that maps to component props
- When adding new sections, update both the content markdown file schema in `/public/admin/config.yml` and the corresponding React component