"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info & Form */}
        <div>
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Get in <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to begin your dance journey? Contact us today to book a free trial class or inquire about our programs.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <motion.a 
              href={`tel:${siteConfig.contact.phone}`}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold text-foreground">{siteConfig.contact.phone}</p>
              </div>
            </motion.a>

            <motion.a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-[#25D366] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold text-foreground">Message us anytime</p>
              </div>
            </motion.a>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Visit Academy</p>
                <p className="font-semibold text-foreground">
                  {siteConfig.location.address},<br/>
                  {siteConfig.location.city}, {siteConfig.location.state} - {siteConfig.location.zip}
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-4 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <textarea 
              placeholder="Your Message or Inquiry..." 
              rows={4}
              className="w-full p-4 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
            <Button asChild size="lg" className="w-full md:w-auto h-14 px-8 rounded-xl text-lg">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Send Message via WhatsApp
              </a>
            </Button>
          </form>
        </div>

        {/* Google Maps Embed */}
        <div className="h-[400px] lg:h-auto min-h-[500px] w-full rounded-3xl overflow-hidden border border-border shadow-lg relative">
          {/* User needs to provide the real embed URL in config.ts, using a generic one for now */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.428419616019!2d85.38573215541992!3d26.121544000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10c511111111%3A0x1111111111111111!2sSutapatti%2C%20Muzaffarpur!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

      </div>
    </SectionWrapper>
  )
}
