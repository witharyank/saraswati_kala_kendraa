"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function ServingMuzaffarpur() {
  const points = [
    "Professional Dance Training",
    "Drawing & Art Education",
    "Cultural Activities & Events",
    "Creative Development for Children"
  ]

  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Serving <span className="text-accent">Muzaffarpur&apos;s</span> Young Talent
          </h2>
          <p className="text-xl text-primary-foreground/90 font-light mb-8 leading-relaxed">
            At Saraswati Kala Kendra, we are deeply committed to empowering the youth of Muzaffarpur. We provide a platform where raw talent is nurtured into refined skill.
          </p>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-lg font-medium"
              >
                <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
        >
          <Image 
            src="/images/Screenshot_20260614_224203.jpg" 
            alt="Muzaffarpur Talent at Saraswati Kala Kendra" 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
