'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';

export default function Description() {
    return (
        <div className="bg-transparent py-16">
            <motion.p 
                className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Com dois planos de comunicação integrados, o formato potencializa a leitura da
                mensagem e reforça o contato com o público em diferentes ângulos e fluxos.
            </motion.p>
            <div className="pt-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    MAIS PRESENÇA. MAIS IMPACTO. EM DOSE DUPLA.
                </GradientText>
            </div>


            <motion.p 
                className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.0 }}
            >
                Ideal para campanhas que buscam reforço visual,<br/>
                repetição estratégica e maior lembrança de marca.
            </motion.p>
        </div>

    );
} 
