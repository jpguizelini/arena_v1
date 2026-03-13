'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import { stagger, fadeUp, scaleFade, vp } from '@/lib/animations';

export default function Description() {
    return (
        <motion.div
            className="bg-transparent py-16"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
        >
            <motion.p 
                className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]" 
                variants={fadeUp}
            >
                Com dois planos de comunicação integrados, o formato potencializa a leitura da
                mensagem e reforça o contato com o público em diferentes ângulos e fluxos.
            </motion.p>
            <motion.div className="pt-3 px-4 sm:px-8 md:px-16 lg:px-[60px]" variants={scaleFade}>
                <GradientText 
                    from="#c3d33f" 
                    via="#079c9e" 
                    to="#c3d33f" 
                    className="text-center"
                    animated={false}
                    variants={scaleFade}
                >
                    MAIS PRESENÇA. MAIS IMPACTO. EM DOSE DUPLA.
                </GradientText>
            </motion.div>

            <motion.p 
                className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]"
                variants={fadeUp}
            >
                Ideal para campanhas que buscam reforço visual,<br/>
                repetição estratégica e maior lembrança de marca.
            </motion.p>
        </motion.div>
    );
} 
