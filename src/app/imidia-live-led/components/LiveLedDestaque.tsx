'use client'

import { motion } from 'framer-motion'
import GradientText from "@/components/ui/GradientText";
import Image from "next/image";
import { stagger, fadeLeft, fadeRight, fadeUp, vp } from '@/lib/animations'

export default function LiveLedDestaque() {
    return (
        <section className="w-full flex flex-col">

            {/* Linha principal: texto + imagem */}
            <motion.div
                className="flex flex-col lg:flex-row mt-16 lg:mt-20 2xl:mt-40 min-h-[500px] lg:min-h-[700px] 2xl:min-h-[838px]"
                variants={stagger(0.15)}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >

                {/* Bloco de texto */}
                <motion.div variants={fadeLeft} className="text-white px-4 lg:pl-[70px] lg:pr-8 lg:max-w-[55%] flex flex-col justify-center py-10 lg:py-16">
                    <h2 className="font-bebas text-4xl sm:text-5xl lg:text-[64px] 2xl:text-7xl leading-tight">
                        LIVE LED REPRESENTA O
                        <GradientText 
                            size="text-4xl sm:text-5xl lg:text-[64px] 2xl:text-7xl" 
                            position="text-left"
                            animated={false}
                            variants={fadeUp}
                        >
                            QUE HÁ DE MAIS AVANÇADO
                        </GradientText>
                        EM PAINÉIS DIGITAIS NO NOSSO PORTIFÓLIO
                    </h2>

                    <motion.ul 
                        className="font-goldplay text-lg sm:text-xl lg:text-2xl 2xl:text-3xl
                            text-white space-y-4 mt-6 2xl:pr-12"
                        variants={stagger(0.05)}
                    >
                        {[
                            'Alta definição e brilho superior, garantindo visibilidade mesmo sob luz natural intensa.',
                            'Atualização de conteúdo em tempo real, ideal para campanhas dinâmicas e sazonais.',
                            'Flexibilidade criativa, incluindo animações, vídeos e chamadas interativas.',
                            'Resistência e performance, operando com confiabilidade em ambientes urbanos.'
                        ].map((item, i) => (
                            <motion.li key={i} variants={fadeUp}>· {item}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Imagem lateral */}
                <motion.div 
                    variants={fadeRight}
                    className="flex-1 min-h-[300px] lg:min-h-full relative overflow-hidden"
                >
                    <Image
                        src="/images/live-led/imagem-lateral.jpg"
                        alt="Painel Live LED instalado em ambiente urbano"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </motion.div>
            </motion.div>

            {/* Parágrafo inferior */}
            <motion.div 
                className="px-4 sm:px-8 xl:px-40 2xl:px-64 pt-16 lg:pt-24 pb-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                <p className="text-white text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-snug">
                    Os painéis Live Led{" "}
                    <strong>transformam qualquer espaço urbano em uma plataforma de comunicação digital</strong>,
                    conectando públicos reais à sua mensagem com grande eficiência.
                </p>
            </motion.div>

        </section>
    )
}