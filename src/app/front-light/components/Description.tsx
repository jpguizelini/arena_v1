'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <motion.p
                className="font-goldplay font-bold text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Em um cenário urbano dinâmico, o Front Light se destaca como um ponto fixo de atenção.<br/>
                Ele acompanha o ritmo da cidade, impactando motoristas e pedestres diariamente,
                reforçando mensagens com constância e alcance qualificado.
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Alta visibilidade que transforma circulação<br/>em lembrança de marca.
                </GradientText>
            </div>

            <motion.p
                className="font-goldplay font-bold text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Ao permanecer ativo dia e noite, o Front Light amplia o tempo de exposição da campanha,
                fortalecendo a memorização e o reconhecimento da marca no cotidiano urbano.
            </motion.p>
        </div>
    );
}