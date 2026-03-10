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
                Sua presença marcante cria pontos de referência visuais nas cidades,<br/>
                sendo altamente eficiente para campanhas institucionais, lançamentos<br/>
                e ações de fortalecimento de marca.
            </motion.p>
            <div className="py-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Quando o tamanho da mensagem precisa<br/>
                    acompanhar a força da marca.
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
                Mais do que visibilidade, o Mega Light entrega autoridade, presença<br/>
                e impacto contínuo em regiões de grande circulação.
            </motion.p>
        </div>
    );
} 
