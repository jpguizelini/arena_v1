'use client'

import Image from "next/image"
import GradientText from "@/components/ui/GradientText"
import { motion } from "framer-motion"

export default function Banner() {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] max-h-[700px] grid grid-cols-2 overflow-hidden">
            <div className="relative">
                <Image 
                    src="/images/formatos/banner-1.jpg" 
                    alt="Formatos de Mídia" 
                    fill 
                    priority
                    className="object-cover object-[80%_center]"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative">
                <Image 
                    src="/images/formatos/banner-2.jpg" 
                    alt="Formatos de Mídia" 
                    fill 
                    priority
                    className="object-cover object-[10%_center]"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-[44px] px-4 text-center col-span-2">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <GradientText size="text-[60px] sm:text-[80px] md:text-[100px]">
                        Formatos Iconicos
                    </GradientText>
                </motion.div>
                <motion.p 
                    className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4"
                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Os formatos icônicos são soluções especiais da I'mídia Painéis que vão além
                    da mídia tradicional: eles combinam tecnologia, design e impacto visual diferenciado
                    para campanhas que buscam destaque máximo nas ruas das cidades.
                </motion.p>
            </div>
        </section>
    )
}