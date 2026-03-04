'use client';

import { motion } from 'framer-motion';
import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';

export default function ImidiaPaineis() {
  return (
    <div>
        <ParallaxBanner imageSrc="/images/outdoor/bras olaia.png" imageAlt="Outdoor Brasólaia" />
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
          <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="mb-0">
            a maior em número de cidades no interior <br></br>
            e a melhor em versatilidades de ativos.
          </GradientText>
        </div>
        <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="mb-0">
          nossa cobertura
        </GradientText>
        <h2 className="text-white text-[20px] sm:text-[24px] md:text-[19.94px] flex items-center justify-center">
          Confira nossas cidades de autação:
        </h2>
    </div>
  )
}