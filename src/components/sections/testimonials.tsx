"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/data/config"
import useEmblaCarousel from "embla-carousel-react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <SectionWrapper id="testimonials" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          What Parents & Students Say
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          We pride ourselves on the positive impact we make.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {siteConfig.testimonials.map((t, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl text-center relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-white/10 rotate-180" />
                  <Quote className="absolute bottom-6 right-6 w-12 h-12 text-white/10" />
                  
                  <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-primary-foreground/70">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}
