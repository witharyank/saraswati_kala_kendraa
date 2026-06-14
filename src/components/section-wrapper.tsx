"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
}

export function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 overflow-hidden relative ${className}`}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  )
}
