'use client'

import GradientText from '@/components/ui/GradientText'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const gridItems = [
  {
    id: 1,
    title: 'PAINEL DIGITAL',
    image: '/images/live-led/formatos-11.jpg',
    href: '/painel-digital',
    objectPosition: '60% 35%',
    scale: 'scale-125'
  },
  {
    id: 2,
    title: 'DUO MUB',
    image: '/images/live-led/duo-mub.jpg',
    href: '/duo-mub',
    objectPosition: '50% 10%',
    scale: ''
  },
  {
    id: 3,
    title: 'MOSAICO',
    image: '/images/live-led/mosaico-2.jpg',
    href: '/mosaico',
    objectPosition: '60% 40%',
    scale: ''
  },
  {
    id: 4,
    title: 'MOBILIÁRIO URBANO',
    image: '/images/live-led/galeria-61.jpg',
    href: '/mobiliario-urbano',
    objectPosition: '50% -60%',
    scale: 'scale-150'
  }
]

export default function NossosFormatos() {
  return (
    <section className="w-full">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center pb-5 px-4"
      >
        <img
          src="/images/outdoor/triangulos.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 hidden h-14 w-auto -translate-y-1/2 opacity-80 md:block"
        />
        <GradientText className="text-[48px] sm:text-[60px] md:text-[76px] uppercase tracking-wide font-bold">
          Nossos Formatos
        </GradientText>
      </motion.div>

      {/* Grid 2x2 */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {gridItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="group relative overflow-hidden block w-full h-[400px] md:h-[500px]"
            >
              {/* Imagem */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-500 ease-in-out
                  ${item.scale} group-hover:scale-110`}
                style={{ objectPosition: item.objectPosition }}
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

              {/* Label centralizado */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="border-2 border-white/80 px-6 py-3 md:px-8 md:py-4 text-center
                  transition-all duration-300 group-hover:scale-95 group-hover:opacity-0">
                  <h3 className="text-lg md:text-3xl font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  )
}