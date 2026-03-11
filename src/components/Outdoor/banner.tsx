'use client'

import { motion } from 'framer-motion';
import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';

export default function Banner() {
  return (
    <ParallaxBanner 
      imageSrc="/images/outdoor/banner.png" 
      imageAlt="butdoorbrasolaia" 
      overlay="bg-black/30"
      objectPosition="80% 30%"
    >
      <GradientText
        from="#c3d33f"
        via="#079c9e"
        to="#c3d33f"
        size="text-[60px] sm:text-[80px] md:text-[100px]"
        className="font-bold leading-none"
      >
        OUTDOOR
      </GradientText>

      <motion.p
        className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 leading-relaxed"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Presente nas principais vias e pontos estratégicos das cidades, o outdoor é um dos formatos mais tradicionais e eficazes da mídia OOH e DOOH. Com alta visibilidade e grande alcance, ele impacta milhares de pessoas todos os dias, garantindo exposição constante e reforço de marca para diferentes públicos.
      </motion.p>
    </ParallaxBanner>
  );
}