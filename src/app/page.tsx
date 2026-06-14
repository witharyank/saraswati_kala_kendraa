import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { ServingMuzaffarpur } from "@/components/sections/serving"
import { Features } from "@/components/sections/features"
import { Programs } from "@/components/sections/programs"
import { Gallery } from "@/components/sections/gallery"
import { StudentLife } from "@/components/sections/student-life"
import { Testimonials } from "@/components/sections/testimonials"
import { Timings } from "@/components/sections/timings"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <ServingMuzaffarpur />
      <Features />
      <Programs />
      <Gallery />
      <StudentLife />
      <Testimonials />
      <Timings />
      <Contact />
      <Footer />
    </main>
  )
}
