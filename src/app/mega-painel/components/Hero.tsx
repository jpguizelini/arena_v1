'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

export default function Hero() {
    return (
        <ParallaxBanner
            imageSrc="/images/mega-painel/banner.jpg"
            imageAlt="Mega Painel"
            overlay="bg-black/40"
            objectPosition="80% 55%"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <GradientText size="text-[60px] sm:text-[80px] md:text-[100px] mt-8">
                    MEGA PAINEL
                </GradientText>
            </motion.div>

            <motion.p
                className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                O Mega Painel é um ativo de grande porte que entrega <strong>máximo impacto visual.</strong>{' '}
                Projetado para dominar a paisagem, ele é ideal para campanhas que
                precisam ser vistas, lembradas e reconhecidas.
            </motion.p>
        </ParallaxBanner>
    )
}