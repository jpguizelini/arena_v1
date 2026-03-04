'use client'

import { motion } from 'framer-motion';
import ParallaxBanner from '@/components/ui/ParallaxBanner';

export default function Banner() {
  return (
    <ParallaxBanner imageSrc="/images/outdoor/bras-olaia.png" imageAlt="butdoorbrasolaia">
      <motion.h1
        className="font-bebas font-bold text-[60px] sm:text-[80px] md:text-[100px] leading-none bg-gradient-to-b from-[#079c9e] to-[#c3d33f] bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        OUTDOOR
      </motion.h1>

      <motion.p
        className="font-goldplay text-white text-[14px] sm:text-[16px] md:text-[19.94px] text-center max-w-[700px] mt-2 sm:mt-3 md:mt-4 leading-relaxed break-words cursor-default"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Presente nas principais vias e pontos estratégicos das cidades, o outdoor é um dos formatos mais tradicionais e eficazes da mídia OOH e DOOH. Com alta visibilidade e grande alcance, ele impacta milhares de pessoas todos os dias, garantindo exposição constante e reforço de marca para diferentes públicos.
      </motion.p>
    </ParallaxBanner>
  );
}