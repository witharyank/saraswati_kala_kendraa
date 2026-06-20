# Saraswati Kala Kendra

Official website for Saraswati Kala Kendra, a dance and drawing academy located in Sutapatti, Muzaffarpur, Bihar. The site serves as the primary online presence for the academy, showcasing its programs, gallery, timings, and contact information.

## About the Academy

Saraswati Kala Kendra nurtures talent, preserves culture, and inspires confidence through the art of dance and drawing. With over 10 years of excellence and 500+ students trained, the academy offers a safe and family-friendly environment led by experienced instructors.

## Features

- **Hero Section** -- Full-screen hero with background video and call-to-action buttons
- **About** -- Overview of the academy's mission and values
- **Serving Muzaffarpur** -- Local community engagement and presence
- **Key Highlights** -- Safe environment, experienced instructors, cultural focus, stage opportunities
- **Programs** -- Detailed information on Dance Classes and Drawing/Art Classes
- **Gallery** -- Visual showcase of student work and performances
- **Student Life** -- Glimpse into the academy experience
- **Testimonials** -- Reviews from parents and students
- **Timings** -- Weekly class schedule (Monday through Sunday)
- **Contact** -- Phone, WhatsApp, email, Instagram, and embedded Google Maps

## Tech Stack

| Layer         | Technology                                  |
|---------------|---------------------------------------------|
| Framework     | Next.js 16                                  |
| Language      | TypeScript                                  |
| Styling       | Tailwind CSS 4                              |
| Animations    | Framer Motion                               |
| Icons         | Lucide React                                |
| Carousel      | Embla Carousel                              |
| Theming       | next-themes (light/dark/system)             |
| Fonts         | Inter, Playfair Display (via next/font)     |
| UI Utilities  | clsx, tailwind-merge, Radix UI (react-slot) |

## Project Structure

```
saraswati-kala-kendra/
  public/
    images/             # Static images (gallery, about, etc.)
    hero-video.mp4      # Hero section background video
    robots.txt          # Search engine crawling rules
    sitemap.xml         # Sitemap for SEO
  src/
    app/
      globals.css       # Global styles and Tailwind theme
      layout.tsx        # Root layout with metadata, fonts, and theme provider
      page.tsx          # Home page assembling all sections
      head.tsx          # Custom head tags
    components/
      navbar.tsx        # Navigation bar
      footer.tsx        # Site footer
      section-wrapper.tsx  # Reusable section wrapper with animations
      theme-provider.tsx   # Dark/light theme provider
      sections/
        hero.tsx        # Hero banner with video background
        about.tsx       # About the academy
        serving.tsx     # Serving Muzaffarpur section
        features.tsx    # Key feature highlights
        programs.tsx    # Dance and drawing program details
        gallery.tsx     # Image gallery/carousel
        student-life.tsx  # Student life showcase
        testimonials.tsx  # Parent and student reviews
        timings.tsx     # Weekly class schedule
        contact.tsx     # Contact form, map, and details
      ui/               # Reusable UI primitives
    data/
      config.ts         # Centralized site configuration (contact, timings, programs, etc.)
    lib/
      utils.ts          # Utility functions (cn helper for class merging)
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

### Installation

```bash
git clone <repository-url>
cd saraswati-kala-kendra
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The page auto-updates as you edit files.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Configuration

All site-wide data is centralized in `src/data/config.ts`. This includes:

- Academy name and description
- Location and address
- Contact details (phone, WhatsApp, email)
- Social media links (Instagram)
- Academy statistics (rating, years, student count)
- Weekly class timings
- Feature highlights
- Program descriptions and benefits
- Testimonials

To update any of this information, edit the `siteConfig` object in that file. No code changes are needed elsewhere.

## SEO

The site includes the following SEO optimizations:

- Meta title and description tags
- Open Graph metadata for social sharing
- Google Search Console verification
- `robots.txt` for crawler directives
- `sitemap.xml` for search engine indexing
- Semantic HTML structure
- Keyword meta tags

## Theming

The site supports light mode, dark mode, and system preference detection via `next-themes`. The theme toggle is available in the navigation bar.

## Contact

- Phone: +91 93347 53603
- Email: ksaraswatikala@gmail.com
- Instagram: @saraswati_kala_kendraa
- Location: Near Shyam Mandir Marg, Sutapatti, Muzaffarpur, Bihar 842001

## License

This project is private and proprietary.
