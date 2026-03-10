'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const galleryItems = [
  { id: 1, image: '/images/live-led/galeria-1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/live-led/galeria-2.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/live-led/galeria-3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/live-led/galeria-4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/live-led/galeria-5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/live-led/galeria-6.jpg', objectPosition: 'center' }
]

export default function Galeria() {
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
    <section className="w-full">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 -mb-3 flex items-center justify-center px-4"
      >
        <div className="rounded-lg bg-gradient-to-r from-accent to-cyan
          px-3 sm:px-4 py-2 font-bebas font-normal uppercase tracking-wide
          text-[35px] sm:text-[45px] md:text-[55px]
          text-white shadow-lg leading-tight">
          GALERIA
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 overflow-hidden">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden cursor-pointer w-full h-[400px] md:h-[500px]"
            onClick={() => setSelected({ img: item.image, title: `Galeria outdoor ${item.id}` })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ')
                setSelected({ img: item.image, title: `Galeria outdoor ${item.id}` })
            }}
          >
            <Image
              src={item.image}
              alt={`Galeria outdoor ${item.id}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-500 ease-in-out
                group-hover:scale-110
                ${item.id === 6 ? 'scale-125' : ''}`}
              style={{ objectPosition: item.objectPosition }}
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* Modal lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
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

      {/* Robô decorativo */}
      <div className="pt-12 flex w-1/2 mx-auto">
        <Image
          src="/images/live-led/robo-3.png"
          alt="Robô decorativo"
          width={303}
          height={177}
          className="object-contain"
        />
      </div>

    </section>
  )
}