'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent py-16">
            <motion.p 
                className="font-goldplay font-bold text-white text-lg md:text-[19.94px] max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px]" 
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Em um cenário urbano dinâmico, o Front Light se destaca como um ponto fixo de atenção.<br/>
                Ele acompanha o ritmo da cidade, impactando motoristas e pedestres diariamente,
                reforçando mensagens com constância e alcance qualificado.
            </motion.p>
            <div className="py-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Alta visibilidade que transforma circulação<br/>em lembrança de marca.
                </GradientText>
            </div>

            <motion.p 
                className="font-goldplay font-bold text-white text-lg md:text-[19.94px] max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px]" 
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Ao permanecer ativo dia e noite, o Front Light amplia o tempo de exposição da campanha, fortalecendo a memorização e o reconhecimento da marca no cotidiano urbano.
            </motion.p>
        </div>
    );
} 
