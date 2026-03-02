'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {
    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0">
            <Image
                src="/images/outdoor/bras olaia.png"
                alt="Outdoor Brasólaia"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto md:h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain"
                priority
            />

            <div className="absolute inset-0 bg-black/55" />

            <motion.div 
                className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <motion.h1 
                    className="
                        font-bebas
                        font-bold
                        text-[60px] sm:text-[80px] md:text-[100px]
                        leading-none
                        bg-gradient-to-b
                        from-[#079c9e]
                        to-[#c3d33f]
                        bg-clip-text
                        text-transparent
                    "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    OUTDOOR
                </motion.h1>

                <motion.p 
                    className="font-goldplay text-white text-[14px] sm:text-[16px] md:text-[19.94px] text-center max-w-[700px] mt-2 sm:mt-3 md:mt-4 leading-relaxed break-words"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Presente nas principais vias e pontos estratégicos das cidades, o outdoor é um dos formatos mais tradicionais e eficazes da mídia OOH e DOOH. Com alta visibilidade e grande alcance, ele impacta milhares de pessoas todos os dias, garantindo exposição constante e reforço de marca para diferentes públicos.
                </motion.p>
            </motion.div>
        </div>
    );
}