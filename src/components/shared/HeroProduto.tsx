'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

interface HeroProdutoProps {
  imageSrc: string
  imageAlt: string
  titulo: string
  descricao: React.ReactNode
  overlay?: string
  objectPosition?: string
  tituloClassName?: string
}

export default function HeroProduto({
  imageSrc,
  imageAlt,
  titulo,
  descricao,
  overlay = 'bg-black/30',
  objectPosition = '80% 50%',
  tituloClassName = 'text-[60px] sm:text-[80px] md:text-[100px] mt-8',
}: HeroProdutoProps) {
  return (
    <ParallaxBanner
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      overlay={overlay}
      objectPosition={objectPosition}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <GradientText size={tituloClassName}>
          {titulo}
        </GradientText>
      </motion.div>

      <motion.p
        className="text-white font-goldplay text-center max-w-4xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 leading-relaxed"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {descricao}
      </motion.p>
    </ParallaxBanner>
  )
}
