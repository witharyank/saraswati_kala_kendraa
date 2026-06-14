"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Music } from "lucide-react"

export function Programs() {
  return (
    <SectionWrapper id="programs" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Our <span className="text-primary">Programs</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          We offer specialized, high-quality training tailored for all age groups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Dance Classes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
            <img 
              src="/dance-class.jpg" 
              alt="Dance Classes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23FF6B00' width='800' height='400' fill-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='24' fill='%237A1020' text-anchor='middle' alignment-baseline='middle'%3EUpload dance-class.jpg to public folder%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Dance Classes</h3>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <p className="text-muted-foreground text-lg mb-6 flex-grow leading-relaxed">
              {siteConfig.programs[0].description}
            </p>
            <ul className="space-y-2 mb-8">
              {siteConfig.programs[0].benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full text-lg h-14 rounded-xl group/btn hover:bg-primary/90">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Enroll in Dance
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Drawing & Art Classes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
            <img 
              src="/art-class.jpg" 
              alt="Drawing and Art Classes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23D4AF37' width='800' height='400' fill-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='24' fill='%237A1020' text-anchor='middle' alignment-baseline='middle'%3EUpload art-class.jpg to public folder%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black shrink-0 shadow-lg">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Drawing & Art</h3>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <p className="text-muted-foreground text-lg mb-6 flex-grow leading-relaxed">
              {siteConfig.programs[1].description}
            </p>
            <ul className="space-y-2 mb-8">
              {siteConfig.programs[1].benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full text-lg h-14 rounded-xl group/btn bg-secondary hover:bg-secondary/90 text-white">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Enroll in Art
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
