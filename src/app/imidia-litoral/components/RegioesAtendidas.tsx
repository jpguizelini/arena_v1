'use client'

import GradientText from '@/components/ui/GradientText';
import { motion } from 'framer-motion';
import { scaleFade, fadeUp, vp } from '@/lib/animations';

export default function RegioesAtendidas() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <motion.div className="mb-12" variants={scaleFade} initial="hidden" whileInView="show" viewport={vp}>
                <GradientText 
                    size="text-[60px] sm:text-[65px]"
                    animated={false}
                    variants={scaleFade}
                >
                    SANTOS - GUARUJÁ - PRAIA GRANDE - São Vicente
                </GradientText>
            </motion.div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                Estamos presente <b>nos principais corredores de tráfego do litoral</b>,
                conectando marcas com públicos variados — <b>moradores, visitantes e
                consumidores</b> — que vivem e circulam ativamente nas praias e centros urbanos.
            </motion.p>
        </div>
    )
}