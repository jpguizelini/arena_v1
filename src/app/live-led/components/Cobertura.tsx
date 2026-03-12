'use client'

import GradientText from "@/components/ui/GradientText"
import Card3D from "@/components/ui/Card3D"
import { motion } from 'framer-motion'

export default function Cobertura() {
    return (
        <section className="w-full py-12 lg:py-16">

            <GradientText size="text-4xl sm:text-5xl lg:text-[65px]">
                Cobertura
            </GradientText>

            <Card3D
                className="group relative mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-6"
                glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0"
            >
                <div className="relative px-4 sm:px-8 lg:px-12 py-8
                    text-center bg-black rounded-xl
                    transition-shadow duration-200
                    group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">

                    {/* Borda SVG gradiente */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="coverBorderGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#c3d33f" />
                                <stop offset="100%" stopColor="#079c9e" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="1" y="1"
                            width="99%" height="99%"
                            rx="12" ry="12"
                            fill="none"
                            stroke="url(#coverBorderGrad)"
                            strokeWidth="3"
                            strokeDasharray="2 8"
                            strokeLinecap="round"
                        />
                    </svg>

                    <motion.h2
                        className="relative z-10 font-goldplay font-bold uppercase text-white text-xl sm:text-2xl lg:text-3xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Consulte nossos planos.
                    </motion.h2>
                </div>
            </Card3D>

        </section>
    )
}
