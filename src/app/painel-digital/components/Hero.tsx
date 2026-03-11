'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

export default function Hero() {
    return (
        <ParallaxBanner
            imageSrc="/images/painel-digital/banner.jpg"
            imageAlt="Painel Digital"
            overlay="bg-black/5"
            objectPosition="80% 50%"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <GradientText size="text-[60px] sm:text-[80px] md:text-[100px] mt-8">
                    PAINEL DIGITAL
                </GradientText>
            </motion.div>

            <motion.p
                className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                O Painel Digital representa a evolução da mídia OOH e DOOH,
                unindo
                <strong>tecnologia, dinamismo e alta definição.</strong>
                Com conteúdos em movimento, ele potencializa a atenção e a flexibilidade das campanhas.
            </motion.p>
        </ParallaxBanner>
    )
}