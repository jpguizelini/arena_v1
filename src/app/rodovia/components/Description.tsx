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
                Rodovias conectam cidades, pessoas e oportunidades. Anunciar nesse ambiente
                significa estar presente em momentos-chave de deslocamento,
                ampliando alcance e frequência de impacto.
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
                    Sua marca acompanhando quem está em movimento.
                </GradientText>
            </motion.div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                variants={fadeUp}
            >
                A exposição prolongada em trajetos recorrentes fortalece a lembrança
                da marca e amplia o alcance regional das campanhas.
            </motion.p>
        </motion.div>
    );
}