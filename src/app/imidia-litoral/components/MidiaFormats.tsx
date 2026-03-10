'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const gridItems = [
  {
    id: 1,
    title: 'OUTDOOR',
    image: '/images/litoral/outdoor.png',
    href: '/outdoor'
  },
  {
    id: 2,
    title: 'PAINEL FRONT LIGHT',
    image: '/images/litoral/painel-front-light.jpg',
    href: '/mega-light'
  },
  {
    id: 3,
    title: 'PAINEL MEGA LIGHT',
    image: '/images/litoral/painel-mega-light.jpg',
    href: '/front-light'
  },
  {
    id: 4,
    title: 'PAINEL DE RODOVIA',
    image: '/images/litoral/painel-rodovia.png',
    href: '/rodovia'
  },
  {
    id: 5,
    title: 'PAINEL DIGITAL',
    image: '/images/litoral/painel-digital.png',
    href: '/painel-digital'
  },
  {
    id: 6,
    title: 'DUO MUB',
    image: '/images/litoral/painel-duo-mub.jpg',
    href: '/rodovia'
  },
  {
    id: 7,
    title: 'MOSAICO DIGITAL',
    image: '/images/litoral/mosaico-digital.jpg',
    href: '/mosaico-digital'
  },
  {
    id: 8,
    title: 'MOBILIÁRIO URBANO',
    image: '/images/litoral/painel-mobiliario-urbano.jpg',
    href: '/mosaico-digital'
  }
]

export default function MidiaFormats() {
  return (
    <div className="w-full flex flex-col items-center justify-center">

      {/* Título contido com max-w */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-[clamp(36px,6vw,83px)] font-bebas font-bold bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e] bg-clip-text text-transparent uppercase text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Nossos Formatos de Mídia
        </motion.h1>
      </div>

      {/* Grid full width — cada card ocupa fração igual da largura */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4">
        {gridItems.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className="relative aspect-[4/4] overflow-hidden group"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={85}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              style={{
                objectPosition: item.id === 1 ? 'center' : 
                               item.id === 2 ? '70% ' :
                               item.id === 3 ? '45%' :
                               item.id === 4 ? 'center' :
                               item.id === 5 ? '50% 5%' :
                               item.id === 6 ? '20%' :
                               item.id === 7 ? '60%' :
                               item.id === 8 ? '100%' : 'center' 
              }}
              onError={e => (e.currentTarget.style.display = 'none')}
            />
            <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="border-2 border-white px-3 py-2 flex items-center justify-center">
                <h3 className="text-white font-bebas text-[clamp(16px,2vw,30px)] leading-none tracking-wider text-center mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}