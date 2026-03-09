'use client'

import GradientText from "@/components/ui/GradientText";
import Card3D from "@/components/ui/Card3D";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';


export default function Cobertura() {
    return (
        <section className="py-20 ">
            <GradientText size="text-[65px]">
                Cobertura
            </GradientText>
            <Card3D
                className="group relative mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-6"
                glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0"
            >
                <div className="relative px-2 sm:px-6 md:px-2 lg:px-4 py-2 text-center bg-black rounded-xl transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                    {/* Borda SVG - sempre acompanha o tamanho do container */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="mappingBorderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#c3d33f" />
                                <stop offset="100%" stopColor="#079c9e" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="1" y="1"
                            width="99%" height="99%"
                            rx="12" ry="12"
                            fill="none"
                            stroke="url(#mappingBorderGradient)"
                            strokeWidth="3"
                            strokeDasharray="2 8"
                            strokeLinecap="round"
                        />
                    </svg>

                    <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="
                            text-[40px] sm:text-[55px] md:text-[70px] lg:text-[33px]
                            font-goldplay
                            font-bold                           
                            text-white
                            bg-clip-text
                            text-transparent uppercase"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >Consulte nossos planos.</motion.h1>
                    </motion.div>
                </div>
            </Card3D>
        </section>
    )
}