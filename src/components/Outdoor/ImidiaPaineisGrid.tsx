'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const gridItems = [
  {
    id: 1,
    title: 'OUTDOOR',
    image: '/images/paineis/outdoor3.jpg',
    href: '/outdoor'
  },
  {
    id: 2,
    title: 'PAINEL MEGA LIGHT',
    image: '/images/paineis/painel-mega-light.jpg',
    href: '/mega-light'
  },
  {
    id: 3,
    title: 'PAINEL DE FRONT LIGHT',
    image: '/images/paineis/painel-front-light.jpg',
    href: '/front-light'
  },
  {
    id: 4,
    title: 'PAINEL DE RODOVIA',
    image: '/images/paineis/painel-rodovia.jpg',
    href: '/rodovia'
  },
  {
    id: 5,
    title: 'PAINEL DIGITAL',
    image: '/images/paineis/painel-digital.jpg',
    href: '/painel-digital'
  }
]

export default function ImidiaPaineisGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-0">
        {/* Primeira linha - 2 imagens maiores */}
        {gridItems.slice(0, 2).map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative overflow-hidden transition-all duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              style={{
                objectPosition: item.id === 1 ? '60% 35%' : item.id === 2 ? '50% 10%' : 'center'
                              
              }}
            />

            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
              <div className="border-2 border-white/80 px-6 py-3 text-center md:px-8 md:py-4 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Segunda linha - 3 imagens menores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {gridItems.slice(2).map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative overflow-hidden transition-all duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              style={{
                objectPosition: item.id === 3 ? '50% 30%' : item.id === 4 ? '50% -60%' : 'center'
              }}
            />

            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
              <div className="border-2 border-white/80 px-4 py-2 text-center md:px-6 md:py-3 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white md:text-xl">
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
