'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Sua escala amplia o alcance da mensagem e posiciona a marca com força,<br/>
                autoridade e destaque nas principais vias urbanas.
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Quando a visibilidade precisa ser inegável...
                </GradientText>
            </div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                O Mega Painel transforma localização estratégica em protagonismo para a marca.
            </motion.p>
        </div>
    );
}