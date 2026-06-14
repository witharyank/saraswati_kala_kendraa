"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { X, ZoomIn } from "lucide-react"

// User will replace these with real images
const galleryImages = [
  { id: 1, src: "/placeholder-gallery.jpg", category: "Performances", alt: "Dance Performance" },
  { id: 2, src: "/placeholder-gallery.jpg", category: "Classes", alt: "Dance Class" },
  { id: 3, src: "/placeholder-gallery.jpg", category: "Events", alt: "Annual Event" },
  { id: 4, src: "/placeholder-gallery.jpg", category: "Celebrations", alt: "Festival Celebration" },
  { id: 5, src: "/placeholder-gallery.jpg", category: "Training Sessions", alt: "Training" },
  { id: 6, src: "/placeholder-gallery.jpg", category: "Performances", alt: "Stage Performance" },
]

const categories = ["All", "Classes", "Performances", "Events", "Celebrations", "Training Sessions"]

export function Gallery() {
  const [filter, setFilter] = React.useState("All")
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  const filteredImages = galleryImages.filter(
    (img) => filter === "All" || img.category === filter
  )

  return (
    <SectionWrapper id="gallery" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Our <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          A glimpse into the vibrant life, performances, and celebrations at Saraswati Kala Kendra.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Layout */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={image.id}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid bg-muted aspect-auto min-h-[250px]"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Fallback image style since we are waiting for user to upload */}
              <div className="w-full h-[300px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                 <span className="text-foreground/40 font-medium">Image: {image.category}</span>
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[80vh] bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center rounded-xl border border-white/10">
                 <span className="text-white text-xl font-medium">Full Size Image Placeholder</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
