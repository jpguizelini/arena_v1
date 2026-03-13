'use client'

import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';

export default function OutdoorDescription() {
    return (
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Em um país como o Brasil, onde o ritmo da vida urbana é frenético e as pessoas<br className="hidden lg:inline" /> estão em constante movimento, os outdoors têm um papel crucial na comunicação<br className="hidden md:inline" /> das marcas. Eles estão presentes nas principais avenidas, rodovias e centros urbanos,<br className="hidden md:inline" /> criando uma conexão direta com o público que transita por esses locais diariamente.
            </motion.p>

            <div className="mb-12">
                <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
                    A ALTA VISIBILIDADE DESSES PAINÉIS TRANSFORMA O OUTDOOR EM UM<br className="hidden lg:inline" />PONTO DE CONTATO QUASE INEVITÁVEL PARA QUEM CIRCULA PELA CIDADE.
                </GradientText>
            </div>

            <motion.p
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight max-w-4xl lg:max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Assim como as pessoas absorvem rapidamente os anúncios enquanto estão na<br className="hidden lg:inline" />rua ou no carro, os outdoors oferecem uma exposição prolongada, criando uma<br className="hidden md:inline" />oportunidade única para campanhas com alta frequência e impacto constante.<br className="hidden md:inline" />Isso não é só visibilidade — é memorização de marca.
            </motion.p>
        </div>
    );
}