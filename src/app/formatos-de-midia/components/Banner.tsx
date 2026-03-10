'use client'

import Image from "next/image"
import GradientText from "@/components/ui/GradientText"
import { motion } from "framer-motion"


export default function Banner() {
    return (
        <section className="relative w-full h-[600px] lg:aspect-15/7 grid grid-cols-2">
            <div className="relative">
                <Image 
                    src="/images/formatos/banner-1.jpg" 
                    alt="Formatos de Mídia" 
                    fill 
                    priority
                    className="object-cover md:object-center object-[60%_center]"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative">
                <Image 
                    src="/images/formatos/banner-2.jpg" 
                    alt="Formatos de Mídia" 
                    fill 
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center col-span-2">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <GradientText 
                        size="text-4xl lg:text-7xl"
                    >
                        Formatos Iconicos
                    </GradientText>
                </motion.div>
                <motion.p 
                    className="text-white font-goldplay text-center max-w-2xl lg:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Os formatos icônicos são soluções especiais da I’mídia Painéis que vão além
                    da mídia tradicional: eles combinam tecnologia, design e impacto visual diferenciado
                    para campanhas que buscam destaque máximo nas ruas das cidades.
                </motion.p>
            </div>
        </section>
    )
}
