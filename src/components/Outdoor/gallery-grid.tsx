'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    image: '/images/outdoor/caramuru-1.png'
  },
  {
    id: 2,
    image: '/images/outdoor/bras olaia-2.png'
  },
  {
    id: 3,
    image: '/images/outdoor/maurilio biagi-3.png'
  },
  {
    id: 4,
    image: '/images/outdoor/maria de jesus-4.png'
  },
  {
    id: 5,
    image: '/images/outdoor/Outdoor  Iluminado-5.png'
  },
  {
    id: 6,
    image: '/images/outdoor/meira-junior-6.png'
  }
]

export default function GalleryGrid() {
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
            className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
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
    </section>
  )
}
