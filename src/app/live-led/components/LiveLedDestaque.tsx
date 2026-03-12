'use client'

import GradientText from "@/components/ui/GradientText"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LiveLedDestaque() {
    return (
        <section className="w-full flex flex-col">

            {/* Linha principal: texto + imagem */}
            <div className="flex flex-col lg:flex-row min-h-[420px] lg:min-h-[560px]">

                {/* Bloco de texto */}
                <div className="text-white px-4 sm:px-8 lg:pl-[70px] lg:pr-10 lg:max-w-[55%] flex flex-col justify-center py-12 lg:py-16 gap-6">
                    <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-tight">
                        LIVE LED REPRESENTA O
                        <GradientText
                            size="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]"
                            position="text-left"
                        >
                            QUE HÁ DE MAIS AVANÇADO
                        </GradientText>
                        EM PAINÉIS DIGITAIS NO NOSSO PORTFÓLIO
                    </h2>

                    <ul className="font-goldplay text-sm sm:text-base lg:text-lg text-white/85 space-y-3">
                        {[
                            'Alta definição e brilho superior, garantindo visibilidade mesmo sob luz natural intensa.',
                            'Atualização de conteúdo em tempo real, ideal para campanhas dinâmicas e sazonais.',
                            'Flexibilidade criativa, incluindo animações, vídeos e chamadas interativas.',
                            'Resistência e performance, operando com confiabilidade em ambientes urbanos.',
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                                <span className="text-accent mt-0.5 shrink-0">·</span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Imagem lateral */}
                <div className="w-full h-[280px] lg:h-auto lg:flex-1 relative overflow-hidden">
                    <Image
                        src="/images/live-led/imagem-lateral.jpg"
                        alt="Live LED em ação"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            {/* Parágrafo inferior */}
            <div className="px-4 sm:px-8 lg:px-16 xl:px-32 py-12 lg:py-16">
                <p className="text-white/90 font-goldplay text-base sm:text-lg lg:text-xl text-center leading-relaxed max-w-3xl mx-auto">
                    Os painéis Live LED{" "}
                    <strong>transformam qualquer espaço urbano em uma plataforma de comunicação digital</strong>,
                    conectando públicos reais à sua mensagem com grande eficiência.
                </p>
            </div>

        </section>
    )
}
