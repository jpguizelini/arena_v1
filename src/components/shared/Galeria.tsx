'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { stagger, scaleFade, vp } from '@/lib/animations'

interface GalleryItem {
  id: number
  image: string
  objectPosition?: string
}

interface GaleriaProps {
  title?: string
  items: GalleryItem[]
  className?: string
  columns?: 1 | 2 | 3 | 4
}

const defaultGalleryItems: GalleryItem[] = []

export default function Galeria({ 
  title = 'GALERIA', 
  items = defaultGalleryItems,
  className = '',
  columns = 3
}: GaleriaProps) {
  const [selected, setSelected] = useState<{ img: string; title: string } | null>(null)

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className={`w-full pt-16 pb-64 ${className}`}>

      {/* Título */}
      <motion.div
        variants={scaleFade}
        initial="hidden"
        whileInView="show"
        viewport={vp}
        className="relative z-10 -mb-3 flex items-center justify-center px-4"
      >
        <div className="rounded-lg bg-linear-to-r from-accent to-cyan
          px-3 sm:px-4 py-2 font-bebas font-normal uppercase tracking-wide
          text-[35px] sm:text-[45px] md:text-[55px]
          text-white shadow-lg leading-tight">
          {title}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className={`grid w-full overflow-hidden ${gridClasses[columns]}`}
        variants={stagger(0, 0.07)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={scaleFade}
              className="group relative overflow-hidden cursor-pointer w-full h-[400px] md:h-[500px]"
              onClick={() => setSelected({ img: item.image, title: `${title.toLowerCase()} ${item.id}` })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  setSelected({ img: item.image, title: `${title.toLowerCase()} ${item.id}` })
              }}
            >
              <Image
                src={item.image}
                alt={`${title.toLowerCase()} ${item.id}`}
                fill
                sizes={`(max-width: 768px) 100vw, ${columns === 3 ? '33vw' : columns === 4 ? '25vw' : columns === 2 ? '50vw' : '100vw'}`}
                className={`object-cover transition-transform duration-500 ease-in-out
                  group-hover:scale-110
                  ${item.id === 6 ? 'scale-125' : ''}`}
                style={{ objectPosition: item.objectPosition || 'center' }}
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20" />
            </motion.div>
          ))
        ) : (
          // Skeleton loading state
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="w-full h-[400px] md:h-[500px] bg-gray-200 animate-pulse"
            />
          ))
        )}
      </motion.div>

      {/* Modal lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-9999 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full
                bg-primary text-white flex items-center justify-center shadow
                text-xl leading-none hover:opacity-80 transition-opacity"
            >
              ×
            </button>
            <Image
              src={selected.img}
              alt={selected.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}