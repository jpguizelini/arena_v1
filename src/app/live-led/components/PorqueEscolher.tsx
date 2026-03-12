'use client'

import GradientText from "@/components/ui/GradientText"
import Image from "next/image"
import { motion } from "framer-motion"

const motivos = [
    'Conteúdo atualizado com agilidade e relevância.',
    'Impacto visual que chama atenção e prende o olhar.',
    'Ideal para campanhas promocionais, institucionais e sazonais.',
    'Exposição contínua em pontos estratégicos.',
    'Integração com estratégias digitais e marketing omnichannel.',
]

export default function PorqueEscolher() {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-0 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">

                {/* Texto */}
                <div className="w-full lg:pl-[70px] lg:max-w-[55%] flex flex-col gap-5">
                    <GradientText
                        size="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]"
                        position="text-left"
                    >
                        PORQUE ESCOLHER A I'MÍDIA
                    </GradientText>

                    <ul className="font-goldplay text-sm sm:text-base lg:text-lg text-white/85 space-y-3">
                        {motivos.map((item, i) => (
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

                {/* Robô */}
                <div className="w-[200px] sm:w-[260px] lg:w-[320px] shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/images/live-led/robo-2.png"
                        alt="Live LED Robô"
                        width={320}
                        height={476}
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </section>
    )
}
