'use client'

import GradientText from "@/components/ui/GradientText";
import Card3D from "@/components/ui/Card3D";
import GradientBorderCard from "@/components/shared/GradientBorderCard";
import { motion } from 'framer-motion';

export default function Cobertura() {
    return (
        <section className="w-full py-16 lg:py-20">

            <GradientText size="text-[65px] 2xl:text-[80px]">
                Cobertura
            </GradientText>

            <Card3D
                className="group relative mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-6"
                glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0"
            >
                <GradientBorderCard
                    className="bg-black rounded-xl transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]"
                    innerClassName="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 text-center"
                >

                    <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h2
                            className="font-goldplay font-bold uppercase
                                text-transparent bg-clip-text
                                text-white
                                text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 2xl:text-[52px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Consulte nossos planos.
                        </motion.h2>
                    </motion.div>

                </GradientBorderCard>
            </Card3D>

        </section>
    )
}