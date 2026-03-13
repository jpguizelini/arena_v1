'use client'

import Link from "next/link"
import { motion } from "framer-motion"

const gridItems = [
  {
    id: 1,
    title: 'PAINEL FRONT LIGHT',
    image: '/images/outdoor/painel-front-light.png',
    href: '/front-light'
  },
  {
    id: 2,
    title: 'PAINEL MEGA LIGHT',
    image: '/images/outdoor/painel-mega-light.png',
    href: '/mega-light'
  },
  {
    id: 3,
    title: 'PAINEL DE RODOVIA',
    image: '/images/outdoor/painel-rodovia.png',
    href: '/rodovia'
  },
  {
    id: 4,
    title: 'PAINEL DIGITAL',
    image: '/images/outdoor/painel-digital.png',
    href: '/painel-digital'
  }
]

export default function OutdoorGrid() {
    return (
        <section className="w-full pt-16">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-center pb-[20px] px-4"
            >
                <img
                src="/images/outdoor/triangulos.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 hidden h-14 w-auto -translate-y-1/2 opacity-80 md:block"
                />

                <h2 className="font-bebas bg-linear-to-r from-accent to-cyan bg-clip-text text-[48px] sm:text-[60px] md:text-[76px] font-bold uppercase tracking-wide text-transparent">
                Outros formatos
                </h2>
            </motion.div>

            <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2">
                {gridItems.map((item) => (
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
                    sizes="50vw"
                    className={`w-full h-auto object-cover transition-all duration-300 ease-in-out ${
                        item.id === 1 ? 'scale-125' : item.id === 4 ? 'scale-150' : ''
                    } group-hover:scale-110`}
                    style={{
                        objectPosition: item.id === 1 ? '60% 35%' : item.id === 2 ? '50% 10%' : item.id === 3 ? '60% 40%' : item.id === 4 ? '50% -60%' : 'center'
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
    </section>
    )
}