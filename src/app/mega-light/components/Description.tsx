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
                Sua presença marcante cria pontos de referência visuais nas cidades,<br/>
                sendo altamente eficiente para campanhas institucionais, lançamentos<br/>
                e ações de fortalecimento de marca.
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Quando o tamanho da mensagem precisa<br/>
                    acompanhar a força da marca.
                </GradientText>
            </div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Mais do que visibilidade, o Mega Light entrega autoridade, presença<br/>
                e impacto contínuo em regiões de grande circulação.
            </motion.p>
        </div>
    );
}