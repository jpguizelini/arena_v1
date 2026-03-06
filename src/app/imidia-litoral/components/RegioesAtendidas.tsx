'use client'

import GradientText from '@/components/ui/GradientText';
import { motion } from 'framer-motion';

export default function RegioesAtendidas() {
    return (
        <div className="pt-[80px]">
            <GradientText
                size="text-[65px]"
            >
                SANTOS - GUARUJÁ - PRAIA GRANDE - São Vicente
            </GradientText>

            <motion.p 
                className="font-goldplay text-white text-lg md:text-[24px] max-w-[832px] mx-auto text-center pb-[100px] pt-[50px] break-words"
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Estamos presente <b>nos principais corredores de tráfego do litoral</b>,
                conectando marcas com públicos variados -  <b>moradores, visitantes e
                consumidores</b> — que vivem e circulam ativamente nas praias e centros urbanos.
            </motion.p>
        </div>
    )
}