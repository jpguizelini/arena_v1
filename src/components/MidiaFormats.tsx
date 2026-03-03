'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const BUCKET = 'arena-fotos'

function getSupabaseUrl(fileName: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${fileName}.jpg`
}

export default function FormatosMidia() {
    const [formatos, setFormatos] = useState([
        { img: getSupabaseUrl('foto-formato-midia-1'), title: "OUTDOOR", href: "/outdoor" },
        { img: getSupabaseUrl('foto-formato-midia-2'), title: "FRONT LIGHT", href: "/frontlight" },
        { img: getSupabaseUrl('foto-formato-midia-3'), title: "RODOVIA", href: "/rodovia" },
        { img: getSupabaseUrl('foto-formato-midia-4'), title: "MOBILIARIO URBANO", href: "/mobiliario-urbano" },
        { img: getSupabaseUrl('foto-formato-midia-5'), title: "PAINEL DIGITAL", href: "/painel-digital" },
        { img: getSupabaseUrl('foto-formato-midia-6'), title: "MEGA PAINEL", href: "/mega-painel" },
        { img: getSupabaseUrl('foto-formato-midia-7'), title: "MEGA LIGHT", href: "/mega-light" },
        { img: getSupabaseUrl('foto-formato-midia-8'), title: "BANCA 3D", href: "/banca-3d" },
    ])

    useEffect(() => {
        const updateImages = () => {
            const timestamp = Date.now()
            setFormatos(prev => prev.map((formato, index) => ({
                ...formato,
                img: getSupabaseUrl('foto-formato-midia-' + (index + 1)) + '?t=' + timestamp,
            })))
        }

        const interval = setInterval(updateImages, 5000)
        updateImages()

        const handleVisibilityChange = () => {
            if (!document.hidden) updateImages()
        }

        const handleFocus = () => updateImages()

        const handleMidiaImageUpdated = (event: any) => {
            const { fotoId, timestamp } = event.detail
            const fotoIndex = parseInt(fotoId.replace('foto-formato-midia-', '')) - 1
            setFormatos(prev => prev.map((formato, index) => {
                if (index === fotoIndex) {
                    return { ...formato, img: getSupabaseUrl(fotoId) + '?t=' + timestamp }
                }
                return formato
            }))
        }

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'midiaImageUpdate' && e.newValue) {
                const data = JSON.parse(e.newValue)
                const fotoIndex = parseInt(data.fotoId.replace('foto-formato-midia-', '')) - 1
                setFormatos(prev => prev.map((formato, index) => {
                    if (index === fotoIndex) {
                        return { ...formato, img: data.url + '?t=' + data.timestamp }
                    }
                    return formato
                }))
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        window.addEventListener('focus', handleFocus)
        window.addEventListener('midiaImageUpdated', handleMidiaImageUpdated as EventListener)
        window.addEventListener('storage', handleStorageChange)

        return () => {
            clearInterval(interval)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            window.removeEventListener('focus', handleFocus)
            window.removeEventListener('midiaImageUpdated', handleMidiaImageUpdated as EventListener)
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.h1 
                className="text-[40px] sm:text-[60px] md:text-[83.04px] font-bebas font-bold mt-[122px] pb-[-10px] bg-linear-to-r from-[#c3d33f] to-[#079c9e] bg-clip-text text-transparent uppercase text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Nossos Formatos de Midia
            </motion.h1>

            <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {formatos.map((formato, index) => (
                    <Link
                        key={index}
                        href={formato.href}
                        className="relative w-[271.25px] h-[297px] overflow-hidden group"
                    >
                        <img
                            src={formato.img}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={e => (e.currentTarget.style.display = 'none')}
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
                ))}
            </div>
        </div>
    )
}