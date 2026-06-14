import Link from "next/link"
import { siteConfig } from "@/data/config"
import { MapPin, Phone, Mail, Instagram, Map, Camera } from "lucide-react"

export function Footer() {
  return (
    <>
      {/* Admissions Banner */}
      <section className="relative w-full h-[400px] overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-90 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/banner-bg.jpg')] bg-cover bg-center z-0" />
        
        <div className="relative z-20 container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Admissions Open
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
            Join Saraswati Kala Kendra Today and start your journey of artistic excellence.
          </p>
          <a 
            href={siteConfig.contact.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-medium text-primary shadow-2xl transition-transform hover:scale-105"
          >
            Enroll Now
          </a>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-primary">Saraswati Kala Kendra</h3>
              <p className="text-secondary-foreground/80 max-w-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex gap-4 pt-2">
                <Link href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Camera className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#programs" className="hover:text-primary transition-colors">Our Classes</Link></li>
                <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-4 text-accent">Our Offerings</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="#programs" className="hover:text-primary transition-colors">Dance Classes</Link></li>
                <li><Link href="#programs" className="hover:text-primary transition-colors">Drawing & Art Classes</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-4 text-accent">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-secondary-foreground/80 leading-relaxed">
                    {siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} - {siteConfig.location.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>Nurturing Muzaffarpur's Talent.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
