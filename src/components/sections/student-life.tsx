"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Sparkles, Users, Award, Music } from "lucide-react"

export function StudentLife() {
  const events = [
    { title: "Stage Performances", icon: Award, desc: "Building confidence through regular stage presence and annual functions." },
    { title: "Cultural Celebrations", icon: Music, desc: "Immersing students in our rich traditions through festival specials." },
    { title: "Art Exhibitions", icon: Sparkles, desc: "Showcasing the incredible drawing and artistic talents of our students." },
    { title: "Community Bonding", icon: Users, desc: "A family-like atmosphere where every student feels valued." },
  ]

  return (
    <SectionWrapper className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side - Image Grid */}
        <div className="grid grid-cols-2 gap-6 relative">
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-3xl rounded-full z-0" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[350px] rounded-3xl bg-primary/10 mt-12 relative overflow-hidden flex justify-center items-center shadow-lg border border-border z-10 group"
          >
             <img 
              src="/moment-1.jpg" 
              alt="Academy Moment 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 400 600'%3E%3Crect fill='%23FF6B00' width='400' height='600' fill-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='16' fill='%237A1020' text-anchor='middle' alignment-baseline='middle'%3EUpload moment-1.jpg%3C/text%3E%3C/svg%3E";
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[350px] rounded-3xl bg-secondary/10 relative overflow-hidden flex justify-center items-center shadow-lg border border-border z-10 group"
          >
             <img 
              src="/moment-2.jpg" 
              alt="Academy Moment 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 400 600'%3E%3Crect fill='%237A1020' width='400' height='600' fill-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='16' fill='%23FF6B00' text-anchor='middle' alignment-baseline='middle'%3EUpload moment-2.jpg%3C/text%3E%3C/svg%3E";
              }}
            />
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Academy <span className="text-secondary">Moments</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
              Beyond the classroom walls, Saraswati Kala Kendra is a vibrant community. We celebrate our culture, showcase our talents, and build lifelong friendships.
            </p>

            <div className="space-y-8">
              {events.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index} 
                    className="flex gap-5 items-start group"
                  >
                    <div className="mt-1 w-14 h-14 rounded-2xl bg-muted group-hover:bg-primary/10 flex items-center justify-center shrink-0 text-primary transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-foreground mb-1">{event.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{event.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  )
}
