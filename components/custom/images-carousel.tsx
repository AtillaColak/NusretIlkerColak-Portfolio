'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'

interface ImageTextCarouselProps {
  images: string[]
  texts: string[]
  autoRotateInterval?: number
}

export default function ImageTextCarousel({ images, texts, autoRotateInterval = 5000 }: ImageTextCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  if (images.length !== texts.length) {
    throw new Error('The number of images and text sections must be the same.')
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(nextSlide, autoRotateInterval)
      return () => clearInterval(intervalId)
    }
  }, [isPaused, nextSlide, autoRotateInterval])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div 
            className="w-full md:w-1/2 relative" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className={`absolute top-0 left-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Previous and Next buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/70 hover:bg-white/90 transition-colors duration-300"
                onClick={() => { prevSlide(); setIsPaused(true); }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/70 hover:bg-white/90 transition-colors duration-300"
                onClick={() => { nextSlide(); setIsPaused(true); }}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-7 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-amber-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => { setCurrentIndex(index); setIsPaused(true); }}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex items-center overflow-hidden relative">
            {texts.map((text, index) => (
              <div
                key={index}
                className={`w-full absolute transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 relative' : 'opacity-0'
                }`}
              >
                <div className="prose dark:prose-invert max-h-[400px] overflow-y-auto overflow-x-hidden px-2 sm:px-4">
                  <ReactMarkdown className='prose'>{text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
