'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface GridItem {
  id: number
  title: string
  image: string
  href: string
}

export interface FormatosMidiaProps {
  items: GridItem[]
  title?: string
  showTriangles?: boolean
  gridCols?: string
  decorativeImage?: string
}

export default function FormatosMidia({
  items,
  title = 'Outros formatos',
  showTriangles = true,
  gridCols = 'grid-cols-2 md:grid-cols-4',
  decorativeImage = '/images/outdoor/triangulos.png'
}: FormatosMidiaProps) {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center pb-[20px] px-4"
      >
        {showTriangles && (
          <img
            src={decorativeImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 hidden h-14 w-auto -translate-y-1/2 opacity-80 md:block"
          />
        )}

        <h2 className="font-bebas bg-gradient-to-r from-accent to-cyan bg-clip-text text-[48px] sm:text-[60px] md:text-[76px] font-bold uppercase tracking-wide text-transparent">
          {title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-0">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative block h-64 overflow-hidden transition-all duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full">
              <div className="border-2 border-white/80 px-4 py-2 text-center transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white md:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}