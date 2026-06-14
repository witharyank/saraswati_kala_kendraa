"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { X } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  const images = [
    { src: "/images/IMG-20240322-WA0016.jpg", alt: "Gallery Image 1" },
    { src: "/images/IMG-20240619-WA0035.jpg", alt: "Gallery Image 2" },
    { src: "/images/IMG-20250531-WA0074.jpg", alt: "Gallery Image 3" },
    { src: "/images/IMG-20260524-WA0012 (2).jpg", alt: "Gallery Image 4" },
    { src: "/images/Screenshot_20260614_224203.jpg", alt: "Gallery Image 5" },
    { src: "/images/Screenshot_20260614_224550.jpg", alt: "Gallery Image 6" },
  ]

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  return (
    <SectionWrapper id="gallery" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Our <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Glimpses of our vibrant classes, events, and performances.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all ${
              index === 0 || index === 3 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-1" : ""
            } h-48 sm:h-64 lg:h-80`}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image 
              src={image.src} 
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Expanded View" 
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
