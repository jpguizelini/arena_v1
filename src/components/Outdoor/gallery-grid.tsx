'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const galleryItems = [
  {
    id: 1,
    image: '/images/outdoor/caramuru-1.png'
  },
  {
    id: 2,
    image: '/images/outdoor/bras-olaia-2.png'
  },
  {
    id: 3,
    image: '/images/outdoor/maurilio-biagi-3.png'
  },
  {
    id: 4,
    image: '/images/outdoor/maria-de-jesus-4.png'
  },
  {
    id: 5,
    image: '/images/outdoor/Outdoor-Iluminado-5.png'
  },
  {
    id: 6,
    image: '/images/outdoor/meira-junior-6.png'
  }
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState<{ img: string; title: string } | null>(null)

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
    <section className="w-full py-16 pb-30">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative z-8 -mb-3 flex items-center justify-center px-4"
      >
        <div className="rounded-lg bg-gradient-to-r from-accent to-cyan px-3 sm:px-4 py-2 font-bebas text-[35px] sm:text-[45px] md:text-[55px] font-regular uppercase tracking-wide text-white shadow-lg leading-tight">
          GALERIA
        </div>
      </motion.div>

      <div className="grid w-full grid-cols-1 gap-0 overflow-hidden md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 
            }}
            className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => setSelected({ img: item.image, title: `Galeria outdoor ${item.id}` })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSelected({ img: item.image, title: `Galeria outdoor ${item.id}` })
            }}
          >
            <img
              src={item.image}
              alt={`Galeria outdoor ${item.id}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              className={`w-full transition-all duration-300 ease-in-out ${
                item.id === 6 ? 'h-full scale-125 object-cover' : 
                item.id === 1 ? 'h-full object-cover' : 'h-auto object-cover'
              } group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />
          </motion.div>
        ))}
      </div>

      {selected ? (
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
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow"
            >
              ×
            </button>

            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
