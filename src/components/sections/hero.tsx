"use client"

import * as React from "react"
import { motion, useScroll, useTransform, animate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/config"

function AnimatedCounter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const node = nodeRef.current
    if (node) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(1)
        }
      })
      return () => controls.stop()
    }
  }, [from, to, duration])

  return <span ref={nodeRef} />
}

export function Hero() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"])
  const textY = useTransform(scrollY, [0, 1000], ["0%", "100%"])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-[120%] z-0 -top-[10%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="/fallback-bg.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl pt-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md border border-white/20 shadow-xl"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
            <span className="font-semibold text-accent"><AnimatedCounter from={0} to={4.9} /> Stars</span> on Google | {siteConfig.stats.yearsOfExcellence} Years of Excellence
          </motion.div>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
            Where Passion <br className="hidden sm:block" />
            <span className="text-primary">Meets Performance</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            {siteConfig.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto shadow-xl hover:scale-105 transition-transform duration-300">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">Join Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white text-white hover:bg-white hover:text-black glass transition-all duration-300">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">Book Trial Class</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
