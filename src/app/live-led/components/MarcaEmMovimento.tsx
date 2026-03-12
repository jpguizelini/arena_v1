'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function MarcaEmMovimento() {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-[70px] py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                {/* Robô */}
                <div className="w-[180px] sm:w-[220px] lg:w-[280px] shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/images/live-led/robo-1.png"
                        alt="Robô Live LED"
                        width={280}
                        height={376}
                        className="w-full h-auto"
                    />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-4 text-center lg:text-right">
                    <motion.h2
                        className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-bebas leading-tight"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        POTÊNCIA PARA SUA MARCA EM MOVIMENTO
                    </motion.h2>

                    <motion.p
                        className="text-white/85 font-goldplay text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:ml-auto lg:mr-0"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        Com tecnologia DOOH (Digital Out Of Home), esses painéis
                        <strong> oferecem soluções que vão além da mídia tradicional</strong>,
                        entregando comunicação dinâmica, atualizável e com alta performance visual.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
