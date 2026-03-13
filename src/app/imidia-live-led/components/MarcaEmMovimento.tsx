'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { stagger, fadeLeft, fadeRight, fadeUp, vp } from '@/lib/animations'

export default function MarcaEmMovimento() {
    return (
        <motion.section
            className="flex flex-col mx-4"
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
        >
            <div className="relative z-10 w-full max-w-[1920px] mx-auto mt-[-6px] flex flex-row items-start px-6 lg:px-10 2xl:px-30 ">
                <motion.div
                    variants={fadeLeft}
                    className="w-1/2 md:w-2/5 lg:w-[433px] 2xl:w-[500px]  lg:mt-[-20px] shrink-0"
                >
                    <Image
                        src="/images/live-led/robo-1.png"
                        alt="Robô"
                        width={433}
                        height={581}
                        className="w-full h-auto"
                    />
                </motion.div>
                <motion.div variants={fadeRight}>
                    <motion.h2 
                        className="text-white text-5xl sm:text-6xl lg:text-[77px] xl:text-8xl 2xl:text-9xl lg:pt-10 font-bold font-bebas leading-none text-right mt-4 2xl:ml-0"
                        variants={fadeRight}
                    >
                        POTÊNCIA PARA SUA MARCA EM MOVIMENTO
                    </motion.h2>
                    <motion.p 
                        className="text-white text-right hidden sm:block sm:text-2xl lg:text-[32px] 2xl:text-4xl max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl lg:mt-6 ml-auto"
                        variants={fadeUp}
                    >
                        Com tecnologia DOOH (Digital Out Of Home), esses painéis 
                        <strong> oferecem soluções que vão além da mídia tradicional</strong>, 
                        entregando comunicação dinâmica, atualizável e com alta performance visual.
                    </motion.p>
                </motion.div>
            </div>

            <motion.p 
                className="text-white text-center text-base md:text-lg sm:hidden"
                variants={fadeUp}
            >
                Com tecnologia DOOH (Digital Out Of Home), esses painéis
                <strong> oferecem soluções que vão além da mídia tradicional</strong>,
                entregando comunicação dinâmica, atualizável e com alta performance visual.
            </motion.p>
        </motion.section>
    )
}