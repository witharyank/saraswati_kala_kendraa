"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"

export function About() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Saraswati Kala Kendra</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Saraswati Kala Kendra is a trusted, family-friendly academy in Muzaffarpur, dedicated to nurturing young talent through dance, art, creativity, and discipline.
              </p>
              <p>
                We believe in providing a safe and supportive environment where students of all ages can develop confidence, physical coordination, and a deep appreciation for our rich cultural heritage.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-primary/5 p-6 rounded-2xl border border-primary/20"
            >
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-sm text-foreground/80">
                To preserve cultural heritage and foster artistic growth by providing world-class training in a loving and supportive community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-secondary/5 p-6 rounded-2xl border border-secondary/20"
            >
              <h3 className="font-serif text-xl font-bold text-secondary mb-2">Our Vision</h3>
              <p className="text-sm text-foreground/80">
                To be the premier trusted institution where passion meets performance, inspiring the next generation of confident artists.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image Layout */}
        <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-3xl overflow-hidden group shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-muted"
          >
            <img 
              src="/about-image.jpg" // User to upload
              alt="Students at Saraswati Kala Kendra"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23FF6B00' width='800' height='400' fill-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='24' fill='%237A1020' text-anchor='middle' alignment-baseline='middle'%3EUpload about-image.jpg to public folder%3C/text%3E%3C/svg%3E";
              }}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        </div>

      </div>
    </SectionWrapper>
  )
}
