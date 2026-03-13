'use client'

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import { stagger, fadeUp, scaleFade, vp } from '@/lib/animations';

export default function Description() {
    return (
        <motion.div
            className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
        >
            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                variants={fadeUp}
            >
                Sua presença marcante cria pontos de referência visuais nas cidades,<br/>
                sendo altamente eficiente para campanhas institucionais, lançamentos<br/>
                e ações de fortalecimento de marca.
            </motion.p>

            <motion.div className="mb-12" variants={scaleFade}>
                <GradientText 
                    from="#c3d33f" 
                    via="#079c9e" 
                    to="#c3d33f" 
                    className="text-center"
                    animated={false}
                    variants={scaleFade}
                >
                    Quando o tamanho da mensagem precisa<br/>
                    acompanhar a força da marca.
                </GradientText>
            </motion.div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                variants={fadeUp}
            >
                Mais do que visibilidade, o Mega Light entrega autoridade, presença<br/>
                e impacto contínuo em regiões de grande circulação.
            </motion.p>
        </motion.div>
    );
}