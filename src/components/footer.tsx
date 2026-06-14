import Link from "next/link"
import { siteConfig } from "@/data/config"
import { MapPin, Phone, Mail, Share2, Camera, Video, Map } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">Saraswati Kala Kendra</h3>
            <p className="text-secondary-foreground/80 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <Link href={siteConfig.socials.facebook} className="hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></Link>
              <Link href={siteConfig.socials.instagram} className="hover:text-primary transition-colors"><Camera className="w-5 h-5" /></Link>
              <Link href={siteConfig.socials.youtube} className="hover:text-primary transition-colors"><Video className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#programs" className="hover:text-primary transition-colors">Dance Programs</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-accent">Our Programs</h4>
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
                <span className="text-secondary-foreground/80">
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
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
