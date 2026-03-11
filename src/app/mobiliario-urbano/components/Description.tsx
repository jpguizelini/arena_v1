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
                Dentro dessa categoria, a I'mídia Painéis oferece soluções versáteis e diferenciadas<br/>
                para atender às demandas de cada campanha — seja com comunicação<br/>
                gráfica que chama atenção no momento da circulação, seja com soluções<br/>
                digitais dinâmicas <strong>que capturam olhares com movimento e brilho.</strong>
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    PRINCIPAIS FORMATOS DISPONÍVEIS:
                </GradientText>
            </div>

            <motion.h2
                className="font-bebas text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                MOBILIÁRIO URBANO ESTÁTICO
            </motion.h2>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.0 }}
            >
                Presença tradicional em pontos de parada e circulação.
            </motion.p>

            <motion.h2
                className="font-bebas text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                MOBILIÁRIO URBANO DIGITAL
            </motion.h2>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                Tecnologia que entrega mensagens dinâmicas com alto brilho e definição.
            </motion.p>

            <motion.h2
                className="font-bebas text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.6 }}
            >
                DUO MUB
            </motion.h2>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                Formato inovador que amplia as possibilidades de exposição<br/>
                urbana, combinando presença física com leitura de impacto e versatilidade criativa.
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    A COMUNICAÇÃO QUE FAZ PARTE DA CIDADE.
                </GradientText>
            </div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 2.0 }}
            >
                Mais do que anunciar, o mobiliário urbano insere a marca<br/>
                no cotidiano, gerando presença constante e natural.
            </motion.p>
        </div>
    );
}