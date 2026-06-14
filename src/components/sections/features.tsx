"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"
import * as Icons from "lucide-react"

export function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <SectionWrapper className="bg-primary/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Why Parents <span className="text-secondary">Trust Us</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          We provide a safe, culturally enriching environment where your child can grow both artistically and personally.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {siteConfig.features.map((feature, index) => {
          const IconName = feature.icon as keyof typeof Icons;
          const IconComponent = (Icons[IconName] as React.ElementType) || Icons.Star;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
