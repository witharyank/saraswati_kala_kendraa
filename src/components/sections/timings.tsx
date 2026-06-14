"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"
import { Clock } from "lucide-react"

export function Timings() {
  return (
    <SectionWrapper className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Class <span className="text-primary">Timings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible batches to accommodate students of all ages.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Image/Graphic */}
            <div className="bg-gradient-to-br from-primary to-secondary p-12 text-white flex flex-col justify-center items-center text-center">
              <Clock className="w-20 h-20 mb-6 opacity-80" />
              <h3 className="font-serif text-3xl font-bold mb-4">Plan Your Schedule</h3>
              <p className="text-white/80">
                Join our regular batches and start your dance journey today. Special weekend batches available.
              </p>
            </div>

            {/* Right Schedule */}
            <div className="p-8 md:p-12">
              <ul className="space-y-4">
                {siteConfig.timings.map((t, i) => (
                  <li key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <span className="font-semibold text-foreground">{t.day}</span>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                      t.time === "Closed" 
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {t.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
