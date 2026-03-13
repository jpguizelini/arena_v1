'use client'

import { motion } from 'framer-motion'
import TextWhitImage from "@/components/TextWhitImage";
import { fadeUp, vp } from '@/lib/animations'

export default function LiveLedDestaque() {
    const title = "LIVE LED REPRESENTA O ";
    const gradientText = "QUE HÁ DE MAIS AVANÇADO";
    const titleSuffix = "\nEM PAINÉIS DIGITAIS NO NOSSO PORTIFÓLIO";

    const description = (
        <ul className="space-y-4">
            <li>· Alta definição e brilho superior, garantindo visibilidade mesmo sob luz natural intensa.</li>
            <li>· Atualização de conteúdo em tempo real, ideal para campanhas dinâmicas e sazonais.</li>
            <li>· Flexibilidade criativa, incluindo animações, vídeos e chamadas interativas.</li>
            <li>· Resistência e performance, operando com confiabilidade em ambientes urbanos.</li>
        </ul>
    );

    return (
        <section className="w-full flex flex-col">

            {/* Linha principal: texto + imagem */}
            <motion.div
                className="flex flex-col lg:flex-row mt-5 lg:mt-10 2xl:mt-20 min-h-[500px] lg:min-h-[700px] 2xl:min-h-[838px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                <TextWhitImage 
                    title={title}
                    gradientText={gradientText}
                    titleSuffix={titleSuffix}
                    description={description}
                    imgSrc="/images/live-led/imagem-lateral.jpg"
                />
            </motion.div>

            {/* Parágrafo inferior */}
            <motion.div 
                className="px-4 sm:px-8 xl:px-40 2xl:px-64  pb-10"
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