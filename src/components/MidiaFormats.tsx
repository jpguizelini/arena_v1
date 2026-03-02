'use client'

import { useEffect, useState } from 'react'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const BUCKET = 'arena-fotos'

function getSupabaseUrl(fileName: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${fileName}.jpg`
}

export default function FormatosMidia() {
    const [selected, setSelected] = useState<{ img: string; title: string } | null>(null)
    const [formatos, setFormatos] = useState([
        { img: getSupabaseUrl('foto-formato-midia-1'), title: "OUTDOOR" },
        { img: getSupabaseUrl('foto-formato-midia-2'), title: "FRONT LIGHT" },
        { img: getSupabaseUrl('foto-formato-midia-3'), title: "RODOVIA" },
        { img: getSupabaseUrl('foto-formato-midia-4'), title: "MOBILIÁRIO URBANO" },
        { img: getSupabaseUrl('foto-formato-midia-5'), title: "PAINEL DIGITAL" },
        { img: getSupabaseUrl('foto-formato-midia-6'), title: "MEGA PAINEL" },
        { img: getSupabaseUrl('foto-formato-midia-7'), title: "MEGA LIGHT" },
        { img: getSupabaseUrl('foto-formato-midia-8'), title: "BANCA 3D" },
    ])

    // Força atualização das imagens a cada 5 segundos para pegar mudanças do Supabase
    useEffect(() => {
        const updateImages = () => {
            const timestamp = Date.now()
            setFormatos([
                { img: getSupabaseUrl('foto-formato-midia-1') + `?t=${timestamp}`, title: "OUTDOOR" },
                { img: getSupabaseUrl('foto-formato-midia-2') + `?t=${timestamp}`, title: "FRONT LIGHT" },
                { img: getSupabaseUrl('foto-formato-midia-3') + `?t=${timestamp}`, title: "RODOVIA" },
                { img: getSupabaseUrl('foto-formato-midia-4') + `?t=${timestamp}`, title: "MOBILIÁRIO URBANO" },
                { img: getSupabaseUrl('foto-formato-midia-5') + `?t=${timestamp}`, title: "PAINEL DIGITAL" },
                { img: getSupabaseUrl('foto-formato-midia-6') + `?t=${timestamp}`, title: "MEGA PAINEL" },
                { img: getSupabaseUrl('foto-formato-midia-7') + `?t=${timestamp}`, title: "MEGA LIGHT" },
                { img: getSupabaseUrl('foto-formato-midia-8') + `?t=${timestamp}`, title: "BANCA 3D" },
            ])
        }

        // Atualiza a cada 5 segundos
        const interval = setInterval(updateImages, 5000)
        
        // Atualização inicial
        updateImages()
        
        // Atualiza quando a página ganha foco (usuário volta da aba admin)
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                updateImages()
            }
        }
        
        const handleFocus = () => {
            updateImages()
        }

        // Listener para evento customizado do admin
        const handleMidiaImageUpdated = (event: any) => {
            const { fotoId, timestamp } = event.detail
            
            const fotoIndex = parseInt(fotoId.replace('foto-formato-midia-', '')) - 1
            
            setFormatos(prev => prev.map((formato, index) => {
                if (index === fotoIndex) {
                    const newImg = getSupabaseUrl(fotoId) + `?t=${timestamp}`
                    return {
                        ...formato,
                        img: newImg
                    }
                }
                return formato
            }))
        }

        // Listener para localStorage (entre abas)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'midiaImageUpdate' && e.newValue) {
                const data = JSON.parse(e.newValue)
                
                const fotoIndex = parseInt(data.fotoId.replace('foto-formato-midia-', '')) - 1
                
                setFormatos(prev => prev.map((formato, index) => {
                    if (index === fotoIndex) {
                        const newImg = data.url + `?t=${data.timestamp}`
                        return {
                            ...formato,
                            img: newImg
                        }
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
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="
            text-[40px] sm:text-[60px] md:text-[83.04px] 
            font-bebas
            font-bold 
            mt-[122px]
            pb-[-10px]
            bg-gradient-to-r 
            from-[#c3d33f] 
            to-[#079c9e]
            bg-clip-text
            text-transparent uppercase text-center">Nossos Formatos de Mídia</h1>

            <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {formatos.map((formato, index) => (
                    <div
                        key={index}
                        className="relative w-[271.25px] h-[297px] overflow-hidden group cursor-pointer"
                        onClick={() => setSelected(formato)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setSelected(formato)
                        }}
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
                    </div>
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
        </div>
    )
}