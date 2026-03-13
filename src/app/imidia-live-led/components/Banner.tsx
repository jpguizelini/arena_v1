'use client'

import { motion } from 'framer-motion'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import GradientText from '@/components/ui/GradientText'

export default function Banner() {
    return (
        <ParallaxBanner
            imageSrc="/images/live-led/banner.jpg"
            imageAlt="I'mídia Live LED — painéis digitais de alto impacto"
            overlay="bg-black/20"
            objectPosition="center 40%"
        >
        </ParallaxBanner>
    )
}