'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent py-16">
            <motion.p 
                className="font-goldplay text-white text-lg md:text-[19.94px] max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px]" 
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                A possibilidade de alternar mensagens, explorar vídeos e adaptar conteúdos<br/>
                em tempo real torna o painel digital uma ferramenta estratégica<br/>
                para marcas que buscam inovação e relevância.
            </motion.p>
            <div className="py-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Conteúdo em movimento para cidades em constante fluxo.
                </GradientText>
            </div>

            <motion.p 
                className="font-goldplay text-white text-lg md:text-[19.94px] max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px]" 
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Mais do que visibilidade, o painel digital cria experiências visuais<br/>
                que reforçam presença, frequência e impacto.
            </motion.p>
        </div>
    );
} 
