# Saraswati Kala Kendra

The official website for Saraswati Kala Kendra -- a dance and drawing academy in Sutapatti, Muzaffarpur, Bihar. Built with Next.js and designed to give the academy a clean, modern online presence.

## About

Saraswati Kala Kendra has spent over a decade nurturing young talent through dance and drawing. More than 500 students have trained here in a safe, family-friendly setting guided by experienced instructors. The academy's focus is on preserving culture, building confidence, and giving students a platform to perform and exhibit their work.

## What the Site Covers

The website is a single-page layout with the following sections:

- A full-screen hero with a background video and quick-action buttons
- An overview of the academy's mission and values
- A section highlighting the academy's roots in the Muzaffarpur community
- Key highlights including safety, instructor experience, cultural focus, and stage opportunities
- Detailed program pages for both dance and drawing classes
- A gallery showcasing student performances and artwork
- A student life section that captures the day-to-day academy experience
- Testimonials from parents and students
- A weekly class schedule
- Contact details with phone, WhatsApp, email, Instagram, and an embedded map

## Tech Stack

| Layer        | Technology                                  |
|--------------|---------------------------------------------|
| Framework    | Next.js 16                                  |
| Language     | TypeScript                                  |
| Styling      | Tailwind CSS 4                              |
| Animations   | Framer Motion                               |
| Icons        | Lucide React                                |
| Carousel     | Embla Carousel                              |
| Theming      | next-themes (light, dark, and system)       |
| Fonts        | Inter and Playfair Display via next/font    |
| UI Utilities | clsx, tailwind-merge, Radix UI              |

## Project Structure

```
saraswati-kala-kendra/
  public/
    images/                Static images for the gallery, about section, etc.
    hero-video.mp4         Background video for the hero section
    robots.txt             Crawler directives
    sitemap.xml            Sitemap for search engines
  src/
    app/
      globals.css          Global styles and Tailwind theme configuration
      layout.tsx           Root layout with metadata, fonts, and theming
      page.tsx             Home page that assembles all sections
      head.tsx             Custom head tags
    components/
      navbar.tsx           Top navigation bar
      footer.tsx           Site footer
      section-wrapper.tsx  Reusable animated section wrapper
      theme-provider.tsx   Light and dark mode provider
      sections/
        hero.tsx           Hero banner with video background
        about.tsx          About the academy
        serving.tsx        Community presence in Muzaffarpur
        features.tsx       Key feature highlights
        programs.tsx       Dance and drawing program details
        gallery.tsx        Image gallery with carousel
        student-life.tsx   Student life showcase
        testimonials.tsx   Parent and student reviews
        timings.tsx        Weekly class schedule
        contact.tsx        Contact details, form, and map
      ui/                  Shared UI primitives
    data/
      config.ts            Centralized site configuration
    lib/
      utils.ts             Utility functions
```

## Getting Started

You will need Node.js 18 or later.

```bash
git clone <repository-url>
cd saraswati-kala-kendra
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. Changes to the source files are reflected automatically.

To create a production build and serve it locally:

```bash
npm run build
npm start
```

To run the linter:

```bash
npm run lint
```

## Configuration

All of the academy's information -- name, address, contact details, social links, class timings, program descriptions, statistics, and testimonials -- lives in a single file: `src/data/config.ts`. Updating that file is all that is needed to change the content on the site. No other code changes are required.

## SEO

The site ships with meta title and description tags, Open Graph metadata for social sharing, Google Search Console verification, a `robots.txt`, a `sitemap.xml`, semantic HTML, and relevant keyword tags.

## Theming

Light mode, dark mode, and automatic system preference detection are all supported out of the box through `next-themes`. A toggle is available in the navigation bar.

## Contact

- Phone: +91 93347 53603
- Email: ksaraswatikala@gmail.com
- Instagram: @saraswati_kala_kendraa
- Location: Near Shyam Mandir Marg, Sutapatti, Muzaffarpur, Bihar 842001

## License

Private and proprietary.
