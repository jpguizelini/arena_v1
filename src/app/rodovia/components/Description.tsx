'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent py-16">
            <motion.p 
                className="font-goldplay  text-white text-lg md:text-[19.94px] max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] pb-2" 
                style={{lineHeight: '24.55pt', letterSpacing: '-0.025em'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Rodovias conectam cidades, pessoas e oportunidades. Anunciar nesse ambiente
                significa estar presente em momentos-chave de deslocamento,
                ampliando alcance e frequência de impacto.
            </motion.p>
            <div className="py-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    Sua marca acompanhando quem está em movimento.
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
                A exposição prolongada em trajetos recorrentes fortalece a lembrança
                da marca e amplia o alcance regional das campanhas.
            </motion.p>
        </div>
    );
} 
