'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'

export default function FormatosMidia() {
    const formatos = [
        { img: '/images/home/foto-formato-midia-11.jpg', title: "OUTDOOR", href: "/outdoor" },
        { img: '/images/home/foto-formato-midia-22.jpg', title: "FRONT LIGHT", href: "/front-light" },
        { img: '/images/home/foto-formato-midia-3.jpg', title: "RODOVIA", href: "/rodovia" },
        { img: '/images/home/foto-formato-midia-4.jpg', title: "MOBILIARIO URBANO", href: "/mobiliario-urbano" },
        { img: '/images/home/foto-formato-midia-5.jpg', title: "PAINEL DIGITAL", href: "/painel-digital" },
        { img: '/images/home/foto-formato-midia-6.jpg', title: "MEGA PAINEL", href: "/mega-painel" },
        { img: '/images/home/foto-formato-midia-7.jpg', title: "MEGA LIGHT", href: "/mega-light" },
        { img: '/images/home/foto-formato-midia-8.jpg', title: "BANCA 3D", href: "/banca-3d" },
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.h1
                className="text-[40px] sm:text-[60px] md:text-[73px] ld:text-[83px] lg:text-8xl font-bebas font-bold mt-[122px] pb-[-10px] bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e] bg-clip-text text-transparent uppercase text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Nossos Formatos de Midia
            </motion.h1>

            <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {formatos.map((formato, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <Link
                            href={formato.href}
                            className="relative w-[271.25px] h-[297px] overflow-hidden group block"
                        >
                            <Image
                                src={formato.img}
                                alt={formato.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                                    formato.title === "FRONT LIGHT" ? "object-right" :
                                    formato.title === "MOBILIARIO URBANO" ? "object-right" :
                                    formato.title === "PAINEL DIGITAL" ? "object-left" :
                                    formato.title === "BANCA 3D" ? "object-right" : ""
                                }`}
                            />
                            <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30"></div>

                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="border-2 border-white px-3 py-2 flex items-center justify-center">
                                    <h3 className="text-white font-bebas md:text-[30px] leading-none tracking-wider text-center mt-1">
                                        {formato.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </div>
    )
}