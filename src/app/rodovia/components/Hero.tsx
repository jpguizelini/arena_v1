'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

export default function Hero() {
    return (
        <ParallaxBanner
            imageSrc="/images/rodovia/banner.jpg"
            imageAlt="Rodovia"
            overlay="bg-black/40"
            objectPosition="80% 70%"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <GradientText size="text-[60px] sm:text-[80px] md:text-[100px]">
                    RODOVIA
                </GradientText>
            </motion.div>

            <motion.p
                className="text-white font-goldplay text-center max-w-3xl lg:text-2xl mt-2 sm:mt-3 md:mt-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Os painéis rodoviários da I'mídia estão posicionados em eixos estratégicos de deslocamento,
                alcançando um público em movimento, <strong>altamente atento e exposto por longos períodos.</strong>
            </motion.p>
        </ParallaxBanner>
    )
}