'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

export default function Banner() {
    return (
        <ParallaxBanner
            imageSrc="/images/live-led/banner.jpg"
            imageAlt="I'mídia Live LED — painéis digitais de alto impacto"
            overlay="bg-black/40"
            objectPosition="center 40%"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <GradientText size="text-[60px] sm:text-[80px] md:text-[100px] mt-8">
                    I'MÍDIA LIVE LED
                </GradientText>
            </motion.div>
            <motion.p
                className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Painéis digitais de alta definição que transformam{' '}
                <strong>qualquer espaço urbano em uma plataforma de comunicação.</strong>
            </motion.p>
        </ParallaxBanner>
    )
}