'use client'

import { motion } from 'framer-motion';
import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';

export default function Hero() {
    return (
        <ParallaxBanner
            imageSrc="/images/mobiliario-urbano/banner.jpg"
            imageAlt="Mobiliário Urbano"
            overlay="bg-black/30"
            objectPosition="80% 50%"
        >
            <GradientText
                size="text-[60px] sm:text-[80px] md:text-[100px]"
                className="font-bold"
                position="text-center"
            >
                MOBILIÁRIO URBANO
            </GradientText>

            <motion.p
                className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 leading-relaxed"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                O mobiliário urbano conecta marcas à rotina das pessoas.
                Presente em pontos de convivência, circulação e espera, ele transforma o
                espaço público em um canal direto de comunicação.
            </motion.p>
        </ParallaxBanner>
    );
}